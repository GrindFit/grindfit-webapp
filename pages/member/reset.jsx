import { useEffect } from "react";
import Nav from "@/components/Nav";
import { requireAuth, logout } from "@/lib/auth";
import Link from "next/link";

export default function Reset() {
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <Nav rightSlot={<button onClick={logout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Reset &amp; Recover</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Daily Reset","A simple morning pattern that sharpens focus and discipline."],
            ["Emotional Reset","A short, powerful block that clears mental weight and restores momentum."],
            ["Recovery Built-In","Movement, mobility, and breathwork — integrated without complexity."],
          ].map(([t,d])=>(
            <div key={t} className="gf-card">
              <h3 className="font-semibold">{t}</h3>
              <p className="small-dim mt-1">{d}</p>
            </div>
          ))}
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
