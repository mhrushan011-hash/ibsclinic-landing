import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "IBS Treatment Combos | IBS Clinic",
  description:
    "Specialist-formulated Ayurvedic powder combos for every IBS type — IBS-M, IBS-C, IBS-D, and more. Includes consultation, diet plan, and ongoing support.",
};

const PRODUCTS = [
  {
    slug: "ibs-m",
    type: "IBS-M",
    headline: "Alternating constipation & diarrhea",
    tagline: "For patients who swing between loose stools and complete blockage",
    symptoms: [
      "Days of constipation followed by urgent diarrhea",
      "Abdominal bloating that worsens through the day",
      "Cramping with unpredictable bowel patterns",
    ],
    combo: "IBS Diglac + IBS Diapro",
    price: "₹2,260",
  },
  {
    slug: "ibs-c",
    type: "IBS-C",
    headline: "Chronic constipation & gas",
    tagline: "For patients with persistent constipation, gas, and bloating",
    symptoms: [
      "Straining for days with no relief",
      "Painful gas, bloating, and acidity",
      "Incomplete evacuation feeling",
    ],
    combo: "IBS Diglac + IBS Diglac Plus",
    price: "₹2,260",
  },
  {
    slug: "ibs-d-chronic",
    type: "Chronic IBS-D",
    headline: "Frequent loose & mushy stools",
    tagline: "For long-term IBS-D causing gut damage and daily disruption",
    symptoms: [
      "Loose or mushy stools multiple times daily",
      "Constant stomach discomfort and urgency",
      "Prolonged gut inflammation and weakness",
    ],
    combo: "IBS Diglac + IBS Diapro",
    price: "₹2,260",
  },
  {
    slug: "ibs-d",
    type: "IBS-D",
    headline: "Mild diarrhea & bacterial imbalance",
    tagline: "For mild IBS-D with dysentery and gut microbiome disruption",
    symptoms: [
      "Frequent loose stools and dysentery episodes",
      "Gas, bloating, and stomach pain",
      "Gut bacterial imbalance",
    ],
    combo: "IBS Diarrheal Plus + IBS Diapro",
    price: "₹2,260",
  },
  {
    slug: "ibs-diapro-diglac-plus",
    type: "IBS-C + Gastrocolic",
    headline: "Urgency after meals & SIBO",
    tagline: "For IBS-C patients with post-meal urgency and bacterial overgrowth",
    symptoms: [
      "Frequent urge to go after eating but can't fully evacuate",
      "Small intestinal bacterial overgrowth (SIBO)",
      "Flatulence, indigestion, and stomach pain",
    ],
    combo: "IBS Diapro + IBS Diglac Plus",
    price: "₹2,260",
  },
];

export default function ProductsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="pb-20 md:pb-0">
      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20">
          <p className="mb-4 text-sm font-medium text-green">
            IBS Clinic · Treatment Combos
          </p>
          <h1 className="text-h1 text-charcoal">
            Specialist powder combos — matched to your IBS type
          </h1>
          <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
            Not all IBS is the same. Each combo below is formulated for a specific subtype,
            researched by doctors who have treated thousands of IBS patients. Every purchase
            includes consultation, a personalised diet plan, and ongoing support.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <article
                key={p.slug}
                className="card flex flex-col"
              >
                <span className="mb-3 inline-block w-fit rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
                  {p.type}
                </span>
                <h2 className="font-heading text-xl text-charcoal">{p.headline}</h2>
                <p className="mt-2 text-sm text-charcoal-soft">{p.tagline}</p>
                <ul className="mt-4 grow space-y-2 text-sm text-charcoal-soft">
                  {p.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green" aria-hidden="true">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-gray-border pt-4">
                  <p className="text-sm font-medium text-charcoal">{p.combo}</p>
                  <p className="mt-0.5 text-sm text-charcoal-soft">
                    {p.price} · Consultation + diet plan + support included
                  </p>
                </div>
                <Link
                  href={`/products/${p.slug}`}
                  className="btn-primary mt-5 text-center"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20 text-center">
          <h2 className="text-h2">Not sure which combo is right for you?</h2>
          <p className="mt-4 max-w-prose mx-auto text-charcoal-soft">
            Book a free 15-minute evaluation. A senior IBS doctor will review your
            symptoms and recommend the right plan before the call.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Book Your Free IBS Evaluation
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
