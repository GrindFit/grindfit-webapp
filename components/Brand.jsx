// /components/Brand.jsx
export default function Brand({ className = "" }) {
  return (
    <span
      aria-label="GrindFit"
      title="GrindFit"
      className={"brand-word nav-brand " + className}
    >
      GRINDFIT
    </span>
  );
}
