// components/Brand.jsx
import Image from "next/image";

export default function Brand({ className = "" }) {
  return (
    <span className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/logo-word.png"   // if you put it in /public/assets, use "/assets/logo-word.png"
        alt="GrindFit"
        priority
        width={220}
        height={44}
        className="h-8 sm:h-9 md:h-10 w-auto select-none"
      />
    </span>
  );
}
