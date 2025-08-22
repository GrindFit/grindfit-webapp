// /pages/signup.jsx
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";
import Brand from "../components/Brand";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) setErr(error.message);
    else alert("Check your email to confirm your account.");
  }

  // IDENTICAL shell as /login
  const shellStyle = {
    backgroundImage:
      "radial-gradient(1200px 600px at 20% -10%, rgba(255,140,0,0.18), transparent 40%), " +
      "radial-gradient(1000px 800px at 110% 25%, rgba(255,69,0,0.10), transparent 40%), " +
      "linear-gradient(180deg, #0b0b0e 0%, #0b0b0e 100%)",
    backgroundColor: "#0b0b0e",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <main
  className="relative min-h-screen overflow-hidden text-white"
  style={{
    background:
      'radial-gradient(1200px 600px at 20% -10%, rgba(255,140,0,0.18), transparent 40%), ' +
      'radial-gradient(1000px 800px at 110% 25%, rgba(255,69,0,0.10), transparent 40%), ' +
      'linear-gradient(180deg, #0b0b0e 0%, #0b0b0e 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
      {/* header spacing matches /login */}
      <header className="relative mx-auto max-w-7xl px-6 pt-10">
        <Brand />
      </header>

      {/* centered auth card */}
      <section className="relative mx-auto mt-20 max-w-md px-6">
        <div className="mx-auto w-full rounded-xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-md">
          <h1 className="mb-6 text-center text-xl font-semibold">Create account</h1>

          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block text-sm">
              <span className="mb-2 block text-white/70">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-2 block text-white/70">Password</span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            {err && <p className="text-sm text-red-400">{err}</p>}

            <button
              disabled={loading}
              className="mt-4 w-full rounded-md bg-gradient-to-r from-orange-500 to-amber-500 py-2 font-semibold text-black disabled:opacity-60"
            >
              {loading ? "Creating…" : "Create account"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-white/70">
            <Link href="/login" className="underline hover:text-white">
              Back to Log in
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
