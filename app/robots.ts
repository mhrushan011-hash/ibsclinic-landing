import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsclinic.com";

const DISALLOW: ReadonlyArray<string> = ["/api/", "/thanks/"];

/**
 * AI search / answer-engine crawlers we explicitly welcome, so the clinic can
 * be cited in ChatGPT search, Perplexity, Claude, Gemini and Apple
 * Intelligence answers. A crawler that matches a named group ignores the `*`
 * group, so this group repeats the same disallow list.
 */
const AI_CRAWLERS: ReadonlyArray<string> = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: [...DISALLOW] },
      { userAgent: [...AI_CRAWLERS], allow: "/", disallow: [...DISALLOW] },
    ],
    // No `host`: Google ignores the Host directive and GSC flags it as an
    // unsupported rule. The www -> apex redirect is handled in Vercel.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
