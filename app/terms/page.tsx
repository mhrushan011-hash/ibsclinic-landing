import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — IBS Clinic",
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <article className="container-page mx-auto max-w-prose py-16 leading-relaxed">
        <h1 className="text-h2 text-charcoal">Terms of Service</h1>
        <p className="mt-2 text-sm text-charcoal-soft">
          Placeholder draft — review by legal counsel before publishing.
        </p>

        <h2 className="mt-10 font-heading text-h3 text-charcoal">Acceptance of terms</h2>
        <p className="mt-3">
          By using consultation.ibsclinic.com you agree to these terms. If you do not agree,
          please do not use the service.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">Service scope</h2>
        <p className="mt-3">
          IBS Clinic provides specialist Ayurveda-led IBS evaluation and treatment services.
          We do not provide emergency care or surgery.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">Telemedicine</h2>
        <p className="mt-3">
          Online consultations are conducted under the Indian Telemedicine Practice Guidelines
          2020. Consult identity verification and consent are obtained at each call.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">No guarantees</h2>
        <p className="mt-3">
          Outcomes depend on adherence and individual case. Published outcome ranges
          (80–90% symptom reduction in completers, ~90 days, 70%+ symptom-free) are based on
          internal patient outcomes and are not absolute guarantees.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">Refund &amp; cancellation</h2>
        <p className="mt-3">
          See the Refund &amp; Cancellation policy [link].
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">Limitation of liability</h2>
        <p className="mt-3">
          To the maximum extent permitted by law, IBS Clinic&apos;s liability is limited to the
          fees paid in the past 12 months for the specific service complained of.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-charcoal">Governing law</h2>
        <p className="mt-3">
          These terms are governed by the laws of India. Disputes are subject to the exclusive
          jurisdiction of the courts at Mumbai, Maharashtra.
        </p>

        <p className="mt-10 text-sm text-charcoal-soft">Last updated: 2026-05-10</p>
      </article>
    </main>
  );
}
