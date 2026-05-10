/**
 * HeroIllustration — placeholder graphic for the hero block.
 *
 * Inline SVG composition in the updated brand palette (Fresh Growth green +
 * charcoal + soft green tint). When `public/hero/consult.jpg` is added,
 * swap this for a `next/image` with `priority`.
 */
export function HeroIllustration() {
  return (
    <svg
      role="img"
      aria-label="Calm, sun-lit consultation — illustration placeholder"
      viewBox="0 0 1200 675"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-auto w-full"
    >
      {/* Backdrop — soft green tint warming with a gentle highlight */}
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF5D8" />
        </linearGradient>
        <radialGradient id="sun" cx="0.85" cy="0.15" r="0.45">
          <stop offset="0%" stopColor="#81AF12" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#81AF12" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="675" fill="url(#bg)" />
      <rect width="1200" height="675" fill="url(#sun)" />

      {/* Plant in pot — left */}
      <g transform="translate(80,400)">
        <ellipse cx="60" cy="200" rx="60" ry="14" fill="#333" opacity="0.10" />
        <path d="M40 200 L80 200 L90 130 L30 130 Z" fill="#81AF12" />
        <path d="M30 130 L90 130 L93 122 L27 122 Z" fill="#729C10" />
        {/* Leaves */}
        <path d="M60 122 C 30 60 -10 50 0 0 C 30 30 70 60 60 122 Z" fill="#81AF12" />
        <path d="M60 122 C 90 60 130 50 120 0 C 90 30 50 60 60 122 Z" fill="#729C10" />
        <path
          d="M60 122 C 60 60 60 30 60 -20 C 70 30 70 60 60 122 Z"
          fill="#81AF12"
          opacity="0.85"
        />
      </g>

      {/* Sun-lit table — bottom-right */}
      <g transform="translate(580,360)">
        <rect x="0" y="120" width="540" height="14" rx="3" fill="#333" opacity="0.12" />
        <rect x="0" y="60" width="540" height="60" rx="6" fill="#fff" stroke="#E3E3E3" strokeWidth="1" />
        {/* Notebook */}
        <rect x="40" y="20" width="180" height="50" rx="6" fill="#fff" stroke="#E3E3E3" strokeWidth="2" />
        <line x1="60" y1="36" x2="200" y2="36" stroke="#E3E3E3" strokeWidth="2" />
        <line x1="60" y1="48" x2="180" y2="48" stroke="#E3E3E3" strokeWidth="2" />
        <line x1="60" y1="60" x2="160" y2="60" stroke="#E3E3E3" strokeWidth="2" />
        {/* Mug */}
        <g transform="translate(280,15)">
          <path
            d="M0 10 L70 10 L65 60 C 65 70 55 75 35 75 C 15 75 5 70 5 60 Z"
            fill="#81AF12"
          />
          <path
            d="M70 20 C 90 22 95 50 70 55"
            fill="none"
            stroke="#81AF12"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M20 -2 C 22 -10 28 -10 30 -2"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
            fill="none"
          />
          <path
            d="M40 -2 C 42 -12 48 -12 50 -2"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
            fill="none"
          />
        </g>
        {/* Glass of water */}
        <g transform="translate(420,18)">
          <path
            d="M0 0 L60 0 L55 65 C 55 72 50 75 30 75 C 10 75 5 72 5 65 Z"
            fill="#81AF12"
            opacity="0.12"
            stroke="#81AF12"
            strokeWidth="2"
          />
          <ellipse cx="30" cy="0" rx="30" ry="4" fill="#81AF12" opacity="0.4" />
        </g>
      </g>

      {/* Two simple silhouettes — patient + doctor mid-consult */}
      <g transform="translate(220,200)">
        {/* Patient */}
        <circle cx="120" cy="60" r="50" fill="#555" />
        <path
          d="M40 220 C 40 150 80 120 120 120 C 160 120 200 150 200 220 Z"
          fill="#555"
        />

        {/* Doctor */}
        <circle cx="320" cy="50" r="48" fill="#81AF12" />
        <path
          d="M240 220 C 240 145 280 110 320 110 C 360 110 400 145 400 220 Z"
          fill="#81AF12"
        />
        {/* Stethoscope-like loop */}
        <path
          d="M290 130 C 280 160 290 180 320 180 C 350 180 360 160 350 130"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Floating dot accents */}
      <circle cx="120" cy="120" r="6" fill="#81AF12" opacity="0.5" />
      <circle cx="1080" cy="180" r="10" fill="#81AF12" opacity="0.35" />
      <circle cx="980" cy="80" r="4" fill="#333" opacity="0.4" />

      {/* Caption ribbon */}
      <g transform="translate(80,80)">
        <rect width="280" height="40" rx="20" fill="#fff" stroke="#E3E3E3" strokeWidth="1" />
        <text
          x="20"
          y="26"
          fontFamily="Montserrat, system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#333"
        >
          A real consult, not a sales pitch.
        </text>
      </g>
    </svg>
  );
}
