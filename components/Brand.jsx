// components/Brand.jsx
export default function Brand({ size = "xl", className = "" }) {
  // Sizes tuned to read like “Unstoppable”
  const sizes = {
    sm:  "text-[22px] md:text-[26px]",
    md:  "text-[26px] md:text-[32px]",
    lg:  "text-[30px] md:text-[40px]",
    xl:  "text-[34px] md:text-[44px] lg:text-[56px]",   // ≈ hero word weight
    "2xl":"text-[40px] md:text-[52px] lg:text-[64px]",
  };

  return (
    <span
      className={[
        "brand-word",                 // uses your GF gradient (already in globals.css)
        "font-extrabold tracking-wider leading-none",
        sizes[size],
        className,
      ].join(" ")}
      aria-label="GRINDFIT"
      title="GRINDFIT"
    >
      GRINDFIT
    </span>
  );
}
