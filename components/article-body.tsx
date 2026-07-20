import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

interface FigureDimensions {
  width: number;
  height: number;
}

/**
 * Intrinsic dimensions for figures referenced from post Markdown. Supplying the
 * real numbers lets next/image reserve the correct box, so an infographic never
 * shifts the layout while it loads. Add an entry whenever a new figure lands in
 * /public — the fallback below only keeps things from breaking.
 *
 * Figures live in `public/figures/`, NOT `public/blog/`: next.config.ts carries
 * a legacy `/blog/:path*` → `/blogs/:path*` redirect, so anything served from
 * `/blog/` 308s away and 404s.
 */
const FIGURE_DIMENSIONS: Readonly<Record<string, FigureDimensions>> = {
  "/figures/digestive-journey.png": { width: 1536, height: 1024 },
};

const FALLBACK_DIMENSIONS: FigureDimensions = { width: 1200, height: 800 };

/**
 * Markdown images render inside a block-level <span>, not a <figure>:
 * react-markdown wraps a lone image in a <p>, and a block element inside a <p>
 * is invalid HTML that React reports as a hydration mismatch. The Markdown
 * title — `![alt](/src "caption")` — becomes the caption line.
 */
const MARKDOWN_COMPONENTS: Components = {
  img({ src, alt, title }) {
    if (typeof src !== "string" || src.length === 0) return null;

    const { width, height } = FIGURE_DIMENSIONS[src] ?? FALLBACK_DIMENSIONS;

    return (
      <span className="not-prose my-8 block">
        <Image
          src={src}
          alt={alt ?? ""}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 720px"
          className="h-auto w-full rounded-[16px] border border-gray-border"
        />
        {title ? (
          <span className="mt-3 block text-center text-sm text-charcoal-soft">
            {title}
          </span>
        ) : null}
      </span>
    );
  },
};

interface ArticleBodyProps {
  markdown: string;
}

/**
 * Renders a blog post's Markdown body with brand-themed typography.
 * Server component — react-markdown renders fine during static generation.
 */
export function ArticleBody({ markdown }: ArticleBodyProps) {
  return (
    <div
      className={[
        "prose prose-lg max-w-none",
        "prose-headings:font-heading prose-headings:text-charcoal",
        "prose-h2:text-[1.6rem] prose-h2:mt-12 prose-h2:mb-4",
        "prose-h3:text-xl prose-h3:mt-8",
        "prose-p:text-charcoal-soft prose-li:text-charcoal-soft",
        "prose-strong:text-charcoal prose-strong:font-semibold",
        "prose-a:text-green hover:prose-a:text-green-dark",
        "prose-table:text-sm prose-th:text-charcoal",
        "prose-blockquote:border-green prose-blockquote:text-charcoal-soft",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
