import {
  PrismaClient,
  Language,
  TrainingProgramKey,
  TrainingKind,
  BreathPhase,
} from "../generated/client/client";

type Step = { phase: BreathPhase; durationSeconds: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function sumSeconds(steps: Step[]) {
  return steps.reduce((acc, s) => acc + s.durationSeconds, 0);
}

function estimatedMinutes(steps: Step[], repeats: number) {
  const total = sumSeconds(steps) * repeats;
  return Math.max(1, Math.round(total / 60));
}

function normalizePointsTarget(i: number) {
  return 8 + ((i - 1) % 5);
}

/**
 * Build steps by repeating a cycle until we reach pointsTarget.
 * Allows per-cycle adjustments for ladder workouts.
 */
function buildSteps(
  cycle: Step[],
  pointsTarget: number,
  cycleAdjust?: (s: Step, cycleIndex: number, stepIndexInCycle: number) => Step,
): Step[] {
  const out: Step[] = [];
  let cycleIndex = 0;

  while (out.length < pointsTarget) {
    for (let j = 0; j < cycle.length && out.length < pointsTarget; j++) {
      const base = cycle[j];
      const adjusted = cycleAdjust ? cycleAdjust(base, cycleIndex, j) : base;
      out.push({
        phase: adjusted.phase,
        durationSeconds: clamp(adjusted.durationSeconds, 2, 180),
      });
    }
    cycleIndex++;
  }

  return out;
}

type Pattern = {
  code: string;
  ru: { title: string; subtitle: string; description: string };
  en: { title: string; subtitle: string; description: string };
  build: (pointsTarget: number, level: number) => Step[];
  repeats: (i: number) => number;
  intensity: (i: number) => number; // 1..10
  saveCO2: boolean;
};

type ProgramDef = {
  key: TrainingProgramKey;
  slug: string;
  sortOrder: number;
  ruProgram: { title: string; description: string };
  enProgram: { title: string; description: string };
  patterns: Pattern[];
};

const PROGRAMS: ProgramDef[] = [
  {
    key: TrainingProgramKey.BEGINNER,
    slug: "beginner",
    sortOrder: 1,
    ruProgram: {
      title: "Beginner training",
      description:
        "База: спокойный ритм, длинный выдох, мягкие задержки и контроль напряжения.",
    },
    enProgram: {
      title: "Beginner training",
      description:
        "Foundation: calm rhythm, longer exhale, gentle holds, tension control.",
    },
    patterns: [
      {
        code: "calm-rhythm",
        ru: {
          title: "Спокойный ритм",
          subtitle: "Base",
          description: "Ровное дыхание. Выдох чуть длиннее вдоха.",
        },
        en: {
          title: "Calm rhythm",
          subtitle: "Base",
          description: "Even breathing. Exhale slightly longer than inhale.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 + level },
              { phase: BreathPhase.EXHALE, durationSeconds: 6 + level },
              { phase: BreathPhase.REST, durationSeconds: 2 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => clamp(2 + Math.floor((i - 1) / 7), 1, 4),
        saveCO2: false,
      },
      {
        code: "intro-hold",
        ru: {
          title: "Мягкая задержка",
          subtitle: "Intro hold",
          description:
            "Лёгкая задержка после вдоха. Без усилия — только контроль.",
        },
        en: {
          title: "Gentle hold",
          subtitle: "Intro hold",
          description: "Easy hold after inhale. No forcing — just control.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 5 + level },
              { phase: BreathPhase.HOLD, durationSeconds: 10 + level * 2 },
              { phase: BreathPhase.EXHALE, durationSeconds: 6 + level },
              { phase: BreathPhase.REST, durationSeconds: 3 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => clamp(3 + Math.floor((i - 1) / 6), 2, 6),
        saveCO2: false,
      },
      {
        code: "co2-mini",
        ru: {
          title: "CO₂ mini",
          subtitle: "CO₂ tolerance",
          description:
            "Короткий отдых, стабильная задержка. Учимся сохранять спокойствие.",
        },
        en: {
          title: "CO₂ mini",
          subtitle: "CO₂ tolerance",
          description: "Short rest, stable hold. Practice staying calm.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.HOLD, durationSeconds: 14 + level * 2 },
              { phase: BreathPhase.EXHALE, durationSeconds: 6 },
              { phase: BreathPhase.REST, durationSeconds: 6 - level },
            ],
            points,
            (s) => s,
          ),
        repeats: (i) => 1,
        intensity: (i) => clamp(4 + Math.floor((i - 1) / 6), 3, 7),
        saveCO2: true,
      },
    ],
  },

  {
    key: TrainingProgramKey.INTERMEDIATE,
    slug: "intermediate",
    sortOrder: 2,
    ruProgram: {
      title: "Intermediate training",
      description:
        "Контроль + адаптация: CO₂, O₂, прогрессия задержек и стабильный ритм.",
    },
    enProgram: {
      title: "Intermediate training",
      description:
        "Control + adaptation: CO₂, O₂, progressive holds, steady rhythm.",
    },
    patterns: [
      {
        code: "co2-ladder",
        ru: {
          title: "CO₂ лестница",
          subtitle: "CO₂ ladder",
          description: "Задержка стабильная, отдых уменьшается шаг за шагом.",
        },
        en: {
          title: "CO₂ ladder",
          subtitle: "CO₂ ladder",
          description: "Hold stays stable, rest decreases step by step.",
        },
        build: (points, level) => {
          const baseHold = 22 + level * 2;
          const baseRest = 14 - level;
          return buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.HOLD, durationSeconds: baseHold },
              { phase: BreathPhase.EXHALE, durationSeconds: 6 },
              { phase: BreathPhase.REST, durationSeconds: baseRest },
            ],
            points,
            (s, cycleIndex) => {
              if (s.phase === BreathPhase.REST) {
                return {
                  ...s,
                  durationSeconds: clamp(baseRest - cycleIndex, 5, 20),
                };
              }
              return s;
            },
          );
        },
        repeats: (i) => 1,
        intensity: (i) => clamp(5 + Math.floor((i - 1) / 5), 5, 8),
        saveCO2: true,
      },
      {
        code: "o2-ladder",
        ru: {
          title: "O₂ лестница",
          subtitle: "O₂ ladder",
          description:
            "Отдых стабильный, задержка растёт. Рекомендуется сухая практика.",
        },
        en: {
          title: "O₂ ladder",
          subtitle: "O₂ ladder",
          description:
            "Rest stable, hold increases. Recommended as dry practice.",
        },
        build: (points, level) => {
          const baseHold = 18 + level * 2;
          const rest = 12;
          return buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.HOLD, durationSeconds: baseHold },
              { phase: BreathPhase.EXHALE, durationSeconds: 7 },
              { phase: BreathPhase.REST, durationSeconds: rest },
            ],
            points,
            (s, cycleIndex) => {
              if (s.phase === BreathPhase.HOLD) {
                return {
                  ...s,
                  durationSeconds: clamp(baseHold + cycleIndex * 2, 10, 70),
                };
              }
              return s;
            },
          );
        },
        repeats: (i) => 1,
        intensity: (i) => clamp(6 + Math.floor((i - 1) / 6), 6, 9),
        saveCO2: true,
      },
      {
        code: "technique-control",
        ru: {
          title: "Техника + контроль",
          subtitle: "Control",
          description: "Качество и расслабление важнее длительности.",
        },
        en: {
          title: "Technique + control",
          subtitle: "Control",
          description: "Quality and relaxation over duration.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 5 },
              { phase: BreathPhase.HOLD, durationSeconds: 16 + level * 2 },
              { phase: BreathPhase.EXHALE, durationSeconds: 8 + level },
              { phase: BreathPhase.REST, durationSeconds: 6 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => clamp(5 + Math.floor((i - 1) / 7), 4, 7),
        saveCO2: true,
      },
    ],
  },

  {
    key: TrainingProgramKey.PRO,
    slug: "pro",
    sortOrder: 3,
    ruProgram: {
      title: "Training of professional athletes",
      description:
        "Высокая нагрузка: длинные удержания, минимизация напряжения, точный ритм.",
    },
    enProgram: {
      title: "Training of professional athletes",
      description:
        "High load: longer holds, tension minimization, precise rhythm.",
    },
    patterns: [
      {
        code: "co2-elite",
        ru: {
          title: "CO₂ плотность",
          subtitle: "CO₂ elite",
          description:
            "Короткий отдых, стабильная длинная задержка. Спокойствие под дискомфорт.",
        },
        en: {
          title: "CO₂ density",
          subtitle: "CO₂ elite",
          description: "Short rest, stable long hold. Calm under discomfort.",
        },
        build: (points, level) => {
          const hold = 32 + level * 2;
          const restBase = 10 - level;
          return buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.HOLD, durationSeconds: hold },
              { phase: BreathPhase.EXHALE, durationSeconds: 8 },
              { phase: BreathPhase.REST, durationSeconds: restBase },
            ],
            points,
            (s, cycleIndex) => {
              if (s.phase === BreathPhase.REST) {
                return {
                  ...s,
                  durationSeconds: clamp(restBase - cycleIndex, 4, 15),
                };
              }
              return s;
            },
          );
        },
        repeats: (i) => 1,
        intensity: (i) => clamp(8 + Math.floor((i - 1) / 8), 8, 10),
        saveCO2: true,
      },
      {
        code: "o2-progressive",
        ru: {
          title: "O₂ прогрессия",
          subtitle: "Dry-only",
          description:
            "Отдых фиксирован, задержка растёт. Требует точного самоконтроля.",
        },
        en: {
          title: "O₂ progressive",
          subtitle: "Dry-only",
          description:
            "Fixed rest, increasing hold. Requires precise self-control.",
        },
        build: (points, level) => {
          const rest = 14;
          const baseHold = 26 + level * 2;
          return buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.HOLD, durationSeconds: baseHold },
              { phase: BreathPhase.EXHALE, durationSeconds: 10 },
              { phase: BreathPhase.REST, durationSeconds: rest },
            ],
            points,
            (s, cycleIndex) => {
              if (s.phase === BreathPhase.HOLD) {
                return {
                  ...s,
                  durationSeconds: clamp(baseHold + cycleIndex * 3, 20, 90),
                };
              }
              return s;
            },
          );
        },
        repeats: (i) => 1,
        intensity: (i) => clamp(8 + Math.floor((i - 1) / 10), 8, 10),
        saveCO2: true,
      },
      {
        code: "recovery-pro",
        ru: {
          title: "Recovery (Pro)",
          subtitle: "Recovery",
          description:
            "Стабилизируем пульс и возвращаем ясность. Очень важно между нагрузками.",
        },
        en: {
          title: "Recovery (Pro)",
          subtitle: "Recovery",
          description:
            "Stabilize pulse and regain clarity. Key between heavy sessions.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.EXHALE, durationSeconds: 10 + level },
              { phase: BreathPhase.REST, durationSeconds: 2 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => 3,
        saveCO2: false,
      },
    ],
  },

  {
    key: TrainingProgramKey.SQUARE,
    slug: "square",
    sortOrder: 4,
    ruProgram: {
      title: "Square training",
      description:
        "Box-breathing: 4 фазы одинаковой длины. Контроль и стабильность.",
    },
    enProgram: {
      title: "Square training",
      description: "Box breathing: 4 equal phases. Control and stability.",
    },
    patterns: [
      {
        code: "box",
        ru: {
          title: "Box breathing",
          subtitle: "Square",
          description: "Равные фазы. Отлично для фокуса и успокоения.",
        },
        en: {
          title: "Box breathing",
          subtitle: "Square",
          description: "Equal phases. Great for focus and calm.",
        },
        build: (points, level) => {
          const d = clamp(4 + level, 4, 7);
          return buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: d },
              { phase: BreathPhase.HOLD, durationSeconds: d },
              { phase: BreathPhase.EXHALE, durationSeconds: d },
              { phase: BreathPhase.HOLD, durationSeconds: d },
            ],
            points,
          );
        },
        repeats: (i) => 1,
        intensity: (i) => clamp(3 + Math.floor((i - 1) / 7), 3, 6),
        saveCO2: false,
      },
      {
        code: "box-long-exhale",
        ru: {
          title: "Box + long exhale",
          subtitle: "Square",
          description: "Сдвиг в успокоение: выдох чуть длиннее.",
        },
        en: {
          title: "Box + long exhale",
          subtitle: "Square",
          description: "Shift to calm: slightly longer exhale.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 + level },
              { phase: BreathPhase.HOLD, durationSeconds: 4 + level },
              { phase: BreathPhase.EXHALE, durationSeconds: 6 + level },
              { phase: BreathPhase.HOLD, durationSeconds: 4 + level },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => clamp(4 + Math.floor((i - 1) / 8), 4, 6),
        saveCO2: false,
      },
    ],
  },

  {
    key: TrainingProgramKey.CALMING,
    slug: "calming",
    sortOrder: 5,
    ruProgram: {
      title: "Calming exercises",
      description:
        "Снять стресс: длинный выдох, мягкая пауза, восстановление после нагрузки.",
    },
    enProgram: {
      title: "Calming exercises",
      description:
        "Reduce stress: longer exhale, gentle pauses, post-load recovery.",
    },
    patterns: [
      {
        code: "downshift",
        ru: {
          title: "Downshift",
          subtitle: "Recovery",
          description: "Выдох длиннее вдоха. Быстрое успокоение.",
        },
        en: {
          title: "Downshift",
          subtitle: "Recovery",
          description: "Exhale longer than inhale. Quick calming.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.EXHALE, durationSeconds: 8 + level },
              { phase: BreathPhase.REST, durationSeconds: 2 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => 1,
        saveCO2: false,
      },
      {
        code: "pre-sleep",
        ru: {
          title: "Перед сном",
          subtitle: "Sleep",
          description: "Без удержаний. Длинный выдох и мягкая пауза.",
        },
        en: {
          title: "Pre-sleep",
          subtitle: "Sleep",
          description: "No holds. Long exhale and soft pause.",
        },
        build: (points, level) =>
          buildSteps(
            [
              { phase: BreathPhase.INHALE, durationSeconds: 4 },
              { phase: BreathPhase.EXHALE, durationSeconds: 10 + level },
              { phase: BreathPhase.REST, durationSeconds: 3 },
            ],
            points,
          ),
        repeats: (i) => 1,
        intensity: (i) => 1,
        saveCO2: false,
      },
    ],
  },
];

export async function seedTrain(prisma: PrismaClient) {
  console.log("[seed] train: start");

  for (const programDef of PROGRAMS) {
    const program = await prisma.trainingProgram.upsert({
      where: { key: programDef.key },
      create: {
        key: programDef.key,
        slug: programDef.slug,
        sortOrder: programDef.sortOrder,
        isPublished: true,
      },
      update: {
        slug: programDef.slug,
        sortOrder: programDef.sortOrder,
        isPublished: true,
      },
      select: { id: true },
    });

    await prisma.trainingProgramTranslation.upsert({
      where: { programId_lang: { programId: program.id, lang: Language.ru } },
      create: {
        programId: program.id,
        lang: Language.ru,
        title: programDef.ruProgram.title,
        description: programDef.ruProgram.description,
      },
      update: {
        title: programDef.ruProgram.title,
        description: programDef.ruProgram.description,
      },
    });

    await prisma.trainingProgramTranslation.upsert({
      where: { programId_lang: { programId: program.id, lang: Language.en } },
      create: {
        programId: program.id,
        lang: Language.en,
        title: programDef.enProgram.title,
        description: programDef.enProgram.description,
      },
      update: {
        title: programDef.enProgram.title,
        description: programDef.enProgram.description,
      },
    });

    for (let i = 1; i <= 20; i++) {
      const isPremium = i > 10;
      const pointsTarget = normalizePointsTarget(i);

      const level = clamp(Math.floor((i - 1) / 7), 0, 3);

      const pattern = programDef.patterns[(i - 1) % programDef.patterns.length];
      const steps = pattern.build(pointsTarget, level);

      const repeats = pattern.repeats(i);
      const intensityLevel = pattern.intensity(i);
      const estMin = estimatedMinutes(steps, repeats);

      const slug = `${programDef.slug}-train-${i}`;

      const template = await prisma.trainingTemplate.upsert({
        where: { slug },
        create: {
          kind: TrainingKind.PRESET,
          slug,
          programId: program.id,
          sortOrder: i,
          isPublished: true,
          isPremium,
          pointCount: steps.length,
          repeats,
          saveResults: true,
          saveCO2: pattern.saveCO2,
          onlyClock: false,
          estimatedMinutes: estMin,
          intensityLevel,
        },
        update: {
          programId: program.id,
          sortOrder: i,
          isPublished: true,
          isPremium,
          pointCount: steps.length,
          repeats,
          saveResults: true,
          saveCO2: pattern.saveCO2,
          onlyClock: false,
          estimatedMinutes: estMin,
          intensityLevel,
        },
        select: { id: true },
      });

      await prisma.trainingTemplateTranslation.upsert({
        where: {
          templateId_lang: { templateId: template.id, lang: Language.ru },
        },
        create: {
          templateId: template.id,
          lang: Language.ru,
          title: `${pattern.ru.title} #${i}`,
          subtitle: isPremium ? "Premium" : "Free",
          description: `${pattern.ru.description} • Точки: ${steps.length} • Инт.: ${intensityLevel}/10 • ~${estMin} мин`,
        },
        update: {
          title: `${pattern.ru.title} #${i}`,
          subtitle: isPremium ? "Premium" : "Free",
          description: `${pattern.ru.description} • Точки: ${steps.length} • Инт.: ${intensityLevel}/10 • ~${estMin} мин`,
        },
      });

      await prisma.trainingTemplateTranslation.upsert({
        where: {
          templateId_lang: { templateId: template.id, lang: Language.en },
        },
        create: {
          templateId: template.id,
          lang: Language.en,
          title: `${pattern.en.title} #${i}`,
          subtitle: isPremium ? "Premium" : "Free",
          description: `${pattern.en.description} • Points: ${steps.length} • Intensity: ${intensityLevel}/10 • ~${estMin} min`,
        },
        update: {
          title: `${pattern.en.title} #${i}`,
          subtitle: isPremium ? "Premium" : "Free",
          description: `${pattern.en.description} • Points: ${steps.length} • Intensity: ${intensityLevel}/10 • ~${estMin} min`,
        },
      });

      await prisma.trainingStep.deleteMany({
        where: { templateId: template.id },
      });

      await prisma.trainingStep.createMany({
        data: steps.map((s, idx) => ({
          templateId: template.id,
          sortOrder: idx + 1,
          phase: s.phase,
          durationSeconds: s.durationSeconds,
        })),
      });
    }
  }
}
