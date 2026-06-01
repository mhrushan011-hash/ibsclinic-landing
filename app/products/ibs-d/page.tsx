import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "IBS-D Treatment: IBS Diarrheal Plus + IBS Diapro | IBS Clinic",
  description:
    "Specialist powder combo for mild IBS-D — loose stools, dysentery, and bacterial imbalance. Effective for gut microbiome restoration. Includes consultation.",
};

const STEPS = [
  {
    n: 1,
    h: "Prevent dysentery & diarrhea",
    p: "IBS Diarrheal Plus helps prevent recurring dysentery and diarrheal episodes — targeting the bacterial triggers behind mild IBS-D.",
  },
  {
    n: 2,
    h: "Eliminate gas & stomach discomfort",
    p: "The combo works to reduce gas, bloating, and stomach pain that accompany loose stools — restoring digestive comfort.",
  },
  {
    n: 3,
    h: "Restore gut microbiome balance",
    p: "IBS Diapro promotes beneficial bacteria growth and removes toxins — rebuilding the microbiome disrupted by IBS-D.",
  },
];

export default function IbsDPage() {
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
          <span className="text-charcoal">IBS-D Combo</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <span className="mb-4 inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
              IBS-D
            </span>
            <h1 className="text-h1 text-charcoal">
              Mild diarrhea & bacterial imbalance
            </h1>
            <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
              Specialist-formulated combo for mild IBS-D — addressing loose stools, dysentery episodes,
              and the gut bacterial imbalance behind them. Tested on thousands of IBS-D patients.
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
          <div className="md:col-span-5 md:self-center">
            <div className="overflow-hidden rounded-[24px] border border-gray-border bg-white">
              <Image
                src="/products/ibs-d.jpg"
                alt="IBS Diarrheal Plus and IBS Diapro powders — IBS-D combo"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-h2">Who this is for</h2>
          <p className="mt-3 text-charcoal-soft">
            This combo is for patients with mild to moderate IBS-D. If these sound familiar, this is your match.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Frequent loose or watery stools",
              "Recurring dysentery episodes",
              "Gas, bloating, and stomach pain after eating",
              "Gut bacterial imbalance (diagnosed or suspected)",
              "Stomach health disrupted after illness or antibiotics",
              "Discomfort that prevents normal daily activity",
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
          <h2 className="text-h2">The IBS-D Combo: IBS Diarrheal Plus + IBS Diapro</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diarrheal Plus</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Directly targets mild IBS-D and dysentery. Supports healthy stomach health and digestion while reducing stool frequency.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diapro</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Promotes beneficial gut bacteria, eliminates pathogens, and removes toxins causing bacterial imbalance and loose stools.
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
              "IBS Diarrheal Plus powder (specialist formulation)",
              "IBS Diapro powder (specialist formulation)",
              "One-on-one doctor consultation",
              "Personalised IBS-D diet plan",
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
