import { useEffect } from "react";
import Nav from "@/components/Nav";
import { requireAuth, logout } from "@/lib/auth";
import Link from "next/link";

export default function Workouts() {
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <Nav rightSlot={<button onClick={logout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Workouts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d=>(
            <div key={d} className="gf-card">
              <div className="small-dim">{d}</div>
              <div className="font-semibold mt-1">Session preview</div>
              <p className="small-dim mt-2">Blocks + optional follow-along video.</p>
            </div>
          ))}
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
