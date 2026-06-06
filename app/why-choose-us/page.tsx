import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Choose IBS Clinic — Specialist IBS & Gut Care",
  description:
    "Why patients choose IBS Clinic over generalists: IBS-only specialisation, subtype-tailored plans, Ayurveda combined with modern testing, and tracked 90-day outcomes. 18+ years, 4.7★ Google, 8 cities.",
  alternates: { canonical: "/why-choose-us" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

const BURDENS: ReadonlyArray<string> = [
  "The anxiety of stepping out after a meal.",
  "The embarrassment of frequent gas or bloating in public.",
  "Being told, again, that “it’s just stress.”",
  "The helplessness of trying everything and still feeling stuck.",
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
  id: "gastro" | "ayurveda" | "us";
  title: string;
  image: string;
  featured: boolean;
}> = [
  { id: "gastro", title: "Generic Gastro", image: "/compare/generic-gastro.png", featured: false },
  { id: "ayurveda", title: "Generic Ayurveda", image: "/compare/generic-ayurveda.png", featured: false },
  { id: "us", title: "IBS Clinic", image: "/compare/ibs-clinic.png", featured: true },
];

const DIFFERENTIATORS: ReadonlyArray<{ icon: string; title: string; body: string }> = [
  {
    icon: "🔍",
    title: "We decode — we don't guess",
    body: "We map the root cause behind your symptoms, not just the symptoms themselves.",
  },
  {
    icon: "🧬",
    title: "We personalise — we don't just prescribe",
    body: "Every plan is tailored to your IBS subtype, body type, and history — never one-size-fits-all.",
  },
  {
    icon: "💬",
    title: "We ask what your gut has been through",
    body: "Your story — diet, stress, prior treatments — shapes the plan as much as any test result.",
  },
];

const DIAGNOSTIC: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Subtype mapping",
    body: "Pinpointing IBS-C, IBS-D, or IBS-M so the plan fits how your bowel actually behaves.",
  },
  {
    title: "Reflex-pattern decoding",
    body: "Identifying gastrocolic reflex dysfunction, SIBO, and urgency patterns that generalists miss.",
  },
  {
    title: "Gut–hormone screening",
    body: "Checking how thyroid, cortisol, and hormonal shifts feed into your digestion.",
  },
  {
    title: "Ayurvedic prakriti analysis",
    body: "Reading your constitution, digestive fire (Agni), and mind-gut reactivity to guide herbs and diet.",
  },
];

const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "80–90%", label: "symptom reduction reported by ~90 days" },
  { value: "70%+", label: "of patients living symptom-free" },
  { value: "18+ yrs", label: "specialising in IBS & gut disorders" },
  { value: "4.7★", label: "across 80+ Google reviews" },
  { value: "8 cities", label: "plus telehealth across India" },
  { value: "1000s", label: "of patients treated, in India & abroad" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Why choose us
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Why choose IBS Clinic?
            </h1>
            <p className="mt-4 font-heading text-h3 text-green">
              Where Ayurveda meets gut neuroscience.
            </p>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Most IBS patients see three to five doctors before anyone gives
              them a coherent plan. We have spent 18+ years compressing that
              journey into a single specialist team that treats IBS — and only
              IBS-type gut disorders — at the root.
            </p>
          </div>
        </section>

        {/* MIND-GUT STORY */}
        <section className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-h2 text-charcoal">
                We treat your mind-gut story, not just your digestion
              </h2>
              <p className="mt-4 text-lead text-charcoal-soft">
                Living with IBS is rarely only about the bowel. It is the
                planning, the avoiding, and the quiet exhaustion of never
                knowing how your gut will behave. We see that whole picture —
                and we build the plan around it.
              </p>
            </div>
            <div className="card bg-[#FBF6EC]">
              <p className="font-heading text-base text-green">
                The silent suffering we hear every day
              </p>
              <ul className="mt-4 space-y-3">
                {BURDENS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                Why a specialist beats a generalist for IBS
              </h2>
              <p className="mt-3 text-charcoal-soft">
                The same comparison our patients make after years of being passed
                between clinics.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {COMPARE_COLUMNS.map((col) => (
                <div
                  key={col.id}
                  className={cn(
                    "rounded-[16px] border bg-white p-6",
                    col.featured ? "border-green ring-2 ring-green" : "border-gray-border",
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

        {/* DIFFERENTIATORS */}
        <section className="container-page py-16 md:py-20">
          <div className="mb-10 max-w-prose">
            <h2 className="font-heading text-h2 text-charcoal">
              How we work differently
            </h2>
            <p className="mt-3 text-charcoal-soft">
              Three commitments, and the 4D diagnostic approach that backs them.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map((d) => (
              <li key={d.title} className="card">
                <p className="text-3xl" aria-hidden="true">{d.icon}</p>
                <h3 className="mt-3 font-heading text-lg text-charcoal">{d.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{d.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <h3 className="font-heading text-h3 text-charcoal">
              A real diagnosis for an invisible condition
            </h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DIAGNOSTIC.map((d) => (
                <li key={d.title} className="rounded-[16px] bg-gray-light p-5">
                  <h4 className="font-heading text-base text-green">{d.title}</h4>
                  <p className="mt-2 text-sm text-charcoal-soft">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RESULTS STATS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">Our results</h2>
              <p className="mt-3 text-charcoal-soft">
                The numbers we hold ourselves to — and the reach behind them.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {STATS.map((s) => (
                <li key={s.label} className="card bg-white text-center">
                  <p className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-green">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-charcoal-soft">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TEAM TEASER */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-h2 text-charcoal">
              Led by senior specialists
            </h2>
            <p className="mt-3 text-charcoal-soft">
              Your case is reviewed by physicians with 18+ years of combined IBS
              experience — the same team, end to end, not a rotating panel.
            </p>
            <p className="mt-6">
              <Link href="/doctors" className="btn-secondary inline-block">
                Meet the medical team →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page pb-16 md:pb-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">Ready to be heard?</h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation with a senior IBS doctor — no
              pressure to enrol, just an honest opinion on whether we can help.
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
