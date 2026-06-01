"use client";

import Image from "next/image";
import { useRef } from "react";

interface SymptomsCarouselProps {
  symptoms: ReadonlyArray<string>;
}

interface SymptomImage {
  src: string;
  alt: string;
}

const IMAGES: ReadonlyArray<SymptomImage> = [
  { src: "/symptoms/bloating-that-worsens-through-the-day.png", alt: "Bloating that worsens through the day" },
  { src: "/symptoms/cramping-after-meals.png", alt: "Cramping after meals" },
  { src: "/symptoms/diarrhoea-sometimes-urgent.png", alt: "Diarrhoea — sometimes urgent" },
  { src: "/symptoms/constipation-that-wont-budge.png", alt: "Constipation that won't budge" },
  { src: "/symptoms/alternating-between-the-two.png", alt: "Alternating between the two" },
  { src: "/symptoms/mucus-in-stool.png", alt: "Mucus in stool" },
  { src: "/symptoms/gas-and-audible-rumbling.png", alt: "Gas and audible rumbling" },
  { src: "/symptoms/heartburn-or-reflux.png", alt: "Heartburn or reflux" },
  { src: "/symptoms/loss-of-appetite-or-fullness-fast.png", alt: "Loss of appetite or fullness fast" },
  { src: "/symptoms/fatigue-and-brain-fog.png", alt: "Fatigue and brain fog" },
  { src: "/symptoms/anxiety-around-food-and-travel.png", alt: "Anxiety around food and travel" },
  { src: "/symptoms/sleep-disturbed-by-gut-issues.png", alt: "Sleep disturbed by gut issues" },
];

export function SymptomsCarousel({ symptoms }: SymptomsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1): void => {
    if (!scrollerRef.current) return;
    const width = scrollerRef.current.clientWidth;
    scrollerRef.current.scrollBy({ left: direction * width * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-border bg-white text-xl text-charcoal shadow-card transition hover:bg-green hover:text-white md:flex"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-border bg-white text-xl text-charcoal shadow-card transition hover:bg-green hover:text-white md:flex"
      >
        →
      </button>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {symptoms.map((symptom, i) => {
          const image = IMAGES[i];
          return (
            <article
              key={symptom}
              className="flex w-[170px] shrink-0 snap-start flex-col items-center rounded-[16px] border border-gray-border bg-white p-2 text-center md:w-[200px]"
            >
              <div className="relative aspect-[3/4] w-36 md:w-44">
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="rounded-[12px] object-cover"
                  />
                )}
              </div>
              <p className="mt-2 px-2 pb-2 text-sm font-medium text-charcoal">{symptom}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
