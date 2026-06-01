import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "IBS-C Treatment: IBS Diglac + IBS Diglac Plus | IBS Clinic",
  description:
    "Specialist powder combo for chronic IBS constipation. Regulates bowel movements, relieves gas and acidity, and restores digestive health. Includes consultation.",
};

const STEPS = [
  {
    n: 1,
    h: "Restore gastrointestinal motility",
    p: "IBS Diglac stimulates sluggish gut movement — helping break the constipation cycle without dependency on harsh laxatives.",
  },
  {
    n: 2,
    h: "Relieve gas, bloating & acidity",
    p: "IBS Diglac Plus works to reduce fermentation in the gut that causes painful gas, distension, and reflux alongside constipation.",
  },
  {
    n: 3,
    h: "Promote healthy microbiota",
    p: "The formulation detoxifies the gut and supports the growth of beneficial bacteria — addressing the root microbial imbalance in IBS-C.",
  },
];

export default function IbsCPage() {
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
          <span className="text-charcoal">IBS-C Combo</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <span className="mb-4 inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
              IBS-C
            </span>
            <h1 className="text-h1 text-charcoal">
              Chronic constipation & gas
            </h1>
            <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
              Specialist-formulated powder combo for IBS-C. Designed to regulate bowel movements,
              relieve painful gas and acidity, and restore normal digestive rhythm.
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
                src="/products/ibs-c.jpg"
                alt="IBS Diglac and IBS Diglac Plus powders — IBS-C combo"
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
            This combo is designed for chronic IBS-C patients. If three or more of these describe your daily life, this combo is for you.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Straining for days with no bowel movement",
              "Painful gas and distension throughout the day",
              "Bloating and acidity alongside constipation",
              "Incomplete evacuation — always feeling \"not done\"",
              "Hard, pellet-like stools",
              "Lower abdominal cramping without relief",
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
          <h2 className="text-h2">The IBS-C Combo: IBS Diglac + IBS Diglac Plus</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diglac</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Restores gastrointestinal motility — stimulating the gut to move normally without harsh laxatives or dependency.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg text-charcoal">IBS Diglac Plus</h3>
              <p className="mt-3 text-charcoal-soft text-sm">
                Targets gas, bloating, and acidity that accompany constipation. Reduces fermentation and supports digestive enzyme activity.
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
              "IBS Diglac Plus powder (specialist formulation)",
              "One-on-one doctor consultation",
              "Personalised IBS-C diet plan",
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
