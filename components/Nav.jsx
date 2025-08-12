// components/Nav.jsx
import Link from "next/link";
import Brand from "./Brand";

export default function Nav() {
  return (
    <header className="nav sticky top-0 z-40">
      <div className="container nav-row">
        <Link href="/"><Brand className="nav-brand" /></Link>

        <nav className="nav-links">
          <a href="#why">Why GrindFit</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#reset">Reset & Recover</a>
          <Link href="/membership">Membership</Link>
          <Link href="/login" className="btn btn-cta">Open App</Link>
        </nav>
      </div>
    </header>
  );
}
