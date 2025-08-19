import Link from "next/link";
import Brand from "@/components/Brand";

export default function Nav({ rightSlot }) {
  return (
    <header className="nav sticky top-0 z-50">
      <div className="gf-container flex items-center justify-between h-16 xl:h-20">
        {/* Flush-left logo, tiny drop from the very top */}
        <Link href="/" className="no-underline -ml-4 sm:-ml-6 mt-[2px]">
          <Brand size="clamp(64px,7.2vw,116px)" />
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
