import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "IBS FAQ — Symptoms, Diet, Treatment & Telehealth | IBS Clinic",
  description:
    "Answers to the most common questions about irritable bowel syndrome — symptoms, causes, types, diet (low-FODMAP), treatment, stress, and how IBS Clinic's telehealth consultation works.",
  alternates: { canonical: "/faq" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

interface Faq {
  q: string;
  a: string;
}

interface FaqGroup {
  category: string;
  items: ReadonlyArray<Faq>;
}

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    category: "Treatment at IBS Clinic",
    items: [
      {
        q: "Is IBS curable?",
        a: "There's no overnight cure for IBS, but most patients reach durable, symptom-free living through a personalised plan. Our 90-day programme is designed exactly around that.",
      },
      {
        q: "How is your treatment different from generic Ayurveda?",
        a: "We're a specialist clinic — IBS only, not general gastric or wellness. Plans are tailored to your IBS subtype (IBS-D, IBS-C, IBS-M), supported by modern testing where useful, and tracked weekly.",
      },
      {
        q: "How long does it take to feel better?",
        a: "Most patients feel meaningful change in 4–8 weeks and 80–90% symptom reduction by ~90 days. Some take longer — we plan for your case, not an average.",
      },
      {
        q: "Do I need to come to Mumbai?",
        a: "No. Our patients across Hyderabad, Kolkata, Chennai, Ahmedabad, Pune, Delhi, Bangalore and Kerala consult by video or phone. Medicines reach you wherever you are in India.",
      },
      {
        q: "What does it cost?",
        a: "The free evaluation has zero cost. Treatment cost depends on your plan duration and shipping. Your doctor will discuss this transparently before you commit.",
      },
      {
        q: "What happens during the free 15-minute evaluation?",
        a: "A senior doctor reviews your symptoms, history, and prior treatments. You'll leave the call with a clear opinion on whether IBS Clinic is right for you — no pressure to enrol.",
      },
      {
        q: "Is my data private?",
        a: "Yes. Your details are seen only by our medical team. We comply with India's DPDP Act 2023 — see our Privacy Policy.",
      },
    ],
  },
  {
    category: "IBS basics",
    items: [
      {
        q: "What is Irritable Bowel Syndrome (IBS)?",
        a: "IBS is a common gastrointestinal disorder that affects the large intestine, causing symptoms like cramping, bloating, gas, diarrhoea, and constipation.",
      },
      {
        q: "What are the common symptoms of IBS?",
        a: "Common symptoms include abdominal pain, bloating, gas, diarrhoea, constipation, or alternating bouts of diarrhoea and constipation.",
      },
      {
        q: "What causes IBS?",
        a: "The exact cause isn't fully known, but it's linked to a disordered gut–brain interaction — abnormal gut contractions, a hypersensitive bowel, food sensitivities, stress, and an imbalance in gut bacteria.",
      },
      {
        q: "How is IBS diagnosed?",
        a: "IBS is diagnosed based on your symptoms and medical history. Doctors may also run tests — blood tests, stool tests, and sometimes a colonoscopy — to rule out other conditions.",
      },
      {
        q: "What are the different types of IBS?",
        a: "There are three main types: IBS with constipation (IBS-C), IBS with diarrhoea (IBS-D), and IBS with mixed symptoms (IBS-M).",
      },
      {
        q: "How common is IBS?",
        a: "IBS affects roughly 10–15% of the global population, making it one of the most common gastrointestinal disorders.",
      },
      {
        q: "Is IBS a chronic condition?",
        a: "Yes — symptoms can last a long time or recur, but the condition is very manageable through diet, lifestyle, and targeted treatment.",
      },
      {
        q: "Is IBS dangerous or life-threatening?",
        a: "No. IBS can affect quality of life, but it isn't life-threatening and doesn't increase the risk of serious conditions like cancer.",
      },
      {
        q: "Can IBS lead to other health problems?",
        a: "IBS doesn't progress to more serious disease, but if left unmanaged it can significantly affect daily life and mental health.",
      },
    ],
  },
  {
    category: "Diet & nutrition",
    items: [
      {
        q: "What foods trigger IBS symptoms?",
        a: "Common triggers include dairy, fatty foods, caffeine, alcohol, spicy foods, and gas-producing foods like beans and cabbage.",
      },
      {
        q: "Can certain diets help manage IBS?",
        a: "Yes. Diets such as the low-FODMAP diet help identify and remove food triggers, often reducing IBS symptoms significantly.",
      },
      {
        q: "What is the FODMAP diet, and how does it help?",
        a: "FODMAPs are fermentable carbohydrates that can cause bloating and gas. A low-FODMAP diet temporarily removes them, then reintroduces foods one by one to find your specific triggers.",
      },
      {
        q: "How can I identify which foods trigger my IBS?",
        a: "A food and symptom diary, combined with a guided elimination diet and support from a professional, is the most reliable way to pinpoint triggers.",
      },
      {
        q: "Is fibre good or bad for IBS?",
        a: "It depends on your subtype. Soluble fibre (oats, psyllium) often helps, while too much insoluble fibre (whole grains) can worsen symptoms for some people.",
      },
      {
        q: "Are there supplements that can help with IBS?",
        a: "Some people benefit from probiotics, peppermint oil, or soluble fibre such as psyllium husk. Introduce them under guidance, as responses vary.",
      },
      {
        q: "How much water should I drink if I have IBS?",
        a: "Staying hydrated matters, especially with IBS-D or IBS-C. Around 8–10 glasses a day helps prevent dehydration and supports regular bowel movements.",
      },
      {
        q: "Can probiotics help manage IBS symptoms?",
        a: "Probiotics can help rebalance gut bacteria and, for some patients, reduce bloating and gas. The right strain and dose matter, so it's worth doing this with guidance.",
      },
      {
        q: "Are there foods that soothe IBS symptoms?",
        a: "Plain yoghurt with live cultures, ginger, and peppermint tea soothe symptoms for many people — though individual tolerance varies.",
      },
      {
        q: "Is fasting good for IBS?",
        a: "Fasting isn't generally recommended and can worsen symptoms for some. Regular, balanced meals usually manage IBS better.",
      },
    ],
  },
  {
    category: "Managing & treating IBS",
    items: [
      {
        q: "How is IBS treated?",
        a: "Treatment combines diet and lifestyle changes, targeted medication for pain, diarrhoea or constipation, and — where stress is a factor — mind-body therapies. At IBS Clinic we integrate clinical Ayurveda with this modern framework.",
      },
      {
        q: "How does stress affect IBS, and how can I manage it?",
        a: "Stress can trigger or worsen symptoms through the gut–brain axis. Deep breathing, yoga, meditation, and therapy all help reduce flare-ups.",
      },
      {
        q: "What role does exercise play in managing IBS?",
        a: "Regular, moderate activity helps regulate bowel movements and lowers stress — both important for keeping symptoms in check.",
      },
      {
        q: "Can therapy or counselling help with IBS?",
        a: "Yes. Cognitive-behavioural therapy (CBT) and gut-directed hypnotherapy are effective for many patients, especially when stress or anxiety drives symptoms.",
      },
      {
        q: "How long does it take for IBS treatments to work?",
        a: "It varies by person and treatment. Some notice change within days or weeks; others take longer. A personalised plan reviewed over time gives the best results.",
      },
      {
        q: "What's the best way to manage IBS symptoms daily?",
        a: "Keep a consistent, balanced diet, manage stress, stay active, sleep well, and avoid your known triggers.",
      },
      {
        q: "Can keeping a symptom diary help?",
        a: "Yes. Tracking food, stress, sleep, and symptoms reveals patterns and triggers, making the condition far easier to manage.",
      },
    ],
  },
  {
    category: "Lifestyle & wellbeing",
    items: [
      {
        q: "Does IBS affect mental health?",
        a: "It can. Living with a chronic, unpredictable condition may lead to anxiety or low mood, and stress can in turn worsen symptoms — which is why we treat the gut and the mind together.",
      },
      {
        q: "Can IBS affect my work or social life?",
        a: "Unpredictable symptoms can interfere with work, travel, and social plans — but good management greatly reduces that disruption.",
      },
      {
        q: "Can sleep quality affect IBS symptoms?",
        a: "Yes. Poor sleep can worsen symptoms, and symptoms can disrupt sleep. Good sleep hygiene helps break that cycle.",
      },
      {
        q: "Are there relaxation techniques that help with IBS?",
        a: "Deep breathing, progressive muscle relaxation, meditation, and guided imagery all reduce stress and can ease symptoms.",
      },
      {
        q: "Can hormonal changes or pregnancy affect IBS?",
        a: "Yes. Many women notice symptom changes around menstruation or during pregnancy due to hormonal fluctuations.",
      },
      {
        q: "How does IBS affect weight management?",
        a: "IBS can make balanced eating harder, leading to weight loss or gain. Working with a nutritionist helps manage both symptoms and weight.",
      },
      {
        q: "What are the best relaxation exercises for IBS patients?",
        a: "Gentle yoga, tai chi, and breathing exercises (pranayama) are commonly recommended for managing IBS.",
      },
      {
        q: "Can I still enjoy eating out if I have IBS?",
        a: "Yes. Choosing IBS-friendly options, asking about ingredients, and sticking to known safe foods lets you eat out with confidence.",
      },
    ],
  },
  {
    category: "Seeing a specialist",
    items: [
      {
        q: "When should I see a doctor about IBS?",
        a: "See a doctor if you have persistent abdominal pain, changes in bowel habits, unexplained weight loss, or symptoms that interfere with daily life.",
      },
      {
        q: "Can IBS symptoms change over time?",
        a: "Yes. Symptoms can fluctuate and may improve or worsen depending on diet, stress, and overall health.",
      },
      {
        q: "Is IBS hereditary?",
        a: "IBS tends to run in families but isn't directly inherited. Genetics, environment, and lifestyle all play a role.",
      },
      {
        q: "Can IBS symptoms mimic other digestive disorders?",
        a: "Yes. Symptoms can overlap with conditions like Crohn's disease, coeliac disease, or lactose intolerance — so an accurate diagnosis matters.",
      },
      {
        q: "How is IBS different from Crohn's disease or colitis?",
        a: "Unlike Crohn's or ulcerative colitis (forms of IBD), IBS does not cause inflammation or permanent damage to the intestines.",
      },
      {
        q: "Can children or teenagers develop IBS?",
        a: "Yes. IBS can develop at any age, though it's diagnosed most often in adults.",
      },
      {
        q: "How do I know if my IBS is getting worse?",
        a: "If symptoms become more frequent or severe, or start affecting your quality of life more, consult a doctor to review your plan.",
      },
      {
        q: "What should I expect from my first appointment?",
        a: "Your doctor reviews your symptoms, medical history, and lifestyle, may recommend tests, and creates a treatment plan tailored to your needs.",
      },
    ],
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) =>
    g.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Help &amp; FAQ
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Everything patients ask us about irritable bowel syndrome — what it
              is, what to eat, how it&apos;s treated, and how our online
              consultation works. Can&apos;t find your answer? We&apos;re a call
              away.
            </p>
          </div>
        </section>

        {/* FAQ GROUPS */}
        <section className="container-page py-16 md:py-20">
          <div className="space-y-12">
            {FAQ_GROUPS.map((group) => (
              <div key={group.category}>
                <h2 className="font-heading text-h2 text-charcoal">
                  {group.category}
                </h2>
                <div className="mt-6 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
                  {group.items.map((f) => (
                    <details key={f.q} className="group p-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                        <span className="font-heading font-semibold text-charcoal">
                          {f.q}
                        </span>
                        <span className="text-2xl leading-none text-green transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-charcoal-soft">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STILL HAVE QUESTIONS */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="mb-8 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                Still have questions?
              </h2>
              <p className="mt-3 text-charcoal-soft">
                Our team is happy to help. Reach us whichever way is easiest.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <a href={`tel:${PHONE_TEL}`} className="card no-underline">
                <p className="text-sm font-medium text-green">📞 Call</p>
                <p className="mt-1 font-heading text-lg text-charcoal">
                  {PHONE_DISPLAY}
                </p>
                <p className="mt-1 text-sm text-charcoal-soft">
                  Mon–Sat, 9 AM – 8 PM IST
                </p>
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="card no-underline"
              >
                <p className="text-sm font-medium text-green">💬 WhatsApp</p>
                <p className="mt-1 font-heading text-lg text-charcoal">
                  Chat with our team
                </p>
                <p className="mt-1 text-sm text-charcoal-soft">
                  Reply within 30 minutes
                </p>
              </a>
              <a href="mailto:info@ibsclinic.com" className="card no-underline">
                <p className="text-sm font-medium text-green">✉️ Email</p>
                <p className="mt-1 font-heading text-lg text-charcoal">
                  info@ibsclinic.com
                </p>
                <p className="mt-1 text-sm text-charcoal-soft">
                  We reply within 1 working day
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">Get answers for your case</h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation. A senior IBS doctor reviews your
              history and answers your specific questions — no pressure to enrol.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-an-appointment" className="btn-primary">
                Book your free evaluation
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary bg-white">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
