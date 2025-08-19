import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Login() {
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("grindfit_profile");
      if (raw) window.location.href = "/member";
    } catch {}
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const profile = { name: name?.trim() || "Member" };
    try { localStorage.setItem("grindfit_profile", JSON.stringify(profile)); } catch {}
    window.location.href = "/member";
  }

  return (
    <>
      <Nav />
      <main className="gf-container py-12 lg:py-16">
        <section className="max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome back to <span className="brand-word">GRINDFIT</span>
          </h1>
          <p className="mt-3 small-dim">Log in to access your training, nutrition, reset &amp; recovery, and more.</p>
          <form onSubmit={onSubmit} className="gf-card mt-6 space-y-4">
            <div>
              <label className="small-dim block mb-1">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-primary" type="submit">Log in</button>
              <Link className="btn-ghost" href="/">Back to site</Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
