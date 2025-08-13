// components/Brand.jsx
export default function Brand({ size = "xl", className = "" }) {
  // visual size map → ~height in px
  const SIZES = { sm: 32, md: 40, lg: 48, xl: 56, "2xl": 64 };
  const h = SIZES[size] ?? 56;

  return (
    <svg
      role="img"
      aria-label="GRINDFIT"
      width="auto"
      height={h}
      viewBox="0 0 700 100"
      className={`block select-none ${className}`}
      style={{ display: "block" }}
    >
      <defs>
        {/* Exact GrindFit gradient (left → right) */}
        <linearGradient id="gf-wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--gf-amber)" />
          <stop offset="55%"  stopColor="var(--gf-orange)" />
          <stop offset="100%" stopColor="var(--gf-vermillion)" />
        </linearGradient>
      </defs>

      {/* Tighten letter spacing; heavy weight; no blend tricks */}
      <text
        x="0"
        y="78"                         // baseline fit to viewBox
        fill="url(#gf-wordmark)"
        style={{
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.02em"     // tighter tracking
        }}
      >
        GRINDFIT
      </text>
    </svg>
  );
}
