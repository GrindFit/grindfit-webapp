// components/Brand.jsx
// Bold gradient word-mark. No tiny orange box, scales cleanly.

export default function Brand({ className = "" }) {
  return (
    <span
      aria-label="GrindFit"
      title="GrindFit"
      className={
        "inline-block select-none font-extrabold tracking-wide brand-word " +
        className
      }
    >
      GrindFit
    </span>
  );
}
