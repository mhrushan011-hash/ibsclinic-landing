import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleBody } from "@/components/article-body";
import { DOCTOR_LIST } from "@/lib/doctors";
import { BEST_DOCTOR_BODY } from "@/lib/best-doctor-content";

export const metadata: Metadata = {
  title: "Best IBS Doctors in India — Free Consultation | IBS Clinic",
  description:
    "Meet India's best IBS doctors and specialists at IBS Clinic. Expert Ayurvedic physicians with decades of experience treating IBS and digestive disorders. Get a free consultation.",
  alternates: { canonical: "/best-ibs-doctor-in-india" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "80–90%", label: "symptom reduction reported by ~90 days" },
  { value: "70%+", label: "of patients living symptom-free" },
  { value: "18+ yrs", label: "specialising in IBS & gut disorders" },
  { value: "4.7★", label: "across 80+ Google reviews" },
];

export default function BestIbsDoctorPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Best IBS doctor in India
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Meet the best IBS doctors in India
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Specialist IBS care that blends classical Ayurvedic science with
              modern diagnostics — led by doctors who have treated thousands of
              IBS patients across India and abroad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-an-appointment" className="btn-primary">
                Book a free consultation
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* POSITIONING COPY */}
        <section className="container-page py-14 md:py-16">
          <div className="mx-auto max-w-prose">
            <ArticleBody markdown={BEST_DOCTOR_BODY} />
          </div>
        </section>

        {/* DOCTORS */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">
              Our specialist IBS doctors
            </h2>
            <p className="mt-3 max-w-prose text-charcoal-soft">
              One specialist team, end to end — no rotating doctors, no guesswork.
            </p>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {DOCTOR_LIST.map((d) => (
                <li key={d.slug} className="card flex flex-col gap-4 sm:flex-row">
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-lg text-charcoal">
                      {d.isAuthor ? (
                        <Link
                          href={`/author/${d.slug}`}
                          className="no-underline hover:text-green"
                        >
                          {d.name}
                        </Link>
                      ) : (
                        d.name
                      )}
                    </h3>
                    <p className="text-sm font-medium text-green">{d.creds}</p>
                    <p className="text-xs text-charcoal-soft">
                      {d.exp} · {d.speciality}
                    </p>
                    <p className="mt-2 text-sm text-charcoal-soft">{d.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/doctors" className="btn-secondary inline-block">
                See the full team →
              </Link>
            </p>
          </div>
        </section>

        {/* RESULTS */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="mb-10 max-w-prose">
              <h2 className="font-heading text-h2 text-charcoal">
                Why patients choose our doctors
              </h2>
              <p className="mt-3 text-charcoal-soft">
                Specialisation, personalised plans, and tracked outcomes — the
                numbers we hold ourselves to.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* CTA */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">
              Talk to a top IBS doctor — free
            </h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation. A senior IBS doctor reviews your
              case before the call and gives you an honest opinion — no pressure
              to enrol.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-an-appointment" className="btn-primary">
                Book your free consultation
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
