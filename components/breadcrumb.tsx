import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbNode, graph, type Crumb } from "@/lib/structured-data";

export type { Crumb } from "@/lib/structured-data";

interface BreadcrumbProps {
  /** Path of the current page, e.g. "/blogs/types-of-ibs" — used for the schema URLs. */
  path: string;
  /** Trail from Home to the current page. Every crumb except the last needs an href. */
  items: ReadonlyArray<Crumb>;
}

/**
 * Visible breadcrumb trail AND its BreadcrumbList JSON-LD, generated from the
 * same items so the two can never drift apart.
 */
export function Breadcrumb({ path, items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb border-b border-gray-border bg-white">
      <JsonLd data={graph(breadcrumbNode(path, items))} />
      <ol className="breadcrumb__list container-page flex flex-wrap items-center py-3 text-sm text-charcoal-soft">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="breadcrumb__item flex items-center">
            {i > 0 && (
              <span className="breadcrumb__sep mx-2 opacity-50" aria-hidden="true">
                ›
              </span>
            )}
            {c.href ? (
              <Link href={c.href} className="breadcrumb__link no-underline hover:text-green">
                {c.label}
              </Link>
            ) : (
              <span className="breadcrumb__current text-charcoal" aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
