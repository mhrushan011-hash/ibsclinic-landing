import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Our Success Stories | Real Patient Experiences at IBS Clinic",
  description:
    "Discover inspiring success stories from real patients at IBS Clinic — how personalised Ayurvedic IBS treatment reduced symptoms by 70–90% and helped them eat without fear again.",
  alternates: { canonical: "/our-success-stories" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "80–90%", label: "symptom reduction reported by ~90 days" },
  { value: "70%+", label: "of patients living symptom-free" },
  { value: "4.7★", label: "across 80+ Google reviews" },
  { value: "18+ yrs", label: "treating IBS, in India & abroad" },
];

interface Story {
  quote: string;
  name: string;
  meta: string;
}

const STORIES: ReadonlyArray<Story> = [
  {
    quote:
      "I was suffering from IBS since 2021, which is now 80% cured, thanks to Kamal ji Sir and the guidance of his team. I took the medicine for seven months and followed Sir's guidance completely — today I can eat everything like a healthy person. There is no problem now.",
    name: "Abhishek Mishra",
    meta: "India · 7 months · IBS",
  },
  {
    quote:
      "I had IBS symptoms since mid-2022. I started consultations with IBS Clinic in January and honestly, I wasn't sure it was going to make a difference. But here I am, six months later, and I'm almost 80% better. IBS Clinic is the best place to take treatment!",
    name: "Aditya",
    meta: "India · 6 months · IBS",
  },
  {
    quote:
      "I am from Bangladesh. I was diagnosed with IBS in 2010. After that I visited many hospitals and many doctors. Finally I was convinced and started taking the medicine — and it helped reduce my symptoms beyond 70%. After many years I can dare to eat normal foods, like everyone else.",
    name: "Manimul Hoque",
    meta: "Bangladesh · IBS since 2010",
  },
  {
    quote:
      "I was suffering from IBS for the last 2 years. I was not able to digest anything, not even rice, and I was losing weight rapidly. Then I got to know about IBS Clinic. Dr Kamal listened to all my problems and gave me the medicine — and finally I got cured from this chronic IBS.",
    name: "Ashish Kumar",
    meta: "Bihar · 2 years of IBS",
  },
  {
    quote:
      "After removing my gallbladder, I had symptoms of IBS diarrhoea. After getting treatment with IBS Clinic I am doing much better, because they review your overall case history and plan the treatment accordingly.",
    name: "Sanskar Gupta",
    meta: "India · Post-gallbladder IBS-D",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Success stories
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Real patients. Real relief.
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              These are real experiences from people who lived with IBS for years
              — through restrictive diets, rotating doctors, and being told it was
              just stress — until a personalised plan finally helped them eat
              without fear again.
            </p>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="container-page py-12 md:py-16">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <li key={s.label} className="card text-center">
                <p className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-green">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-charcoal-soft">{s.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* STORIES */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              In their own words
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {STORIES.map((s) => (
                <blockquote
                  key={s.name}
                  className="rounded-[16px] border border-gray-border bg-white p-6 shadow-card"
                >
                  <p className="text-lg leading-relaxed text-charcoal">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-medium text-green">
                    — <span className="text-charcoal">{s.name}</span>, {s.meta}
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-8 text-sm text-charcoal-soft">
              Individual results vary. Stories are shared with patient consent and
              reflect their personal experience, not a guaranteed outcome.
            </p>
          </div>
        </section>

        {/* GOOGLE REVIEWS */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl text-center">
            <p className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-green">
              4.7★
            </p>
            <h2 className="mt-3 font-heading text-h3 text-charcoal">
              Rated 4.7 across 80+ Google reviews
            </h2>
            <p className="mt-3 text-charcoal-soft">
              Verified reviews from patients across India and abroad — read them
              for yourself before you decide.
            </p>
            <p className="mt-6">
              <a
                href="https://www.google.com/maps/search/IBS+Clinic+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Read all Google reviews →
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page pb-16 md:pb-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">Your story could be next</h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation with a senior IBS doctor. We review
              your case before the call and tell you honestly whether we can help.
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
