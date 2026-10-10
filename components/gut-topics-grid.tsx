import Link from "next/link";
import { GUT_TOPICS } from "@/lib/gut-topics";

interface GutTopicsGridProps {
  /** Slugs to leave out, e.g. the page the grid sits on. */
  exclude?: ReadonlyArray<string>;
  /** Only these slugs, in this order. */
  only?: ReadonlyArray<string>;
}

export function GutTopicsGrid({ exclude = [], only }: GutTopicsGridProps) {
  const topics = only
    ? only.flatMap((slug) => GUT_TOPICS.filter((t) => t.slug === slug))
    : GUT_TOPICS.filter((t) => !exclude.includes(t.slug));

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((t) => (
        <li key={t.slug}>
          <Link href={t.href} className="gut-card">
            <span className="gut-card__title">{t.title}</span>
            <span className="gut-card__blurb">{t.blurb}</span>
            <span className="gut-card__go" aria-hidden="true">
              Read more &rarr;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
