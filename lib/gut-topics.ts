/** The 7 linked "gut mechanics" pages. One list feeds the homepage grid, the footer and every on-page "read next" card. */
export interface GutTopic {
  slug: string;
  href: string;
  title: string;
  blurb: string;
}

export type GutSlug = (typeof GUT_TOPICS)[number]["slug"];

export const GUT_TOPICS = [
  {
    slug: "incomplete-evacuation",
    href: "/incomplete-evacuation/",
    title: "Never feeling fully clear",
    blurb: "Your stool looks normal, but the bowel never feels finished.",
  },
  {
    slug: "pelvic-floor-dysfunction",
    href: "/pelvic-floor-dysfunction/",
    title: "Pelvic floor and straining",
    blurb: "When the exit muscles tighten instead of relaxing.",
  },
  {
    slug: "toilet-posture-for-constipation",
    href: "/toilet-posture-for-constipation/",
    title: "Toilet posture and breathing",
    blurb: "The 2-inch heel method and calm breathing.",
  },
  {
    slug: "ibs-diet",
    href: "/ibs-diet/",
    title: "IBS diet and meal timing",
    blurb: "Fibre, raw salads, and what to eat when.",
  },
  {
    slug: "gas-and-bloating",
    href: "/gas-and-bloating/",
    title: "Gas and evening bloating",
    blurb: "Why the belly swells as the day goes on.",
  },
  {
    slug: "ibs-and-metabolic-health",
    href: "/ibs-and-metabolic-health/",
    title: "Thyroid, PCOS, diabetes and your gut",
    blurb: "When another condition slows digestion.",
  },
  {
    slug: "laxative-dependency",
    href: "/laxative-dependency/",
    title: "Laxative and churna habit",
    blurb: "Why one night-time dose becomes every night.",
  },
] as const satisfies ReadonlyArray<GutTopic>;
