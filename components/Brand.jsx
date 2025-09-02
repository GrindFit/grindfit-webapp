// components/Brand.jsx
export default function Brand({ className = '' }) {
  return (
    <span
      className={`gf-gradient-text font-extrabold tracking-tight text-[22px] sm:text-[24px] ${className}`}
    >
      GRINDFIT
    </span>
  );
}
