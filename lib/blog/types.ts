export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogImage {
  /** Path under /public, e.g. "/figures/types-of-ibs/types-of-ibs-c-d-m-u.webp" */
  src: string;
  alt: string;
  /** Intrinsic pixel size — lets next/image reserve the box (no layout shift). */
  width: number;
  height: number;
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
  /** ISO date (YYYY-MM-DD) — the ORIGINAL publish date; never move it forward. */
  datePublished: string;
  /** ISO date of the last meaningful content change. */
  dateModified?: string;
  /** Featured image: shown under the H1, used for og:image and BlogPosting.image. */
  heroImage?: BlogImage;
  /**
   * Doctor who medically reviewed the post (slug in lib/doctors.ts). Only set
   * this once that doctor has actually reviewed the content — it renders a
   * public "Medically reviewed by" claim.
   */
  reviewerSlug?: string;
  /** Optional FAQ block rendered as an accordion + FAQPage JSON-LD */
  faq?: ReadonlyArray<BlogFaq>;
  /** Article body as Markdown (rendered via components/article-body.tsx) */
  bodyMarkdown: string;
}
