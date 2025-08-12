// components/Brand.jsx
export default function Brand({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* simple GF mark */}
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="gfgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8b6b" />
            <stop offset="42%" stopColor="#ff8a3a" />
            <stop offset="100%" stopColor="#ff5c24" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#gfgrad)" />
        <path d="M8 8h6v2H10v2h3v2h-5V8zm7 0h3v8h-2v-3h-1v-2h1V8z" fill="#0b0b0e" />
      </svg>

      <span
        aria-label="GrindFit"
        title="GrindFit"
        className="brand-word text-2xl sm:text-3xl font-extrabold tracking-wide"
      >
        GrindFit
      </span>
    </span>
  );
}
