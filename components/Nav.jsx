import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      {/* Full-width row (no gf-container), so logo can sit at the far-left */}
      <div className="gf-container flex items-center justify-between min-h-[92px] xl:min-h-[120px]">
        {/* Tiny pad so it doesn't kiss the bezel; set to pl-0 if you want *absolute* flush */}
        <Link href="/" className="no-underline pl-2">
          {/* Size was good before; keep 2xl. Bump to "3xl" if you want larger. */}
          <Brand size="clamp(64px,7.5vw,128px)" />   // responsive (≈ Unstoppable scale)
        </Link>

        {/* Keep the right-side nav tidy */}
        <nav className="flex items-center gap-3 pr-4">
          <a className="btn-ghost" href="#why">Why GrindFit</a>
          <a className="btn-ghost" href="#nutrition">Nutrition</a>
          <a className="btn-ghost" href="#reset">Reset &amp; Recover</a>
          <Link className="btn-ghost" href="/membership">Membership</Link>
          <Link className="btn-primary" href="/login">Open App</Link>
          {rightSlot}
        </nav>
      </div>
    </header>
  );
}
