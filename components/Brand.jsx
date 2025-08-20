// components/Brand.jsx
export default function Brand({ size = "clamp(64px,7.2vw,116px)" }) {
  return (
    <svg
      viewBox="0 0 700 160"
      role="img"
      aria-label="GRINDFIT"
      style={{ height: size, display: "block" }}
    >
      <defs>
        {/* GrindFit gradient */}
        <linearGradient id="gf-word" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFA63D" />
          <stop offset="55%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#F25C05" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="120"
        fill="url(#gf-word)"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'"
        fontWeight="800"
        fontSize="120"
        letterSpacing="-0.02em"
      >
        GRINDFIT
      </text>
    </svg>
  );
}
