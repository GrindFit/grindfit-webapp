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
    return (
 <main
  className="relative min-h-screen overflow-hidden text-white"
  style={{
    backgroundImage:
      `radial-gradient(1200px 600px at 20% -10%, rgba(255,140,0,0.18), transparent 40%),
       radial-gradient(1000px 800px at 110% 25%, rgba(255,69,0,0.10), transparent 40%),
       linear-gradient(180deg, #0b0b0e 0%, #0b0b0e 100%)`,
    backgroundColor: '#0b0b0e',   // fallback
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
   </main>

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
