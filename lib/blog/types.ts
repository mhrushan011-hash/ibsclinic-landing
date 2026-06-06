export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  /** URL slug under /blogs/ */
  slug: string;
  /** H1 / display title */
  title: string;
  /** <title> tag */
  metaTitle: string;
  metaDescription: string;
  /** Short summary for listing cards (<=160 chars) */
  excerpt: string;
  /** Author slug — must exist in lib/doctors.ts AUTHOR_SLUGS */
  authorSlug: string;
  /** Display category, e.g. "IBS Basics", "Diet", "Ayurveda", "Treatment" */
  category: string;
  /** ISO date (YYYY-MM-DD) */
  datePublished: string;
  dateModified?: string;
  /** Optional FAQ block rendered as an accordion + FAQPage JSON-LD */
  faq?: ReadonlyArray<BlogFaq>;
  /** Article body as Markdown (rendered via components/article-body.tsx) */
  bodyMarkdown: string;
}
