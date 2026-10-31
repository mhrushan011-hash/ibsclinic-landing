import type { JsonLdNode } from "@/lib/structured-data";

interface JsonLdProps {
  data: JsonLdNode;
}

/**
 * Server-rendered JSON-LD. `<` is escaped so a string containing "</script>"
 * can never break out of the tag.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
