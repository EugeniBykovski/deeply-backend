import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient, Language, AchievementType } from '@repo/db';
import {
  COMPLETION_THRESHOLD,
  MAIN_PATH_COUNT,
  rangeToDate,
} from './results.constants';

@Injectable()
export class ResultsService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  private normalizeLang(lang?: string): Language {
    const l = (lang ?? '').toLowerCase();
    return l.startsWith('ru') ? ('ru' as Language) : ('en' as Language);
  }
  private fallback(lang: Language): Language {
    return lang === 'ru' ? ('en' as Language) : ('ru' as Language);
  }

  private expectedSeconds(t: {
    repeats: number | null;
    steps: { durationSeconds: number }[];
  }) {
    const cycle = t.steps.reduce((acc, s) => acc + s.durationSeconds, 0);
    const repeats = t.repeats ?? 1;
    const expected = cycle * repeats;
    return expected > 0 ? expected : null;
  }

  private isValidCompleted(
    run: { completed: boolean; totalSeconds: number | null },
    expected: number | null,
  ) {
    if (!run.completed) return false;
    if (!run.totalSeconds || run.totalSeconds <= 0) return false;
    if (!expected) return true;
    return run.totalSeconds >= expected * COMPLETION_THRESHOLD;
  }

  private async ensureAchievements(
    userId: string,
    stats: {
      totalValidRuns: number;
      currentStreakDays: number;
      programMainCompletedKeys: string[];
    },
  ) {
    const upsert = async (
      type: AchievementType,
      scopeKey = 'GLOBAL',
      payload?: any,
    ) => {
      await this.prisma.userAchievement.upsert({
        where: { userId_type_scopeKey: { userId, type, scopeKey } },
        create: { userId, type, scopeKey, payload: payload ?? null },
        update: {},
      });
    };

    if (stats.totalValidRuns >= 1) await upsert('FIRST_TRAINING');
    if (stats.currentStreakDays >= 3)
      await upsert('STREAK_3', 'GLOBAL', { streakDays: 3 });
    if (stats.currentStreakDays >= 7)
      await upsert('STREAK_7', 'GLOBAL', { streakDays: 7 });
    if (stats.currentStreakDays >= 30)
      await upsert('STREAK_30', 'GLOBAL', { streakDays: 30 });

    if (stats.totalValidRuns >= 25)
      await upsert('TOTAL_RUNS_25', 'GLOBAL', { totalRuns: 25 });
    if (stats.totalValidRuns >= 50)
      await upsert('TOTAL_RUNS_50', 'GLOBAL', { totalRuns: 50 });
    if (stats.totalValidRuns >= 100)
      await upsert('TOTAL_RUNS_100', 'GLOBAL', { totalRuns: 100 });

    for (const key of stats.programMainCompletedKeys) {
      await upsert('COMPLETE_MAIN_12', key, { mainTotal: MAIN_PATH_COUNT });
    }
  }

  private async computeStreakDays(userId: string): Promise<number> {
    const from = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);

    const runs = await this.prisma.trainingRun.findMany({
      where: {
        userId,
        startedAt: { gte: from },
        completed: true,
        totalSeconds: { not: null },
      },
      orderBy: { startedAt: 'desc' },
      select: {
        startedAt: true,
        totalSeconds: true,
        completed: true,
        template: {
          select: {
            repeats: true,
            steps: { select: { durationSeconds: true } },
          },
        },
      },
    });

    const validDates = new Set<string>();
    for (const r of runs) {
      const exp = this.expectedSeconds(r.template);
      if (this.isValidCompleted(r, exp)) {
        const d = new Date(
          Date.UTC(
            r.startedAt.getUTCFullYear(),
            r.startedAt.getUTCMonth(),
            r.startedAt.getUTCDate(),
          ),
        );
        validDates.add(d.toISOString().slice(0, 10));
      }
    }

    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 60; i++) {
      const d = new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate() - i,
        ),
      );
      const key = d.toISOString().slice(0, 10);
      if (validDates.has(key)) streak++;
      else break;
    }

    return streak;
  }

  async getSummary(userId: string, langRaw?: string) {
    const lang = this.normalizeLang(langRaw);
    const fb = this.fallback(lang);

    const lastRun = await this.prisma.trainingRun.findFirst({
      where: { userId },
      orderBy: { startedAt: 'desc' },
      select: { startedAt: true },
    });

    const cache = await this.prisma.trainingProgressCache.findUnique({
      where: { userId },
      select: { updatedAt: true, data: true },
    });

    const isCacheFresh =
      !!cache && (!lastRun || cache.updatedAt >= lastRun.startedAt);

    const programs = await this.prisma.trainingProgram.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        key: true,
        slug: true,
        translations: {
          where: { lang: { in: [lang, fb] } },
          select: { lang: true, title: true, description: true },
        },
        trainings: {
          where: { kind: 'PRESET', isPublished: true },
          select: { id: true, sortOrder: true },
        },
      },
    });

    if (isCacheFresh) {
      const data = cache!.data as any;
      const localizedPrograms = programs.map((p) => {
        const t =
          p.translations.find((x) => x.lang === lang) ??
          p.translations.find((x) => x.lang === fb);
        const progData = data.programs?.[p.slug] ?? {
          completedMain: 0,
          completedTotal: 0,
        };
        return {
          key: p.key,
          slug: p.slug,
          title: t?.title ?? String(p.key),
          description: t?.description ?? '',
          completedMain: progData.completedMain,
          mainTotal: MAIN_PATH_COUNT,
          completedTotal: progData.completedTotal,
          total: p.trainings.length,
        };
      });

      return {
        programs: localizedPrograms,
        privateTrainings: data.privateTrainings ?? [],
        achievements: data.achievements ?? [],
        overall: data.overall ?? { totalRuns: 0, currentStreakDays: 0 },
      };
    }

    const allPresetTemplateIds = programs.flatMap((p) =>
      p.trainings.map((x) => x.id),
    );

    const allRuns = await this.prisma.trainingRun.findMany({
      where: {
        userId,
        templateId: { in: allPresetTemplateIds },
        completed: true,
        totalSeconds: { not: null },
      },
      select: {
        templateId: true,
        totalSeconds: true,
        completed: true,
        startedAt: true,
        template: {
          select: {
            programId: true,
            repeats: true,
            steps: { select: { durationSeconds: true } },
          },
        },
      },
    });

    // map expected per templateId
    const expectedByTemplate = new Map<string, number | null>();
    for (const r of allRuns) {
      if (!expectedByTemplate.has(r.templateId)) {
        expectedByTemplate.set(r.templateId, this.expectedSeconds(r.template));
      }
    }

    // valid runs (for program progress + achievements — uses 80% threshold)
    let totalValidRuns = 0;
    const validTemplateIds = new Set<string>();

    for (const r of allRuns) {
      const exp = expectedByTemplate.get(r.templateId) ?? null;
      if (this.isValidCompleted(r, exp)) {
        totalValidRuns++;
        validTemplateIds.add(r.templateId);
      }
    }

    // total completed runs across ALL training types (preset + private) — no threshold
    const totalCompletedRuns = await this.prisma.trainingRun.count({
      where: { userId, completed: true },
    });

    const currentStreakDays = await this.computeStreakDays(userId);

    // program progress
    const programMainCompletedKeys: string[] = [];
    const programsOut = programs.map((p) => {
      const t =
        p.translations.find((x) => x.lang === lang) ??
        p.translations.find((x) => x.lang === fb);

      const mainTemplateIds = p.trainings
        .filter((x) => x.sortOrder <= MAIN_PATH_COUNT)
        .map((x) => x.id);

      const completedMain = mainTemplateIds.filter((id) =>
        validTemplateIds.has(id),
      ).length;
      const completedTotal = p.trainings
        .map((x) => x.id)
        .filter((id) => validTemplateIds.has(id)).length;

      if (completedMain >= MAIN_PATH_COUNT)
        programMainCompletedKeys.push(String(p.key));

      return {
        key: p.key,
        slug: p.slug,
        title: t?.title ?? String(p.key),
        description: t?.description ?? '',
        completedMain,
        mainTotal: MAIN_PATH_COUNT,
        completedTotal,
        total: p.trainings.length,
      };
    });

    // private trainings list
    const privateTemplates = await this.prisma.trainingTemplate.findMany({
      where: { kind: 'PRIVATE', ownerId: userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        runs: {
          where: { completed: true },
          select: { totalSeconds: true, startedAt: true },
        },
      },
    });

    const privateOut = privateTemplates.map((t) => {
      const runsCount = t.runs.length;
      const lastRunAt = runsCount
        ? t.runs.reduce((a, b) => (a.startedAt > b.startedAt ? a : b)).startedAt
        : null;
      const best = runsCount
        ? t.runs.reduce(
            (best, r) =>
              r.totalSeconds && (!best || r.totalSeconds > best)
                ? r.totalSeconds
                : best,
            null as number | null,
          )
        : null;

      return {
        id: t.id,
        name: t.name ?? 'Private Train',
        runsCount,
        lastRunAt: lastRunAt ? lastRunAt.toISOString() : null,
        bestTotalSeconds: best,
      };
    });

    // unlock achievements
    await this.ensureAchievements(userId, {
      totalValidRuns,
      currentStreakDays,
      programMainCompletedKeys,
    });

    const achievements = await this.prisma.userAchievement.findMany({
      where: { userId },
      orderBy: { unlockedAt: 'desc' },
      select: { type: true, scopeKey: true, unlockedAt: true, payload: true },
    });

    const achievementsOut = achievements.map((a) => ({
      type: a.type,
      scopeKey: a.scopeKey,
      unlockedAt: a.unlockedAt.toISOString(),
      payload: a.payload ?? null,
    }));

    const out = {
      programs: programsOut,
      privateTrainings: privateOut,
      achievements: achievementsOut,
      overall: { totalRuns: totalCompletedRuns, currentStreakDays },
    };

    await this.prisma.trainingProgressCache.upsert({
      where: { userId },
      create: { userId, data: out as any },
      update: { data: out as any },
    });

    return out;
  }

  async getTrainingReportBySlug(
    userId: string,
    slug: string,
    range?: string,
    langRaw?: string,
  ) {
    const lang = this.normalizeLang(langRaw);
    const fb = this.fallback(lang);
    const from = rangeToDate(range);

    const template = await this.prisma.trainingTemplate.findUnique({
      where: { slug },
      select: {
        id: true,
        kind: true,
        isPremium: true,
        repeats: true,
        steps: { select: { durationSeconds: true } },
        translations: {
          where: { lang: { in: [lang, fb] } },
          select: { lang: true, title: true },
        },
      },
    });

    if (!template) throw new NotFoundException('Training not found');

    const tr =
      template.translations.find((x) => x.lang === lang) ??
      template.translations.find((x) => x.lang === fb);
    const title = tr?.title ?? 'Training';

    const runs = await this.prisma.trainingRun.findMany({
      where: {
        userId,
        templateId: template.id,
        ...(from ? { startedAt: { gte: from } } : {}),
      },
      orderBy: { startedAt: 'desc' },
      take: 50,
      select: {
        id: true,
        startedAt: true,
        finishedAt: true,
        totalSeconds: true,
        completed: true,
        metrics: true,
      },
    });

    const expected = this.expectedSeconds(template);
    const validRuns = runs.filter((r) => this.isValidCompleted(r, expected));

    const best = validRuns.length
      ? validRuns.reduce(
          (b, r) =>
            r.totalSeconds && (!b || r.totalSeconds > b) ? r.totalSeconds : b,
          null as number | null,
        )
      : null;

    const avg = validRuns.length
      ? Math.round(
          validRuns.reduce((acc, r) => acc + (r.totalSeconds ?? 0), 0) /
            Math.max(1, validRuns.length),
        )
      : null;

    return {
      slug,
      title,
      runsCount: validRuns.length,
      bestTotalSeconds: best,
      avgTotalSeconds: avg,
      runs: runs.map((r) => ({
        id: r.id,
        startedAt: r.startedAt.toISOString(),
        finishedAt: r.finishedAt ? r.finishedAt.toISOString() : null,
        totalSeconds: r.totalSeconds ?? null,
        completed: r.completed,
        metrics: r.metrics ?? null,
      })),
    };
  }

  async getProgramReport(
    userId: string,
    programSlug: string,
    langRaw?: string,
  ) {
    const lang = this.normalizeLang(langRaw);
    const fb = this.fallback(lang);

    const program = await this.prisma.trainingProgram.findUnique({
      where: { slug: programSlug },
      select: {
        id: true,
        key: true,
        slug: true,
        trainings: {
          where: { kind: 'PRESET', isPublished: true },
          orderBy: { sortOrder: 'asc' },
          select: {
            id: true,
            slug: true,
            sortOrder: true,
            repeats: true,
            steps: { select: { durationSeconds: true } },
            translations: {
              where: { lang: { in: [lang, fb] } },
              select: { lang: true, title: true },
            },
          },
        },
      },
    });

    if (!program) throw new NotFoundException('Program not found');

    const templateIds = program.trainings.map((t) => t.id);

    const runs = await this.prisma.trainingRun.findMany({
      where: {
        userId,
        templateId: { in: templateIds },
        completed: true,
        totalSeconds: { not: null },
      },
      select: {
        templateId: true,
        completed: true,
        totalSeconds: true,
        startedAt: true,
      },
    });

    const runsByTemplate = new Map<string, typeof runs>();
    for (const r of runs) {
      if (!runsByTemplate.has(r.templateId))
        runsByTemplate.set(r.templateId, []);
      runsByTemplate.get(r.templateId)!.push(r);
    }

    const items = program.trainings.map((t) => {
      const tr =
        t.translations.find((x) => x.lang === lang) ??
        t.translations.find((x) => x.lang === fb);
      const expected = this.expectedSeconds(t);
      const rr = runsByTemplate.get(t.id) ?? [];
      const isDone = rr.some((r) => this.isValidCompleted(r, expected));

      return {
        id: t.id,
        slug: t.slug ?? '',
        sortOrder: t.sortOrder,
        title: tr?.title ?? 'Training',
        isDone,
        isMain: t.sortOrder <= MAIN_PATH_COUNT,
      };
    });

    return {
      program: { key: program.key, slug: program.slug },
      mainTotal: MAIN_PATH_COUNT,
      completedMain: items.filter((x) => x.isMain && x.isDone).length,
      items,
    };
  }

  async getRecentRuns(userId: string, langRaw?: string, limit = 20) {
    const lang = this.normalizeLang(langRaw);
    const fb = this.fallback(lang);

    // Training runs
    const trainingRuns = await this.prisma.trainingRun.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' },
      take: limit,
      select: {
        id: true,
        startedAt: true,
        totalSeconds: true,
        completed: true,
        template: {
          select: {
            id: true,
            slug: true,
            kind: true,
            name: true,
            translations: {
              where: { lang: { in: [lang, fb] } },
              select: { lang: true, title: true },
            },
            program: {
              select: { slug: true },
            },
          },
        },
      },
    });

    // Dive runs
    const diveRuns = await this.prisma.diveRun.findMany({
      where: { userId },
      orderBy: { startedAt: 'desc' },
      take: limit,
      select: {
        id: true,
        startedAt: true,
        holdSeconds: true,
        maxDepthMeters: true,
        completed: true,
        template: {
          select: {
            id: true,
            slug: true,
            translations: {
              where: { lang: { in: [lang, fb] } },
              select: { lang: true, title: true },
            },
          },
        },
      },
    });

    type RunEntry = {
      id: string;
      type: 'training' | 'dive';
      startedAt: string;
      completed: boolean;
      title: string;
      totalSeconds: number | null;
      maxDepthMeters?: number | null;
      templateId: string;
      templateSlug: string | null;
      programSlug: string | null;
    };

    const trainEntries: RunEntry[] = trainingRuns.map((r) => {
      const tr =
        r.template.translations.find((t) => t.lang === lang) ??
        r.template.translations.find((t) => t.lang === fb);
      const title =
        r.template.kind === 'PRIVATE'
          ? (r.template.name ?? 'Private Training')
          : (tr?.title ?? 'Training');
      return {
        id: r.id,
        type: 'training',
        startedAt: r.startedAt.toISOString(),
        completed: r.completed,
        title,
        totalSeconds: r.totalSeconds ?? null,
        templateId: r.template.id,
        templateSlug: r.template.slug ?? null,
        programSlug: r.template.program?.slug ?? null,
      };
    });

    const diveEntries: RunEntry[] = diveRuns.map((r) => {
      const tr =
        r.template.translations.find((t) => t.lang === lang) ??
        r.template.translations.find((t) => t.lang === fb);
      return {
        id: r.id,
        type: 'dive',
        startedAt: r.startedAt.toISOString(),
        completed: r.completed,
        title: tr?.title ?? 'Dive',
        totalSeconds: r.holdSeconds ?? null,
        maxDepthMeters: r.maxDepthMeters ?? null,
        templateId: r.template.id,
        templateSlug: r.template.slug ?? null,
        programSlug: null,
      };
    });

    // Merge and sort by date
    const combined = [...trainEntries, ...diveEntries].sort(
      (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
    );

    return combined.slice(0, limit);
  }

  async deleteRun(userId: string, type: 'training' | 'dive', runId: string) {
    console.log('[ResultsService.deleteRun] type=%s runId=%s userId=%s', type, runId, userId);
    if (type === 'training') {
      const run = await this.prisma.trainingRun.findUnique({
        where: { id: runId },
        select: { id: true, userId: true },
      });
      console.log('[ResultsService.deleteRun] db lookup result=%o', run);
      if (!run) throw new NotFoundException('Training run not found');
      if (run.userId !== userId) throw new UnauthorizedException('Not your run');
      await this.prisma.trainingRun.delete({ where: { id: runId } });
      await this.prisma.trainingProgressCache.deleteMany({ where: { userId } });
    } else {
      const run = await this.prisma.diveRun.findUnique({
        where: { id: runId },
        select: { id: true, userId: true },
      });
      if (!run) throw new NotFoundException('Dive run not found');
      if (run.userId !== userId) throw new UnauthorizedException('Not your run');
      await this.prisma.diveRun.delete({ where: { id: runId } });
    }
  }

  async deleteAllRuns(userId: string) {
    await this.prisma.trainingRun.deleteMany({ where: { userId } });
    await this.prisma.diveRun.deleteMany({ where: { userId } });
    await this.prisma.trainingProgressCache.deleteMany({ where: { userId } });
  }

  async getPrivateReportById(
    userId: string,
    templateId: string,
    range?: string,
  ) {
    const from = rangeToDate(range);

    const t = await this.prisma.trainingTemplate.findUnique({
      where: { id: templateId },
      select: {
        id: true,
        kind: true,
        ownerId: true,
        name: true,
        repeats: true,
        steps: { select: { durationSeconds: true } },
        createdAt: true,
      },
    });

    if (!t || t.kind !== 'PRIVATE')
      throw new NotFoundException('Private training not found');
    if (t.ownerId !== userId)
      throw new NotFoundException('Private training not found');

    const runs = await this.prisma.trainingRun.findMany({
      where: {
        userId,
        templateId: t.id,
        ...(from ? { startedAt: { gte: from } } : {}),
      },
      orderBy: { startedAt: 'desc' },
      take: 50,
      select: {
        id: true,
        startedAt: true,
        finishedAt: true,
        totalSeconds: true,
        completed: true,
        metrics: true,
      },
    });

    const expected = this.expectedSeconds(t);
    const validRuns = runs.filter((r) => this.isValidCompleted(r, expected));

    const best = validRuns.length
      ? validRuns.reduce(
          (b, r) =>
            r.totalSeconds && (!b || r.totalSeconds > b) ? r.totalSeconds : b,
          null as number | null,
        )
      : null;

    const avg = validRuns.length
      ? Math.round(
          validRuns.reduce((acc, r) => acc + (r.totalSeconds ?? 0), 0) /
            Math.max(1, validRuns.length),
        )
      : null;

    return {
      id: t.id,
      name: t.name ?? 'Private Train',
      createdAt: t.createdAt.toISOString(),
      runsCount: validRuns.length,
      bestTotalSeconds: best,
      avgTotalSeconds: avg,
      runs: runs.map((r) => ({
        id: r.id,
        startedAt: r.startedAt.toISOString(),
        finishedAt: r.finishedAt ? r.finishedAt.toISOString() : null,
        totalSeconds: r.totalSeconds ?? null,
        completed: r.completed,
        metrics: r.metrics ?? null,
      })),
    };
  }
}
