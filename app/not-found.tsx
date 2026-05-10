import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — IBS Clinic",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white">
      <div className="container-page mx-auto max-w-prose py-24 text-center">
        <p className="text-sm font-medium text-green">404</p>
        <h1 className="mt-3 text-h1 text-charcoal">This page wandered off.</h1>
        <p className="mt-5 text-lead text-charcoal-soft">
          The link you followed isn&apos;t here — it may have moved or never existed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Take me home
          </Link>
          <a href="tel:+917500334343" className="btn-secondary">
            Call +91 750 033 4343
          </a>
        </div>
      </div>
    </main>
  );
}
