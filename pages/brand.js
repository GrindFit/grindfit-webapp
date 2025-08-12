export default function Brand({ className = "" }) {
  return (
    <span
      className={
        "inline-block font-extrabold tracking-wider brand-word " + className
      }
      aria-label="GrindFit"
      title="GrindFit"
    >
      GRINDFIT
    </span>
  );
}
