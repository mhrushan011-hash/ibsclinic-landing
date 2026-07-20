import type { BlogPost } from "./types";
import { post as post_what_is_ibs } from "./posts/what-is-ibs";
import { post as post_types_of_ibs } from "./posts/types-of-ibs";
import { post as post_ibs_symptoms } from "./posts/ibs-symptoms";
import { post as post_medicine_for_ibs } from "./posts/medicine-for-ibs";
import { post as post_ibs_treatment_guide } from "./posts/ibs-treatment-guide";
import { post as post_ibd_vs_ibs } from "./posts/ibd-vs-ibs";
import { post as post_ibs_ayurvedic_treatment } from "./posts/ibs-ayurvedic-treatment";
import { post as post_ibs_home_remedies } from "./posts/ibs-home-remedies";
import { post as post_ibs_diet_plan } from "./posts/ibs-diet-plan";
import { post as post_worst_foods_for_ibs } from "./posts/worst-foods-for-ibs";
import { post as post_process_of_digestion } from "./posts/process-of-digestion";

export type { BlogPost, BlogFaq } from "./types";

const ALL_POSTS: ReadonlyArray<BlogPost> = [
  post_what_is_ibs,
  post_types_of_ibs,
  post_ibs_symptoms,
  post_medicine_for_ibs,
  post_ibs_treatment_guide,
  post_ibd_vs_ibs,
  post_ibs_ayurvedic_treatment,
  post_ibs_home_remedies,
  post_ibs_diet_plan,
  post_worst_foods_for_ibs,
  post_process_of_digestion,
];

export const BLOG_POSTS: Readonly<Record<string, BlogPost>> = Object.fromEntries(
  ALL_POSTS.map((p) => [p.slug, p]),
);

export const BLOG_SLUGS: ReadonlyArray<string> = ALL_POSTS.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS[slug];
}

export function getAllPosts(): ReadonlyArray<BlogPost> {
  return [...ALL_POSTS].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
}

export function getPostsByAuthor(authorSlug: string): ReadonlyArray<BlogPost> {
  return getAllPosts().filter((p) => p.authorSlug === authorSlug);
}

export function getRelatedPosts(slug: string, count: number): ReadonlyArray<BlogPost> {
  const current = BLOG_POSTS[slug];
  const others = getAllPosts().filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function readingTimeMins(post: BlogPost): number {
  const words = post.bodyMarkdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
