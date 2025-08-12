// /components/Brand.jsx
export default function Brand({ withMark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {withMark && (
        // Optional mark – safe to keep false if you don't want an icon
        <svg
          viewBox="0 0 16 16"
          className="h-4 w-4 -mt-0.5"
          aria-hidden="true"
          role="img"
        >
          <defs>
            <linearGradient id="gfMark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB36B" />
              <stop offset="45%" stopColor="#FF7A3D" />
              <stop offset="100%" stopColor="#FF4B2B" />
            </linearGradient>
          </defs>
          <circle cx="8" cy="8" r="8" fill="url(#gfMark)" />
        </svg>
      )}

      {/* Brand word in GrindFit gradient */}
      <span className="font-extrabold tracking-wider bg-gradient-to-r from-[#FFB36B] via-[#FF7A3D] to-[#FF4B2B] bg-clip-text text-transparent">
        GrindFit
      </span>
    </span>
  );
}
