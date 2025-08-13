// components/Brand.jsx
import Image from "next/image";

export default function Brand({ size = "lg", className = "" }) {
  // Logo height map (choose with the `size` prop)
  const h = {
    sm: "h-8 md:h-9",
    md: "h-10 md:h-12",
    lg: "h-12 md:h-14 lg:h-16",      // ~48–64px tall
    xl: "h-14 md:h-16 lg:h-20",      // ~56–80px tall (SHREDFAST-like)
  }[size] ?? "h-12 md:h-14 lg:h-16";

  return (
    <span className={`inline-flex items-center shrink-0 ${h} ${className}`}>
      <Image
        src="/logo-word.png"              // file in /public
        alt="GRINDFIT"
        width={1200}                      // intrinsic; we size via CSS height
        height={300}
        className="h-full w-auto object-contain select-none pointer-events-none"
        priority
        // hides any dark box from the source art over your dark header
        style={{ mixBlendMode: "screen" }}
      />
    </span>
  );
}
