// components/Nav.jsx
import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      <div className="gf-container flex items-center justify-between h-16 xl:h-24">
        {/* Brand, pulled slightly left to align with page edge */}
        <Link href="/" className="no-underline -ml-4 sm:-ml-6">
          <Brand size="2xl" />
        </Link>

        <nav className="flex items-center gap-3">
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
