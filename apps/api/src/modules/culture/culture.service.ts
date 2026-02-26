import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient, Language, CultureSection } from '@repo/db';

type ListArticlesParams = {
  section?: string;
  lang?: string;
  pageOutput?: string;
  limit?: number;
};

@Injectable()
export class CultureService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  getSections() {
    return [
      {
        key: 'STORIES',
        title: 'Stories',
        description: 'Истории и ключевые моменты',
      },
      {
        key: 'ATHLETES',
        title: 'Athletes',
        description: 'Спортсмены и их путь',
      },
      {
        key: 'COMPETITIONS',
        title: 'Competitions',
        description: 'Соревнования и факты',
      },
      {
        key: 'TRAINING',
        title: 'Training',
        description: 'Методики тренировок',
      },
      { key: 'RELAX', title: 'Relax', description: 'Восстановление и дыхание' },
      {
        key: 'SAFETY',
        title: 'Safety',
        description: 'Безопасность и чек-листы',
      },
    ];
  }

  private normalizeLang(lang?: string): Language {
    const l = (lang ?? '').toLowerCase();
    return l.startsWith('ru') ? ('ru' as Language) : ('en' as Language);
  }

  async listArticles(params: ListArticlesParams) {
    const take = Math.min(Math.max(params.limit ?? 20, 1), 50);
    const lang = this.normalizeLang(params.lang);
    const fallback: Language =
      lang === 'ru' ? ('en' as Language) : ('ru' as Language);

    const where: { isPublished: boolean; section?: CultureSection } = {
      isPublished: true,
    };
    if (params.section) where.section = params.section as CultureSection;

    const rows = await this.prisma.cultureArticle.findMany({
      where,
      orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
      take,
      ...(params.pageOutput
        ? { cursor: { id: params.pageOutput }, skip: 1 }
        : {}),
      select: {
        id: true,
        slug: true,
        section: true,
        coverImageUrl: true,
        readTimeMinutes: true,
        publishedAt: true,
        translations: {
          where: { lang: { in: [lang, fallback] } },
          select: { lang: true, title: true, description: true },
        },
      },
    });

    const items = rows.map((a) => {
      const t =
        a.translations.find((x) => x.lang === lang) ??
        a.translations.find((x) => x.lang === fallback);

      return {
        id: a.id,
        slug: a.slug,
        section: a.section,
        title: t?.title ?? '(no title)',
        description: t?.description ?? null,
        coverImageUrl: a.coverImageUrl ?? null,
        readTimeMinutes: a.readTimeMinutes ?? null,
        publishedAt: a.publishedAt ? a.publishedAt.toISOString() : null,
        lang: (t?.lang ?? lang) as any,
      };
    });

    return {
      items,
      nextPageOutput: items.length ? items[items.length - 1].id : null,
    };
  }

  async getArticleBySlug(slug: string, langRaw?: string) {
    const lang = this.normalizeLang(langRaw);
    const fallback: Language =
      lang === 'ru' ? ('en' as Language) : ('ru' as Language);

    const a = await this.prisma.cultureArticle.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        section: true,
        coverImageUrl: true,
        readTimeMinutes: true,
        publishedAt: true,
        isPublished: true,
        translations: {
          where: { lang: { in: [lang, fallback] } },
          select: {
            lang: true,
            title: true,
            subtitle: true,
            description: true,
            contentMarkdown: true,
          },
        },
      },
    });

    if (!a || !a.isPublished) throw new NotFoundException('Article not found');

    const t =
      a.translations.find((x) => x.lang === lang) ??
      a.translations.find((x) => x.lang === fallback);

    if (!t) throw new NotFoundException('Article translation not found');

    return {
      id: a.id,
      slug: a.slug,
      section: a.section,
      title: t.title,
      subtitle: t.subtitle ?? null,
      description: t.description ?? null,
      contentMarkdown: t.contentMarkdown,
      coverImageUrl: a.coverImageUrl ?? null,
      readTimeMinutes: a.readTimeMinutes ?? null,
      publishedAt: a.publishedAt ? a.publishedAt.toISOString() : null,
      lang: t.lang,
    };
  }
}
