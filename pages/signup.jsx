// /pages/signup.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";
import Nav from "../components/Nav";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) return setErr(error.message);
    alert("Check your email to confirm your account.");
    router.push("/login");
  };


  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(1200px_600px_at_20%_-10%,#0ea5e9_0%,transparent_60%),radial-gradient(900px_500px_at_120%_10%,#a855f7_0%,transparent_55%),linear-gradient(180deg,#0b1020,#0b1020)] px-4">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_40px_80px_-24px_rgba(0,0,0,0.5)]"
        >
          <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
          <p className="text-white/70 text-sm mt-1">Use the same email you purchase with.</p>

          <label className="block text-sm mt-5 mb-1 text-white/80">Email</label>
          <input
            type="email"
            className="w-full rounded-xl bg-black/30 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm mt-4 mb-1 text-white/80">Password</label>
          <input
            type="password"
            className="w-full rounded-xl bg-black/30 border border-white/15 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {err && <div className="mt-3 text-sm text-red-300">{err}</div>}

          <button
            disabled={loading}
            className="mt-5 w-full rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 px-4 py-2 font-medium"
          >
            {loading ? "Creating..." : "Create account"}
          </button>

          <div className="mt-3 text-sm">
            Already a member?{" "}
            <a href="/login" className="text-white/80 hover:text-white underline underline-offset-4">
              Log in
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
