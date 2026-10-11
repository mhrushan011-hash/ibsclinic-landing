import type { GutPageData } from "./types";

export const METABOLIC_HEALTH: GutPageData = {
  slug: "ibs-and-metabolic-health",
  metaTitle: "Thyroid, PCOS, Diabetes and Your Gut: Constipation and Bloating | IBS Clinic",
  metaDescription:
    "Thyroid problems and diabetes can slow the gut, and some people with PCOS report bloating. Learn how they connect, and why your diet may feel harder than others.",
  kicker: "Thyroid, PCOS, diabetes and the gut",
  h1: "Thyroid, PCOS or Diabetes? Your Gut May Be Slowing Down Too",
  lead: "Digestion problems often travel with other health conditions. Here is how they can connect, and why a diet that works for others may not work for you.",
  hinglish: "Thyroid ya PCOS ke saath kabz aur gas kyun badh jati hai?",
  hero: {
    file: "metabolic-hero.webp",
    src: "/gut-health/metabolic-hero.webp",
    alt: "A woman reviewing a diet chart with a dietitian, a glass of warm water on the table",
    aspect: "4 / 3",
    prompt:
      "Warm, respectful photograph of an Indian woman in her thirties and a dietitian in a bright consultation room reviewing a printed diet chart together, glass of warm water on the table, soft daylight. No visible medical equipment, no text, no logos.",
  },
  summary: [
    "An underactive thyroid can slow the gut and make constipation common.",
    "Diabetes can damage the nerves that control the gut, and that can cause constipation, loose motions or both.",
    "Women with PCOS often tell us about bloating and irregular motions.",
    "If your weight stalls and your belly feels bigger on a diet, tell both your dietitian and your gut doctor.",
    "Never stop your thyroid, sugar or PCOS medicines on your own.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "thyroid",
      title: "Your gut and your thyroid",
      paras: [
        "Your thyroid helps set the speed of many things in your body, including how fast food moves through your gut. When thyroid hormone is low (hypothyroidism), the gut often slows down and constipation is common. Both an underactive and an overactive thyroid can change gut movement.",
        "Take your thyroid medicine exactly as your doctor has told you. If gut symptoms continue even when your thyroid is well controlled, they should be checked on their own.",
      ],
    },
    {
      kind: "prose",
      id: "diabetes",
      title: "Diabetes and the gut",
      paras: [
        "Over many years, high blood sugar can damage nerves, including the nerves that control the gut. This is called autonomic neuropathy. It can lead to constipation, loose motions, or both.",
        "Good sugar control and regular check-ups matter most. Please tell your diabetes doctor before you add a new fibre product or herbal powder.",
      ],
    },
    {
      kind: "prose",
      id: "pcos",
      title: "PCOS and bloating",
      paras: [
        "Many women with PCOS tell us about bloating, gas and irregular bowel habits. Hormone changes, eating patterns and constipation can all play a part, and each person is different.",
        "Because each person is different, we look at your own pattern and build a plan that fits it.",
      ],
    },
    {
      kind: "list",
      id: "diet-feels-harder",
      title: "What many of our patients tell us about dieting",
      intro: "This comes from patient conversations at our clinic, not from a study.",
      items: [
        "The diet chart is full of raw salad, sprouts, oats and shakes, and the belly turns gassy and hard",
        "The weight stops moving after a few weeks while the belly feels bigger",
        "They still feel unsatisfied after going to the toilet",
        "They start to feel the diet, or their body, has failed",
      ],
      outro:
        "None of this means you did something wrong. It means your gut may need attention along with your diet. A gut that is full of gas and not clearing well can make your belly look and feel bigger even when you are doing everything right.",
    },
    {
      kind: "versus",
      id: "who-does-what",
      title: "Who looks after what",
      intro: "We work alongside your other doctors, never instead of them.",
      left: {
        title: "Your endocrinologist and dietitian",
        items: [
          "Thyroid dose and tests",
          "Blood sugar control",
          "Calorie, protein and weight-loss plan",
          "PCOS treatment",
        ],
      },
      right: {
        title: "IBS Clinic",
        items: [
          "Constipation, gas, bloating and urge patterns",
          "Toilet habits, posture and breathing",
          "Meal timing and gentler fibre choices",
          "An Ayurvedic gut-calming plan, with every medicine you take in view",
        ],
      },
    },
    {
      kind: "note",
      id: "keep-medicines",
      tone: "care",
      title: "Keep taking your regular medicines",
      body: "Do not stop or change thyroid, diabetes or PCOS medicines on your own. Tell our doctors about every medicine and supplement you take, so timings can be planned safely.",
    },
    {
      kind: "prose",
      id: "next-steps",
      title: "Where to go from here",
      paras: [
        "Start with our [IBS diet guide](/ibs-diet/) for fibre and meal timing, and read about [gas and bloating](/gas-and-bloating/) if the evenings are the hardest part of your day.",
        "If you strain even when your stool is soft, the [pelvic floor page](/pelvic-floor-dysfunction/) explains one reason why.",
      ],
    },
  ],
  faq: [
    {
      q: "Can thyroid problems cause constipation?",
      a: "Yes. An underactive thyroid often slows the gut, and constipation is a common result. If you also have fatigue, weight gain or feel cold easily, ask your doctor about a thyroid test.",
    },
    {
      q: "Can diabetes cause bloating and constipation?",
      a: "It can. Long-standing high blood sugar can damage the nerves that control the gut, which may cause constipation, loose motions or bloating. Your diabetes doctor should know about these symptoms.",
    },
    {
      q: "Why is my weight stuck even though I follow my diet?",
      a: "There are many possible reasons, and your doctor or dietitian is the right person to look into them. If you also have constipation or bloating, mention it. A gentler fibre plan sometimes helps.",
    },
    {
      q: "Can I take your powders with my thyroid or diabetes medicine?",
      a: "Tell our doctors about every medicine you take. They will advise on timing so that nothing clashes. Do not stop your regular medicine.",
    },
    {
      q: "PCOS mein pet kyun phoolta hai?",
      a: "PCOS mein hormone ka badlav, khaane ki aadat aur kabz sab pet ko asar kar sakte hain. Sahi karan jaanch ke baad hi doctor bata sakte hain. Apni diet aur symptoms ka record rakhein.",
      hi: true,
    },
  ],
  refs: ["R7", "R10", "R9"],
  next: ["ibs-diet", "gas-and-bloating", "pelvic-floor-dysfunction"],
  updated: "10 October 2026",
};
