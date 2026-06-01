import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Return & Refund Policy — IBS Clinic",
  description:
    "Return, refund, and cancellation policy for IBS Clinic consultations and Ayurvedic product orders.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/return-policy" },
};

export default function ReturnPolicyPage() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        <article className="container-page mx-auto max-w-prose py-16 leading-relaxed">
          <h1 className="text-h2 text-charcoal">Return &amp; Refund Policy</h1>
          <p className="mt-2 text-sm text-charcoal-soft">
            Draft — pending final review by legal counsel before publishing.
            Last updated: 2026-05-18.
          </p>

          <p className="mt-6">
            We want every IBS Clinic patient to feel confident booking a
            consultation or ordering our Ayurvedic powders. This policy covers
            how returns, refunds, and cancellations are handled. By placing an
            order or booking a consultation you accept these terms alongside our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
            .
          </p>

          <h2 className="mt-10 font-heading text-h3 text-charcoal">
            1. Consultations
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <b>Free evaluation calls</b> are non-paid and require no refund.
            </li>
            <li>
              <b>Paid consultations</b> are non-refundable once the doctor has
              reviewed your case file and the appointment has been conducted.
            </li>
            <li>
              <b>Reschedule</b> with at least 24 hours&apos; notice — no charge.
              Reschedules with less than 24 hours&apos; notice may incur a 50%
              fee.
            </li>
            <li>
              <b>If we cancel</b> for any reason, you will receive a full refund
              or a free reschedule at your option.
            </li>
          </ul>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            2. Product orders (Ayurvedic powders)
          </h2>
          <p className="mt-3">
            Our IBS-M, IBS-C, IBS-D, IBS-D Chronic, and IBS Diapro / Diglac Plus
            powders are AYUSH-regulated Ayurvedic preparations. For your safety
            and regulatory compliance:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <b>Unopened, sealed packs</b> can be returned within{" "}
              <b>7 days</b> of delivery for a full refund of the product value
              (shipping non-refundable).
            </li>
            <li>
              <b>Opened or used product</b> cannot be returned — once a sealed
              pack is opened it is considered consumed for hygiene and safety
              reasons (FSSAI / AYUSH guidance for ingestible preparations).
            </li>
            <li>
              All return shipments must be initiated by contacting us first; we
              will arrange a reverse pickup where serviceable.
            </li>
          </ul>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            3. Damaged or wrong-item deliveries
          </h2>
          <p className="mt-3">
            If your order arrives damaged or you receive the wrong product,
            write to us within <b>48 hours</b> of delivery at{" "}
            <a href="mailto:info@ibsclinic.com" className="underline">
              info@ibsclinic.com
            </a>{" "}
            with photos of the package and product. We will dispatch a free
            replacement or refund the order in full.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            4. Refund timeline
          </h2>
          <p className="mt-3">
            Approved refunds are processed back to the original payment method
            within <b>7–10 business days</b>. Bank settlement times may add a
            further 3–5 days depending on your card issuer or UPI provider.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            5. How to request a return or refund
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              Email{" "}
              <a href="mailto:info@ibsclinic.com" className="underline">
                info@ibsclinic.com
              </a>{" "}
              with your order ID, the reason, and (if applicable) photos of the
              product.
            </li>
            <li>
              Or call{" "}
              <a href="tel:+917500334343" className="underline">
                +91 750 033 4343
              </a>{" "}
              between Mon–Sat 9 AM – 8 PM IST.
            </li>
            <li>
              Our patient-support team will confirm eligibility and share the
              return instructions within 1 working day.
            </li>
          </ol>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            6. Exceptions
          </h2>
          <p className="mt-3">
            We reserve the right to refuse refunds or returns where the request
            is clearly outside this policy, where fraudulent activity is
            suspected, or where regulatory rules prohibit it.
          </p>

          <h2 className="mt-8 font-heading text-h3 text-charcoal">
            7. Contact
          </h2>
          <p className="mt-3">
            For any policy questions, write to{" "}
            <a href="mailto:info@ibsclinic.com" className="underline">
              info@ibsclinic.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917500334343" className="underline">
              +91 750 033 4343
            </a>
            .
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
