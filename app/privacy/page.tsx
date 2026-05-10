import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — IBS Clinic",
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-linen">
      <article className="container-page mx-auto max-w-prose py-16 leading-relaxed">
        <h1 className="text-h2 text-sage-dark">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate/60">
          Placeholder draft — review by legal counsel before publishing. Built to align with
          India&apos;s Digital Personal Data Protection (DPDP) Act 2023.
        </p>

        <h2 className="mt-10 font-heading text-h3 text-sage-dark">What we collect</h2>
        <p className="mt-3">
          When you fill out the evaluation form, we collect: full name, phone number, city,
          preferred call time, and an optional brief description of your concern. We also collect
          basic technical data (IP address, device type, pages visited) via Google Analytics and
          Google Tag Manager.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Why we collect it</h2>
        <p className="mt-3">
          To call you back, evaluate your case medically, and (if you enrol) follow up on your
          treatment. Lawful basis: explicit consent given at the form.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Who sees your data</h2>
        <p className="mt-3">
          The IBS Clinic medical team and named admins. Processors used: Resend (email),
          Vercel (hosting), Google Sheets (backup log), Google Workspace (clinic email).
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">How long we keep it</h2>
        <p className="mt-3">
          Until you withdraw consent, or 5 years — whichever is sooner.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Your rights</h2>
        <p className="mt-3">
          Access, correction, erasure, and withdrawal of consent at any time. Contact our
          Grievance Officer to exercise these rights.
        </p>

        <h2 className="mt-8 font-heading text-h3 text-sage-dark">Grievance Officer</h2>
        <p className="mt-3">
          [Name] · grievance@ibsclinic.com · +91 750 033 4343
        </p>

        <p className="mt-10 text-sm text-slate/60">Last updated: 2026-05-10</p>
      </article>
    </main>
  );
}
