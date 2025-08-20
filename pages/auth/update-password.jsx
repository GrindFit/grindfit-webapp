// /pages/auth/update-password.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";
import Nav from "../../components/Nav";

export default function UpdatePassword() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // When user comes from email link, Supabase should have set a session.
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) setErr("Session expired. Request a new reset link.");
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) setErr(error.message);
    else {
      setOk(true);
      setTimeout(() => router.push("/login"), 1000);
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(1200px_600px_at_20%_-10%,#0ea5e9_0%,transparent_60%),radial-gradient(900px_500px_at_120%_10%,#a855f7_0%,transparent_55%),linear-gradient(180deg,#0b1020,#0b1020)] px-4">
        <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
          <h1 className="text-2xl font-semibold tracking-tight">Set a new password</h1>
          <input
            type="password"
            className="w-full rounded-xl bg-black/30 border border-white/15 px-3 py-2 mt-5 outline-none focus:ring-2 focus:ring-white/20"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="New password"
            required
          />
          {err && <div className="mt-3 text-sm text-red-300">{err}</div>}
          {ok && <div className="mt-3 text-sm text-emerald-300">Password updated. Redirecting…</div>}
          <button className="mt-5 w-full rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 px-4 py-2 font-medium">
            Update password
          </button>
        </form>
      </div>
    </>
  );
}
