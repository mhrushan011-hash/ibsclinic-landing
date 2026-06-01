import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service — IBS Clinic",
  description:
    "Terms and conditions governing the use of IBS Clinic consultation, treatment, and product services in India.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        <article className="container-page mx-auto max-w-prose py-16 leading-relaxed">
          <h1 className="text-h2 text-charcoal">Terms of Service</h1>
          <p className="mt-2 text-sm text-charcoal-soft">
            Draft — pending final review by legal counsel before publishing.
            Last updated: 2026-05-18.
          </p>

          <h2 className="mt-10 font-heading text-h3 text-charcoal">
            1. Acceptance of terms
          </h2>
          <p className="mt-3">
            By accessing or using consultation.ibsclinic.com (the
            &ldquo;Service&rdquo;) you agree to be bound by these Terms of
            Service. If you do not agree, please do not use the Service.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            2. Scope of services
          </h2>
          <p className="mt-3">
            IBS Clinic provides specialist Ayurveda-led evaluation, treatment
            plans, and Ayurvedic powder products for Irritable Bowel Syndrome
            (IBS) and related functional gut disorders. We do not provide
            emergency care, surgical intervention, or treatment for non-gut
            conditions. If you are experiencing a medical emergency, call your
            local emergency number immediately.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            3. Telemedicine
          </h2>
          <p className="mt-3">
            Online consultations are conducted under the Indian Telemedicine
            Practice Guidelines 2020. Identity verification and informed
            consent are obtained at each consultation. You are responsible for
            providing accurate medical history; outcomes depend on the
            information you share with the doctor.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            4. Products & dietary supplements
          </h2>
          <p className="mt-3">
            Our Ayurvedic powders (IBS-M, IBS-C, IBS-D, IBS-D Chronic, and
            IBS Diapro / Diglac Plus combinations) are AYUSH-compliant dietary
            and Ayurvedic preparations. They are intended for use as part of a
            doctor-supervised treatment plan and are not a substitute for
            professional medical advice.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            5. Outcomes & no guarantees
          </h2>
          <p className="mt-3">
            Results depend on adherence and individual factors. Published
            outcome ranges (80–90% symptom reduction in completers; visible
            improvement typically within ~90 days; 70%+ patients symptom-free at
            completion) are based on internal patient outcomes data and are not
            absolute guarantees of any specific outcome for any specific
            patient.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            6. Payments, refunds & cancellations
          </h2>
          <p className="mt-3">
            All consultation fees and product purchases are processed in INR.
            Refund and return eligibility is governed by our{" "}
            <Link href="/return-policy" className="underline">
              Return &amp; Refund Policy
            </Link>
            . Please review it before purchase.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            7. Acceptable use
          </h2>
          <p className="mt-3">
            You agree not to misuse the Service, including but not limited to:
            attempting to access another patient&apos;s information, uploading
            malicious code, or impersonating a medical professional.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            8. Intellectual property
          </h2>
          <p className="mt-3">
            All content on this Service — including text, treatment protocols,
            graphics, and brand marks — is the property of IBS Clinic or its
            licensors and is protected by Indian copyright and trademark law.
            You may not reproduce or redistribute content without written
            permission.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            9. Limitation of liability
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by law, IBS Clinic&apos;s aggregate
            liability for any claim arising out of or relating to the Service is
            limited to the fees paid by you in the 12 months preceding the
            event giving rise to the claim for the specific service complained
            of.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            10. Governing law &amp; jurisdiction
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of India. Any dispute arising
            out of or in connection with these terms shall be subject to the
            exclusive jurisdiction of the courts at Mumbai, Maharashtra.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            11. Contact
          </h2>
          <p className="mt-3">
            For questions about these terms, write to{" "}
            <a href="mailto:info@ibsclinic.com" className="underline">
              info@ibsclinic.com
            </a>{" "}
            or call <a href="tel:+917500334343" className="underline">+91 750 033 4343</a>.
          </p>

          <p className="mt-10 text-sm text-charcoal-soft">
            Last updated: 2026-05-18
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
