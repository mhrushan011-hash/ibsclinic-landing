import type { Metadata } from "next";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { PatientIntakeForm } from "@/components/patient-intake-form";

export const metadata: Metadata = {
  title: "Contact IBS Clinic — Book Your Free Consultation",
  description:
    "Talk to a senior IBS doctor at IBS Clinic. Fill the new-patient consultation form, call +91 750 033 4343, WhatsApp us, or visit our Mumbai clinic.",
  alternates: { canonical: "/contact" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

const CLINICS: ReadonlyArray<{ city: string; address: string }> = [
  {
    city: "Mumbai (Head office)",
    address:
      "Shop No.2, HDIL Residency Park-1, Wing A1, Opp. Star Bazaar, Narangi Bypass, Virar (West), Mumbai 401303",
  },
  {
    city: "Bulandshahar",
    address: "84 SFS Awas Vikas Colony 1, D.M Road, Bulandshahar, Uttar Pradesh 203001",
  },
];

export default function ContactPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              Get in touch
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              We&apos;re here for your gut.
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Gut health can be complicated and frustrating for people
              experiencing problems. Leave your details — our medical team will
              review your case and contact you.
            </p>
          </div>
        </section>

        {/* CONTACT QUICK CARDS */}
        <section className="container-page py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <a href={`tel:${PHONE_TEL}`} className="card no-underline">
              <p className="text-sm font-medium text-green">📞 Call</p>
              <p className="mt-1 font-heading text-lg text-charcoal">
                {PHONE_DISPLAY}
              </p>
              <p className="mt-1 text-sm text-charcoal-soft">
                Mon–Sat, 9 AM – 8 PM IST
              </p>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="card no-underline"
            >
              <p className="text-sm font-medium text-green">💬 WhatsApp</p>
              <p className="mt-1 font-heading text-lg text-charcoal">
                Chat with our team
              </p>
              <p className="mt-1 text-sm text-charcoal-soft">
                Reply within 30 minutes
              </p>
            </a>
            <a href="mailto:info@ibsclinic.com" className="card no-underline">
              <p className="text-sm font-medium text-green">✉️ Email</p>
              <p className="mt-1 font-heading text-lg text-charcoal">
                info@ibsclinic.com
              </p>
              <p className="mt-1 text-sm text-charcoal-soft">
                We reply within 1 working day
              </p>
            </a>
          </div>
        </section>

        {/* FORM + CLINIC INFO */}
        <section className="container-page pb-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <PatientIntakeForm source="contact_page" />
            </div>
            <aside className="lg:col-span-5">
              <div className="card bg-[#FBF6EC]">
                <h2 className="font-heading text-h3 text-charcoal">
                  Visit our clinics
                </h2>
                <ul className="mt-4 space-y-5">
                  {CLINICS.map((c) => (
                    <li key={c.city}>
                      <p className="font-heading text-base text-green">
                        {c.city}
                      </p>
                      <p className="mt-1 text-sm text-charcoal-soft">
                        {c.address}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card mt-6 bg-white">
                <h2 className="font-heading text-h3 text-charcoal">
                  Working hours
                </h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-charcoal-soft">Monday – Friday</dt>
                    <dd className="text-charcoal">9:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-soft">Saturday</dt>
                    <dd className="text-charcoal">9:00 AM – 2:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-charcoal-soft">Sunday</dt>
                    <dd className="text-charcoal">Closed</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-charcoal-soft">
                  Appointment slots between 9 AM – 6 PM IST. Telehealth
                  consultations available pan-India.
                </p>
              </div>

              <div className="card mt-6 bg-white">
                <h2 className="font-heading text-h3 text-charcoal">
                  Getting here
                </h2>
                <ul className="mt-4 space-y-1 text-sm text-charcoal-soft">
                  <li>Nearest station: Virar Railway Station (2 km away)</li>
                  <li>Free parking available on premises</li>
                  <li>Wheelchair-accessible entrance</li>
                  <li>Landmark: Opposite Star Bazaar, Rustomjee Global City</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
