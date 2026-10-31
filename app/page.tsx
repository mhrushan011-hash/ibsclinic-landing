import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { HOME_FAQ } from "@/lib/home-faq";
import { faqNode, graph, ORG_ID, webPageNode } from "@/lib/structured-data";

// Server wrapper: the homepage body is a client component (modal state), which
// cannot export metadata. The canonical lives here, not in the root layout, so
// no other route can inherit it. The FAQ schema is emitted here too, so it is
// in the server HTML (it used to be injected client-side by next/script).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const HOME_SCHEMA = graph(
  webPageNode({
    path: "/",
    name: "IBS Clinic — Specialist IBS Treatment",
    description:
      "Specialist IBS care combining personalised Ayurveda, diet and modern testing. In-person clinic in Mumbai and online consultations across India.",
    about: { "@id": ORG_ID },
    primaryImage: "/hero.png",
  }),
  faqNode("/", HOME_FAQ),
);

export default function Page() {
  return (
    <>
      <JsonLd data={HOME_SCHEMA} />
      <HomePage />
    </>
  );
}
