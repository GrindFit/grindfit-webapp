// components/Nav.jsx
import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      <div className="gf-container flex items-center justify-between h-16">
        <Link href="/" className="no-underline">
          <Brand className="text-[22px] md:text-[24px]" />
        </Link>

        <nav className="flex items-center gap-4 md:gap-6">
          <a className="btn-ghost" href="#why">Why GrindFit</a>
          <a className="btn-ghost" href="#nutrition">Nutrition</a>
          <a className="btn-ghost" href="#reset">Reset & Recover</a>
          <a className="btn-ghost" href="#membership">Membership</a>
          <a className="btn-primary" href="/login">Open App</a>
          {rightSlot}
        </nav>
      </div>
    </header>
  );
}
