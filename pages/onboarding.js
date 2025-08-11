import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

/** small helpers */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

/** build a simple, clean training week */
function buildWeek({ goal, level, gender, days }) {
  const baseCue =
    "Warm-up (5–7m): breath + mobility. Use controlled tempo. Log the top set. Cooldown (5m).";
  const liftsByGoal = {
    "Fat Loss": [
      { name: "Full-Body Circuit A", notes: "EMOM 10–12m + incline walk 10m" },
      { name: "Upper Push / Pull", notes: "Supersets 3×8–12 + finish 8m cardio" },
      { name: "Lower Strength", notes: "Goblet/Front squats focus, 3×6–8" },
      { name: "Full-Body Circuit B", notes: "12–15m mixed carries / swings" },
      { name: "Upper Volume", notes: "machines/dumbbells 3×12–15" },
    ],
    "Lean Mass": [
      { name: "Upper — Press focus", notes: "Top set + back-off, 3×6–8" },
      { name: "Lower — Hinge focus", notes: "RDL / hip hinge, 3×6–8" },
      { name: "Upper — Pull focus", notes: "Row + pull progressions, 3×8–10" },
      { name: "Lower — Squat focus", notes: "Front / back variations, 3×5–8" },
      { name: "Full-Body Hypertrophy", notes: "machines/dumbbells 3×10–14" },
    ],
    "Mass Gain": [
      { name: "Push — Heavy", notes: "Press + accessories, 4×5–8" },
      { name: "Pull — Heavy", notes: "Row / Pulldown + accessories, 4×5–8" },
      { name: "Legs — Heavy", notes: "Squat pattern + posterior, 4×5–8" },
      { name: "Push — Volume", notes: "3×10–12 + isolation finishers" },
      { name: "Pull/Legs — Volume", notes: "3×10–12 mixed hypertrophy" },
    ],
  };

  const chosen = liftsByGoal[goal] ?? liftsByGoal["Lean Mass"];

  // shape to save
  const plan = days.map((d, i) => ({
    day: d,
    title: chosen[i % chosen.length].name,
    cues: [
      baseCue,
      `Level: ${level}`,
      `Gender track: ${gender}`,
      chosen[i % chosen.length].notes,
    ],
    complete: false,
  }));

  return plan;
}

export default function Onboarding() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("Lean Mass");
  const [level, setLevel] = useState("Beginner");
  const [gender, setGender] = useState("Male");
  const [selectedDays, setSelectedDays] = useState(DAYS); // Mon–Fri default

  const canGenerate =
    name.trim().length > 0 &&
    goal &&
    level &&
    gender &&
    selectedDays.length > 0;

  const toggleDay = (d) => {
    setSelectedDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const orderedDays = useMemo(
    () => DAYS.filter((d) => selectedDays.includes(d)),
    [selectedDays]
  );

  const handleGenerate = () => {
    if (!canGenerate) return;
    const profile = {
      name: name.trim(),
      goal,
      level,
      gender,
      days: orderedDays,
      createdAt: new Date().toISOString(),
    };

    const plan = buildWeek(profile);

    // save locally for the /app page
    localStorage.setItem("grindfit_profile", JSON.stringify(profile));
    localStorage.setItem("grindfit_plan", JSON.stringify(plan));

    router.push("/app");
  };

  // if user already has plan, skip onboarding
  useEffect(() => {
    const p = localStorage.getItem("grindfit_plan");
    if (p) router.replace("/app");
  }, [router]);

  return (
    <>
      <Head>
        <title>Onboarding — GrindFit</title>
      </Head>

      <header className="container" style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="logo"><span className="logo-mark" /><span className="logo-type">GRINDFIT</span></span>
          <a href="/" className="btn btn-ghost">Back</a>
        </div>
      </header>

      <main className="section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontWeight: 800, margin: "0 0 8px", fontSize: "clamp(24px,3vw,34px)" }}>
            Let’s build your plan
          </h1>
          <p className="muted" style={{ marginBottom: 18 }}>
            Pick your goal, level, and gender. Choose your training days (Mon–Fri is the default).
          </p>

          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", alignItems: "end" }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <label className="kicker">Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Alex"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="kicker">Goal</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)} style={inputStyle}>
                  <option>Fat Loss</option>
                  <option>Lean Mass</option>
                  <option>Mass Gain</option>
                </select>
              </div>

              <div>
                <label className="kicker">Level</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)} style={inputStyle}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="kicker">Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} style={inputStyle}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="kicker">Training Days</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {DAYS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggleDay(d)}
                      className="btn"
                      style={{
                        borderColor: selectedDays.includes(d)
                          ? "rgba(255,122,26,.45)"
                          : "var(--brand-line)",
                        background: selectedDays.includes(d)
                          ? "linear-gradient(180deg, var(--amber-2), var(--amber-1))"
                          : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                        color: selectedDays.includes(d) ? "#0b0b10" : "var(--brand-ink)",
                        padding: ".6rem .8rem",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <button
                className="btn btn-amber"
                onClick={handleGenerate}
                disabled={!canGenerate}
                style={{ opacity: canGenerate ? 1 : 0.6 }}
              >
                Generate 1-Week Plan
              </button>
            </div>
          </div>

          <p className="muted" style={{ marginTop: 14 }}>
            You’ll get a Mon–Fri week. Mark each day complete inside the app. We’ll expand this into
            a full 4-week block next, using the same clean design.
          </p>
        </div>
      </main>
    </>
  );
}

const inputStyle = {
  width: "100%",
  height: 42,
  borderRadius: 10,
  border: "1px solid var(--brand-line)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
  color: "var(--brand-ink)",
  padding: "0 .8rem",
  outline: "none",
};
