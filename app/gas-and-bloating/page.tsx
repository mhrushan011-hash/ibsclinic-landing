import { GutPage, gutMetadata } from "@/components/gut-page";
import { GAS_AND_BLOATING } from "@/lib/gut-pages/gas-and-bloating";

export const metadata = gutMetadata(GAS_AND_BLOATING);

export default function GasAndBloatingPage() {
  return <GutPage page={GAS_AND_BLOATING} />;
}
