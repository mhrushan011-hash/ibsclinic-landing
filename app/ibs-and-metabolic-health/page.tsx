import { GutPage, gutMetadata } from "@/components/gut-page";
import { METABOLIC_HEALTH } from "@/lib/gut-pages/ibs-and-metabolic-health";

export const metadata = gutMetadata(METABOLIC_HEALTH);

export default function MetabolicHealthPage() {
  return <GutPage page={METABOLIC_HEALTH} />;
}
