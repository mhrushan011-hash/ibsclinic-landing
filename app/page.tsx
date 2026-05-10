"use client";

import { useState } from "react";
import Script from "next/script";
import { Header } from "@/components/header";
import { FloatingCta } from "@/components/floating-cta";
import { HeroIllustration } from "@/components/hero-illustration";
import { LeadFormModal } from "@/components/lead-form-modal";
import { pushEvent } from "@/lib/analytics";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Kerala",
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
  { label: "Telehealth across India", gastro: "partial", ayurveda: "partial", us: true },
  { label: "Specialist team", gastro: false, ayurveda: false, us: true },
];

function cellMark(m: Mark): string {
  if (m === true) return "✅";
  if (m === "partial") return "⚠️";
  return "❌";
}

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

const STEPS: ReadonlyArray<{ n: number; h: string; p: string }> = [
  {
    n: 1,
    h: "Personalised diagnosis",
    p: "A senior doctor takes a one-on-one history — symptoms, triggers, prior treatments, lifestyle, dosha. We order tests only if they'll change the plan.",
  },
  {
    n: 2,
    h: "Plan tailored to your IBS type",
    p: "IBS-D, IBS-C, IBS-M — each gets a different plan. Ayurvedic medicine, a personalised diet (often low-FODMAP-aligned), targeted lifestyle changes.",
  },
  {
    n: 3,
    h: "Holistic care, week by week",
    p: "Nutrition support, supplements where needed, mind-body coaching for stress and sleep, plus yoga and pranayama your body can actually do.",
  },
  {
    n: 4,
    h: "90-day track + lifelong support",
    p: "Weekly check-ins, plan adjustments, measurable outcomes. After 90 days, most patients are eating, working, and travelling without fear.",
  },
];

const DOCTORS: ReadonlyArray<{ name: string; creds: string; bio: string }> = [
  {
    name: "Dr. Kamal K Khajuria",
    creds: "Founder, ND (Naturopathy)",
    bio: "Founded IBS Clinic 20+ years ago. Has personally guided treatment for thousands of IBS patients across India and Bangladesh.",
  },
  {
    name: "Dr. Keshav Raj",
    creds: "BAMS, MD (Ayurveda)",
    bio: "Senior Ayurvedic specialist. Focuses on dosha-tailored protocols for IBS-D and IBS-M presentations.",
  },
  {
    name: "Dr. Rajeev Gaur",
    creds: "BAMS",
    bio: "Ayurvedic Physician. Specialises in long-form patient case-history work and plan personalisation.",
  },
  {
    name: "Dr. Nishikant Dwivedi",
    creds: "BAMS, Ayurvedacharya",
    bio: "Ayurvedic Physician with deep grounding in classical formulations and Panchakarma protocols.",
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
                Specialist IBS Clinic · 20+ years · 4.7★ Google · 8 cities
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
                <span>★ 4.7 on Google</span>
                <span aria-hidden="true">·</span>
                <span>Lakhs of patients</span>
                <span aria-hidden="true">·</span>
                <span>20+ years</span>
                <span aria-hidden="true">·</span>
                <span>Telehealth pan-India</span>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-[24px] border border-gray-border bg-green-tint">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* CITIES STRIP */}
        <section
          aria-label="Cities served"
          className="border-y border-gray-border bg-white"
        >
          <div className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-5 text-sm text-charcoal-soft">
            <span className="font-semibold text-charcoal">
              Trusted across India:
            </span>
            {CITIES.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green"
                  aria-hidden="true"
                />
                {c}
              </span>
            ))}
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
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {SYMPTOMS.map((s) => (
                <li
                  key={s}
                  className="rounded-[16px] border border-gray-border bg-white p-4 text-sm text-charcoal"
                >
                  {s}
                </li>
              ))}
            </ul>
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

        {/* 90-DAY PROMISE */}
        <section className="bg-white">
          <div className="container-page py-16 md:py-20">
            <h2 className="text-h2">What changes in 90 days</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="card">
                <p className="stat-num text-green">80–90%</p>
                <p className="mt-3 text-charcoal-soft">
                  Symptom reduction in patients who complete the programme.
                </p>
              </div>
              <div className="card">
                <p className="stat-num text-green">~90 days</p>
                <p className="mt-3 text-charcoal-soft">
                  Average time to significant improvement.
                </p>
              </div>
              <div className="card">
                <p className="stat-num text-green">70%+</p>
                <p className="mt-3 text-charcoal-soft">
                  Of our patients live symptom-free long-term.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-charcoal-soft/80">
              Source: internal IBS Clinic patient outcomes, 2003–2025.
            </p>
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
            <ol className="grid gap-6 md:grid-cols-2">
              {STEPS.map((s) => (
                <li key={s.n} className="card flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green font-heading text-base font-bold text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal">{s.h}</h3>
                    <p className="mt-2 text-charcoal-soft">{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
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

        {/* WHY SPECIALIST */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Why a specialist beats a generalist for IBS</h2>
              <p className="mt-3 text-charcoal-soft">
                Most IBS patients see 3–5 doctors before anyone gives them a coherent plan.
                We&apos;ve spent 20+ years compressing that journey into a single specialist team.
              </p>
            </div>
            <div className="overflow-x-auto rounded-[16px] border border-gray-border bg-white">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="p-4 text-left font-medium"></th>
                    <th className="p-4 font-medium">Generic gastro</th>
                    <th className="p-4 font-medium">Generic Ayurveda</th>
                    <th className="bg-green p-4 font-semibold">IBS Clinic</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row.label} className="border-t border-gray-border">
                      <td className="p-4 text-charcoal">{row.label}</td>
                      <td className="p-4 text-center">{cellMark(row.gastro)}</td>
                      <td className="p-4 text-center">{cellMark(row.ayurveda)}</td>
                      <td className="bg-green-tint/60 p-4 text-center font-semibold text-charcoal">
                        {cellMark(row.us)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="text-h2">Meet the doctors leading your case</h2>
              <p className="mt-3 text-charcoal-soft">
                Reviewed by senior physicians with 20+ years combined IBS specialty experience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DOCTORS.map((d) => (
                <article key={d.name} className="card">
                  <div
                    className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green font-heading text-2xl font-bold text-white"
                    aria-hidden="true"
                  >
                    {d.name
                      .split(" ")
                      .filter((p) => !p.startsWith("Dr"))
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <h3 className="font-heading text-lg text-charcoal">{d.name}</h3>
                  <p className="text-sm font-medium text-green">{d.creds}</p>
                  <p className="mt-3 text-sm text-charcoal-soft">{d.bio}</p>
                </article>
              ))}
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
            Lakhs of patients · 20+ years · 4.7★ on Google · Specialist for IBS &amp;
            chronic gut disorders · Mumbai HQ + telehealth across India
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-charcoal text-white">
          <div className="container-page grid gap-8 py-12 md:grid-cols-4">
            <div>
              <h3 className="font-heading text-lg">IBS Clinic</h3>
              <p className="mt-2 text-sm opacity-80">
                India&apos;s leading specialist IBS clinic.
              </p>
            </div>
            <div>
              <p className="text-sm opacity-60">Contact</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href={`tel:${PHONE_TEL}`} className="text-white">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ibsclinic.com" className="text-white">
                    info@ibsclinic.com
                  </a>
                </li>
                <li className="opacity-80">Mon–Sat, 9 AM – 8 PM IST</li>
              </ul>
            </div>
            <div>
              <p className="text-sm opacity-60">Address</p>
              <p className="mt-2 text-sm opacity-90">
                Shop No. 2, HDIL Residency Park-1, Wing A1, Opp. Star Bazaar, Narangi Bypass,
                Virar (West), Mumbai 401303
              </p>
            </div>
            <div>
              <p className="text-sm opacity-60">Legal</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="/privacy" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/medical-disclaimer" className="text-white">
                    Medical Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="container-page py-4 text-xs opacity-70">
              © {new Date().getFullYear()} IBS Clinic. All rights reserved. Information on this
              site is for educational purposes and does not replace professional medical advice.
            </div>
          </div>
        </footer>
      </main>

      <FloatingCta onBookClick={() => openModal("sticky")} />

      <LeadFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
