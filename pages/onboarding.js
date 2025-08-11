import { useState } from "react";

const GOALS  = ["Fat Loss", "Lean Mass", "Mass Gain"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const DAYS   = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Build a simple 30-day plan based on chosen training days
function buildThirtyDayPlan(profile) {
  const start = new Date();
  const plan = [];

  for (let i = 0; i < 30; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);

    // convert JS day (0=Sun..6=Sat) to our DAYS array (Mon..Sun)
    const jsDay = d.getDay();                     // 0..6 (Sun..Sat)
    const dayName = DAYS[(jsDay + 6) % 7];        // Mon-first
    const isTraining = profile.days.includes(dayName);

    plan.push({
      date: d.toISOString().slice(0, 10),
      workout: isTraining
        ? {
            name: `${profile.goal} • ${profile.level}`,
            blocks:
              profile.level === "Advanced"
                ? 5
                : profile.level === "Intermediate"
                ? 4
                : 3,
            day: dayName,
          }
        : null,
      meals: [],
      notes: "",
      complete: false,
    });
  }

  return plan;
}

export default function Onboarding() {
  const [name,  setName]  = useState("");
  const [goal,  setGoal]  = useState("");
  const [level, setLevel] = useState("");
  const [days,  setDays]  = useState([]);

  const toggleDay = (d) =>
    setDays((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

  const disabled = !name || !goal || !level || days.length === 0;

  return (
    <main className="min-h-screen text-white
      bg-[radial-gradient(1200px_600px_at_0%_0%,#281a17_0%,transparent_40%),linear-gradient(180deg,#0b0b0b,#0b0b0b)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-8">Let’s build your plan</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <label className="block">
              <div className="mb-2 text-sm opacity-80">Your Name</div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Alex"
                className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none"
              />
            </label>

            <label className="block">
              <div className="mb-2 text-sm opacity-80">Goal</div>
              <select
                className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="">Select...</option>
                {GOALS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <div className="mb-2 text-sm opacity-80">Level</div>
              <select
                className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Select...</option>
                {LEVELS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 text-sm opacity-80">Training Days</div>
              <div className="flex gap-2 flex-wrap">
                {DAYS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDay(d)}
                    className={`px-3 py-2 rounded-md border transition
                    ${
                      days.includes(d)
                        ? "bg-orange-600/20 border-orange-500"
                        : "bg-neutral-900 border-neutral-700"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={disabled}
              onClick={() => {
                const profile = {
                  name,
                  goal,
                  level,
                  days,
                  createdAt: new Date().toISOString(),
                };

                const plan = buildThirtyDayPlan(profile);

                localStorage.setItem(
                  "grindfit_profile",
                  JSON.stringify(profile)
                );
                localStorage.setItem("grindfit_plan", JSON.stringify(plan));

                window.location.href = "/app";
              }}
              className={`px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-red-600
              ${disabled ? "opacity-40 pointer-events-none" : ""}`}
            >
              Generate 30-Day Plan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
