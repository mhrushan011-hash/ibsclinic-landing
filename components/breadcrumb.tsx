import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: ReadonlyArray<Crumb>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-border bg-white">
      <div className="container-page py-3 text-sm text-charcoal-soft">
        {items.map((c, i) => (
          <span key={`${c.label}-${i}`}>
            {i > 0 && (
              <span className="mx-2 opacity-50" aria-hidden="true">
                ›
              </span>
            )}
            {c.href ? (
              <Link href={c.href} className="no-underline hover:text-green">
                {c.label}
              </Link>
            ) : (
              <span className="text-charcoal">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
