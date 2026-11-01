import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { DoctorCards } from "@/components/doctor-cards";
import { CITY_DATA, CITY_SLUGS } from "@/lib/cities";
import { getCityLocal } from "@/lib/city-local";
import { ArticleBody } from "@/components/article-body";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import {
  absUrl,
  cityServiceNode,
  faqNode,
  graph,
  IBS_CONDITION,
  webPageNode,
} from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_DATA[slug];
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/${city.slug}/` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
      url: `/${city.slug}/`,
    },
  };
}

const SYMPTOM_CARDS: ReadonlyArray<{ title: string; copy: string }> = [
  {
    title: "Stomach pain",
    copy: "Ongoing or frequent pain, often feeling better after using the bathroom.",
  },
  {
    title: "Brain fog",
    copy: "Feeling tired, low on energy, and having trouble focusing because of gut issues.",
  },
  {
    title: "Bloating",
    copy: "Too much gas or a swollen belly that feels uncomfortable.",
  },
  {
    title: "Bowel changes",
    copy: "Switching between constipation (hard stools) and diarrhea (loose stools).",
  },
];

const WHY_CHOOSE: ReadonlyArray<{ title: string; copy: string }> = [
  {
    title: "Comprehensive assessment",
    copy: "A thorough check-up using advanced tools to understand your condition in detail.",
  },
  {
    title: "Personalised Ayurvedic care",
    copy: "Tailored treatment plans that combine modern medicine with traditional Ayurveda for better results.",
  },
  {
    title: "Gut–brain connection",
    copy: "Support that includes stress management and lifestyle guidance, since the mind and gut are closely linked.",
  },
  {
    title: "Telemedicine support",
    copy: "Convenient online consultations with regular follow-ups to keep track of your progress from home.",
  },
];

const TREATMENT_STEPS: ReadonlyArray<string> = [
  "Initial consultation & history taking",
  "Comprehensive diagnostic assessment",
  "Personalised treatment plan development",
  "Ayurvedic & dietary modifications",
  "Targeted medical intervention",
  "Gut–brain axis therapy",
  "Progress monitoring & plan adjustment",
  "Long-term maintenance & prevention",
];

interface Testimonial {
  name: string;
  quote: string;
}

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    name: "Akshobhya Magotra",
    quote:
      "I received a personalised plan from Kamal. My bloating and discomfort reduced within days. After three months, my energy and symptoms improved greatly.",
  },
  {
    name: "Ashish Kumar",
    quote:
      "I was suffering from IBS for 2 years and lost confidence. After consulting Kamal, I got a new life. Patience, proper diet, and medicine truly worked.",
  },
  {
    name: "Sanskar Gupta",
    quote:
      "After surgeries, I suffered frequent diarrhoea and bloating. IBS Clinic's holistic approach helped me recover. I highly recommend it!",
  },
  {
    name: "Abhishek Mishra",
    quote:
      "I had IBS since 2021. With Kamal's guidance and 7 months of treatment, I am now 80% cured and can eat normally.",
  },
  {
    name: "Mahesh Ghughtyal",
    quote:
      "I lost 22 Kg due to IBS in 2014. After consulting Kamal, within 2 months I returned to normal. Many of my family members also benefited.",
  },
];

interface CaseStudy {
  title: string;
  patient: string;
  duration: string;
  symptoms: ReadonlyArray<string>;
  approach: ReadonlyArray<string>;
  outcome: string;
}

const CASES: ReadonlyArray<CaseStudy> = [
  {
    title: "Severe IBS-D recovery",
    patient: "Female, 34 years",
    duration: "6 months",
    symptoms: [
      "Chronic diarrhoea (8–10 times daily)",
      "Severe abdominal pain",
      "Anxiety & depression",
      "Weight loss",
    ],
    approach: [
      "Personalised low-FODMAP diet",
      "Gut–brain therapy sessions",
      "Targeted probiotics",
      "Stress management techniques",
    ],
    outcome:
      "90% symptom reduction, improved quality of life, return to normal activities.",
  },
  {
    title: "IBS-C with PCOS management",
    patient: "Female, 29 years",
    duration: "8 months",
    symptoms: [
      "Severe constipation",
      "Chronic bloating",
      "Hormonal imbalance (PCOS)",
      "Fatigue & mood swings",
    ],
    approach: [
      "Integrated hormonal therapy",
      "Anti-inflammatory dietary plan",
      "Exercise & lifestyle modifications",
      "Mindfulness & stress management",
    ],
    outcome:
      "Regular bowel movements, balanced hormones, significant improvement in energy and mood.",
  },
];

const SHARED_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Is IBS a serious condition?",
    a: "IBS is not life-threatening and does not cause cancer. However, it can severely impact daily life if left untreated. With the right specialist care, symptoms can be effectively managed for long-term relief.",
  },
  {
    q: "Can stress worsen IBS symptoms?",
    a: "Yes — stress directly impacts the gut–brain axis, which may trigger or worsen IBS symptoms. Our treatment approach includes stress management, counselling, and relaxation techniques to ensure holistic recovery.",
  },
  {
    q: "Will I need to take medicines forever?",
    a: "Not always. While some patients may require longer-term support, many find lasting relief through diet adjustments, Ayurvedic protocols, and lifestyle changes. Your treatment plan is reviewed and tapered as you progress.",
  },
  {
    q: "Can IBS be cured permanently?",
    a: "There is no one-size-fits-all cure, but symptoms can be significantly reduced or eliminated with the right combination of treatments. Patients often enjoy long-term relief with proper management.",
  },
];

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = CITY_DATA[slug];
  if (!city) notFound();

  const path = `/${city.slug}`;
  const crumbLabel = `IBS Treatment in ${city.name}`;
  const local = getCityLocal(city.slug);
  // One list feeds both the visible FAQ section and the FAQPage schema.
  const faqs = [...city.cityFaq, ...(local?.faq ?? []), ...SHARED_FAQ];
  // Online consultation service for this city — deliberately NOT a
  // LocalBusiness: the only physical clinic is in Mumbai (Virar West).
  const schema = graph(
    webPageNode({
      path,
      name: city.metaTitle,
      description: city.metaDescription,
      type: "MedicalWebPage",
      hasBreadcrumb: true,
      about: IBS_CONDITION,
      mainEntity: { "@id": `${absUrl(path)}#service` },
    }),
    cityServiceNode(path, city.name),
    faqNode(path, faqs),
  );

  return (
    <>
      <SimpleHeader />
      <Breadcrumb path={path} items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
      <main className="bg-white">
        <JsonLd data={schema} />
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-wide text-green">
                Leading IBS Treatment in {city.name}
              </p>
              <h1 className="mt-3 font-heading text-h1 text-charcoal">
                {city.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
                {city.heroIntro}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  // Aligned with the homepage's published claims (no "95% success"
                  // rate — above the brand claim ceiling and unsourced).
                  "18+ Years of IBS Care",
                  "Thousands of Patients",
                  "Online Consultations Across India",
                  "Medicines Delivered Home",
                ].map((item) => (
                  <li
                    key={item}
                    className="card bg-white text-center text-sm font-medium text-charcoal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[24px] border border-gray-border bg-white">
                <Image
                  src="/hero.png"
                  alt={`${city.name} IBS specialist — Kamal K Khajuria`}
                  width={600}
                  height={400}
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="container-page py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <LeadForm variant="default" />
            </div>
            <aside className="lg:col-span-5">
              <div className="card bg-[#FBF6EC]">
                <h2 className="font-heading text-h3 text-charcoal">
                  Why patients in {city.name} choose us
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
                  <li>✅ Specialist-only IBS clinic — not general gastro.</li>
                  <li>✅ Doctor-supervised Ayurvedic protocols.</li>
                  <li>✅ Telehealth follow-ups + home-delivered medication.</li>
                  <li>✅ Tracked outcomes over ~90 days.</li>
                  <li>✅ Transparent pricing and refund policy.</li>
                </ul>
                <p className="mt-6 text-xs text-charcoal-soft">
                  Prefer to speak first? Call{" "}
                  <a href="tel:+917500334343" className="underline">
                    +91 750 033 4343
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wa.me/917500334343"
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

        {/* UNDERSTANDING IBS */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Understanding IBS
            </h2>
            <p className="mt-3 max-w-3xl text-charcoal-soft">
              IBS affects both physical and mental well-being. Early recognition
              of the symptoms below ensures better long-term outcomes.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {SYMPTOM_CARDS.map((s) => (
                <li key={s.title} className="card bg-white">
                  <p className="font-heading text-lg text-charcoal">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm text-charcoal-soft">{s.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LOCAL — city-specific food, lifestyle and online care */}
        {local ? (
          <section className="city-local container-page py-16 md:py-20">
            <h2 className="city-local__title font-heading text-h2 text-charcoal">{local.title}</h2>
            <div className="city-local__intro mt-4 max-w-3xl">
              <ArticleBody markdown={local.intro.join("\n\n")} />
            </div>
            <h3 className="city-local__swaps-title mt-10 font-heading text-h3 text-charcoal">
              Local food swaps that help IBS
            </h3>
            <div className="city-local__table mt-4 max-w-3xl overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-border">
                    <th className="py-3 pr-4 font-heading text-charcoal">Instead of</th>
                    <th className="py-3 font-heading text-charcoal">Try</th>
                  </tr>
                </thead>
                <tbody>
                  {local.swaps.map((s) => (
                    <tr key={s.food} className="border-b border-gray-border align-top">
                      <td className="py-3 pr-4 text-charcoal">{s.food}</td>
                      <td className="py-3 text-charcoal-soft">{s.swap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="city-local__more mt-6 max-w-3xl text-charcoal-soft">
              For full food lists and a 7-day plan, see our{" "}
              <Link href="/blogs/ibs-diet-plan/">IBS diet plan</Link> and the{" "}
              <Link href="/blogs/worst-foods-for-ibs/">worst foods for IBS</Link>.
            </p>
          </section>
        ) : null}

        {/* WHY CHOOSE */}
        <section className="container-page py-16 md:py-20">
          <h2 className="font-heading text-h2 text-charcoal">
            Why choose IBS Clinic in {city.name}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {WHY_CHOOSE.map((w) => (
              <li key={w.title} className="card">
                <p className="font-heading text-lg text-charcoal">{w.title}</p>
                <p className="mt-2 text-charcoal-soft">{w.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* TREATMENT STEPS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Our proven 8-step IBS treatment in {city.name}
            </h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TREATMENT_STEPS.map((step, i) => (
                <li key={step} className="card bg-white">
                  <p className="font-heading text-3xl text-green">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-heading text-base text-charcoal">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="container-page py-16 md:py-20">
          <h2 className="font-heading text-h2 text-charcoal">
            Meet the best IBS specialists in {city.name}
          </h2>
          <p className="mt-3 max-w-3xl text-charcoal-soft">
            Our team brings together expertise in gastroenterology, nutrition,
            psychology, and integrative medicine to provide holistic IBS care.
          </p>
          <div className="mt-8">
            <DoctorCards />
          </div>
          <p className="mt-8">
            <Link href="/doctors" className="btn-secondary inline-block">
              Meet the full team →
            </Link>
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Patient reviews
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <li key={t.name} className="card bg-white">
                  <p className="text-charcoal-soft">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 font-heading text-sm text-green">
                    — {t.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="container-page py-16 md:py-20">
          <h2 className="font-heading text-h2 text-charcoal">
            Case studies
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <li key={c.title} className="card">
                <p className="font-heading text-lg text-charcoal">{c.title}</p>
                <p className="mt-1 text-sm text-charcoal-soft">
                  {c.patient} · Duration: {c.duration}
                </p>
                <p className="mt-4 text-sm font-medium text-green">
                  Initial symptoms
                </p>
                <ul className="mt-1 list-disc pl-5 text-sm text-charcoal-soft">
                  {c.symptoms.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-green">
                  Treatment approach
                </p>
                <ul className="mt-1 list-disc pl-5 text-sm text-charcoal-soft">
                  {c.approach.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-green">Outcome</p>
                <p className="mt-1 text-sm text-charcoal-soft">{c.outcome}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              IBS treatment in {city.name} — FAQs
            </h2>
            <ul className="mt-8 space-y-4">
              {faqs.map((f) => (
                <li key={f.q} className="card bg-white">
                  <p className="font-heading text-lg text-charcoal">{f.q}</p>
                  <p className="mt-2 text-charcoal-soft">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">{city.ctaTagline}</h2>
            <p className="mt-3 opacity-90">
              Speak to a senior IBS specialist. We will review your case before
              the call and design a plan tailored to your symptoms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917500334343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 Chat with us now
              </a>
              <a href="tel:+917500334343" className="btn-secondary bg-white">
                📞 Call +91 750 033 4343
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
