import { GutPage, gutMetadata } from "@/components/gut-page";
import { IBS_DIET } from "@/lib/gut-pages/ibs-diet";

export const metadata = gutMetadata(IBS_DIET);

export default function IbsDietPage() {
  return <GutPage page={IBS_DIET} />;
}
