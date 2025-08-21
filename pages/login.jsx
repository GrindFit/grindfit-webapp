// /pages/login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import Brand from "../components/Brand";          // centered logo (no full nav)
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setErr(error.message);
      return;
    }
    router.replace("/member");
  };

  const onForgot = async () => {
    const target = email || window.prompt("Enter your account email to reset password:");
    if (!target) return;
    const { error } = await supabase.auth.resetPasswordForEmail(target, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Password reset email sent.");
    }
  };

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

      {/* Auth card */}
      <main className="relative z-10">
        <section className="container mx-auto px-4">
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <h1 className="mb-6 text-xl font-semibold tracking-tight text-white">
              Welcome back
            </h1>

            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm text-white/70">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/60"
                  placeholder="you@grindfit.com"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm text-white/70">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/60"
                  placeholder="••••••••"
                />
              </label>

              {err && <p className="text-sm text-red-400">{err}</p>}

              <button type="submit" disabled={loading} className="btn-primary mt-2 w-full">
                {loading ? "Logging in…" : "Log In"}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-between text-sm">
              <button
                onClick={onForgot}
                className="text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Forgot password
              </button>
              <a
                href="/signup"
                className="text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Create account
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
