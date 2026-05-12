import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "IBS-C Gastrocolic Treatment: IBS Diapro + IBS Diglac Plus | IBS Clinic",
  description:
    "Specialist powder combo for IBS-C with gastrocolic reflex — post-meal urgency, SIBO, and incomplete evacuation. Includes consultation and diet plan.",
};

const STEPS = [
  {
    n: 1,
    h: "Improve digestive enzyme secretion",
    p: "IBS Diglac Plus enhances digestive enzyme and juice secretion — breaking down food particles properly so the gut doesn't trigger false urgency after meals.",
  },
  {
    n: 2,
    h: "Address SIBO & gut bacteria",
    p: "IBS Diapro targets small intestinal bacterial overgrowth directly — removing the excess bacteria causing bloating, urgency, and incomplete evacuation.",
  },
  {
    n: 3,
    h: "Regulate brain-gut signalling",
    p: "The combo supports serotonin level improvement in the gut — calming the overactive brain-gut axis that triggers urgency and post-meal discomfort.",
  },
];

export default function IbsDiaproDiglacPlusPage() {
  return (
    <>
      <SimpleHeader />
      <main className="pb-20 md:pb-0">
      {/* BREADCRUMB */}
      <div className="border-b border-gray-border bg-white">
        <div className="container-page py-3 text-sm text-charcoal-soft">
          <Link href="/" className="hover:text-green">Home</Link>
          <span className="mx-2 opacity-50">›</span>
          <Link href="/products" className="hover:text-green">Products</Link>
          <span className="mx-2 opacity-50">›</span>
          <span className="text-charcoal">IBS-C Gastrocolic Combo</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20">
          <span className="mb-4 inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
            IBS-C + Gastrocolic
          </span>
          <h1 className="text-h1 text-charcoal">
            Urgency after meals & SIBO
          </h1>
          <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
            For IBS-C patients who feel a strong urge to go right after eating — but can&apos;t
            fully evacuate. This combo addresses the gastrocolic reflex, SIBO, and the
            brain-gut miscommunication behind these symptoms.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="font-heading text-2xl font-bold text-charcoal">₹2,260</p>
            <p className="text-sm text-charcoal-soft">Consultation + diet plan + support included</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="btn-primary">Request a Call Back</Link>
            <a href="tel:+917500334343" className="btn-secondary">Call to Order</a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-h2">Who this is for</h2>
          <p className="mt-3 text-charcoal-soft">
            This combo is for patients who feel constipated but have high urgency — a common and confusing IBS-C presentation.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Frequent urge to go immediately after eating",
              "Still feel constipated despite urgency (gastrocolic reflex)",
              "Small intestinal bacterial overgrowth (SIBO)",
              "Diarrhea, flatulence, and indigestion",
              "Incomplete evacuation — stool there but won't come out",
              "Stomach pain and cramping especially after meals",
            ].map((s) => (
              <li
                key={s}
                className="rounded-[12px] border border-gray-border bg-gray-light p-4 text-sm text-charcoal"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMBO */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-h2">The Combo: IBS Diapro + IBS Diglac Plus</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diapro</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Targets SIBO and gut bacterial overgrowth directly. Reduces post-meal urgency by addressing the bacterial triggers behind the gastrocolic reflex.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diglac Plus</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Improves digestive enzyme secretion and nutrient absorption. Helps the brain-gut axis regulate serotonin — calming overactive post-meal signalling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-h2">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="card flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green font-heading text-base font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-charcoal">{s.h}</h3>
                  <p className="mt-2 text-sm text-charcoal-soft">{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-gray-light">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-h2">What&apos;s included at ₹2,260</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "IBS Diapro powder (specialist formulation)",
              "IBS Diglac Plus powder (specialist formulation)",
              "One-on-one doctor consultation",
              "Personalised IBS-C + Gastrocolic diet plan",
              "Ongoing support from the clinical team",
              "Free IBS evaluation before you commit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal">
                <span className="mt-1 text-green">✅</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/" className="btn-primary">Book Your Free Evaluation →</Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
