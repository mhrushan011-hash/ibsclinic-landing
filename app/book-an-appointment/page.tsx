import type { Metadata } from "next";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { Roadmap } from "@/components/roadmap";

export const metadata: Metadata = {
  title: "Book Your Free IBS Evaluation | IBS Clinic",
  description:
    "Book a free 15-minute consultation with a senior IBS doctor. A specialist reviews your case before the call — no pressure to enrol. 18+ years, 80–90% symptom reduction in ~90 days.",
  alternates: { canonical: "/book-an-appointment" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

const STEPS: ReadonlyArray<{ n: number; h: string; p: string }> = [
  {
    n: 1,
    h: "Share your details",
    p: "Tell us your name, city, and main concern. It takes under a minute and stays confidential.",
  },
  {
    n: 2,
    h: "A doctor reviews your case",
    p: "A senior IBS doctor reads your history before the call — so the conversation starts with you, not a form.",
  },
  {
    n: 3,
    h: "We call you back",
    p: "At the time you choose, we call for a free 15-minute evaluation — by phone or video, anywhere in India.",
  },
  {
    n: 4,
    h: "Start your personalised plan",
    p: "If we're the right fit, you'll get a plan matched to your IBS subtype. No pressure to enrol on the call.",
  },
];

const BENEFITS: ReadonlyArray<{ icon: string; title: string; body: string }> = [
  {
    icon: "🆓",
    title: "Free 15-minute evaluation",
    body: "No cost, no obligation — just a clear, honest opinion on whether we can help.",
  },
  {
    icon: "👩‍⚕️",
    title: "A senior IBS doctor",
    body: "Not a call-centre script. Your case is reviewed by a specialist with years of IBS experience.",
  },
  {
    icon: "🔒",
    title: "Private by design",
    body: "Your details are seen only by our medical team. We never sell or share your data.",
  },
];

export default function BookAnAppointmentPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              18+ years · 4.7★ Google · 8 cities · Telehealth pan-India
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Book your free IBS evaluation.
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Take the first step towards better gut health. A senior IBS doctor
              reviews your case before the call, then we help{" "}
              <span className="font-semibold text-charcoal">
                80–90% of patients
              </span>{" "}
              live symptom-free in{" "}
              <span className="font-semibold text-charcoal">~90 days</span> —
              through personalised Ayurveda, diet, and modern testing.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="container-page py-16 md:py-20">
          <div className="mb-10 max-w-prose">
            <h2 className="font-heading text-h2 text-charcoal">
              How booking works
            </h2>
            <p className="mt-3 text-charcoal-soft">
              Four simple steps — most patients are booked in under a minute.
            </p>
          </div>
          <Roadmap steps={STEPS} />
        </section>

        {/* FORM + REASSURANCE */}
        <section className="bg-gray-light">
          <div className="container-page py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <LeadForm headingId="book-form-heading" />
              </div>
              <aside className="lg:col-span-5">
                <div className="card bg-[#FBF6EC]">
                  <h2 className="font-heading text-h3 text-charcoal">
                    What to expect
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-charcoal-soft">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-green" aria-hidden="true">✓</span>
                      A free 15-minute call at a time that suits you.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-green" aria-hidden="true">✓</span>
                      A senior doctor who has already read your case.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-green" aria-hidden="true">✓</span>
                      An honest opinion — no pressure to enrol.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-green" aria-hidden="true">✓</span>
                      Telehealth across India; medicines shipped to your door.
                    </li>
                  </ul>
                </div>

                <div className="card mt-6 bg-white">
                  <h2 className="font-heading text-h3 text-charcoal">
                    Prefer to reach us directly?
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li>
                      <a href={`tel:${PHONE_TEL}`} className="font-medium">
                        📞 {PHONE_DISPLAY}
                      </a>
                      <p className="text-charcoal-soft">Mon–Sat, 9 AM – 8 PM IST</p>
                    </li>
                    <li>
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="font-medium">
                        💬 WhatsApp us
                      </a>
                      <p className="text-charcoal-soft">Reply within 30 minutes</p>
                    </li>
                    <li>
                      <a href="mailto:info@ibsclinic.com" className="font-medium">
                        ✉️ info@ibsclinic.com
                      </a>
                      <p className="text-charcoal-soft">We reply within 1 working day</p>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* WHY BOOK */}
        <section className="container-page py-16 md:py-20">
          <div className="mb-10 max-w-prose">
            <h2 className="font-heading text-h2 text-charcoal">
              Why book an evaluation?
            </h2>
            <p className="mt-3 text-charcoal-soft">
              It&apos;s the easiest, lowest-risk first step you can take for your gut.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {BENEFITS.map((b) => (
              <li key={b.title} className="card">
                <p className="text-3xl" aria-hidden="true">{b.icon}</p>
                <h3 className="mt-3 font-heading text-lg text-charcoal">{b.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{b.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
