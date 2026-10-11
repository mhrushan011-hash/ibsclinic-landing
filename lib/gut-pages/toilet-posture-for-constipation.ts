import type { GutPageData } from "./types";

export const TOILET_POSTURE: GutPageData = {
  slug: "toilet-posture-for-constipation",
  metaTitle: "Toilet Posture for Constipation: The 2-Inch Heel Method | IBS Clinic",
  metaDescription:
    "How you sit on the toilet changes how easily stool passes. Learn the 2-inch heel method for Indian toilets, a footstool for Western toilets, and calm breathing.",
  kicker: "Toilet posture and breathing",
  h1: "The Right Way to Sit on the Toilet When You Feel Stuck",
  lead: "A small change in how your body is placed can make passing stool easier. Here is what research says, and the simple method we teach our patients.",
  hinglish: "Indian toilet ho ya western, baithne ka tarika matter karta hai.",
  hero: {
    file: "posture-hero.webp",
    src: "/gut-health/posture-hero.webp",
    alt: "Side view of a person squatting on an Indian toilet with heels raised on a firm slipper, relaxed and leaning slightly forward",
    aspect: "4 / 3",
    prompt:
      "Friendly, non-graphic flat illustration, side view of an Indian adult in loose clothing squatting over an Indian-style toilet, heels raised about 2 inches on firm wedge slippers, leaning slightly forward, calm face. Fresh green (#81AF12) accents, charcoal (#333333) outlines, off-white background. No text, no nudity, tasteful.",
  },
  summary: [
    "When you squat, the bend at the end of your bowel opens more than when you sit upright. In one study the angle was about 126 degrees squatting and about 100 degrees sitting.",
    "Raising your heels about 2 inches gets some people closer to a squat. This is our simple, low-cost method.",
    "Slow breathing helps the pelvic muscles loosen. Do not hold your breath and push.",
    "Posture helps some people, not everyone. One trial found a footstool did not help people with long-term constipation, so treat posture as one part of a plan.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "why-posture-matters",
      title: "Why posture changes things",
      paras: [
        "At the end of your bowel there is a bend. A muscle sling holds that bend to help you stay in control. When you squat, the bend opens up more and the path for stool gets straighter.",
        "One study measured this directly. The angle was about 126 degrees while squatting and about 100 degrees while sitting upright. The same study found squatting needed less straining.",
        "A straighter path does not guarantee an easy motion. But for some people it means less pushing, and less pushing is kinder to the bowel and to the skin around it.",
      ],
      image: {
        file: "posture-angle-compare.webp",
        src: "/gut-health/posture-angle-compare.webp",
        alt: "Side-by-side line drawings of a person sitting upright on a Western toilet and a person squatting, with a green line tracing the lower back",
        aspect: "3 / 2",
        prompt:
          "Clean two-panel educational diagram, side view silhouette. Left: sitting upright on a Western toilet with the lower bowel path bent. Right: squatting with knees above hips and the path straighter. Fresh green (#81AF12) highlight on the bowel path, charcoal (#333333) outlines, off-white background. No text, not graphic.",
      },
    },
    {
      kind: "versus",
      id: "indian-vs-western",
      title: "Indian toilet or Western toilet?",
      intro: "Neither is always better. Each has a catch.",
      left: {
        title: "Indian (squat) toilet",
        items: [
          "Gives the squatting shape without any extra help",
          "Hard if you have tight ankles, knee pain or a large belly",
          "Some people lean back or rise onto their toes, which makes the body tense",
          "A little heel support makes it steadier",
        ],
      },
      right: {
        title: "Western (seat) toilet",
        items: [
          "Easy to sit on, and kinder to sore knees",
          "Knees are bent at about a right angle, so the bowel bend stays tighter",
          "A small footstool lifts your knees above your hips and gets closer to a squat",
          "Evidence for footstools is mixed: one study helped healthy adults, one trial did not help people with constipation",
        ],
      },
    },
    {
      kind: "steps",
      id: "two-inch-heel-method",
      title: "The 2-inch heel method",
      intro:
        "This is the method we teach at IBS Clinic. It uses things you already have at home.",
      steps: [
        {
          title: "Raise your heels about 2 inches",
          body: "Use a firm slipper with a raised heel, a small wedge, or a low stool under your heels. Choose something that cannot slip.",
        },
        {
          title: "Lean forward a little",
          body: "Rest your forearms on your thighs. Keep your back relaxed, not stiff.",
        },
        {
          title: "Breathe in slowly and let the belly drop",
          body: "Let your belly soften and move outward as the air comes in. Do not hold your breath.",
        },
        {
          title: "Breathe out slowly, like blowing at a candle",
          body: "Blow out gently, as if you want the flame to flicker but not go out. Keep your shoulders and jaw loose.",
        },
        {
          title: "Wait. Do not force.",
          body: "Repeat the breathing a few times and give the urge a few minutes. If nothing comes, get up and try again later instead of pushing hard.",
        },
      ],
      note: "Skip this and ask your doctor first if you feel dizzy, have pain, have knee or hip problems, or are pregnant.",
    },
    {
      kind: "list",
      id: "habits",
      title: "Habits that help the posture work",
      items: [
        "Go when you feel the urge. Holding it in again and again can dull the urge over time.",
        "Try after breakfast or a warm drink. Eating wakes up the bowel, so this is often the easiest time.",
        "Keep toilet time short. Long sitting adds pressure on the veins around the anus.",
        "Leave your phone outside. Scrolling makes you sit longer without noticing.",
      ],
    },
    {
      kind: "note",
      id: "limits",
      tone: "info",
      title: "What posture cannot do",
      body: "Posture will not fix a gut that moves too slowly, or a diet that is heavy on raw fibre. That is why we use it together with meal timing, diet and treatment, not on its own.",
    },
    {
      kind: "prose",
      id: "if-still-stuck",
      title: "If you are still straining",
      paras: [
        "If you do everything right and still strain or feel unfinished, the cause may be the pelvic muscles themselves. Read about this on our [pelvic floor page](/pelvic-floor-dysfunction/).",
        "If you rely on a churna or laxative to go, see our page on [laxative dependency](/laxative-dependency/).",
      ],
    },
  ],
  faq: [
    {
      q: "Is squatting really better than sitting for passing stool?",
      a: "For some people it is easier, because the bowel path is straighter and less straining is needed. But results vary from person to person, and a small number of trials have not found a benefit for long-term constipation.",
    },
    {
      q: "Can I use a footstool with a Western toilet?",
      a: "Yes. A stool that lifts your knees above your hips is a safe thing to try. In healthy adults one study found less straining and a feeling of more complete emptying. In people with long-term constipation another trial found no benefit, so see how your own body responds.",
    },
    {
      q: "How high should my heels be?",
      a: "About 2 inches (5 cm) is what we use. Higher is not better if you feel unsteady. Stability matters more than height.",
    },
    {
      q: "Will this fix my constipation?",
      a: "No single habit fixes constipation on its own. Many patients find that posture and breathing make passing stool easier, and we combine them with diet, timing and treatment.",
    },
    {
      q: "Indian toilet par heels uthana mushkil lagta hai, kya karein?",
      a: "Pehle ek firm, non-slip slipper ya chhota wedge try karein, aur kuch der practice karein. Agar ghutne ya kamar mein dard ho ya balance na bane, to doctor se poochhein. Zabardasti na karein.",
      hi: true,
    },
  ],
  refs: ["R4", "R5", "R6"],
  next: ["pelvic-floor-dysfunction", "ibs-diet", "laxative-dependency"],
  updated: "10 October 2026",
};
