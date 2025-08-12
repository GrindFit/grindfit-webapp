// /components/Brand.jsx
import Logo from "./Logo";

export default function Brand({ className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 font-extrabold tracking-wider " +
        className
      }
      aria-label="GrindFit"
      title="GrindFit"
    >
      <Logo size={22} />
      <span className="brand-word">GrindFit</span>
    </span>
  );
}
