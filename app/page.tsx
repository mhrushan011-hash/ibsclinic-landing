"use client";

import { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { FloatingCta } from "@/components/floating-cta";
import { LeadFormModal } from "@/components/lead-form-modal";
import { SymptomsCarousel } from "@/components/symptoms-carousel";
import { Roadmap } from "@/components/roadmap";
import { SiteFooter } from "@/components/site-footer";
import { DoctorCards } from "@/components/doctor-cards";
import { pushEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

const CITIES: ReadonlyArray<{ name: string; href: string | null }> = [
  // Mumbai = HQ; no dedicated city landing page yet, render as label only.
  { name: "Mumbai", href: null },
  { name: "Delhi", href: "/ibs-treatment-in-delhi" },
  { name: "Bangalore", href: "/ibs-treatment-in-bangalore" },
  { name: "Hyderabad", href: "/ibs-treatment-in-hyderabad" },
  { name: "Pune", href: "/ibs-treatment-in-pune" },
  { name: "Kolkata", href: "/ibs-treatment-in-kolkata" },
  { name: "Chennai", href: "/ibs-treatment-in-chennai" },
  { name: "Ahmedabad", href: "/ibs-treatment-in-ahmedabad" },
  { name: "Kerala", href: "/ibs-treatment-in-kerala" },
];

type Mark = true | false | "partial";

const COMPARE_ROWS: ReadonlyArray<{
  label: string;
  gastro: Mark;
  ayurveda: Mark;
  us: Mark;
}> = [
  { label: "IBS-specific protocols", gastro: false, ayurveda: false, us: true },
  { label: "Diet personalised to subtype", gastro: false, ayurveda: "partial", us: true },
  { label: "Ayurvedic + modern testing combined", gastro: false, ayurveda: false, us: true },
  { label: "Tracked outcomes (90-day)", gastro: false, ayurveda: false, us: true },
  { label: "Telehealth pan-India", gastro: "partial", ayurveda: "partial", us: true },
  { label: "Specialist team", gastro: false, ayurveda: false, us: true },
];

function cellMark(m: Mark): string {
  if (m === true) return "✅";
  if (m === "partial") return "⚠️";
  return "❌";
}

const COMPARE_COLUMNS: ReadonlyArray<{
  id: keyof Omit<(typeof COMPARE_ROWS)[number], "label">;
  title: string;
  image: string;
  featured: boolean;
}> = [
  { id: "gastro", title: "Generic Gastro", image: "/compare/generic-gastro.png", featured: false },
  { id: "ayurveda", title: "Generic Ayurveda", image: "/compare/generic-ayurveda.png", featured: false },
  { id: "us", title: "IBS Clinic", image: "/compare/ibs-clinic.png", featured: true },
];

// The products showcase is intentionally omitted from the homepage while the
// store is offline (lead-gen only). The /products pages still exist in the repo
// but are hidden and 301 to home — re-add this section when the store returns.

const OUTCOMES: ReadonlyArray<string> = [
  "Better bowel satisfaction & lighter feeling after motion",
  "Reduced gas, bloating, abdominal heaviness & pressure",
  "Less repeated urge and incomplete evacuation feeling",
  "More comfortable, smoother & predictable mornings",
  "Reduced irritation, discomfort & bowel-related anxiety",
  "Improved tolerance to daily routine, travel & eating patterns",
  "Better overall digestive comfort and quality of life",
];

const SYMPTOMS: ReadonlyArray<string> = [
  "Bloating that worsens through the day",
  "Cramping after meals",
  "Diarrhoea — sometimes urgent",
  "Constipation that won't budge",
  "Alternating between the two",
  "Mucus in stool",
  "Gas and audible rumbling",
  "Heartburn or reflux",
  "Loss of appetite or fullness fast",
  "Fatigue and brain fog",
  "Anxiety around food and travel",
  "Sleep disturbed by gut issues",
];

// Routine-based "self-check" — the relatable, everyday-language signs of the
// incomplete-evacuation pattern. Funnels to the dedicated /incomplete-evacuation page.
const SELF_CHECK: ReadonlyArray<string> = [
  "Need tea to clear your bowel?",
  "2–3 trips before leaving home?",
  "Soft stool but still incomplete?",
  "Gas even after motion?",
  "Repeated urge after meals?",
  "Feel something's still left?",
];

const STEPS: ReadonlyArray<{ n: number; h: string; p: string }> = [
  {
    n: 1,
    h: "Personalised diagnosis",
    p: "A senior doctor takes a one-on-one history — symptoms, triggers, prior treatments, lifestyle, dosha. We order tests only if they'll change the plan.",
  },
  {
    n: 2,
    h: "Plan tailored to your IBS type",
    p: "IBS-D, IBS-C, IBS-M — each gets a different plan. Ayurvedic medicine, a personalised diet, targeted lifestyle changes.",
  },
  {
    n: 3,
    h: "Holistic care, week by week",
    p: "Nutrition support, supplements where needed, and mind-body coaching for stress and sleep.",
  },
  {
    n: 4,
    h: "90-day track + continuous support",
    p: "Weekly follow-ups and personalised plan adjustments tailored to your symptom pattern. Over 90 days, many patients report gradual improvement in bloating, bowel satisfaction, repeated urge, and confidence in daily routine, work and travel.",
  },
];

const TESTIMONIALS: ReadonlyArray<{ quote: string; name: string; meta: string }> = [
  {
    quote:
      "I had IBS since 2021. After seven months at IBS Clinic, I'm 80% better — I can eat normally again.",
    name: "Abhishek",
    meta: "India · 7 months · IBS",
  },
  {
    quote:
      "I wasn't sure consultations would make a difference. Six months later I'm almost 80% better. The best place to take treatment.",
    name: "Aditya",
    meta: "India · 6 months · IBS",
  },
  {
    quote:
      "I had IBS for over a decade and visited many hospitals. With IBS Clinic, my symptoms reduced beyond 70%. I can eat normal foods again.",
    name: "Manimul",
    meta: "Bangladesh · IBS for 10+ years",
  },
  {
    quote:
      "I was losing weight rapidly and couldn't digest even rice. Dr Kamal listened to my full history and gave me a plan. I'm well now.",
    name: "Ashish",
    meta: "Bihar · 2 years of IBS",
  },
];

const FAQ: ReadonlyArray<{ q: string; a: string }> = [
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
];

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (source: string) => {
    pushEvent({ event: "open_lead_modal", source });
    setModalOpen(true);
  };

  return (
    <>
      <Header onBookClick={() => openModal("header")} />

      <main className="pb-20 md:pb-0">
        {/* FAQ schema (server-renderable through the client boundary) */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* HERO */}
        <section className="bg-white">
          <div className="container-page grid gap-12 py-12 md:grid-cols-12 md:py-20 lg:py-24">
            <div className="md:col-span-7">
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-green">
                Specialist IBS Clinic · 18+ years · 4.7★ Google · 8 cities
              </p>
              <h1 className="text-h1 text-charcoal">
                Stop fearing food.{" "}
                <span className="text-green">Start trusting your gut.</span>
              </h1>
              <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
                India&apos;s leading specialist IBS clinic helps{" "}
                <span className="font-semibold text-charcoal">
                  80–90% of patients
                </span>{" "}
                live symptom-free in{" "}
                <span className="font-semibold text-charcoal">~90 days</span> —
                through personalised Ayurveda, diet, and modern testing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openModal("hero")}
                  className="btn-primary"
                >
                  Book Your Free IBS Evaluation
                </button>
                <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-3 text-xs text-charcoal-soft">
                Reply within 30 minutes · Mon–Sat, 9 AM – 8 PM IST
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-charcoal-soft">
                <span>4.7★ Google</span>
                <span aria-hidden="true">·</span>
                <span>Thousands of patients</span>
                <span aria-hidden="true">·</span>
                <span>18+ years</span>
                <span aria-hidden="true">·</span>
                <span>Telehealth pan-India</span>
              </div>
            </div>

            <div className="md:col-span-5 md:self-center">
              <div className="overflow-hidden rounded-[24px] border border-gray-border bg-green-tint">
                <Image
                  src="/hero.png"
                  alt="Dr. Kamal K Khajuria — Founder, IBS Clinic"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* CITIES STRIP */}
        <section
          aria-label="Cities served"
          className="border-y border-gray-border bg-white"
        >
          <div className="container-page flex flex-wrap items-center justify-center gap-x-2 gap-y-2 py-5 text-sm text-charcoal-soft">
            <span className="mr-2 font-semibold text-charcoal">
              Trusted across India:
            </span>
            {CITIES.map((c) =>
              c.href ? (
                <Link
                  key={c.name}
                  href={c.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-border bg-white px-3 py-1 text-charcoal-soft no-underline transition-colors hover:border-green hover:bg-green-tint hover:text-green"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-green"
                    aria-hidden="true"
                  />
                  {c.name}
                </Link>
              ) : (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-border bg-white px-3 py-1"
                  title="Head office"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-green"
                    aria-hidden="true"
                  />
                  {c.name}
                </span>
              ),
            )}
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Does this sound like you?</h2>
              <p className="mt-3 text-charcoal-soft">
                If three or more describe your daily life, an evaluation will help — and it&apos;s free.
              </p>
            </div>
            <SymptomsCarousel symptoms={SYMPTOMS} />
            <div className="mt-10">
              <button
                type="button"
                onClick={() => openModal("symptoms")}
                className="btn-primary"
              >
                See how we&apos;d treat you — Book a free evaluation →
              </button>
            </div>
          </div>
        </section>

        {/* SELF-CHECK — incomplete-evacuation hook */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">
                You pass stool daily… but still don&apos;t feel fully clear?
              </h2>
              <p className="mt-3 text-charcoal-soft">
                It&apos;s one of the most missed IBS patterns. If any of these are
                part of your daily routine, it&apos;s worth a closer look.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SELF_CHECK.map((item) => (
                <li key={item} className="card flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-tint text-green"
                  >
                    ?
                  </span>
                  <span className="font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[16px] border border-green/30 bg-green-tint p-5 text-charcoal">
              <p className="font-heading text-lg">
                Majority of patients report major improvement in gas, bloating,
                bowel satisfaction, and quality of life within 90 days.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/incomplete-evacuation" className="btn-primary">
                See the full hidden-symptom checklist →
              </Link>
              <button
                type="button"
                onClick={() => openModal("self_check")}
                className="btn-secondary"
              >
                Book a free evaluation
              </button>
            </div>
          </div>
        </section>

        {/* 90-DAY OUTCOMES */}
        <section className="bg-white">
          <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-7">
              <h2 className="text-h2">What changes in 90 days of IBS treatment?</h2>
              <p className="mt-5 text-charcoal-soft">
                Many patients struggling with IBS, gas, bloating, constipation,
                diarrhea, mixed IBS, acidity, and incomplete evacuation report
                gradual improvement in their digestive comfort and daily routine
                within 90 days of treatment.
              </p>
              <p className="mt-6 font-heading text-lg text-charcoal">
                Patients commonly report:
              </p>
              <ul className="mt-4 space-y-3">
                {OUTCOMES.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-charcoal">
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
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-charcoal-soft">
                At IBS Clinic, our approach focuses on understanding individual
                symptom patterns, improving digestive balance, providing diet &amp;
                lifestyle guidance, and offering continuous support for long-term
                digestive comfort and bowel stability.
              </p>
            </div>
            <div className="md:col-span-5 md:self-center">
              <div className="overflow-hidden rounded-[24px] border border-gray-border bg-green-tint">
                <Image
                  src="/quiet-transformation.png"
                  alt="A day of quiet transformation — IBS patient outcomes after 90 days"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE TREAT */}
        <section className="bg-white">
          <div className="container-page border-t border-gray-border py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">
                How we treat IBS — the 4-step IBS Clinic method
              </h2>
              <p className="mt-3 text-charcoal-soft">
                No guesswork. No rotating doctors. One specialist team, end to end.
              </p>
            </div>
            <Roadmap steps={STEPS} />
            <div className="mt-10">
              <button
                type="button"
                onClick={() => openModal("how_it_works")}
                className="btn-primary"
              >
                Start your 90-day plan
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCTS section removed while the store is offline (lead-gen only).
            Restore from git history when the WooCommerce store returns. */}

        {/* WHY SPECIALIST */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Why a specialist beats a generalist for IBS</h2>
              <p className="mt-3 text-charcoal-soft">
                Most IBS patients see 3–5 doctors before anyone gives them a coherent plan.
                We&apos;ve spent 18+ years compressing that journey into a single specialist team.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {COMPARE_COLUMNS.map((col) => (
                <div
                  key={col.id}
                  className={cn(
                    "rounded-[16px] border bg-white p-6",
                    col.featured
                      ? "border-green ring-2 ring-green"
                      : "border-gray-border",
                  )}
                >
                  <div className="mb-5 flex flex-col items-center gap-3 text-center">
                    <Image
                      src={col.image}
                      alt={col.title}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <h3 className="font-heading text-lg font-semibold text-charcoal">
                      {col.title}
                    </h3>
                    {col.featured && (
                      <span className="rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
                        Your best choice
                      </span>
                    )}
                  </div>
                  <ul className="space-y-3 text-sm">
                    {COMPARE_ROWS.map((row) => (
                      <li key={row.label} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0">{cellMark(row[col.id])}</span>
                        <span className="text-charcoal-soft">{row.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Meet the doctors leading your case</h2>
              <p className="mt-3 text-charcoal-soft">
                Reviewed by senior physicians with 18+ years combined IBS specialty experience.
              </p>
            </div>
            <DoctorCards />
            <div className="mt-8">
              <Link href="/doctors" className="btn-secondary inline-block">
                Meet the full team →
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Real patients. Real relief.</h2>
              <p className="mt-3 text-charcoal-soft">
                First-name basis. Verified Google reviews. Specific durations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-[16px] border border-gray-border bg-white p-6 shadow-card"
                >
                  <p className="text-lg leading-relaxed text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-medium text-green">
                    — <span className="text-charcoal">{t.name}</span>, {t.meta}
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <a
                href="https://www.google.com/maps/search/IBS+Clinic+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read all 80+ Google reviews →
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <h2 className="text-h2">Quick answers to the questions we hear most</h2>
            <div className="mt-8 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
              {FAQ.map((f) => (
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
        </section>

        {/* FINAL CTA */}
        <section className="bg-white">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Stop guessing. Start treating.</h2>
              <p className="mt-3 text-charcoal-soft">
                The free evaluation is the easiest first step you&apos;ll take this year.
              </p>
              <button
                type="button"
                onClick={() => openModal("final_cta")}
                className="btn-primary mt-6"
              >
                Book Your Free IBS Evaluation
              </button>
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

        {/* TRUST STRIP */}
        <section className="bg-charcoal text-white">
          <div className="container-page py-6 text-center text-sm">
            Thousands of patients · 18+ years · 4.7★ Google · Specialist for IBS &amp;
            chronic gut disorders · Mumbai HQ + telehealth pan-India
          </div>
        </section>

        <SiteFooter />
      </main>

      <FloatingCta onBookClick={() => openModal("sticky")} />

      <LeadFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
