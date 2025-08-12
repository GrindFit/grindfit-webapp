// pages/login.js
import { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";

export default function Login() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");

    try {
      if (!email || !email.includes("@")) return setErr("Enter a valid email.");
      if (!code || code.trim().length < 4) return setErr("Enter your access code.");

      if (typeof window !== "undefined") {
        localStorage.setItem("gf_token", "ok");
        localStorage.setItem("grindfit_profile", JSON.stringify({ email }));
      }

      // Send them into the app (we can change this later to /app)
      window.location.href = "/";
    } catch {
      setErr("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Log in — GrindFit</title>
      </Head>
      <Nav />
      <main className="gf-container py-24">
        <h1 className="text-3xl font-extrabold mb-3">Access GrindFit</h1>
        <p className="text-muted mb-10">
          Members-only workouts, meals, and the full Reset Protocol.
        </p>

        <form onSubmit={onSubmit} className="gf-card max-w-xl space-y-6">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="code" className="label">Access code</label>
            <input
              id="code"
              className="input"
              placeholder="Your member code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {err && <p className="text-error">{err}</p>}

          <button className="btn-primary w-full" type="submit">
            Enter
          </button>
        </form>
      </main>
    </>
  );
}
