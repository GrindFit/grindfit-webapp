// /pages/login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
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
    // send members straight to the hub
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
      {/* Top nav (logo only on this page, links hidden by Nav.jsx) */}
      <Nav />

      {/* Warm brand gradients */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full bg-gradient-to-br from-orange-500/30 via-amber-400/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-16 -right-40 h-[50rem] w-[50rem] rounded-full bg-gradient-to-br from-pink-500/20 via-orange-500/10 to-transparent blur-3xl" />

      {/* Page content */}
      <main className="relative z-10">
        <section className="container mx-auto px-4">
          <div className="mx-auto mt-24 max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
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

              <button
                type="submit"
                disabled={loading}
                className="btn-primary mt-2 w-full"
              >
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
