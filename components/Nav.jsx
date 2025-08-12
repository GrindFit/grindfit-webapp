// /components/Nav.jsx
import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav() {
  return (
    <header className="nav">
      <div className="gf-container nav-inner">
        <div className="nav-left">
          <Link href="/" className="no-underline">
            <Brand />
          </Link>
        </div>

        <nav className="nav-links">
          <Link href="#why">Why GrindFit</Link>
          <Link href="#nutrition">Nutrition</Link>
          <Link href="#reset">Reset & Recover</Link>
          <Link href="#membership">Membership</Link>
          <Link href="/login" className="btn btn-primary" style={{ height: 36 }}>
            Open App
          </Link>
        </nav>
      </div>
    </header>
  );
}
