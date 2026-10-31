import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { getCombo } from "@/lib/products";
import { absUrl, graph, productNode, webPageNode } from "@/lib/structured-data";

interface ComboSchemaProps {
  slug: string;
}

/** Breadcrumb trail + WebPage/Product/Offer JSON-LD for a combo page. */
export function ComboSchema({ slug }: ComboSchemaProps) {
  const combo = getCombo(slug);
  const path = `/products/${combo.slug}`;
  const schema = graph(
    webPageNode({
      path,
      name: combo.name,
      description: combo.description,
      hasBreadcrumb: true,
      mainEntity: { "@id": `${absUrl(path)}#product` },
      primaryImage: combo.image,
    }),
    productNode({
      path,
      sku: combo.sku,
      name: combo.name,
      description: combo.description,
      image: combo.image,
      priceInr: combo.priceInr,
    }),
  );

  return (
    <>
      <Breadcrumb
        path={path}
        items={[
          { label: "Home", href: "/" },
          { label: "Combos", href: "/products" },
          { label: combo.crumb },
        ]}
      />
      <JsonLd data={schema} />
    </>
  );
}
