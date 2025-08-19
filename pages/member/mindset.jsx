import { useEffect } from "react";
import Nav from "@/components/Nav";
import { requireAuth, logout } from "@/lib/auth";
import Link from "next/link";

export default function Mindset() {
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <Nav rightSlot={<button onClick={logout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Mindset</h1>
        <div className="gf-card">
          <p className="small-dim">
            Micro-wins, cues, and repeatable motions that build momentum. We’ll drop your weekly cue set here.
          </p>
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
