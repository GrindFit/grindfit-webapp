// /components/MemberShell.jsx
'use client'; // safe in pages too

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from "../utils/supabaseClient"; // ← match your login.jsx path

const bg = {
  backgroundImage:
    'radial-gradient(1200px 600px at 20% -10%, rgba(255,140,0,0.18), transparent 40%), ' +
    'radial-gradient(1000px 800px at 110% 25%, rgba(255,69,0,0.10), transparent 40%), ' +
    'linear-gradient(180deg, #0b0b0e 0%, #0b0b0e 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function MemberShell({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Boot: read current session, then subscribe to changes
  useEffect(() => {
    let active = true;

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (active) setUser(session?.user ?? null);
      setLoaded(true);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      active = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);

  // Only redirect once we know there’s no session
  useEffect(() => {
    if (loaded && !user) router.replace('/login');
  }, [loaded, user, router]);

  // Pre-auth / loading shell (keeps brand + gradient)
  if (!loaded || !user) {
    return (
      <main className="relative min-h-screen text-white" style={bg}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-wide">
            <span className="text-orange-500">GRIND</span>FIT
          </Link>
        </div>
        <div className="flex items-center justify-center pt-24 text-white/70">Loading…</div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white" style={bg}>
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-wide">
          <span className="text-orange-500">GRIND</span>FIT
        </Link>
        <nav className="text-sm space-x-6">
          <Link href="/member/workouts" className="hover:text-white/80">Workouts</Link>
          <Link href="/member/nutrition" className="hover:text-white/80">Nutrition</Link>
          <Link href="/member/reset" className="hover:text-white/80">Reset &amp; Recover</Link>
          <Link href="/member/mindset" className="hover:text-white/80">Mindset</Link>
          <Link href="/member/membership" className="hover:text-white/80">Membership</Link>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {typeof children === 'function' ? children(user) : children}
      </div>
    </main>
  );
}
