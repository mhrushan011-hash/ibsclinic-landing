import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import {
  faqNode,
  graph,
  webPageNode,
  type FaqItem,
  type JsonLdNode,
  type WebPageType,
} from "@/lib/structured-data";

interface PageSchemaProps {
  /** Current page path, e.g. "/about" */
  path: string;
  /** Page name for the WebPage node (usually the <title> without the brand) */
  name: string;
  description?: string;
  type?: WebPageType;
  /** Breadcrumb label for the current page. Trail is Home › (parents) › label. */
  crumb: string;
  /** Intermediate crumbs between Home and the current page. */
  parents?: ReadonlyArray<{ label: string; href: string }>;
  /** Visible FAQs on this page — emitted as FAQPage. */
  faqs?: ReadonlyArray<FaqItem>;
  about?: JsonLdNode;
  mainEntity?: JsonLdNode;
  /** Additional nodes for the page graph (ItemList, Person, …). */
  extra?: ReadonlyArray<JsonLdNode | null>;
}

/** Visible breadcrumb + the page's JSON-LD graph, in one drop-in component. */
export function PageSchema({
  path,
  name,
  description,
  type,
  crumb,
  parents = [],
  faqs = [],
  about,
  mainEntity,
  extra = [],
}: PageSchemaProps) {
  const schema = graph(
    webPageNode({ path, name, description, type, hasBreadcrumb: true, about, mainEntity }),
    faqNode(path, faqs),
    ...extra,
  );
  return (
    <>
      <Breadcrumb
        path={path}
        items={[{ label: "Home", href: "/" }, ...parents, { label: crumb }]}
      />
      <JsonLd data={schema} />
    </>
  );
}
