import Image from "next/image";
import type { ImageSlot as ImageSlotData } from "@/lib/gut-pages/types";

interface ImageSlotProps {
  slot: ImageSlotData;
  priority?: boolean;
  sizes?: string;
}

const isProd = process.env.NODE_ENV === "production";

/** Real image once `slot.src` is set; until then a soft, on-brand panel. The alt text shows as a caption in dev only. */
export function ImageSlot({ slot, priority = false, sizes = "(min-width: 1024px) 560px, 100vw" }: ImageSlotProps) {
  return (
    <figure
      className={slot.src ? "image-slot image-slot--filled" : "image-slot"}
      style={{ aspectRatio: slot.aspect }}
      data-file={slot.file}
    >
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <figcaption className="image-slot__caption" aria-hidden={isProd}>
          {isProd ? "" : slot.alt}
        </figcaption>
      )}
    </figure>
  );
}
