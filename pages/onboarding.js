// pages/onboarding.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { WORKOUTS_WEEK1, MEAL_PLANS } from "@/lib/data";
import { requireAuth } from "@/lib/auth";

const GOALS = ["Fat Loss","Lean Mass","Mass Gain"];
const LEVELS = ["Beginner","Intermediate","Advanced"];
const GENDERS = ["Female","Male"];

export default function Onboarding(){
  const router = useRouter();
  const [name,setName] = useState("");
  const [goal,setGoal] = useState("");
  const [level,setLevel] = useState("");
  const [gender,setGender] = useState("");
  const [days,setDays] = useState(["Mon","Tue","Wed","Thu","Fri"]);

  useEffect(()=>{ requireAuth(); },[]);

  const disabled = !name || !goal || !level || !gender || days.length===0;

  function toggleDay(d){
    setDays(prev => prev.includes(d) ? prev.filter(x=>x!==d) : [...prev,d].sort(
      (a,b)=>["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(a)-
             ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(b)
    ));
  }

  function makePlan(){
    const plan = {};
    ["Monday","Tuesday","Wednesday","Thursday","Friday"].forEach(d=>{
      plan[d] = WORKOUTS_WEEK1[d] || [];
    });

    const profile = { name, goal, level, gender, days, createdAt:new Date().toISOString() };
    const meals = (MEAL_PLANS[goal] && MEAL_PLANS[goal][level] && MEAL_PLANS[goal][level][gender]) || null;

    localStorage.setItem("grindfit_profile", JSON.stringify(profile));
    localStorage.setItem("grindfit_plan", JSON.stringify({ week1: plan, meals }));
    router.push("/app");
  }

  return (
    <>
      <header className="nav sticky top-0 z-50">
        <div className="gf-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm" style={{background:"linear-gradient(90deg, var(--gf-amber), var(--gf-orange) 55%, var(--gf-vermillion))"}}/>
            <span className="tracking-wide font-semibold">GRINDFIT</span>
          </div>
        </div>
      </header>

      <main className="gf-container py-12">
        <h1 className="text-2xl font-semibold mb-6">Let’s build your plan</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="gf-card">
            <label className="block text-sm mb-2">Your Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Alex"/>
          </div>

          <div className="gf-card">
            <label className="block text-sm mb-2">Goal</label>
            <select value={goal} onChange={e=>setGoal(e.target.value)}>
              <option value="">Select…</option>
              {GOALS.map(g=><option key={g}>{g}</option>)}
            </select>
          </div>

          <div className="gf-card">
            <label className="block text-sm mb-2">Level</label>
            <select value={level} onChange={e=>setLevel(e.target.value)}>
              <option value="">Select…</option>
              {LEVELS.map(l=><option key={l}>{l}</option>)}
            </select>
          </div>

          <div className="gf-card">
            <label className="block text-sm mb-2">Gender</label>
            <select value={gender} onChange={e=>setGender(e.target.value)}>
              <option value="">Select…</option>
              {GENDERS.map(g=><option key={g}>{g}</option>)}
            </select>
          </div>

          <div className="gf-card md:col-span-2">
            <label className="block text-sm mb-2">Training Days (tap to toggle)</label>
            <div className="flex gap-2 flex-wrap">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>(
                <button key={d}
                  onClick={()=>toggleDay(d)}
                  className={`px-3 py-1 rounded-lg border ${days.includes(d)?'bg-white text-black border-white':'border-[color:var(--gf-stroke)] text-[color:var(--gf-text)]'}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button disabled={disabled} onClick={makePlan}
            className={`btn-primary ${disabled?'opacity-40 cursor-not-allowed':''}`}>
            Generate Week 1
          </button>
          <button onClick={()=>history.back()} className="btn-ghost">Cancel</button>
        </div>
      </main>
    </>
  );
}
