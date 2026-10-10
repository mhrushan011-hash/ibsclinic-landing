import { GutPage, gutMetadata } from "@/components/gut-page";
import { LAXATIVE_DEPENDENCY } from "@/lib/gut-pages/laxative-dependency";

export const metadata = gutMetadata(LAXATIVE_DEPENDENCY);

export default function LaxativeDependencyPage() {
  return <GutPage page={LAXATIVE_DEPENDENCY} />;
}
