export default function Brand({ size = "clamp(64px,7.2vw,116px)", className = "" }) {
  return (
    <span
      className={`inline-block align-middle leading-none select-none ${className}`}
      style={{ height: size }}
      aria-label="GrindFit"
      title="GrindFit"
    >
      <svg viewBox="0 0 900 160" width="auto" height="100%">
        <defs>
          <linearGradient id="gf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB14A" />
            <stop offset="55%" stopColor="#FF7A1A" />
            <stop offset="100%" stopColor="#FF4D00" />
          </linearGradient>
        </defs>
        <text
          x="0" y="120"
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans'"
          fontWeight="900"
          fontSize="120"
          letterSpacing="-0.02em"
          fill="url(#gf-grad)"
        >
          GRINDFIT
        </text>
      </svg>
    </span>
  );
}
