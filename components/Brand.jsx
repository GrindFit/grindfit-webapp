// components/Brand.jsx
import Image from "next/image";

export default function Brand({ className = "" }) {
  return (
    <span className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/logo-word.png"    // if you uploaded to /public/assets, use "/assets/logo-word.png"
        alt="GrindFit"
        priority
        width={560}             // large intrinsic size for retina sharpness
        height={160}
        className="
          w-auto
          h-10 sm:h-12 md:h-14 lg:h-16
          select-none
          [mix-blend-mode:screen]   /* visually removes the black box on dark bg */
          [image-rendering:-webkit-optimize-contrast]
        "
      />
    </span>
  );
}
