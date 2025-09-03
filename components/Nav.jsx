// components/Nav.jsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center">
          <span
            className="text-2xl font-black tracking-tight bg-clip-text text-transparent select-none"
            style={{
              background:
                "linear-gradient(90deg,#FF7A18 0%,#FF8A21 40%,#FFA24A 100%)",
            }}
          >
            GRINDFIT
          </span>
        </Link>

        {/* Tabs */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#why" className="text-zinc-300 hover:text-white">
            Why GrindFit
          </Link>
          <Link href="#nutrition" className="text-zinc-300 hover:text-white">
            Nutrition
          </Link>
          <Link href="#recover" className="text-zinc-300 hover:text-white">
            Reset &amp; Recover
          </Link>
          <Link href="#plans" className="text-zinc-300 hover:text-white">
            Membership
          </Link>

          {/* Log in */}
          <Link href="/member" className="text-zinc-300 hover:text-white">
            Log in
          </Link>

          {/* Open App CTA */}
          <Link
            href="/member"
            className="ml-2 inline-flex items-center rounded-xl px-4 py-2 font-semibold text-black shadow ring-1 ring-black/10"
            style={{
              background:
                "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
            }}
          >
            Open App
          </Link>
        </div>
      </nav>
    </header>
  );
}
