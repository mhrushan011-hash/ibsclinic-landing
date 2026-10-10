import { GutPage, gutMetadata } from "@/components/gut-page";
import { TOILET_POSTURE } from "@/lib/gut-pages/toilet-posture-for-constipation";

export const metadata = gutMetadata(TOILET_POSTURE);

export default function ToiletPosturePage() {
  return <GutPage page={TOILET_POSTURE} />;
}
