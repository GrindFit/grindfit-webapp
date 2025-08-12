// /components/Logo.jsx
export default function Logo({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gf_orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a3a" />
          <stop offset="0.42" stopColor="#ff6f1f" />
          <stop offset="1" stopColor="#ff4b00" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="rgba(255,255,255,0.02)"
        stroke="url(#gf_orange)"
        strokeWidth="2"
      />

      {/* GF monogram */}
      <g
        stroke="url(#gf_orange)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* G */}
        <path d="M30 16a10 10 0 1 0 0 16" />
        <path d="M24 24h8" />

        {/* F */}
        <path d="M18 16v16" />
        <path d="M18 18h8" />
        <path d="M18 24h6" />
      </g>
    </svg>
  );
}
