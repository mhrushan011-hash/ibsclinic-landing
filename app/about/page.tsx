import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About IBS Clinic — Healing Hands with Holistic Science",
  description:
    "IBS Clinic is the world's first online specialist clinic for Irritable Bowel Syndrome and functional gut disorders. Led by Dr. Kamal K Khajuria with 18+ years of clinical experience.",
  alternates: { canonical: "/about" },
};

const BELIEFS: ReadonlyArray<string> = [
  "That when you follow your gut, everyone wins.",
  "In your right to define what health and happiness mean to you.",
  "In the power of gut health.",
];

const GUT_BENEFITS: ReadonlyArray<{ title: string; icon: string }> = [
  { title: "Less bloating", icon: "🫧" },
  { title: "Healthier skin & hair", icon: "✨" },
  { title: "Increased happiness", icon: "😊" },
  { title: "Boosted immunity", icon: "🛡️" },
  { title: "Improved digestion", icon: "🌿" },
  { title: "More energy", icon: "⚡" },
];

export default function AboutPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              About IBS Clinic
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Healing Hands with Holistic Science.
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              At IBS Clinic, our vision is to create a world where individuals
              suffering from Irritable Bowel Syndrome (IBS) can live their lives
              to the fullest, free from the limitations and discomfort caused by
              this chronic condition.
            </p>
          </div>
        </section>

        {/* PROBLEM + MISSION */}
        <section className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-h2 text-charcoal">
                The problem we solve
              </h2>
              <p className="mt-4 text-lead text-charcoal-soft">
                Irritable Bowel Syndrome is one of the most common and
                debilitating gut disorders in the world today — with no
                satisfactory solution in conventional medicine. Patients spend
                years cycling between specialists, restrictive diets, and
                short-term symptom relief.
              </p>
              <p className="mt-4 text-lead text-charcoal-soft">
                We exist to break that cycle.
              </p>
            </div>
            <div className="card bg-[#FBF6EC]">
              <h2 className="font-heading text-h3 text-charcoal">
                Our mission
              </h2>
              <p className="mt-3 text-charcoal-soft">
                To help people suffering with Irritable Bowel Syndrome (IBS)
                overcome their everyday challenges with a holistic wellness
                science that combines clinical Ayurveda, modern diagnostics, and
                gut-brain-axis therapy.
              </p>
              <p className="mt-4 text-charcoal-soft">
                We are a leading online healthcare provider — the first of its
                kind in the world — specialising in the treatment of IBS and
                other functional gut disorders. Our comprehensive care is
                designed to address the root causes, not just the symptoms.
              </p>
            </div>
          </div>
        </section>

        {/* BELIEFS */}
        <section className="bg-[#FBF6EC]">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              What we believe
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {BELIEFS.map((b, i) => (
                <li key={i} className="card bg-white">
                  <p className="font-heading text-lg text-green">
                    We believe…
                  </p>
                  <p className="mt-2 text-charcoal">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="card bg-green-tint">
                <p className="text-sm font-medium uppercase tracking-wide text-green">
                  Founder & Director
                </p>
                <h2 className="mt-2 font-heading text-h3 text-charcoal">
                  Dr. Kamal K Khajuria (ND)
                </h2>
                <p className="mt-2 text-sm text-charcoal-soft">
                  Twice Gold Medalist, Yoga Federation of India · 18+ years of
                  clinical experience in IBS and functional gut disorders.
                </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <blockquote className="border-l-4 border-green pl-6">
                <p className="font-heading text-h3 text-charcoal">
                  &ldquo;We at IBS Clinic want to reassure you that you are not
                  alone.&rdquo;
                </p>
                <p className="mt-4 text-charcoal-soft">
                  Over 18 years I have seen first-hand how IBS quietly takes
                  over lives — confidence, work, relationships, even joy. We
                  built IBS Clinic so that no one has to fight this alone, and
                  so that the right combination of Ayurveda and modern science
                  can finally meet the patient where they are.
                </p>
              </blockquote>
              <p className="mt-6">
                <Link href="/doctors" className="btn-secondary inline-block">
                  Meet the full medical team →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* GUT BENEFITS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Why gut health matters
            </h2>
            <p className="mt-3 max-w-3xl text-charcoal-soft">
              A healthy gut changes more than your digestion. It changes how you
              feel, look, and live every single day.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {GUT_BENEFITS.map((b) => (
                <li key={b.title} className="card bg-white">
                  <p className="text-3xl" aria-hidden="true">
                    {b.icon}
                  </p>
                  <p className="mt-2 font-heading text-lg text-charcoal">
                    {b.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">Ready to talk to a specialist?</h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation with a senior IBS doctor. We will
              review your case before the call and tell you honestly whether
              IBS Clinic is the right fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Fill the patient consultation form
              </Link>
              <Link href="/" className="btn-secondary bg-white">
                Book a quick call back
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
