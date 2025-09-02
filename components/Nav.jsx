// components/Nav.jsx
import Link from 'next/link';
import Brand from './Brand';

export default function Nav({ rightSlot }) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-14 items-center justify-between rounded-b-xl border border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/35">
          {/* Brand (gradient text) */}
          <Link href="#top" className="flex items-center gap-2 pl-3">
            <Brand />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <li>
              <Link href="#why" className="hover:text-white transition-colors">
                Why
              </Link>
            </li>
            <li>
              <Link href="#nutrition" className="hover:text-white transition-colors">
                Nutrition
              </Link>
            </li>
            <li>
              <Link href="#membership" className="hover:text-white transition-colors">
                Membership
              </Link>
            </li>
            <li>
              <Link href="#watch" className="hover:text-white transition-colors">
                Watch Preview
              </Link>
            </li>
          </ul>

          {/* Right side CTA (or custom slot) */}
          <div className="pr-3">
            {rightSlot ?? (
              <Link
                href="#cta"
                className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold text-black
                           bg-gradient-to-r from-[var(--gf-orange-start)] to-[var(--gf-orange-end)]
                           shadow-[0_8px_30px_rgba(255,122,0,.25)]
                           hover:shadow-[0_12px_40px_rgba(255,122,0,.35)]
                           transition-all"
              >
                Start Your Transformation
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
