import Link from "next/link";
import { Logo } from "@/components/logo";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-border bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="IBS Clinic — home">
          <Logo height={32} />
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="tel:+917500334343"
            className="hidden text-sm text-charcoal-soft hover:text-green sm:block"
          >
            +91 750 033 4343
          </a>
          <Link href="/" className="btn-primary text-sm">
            Book Free Evaluation
          </Link>
        </div>
      </div>
    </header>
  );
}
