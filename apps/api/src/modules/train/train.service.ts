import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient, Language } from '@repo/db';
import { PRIVATE_TRAIN_BLOCK } from './train.constants';

type RunStatus = 'completed' | 'in_progress' | null;

type ListTrainingsParams = {
  programSlug: string;
  lang?: string;
  /** When supplied, per-training run status is added to each item */
  userId?: string | null;
};

@Injectable()
export class TrainService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  private normalizeLang(lang?: string): Language {
    const l = (lang ?? '').toLowerCase();
    return l.startsWith('ru') ? ('ru' as Language) : ('en' as Language);
  }

  private fallbackLang(lang: Language): Language {
    return lang === 'ru' ? ('en' as Language) : ('ru' as Language);
  }

  // just without payments - premium locked
  private computeIsLocked(isPremium: boolean) {
    return isPremium;
  }

  async getBlocks(langRaw?: string) {
    const lang = this.normalizeLang(langRaw);
    const fallback = this.fallbackLang(lang);

    const programs = await this.prisma.trainingProgram.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        key: true,
        slug: true,
        sortOrder: true,
        translations: {
          where: { lang: { in: [lang, fallback] } },
          select: { lang: true, title: true, description: true },
        },
        trainings: {
          where: { isPublished: true, kind: 'PRESET' },
          select: { isPremium: true },
        },
      },
    });

    const items = programs.map((p) => {
      const t =
        p.translations.find((x) => x.lang === lang) ??
        p.translations.find((x) => x.lang === fallback);

      const total = p.trainings.length;
      const premium = p.trainings.filter((x) => x.isPremium).length;
      const free = total - premium;

      return {
        key: p.key,
        slug: p.slug,
        title: t?.title ?? String(p.key),
        description: t?.description ?? '',
        totalTrainings: total,
        freeTrainings: free,
        premiumTrainings: premium,
      };
    });

    return {
      blocks: [
        ...items,
        {
          key: PRIVATE_TRAIN_BLOCK.key,
          slug: PRIVATE_TRAIN_BLOCK.slug,
          title: lang === 'ru' ? 'Private Train' : 'Private Train',
          description:
            lang === 'ru'
              ? 'Создайте свою тренировку и сохраняйте результаты'
              : 'Create your own training and save results',
          totalTrainings: 0,
          freeTrainings: 0,
          premiumTrainings: 0,
        },
      ],
    };
  }

  async listProgramTrainings(params: ListTrainingsParams) {
    const lang = this.normalizeLang(params.lang);
    const fallback = this.fallbackLang(lang);

    const program = await this.prisma.trainingProgram.findUnique({
      where: { slug: params.programSlug },
      select: { id: true, key: true, slug: true, isPublished: true },
    });

    if (!program || !program.isPublished)
      throw new NotFoundException('Program not found');

    const templates = await this.prisma.trainingTemplate.findMany({
      where: {
        programId: program.id,
        kind: 'PRESET',
        isPublished: true,
      },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        isPremium: true,
        estimatedMinutes: true,
        intensityLevel: true,
        translations: {
          where: { lang: { in: [lang, fallback] } },
          select: {
            lang: true,
            title: true,
            subtitle: true,
            description: true,
          },
        },
      },
    });

    // Build a per-templateId run-status map when the user is authenticated
    const runStatusMap = new Map<string, RunStatus>();
    if (params.userId) {
      const templateIds = templates.map((t) => t.id);
      // Fetch the most recent run per template for this user in one query
      const runs = await this.prisma.trainingRun.findMany({
        where: {
          userId: params.userId,
          templateId: { in: templateIds },
        },
        orderBy: { startedAt: 'desc' },
        select: { templateId: true, completed: true },
      });

      // Keep only the latest run per template
      for (const run of runs) {
        if (!runStatusMap.has(run.templateId)) {
          runStatusMap.set(
            run.templateId,
            run.completed ? 'completed' : 'in_progress',
          );
        }
      }
    }

    const items = templates.map((t) => {
      const tr =
        t.translations.find((x) => x.lang === lang) ??
        t.translations.find((x) => x.lang === fallback);

      return {
        id: t.id,
        slug: t.slug ?? '',
        title: tr?.title ?? 'Training',
        subtitle: tr?.subtitle ?? null,
        description: tr?.description ?? null,
        isPremium: t.isPremium,
        isLocked: this.computeIsLocked(t.isPremium),
        estimatedMinutes: t.estimatedMinutes ?? null,
        intensityLevel: t.intensityLevel ?? null,
        /** null when not authenticated or no runs yet */
        lastRunStatus: runStatusMap.get(t.id) ?? null,
        lang: (tr?.lang ?? lang) as any,
      };
    });

    return { program: { key: program.key, slug: program.slug }, items };
  }

  async getTrainingBySlug(slug: string, langRaw?: string) {
    const lang = this.normalizeLang(langRaw);
    const fallback = this.fallbackLang(lang);

    const t = await this.prisma.trainingTemplate.findUnique({
      where: { slug },
      select: {
        id: true,
        kind: true,
        slug: true,
        isPremium: true,
        estimatedMinutes: true,
        intensityLevel: true,
        pointCount: true,
        repeats: true,
        saveResults: true,
        saveCO2: true,
        onlyClock: true,
        program: { select: { key: true, slug: true } },
        translations: {
          where: { lang: { in: [lang, fallback] } },
          select: {
            lang: true,
            title: true,
            subtitle: true,
            description: true,
          },
        },
        steps: {
          orderBy: { sortOrder: 'asc' },
          select: { phase: true, durationSeconds: true },
        },
      },
    });

    if (!t) throw new NotFoundException('Training not found');

    const tr =
      t.translations.find((x) => x.lang === lang) ??
      t.translations.find((x) => x.lang === fallback);

    return {
      id: t.id,
      slug: t.slug ?? null,
      kind: t.kind,
      programKey: t.program?.key ?? null,
      programSlug: t.program?.slug ?? null,
      title: tr?.title ?? null,
      subtitle: tr?.subtitle ?? null,
      description: tr?.description ?? null,
      isPremium: t.isPremium,
      isLocked: this.computeIsLocked(t.isPremium),
      estimatedMinutes: t.estimatedMinutes ?? null,
      intensityLevel: t.intensityLevel ?? null,
      pointCount: t.pointCount ?? null,
      repeats: t.repeats ?? null,
      saveResults: t.saveResults,
      saveCO2: t.saveCO2,
      onlyClock: t.onlyClock,
      steps: t.steps.map((s) => ({
        phase: s.phase,
        durationSeconds: s.durationSeconds,
      })),
      lang: (tr?.lang ?? lang) as any,
    };
  }

  async listPrivateTemplates(userId: string) {
    const items = await this.prisma.trainingTemplate.findMany({
      where: { kind: 'PRIVATE', ownerId: userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        pointCount: true,
        repeats: true,
        saveResults: true,
        saveCO2: true,
        onlyClock: true,
        createdAt: true,
        steps: {
          orderBy: { sortOrder: 'asc' },
          select: { phase: true, durationSeconds: true },
        },
      },
    });

    return {
      items: items.map((t) => ({
        id: t.id,
        name: t.name ?? 'Private Train',
        pointCount: t.pointCount ?? null,
        repeats: t.repeats ?? null,
        saveResults: t.saveResults,
        saveCO2: t.saveCO2,
        onlyClock: t.onlyClock,
        steps: t.steps.map((s) => ({
          phase: s.phase,
          durationSeconds: s.durationSeconds,
        })),
        createdAt: t.createdAt.toISOString(),
      })),
    };
  }

  /** userId is optional — unauthenticated users can create trainings */
  async createPrivateTemplate(userId: string | null, dto: any) {
    const created = await this.prisma.trainingTemplate.create({
      data: {
        kind: 'PRIVATE',
        ...(userId ? { ownerId: userId } : {}),
        name: dto.name,
        pointCount: dto.pointCount ?? null,
        repeats: dto.repeats ?? null,
        saveResults: dto.saveResults ?? true,
        saveCO2: dto.saveCO2 ?? false,
        onlyClock: dto.onlyClock ?? false,
        isPublished: true,
        isPremium: false,
        steps: {
          create: dto.steps.map((s: any, idx: number) => ({
            sortOrder: idx + 1,
            phase: s.phase,
            durationSeconds: s.durationSeconds,
          })),
        },
      },
      select: { id: true },
    });

    return { id: created.id };
  }

  async updateRun(userId: string, runId: string, dto: any) {
    const run = await this.prisma.trainingRun.findUnique({
      where: { id: runId },
      select: { id: true, userId: true },
    });

    if (!run) throw new NotFoundException('Run not found');
    if (run.userId !== userId)
      throw new UnauthorizedException('Not your run');

    const updated = await this.prisma.trainingRun.update({
      where: { id: runId },
      data: {
        ...(dto.completed !== undefined ? { completed: dto.completed } : {}),
        ...(dto.totalSeconds !== undefined
          ? {
              totalSeconds: dto.totalSeconds,
              finishedAt: new Date(),
            }
          : {}),
        // Always set finishedAt when marking completed, even without totalSeconds
        ...(dto.completed === true && dto.totalSeconds === undefined
          ? { finishedAt: new Date() }
          : {}),
        ...(dto.metrics !== undefined ? { metrics: dto.metrics } : {}),
      },
      select: {
        id: true,
        completed: true,
        totalSeconds: true,
        startedAt: true,
        finishedAt: true,
      },
    });

    // Bust the summary cache so the next getSummary() call sees this completion.
    // Without this, getSummary() compares cache.updatedAt against run.startedAt
    // (which never changes after completion) and incorrectly serves stale data.
    if (dto.completed === true) {
      await this.prisma.trainingProgressCache.deleteMany({ where: { userId } });
    }

    return {
      id: updated.id,
      completed: updated.completed,
      totalSeconds: updated.totalSeconds,
      startedAt: updated.startedAt.toISOString(),
      finishedAt: updated.finishedAt?.toISOString() ?? null,
    };
  }

  async createRun(userId: string, dto: any) {
    const template = await this.prisma.trainingTemplate.findUnique({
      where: { id: dto.templateId },
      select: { id: true, kind: true, ownerId: true, isPremium: true },
    });

    if (!template) throw new NotFoundException('Training template not found');

    // private template ownership check — only if it has an owner
    if (
      template.kind === 'PRIVATE' &&
      template.ownerId !== null &&
      template.ownerId !== userId
    ) {
      throw new UnauthorizedException('Not your private training');
    }

    // premium lock
    if (template.isPremium) {
      throw new UnauthorizedException('Premium training is locked');
    }

    const run = await this.prisma.trainingRun.create({
      data: {
        userId,
        templateId: template.id,
        completed: dto.completed ?? false,
        totalSeconds: dto.totalSeconds ?? null,
        finishedAt: dto.totalSeconds ? new Date() : null,
        metrics: dto.metrics ?? null,
      },
      select: { id: true, startedAt: true },
    });

    return { id: run.id, startedAt: run.startedAt.toISOString() };
  }
}
