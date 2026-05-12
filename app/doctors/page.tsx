import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";

export const metadata: Metadata = {
  title: "Our Doctors | IBS Clinic — Specialist IBS Care",
  description:
    "Meet the specialist doctors at IBS Clinic. 20+ years of IBS-specific care combining Naturopathy, Ayurveda, and modern testing.",
};

const DOCTORS = [
  {
    name: "Dr. Kamal K Khajuria",
    creds: "Founder, ND (Naturopathy)",
    image: "/doctors/dr-kamal.webp",
    bio: "Dr. Kamal founded IBS Clinic over 20 years ago after experiencing IBS himself. His personal journey gave him a unique perspective on patient-centred care — understanding not just the clinical picture but the anxiety, diet restrictions, and daily disruption that comes with IBS. He has personally guided treatment for thousands of patients across India and Bangladesh, developing the integrated Naturopathy + Ayurveda protocols the clinic is known for today.",
    speciality: "Naturopathy · IBS protocol design · Patient history",
  },
  {
    name: "Dr. Keshav Raj",
    creds: "BAMS, MD (Ayurveda)",
    image: "/doctors/dr-keshav.webp",
    bio: "Dr. Keshav is a senior Ayurvedic specialist with an MD in Ayurveda and deep clinical experience in IBS-D and IBS-M presentations. He focuses on dosha-tailored protocols — matching the correct Ayurvedic formulation to the patient's constitutional type and IBS subtype. He oversees the integration of modern gut testing with traditional Ayurvedic diagnostics.",
    speciality: "Ayurveda · IBS-D · IBS-M · Dosha assessment",
  },
  {
    name: "Dr. Rajeev Gaur",
    creds: "BAMS",
    image: "/doctors/dr-rajeev.webp",
    bio: "Dr. Rajeev is an Ayurvedic Physician who specialises in long-form patient case-history work. He is known for thorough one-on-one consultations that uncover triggers, dietary patterns, and lifestyle factors most doctors miss. His detailed case-building directly informs each personalised treatment plan.",
    speciality: "Ayurveda · Patient case history · Plan personalisation",
  },
  {
    name: "Dr. Nishikant Dwivedi",
    creds: "BAMS, Ayurvedacharya",
    image: "/doctors/dr-nishikant.webp",
    bio: "Dr. Nishikant holds the title of Ayurvedacharya and brings deep grounding in classical Ayurvedic formulations and Panchakarma protocols. He contributes to the clinic's formulation work — ensuring that every herbal combination used in treatment is backed by classical texts and validated through clinical outcomes.",
    speciality: "Classical Ayurveda · Panchakarma · Formulations",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="pb-20 md:pb-0">
      {/* HERO */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20">
          <p className="mb-4 text-sm font-medium text-green">
            IBS Clinic · Specialist Team
          </p>
          <h1 className="text-h1 text-charcoal">
            Meet the doctors leading your case
          </h1>
          <p className="mt-5 max-w-prose text-lead text-charcoal-soft">
            Every patient at IBS Clinic is seen by doctors who treat{" "}
            <strong className="text-charcoal">only IBS</strong> — not general gastric
            complaints, not wellness. 20+ years of IBS-specific experience, end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-charcoal-soft">
            <span>★ 4.7 on Google</span>
            <span>·</span>
            <span>20+ years combined IBS specialty</span>
            <span>·</span>
            <span>Telehealth across India</span>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="bg-white">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-12">
            {DOCTORS.map((d) => (
              <article
                key={d.name}
                className="grid gap-8 md:grid-cols-[200px_1fr]"
              >
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                  <Image
                    src={d.image}
                    alt={d.name}
                    width={200}
                    height={200}
                    className="h-48 w-48 rounded-[16px] object-cover shadow-card"
                  />
                  <div>
                    <h2 className="font-heading text-xl text-charcoal">{d.name}</h2>
                    <p className="mt-1 text-sm font-medium text-green">{d.creds}</p>
                  </div>
                </div>
                <div className="rounded-[16px] border border-gray-border bg-gray-light p-6">
                  <p className="text-charcoal-soft leading-relaxed">{d.bio}</p>
                  <p className="mt-4 text-sm font-medium text-charcoal">
                    Speciality:{" "}
                    <span className="font-normal text-charcoal-soft">{d.speciality}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-tint">
        <div className="container-page py-16 md:py-20 text-center">
          <h2 className="text-h2">Ready to speak with our team?</h2>
          <p className="mt-4 max-w-prose mx-auto text-charcoal-soft">
            Your free 15-minute evaluation is reviewed by a senior IBS doctor before
            the call — so your time is spent on solutions, not background.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Book Your Free IBS Evaluation
            </Link>
            <a href="tel:+917500334343" className="btn-secondary">
              Call +91 750 033 4343
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
