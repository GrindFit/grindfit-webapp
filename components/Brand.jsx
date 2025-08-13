// components/Brand.jsx
import Image from "next/image";

export default function Brand({ className = "" }) {
  return (
    <span
      className={"inline-flex items-center shrink-0 " + className}
      aria-label="GrindFit"
      title="GrindFit"
    >
      <Image
        src="/logo-word.png"          // make sure this file is in /public
        alt="GRINDFIT"
        width={600}                   // intrinsic size; CSS below controls display size
        height={160}
        className="
          h-10 md:h-12 lg:h-14 xl:h-16
          w-auto object-contain select-none pointer-events-none
        "
        priority
        style={{ mixBlendMode: "screen" }}  // hides dark box on dark header
      />
    </span>
  );
}
