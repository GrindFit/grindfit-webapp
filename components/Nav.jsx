// components/Nav.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import Brand from "./Brand";

export default function Nav() {
  const { pathname } = useRouter();

  // On auth pages, hide the main nav links (show only the logo)
  const hideLinks =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/auth/update-password" ||
    pathname.startsWith("/auth/");

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <nav className="container mx-auto flex items-center justify-between min-h-[80px] px-4">
        <Link href="/" aria-label="GRINDFIT home" className="no-underline">
          <Brand />
        </Link>

        {!hideLinks && (
          <div className="flex items-center gap-3">
<Link className="btn-ghost" href="/#why">Why Grindfit</Link>
<Link className="btn-ghost" href="/#nutrition">Nutrition</Link>
<Link className="btn-ghost" href="/#recovery">Reset & Recover</Link>
<Link className="btn-ghost" href="/membership">Membership</Link>

  {/* Why Grindfit content */}
</section>

<section id="nutrition">
  {/* Nutrition content */}
</section>

<section id="recovery">
  {/* Reset & Recover content */}
</section>


            {/* Open App → always goes to /login */}
            <Link className="btn-primary" href="/login">
              Open App
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
