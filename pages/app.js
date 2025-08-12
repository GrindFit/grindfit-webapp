// pages/app.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { requireAuth, logout } from "@/lib/auth";

export default function AppHome(){
  const [profile,setProfile] = useState(null);
  const [plan,setPlan] = useState(null);

  useEffect(()=>{
    if(!requireAuth()) return;
    const p = localStorage.getItem("grindfit_profile");
    const w = localStorage.getItem("grindfit_plan");
    if(p && w){
      setProfile(JSON.parse(p));
      setPlan(JSON.parse(w));
    }else{
      window.location.href="/onboarding";
    }
  },[]);

  if(!profile || !plan) return null;

  const week = plan.week1 || {};
  const days = Object.keys(week);
  const meal = plan.meals;

  return (
    <>
      <header className="nav sticky top-0 z-50">
        <div className="gf-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm" style={{background:"linear-gradient(90deg, var(--gf-amber), var(--gf-orange) 55%, var(--gf-vermillion))"}}/>
            <span className="tracking-wide font-semibold">GRINDFIT</span>
          </div>
          <button onClick={logout} className="btn-ghost">Log out</button>
        </div>
      </header>

      <main className="gf-container py-10 space-y-8">
        <section>
          <div className="flex items-end gap-3 mb-4">
            <h2 className="text-2xl font-semibold">Week 1</h2>
            <span className="small-dim">Welcome back, <strong>{profile.name}</strong></span>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {days.map(d=>(
              <Link key={d} href={`/workout/${d.toLowerCase()}`} className="no-underline">
                <div className="gf-card h-full hover:border-white/40 transition">
                  <div className="text-sm small-dim">{d}</div>
                  <h4 className="font-semibold mt-1">View session</h4>
                  <div className="mt-2 small-dim">Full details + follow-along video slot.</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="gf-card">
            <h3 className="font-semibold text-lg">Your Meals</h3>
            {!meal ? (
              <p className="small-dim mt-2">No plan matched yet.</p>
            ) : (
              <>
                <p className="small-dim mt-1">
                  <strong>{profile.goal}</strong> • {profile.level} • {profile.gender}
                </p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {Object.entries(meal.meals).map(([type,items])=>(
                    <div key={type}>
                      <div className="font-semibold mb-2">{type}</div>
                      <ul className="list-disc ml-5 small-dim">
                        {items.map((m,i)=><li key={i}>{m}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-center small-dim">
                  {["Calories","Protein","Carbs","Fat"].map(k=>(
                    <div key={k} className="bg-[color:var(--gf-card)] rounded-lg p-3 border border-[color:var(--gf-stroke)]">
                      <div className="text-xs uppercase tracking-wide">{k}</div>
                      <div className="font-semibold mt-1">{meal.totals[k]}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-sm small-dim">
                  <strong>Disclaimer:</strong> These meal plans are general guidelines and do not replace medical or nutritional advice.
                </div>
              </>
            )}
          </div>

          <div className="gf-card">
            <h3 className="font-semibold text-lg">Reset &amp; Recover</h3>
            <p className="small-dim mt-1">Fix the body. Reclaim the mind. Build the unbreakable.</p>
            <ul className="mt-4 list-disc ml-5 small-dim space-y-2">
              <li><strong>Cold Shower</strong> (within 10 min of waking) + 350–500ml water.</li>
              <li><strong>GrindFit Reading (20 min/day)</strong> — feed your mind before the world chases you.</li>
              <li><strong>10,000 Steps</strong> daily + optional mobility flow or ruck once/week.</li>
              <li><strong>Emotional Reset Block</strong> (1–2×/week): gratitude, letting-go ritual, reconnection.</li>
            </ul>
            <Link href="/reset" className="btn-ghost inline-block mt-4 no-underline">Open full protocol</Link>
          </div>
        </section>
      </main>
    </>
  );
}
