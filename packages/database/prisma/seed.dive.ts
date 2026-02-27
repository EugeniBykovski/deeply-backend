import { PrismaClient, Language } from "../generated/client/client";

type DiveMeta = {
  slug: string;
  sortOrder: number;
  isPremium: boolean;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  maxDepthMeters: number;
  targetHoldSeconds: number;
  ru: { title: string; subtitle?: string; description?: string };
  en: { title: string; subtitle?: string; description?: string };
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function genProfilePoints(
  targetHoldSeconds: number,
  maxDepthMeters: number,
  points: number,
) {
  const n = clamp(points, 8, 12);
  const out: Array<{
    sortOrder: number;
    timeSeconds: number;
    depthMeters: number;
  }> = [];
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1);
    const t = Math.round(targetHoldSeconds * Math.pow(x, 1.1));
    const d = Math.round(maxDepthMeters * Math.pow(x, 1.3));
    out.push({
      sortOrder: i + 1,
      timeSeconds: clamp(t, 0, targetHoldSeconds),
      depthMeters: clamp(d, 0, maxDepthMeters),
    });
  }
  for (let i = 1; i < out.length; i++) {
    out[i].timeSeconds = Math.max(out[i].timeSeconds, out[i - 1].timeSeconds);
    out[i].depthMeters = Math.max(out[i].depthMeters, out[i - 1].depthMeters);
  }
  out[out.length - 1].timeSeconds = targetHoldSeconds;
  out[out.length - 1].depthMeters = maxDepthMeters;
  return out;
}

function buildSeed(): DiveMeta[] {
  const items: DiveMeta[] = [];
  for (let i = 1; i <= 30; i++) {
    const isPremium = i > 10;

    let difficulty: "EASY" | "MEDIUM" | "HARD" = "EASY";
    if (i > 10 && i <= 20) difficulty = "MEDIUM";
    if (i > 20) difficulty = "HARD";

    const maxDepth =
      difficulty === "EASY"
        ? 18 + (i % 6) * 2 // 18..28
        : difficulty === "MEDIUM"
          ? 30 + (i % 6) * 3 // 30..45
          : 45 + (i % 6) * 3; // 45..60

    const targetHold =
      difficulty === "EASY"
        ? 45 + (i % 6) * 4 // 45..65
        : difficulty === "MEDIUM"
          ? 65 + (i % 6) * 5 // 65..90
          : 90 + (i % 6) * 6; // 90..120

    const slug = `dive-${i}`;

    items.push({
      slug,
      sortOrder: i,
      isPremium,
      difficulty,
      maxDepthMeters: maxDepth,
      targetHoldSeconds: targetHold,
      ru: {
        title: `Погружение #${i}`,
        subtitle:
          difficulty === "EASY"
            ? "Легко"
            : difficulty === "MEDIUM"
              ? "Средне"
              : "Сложно",
        description: `Цель: ~${targetHold} сек удержания • Макс глубина: ${maxDepth}м. Нажми и удерживай, отпусти — всплытие.`,
      },
      en: {
        title: `Dive #${i}`,
        subtitle:
          difficulty === "EASY"
            ? "Easy"
            : difficulty === "MEDIUM"
              ? "Medium"
              : "Hard",
        description: `Target: ~${targetHold}s hold • Max depth: ${maxDepth}m. Press & hold to descend, release to ascend.`,
      },
    });
  }
  return items;
}

export async function seedDive(prisma: PrismaClient) {
  console.log("[seed] dive: start");

  const dives = buildSeed();

  for (const d of dives) {
    const template = await prisma.diveTemplate.upsert({
      where: { slug: d.slug },
      create: {
        slug: d.slug,
        sortOrder: d.sortOrder,
        isPublished: true,
        isPremium: d.isPremium,
        difficulty: d.difficulty as any,
        maxDepthMeters: d.maxDepthMeters,
        targetHoldSeconds: d.targetHoldSeconds,
      },
      update: {
        sortOrder: d.sortOrder,
        isPublished: true,
        isPremium: d.isPremium,
        difficulty: d.difficulty as any,
        maxDepthMeters: d.maxDepthMeters,
        targetHoldSeconds: d.targetHoldSeconds,
      },
      select: { id: true },
    });

    await prisma.diveTemplateTranslation.upsert({
      where: {
        templateId_lang: { templateId: template.id, lang: Language.ru },
      },
      create: {
        templateId: template.id,
        lang: Language.ru,
        title: d.ru.title,
        subtitle: d.ru.subtitle ?? null,
        description: d.ru.description ?? null,
      },
      update: {
        title: d.ru.title,
        subtitle: d.ru.subtitle ?? null,
        description: d.ru.description ?? null,
      },
    });

    await prisma.diveTemplateTranslation.upsert({
      where: {
        templateId_lang: { templateId: template.id, lang: Language.en },
      },
      create: {
        templateId: template.id,
        lang: Language.en,
        title: d.en.title,
        subtitle: d.en.subtitle ?? null,
        description: d.en.description ?? null,
      },
      update: {
        title: d.en.title,
        subtitle: d.en.subtitle ?? null,
        description: d.en.description ?? null,
      },
    });

    // 8–12 points
    const pointsCount = 8 + ((d.sortOrder - 1) % 5);
    const points = genProfilePoints(
      d.targetHoldSeconds,
      d.maxDepthMeters,
      pointsCount,
    );

    await prisma.diveProfilePoint.deleteMany({
      where: { templateId: template.id },
    });
    await prisma.diveProfilePoint.createMany({
      data: points.map((p) => ({
        templateId: template.id,
        sortOrder: p.sortOrder,
        timeSeconds: p.timeSeconds,
        depthMeters: p.depthMeters,
      })),
    });
  }
}
