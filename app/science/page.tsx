import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { Roadmap } from "@/components/roadmap";

export const metadata: Metadata = {
  title: "The Science Behind IBS Treatment — Ayurveda Meets Modern Medicine | IBS Clinic",
  description:
    "How IBS Clinic treats irritable bowel syndrome at the root — combining clinical Ayurveda with modern gut diagnostics, gut-brain-axis therapy, and subtype-specific protocols. 18+ years, 80–90% symptom reduction in ~90 days.",
  alternates: { canonical: "/science" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

interface Mechanism {
  term: string;
  meaning: string;
}

const MECHANISMS: ReadonlyArray<Mechanism> = [
  {
    term: "Disorder of gut–brain interaction (DGBI)",
    meaning:
      "IBS is now understood as a miscommunication between the gut and the brain — not a structural disease. The plumbing is fine; the signalling is not.",
  },
  {
    term: "Visceral hypersensitivity",
    meaning:
      "The gut wall over-reacts to normal amounts of gas and stretch, so ordinary digestion is felt as pain, bloating, or urgency.",
  },
  {
    term: "Altered motility",
    meaning:
      "The muscles of the bowel contract too fast (diarrhoea), too slow (constipation), or unpredictably (mixed) — driving the IBS subtypes.",
  },
  {
    term: "Dysbiosis & SIBO",
    meaning:
      "An imbalance of gut bacteria — or small intestinal bacterial overgrowth (SIBO) — ferments food into excess gas and inflammation.",
  },
  {
    term: "The gastrocolic reflex",
    meaning:
      "An exaggerated post-meal reflex that triggers an urgent need to go soon after eating, the hallmark of many IBS-D presentations.",
  },
];

const PROCESS: ReadonlyArray<{ n: number; h: string; p: string }> = [
  {
    n: 1,
    h: "Decode the root cause",
    p: "A senior doctor maps your subtype (IBS-C, IBS-D, IBS-M), screens for SIBO and food-intolerance patterns, and reads your Ayurvedic prakriti — body type, digestive fire (Agni), and stress reactivity.",
  },
  {
    n: 2,
    h: "Personalise the protocol",
    p: "Classical herbal formulations are matched to your subtype and constitution — never one-size-fits-all. Modern testing is ordered only when it will change the plan.",
  },
  {
    n: 3,
    h: "Treat the whole system",
    p: "Herbal medicine plus a personalised, often low-FODMAP-aligned diet, gut-brain therapy for stress and sleep, and yoga and pranayama your body can actually do.",
  },
  {
    n: 4,
    h: "Track for 90 days",
    p: "Weekly check-ins and measurable outcomes. The plan is adjusted to your response, not to an average — so progress holds after treatment ends.",
  },
];

const HERBS: ReadonlyArray<{ name: string; note: string }> = [
  { name: "Kutaja", note: "classical remedy for loose stools and Grahani (IBS-type) imbalance" },
  { name: "Bilva", note: "soothes the bowel lining and firms up motions" },
  { name: "Hingvashtak Churna", note: "eases gas, bloating, and post-meal discomfort" },
  { name: "Triphala", note: "gently regulates bowel movement in constipation-predominant IBS" },
  { name: "Musta", note: "supports digestive fire (Agni) and calms cramping" },
];

const PILLARS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Subtype-specific protocols",
    body: "IBS-D, IBS-C, and IBS-M behave differently, so each gets a different plan — not the same generic gut tonic.",
  },
  {
    title: "Modern testing, used sparingly",
    body: "We use blood, stool, and breath tests only where they rule something out or genuinely change your treatment.",
  },
  {
    title: "Diet personalised to your gut",
    body: "A structured, low-FODMAP-aligned diet identifies your triggers, then carefully reintroduces foods so you eat freely again.",
  },
  {
    title: "Tracked 90-day outcomes",
    body: "Progress is reviewed weekly against your own baseline — measured, not assumed.",
  },
];

const SCIENCE_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Is IBS curable?",
    a: "There is no overnight cure, but IBS is highly manageable. Most patients reach durable, symptom-free living through a personalised plan that targets diet, the gut, and the gut-brain axis together. Our 90-day programme is built around exactly that.",
  },
  {
    q: "Is IBS just stress?",
    a: "No. Stress is one trigger among many — it does not, on its own, cause IBS. The mechanisms are physical (visceral hypersensitivity, altered motility, dysbiosis); stress amplifies them through the gut-brain axis, which is why we treat both.",
  },
  {
    q: "Why does my stomach hurt right after eating?",
    a: "That is the gastrocolic reflex — a normal post-meal signal that is exaggerated in IBS. Eating triggers strong colonic contractions, producing pain or an urgent need to go within minutes of a meal.",
  },
  {
    q: "Why am I bloated even when I eat very little?",
    a: "Visceral hypersensitivity and altered motility mean the gut distends and is felt as bloating at normal volumes of gas. The distension is real and measurable — not imagined.",
  },
  {
    q: "How does Ayurveda combine with modern medicine here?",
    a: "We treat them as one integrated system. Modern diagnostics identify your subtype and rule out red flags; Ayurvedic assessment (prakriti, Agni, Grahani) guides which herbal formulation and diet fit your constitution. The result is evidence-led and personalised.",
  },
];

export default function SciencePage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              The science
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              The science behind lasting IBS relief.
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Our promises are backed by science. We treat irritable bowel
              syndrome as what modern medicine now understands it to be — a
              disorder of gut–brain interaction — and we treat it at the root by
              combining clinical Ayurveda with modern diagnostics.
            </p>
          </div>
        </section>

        {/* WHAT IBS REALLY IS */}
        <section className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-h2 text-charcoal">
                What IBS really is
              </h2>
              <p className="mt-4 text-lead text-charcoal-soft">
                For years IBS was dismissed as &ldquo;just stress&rdquo; or
                &ldquo;all in your head.&rdquo; The science says otherwise.
                Irritable bowel syndrome is a genuine, measurable dysfunction in
                how the gut and brain communicate — and in how the bowel itself
                moves and senses.
              </p>
              <p className="mt-4 text-charcoal-soft">
                Because the wiring, not the plumbing, is the problem, scans and
                scopes usually come back normal. That is exactly why a specialist
                approach matters: the answer is in the patterns, not a single
                test.
              </p>
            </div>
            <div className="card bg-[#FBF6EC]">
              <h3 className="font-heading text-h3 text-charcoal">
                The mechanisms we target
              </h3>
              <ul className="mt-4 space-y-4">
                {MECHANISMS.map((m) => (
                  <li key={m.term}>
                    <p className="font-heading text-base text-green">{m.term}</p>
                    <p className="mt-1 text-sm text-charcoal-soft">{m.meaning}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOW OUR TREATMENT WORKS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                How our treatment works
              </h2>
              <p className="mt-3 text-charcoal-soft">
                Eastern wisdom meets Western science — one integrated plan, built
                around your gut, not a template.
              </p>
            </div>
            <Roadmap steps={PROCESS} />
            <div className="mt-12 card bg-white">
              <h3 className="font-heading text-h3 text-charcoal">
                Harnessing the power of herbal medicine
              </h3>
              <p className="mt-3 text-charcoal-soft">
                Our formulations draw on classical Ayurvedic herbs used for
                centuries to settle the gut — matched to your subtype and
                constitution, and described in modern terms so you always know
                what you are taking and why.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {HERBS.map((h) => (
                  <li
                    key={h.name}
                    className="flex items-start gap-3 rounded-[12px] bg-gray-light p-4"
                  >
                    <span className="mt-0.5 text-green" aria-hidden="true">
                      🌿
                    </span>
                    <span className="text-sm text-charcoal">
                      <span className="font-semibold">{h.name}</span> —{" "}
                      <span className="text-charcoal-soft">{h.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PILLARS / EVIDENCE */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                What makes the approach evidence-led
              </h2>
              <p className="mt-3 text-charcoal-soft">
                Four principles keep treatment grounded in your real response,
                not guesswork.
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <li key={p.title} className="card bg-white">
                  <h3 className="font-heading text-lg text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-soft">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SCIENCE FAQ */}
        <section className="container-page py-16 md:py-20">
          <h2 className="font-heading text-h2 text-charcoal">
            The science, answered simply
          </h2>
          <div className="mt-8 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
            {SCIENCE_FAQ.map((f) => (
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
        </section>

        {/* CTA */}
        <section className="container-page pb-16 md:pb-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">See the science applied to your gut</h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation. A senior IBS doctor reviews your
              case before the call and explains exactly how we would approach it.
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
