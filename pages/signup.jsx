// pages/signup.jsx
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";
import Brand from "../components/Brand";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setOk("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) return setErr(error.message);

    setOk("Check your email to confirm your account.");
  }

  return (
     <div className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* Warm GRINDFIT gradient blobs (match marketing vibe) */}
      <div className="pointer-events-none absolute -top-44 -left-40 h-[60rem] w-[60rem] rounded-full bg-gradient-to-br from-orange-500/35 via-amber-400/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-24 -right-40 h-[54rem] w-[54rem] rounded-full bg-gradient-to-bl from-orange-600/25 via-rose-500/15 to-transparent blur-3xl" />

      {/* Centered logo (clean auth header) */}
      <div className="relative z-10 container mx-auto px-4 pt-14 flex justify-center">
        <div className="w-[220px] sm:w-[260px]">
          <Brand />
        </div>
      </div>
      {/* IDENTICAL header spacing to /login */}
      <header className="relative mx-auto max-w-7xl px-6 pt-10">
        <Brand />
      </header>

      {/* IDENTICAL container/alignment to /login */}
      <section className="relative mx-auto max-w-7xl px-6 pt-8">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-black/70 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          <h2 className="text-lg font-semibold">Create account</h2>

          <form className="mt-4 space-y-4" onSubmit={onSubmit}>
            <label className="block text-sm">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md bg-neutral-900/80 p-2 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="block text-sm">
              Password
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md bg-neutral-900/80 p-2 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/20"
              />
            </label>

            {err ? (
              <p className="text-sm text-red-400">{err}</p>
            ) : ok ? (
              <p className="text-sm text-emerald-300">{ok}</p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-md bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 font-semibold text-black shadow ring-1 ring-black/10 disabled:opacity-60"
            >
              {loading ? "Creating…" : "Create account"}
            </button>

            <div className="mt-3 flex justify-between text-xs text-white/70">
              <Link href="/login" className="underline hover:text-white">
                Back to Log in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
