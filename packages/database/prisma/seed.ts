import {
  PrismaClient,
  Language,
  CultureSection,
} from "../generated/client/client";
import * as fs from "node:fs";
import * as path from "node:path";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { seedTrain } from "./seed.train";
import { seedDive } from "./seed.dive";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is missing for seed");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

type Meta = {
  slug: string;
  section: keyof typeof CultureSection;
  coverImageUrl?: string | null;
  readTimeMinutes?: number | null;
  isPublished?: boolean;
  publishedAt?: string | null;
  translations: {
    ru: { title: string; subtitle?: string; description?: string };
    en: { title: string; subtitle?: string; description?: string };
  };
};

function readText(p: string) {
  return fs.readFileSync(p, "utf8").trim();
}

async function upsertArticle(folderPath: string) {
  const metaPath = path.join(folderPath, "meta.json");
  const ruPath = path.join(folderPath, "ru.md");
  const enPath = path.join(folderPath, "en.md");

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8")) as Meta;

  const ruMarkdown = readText(ruPath);
  const enMarkdown = readText(enPath);

  const article = await prisma.cultureArticle.upsert({
    where: { slug: meta.slug },
    create: {
      slug: meta.slug,
      section: meta.section as any,
      coverImageUrl: meta.coverImageUrl ?? null,
      readTimeMinutes: meta.readTimeMinutes ?? null,
      isPublished: meta.isPublished ?? true,
      publishedAt: meta.publishedAt ? new Date(meta.publishedAt) : null,
    },
    update: {
      section: meta.section as any,
      coverImageUrl: meta.coverImageUrl ?? null,
      readTimeMinutes: meta.readTimeMinutes ?? null,
      isPublished: meta.isPublished ?? true,
      publishedAt: meta.publishedAt ? new Date(meta.publishedAt) : null,
    },
    select: { id: true },
  });

  // RU
  await prisma.cultureArticleTranslation.upsert({
    where: {
      articleId_lang: { articleId: article.id, lang: Language.ru },
    },
    create: {
      articleId: article.id,
      lang: Language.ru,
      title: meta.translations.ru.title,
      subtitle: meta.translations.ru.subtitle ?? null,
      description: meta.translations.ru.description ?? null,
      contentMarkdown: ruMarkdown,
    },
    update: {
      title: meta.translations.ru.title,
      subtitle: meta.translations.ru.subtitle ?? null,
      description: meta.translations.ru.description ?? null,
      contentMarkdown: ruMarkdown,
    },
  });

  // EN
  await prisma.cultureArticleTranslation.upsert({
    where: {
      articleId_lang: { articleId: article.id, lang: Language.en },
    },
    create: {
      articleId: article.id,
      lang: Language.en,
      title: meta.translations.en.title,
      subtitle: meta.translations.en.subtitle ?? null,
      description: meta.translations.en.description ?? null,
      contentMarkdown: enMarkdown,
    },
    update: {
      title: meta.translations.en.title,
      subtitle: meta.translations.en.subtitle ?? null,
      description: meta.translations.en.description ?? null,
      contentMarkdown: enMarkdown,
    },
  });
}

async function main() {
  const baseDir = path.join(process.cwd(), "prisma", "seed", "culture");
  const folders = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(baseDir, d.name));

  for (const folder of folders) {
    await upsertArticle(folder);
  }

  await seedTrain(prisma);
  await seedDive(prisma);
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
