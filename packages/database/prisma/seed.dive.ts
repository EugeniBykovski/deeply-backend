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

// 30 dives inspired by real freediving disciplines and competition progressions.
// Dives 1–10 free, 11–30 premium.
// Disciplines: STA = Static Apnea, DYN = Dynamic with fins, DNF = Dynamic No Fins,
// FIM = Free Immersion, CWT = Constant Weight, CWTB = CWT Bi-fins, VWT = Variable Weight.
const DIVES: DiveMeta[] = [
  // ── FREE (1–10) ──────────────────────────────────────────────────────────────
  {
    slug: "breath-discovery",
    sortOrder: 1,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 5,
    targetHoldSeconds: 45,
    en: {
      title: "Breath Discovery",
      subtitle: "Static Apnea · Entry",
      description:
        "Your first conscious breath-hold. Float face-down in calm water and focus solely on relaxation. The goal is not depth — it's learning to be still. 45 seconds is enough to feel the stillness.",
    },
    ru: {
      title: "Открытие дыхания",
      subtitle: "Статическое апноэ · Вход",
      description:
        "Первое осознанное апноэ. Лягте лицом вниз в спокойной воде и сосредоточьтесь на расслаблении. Цель — не глубина, а тишина. 45 секунд достаточно, чтобы почувствовать покой.",
    },
  },
  {
    slug: "surface-relaxation",
    sortOrder: 2,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 8,
    targetHoldSeconds: 60,
    en: {
      title: "Surface Relaxation",
      subtitle: "Static Apnea · Foundation",
      description:
        "One minute of breath-hold at the surface. Practice diaphragmatic breathing and a calm pre-dive routine. This is the foundation every freediver builds on before entering depth.",
    },
    ru: {
      title: "Поверхностное расслабление",
      subtitle: "Статическое апноэ · Основа",
      description:
        "Одна минута задержки дыхания на поверхности. Тренируйте диафрагмальное дыхание и спокойную подготовку. Это основа, на которой строится каждый фридайвер.",
    },
  },
  {
    slug: "shallow-glide",
    sortOrder: 3,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 10,
    targetHoldSeconds: 75,
    en: {
      title: "Shallow Glide",
      subtitle: "Dynamic With Fins · Entry",
      description:
        "Horizontal glide in shallow water with fins. Focus on streamlining your body, minimising kick frequency, and conserving oxygen through efficiency. Classic DYN entry drill.",
    },
    ru: {
      title: "Мелководное скольжение",
      subtitle: "Динамика с ластами · Вход",
      description:
        "Горизонтальное скольжение на мелководье с ластами. Сосредоточьтесь на обтекаемости тела, минимальной частоте гребков и экономии кислорода. Классическое упражнение DYN.",
    },
  },
  {
    slug: "blue-window",
    sortOrder: 4,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 12,
    targetHoldSeconds: 90,
    en: {
      title: "Blue Window",
      subtitle: "Free Immersion · Entry",
      description:
        "Pull yourself down the rope hand over hand. Free Immersion removes the need for fin technique and lets you focus entirely on equalisation and relaxation during descent.",
    },
    ru: {
      title: "Голубое окно",
      subtitle: "Свободное погружение · Вход",
      description:
        "Опускайтесь вдоль верёвки рука за рукой. Свободное погружение позволяет сосредоточиться на выравнивании давления и расслаблении, не думая о технике ласт.",
    },
  },
  {
    slug: "first-freefall",
    sortOrder: 5,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 15,
    targetHoldSeconds: 105,
    en: {
      title: "First Freefall",
      subtitle: "Constant Weight · Entry",
      description:
        "15 metres constant weight. At this depth the body becomes negatively buoyant and you experience your first true freefall — a silent, effortless descent that defines freediving.",
    },
    ru: {
      title: "Первое свободное падение",
      subtitle: "Постоянный вес · Вход",
      description:
        "15 метров с постоянным весом. На этой глубине тело становится отрицательно плавучим — вы испытаете первое настоящее свободное падение, тихое и безусильное.",
    },
  },
  {
    slug: "rope-descent",
    sortOrder: 6,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 18,
    targetHoldSeconds: 120,
    en: {
      title: "Rope Descent",
      subtitle: "Free Immersion · Foundational",
      description:
        "18 metres via Free Immersion. This dive trains equalisation rhythm and controlled descent pacing. Many elite freedivers use FIM as their primary equalisation training discipline.",
    },
    ru: {
      title: "Спуск по верёвке",
      subtitle: "Свободное погружение · Основное",
      description:
        "18 метров по методу свободного погружения. Тренирует ритм выравнивания и контроль скорости спуска — метод, широко используемый профессионалами.",
    },
  },
  {
    slug: "neutral-zone",
    sortOrder: 7,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 20,
    targetHoldSeconds: 135,
    en: {
      title: "Neutral Zone",
      subtitle: "Constant Weight · Milestone",
      description:
        "20 metres — the standard entry-level AIDA depth qualification target. At this depth you'll feel the pressure change clearly and experience the quiet of the water column.",
    },
    ru: {
      title: "Нейтральная зона",
      subtitle: "Постоянный вес · Веха",
      description:
        "20 метров — стандартная цель квалификации AIDA для начинающих. На этой глубине вы отчётливо почувствуете изменение давления и тишину водного столба.",
    },
  },
  {
    slug: "blue-corridor",
    sortOrder: 8,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 22,
    targetHoldSeconds: 150,
    en: {
      title: "The Blue Corridor",
      subtitle: "CWT Bi-fins · Entry",
      description:
        "22 metres with bi-fins — a gentler kick pattern that suits many beginners. Bi-fin technique produces a smoother, lower-effort descent well-suited to building bottom time.",
    },
    ru: {
      title: "Голубой коридор",
      subtitle: "Постоянный вес с би-ластами · Вход",
      description:
        "22 метра с би-ластами — более мягкий стиль гребка, подходящий начинающим. Техника би-ласт даёт плавный, энергоэффективный спуск.",
    },
  },
  {
    slug: "equalisation-drill",
    sortOrder: 9,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 25,
    targetHoldSeconds: 165,
    en: {
      title: "Equalisation Drill",
      subtitle: "Free Immersion · Technical",
      description:
        "25 metres Free Immersion focused on equalisation technique. At 25 m the Frenzel manoeuvre must be effortless. This dive trains the muscle memory required for deeper dives.",
    },
    ru: {
      title: "Тренировка выравнивания",
      subtitle: "Свободное погружение · Технический",
      description:
        "25 метров свободным погружением с акцентом на технике выравнивания. На 25 м маневр Френзеля должен быть автоматическим. Эта тренировка формирует мышечную память.",
    },
  },
  {
    slug: "divers-gate",
    sortOrder: 10,
    isPremium: false,
    difficulty: "EASY",
    maxDepthMeters: 28,
    targetHoldSeconds: 180,
    en: {
      title: "Diver's Gate",
      subtitle: "Constant Weight · Benchmark",
      description:
        "28 metres constant weight — the final free milestone before entering premium depth territory. A 3-minute breath-hold capacity and reliable Frenzel equalisation are expected here.",
    },
    ru: {
      title: "Ворота дайвера",
      subtitle: "Постоянный вес · Ориентир",
      description:
        "28 метров с постоянным весом — последний свободный рубеж перед премиум-глубинами. Здесь необходима задержка дыхания около 3 минут и надёжная техника выравнивания.",
    },
  },

  // ── PREMIUM MEDIUM (11–20) ────────────────────────────────────────────────────
  {
    slug: "static-marathon",
    sortOrder: 11,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 30,
    targetHoldSeconds: 210,
    en: {
      title: "Static Marathon",
      subtitle: "Static Apnea · Endurance",
      description:
        "A 3.5-minute breath-hold challenge. Static Apnea at the elite amateur level. Train your contractions response, your mental calm during urge-to-breathe, and your O₂ recovery protocol.",
    },
    ru: {
      title: "Статический марафон",
      subtitle: "Статическое апноэ · Выносливость",
      description:
        "Задержка дыхания на 3,5 минуты. Статическое апноэ на уровне продвинутого любителя. Тренируйте реакцию на сокращения, спокойствие при желании вдохнуть и протокол восстановления O₂.",
    },
  },
  {
    slug: "dnf-sprint",
    sortOrder: 12,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 33,
    targetHoldSeconds: 195,
    en: {
      title: "DNF Sprint",
      subtitle: "Dynamic No Fins · Power",
      description:
        "Dynamic No Fins — horizontal swimming without fins using breaststroke or front crawl arm movement. DNF is one of the most physically demanding disciplines and tests pure breath-hold efficiency.",
    },
    ru: {
      title: "Динамика без ласт",
      subtitle: "Динамика без ласт · Сила",
      description:
        "Горизонтальное плавание без ласт — используется брасс или гребок руками. DNF — одна из наиболее физически требовательных дисциплин, проверяющая чистую эффективность задержки дыхания.",
    },
  },
  {
    slug: "aida-depth-card",
    sortOrder: 13,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 36,
    targetHoldSeconds: 225,
    en: {
      title: "AIDA Depth Card",
      subtitle: "Constant Weight · Rating",
      description:
        "36 metres — the depth qualifier for AIDA 3-star certification. Constant weight with monofin or bi-fins. Freefall phase begins at ~15 m and continues for the majority of the descent.",
    },
    ru: {
      title: "Карта глубины AIDA",
      subtitle: "Постоянный вес · Рейтинг",
      description:
        "36 метров — глубина квалификации AIDA 3-star. Постоянный вес с моноластом или би-ластами. Свободное падение начинается примерно с 15 м и охватывает большую часть спуска.",
    },
  },
  {
    slug: "rope-mastery",
    sortOrder: 14,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 40,
    targetHoldSeconds: 240,
    en: {
      title: "Rope Mastery",
      subtitle: "Free Immersion · Advanced",
      description:
        "40 metres Free Immersion. Mouthfill equalisation becomes critical here. You must pre-charge air at the transition zone and execute a reliable mouthfill to continue past 30 m safely.",
    },
    ru: {
      title: "Мастерство верёвки",
      subtitle: "Свободное погружение · Продвинутый",
      description:
        "40 метров свободным погружением. Здесь становится критически важным выравнивание с набором воздуха в рот. Необходимо предварительно зарядить воздух в переходной зоне.",
    },
  },
  {
    slug: "bi-fin-power",
    sortOrder: 15,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 43,
    targetHoldSeconds: 255,
    en: {
      title: "Bi-Fin Power",
      subtitle: "CWT Bi-fins · Competition Prep",
      description:
        "43 metres with bi-fins — a depth reached by many club-level competition freedivers. Bi-fin CWT is the most common competition discipline for recreational athletes globally.",
    },
    ru: {
      title: "Сила би-ласт",
      subtitle: "Постоянный вес · Подготовка к соревнованиям",
      description:
        "43 метра с би-ластами — глубина, достигаемая многими фридайверами клубного уровня. CWT с би-ластами — наиболее распространённая дисциплина среди любительских спортсменов.",
    },
  },
  {
    slug: "the-equator",
    sortOrder: 16,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 45,
    targetHoldSeconds: 270,
    en: {
      title: "The Equator",
      subtitle: "Constant Weight · Psychological Barrier",
      description:
        "45 metres. Many freedivers describe this as a significant psychological barrier — the point where dark water replaces visible bottom. Tested by CMAS and AIDA 4-star athletes worldwide.",
    },
    ru: {
      title: "Экватор",
      subtitle: "Постоянный вес · Психологический барьер",
      description:
        "45 метров. Многие фридайверы описывают эту глубину как значительный психологический барьер — точку, где дно исчезает из поля зрения. Цель спортсменов CMAS и AIDA 4-star.",
    },
  },
  {
    slug: "pelagic-silence",
    sortOrder: 17,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 48,
    targetHoldSeconds: 285,
    en: {
      title: "Pelagic Silence",
      subtitle: "Variable Weight · Intro",
      description:
        "Variable Weight introductory dive. A weighted sled assists the descent; the freediver ascends independently with fins and rope. VWT allows depth exploration with reduced energy expenditure.",
    },
    ru: {
      title: "Пелагическая тишина",
      subtitle: "Переменный вес · Вступление",
      description:
        "Вводное погружение с переменным весом. Утяжелённые сани помогают при спуске; фридайвер самостоятельно всплывает с ластами и верёвкой. VWT позволяет исследовать глубину с меньшими затратами энергии.",
    },
  },
  {
    slug: "cmas-qualifier",
    sortOrder: 18,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 50,
    targetHoldSeconds: 300,
    en: {
      title: "CMAS Qualifier",
      subtitle: "Constant Weight · 50 m Milestone",
      description:
        "50 metres constant weight — a globally recognised milestone in freediving. Achieving 50 m CWT places you in the top few percent of recreational divers and qualifies for most CMAS events.",
    },
    ru: {
      title: "Квалификация CMAS",
      subtitle: "Постоянный вес · Рубеж 50 м",
      description:
        "50 метров с постоянным весом — всемирно признанная веха во фридайвинге. Достижение 50 м CWT ставит вас в топ нескольких процентов рекреационных дайверов.",
    },
  },
  {
    slug: "halocline-cross",
    sortOrder: 19,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 53,
    targetHoldSeconds: 315,
    en: {
      title: "Halocline Crossing",
      subtitle: "Free Immersion · Boundary Layer",
      description:
        "53 metres Free Immersion. At this depth in many ocean sites you cross the halocline — a distinct layer of temperature and salinity change that creates a visible boundary in the water.",
    },
    ru: {
      title: "Пересечение галоклина",
      subtitle: "Свободное погружение · Граничный слой",
      description:
        "53 метра свободным погружением. На этой глубине во многих морских локациях пересекается галоклин — отчётливый слой изменения температуры и солёности.",
    },
  },
  {
    slug: "competition-ready",
    sortOrder: 20,
    isPremium: true,
    difficulty: "MEDIUM",
    maxDepthMeters: 55,
    targetHoldSeconds: 330,
    en: {
      title: "Competition Ready",
      subtitle: "Static Apnea · 5.5 min Goal",
      description:
        "5.5 minutes Static Apnea — the level at which AIDA competition podium positions become accessible at regional level. Train urge management, CO₂ tolerance, and post-dive recovery protocol.",
    },
    ru: {
      title: "Готов к соревнованиям",
      subtitle: "Статическое апноэ · Цель 5,5 мин",
      description:
        "5,5 минут статического апноэ — уровень, при котором становятся доступны призовые места AIDA на региональном уровне. Тренируйте управление позывами, CO₂-толерантность и протокол восстановления.",
    },
  },

  // ── PREMIUM HARD (21–30) ──────────────────────────────────────────────────────
  {
    slug: "variable-descent",
    sortOrder: 21,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 60,
    targetHoldSeconds: 360,
    en: {
      title: "Variable Descent",
      subtitle: "Variable Weight · 60 m",
      description:
        "60 metres Variable Weight. A discipline used by elite athletes to push beyond normal CWT limits. The sled descent is rapid; the ascent requires full fin and rope technique to safety.",
    },
    ru: {
      title: "Переменный спуск",
      subtitle: "Переменный вес · 60 м",
      description:
        "60 метров с переменным весом. Дисциплина элитных атлетов для преодоления ограничений CWT. Спуск на санях быстрый; подъём требует полной техники ласт и верёвки.",
    },
  },
  {
    slug: "world-cup-qualifier",
    sortOrder: 22,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 65,
    targetHoldSeconds: 375,
    en: {
      title: "World Cup Qualifier",
      subtitle: "Constant Weight · Elite Entry",
      description:
        "65 metres CWT — the entry-level performance for AIDA World Cup participation in men's competition. Monofin technique at this depth requires a refined body position and efficient kick cycle.",
    },
    ru: {
      title: "Квалификация Кубка мира",
      subtitle: "Постоянный вес · Элитный вход",
      description:
        "65 метров CWT — пороговая глубина для участия мужчин в AIDA World Cup. Техника моноласта на этой глубине требует выверенного положения тела и эффективного цикла гребков.",
    },
  },
  {
    slug: "depth-pioneer",
    sortOrder: 23,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 68,
    targetHoldSeconds: 390,
    en: {
      title: "Depth Pioneer",
      subtitle: "CWT No Fins · Challenge",
      description:
        "68 metres Constant Weight No Fins — the most technically demanding depth discipline. Every metre is earned purely by body undulation. Elite CNF performers are among the rarest athletes in the sport.",
    },
    ru: {
      title: "Первопроходец глубины",
      subtitle: "Постоянный вес без ласт · Вызов",
      description:
        "68 метров без ласт с постоянным весом — технически наиболее сложная дисциплина. Каждый метр берётся исключительно волнообразными движениями тела. Элита CNF — одни из редчайших атлетов в спорте.",
    },
  },
  {
    slug: "abyss-protocol",
    sortOrder: 24,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 72,
    targetHoldSeconds: 405,
    en: {
      title: "Abyss Protocol",
      subtitle: "No Limit · Expedition",
      description:
        "72 metres No Limit — inspired by the classical Ama and sled diving traditions. NLT uses a weighted sled for descent and an inflatable bag for ascent. Only for highly trained athletes with safety support.",
    },
    ru: {
      title: "Протокол бездны",
      subtitle: "Без ограничений · Экспедиция",
      description:
        "72 метра в дисциплине «Без ограничений». NLT использует утяжелённые сани для спуска и надувной мешок для подъёма. Только для хорошо подготовленных атлетов с группой безопасности.",
    },
  },
  {
    slug: "continental-record",
    sortOrder: 25,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 75,
    targetHoldSeconds: 420,
    en: {
      title: "Continental Record",
      subtitle: "Constant Weight · 75 m",
      description:
        "75 metres CWT — a depth that represents continental record territory in some regions. At this level, every aspect of the dive is optimised: weight, hydrodynamics, kick frequency, and recovery.",
    },
    ru: {
      title: "Континентальный рекорд",
      subtitle: "Постоянный вес · 75 м",
      description:
        "75 метров CWT — глубина континентальных рекордов в ряде регионов. На этом уровне оптимизируется каждый аспект: снаряжение, гидродинамика, частота гребков и восстановление.",
    },
  },
  {
    slug: "deep-silence",
    sortOrder: 26,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 78,
    targetHoldSeconds: 435,
    en: {
      title: "Deep Silence",
      subtitle: "Free Immersion · 78 m",
      description:
        "78 metres Free Immersion — a world-class FIM performance. At this depth the pressure on the thorax is extreme and lung compression is complete. Only elite athletes with years of FIM training attempt this.",
    },
    ru: {
      title: "Глубокая тишина",
      subtitle: "Свободное погружение · 78 м",
      description:
        "78 метров свободным погружением — мировой класс FIM. На этой глубине давление на грудную клетку огромно, а сжатие лёгких полное. Только элитные атлеты с многолетней подготовкой FIM.",
    },
  },
  {
    slug: "absolute-depth",
    sortOrder: 27,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 82,
    targetHoldSeconds: 450,
    en: {
      title: "Absolute Depth",
      subtitle: "Variable Weight · 82 m",
      description:
        "82 metres Variable Weight. Inspired by milestone VWT performances at international competitions. The ascent from 82 m requires exceptional physical condition and a perfectly executed safety protocol.",
    },
    ru: {
      title: "Абсолютная глубина",
      subtitle: "Переменный вес · 82 м",
      description:
        "82 метра с переменным весом. Вдохновлено рекордными выступлениями VWT на международных соревнованиях. Подъём с 82 м требует исключительной физической формы и безупречного протокола безопасности.",
    },
  },
  {
    slug: "legendary-descent",
    sortOrder: 28,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 85,
    targetHoldSeconds: 465,
    en: {
      title: "Legendary Descent",
      subtitle: "No Limit · Tribute",
      description:
        "85 metres No Limit — a tribute to the era of NLT pioneers. Historic dives at this depth shaped the sport. In modern freediving, 85 m NLT is considered an advanced expedition-grade achievement.",
    },
    ru: {
      title: "Легендарный спуск",
      subtitle: "Без ограничений · Дань уважения",
      description:
        "85 метров без ограничений — дань пионерам дисциплины NLT. Исторические погружения на эту глубину сформировали весь спорт. В современном фридайвинге 85 м NLT — это продвинутое экспедиционное достижение.",
    },
  },
  {
    slug: "final-meter",
    sortOrder: 29,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 90,
    targetHoldSeconds: 480,
    en: {
      title: "The Final Meter",
      subtitle: "Constant Weight · 90 m",
      description:
        "90 metres CWT — approaching world-class performance territory. Athletes at this level compete at AIDA World Championships. The dive lasts approximately 2.5–3 minutes including ascent. Every second counts.",
    },
    ru: {
      title: "Последний метр",
      subtitle: "Постоянный вес · 90 м",
      description:
        "90 метров CWT — приближение к уровню мирового класса. Атлеты этого уровня выступают на Чемпионатах мира AIDA. Погружение длится около 2,5–3 минут включая подъём. Каждая секунда важна.",
    },
  },
  {
    slug: "transcendence",
    sortOrder: 30,
    isPremium: true,
    difficulty: "HARD",
    maxDepthMeters: 100,
    targetHoldSeconds: 495,
    en: {
      title: "Transcendence",
      subtitle: "Constant Weight · 100 m",
      description:
        "100 metres constant weight — the deepest milestone in the sport, breached by only a handful of athletes globally. Inspired by historic 100 m CWT achievements and modern world-record attempts.",
    },
    ru: {
      title: "Трансцендентность",
      subtitle: "Постоянный вес · 100 м",
      description:
        "100 метров с постоянным весом — наивысший рубеж в спорте, достигнутый лишь единицами в мире. Вдохновлено историческими 100 м CWT и современными попытками мировых рекордов.",
    },
  },
];

export async function seedDive(prisma: PrismaClient) {
  console.log("[seed] dive: start");

  for (const d of DIVES) {
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
      where: { templateId_lang: { templateId: template.id, lang: Language.ru } },
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
      where: { templateId_lang: { templateId: template.id, lang: Language.en } },
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

    const pointsCount = 8 + ((d.sortOrder - 1) % 5);
    const points = genProfilePoints(d.targetHoldSeconds, d.maxDepthMeters, pointsCount);

    await prisma.diveProfilePoint.deleteMany({ where: { templateId: template.id } });
    await prisma.diveProfilePoint.createMany({
      data: points.map((p) => ({
        templateId: template.id,
        sortOrder: p.sortOrder,
        timeSeconds: p.timeSeconds,
        depthMeters: p.depthMeters,
      })),
    });
  }

  console.log(`[seed] dive: done — ${DIVES.length} templates`);
}
