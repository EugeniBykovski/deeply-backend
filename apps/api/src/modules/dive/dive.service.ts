import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient, Language } from '@repo/db';
import { computeIsLocked, fallbackLang, normalizeLang } from './dive.constants';

@Injectable()
export class DiveService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  private toLang(langRaw?: string): Language {
    return normalizeLang(langRaw) as Language;
  }

  /** Resolve the user's Pro status in one query. Returns false when userId is absent. */
  private async resolveIsPro(userId?: string | null): Promise<boolean> {
    if (!userId) return false;
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isPro: true },
    });
    return user?.isPro ?? false;
  }

  async listTemplates(langRaw?: string, userId?: string | null) {
    const lang = this.toLang(langRaw);
    const fb = fallbackLang(lang as any) as Language;
    const isPro = await this.resolveIsPro(userId);

    const rows = await this.prisma.diveTemplate.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        difficulty: true,
        maxDepthMeters: true,
        targetHoldSeconds: true,
        isPremium: true,
        translations: {
          where: { lang: { in: [lang, fb] } },
          select: {
            lang: true,
            title: true,
            subtitle: true,
            description: true,
          },
        },
      },
    });

    return {
      items: rows.map((t) => {
        const tr =
          t.translations.find((x) => x.lang === lang) ??
          t.translations.find((x) => x.lang === fb);

        return {
          id: t.id,
          slug: t.slug,
          difficulty: t.difficulty,
          maxDepthMeters: t.maxDepthMeters,
          targetHoldSeconds: t.targetHoldSeconds ?? null,
          isPremium: t.isPremium,
          isLocked: computeIsLocked(t.isPremium, isPro),
          title: tr?.title ?? 'Dive',
          subtitle: tr?.subtitle ?? null,
          description: tr?.description ?? null,
          lang: (tr?.lang ?? lang) as any,
        };
      }),
    };
  }

  async getTemplateBySlug(slug: string, langRaw?: string, userId?: string | null) {
    const lang = this.toLang(langRaw);
    const fb = fallbackLang(lang as any) as Language;
    const isPro = await this.resolveIsPro(userId);

    const t = await this.prisma.diveTemplate.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        difficulty: true,
        maxDepthMeters: true,
        targetHoldSeconds: true,
        isPremium: true,
        translations: {
          where: { lang: { in: [lang, fb] } },
          select: {
            lang: true,
            title: true,
            subtitle: true,
            description: true,
          },
        },
        profilePoints: {
          orderBy: { sortOrder: 'asc' },
          select: { sortOrder: true, timeSeconds: true, depthMeters: true },
        },
      },
    });

    if (!t) throw new NotFoundException('Dive not found');

    const tr =
      t.translations.find((x) => x.lang === lang) ??
      t.translations.find((x) => x.lang === fb);

    return {
      id: t.id,
      slug: t.slug,
      difficulty: t.difficulty,
      maxDepthMeters: t.maxDepthMeters,
      targetHoldSeconds: t.targetHoldSeconds ?? null,
      isPremium: t.isPremium,
      isLocked: computeIsLocked(t.isPremium, isPro),
      title: tr?.title ?? 'Dive',
      subtitle: tr?.subtitle ?? null,
      description: tr?.description ?? null,
      profilePoints: t.profilePoints,
      lang: (tr?.lang ?? lang) as any,
    };
  }

  private interpolateDepth(
    points: { timeSeconds: number; depthMeters: number }[],
    holdSeconds: number,
  ) {
    if (!points.length) return 0;

    const hs = Math.max(0, holdSeconds);

    if (hs <= points[0].timeSeconds) return points[0].depthMeters;

    const last = points[points.length - 1];
    if (hs >= last.timeSeconds) return last.depthMeters;

    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1];
      const b = points[i];
      if (hs <= b.timeSeconds) {
        const span = b.timeSeconds - a.timeSeconds || 1;
        const k = (hs - a.timeSeconds) / span;
        const d = a.depthMeters + (b.depthMeters - a.depthMeters) * k;
        return Math.round(d);
      }
    }

    return last.depthMeters;
  }

  async createRun(
    userId: string,
    dto: {
      templateId: string;
      holdSeconds: number;
      completed?: boolean;
      metrics?: any;
    },
  ) {
    const t = await this.prisma.diveTemplate.findUnique({
      where: { id: dto.templateId },
      select: {
        id: true,
        isPremium: true,
        isPublished: true,
        profilePoints: {
          orderBy: { sortOrder: 'asc' },
          select: { timeSeconds: true, depthMeters: true },
        },
      },
    });

    if (!t || !t.isPublished)
      throw new NotFoundException('Dive template not found');

    // Premium dives are only blocked for non-Pro users.
    if (t.isPremium) {
      const isPro = await this.resolveIsPro(userId);
      if (!isPro) throw new UnauthorizedException('Premium dive is locked');
    }

    const holdSeconds = Math.max(0, Math.floor(dto.holdSeconds));
    const maxDepthMeters = this.interpolateDepth(t.profilePoints, holdSeconds);

    const completed = dto.completed ?? holdSeconds > 0;

    const run = await this.prisma.diveRun.create({
      data: {
        userId,
        templateId: t.id,
        holdSeconds,
        maxDepthMeters,
        completed,
        finishedAt: new Date(),
        metrics: dto.metrics ?? null,
      },
      select: { id: true, startedAt: true },
    });

    return {
      id: run.id,
      startedAt: run.startedAt.toISOString(),
      holdSeconds,
      maxDepthMeters,
      completed,
      debug: { interpolated: true },
    };
  }

  async deleteRun(userId: string, runId: string) {
    const run = await this.prisma.diveRun.findUnique({
      where: { id: runId },
      select: { id: true, userId: true },
    });

    if (!run) throw new NotFoundException('Dive run not found');
    if (run.userId !== userId) throw new UnauthorizedException('Not your run');

    await this.prisma.diveRun.delete({ where: { id: runId } });
  }
}
