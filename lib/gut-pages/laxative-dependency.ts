import type { GutPageData } from "./types";

export const LAXATIVE_DEPENDENCY: GutPageData = {
  slug: "laxative-dependency",
  metaTitle: "Laxative and Churna Dependency: Why It Happens, How to Step Down | IBS Clinic",
  metaDescription:
    "Can't pass stool without a night-time churna or laxative? Learn why it becomes a habit, what guidelines say about long-term use, and how to step down safely.",
  kicker: "Laxatives and churna",
  h1: "Can't Pass Stool Without a Laxative or Churna? Here Is What to Know",
  lead: "Some people start with one night-time churna and end up needing it every day. Here is why that happens and how to step down safely, with your doctor.",
  hinglish: "Churna ke bina motion nahi hota?",
  hero: {
    file: "laxative-hero.webp",
    alt: "A bedside table with a glass of water and a small bowl of churna powder in soft evening light",
    aspect: "4 / 3",
    prompt:
      "Quiet evening still life: a bedside table with a steel glass of water and a small bowl of dry herbal powder, soft lamp light, neutral background. No brand names, no text, no pills in blister packs. Calm and non-judgmental.",
  },
  summary: [
    "Laxatives and churnas work on the stool. They do not fix the reason the stool was stuck.",
    "Guidelines call daily use of stimulant laxatives for 4 weeks or less short-term, and say long-term safety data are limited.",
    "If you have used one for a long time, do not stop suddenly. Plan a step-down with a doctor.",
    "Fixing posture, meal timing, diet and pelvic muscle timing often makes stepping down easier.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "types",
      title: "What kinds of laxatives are there?",
      paras: [
        "Bulk-forming fibres, such as isabgol, add volume to stool. Osmotic laxatives, such as lactulose or macrogol, pull water into the bowel. Stimulant laxatives, such as senna, make the bowel muscle squeeze harder.",
        "Some bedtime churnas and syrups contain stimulant herbs. Check the label, or ask your pharmacist, so you know what you are taking.",
      ],
    },
    {
      kind: "steps",
      id: "why-daily",
      title: "Why one dose can become every night",
      steps: [
        {
          title: "The stool is hard to pass, or you feel unfinished",
          body: "You want relief, and that is completely understandable.",
        },
        { title: "You take a laxative, and it works that night", body: "The bowel moves strongly the next morning." },
        {
          title: "You feel empty for a day or two",
          body: "The bowel has just cleared, so there is less stool to pass next time.",
        },
        {
          title: "The original reason is still there",
          body: "Posture, diet, timing or tight pelvic muscles have not changed.",
        },
        {
          title: "So you take it again",
          body: "The laxative treats the stool. It does not treat the reason the stool was stuck.",
        },
      ],
      loop: "Soon, the dose is part of the routine.",
    },
    {
      kind: "note",
      id: "guideline",
      tone: "info",
      title: "What the guideline says",
      body: "A 2023 guideline from the American gastroenterology societies defines short-term use of stimulant laxatives as daily use for 4 weeks or less. It also says more data are needed on long-term safety and tolerance. This does not mean they are dangerous. It means they are best used for a short time while the cause is fixed.",
    },
    {
      kind: "list",
      id: "review-signs",
      title: "Signs it is time to review your laxative with a doctor",
      items: [
        "You take it most nights, for weeks or months",
        "You need a bigger dose than before",
        "You get cramps, then loose motions, then constipation again",
        "You feel you cannot go without it",
        "You are afraid to stop",
      ],
    },
    {
      kind: "steps",
      id: "step-down",
      title: "How to step down safely, with your doctor",
      steps: [
        {
          title: "Do not stop suddenly after long use",
          body: "Talk to a doctor first. Sudden stopping can leave you very constipated and uncomfortable.",
        },
        {
          title: "Get the product and dose reviewed",
          body: "Show your doctor the exact churna, syrup or tablet and how often you take it.",
        },
        {
          title: "Fix the base",
          body: "Work on [toilet posture and breathing](/toilet-posture-for-constipation/), regular meals, lukewarm water and an [IBS-friendly diet](/ibs-diet/).",
        },
        {
          title: "Reduce slowly",
          body: "Your doctor may suggest taking it on fewer nights, or switching to a gentler option such as a bulk-forming fibre.",
        },
        {
          title: "Check the muscles if you are still stuck",
          body: "If you strain even with soft stool, ask about [pelvic floor problems](/pelvic-floor-dysfunction/).",
        },
      ],
    },
    {
      kind: "note",
      id: "red-flags",
      tone: "care",
      title: "See a doctor first if you have",
      body: "Blood in the stool, black stools, severe pain, unexplained weight loss, or a recent change in your bowel habit that does not settle. These need checking before any plan to step down.",
    },
    {
      kind: "prose",
      id: "what-we-do",
      title: "What we do at IBS Clinic",
      paras: [
        "We do not ask you to stop on day one. First our doctors map your pattern: how long you have used it, what it contains, and what else is going on in your gut.",
        "Then we build a plan to work on the causes, so that stepping down becomes realistic. Book a free evaluation and bring the packet with you.",
      ],
    },
  ],
  faq: [
    {
      q: "Is it safe to take churna every night?",
      a: "Guidelines describe stimulant laxatives as short-term treatment, meaning daily use for 4 weeks or less, and say long-term safety data are limited. If you take one most nights, ask your doctor to review it.",
    },
    {
      q: "Can my bowel become lazy?",
      a: "Some people feel that way after long use. Research on the long-term effect is limited, so doctors advise using stimulant laxatives for short periods while the cause is fixed.",
    },
    {
      q: "Is isabgol also a laxative?",
      a: "Isabgol is a bulk-forming fibre, and it is gentler for some people. Take it with plenty of water and start small. Some people get more bloating, in which case speak to your doctor.",
    },
    {
      q: "How do I stop taking a laxative?",
      a: "Do not stop suddenly after long use. Ask a doctor for a step-down plan and work on posture, meal timing, diet and any muscle problem at the same time.",
    },
    {
      q: "Churna ke bina motion nahi hota, ab kya karein?",
      a: "Ghabrayein nahi, bahut se log isi sthiti mein hote hain. Achanak band na karein. Doctor ko churna ka naam aur kitni baar lete hain bataiye, aur saath mein toilet posture, khaane ka time aur diet par kaam shuru karein.",
      hi: true,
    },
    {
      q: "When should I see a doctor?",
      a: "See a doctor soon if you have blood in the stool, black stools, severe pain, weight loss without trying, or a new change in bowel habit that does not settle.",
    },
  ],
  refs: ["R8", "R1", "R9"],
  next: ["pelvic-floor-dysfunction", "toilet-posture-for-constipation", "ibs-diet"],
  updated: "10 October 2026",
};
