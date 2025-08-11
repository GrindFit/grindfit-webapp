import { useState } from "react";

const DEFAULT_DAYS = ["Mon","Tue","Thu","Sat"];

export default function Onboarding() {
  const [name, setName]   = useState("");
  const [goal, setGoal]   = useState("");
  const [level, setLevel] = useState("");
  const [days, setDays]   = useState(DEFAULT_DAYS);

  const goals  = ["Fat Loss","Lean Mass","Recomp","Endurance"];
  const levels = ["Beginner","Intermediate","Advanced"];
  const weekday = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const toggleDay = (d) =>
    setDays(prev => prev.includes(d) ? prev.filter(x=>x!==d) : [...prev, d]);

  function generatePlan() {
    // seed a simple 30-day plan (we'll swap with your CSV later)
    const blocks = ["Full Body A","EMOM KB","Upper Push","Lower Hinge","Mobility","Conditioning","Rest"];
    const plan = Array.from({length:30}, (_,i)=>({
      day: i+1,
      title: blocks[i % blocks.length],
      block: [
        "Warm-up: 5m mobility",
        "Main: 3× EMOM / supersets",
        "Finisher: 6–8m zone 2"
      ],
      status: "pending"
    }));

    const profile = {
      name, goal, level,
      schedule: [...days].sort(),
      baselines: { sleep:null, stress:null, soreness:null, steps:null },
      streak: 0,
      createdAt: new Date().toISOString()
    };

    // save to local storage (Supabase will replace this later)
    localStorage.setItem("grindfit_profile", JSON.stringify(profile));
    localStorage.setItem("grindfit_plan", JSON.stringify(plan));
    localStorage.removeItem("grindfit_sessions");

    // go to the dashboard
    window.location.href = "/app";
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-black">Let’s build your plan</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="text-sm text-white/70">Your Name</label>
            <input className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/10"
                   placeholder="Alex" value={name} onChange={e=>setName(e.target.value)} />
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="text-sm text-white/70">Goal</label>
            <select className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/10"
                    value={goal} onChange={e=>setGoal(e.target.value)}>
              <option value="">Select…</option>
              {goals.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="text-sm text-white/70">Level</label>
            <select className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/10"
                    value={level} onChange={e=>setLevel(e.target.value)}>
              <option value="">Select…</option>
              {levels.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="text-sm text-white/70">Training Days</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {weekday.map(d => (
                <button key={d} onClick={()=>toggleDay(d)}
                  className={`px-3 py-2 rounded-xl border ${days.includes(d)
                    ? "bg-white text-black border-white"
                    : "bg-white/5 border-white/10"}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          disabled={!name || !goal || !level || days.length===0}
          onClick={generatePlan}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-600 text-black font-semibold disabled:opacity-40">
          Generate 30-Day Plan
        </button>
      </div>
    </main>
  );
}
