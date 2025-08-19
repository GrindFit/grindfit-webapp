import { useEffect } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";

function doLogout(){ try{localStorage.removeItem("grindfit_profile");}catch{} window.location.href="/"; }

export default function Workouts(){
  useEffect(()=>{},[]);
  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
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
