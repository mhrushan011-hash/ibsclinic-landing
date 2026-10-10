/** Data shapes for the "gut mechanics" pages. Content lives in sibling files, markup in components/gut-page.tsx. */
import type { RefId } from "./references";
import type { GutSlug } from "../gut-topics";

export interface ImageSlot {
  /** Planned file under public/gut-health/. */
  file: string;
  alt: string;
  aspect: "16 / 9" | "4 / 3" | "1 / 1" | "3 / 2";
  /** Brief for whoever generates the image (exported to New Pages/image-prompts.md). */
  prompt: string;
  /** Set once the real image is in public/. Until then a soft placeholder renders. */
  src?: string;
}

export interface Step {
  title: string;
  body: string;
}

export type Block =
  | { kind: "prose"; id: string; title: string; paras: ReadonlyArray<string>; image?: ImageSlot }
  | {
      kind: "steps";
      id: string;
      title: string;
      intro?: string;
      steps: ReadonlyArray<Step>;
      /** Adds a closing "and it starts again" row. */
      loop?: string;
      note?: string;
    }
  | { kind: "list"; id: string; title: string; intro?: string; items: ReadonlyArray<string>; outro?: string }
  | {
      kind: "versus";
      id: string;
      title: string;
      intro?: string;
      left: { title: string; items: ReadonlyArray<string> };
      right: { title: string; items: ReadonlyArray<string> };
      outro?: string;
    }
  | { kind: "note"; id: string; title: string; body: string; tone: "info" | "care" };

export interface Faq {
  q: string;
  a: string;
  hi?: boolean;
}

export interface GutPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  hinglish?: string;
  hero: ImageSlot;
  summary: ReadonlyArray<string>;
  blocks: ReadonlyArray<Block>;
  faq: ReadonlyArray<Faq>;
  refs: ReadonlyArray<RefId>;
  /** Other gut pages, shown as "read next". */
  next: ReadonlyArray<GutSlug>;
  updated: string;
}
