// components/Brand.jsx
export default function Brand({ size = "2xl", className = "" }) {
  const map = {
    sm:  "h-8  md:h-10",
    md:  "h-10 md:h-12",
    lg:  "h-12 md:h-16",
    xl:  "h-16 md:h-20",
    "2xl":"h-20 md:h-24 lg:h-28",   // nice, bold header size
  };

  return (
    <span className={`inline-block ${map[size]} ${className}`}>
      <img
        src="/logo-word.png"           // the image you uploaded to /public
        alt="GRINDFIT"
        draggable={false}
        className="h-full w-auto block select-none mix-blend-screen"
      />
    </span>
  );
}
