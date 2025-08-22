import { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient"; // adjust to "../../utils/..." when importing from /pages/member/*
import Link from "next/link";

export default function MemberShell({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = "/login";
        return;
      }
      if (mounted) setUser(user);
    })();
    return () => { mounted = false; };
  }, []);

  // Keeps the same warm gradient everywhere
  const bg = {
    background:
      'radial-gradient(1200px 600px at 20% -10%, rgba(255,140,0,0.18), transparent 40%), ' +
      'radial-gradient(1000px 800px at 110% 25%, rgba(255,69,0,0.10), transparent 40%), ' +
      'linear-gradient(180deg, #0b0b0e 0%, #0b0b0e 100%)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <main className="min-h-screen text-white" style={bg}>
      {/* Top bar (can be swapped for your logo/nav later) */}
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="/member" className="text-2xl font-black tracking-wide">
          <span className="text-orange-500">GRIND</span>FIT
        </Link>
        <nav className="text-sm text-white/70 space-x-6">
          <Link href="/member/workouts" className="hover:text-white">Workouts</Link>
          <Link href="/member/nutrition" className="hover:text-white">Nutrition</Link>
          <Link href="/member/reset" className="hover:text-white">Reset &amp; Recover</Link>
          <Link href="/member/mindset" className="hover:text-white">Mindset</Link>
          <Link href="/member/membership" className="hover:text-white">Membership</Link>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        {/* Gate until we load the user */}
        {!user ? (
          <div className="mt-24 text-center text-white/60">Loading…</div>
        ) : (
          children(user)
        )}
      </div>
    </main>
  );
}
