import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "Chronic IBS-D Treatment: IBS Diglac + IBS Diapro | IBS Clinic",
  description:
    "Specialist powder combo for chronic IBS-D — frequent loose and mushy stools. Restores gut health, eliminates toxins, and reduces urgency. Includes consultation.",
};

const STEPS = [
  {
    n: 1,
    h: "Regulate bowel movements",
    p: "IBS Diapro firms and regulates stool consistency — reducing frequency and urgency for patients with chronic loose stools.",
  },
  {
    n: 2,
    h: "Eliminate gut toxins & pathogens",
    p: "The formulation exhibits antibacterial activity against pathogens that sustain chronic diarrhea, removing toxins and calming gut inflammation.",
  },
  {
    n: 3,
    h: "Rebuild gut health",
    p: "IBS Diglac restores gastrointestinal motility and promotes beneficial bacteria — healing the gut lining damaged by prolonged IBS-D.",
  },
];

export default function IbsDChronicPage() {
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
          <span className="text-charcoal">Chronic IBS-D Combo</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20">
          <span className="mb-4 inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
            Chronic IBS-D
          </span>
          <h1 className="text-h1 text-charcoal">
            Frequent loose & mushy stools
          </h1>
          <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
            For patients with long-term IBS-D causing daily disruption. This specialist combo
            targets the gut damage, bacterial imbalance, and urgency behind chronic diarrhea.
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
            This combo is for patients who have been living with IBS-D for months or years. If three or more of these apply, this is your combo.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Loose or mushy stools multiple times every day",
              "Constant stomach discomfort and urgency",
              "Prolonged gut inflammation and weakness",
              "Loss of appetite and fatigue linked to gut symptoms",
              "Urgency that limits travel, work, and socialising",
              "No lasting improvement from previous treatments",
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
          <h2 className="text-h2">The Chronic IBS-D Combo: IBS Diglac + IBS Diapro</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diglac</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Restores gut motility and promotes a healthy microbiome. Addresses the underlying gut dysbiosis driving chronic loose stools.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diapro</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Exhibits antibacterial activity against pathogens, reduces gut urgency, and helps rebuild the gut lining damaged by long-term diarrhea.
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
              "IBS Diglac powder (specialist formulation)",
              "IBS Diapro powder (specialist formulation)",
              "One-on-one doctor consultation",
              "Personalised Chronic IBS-D diet plan",
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
