import type { GutPageData } from "./types";

export const GAS_AND_BLOATING: GutPageData = {
  slug: "gas-and-bloating",
  metaTitle: "Why Your Stomach Bloats in the Evening: Gas and Bloating | IBS Clinic",
  metaDescription:
    "Flat in the morning, swollen by evening? Learn why gas and bloating build through the day in IBS, what can help, and when to see a doctor.",
  kicker: "Gas and bloating",
  h1: "Why Your Stomach Gets More Bloated Every Evening",
  lead: "Some people wake up with a flat belly and feel swollen by 5 or 7 PM. Here is what can be going on, in simple words.",
  hinglish: "Shaam tak pet phool jata hai, gas banti rehti hai?",
  hero: {
    file: "bloating-hero.webp",
    src: "/gut-health/bloating-hero.webp",
    alt: "A person sitting at a desk in the evening, hand resting on a comfortably full belly, looking tired but calm",
    aspect: "4 / 3",
    prompt:
      "Natural, respectful photograph or soft illustration of an Indian adult at an office desk in warm evening light, one hand resting on the stomach, expression tired but calm. Neutral clothing, no medical props, no text. Fresh green (#81AF12) accent only in the environment.",
  },
  summary: [
    "A belly that swells through the day is very common in IBS. It is called bloating or distension.",
    "Gas comes from gut bacteria breaking down food. A sensitive gut feels normal amounts of gas as too much.",
    "When stool does not clear well, food has more time to ferment, and gas can build up.",
    "Regular meals, lukewarm water, slow eating and good toilet habits are good first steps.",
    "Severe pain, vomiting or blood need a doctor first.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "where-gas-comes-from",
      title: "Where does the gas come from?",
      paras: [
        "Bacteria in your large bowel break down food that is not fully digested. They make gas as a result. This is normal.",
        "In IBS the gut is often more sensitive, so even a normal amount of gas feels like too much. Swallowed air also adds to it, from eating fast, fizzy drinks and chewing gum.",
        "When stool moves slowly or does not clear fully, food stays longer in the bowel, and more gas can build up.",
      ],
    },
    {
      kind: "steps",
      id: "evening-pattern",
      title: "How a day of bloating can build",
      intro: "This is a common pattern patients describe to us. Yours may look a little different.",
      steps: [
        { title: "Morning: the belly feels flatter", body: "After a night of rest, you feel fairly light." },
        {
          title: "Meals add up",
          body: "Breakfast, tea, lunch. Food reaches the large bowel, where bacteria make gas.",
        },
        {
          title: "The bowel is not fully cleared",
          body: "If you did not feel fully clear in the morning, the bowel is still carrying a load.",
        },
        {
          title: "Gas gets trapped",
          body: "A sensitive gut feels this as pressure, tightness or a hard belly.",
        },
        {
          title: "Evening peak",
          body: "By late afternoon or evening, the belly feels most swollen. Some people also feel acidity or a burning feeling.",
        },
        {
          title: "The urge returns",
          body: "You may rush to the toilet, pass only gas or a little stool, and still feel unsatisfied.",
        },
      ],
      loop: "Tomorrow, the day starts again.",
      note: "This is a pattern, not a diagnosis.",
    },
    {
      kind: "prose",
      id: "gas-and-acidity",
      title: "Gas and acidity together",
      paras: [
        "Some people feel burning or sour burps along with bloating. Gas pressure can feel like it is pushing upward, and acidity also has other causes.",
        "Please do not keep swapping between gas, acidity and laxative medicines without a plan. If it does not settle, see a doctor.",
      ],
    },
    {
      kind: "prose",
      id: "sibo",
      title: "SIBO, in plain words",
      paras: [
        "SIBO means too many bacteria in the small intestine. It can cause bloating and gas. Doctors test for it with a breath test and treat it with prescribed medicine.",
        "Not everyone who is bloated has SIBO. Please do not take antibiotics on your own.",
      ],
    },
    {
      kind: "list",
      id: "what-helps",
      title: "What can help, to try first",
      items: [
        "Eat at regular times, and do not skip meals",
        "Eat slowly and chew well",
        "Sip lukewarm water through the day",
        "Take a short, easy walk after meals, then build up to 20 to 30 minutes of activity on most days",
        "Go to the toilet when you feel the urge, using a good [toilet posture](/toilet-posture-for-constipation/)",
        "Cut down on fizzy drinks and chewing gum",
        "Notice your own food triggers with our [IBS diet guide](/ibs-diet/)",
      ],
    },
    {
      kind: "note",
      id: "urgent",
      tone: "care",
      title: "Get medical help quickly if",
      body: "Your belly is swollen with severe pain, you are vomiting, or you cannot pass gas or stool at all. Chest pain or chest pressure also needs urgent medical care and should never be put down to gas. Also see a doctor for blood in the stool, black stools or weight loss without trying.",
    },
  ],
  faq: [
    {
      q: "Why am I bloated only in the evening?",
      a: "Gas builds through the day as you eat and drink, and the bowel may not clear fully. By evening the belly has had hours to fill, so it often feels most swollen then.",
    },
    {
      q: "Is bloating a sign of IBS?",
      a: "It is a common symptom of IBS, but it also has other causes. If it keeps coming back, get it checked rather than guessing.",
    },
    {
      q: "Can constipation cause gas?",
      a: "Yes, it can. When stool stays in the bowel longer, bacteria have more time to ferment it, and gas can build up.",
    },
    {
      q: "Why do I need to go right after eating?",
      a: "Eating makes the bowel move. This is normal, and it is called the gastrocolic reflex. Some people with IBS feel this urge more strongly, so it is worth mentioning to your doctor.",
    },
    {
      q: "Pet mein gas bahut banti hai, kya karein?",
      a: "Time par khayein, dheere chabayein aur gunguna paani peete rahein. Fizzy drinks kam karein, khane ke baad thoda tahlein, aur toilet jaane ki urge ko rokein nahi. Agar aaram na mile to doctor se milein.",
      hi: true,
    },
    {
      q: "When should I see a doctor?",
      a: "See a doctor if bloating is new and does not settle, if it comes with blood in the stool, weight loss, fever or severe pain, or if it affects your daily life.",
    },
  ],
  refs: ["R9"],
  next: ["incomplete-evacuation", "ibs-diet", "pelvic-floor-dysfunction"],
  updated: "10 October 2026",
};
