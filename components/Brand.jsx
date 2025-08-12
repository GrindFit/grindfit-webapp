// /components/Brand.jsx
export default function Brand({ showWord = true, className = "" }) {
  return (
    <span
      aria-label="GrindFit"
      title="GrindFit"
      className={`inline-flex items-center gap-2 select-none ${className}`}
    >
      {/* GF badge */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        role="img"
        aria-label="GF"
      >
        <defs>
          <linearGradient id="gfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-start)" />
            <stop offset="42%" stopColor="var(--brand-mid)" />
            <stop offset="100%" stopColor="var(--brand-end)" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="8"
          fill="rgba(255,255,255,0.03)"
          stroke="url(#gfGrad)"
          strokeWidth="1.5"
        />
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          fontFamily="Manrope, system-ui, -apple-system, Segoe UI, Roboto, Arial"
          fontWeight="800"
          fontSize="13"
          letterSpacing="0.6"
          fill="url(#gfGrad)"
        >
          GF
        </text>
      </svg>

      {/* Wordmark */}
      {showWord && (
        <span className="brand-word tracking-wider">GrindFit</span>
      )}
    </span>
  );
}
