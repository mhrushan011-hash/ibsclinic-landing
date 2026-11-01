import { GutPage, gutMetadata } from "@/components/gut-page";
import { GASTROCOLIC_REFLEX } from "@/lib/gut-pages/gastrocolic-reflex-dysfunction";

export const metadata = gutMetadata(GASTROCOLIC_REFLEX);

export default function GastrocolicReflexPage() {
  return <GutPage page={GASTROCOLIC_REFLEX} />;
}
