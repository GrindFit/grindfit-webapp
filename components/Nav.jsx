// components/Nav.jsx
import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      {/* Remove container padding so the logo sits flush left */}
      <div className="gf-container px-0 flex items-center justify-between h-16 xl:h-24">
        <Link href="/" className="no-underline">
          <Brand size="2xl" />
        </Link>

        {/* Keep a little breathing room on the right */}
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
