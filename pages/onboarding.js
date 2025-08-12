import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const DAYS = ["Mon","Tue","Wed","Thu","Fri"];

function buildWeek({goal, level, gender, days}){
  const baseCue = "Warm-up (5–7m) breath + mobility. Controlled tempo. Cooldown (5m).";
  const byGoal = {
    "Fat Loss": [
      {name:"Full-Body Circuit A", notes:"EMOM 10–12m + incline walk 10m"},
      {name:"Upper Push / Pull", notes:"Supersets 3×8–12 + 8m cardio"},
      {name:"Lower Strength", notes:"Squat pattern 3×6–8 + posterior"},
      {name:"Full-Body Circuit B", notes:"12–15m carries / swings"},
      {name:"Upper Volume", notes:"machines/dumbbells 3×12–15"},
    ],
    "Lean Mass": [
      {name:"Upper — Press focus", notes:"Top set + back-off 3×6–8"},
      {name:"Lower — Hinge focus", notes:"RDL / hip hinge 3×6–8"},
      {name:"Upper — Pull focus", notes:"Row / pull 3×8–10"},
      {name:"Lower — Squat focus", notes:"Front / back 3×5–8"},
      {name:"Full-Body Hypertrophy", notes:"3×10–14 tension focus"},
    ],
    "Mass Gain": [
      {name:"Push — Heavy", notes:"Press + accessories 4×5–8"},
      {name:"Pull — Heavy", notes:"Row/Pulldown + accessories 4×5–8"},
      {name:"Legs — Heavy", notes:"Squat + posterior 4×5–8"},
      {name:"Push — Volume", notes:"3×10–12 + isolation"},
      {name:"Pull/Legs — Volume", notes:"3×10–12 hypertrophy"},
    ],
  };
  const list = byGoal[goal] ?? byGoal["Lean Mass"];
  return days.map((d,i)=>({
    day:d,
    title:list[i%list.length].name,
    cues:[baseCue,`Level: ${level}`,`Gender: ${gender}`, list[i%list.length].notes],
    complete:false
  }));
}

export default function Onboarding(){
  const r = useRouter();
  const [name,setName] = useState("");
  const [goal,setGoal] = useState("Lean Mass");
  const [level,setLevel] = useState("Beginner");
  const [gender,setGender] = useState("Male");
  const [sel,setSel] = useState(DAYS);

  useEffect(()=>{
    const plan = localStorage.getItem("grindfit_plan");
    if (plan) r.replace("/app");
  },[r]);

  const canGo = name.trim() && goal && level && gender && sel.length>0;
  const ordered = useMemo(()=>DAYS.filter(d=>sel.includes(d)),[sel]);
  const toggle = d => setSel(prev => prev.includes(d) ? prev.filter(x=>x!==d) : [...prev,d]);

  const submit = ()=>{
    if(!canGo) return;
    const profile = {name:name.trim(),goal,level,gender,days:ordered,createdAt:new Date().toISOString()};
    const plan = buildWeek(profile);
    localStorage.setItem("grindfit_profile", JSON.stringify(profile));
    localStorage.setItem("grindfit_plan", JSON.stringify(plan));
    r.push("/app");
  };

  return (
    <>
      <Head><title>Onboarding — GrindFit</title></Head>

      <header className="container" style={{paddingTop:20}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span className="logo"><span className="logo-mark"/><span className="logo-type">GrindFit</span></span>
          <a className="btn btn-ghost" href="/">Back</a>
        </div>
      </header>

      <main className="section">
        <div className="container" style={{maxWidth:900}}>
          <h1 style={{fontWeight:800,margin:"0 0 8px",fontSize:"clamp(24px,3vw,34px)"}}>Build your week</h1>
          <p className="muted" style={{marginBottom:18}}>Goal, level, gender, and training days (Mon–Fri by default).</p>

          <div className="card" style={{padding:16}}>
            <div style={{display:"grid",gap:14,gridTemplateColumns:"1fr 1fr",alignItems:"end"}}>
              <div style={{gridColumn:"1 / -1"}}>
                <label className="kicker">Your Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Alex"/>
              </div>

              <div>
                <label className="kicker">Goal</label>
                <select value={goal} onChange={e=>setGoal(e.target.value)}>
                  <option>Fat Loss</option><option>Lean Mass</option><option>Mass Gain</option>
                </select>
              </div>
              <div>
                <label className="kicker">Level</label>
                <select value={level} onChange={e=>setLevel(e.target.value)}>
                  <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="kicker">Gender</label>
                <select value={gender} onChange={e=>setGender(e.target.value)}>
                  <option>Male</option><option>Female</option>
                </select>
              </div>

              <div>
                <label className="kicker">Training Days</label>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {DAYS.map(d=>(
                    <button key={d} type="button" className="btn"
                      onClick={()=>toggle(d)}
                      style={{
                        borderColor: sel.includes(d)? "rgba(255,122,26,.45)":"var(--line)",
                        background: sel.includes(d)
                          ? "linear-gradient(180deg, var(--amber-2), var(--amber-1))"
                          : "linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02))",
                        color: sel.includes(d)? "#0b0b10":"var(--ink-1)", padding:".6rem .8rem"
                      }}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{marginTop:16}}>
              <button className="btn btn-amber" onClick={submit} disabled={!canGo} style={{opacity:canGo?1:.6}}>
                Generate 1-Week Plan
              </button>
            </div>
          </div>

          <p className="muted" style={{marginTop:12}}>You’ll get a Mon–Fri week. Mark days complete in the app. Video slots are on each day page.</p>
        </div>
      </main>
    </>
  );
}
