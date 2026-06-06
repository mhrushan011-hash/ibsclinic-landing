import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://consultation.ibsclinic.com";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

export const metadata: Metadata = {
  title:
    "Incomplete Evacuation & IBS: Why You Don't Feel Fully Clear | IBS Clinic",
  description:
    "Pass stool daily but still feel the bowel is not clear — gas, bloating, repeated urge, motion but not satisfied? These hidden IBS symptoms are treatable. Free IBS evaluation, tele-consult across India.",
  alternates: { canonical: "/incomplete-evacuation" },
  openGraph: {
    title:
      "Incomplete Evacuation & IBS: Why You Don't Feel Fully Clear | IBS Clinic",
    description:
      "Motion daily but still not satisfied? Gas and bloating daily, repeated urge, 'pet saaf nahi lagta'? Understand the hidden IBS-C pattern and book a free evaluation.",
    type: "website",
  },
};

// Section 3 — request-7 list 1: the hidden symptoms.
const HIDDEN_SYMPTOMS: ReadonlyArray<string> = [
  "Motion daily — but still not satisfied",
  "Gas, bloating & stomach heaviness",
  "Repeated urge to go to the toilet",
  "Feeling like “something is still left”",
  "2–3 bowel movements every morning",
  "Urge after tea, breakfast or meals",
  "Temporary relief after passing stool or gas",
  "Dependence on tea, warm water, Isabgol or laxatives",
  "Constant discomfort affecting routine, travel & confidence",
];

// Section 4 — request-7 list 2.
const ALSO_EXPERIENCE: ReadonlyArray<string> = [
  "Stomach tightness or pressure through the day",
  "Heaviness even after motion",
  "Anxiety before travel or leaving home",
  "Constant focus on bowel timing and food triggers",
];

// Section 7 — request-7 list 3: what treatment targets.
const WE_FOCUS_ON: ReadonlyArray<string> = [
  "Bowel satisfaction",
  "Gas & bloating",
  "Repeated urge",
  "Digestive comfort",
  "Confidence in daily routine",
];

interface HinglishCluster {
  en: string;
  hi: string;
}

// Section 6 — request 10: the 10 real-life-language symptom clusters.
const HINGLISH_CLUSTERS: ReadonlyArray<HinglishCluster> = [
  {
    en: "Motion but not satisfied",
    hi: "Motion hota hai… phir bhi pet clear nahi lagta. Roz, kabhi-kabhi din mein 2–3 baar — phir bhi adhura, bhaari aur unsatisfied lagta hai.",
  },
  {
    en: "Too much gas",
    hi: "Gas bahut banti hai — pet mein pressure, trapped gas, pet ka tight hona. Shaam ko aur khane ke baad aksar badh jati hai.",
  },
  {
    en: "Bloating / heaviness",
    hi: "Pet fulna aur bhaaripan. “Pet bhara-bhara lagta hai”, “pet halka nahi lagta”, “stomach tight lagta hai.”",
  },
  {
    en: "Going again and again",
    hi: "Baar-baar toilet jana — subah 2–3 baar, chhoti-chhoti motions, chai ya breakfast ke baad urge. Phir bhi satisfaction nahi.",
  },
  {
    en: "Feeling something is left",
    hi: "Lagta hai kuch baki reh gaya. Zyada der baithna, zor lagana, dobara check karna, thodi der baad phir jana.",
  },
  {
    en: "Urge after eating",
    hi: "Khane ke baad urge. “Breakfast ke baad pressure”, “khana khate hi jana padta hai” — khaaskar subah, chai ke baad ya oily khane ke baad.",
  },
  {
    en: "Acidity / burning overlap",
    hi: "Kuch logon ko saath mein acidity bhi — chest burning, sour belching, khane ke baad bhaaripan. Isliye gas, acidity aur motion ki dawaiyan badalte rehte hain.",
  },
  {
    en: "Short-lived relief",
    hi: "Gas ya stool nikalne ke baad thodi der relief — phir wahi pressure aur bhaaripan wapas aa jata hai.",
  },
  {
    en: "Dependence on rituals",
    hi: "Bowel rituals par dependence — chai se motion, warm water, baar-baar baithna, fixed morning routine, laxative ya fibre ka repeat use.",
  },
  {
    en: "Mind stuck on the stomach",
    hi: "Dimaag hamesha pet par — toilet timing, khane ka asar, travel ka dar, gas ka pressure. Yeh roz ka mansik bojh ban jata hai.",
  },
];

interface Faq {
  q: string;
  a: string;
  lang?: "hi";
}

const FAQ: ReadonlyArray<Faq> = [
  {
    q: "What does “incomplete evacuation” mean in IBS?",
    a: "Incomplete evacuation is the feeling of incomplete bowel movement — you pass stool, but the bowel still doesn’t feel clear. It’s a common IBS constipation symptom (IBS-C), and it often comes with gas, bloating and a repeated urge for motion.",
  },
  {
    q: "I pass stool daily but still don’t feel clear — is that IBS?",
    a: "Often, yes. “Motion but not satisfied”, a bowel-not-clear feeling, and multiple bowel movements in the morning are classic hidden IBS patterns that get mislabelled as ordinary gas or constipation. A specialist evaluation can confirm it.",
  },
  {
    q: "Why do I get gas and bloating daily, even after motion?",
    a: "Bloating after motion and gas and bloating daily are typical of IBS with bloating, where the gut empties unevenly and traps gas. Targeted treatment for your IBS subtype usually settles this far better than rotating gas or acidity medicines.",
  },
  {
    q: "Are multiple bowel movements in the morning a sign of IBS?",
    a: "They can be. Two to three small morning motions with a repeated urge after tea or breakfast — and still no satisfaction — point to an IBS pattern rather than a one-off upset stomach.",
  },
  {
    q: "Pet saaf nahi lagta — kya yeh IBS ho sakta hai?",
    a: "Haan, ho sakta hai. “Pet saaf nahi lagta”, baar-baar urge, aur motion ke baad bhi bhaaripan — yeh IBS-C symptoms India mein bahut common hain. Free evaluation mein hamare doctor aapka pattern samajh kar plan banate hain.",
    lang: "hi",
  },
  {
    q: "Do I need to travel to the clinic?",
    a: "No. We consult by video or phone across India and deliver medicines to your home, so you can start treatment without travelling.",
  },
];

const WHY_CHOOSE: ReadonlyArray<string> = [
  "Specialist-only IBS clinic — not general gastro.",
  "Doctor-supervised, subtype-specific plans.",
  "Telehealth follow-ups + home-delivered medication.",
  "Tracked outcomes over ~90 days.",
  "Transparent pricing and refund policy.",
];

export default function IncompleteEvacuationPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Incomplete Evacuation in IBS — Why You Don't Feel Fully Clear",
    description: metadata.description,
    url: `${SITE_URL}/incomplete-evacuation`,
    inLanguage: ["en-IN", "hi-IN"],
    about: {
      "@type": "MedicalCondition",
      name: "Irritable Bowel Syndrome",
      alternateName: ["IBS-C", "Incomplete Evacuation"],
    },
    publisher: { "@type": "MedicalOrganization", name: "IBS Clinic" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* 1 — HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-14 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Hidden IBS symptoms · 18+ years · Tele-consultation across India
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-h1 text-charcoal">
              {"You pass stool daily… but still don't feel fully clear?"}
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Many people silently live with IBS for years, treating it as just
              &ldquo;gas,&rdquo; &ldquo;acidity,&rdquo; or &ldquo;constipation.&rdquo;
              But a bowel-not-clear feeling — motion but not satisfied, with gas
              and bloating daily and a repeated urge for motion — is one of the
              most missed patterns in IBS.
            </p>
            <p lang="hi" className="mt-3 max-w-3xl text-lead text-charcoal">
              {"Roz motion hota hai, phir bhi pet saaf nahi lagta?"}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#evaluation-form" className="btn-primary">
                Book Your Free IBS Evaluation
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* 2 — INLINE LEAD FORM + reassurance aside */}
        <section id="evaluation-form" className="container-page py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <LeadForm variant="default" />
            </div>
            <aside className="lg:col-span-5">
              <div className="card bg-[#FBF6EC]">
                <h2 className="font-heading text-h3 text-charcoal">
                  Why patients choose us
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
                  {WHY_CHOOSE.map((w) => (
                    <li key={w}>✅ {w}</li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-charcoal-soft">
                  Prefer to speak first? Call{" "}
                  <a href={`tel:${PHONE_TEL}`} className="underline">
                    {PHONE_DISPLAY}
                  </a>{" "}
                  or{" "}
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    WhatsApp us
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* 3 — HIDDEN IBS SYMPTOMS */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                Hidden IBS symptoms often include
              </h2>
              <p className="mt-3 text-charcoal-soft">
                If several of these describe your day, you may be living with an
                IBS pattern — not just everyday{" "}
                <Link href="/blogs/ibs-symptoms">gas and bloating</Link>.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HIDDEN_SYMPTOMS.map((s) => (
                <li key={s} className="card bg-white">
                  <p className="font-medium text-charcoal">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 — SOME PATIENTS ALSO EXPERIENCE */}
        <section className="container-page py-16 md:py-20">
          <div className="max-w-prose">
            <h2 className="font-heading text-h2 text-charcoal">
              Some patients also experience
            </h2>
            <p className="mt-3 text-charcoal-soft">
              IBS with bloating rarely stays in the gut alone. Many describe the
              same daily knock-on effects — see how these map to the{" "}
              <Link href="/blogs/types-of-ibs">different types of IBS</Link>.
            </p>
          </div>
          <ul className="mt-6 max-w-2xl space-y-3">
            {ALSO_EXPERIENCE.map((s) => (
              <li key={s} className="flex items-start gap-3 text-charcoal">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-white"
                >
                  •
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 — REASSURANCE + STAT */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                {"You're not imagining it — and you're not alone"}
              </h2>
              <p className="mt-4 text-charcoal-soft">
                Many IBS patients carry on with office, driving, work and travel
                while silently struggling with chronic digestive discomfort every
                day. These IBS constipation symptoms are real, common across India,
                and treatable. At IBS Clinic we focus on understanding your exact
                pattern and gradually improving how you actually feel — not just
                your{" "}
                <Link href="/blogs/ibs-treatment-guide">stool output</Link>.
              </p>
              <p lang="hi" className="mt-3 text-charcoal-soft">
                {"Aap akele nahi hain — yeh pattern bahut logon mein hai, aur iska ilaaj ho sakta hai."}
              </p>
            </div>
            <div className="mt-8 max-w-3xl rounded-[16px] border border-green/30 bg-white p-6">
              <p className="font-heading text-lg text-charcoal md:text-xl">
                Majority of patients report major improvement in gas, bloating,
                bowel satisfaction, and quality of life within 90 days.
              </p>
            </div>
          </div>
        </section>

        {/* 6 — REAL-LIFE HINDI/HINGLISH BLOCK */}
        <section lang="hi" className="bg-white">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                {"असली ज़बान में — आपके लक्षण"}
              </h2>
              <p className="mt-3 text-charcoal-soft">
                In the language patients actually use at home and at the chemist:
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {HINGLISH_CLUSTERS.map((c) => (
                <li key={c.en} className="card bg-white">
                  <p className="font-heading text-base text-green">{c.en}</p>
                  <p className="mt-2 text-charcoal-soft">{c.hi}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-charcoal-soft">
              Chemist par log yeh nahi kehte &ldquo;incomplete evacuation.&rdquo;
              Woh kehte hain: &ldquo;Gas rehti hai&rdquo;, &ldquo;Pet clear
              nahi&rdquo;, &ldquo;Kabz jaisa lagta hai&rdquo;, &ldquo;2–3 baar
              jana padta hai&rdquo;, &ldquo;Isabgol le raha hu&rdquo;,
              &ldquo;Bloating rehti hai&rdquo;, &ldquo;Pet halka nahi.&rdquo;
            </p>
          </div>
        </section>

        {/* 7 — AT IBS CLINIC WE FOCUS ON */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                At IBS Clinic, we focus on improving
              </h2>
              <p className="mt-3 text-charcoal-soft">
                Plans are matched to your subtype — from the{" "}
                <Link href="/products/ibs-c">IBS-C combo</Link> to the{" "}
                <Link href="/products/ibs-diapro-diglac-plus">
                  urgency-after-meals (gastrocolic) combo
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WE_FOCUS_ON.map((s) => (
                <li key={s} className="flex items-start gap-3 text-charcoal">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-white"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </span>
                  <span className="font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8 — CTA BAND */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">
              Book Your Free IBS Evaluation
            </h2>
            <p className="mt-3 opacity-90">
              A senior IBS specialist reviews your case before the call and
              designs a plan around your symptom pattern.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-an-appointment" className="btn-primary">
                Book your free evaluation
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white"
              >
                💬 WhatsApp us
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary bg-white">
                📞 Call {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-6 text-sm opacity-80">
              18+ years experience · IBS specialist clinic · Tele-consultation
              across India
            </p>
          </div>
        </section>

        {/* 9 — FAQ */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Incomplete evacuation &amp; IBS — FAQs
            </h2>
            <div className="mt-8 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
              {FAQ.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      lang={f.lang}
                      className="font-heading font-semibold text-charcoal"
                    >
                      {f.q}
                    </span>
                    <span className="text-2xl leading-none text-green transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p lang={f.lang} className="mt-3 text-charcoal-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
