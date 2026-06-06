import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
