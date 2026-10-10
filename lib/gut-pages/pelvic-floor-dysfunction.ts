import type { GutPageData } from "./types";

export const PELVIC_FLOOR: GutPageData = {
  slug: "pelvic-floor-dysfunction",
  metaTitle: "Pelvic Floor Dysfunction and Constipation: Why You Strain | IBS Clinic",
  metaDescription:
    "Soft stool but still straining? A pelvic floor that tightens instead of relaxing can stop the bowel from emptying. Signs, causes and treatment, in plain words.",
  kicker: "Pelvic floor and bowel health",
  h1: "Normal Stool, But the Bowel Won't Empty? Look at the Pelvic Floor",
  lead: "Some people pass soft stool every day and still feel unfinished. One hidden reason is a group of muscles that tighten when they should relax.",
  hinglish: "Motion roz hota hai, par pet saaf nahi hota?",
  hero: {
    file: "pelvic-floor-hero.webp",
    alt: "A calm illustration of the lower belly showing the muscles that control the bowel exit",
    aspect: "4 / 3",
    prompt:
      "Soft, friendly medical illustration (not graphic) of a side view of the human torso, outline style, showing the lower bowel and the sling-shaped pelvic muscle in fresh green (#81AF12) with charcoal (#333333) outlines on a light cream-white background. No text, no labels, no nudity. Calm, trustworthy, editorial style.",
  },
  summary: [
    "The pelvic floor is a group of muscles at the bottom of your belly. To pass stool, they must relax.",
    "In some people they tighten instead. Doctors call this dyssynergic defecation, or anismus.",
    "It can cause straining, stool that comes out in small pieces, and a feeling that something is still left.",
    "It can be treated. Biofeedback training has good trial evidence, and a doctor should confirm the cause first.",
  ],
  blocks: [
    {
      kind: "prose",
      id: "what-is-pelvic-floor",
      title: "What is the pelvic floor, in plain words?",
      paras: [
        "Think of the pelvic floor as a muscle hammock at the bottom of your belly. It holds your bladder and bowel in place.",
        "One strong muscle in it, called the puborectalis, loops around the end of the bowel like a sling. The sling keeps the bowel slightly bent, which helps you hold stool in until you are ready.",
        "When you sit to pass stool, the sling is meant to loosen so the path can open. The belly pushes gently, the muscles relax, and the stool moves out.",
      ],
      image: {
        file: "pelvic-floor-sling.webp",
        alt: "Simple diagram of the bowel exit with the pelvic muscle sling relaxed and tight",
        aspect: "3 / 2",
        prompt:
          "Clean two-panel educational diagram, side view of the lower bowel. Left panel: the pelvic muscle sling relaxed, path open. Right panel: sling tight, path bent and closed. Fresh green (#81AF12) and charcoal (#333333) on off-white. No text, no human faces, not graphic.",
      },
    },
    {
      kind: "prose",
      id: "what-goes-wrong",
      title: "What goes wrong: dyssynergic defecation",
      paras: [
        "Dyssynergic defecation (also called anismus) means the muscles work against each other. When you push, the sling and the exit muscles stay tight, or even tighten more.",
        "So the push has nowhere to go. Stool is squeezed against a partly closed door, and only a little gets out each time.",
        "This is a recognised cause of long-term constipation, and doctors can test for it. It is not something you are doing wrong. It is a timing problem between muscles that can be retrained.",
      ],
    },
    {
      kind: "steps",
      id: "stool-trap",
      title: "The Normal Stool Trap, step by step",
      intro:
        "This is the pattern many of our patients describe. The stool is soft and normal, and still the bowel does not feel clear.",
      steps: [
        { title: "You feel the urge and sit down", body: "Everything feels normal so far. The stool is not hard." },
        {
          title: "The pelvic muscles tighten instead of loosening",
          body: "The exit stays partly closed, even though you want it open.",
        },
        {
          title: "You push harder (zor lagana)",
          body: "Pushing against a tight muscle does not open it. It often makes it tighter.",
        },
        {
          title: "Stool comes out in small pieces",
          body: "You pass a little, the urge fades, and part of the stool stays behind.",
        },
        {
          title: "What stays behind causes trouble",
          body: "Leftover stool can bring gas, a heavy belly and the urge to go again soon.",
        },
        {
          title: "Some people reach for a laxative",
          body: "A laxative works on the stool. It does not fix the muscle timing, so the pattern often returns.",
        },
      ],
      loop: "Next morning, the same thing happens again.",
      note: "We hear this pattern often. It is a pattern, not a diagnosis. Only a proper check can tell whether it is yours.",
    },
    {
      kind: "list",
      id: "self-check",
      title: "A 2-minute self-check",
      intro: "Read these slowly. Tick the ones that sound like you.",
      items: [
        "You push hard, but very little comes out",
        "Stool comes in small pieces, not in one go",
        "You feel something is still left after you finish",
        "You sit on the toilet for a long time",
        "Your stool is soft, yet it is still hard to pass",
        "You sometimes need to press near the anus to help the stool come out",
      ],
      outro:
        "Several ticks do not prove anything. They only mean a doctor should look at your pattern. This list is for awareness, not diagnosis.",
    },
    {
      kind: "note",
      id: "see-doctor-first",
      tone: "care",
      title: "See a doctor first if you have any of these",
      body: "Blood in the stool, black stools, weight loss without trying, fever, severe pain, or a new change in bowel habit that does not settle. These need to be checked before anything else.",
    },
    {
      kind: "prose",
      id: "piles-fissures",
      title: "Straining, piles and fissures",
      paras: [
        "Hard, repeated straining puts pressure on the veins and skin around the anus. Over time it can contribute to piles (haemorrhoids) or small tears called fissures.",
        "Treating the reason you strain, instead of only pushing harder, helps protect you from both.",
      ],
    },
    {
      kind: "prose",
      id: "how-doctors-treat",
      title: "How doctors treat it",
      paras: [
        "The best-studied treatment is biofeedback therapy. A trained therapist uses small sensors to show you, on a screen, what your muscles do when you push. You practise until pushing and relaxing work together.",
        "In clinical trials, biofeedback helped more people than sham feedback or standard care, and the benefit lasted. One trial found home-based training worked about as well as training in a clinic. How easy it is to find a biofeedback therapist can vary from city to city.",
        "Your doctor may also use medicines, fibre or laxatives alongside it. At IBS Clinic we do not replace this care. If your doctor advises biofeedback, please follow that advice too.",
      ],
    },
    {
      kind: "prose",
      id: "what-we-do",
      title: "What we do at IBS Clinic",
      paras: [
        "Our doctors first listen to your full story: how often you go, how long you sit, what you eat and when. Then we build a plan around two parts of the problem, the gut upstream and the exit downstream.",
        "Two habits we teach early are a better toilet posture and slow breathing. You can learn both step by step on our [toilet posture page](/toilet-posture-for-constipation/). For the food side, see our [IBS diet guide](/ibs-diet/).",
      ],
    },
  ],
  faq: [
    {
      q: "What is dyssynergic defecation?",
      a: "It means the muscles that control the bowel exit do not work together. When you push, the pelvic floor muscles tighten instead of relaxing, so stool comes out with difficulty or in small pieces. It is also called anismus.",
    },
    {
      q: "Is pelvic floor dysfunction the same as IBS?",
      a: "No. They are different problems that can overlap. IBS is about a sensitive, irregular gut. Pelvic floor dysfunction is about muscle coordination at the exit. You can have one or both, and a doctor can tell them apart.",
    },
    {
      q: "Should I do Kegel exercises?",
      a: "Not before a doctor checks you. Kegels teach a muscle to squeeze, and in this problem the muscle usually already tightens too much. Retraining it to relax is different from strengthening it.",
    },
    {
      q: "Why do I strain so much when my stool is soft?",
      a: "Soft stool can still be hard to pass if the exit muscles do not open. This is a common reason people feel unfinished even when the stool looks normal.",
    },
    {
      q: "Motion roz hota hai par pet saaf nahi hota, kya yeh pelvic floor ki problem ho sakti hai?",
      a: "Ho sakti hai, par yeh kai wajah se ho sakta hai. Zor lagana, chhote-chhote tukdon mein motion aur 'kuch baki reh gaya' ka ehsaas pelvic floor ki taraf ishara kar sakte hain. Sahi karan doctor ki jaanch ke baad hi pata chalta hai.",
      hi: true,
    },
    {
      q: "Do I need tests?",
      a: "Your doctor decides. Special tests such as anorectal manometry can check how the muscles work. Some people start with a careful history and a simple examination.",
    },
  ],
  refs: ["R1", "R2", "R3"],
  next: ["toilet-posture-for-constipation", "laxative-dependency", "gas-and-bloating"],
  updated: "10 October 2026",
};
