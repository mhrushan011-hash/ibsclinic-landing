import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — IBS Clinic",
  robots: { index: true, follow: false },
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="bg-linen">
      <article className="container-page mx-auto max-w-prose py-16 leading-relaxed">
        <h1 className="text-h2 text-sage-dark">Medical Disclaimer</h1>

        <p className="mt-6">
          The information provided on consultation.ibsclinic.com — including blog posts,
          symptoms lists, treatment descriptions, and FAQs — is for educational purposes only.
          It is not a substitute for personal medical advice from a qualified clinician.
        </p>

        <p className="mt-3">
          Always consult a qualified physician for diagnosis and treatment of any medical
          condition. Do not delay seeking medical advice because of something you have read on
          this site.
        </p>

        <div className="mt-8 rounded-[16px] border border-danger/30 bg-danger/5 p-5">
          <h2 className="font-heading text-h3 text-danger">Emergency care</h2>
          <p className="mt-3">
            If you are experiencing a medical emergency — including but not limited to severe
            abdominal pain, rectal bleeding, persistent fever, or any symptom you believe is
            life-threatening — call <b>112</b> in India or visit your nearest hospital
            immediately. <b>IBS Clinic does not provide emergency care.</b>
          </p>
        </div>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Telemedicine</h2>
        <p className="mt-3">
          Online consultations are conducted under the Indian Telemedicine Practice Guidelines
          2020 (issued by the Board of Governors in supersession of the Medical Council of
          India). Doctor identity is verified, patient identity is verified, and consent is
          obtained at each call.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Outcome statements</h2>
        <p className="mt-3">
          Published outcome statements (80–90% symptom reduction in completers, ~90 days to
          significant improvement, 70%+ patients living symptom-free) are based on IBS Clinic&apos;s
          internal patient outcome records (2003–2025). Individual outcomes vary based on
          adherence, severity, comorbidity, and case-specific factors.
        </p>

        <p className="mt-10 text-sm text-slate/60">Last updated: 2026-05-10</p>
      </article>
    </main>
  );
}
