import type { GutPageData } from "./types";

export const IBS_DIET: GutPageData = {
  slug: "ibs-diet",
  metaTitle: "IBS Diet Guide: What to Eat, What to Avoid and When | IBS Clinic",
  metaDescription:
    "No single IBS diet suits everyone, but a few simple rules about fibre, raw salads and meal timing help some people. A plain-language guide from IBS Clinic.",
  kicker: "IBS diet and meal timing",
  h1: "IBS Diet Guide: What to Eat, What to Go Easy On, and When",
  lead: "There is no one diet for everyone with IBS. A few simple rules about fibre, raw food and meal timing help some people feel lighter.",
  hinglish: "Pet mein gas ke liye kya khayein, kya nahi?",
  hero: {
    file: "ibs-diet-hero.webp",
    src: "/gut-health/ibs-diet-hero.webp",
    alt: "A simple Indian thali with cooked vegetables, dal, rice, curd, a roti and a little salad, with a steel glass of water beside it",
    aspect: "4 / 3",
    prompt:
      "Warm, natural-light food photograph of a simple home-style Indian thali: cooked seasonal vegetables, rice, small portion of dal, a bowl of curd, one roti, and a steel glass of warm water. Clean wooden table, soft daylight, no text, no logos. Fresh and calm, not styled like an ad.",
  },
  summary: [
    "Fibre is good, but a sudden big jump can cause gas and a heavy belly in a sensitive gut.",
    "Soluble fibre (like isabgol and oats) usually suits IBS better than wheat bran.",
    "Cooked, warm, simple food is often easier than large raw salads and sprouts.",
    "Eat at regular times, eat slowly, and sip lukewarm water through the day.",
    "A two-week food and symptom diary shows your own triggers.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "fibre-jump",
      title: "Fibre is not the problem. A sudden jump is.",
      paras: [
        "Fibre feeds the good bacteria in your gut and adds bulk to stool. But when a diet chart suddenly adds big bowls of raw salad, sprouts, oats and shakes, a sensitive gut can react with gas, bloating and a heavy belly.",
        "Not all fibre behaves the same. Soluble fibre (isabgol, oats, ispaghula) usually suits IBS better. Insoluble fibre such as wheat bran often makes IBS worse, so advice to simply eat more bran is poor for some people.",
        "If you add fibre, add it slowly, a little more each week, and drink enough water with it.",
      ],
      image: {
        file: "ibs-diet-fibre-types.webp",
        src: "/gut-health/ibs-diet-fibre-types.webp",
        alt: "Illustration comparing soluble fibre foods and insoluble fibre foods on a simple chart",
        aspect: "3 / 2",
        prompt:
          "Clean flat illustration with two groups of Indian foods side by side: soluble fibre (oats, isabgol husk in a spoon, banana) and insoluble fibre (wheat bran, raw salad leaves, sprouts). Fresh green (#81AF12) and charcoal (#333333), off-white background, no text, no labels.",
      },
    },
    {
      kind: "versus",
      id: "easier-vs-triggers",
      title: "Easier on the gut, and common triggers",
      intro: "Triggers differ from person to person. Use this as a starting point, not a rulebook.",
      left: {
        title: "Usually easier",
        items: [
          "Cooked vegetables such as carrot, pumpkin, spinach and cucumber",
          "Rice, oats in small portions, ragi and jowar",
          "Eggs, fish, chicken and paneer",
          "Curd (dahi) in small portions, which some people tolerate better than milk",
          "Warm, home-cooked meals",
        ],
      },
      right: {
        title: "Common triggers",
        items: [
          "Large bowls of raw salad or sprouts, especially started all at once",
          "Wheat bran and very high-fibre shakes",
          "Raw onion and garlic, and big portions of dal, rajma or chana",
          "Milk, if you are lactose sensitive",
          "Deep-fried snacks, fizzy drinks and sorbitol chewing gum",
        ],
      },
    },
    {
      kind: "steps",
      id: "meal-timing",
      title: "Meal timing that helps",
      steps: [
        {
          title: "Eat three regular meals",
          body: "Skipping meals and then eating a very big one can upset a sensitive gut. Avoid heavy meals late at night.",
        },
        {
          title: "Eat slowly and chew well",
          body: "Eating fast makes you swallow more air, and that adds to gas.",
        },
        {
          title: "Sip lukewarm water through the day",
          body: "Many of our patients find lukewarm water gentler than cold. Ask your doctor how much is right for you.",
        },
        {
          title: "Take your powder before food",
          body: "If your IBS Clinic doctor has prescribed an Ayurvedic powder, take it 10 to 15 minutes before the meal with lukewarm water, unless they tell you otherwise.",
        },
      ],
    },
    {
      kind: "prose",
      id: "weight-loss-diets",
      title: "A note for people on weight-loss diets",
      paras: [
        "Many weight-loss plans are heavy on raw salad, sprouts, oats and protein shakes. If you notice more gas, a hard belly or less bowel clearance a few weeks in, tell your dietitian. Small changes, such as cooking some vegetables or adding fibre more slowly, often help.",
        "Your dietitian and we are on the same side. Losing weight and feeling comfortable in your gut can go together. See also [thyroid, PCOS, diabetes and your gut](/ibs-and-metabolic-health/).",
      ],
    },
    {
      kind: "prose",
      id: "tea-coffee-milk",
      title: "Tea, coffee and milk",
      paras: [
        "One small cup of tea or coffee in the morning is usually fine. More than that can trigger loose motions or cramps in some.",
        "Milk can cause gas in people who are lactose sensitive. Curd is often easier. If you cannot pass stool without a cup of chai, read our page on [laxative and churna dependency](/laxative-dependency/).",
      ],
    },
    {
      kind: "list",
      id: "food-diary",
      title: "Try this for two weeks: a food and symptom diary",
      items: [
        "Write down what you ate and when",
        "Note gas, bloating, evening heaviness and how many times you went to the toilet",
        "Note your stress and sleep, because they affect the gut too",
        "Change one thing at a time, so you know what made the difference",
        "Share the diary on your free evaluation call",
      ],
    },
    {
      kind: "note",
      id: "diet-not-a-plan",
      tone: "care",
      title: "Diet is not a full treatment plan",
      body: "If you have blood in the stool, weight loss without trying, or pain that wakes you at night, see a doctor first. A diet change should not delay a proper check.",
    },
  ],
  faq: [
    {
      q: "Is a high-fibre diet good for IBS?",
      a: "Some fibre helps, but the type and the speed matter. Soluble fibre such as isabgol and oats usually suits IBS better, while wheat bran often makes it worse. Add fibre slowly, not all at once.",
    },
    {
      q: "Are raw salads bad for IBS?",
      a: "They can be hard to digest for some people, especially in large portions. Cooked vegetables are usually gentler. Try small portions and see how your body reacts.",
    },
    {
      q: "Is isabgol good for IBS?",
      a: "Isabgol (psyllium) is a soluble fibre and is often used in IBS. Doctors usually start with a small amount and raise it slowly. Take it with enough water, and tell your doctor if it makes you more bloated.",
    },
    {
      q: "Is curd good for IBS?",
      a: "Some people tolerate curd better than milk, because bacteria in curd break down some of the lactose. Start with a small portion and watch for symptoms.",
    },
    {
      q: "Pet mein gas ke liye kya khana chahiye?",
      a: "Simple, garam, ghar ka pakka khana aksar halka lagta hai. Kachha salad, sprouts aur zyada fibre ek saath na badhayein. Time par khayein, dheere chabayein, aur din mein thoda-thoda gunguna paani peete rahein.",
      hi: true,
    },
    {
      q: "Do I need a low-FODMAP diet?",
      a: "It can help some people, but it is a three-step method, meant to be done for a short time with guidance, not forever. Ask a doctor or dietitian before starting.",
    },
  ],
  refs: ["R9"],
  next: ["gas-and-bloating", "ibs-and-metabolic-health", "toilet-posture-for-constipation"],
  updated: "10 October 2026",
};
