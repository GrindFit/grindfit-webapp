// components/Brand.jsx
export default function Brand({ size = "clamp(64px,7vw,120px)", className = "" }) {
  // Presets (px) — go bigger than before
  const presets = {
    xs: 28, sm: 32, md: 36, lg: 40,
    xl: 48, "2xl": 56, "3xl": 64, "4xl": 72,
    "5xl": 80, "6xl": 96, "7xl": 112, "8xl": 128
  };

  // Allow tokens (e.g. "7xl"), numbers (e.g. 120), or full CSS (e.g. "clamp(...)")
  let heightCss;
  if (typeof size === "number") {
    heightCss = `${size}px`;
  } else if (typeof size === "string" && /px|rem|vw|vh|%|clamp\(/.test(size)) {
    heightCss = size; // raw CSS like "clamp(64px,7vw,120px)"
  } else {
    heightCss = `${presets[size] ?? presets.xl}px`;
  }

  return (
    <svg
      role="img"
      aria-label="GRINDFIT"
      viewBox="0 0 900 180"
      style={{ height: heightCss }}
      className={`block shrink-0 ${className}`}
    >
      <defs>
        <linearGradient id="gf-wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--gf-amber)" />
          <stop offset="55%"  stopColor="var(--gf-orange)" />
          <stop offset="100%" stopColor="var(--gf-vermillion)" />
        </linearGradient>
      </defs>

      <g fill="url(#gf-wordmark)">
        <text
          x="0"
          y="130"
          fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
          fontWeight="900"
          letterSpacing="-0.02em"
          fontSize="150"
        >
          GRINDFIT
        </text>
      </g>
    </svg>
  );
}
