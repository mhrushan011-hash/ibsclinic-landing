import { GutPage, gutMetadata } from "@/components/gut-page";
import { PELVIC_FLOOR } from "@/lib/gut-pages/pelvic-floor-dysfunction";

export const metadata = gutMetadata(PELVIC_FLOOR);

export default function PelvicFloorDysfunctionPage() {
  return <GutPage page={PELVIC_FLOOR} />;
}
