// /components/Nav.jsx
import Link from "next/link";
import Brand from "./Brand";

export default function Nav({ rightSlot = null }) {
  return (
    <header className="nav">
      <div className="gf-container row">
        {/* Brand (GF badge + word) */}
        <Link href="/" className="no-underline" aria-label="Go home">
          <Brand />
        </Link>

        {/* Primary nav */}
        <nav className="links">
          <a className="btn-ghost" href="#why">Why GrindFit</a>
          <a className="btn-ghost" href="#nutrition">Nutrition</a>
          <a className="btn-ghost" href="#reset">Reset &amp; Recover</a>
          <a className="btn-ghost" href="#membership">Membership</a>

          {/* Right-side CTA */}
          {rightSlot ?? (
            <Link className="btn-primary" href="/login">Open App</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
