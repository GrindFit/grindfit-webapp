// /pages/signup.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import Brand from "../components/Brand";
import supabase from "../lib/supabaseClient";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr(""); setOk(""); setLoading(true);
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${origin}/login` },
    });
    setLoading(false);
    if (error) setErr(error.message);
    else setOk("Check your email to confirm your account.");
  }

  return (
    <div className="min-h-screen bg-[#0b0f12]">
      {/* warm brand gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0b0f12] to-[#0b0f12]" />
        <div
          className="absolute -top-24 -left-20 h-[60vh] w-[60vw] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: "radial-gradient(600px 600px at center, #ff7a18 0%, rgba(0,0,0,0) 60%)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[60vh] w-[60vw] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: "radial-gradient(600px 600px at center, #ffd36e 0%, rgba(0,0,0,0) 60%)" }}
        />
      </div>

      {/* top logo */}
      <div className="relative z-10 container mx-auto px-4 pt-14 flex justify-center">
        <div className="w-[180px] sm:w-[220px] md:w-[260px]">
          <Brand />
        </div>
      </div>

      {/* auth card */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mt-8 sm:mt-10 max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
          <h1 className="text-xl font-semibold text-white">Create account</h1>
          <p className="mt-1 text-sm text-white/60">Use the same email you purchase with.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl bg-white/5 px-3 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-white/30"
                placeholder="you@grindfit.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl bg-white/5 px-3 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-white/30"
                placeholder="••••••••"
              />
            </div>

            {err && <p className="text-sm text-red-400">{err}</p>}
            {ok && <p className="text-sm text-emerald-400">{ok}</p>}

            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 py-2.5 font-medium text-black hover:brightness-105 disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          <div className="mt-4 flex justify-between text-sm">
            <a href="/login" className="text-white/80 hover:text-white underline decoration-white/30">
              Back to Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
