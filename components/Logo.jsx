// components/Logo.jsx
// GF monogram in a circular badge, using the GrindFit gradient.

export default function Logo({ size = 28, className = "", title = "GrindFit" }) {
  const s = Number(size);
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="gfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="var(--brand-start)" />
          <stop offset="45%" stopColor="var(--brand-mid)" />
          <stop offset="100%" stopColor="var(--brand-end)" />
        </linearGradient>
      </defs>

      <!-- Outer dark disc with subtle ring -->
      <circle cx="24" cy="24" r="22"
        fill="rgba(255,255,255,.04)"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="1.25"
      />

      <!-- GF monogram -->
      <g fill="url(#gfGrad)">
        <!-- G: circular arc + notch -->
        <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12c4.1 0 7.6-1.8 9.8-4.7l-3.5-2.3c-1.5 2.2-3.8 3.5-6.3 3.5-4.4 0-8-3.6-8-8s3.6-8 8-8c2.2 0 4.2.9 5.6 2.3H24v4h10v-1.2C34 15.7 29.5 12 24 12z"/>
        <!-- F: strong vertical + bars -->
        <path d="M33 15h-4.5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2H33v-4h-3v-4h3v-4h-3v-2H33v-4z"/>
      </g>
    </svg>
  );
}
