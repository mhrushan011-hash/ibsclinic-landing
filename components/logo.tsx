import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * IBS Clinic logo. Sourced from `public/logo.png` — the wordmark with the
 * green leaf icon and charcoal/green type. Re-export this component anywhere
 * the brand mark is needed; tune `height` per surface (32 in header, 40 in
 * legal pages, etc.).
 *
 * The PNG is intentionally lightweight (~2KB). For high-DPR displays the
 * intrinsic resolution carries; if a sharper artwork lands, just overwrite
 * `public/logo.png` (same path) and Vercel will serve it at next deploy.
 */
export interface LogoProps {
  className?: string;
  /** Rendered height in pixels. Width auto-scales to preserve aspect ratio. */
  height?: number;
  /** Used as the alt text and aria-label fallback. */
  title?: string;
}

const INTRINSIC_WIDTH = 480;
const INTRINSIC_HEIGHT = 96;

export function Logo({
  className,
  height = 32,
  title = "IBS Clinic",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={title}
      width={INTRINSIC_WIDTH}
      height={INTRINSIC_HEIGHT}
      priority
      sizes={`${height * (INTRINSIC_WIDTH / INTRINSIC_HEIGHT)}px`}
      className={cn("block h-auto w-auto select-none", className)}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
