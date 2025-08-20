// components/Nav.jsx
import Link from "next/link";
import Brand from "./Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="gf-container flex items-center justify-between min-h-[88px] xl:min-h-[100px]">
        {/* Left: brand */}
        <Link href="/" className="no-underline block">
          <Brand size="clamp(64px,7.2vw,116px)" />
        </Link>

        {/* Right: links */}
        <nav className="flex items-center gap-3">
          <Link className="btn-ghost" href="/why">Why GrindFit</Link>
          <Link className="btn-ghost" href="/nutrition">Nutrition</Link>
          <Link className="btn-ghost" href="/reset">Reset &amp; Recover</Link>
          <Link className="btn-ghost" href="/membership">Membership</Link>
          <Link className="btn-primary" href="/login">Open App</Link>
          {rightSlot}
        </nav>
      </div>
    </header>
  );
}
