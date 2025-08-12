import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      <div className="gf-container flex items-center justify-between h-16">
        <Link href="/" className="no-underline">
          <Brand />
        </Link>

        <nav className="flex items-center gap-3">
          <a className="btn-ghost" href="#why">Why GrindFit</a>
          <a className="btn-ghost" href="#nutrition">Nutrition</a>
          <a className="btn-ghost" href="#reset">Reset</a>
          <Link className="btn-pill" href="/login">Open App</Link>
          {rightSlot ?? null}
        </nav>
      </div>
    </header>
  );
}
