import { useEffect, useState } from "react";

function readinessCalc(sleep, stress, soreness, steps) {
  const s = Math.min(Number(sleep || 7), 8) * 10;
  const mod = 20 - (Number(stress || 3) + Number(soreness || 2)) * 2.5;
  const st = Math.min(Number(steps || 8000) / 100, 30);
  return Math.max(0, Math.min(100, Math.round(s + mod + st)));
}

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [sleep, setSleep] = useState(7);
  const [stress, setStress] = useState(3);
  const [soreness, setSoreness] = useState(2);
  const [steps, setSteps] = useState(8000);
  const [streak, setStreak] = useState(1);

  const readiness = readinessCalc(sleep, stress, soreness, steps);
  const today = workouts[0];

  useEffect(() => {
    async function load() {
      try {
        const w = await fetch("/assets/data/workouts.json").then(r => r.json());
        const m = await fetch("/assets/data/meals.json").then(r => r.json());
        setWorkouts(w);
        setMeals(m);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Top bar */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" className="w-10 h-10 rounded-lg ring-1 ring-white/10" />
          <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-b from-orange-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            GRINDFIT
          </div>
        </div>
        <a href="/" className="text-sm px-4 py-2 rounded-xl bg-white text-black font-semibold">Home</a>
      </header>

      {/* Readiness + Today */}
      <section className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/60 text-sm">Today</div>
            <div className="text-2xl font-black">
              {today ? `Week ${today.week} · Day ${today.day}` : "Loading…"}
            </div>
          </div>
          <div className="text-3xl font-black">{readiness}</div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-5">
          <div>
            <label className="text-xs text-white/60">Sleep (hrs)</label>
            <input type="number" min="4" max="9" value={sleep}
              onChange={e=>setSleep(e.target.value)}
              className="w-full mt-1 bg-white/10 border border-white/10 rounded-xl p-3"/>
          </div>
          <div>
            <label className="text-xs text-white/60">Stress (1-5)</label>
            <input type="number" min="1" max="5" value={stress}
              onChange={e=>setStress(e.target.value)}
              className="w-full mt-1 bg-white/10 border border-white/10 rounded-xl p-3"/>
          </div>
          <div>
            <label className="text-xs text-white/60">Soreness (1-5)</label>
            <input type="number" min="1" max="5" value={soreness}
              onChange={e=>setSoreness(e.target.value)}
              className="w-full mt-1 bg-white/10 border border-white/10 rounded-xl p-3"/>
          </div>
          <div>
            <label className="text-xs text-white/60">Steps Yesterday</label>
            <input type="number" min="0" max="20000" value={steps}
              onChange={e=>setSteps(e.target.value)}
              className="w-full mt-1 bg-white/10 border border-white/10 rounded-xl p-3"/>
          </div>
        </div>
      </section>

      {/* Workout + Mindset + Meals */}
      <section className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 rounded-3xl bg-neutral-900/60 border border-white/10 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-4">
              <div className="text-white/70 text-sm">Workout</div>
              <div className="font-semibold text-lg">{today?.title || "Loading…"}</div>
              <ul className="list-disc pl-5 text-sm text-white/70 mt-2 space-y-1">
                {(today?.block || []).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <button
                onClick={()=>setStreak(s => s + 1)}
                className="mt-3 px-4 py-2 rounded-xl bg-white text-black font-semibold">
                Start Workout
              </button>
            </div>

            <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-4">
              <div className="text-white/70 text-sm">Mindset</div>
              <div className="font-semibold text-lg">Focus Cue</div>
              <p className="text-white/70 text-sm mt-1">
                30-sec box breathing. In 4 · hold 4 · out 6 · hold 2.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6">
          <div className="text-white/70 text-sm mb-2">Today’s Meals</div>
          <div className="space-y-3">
            {meals.slice(0,3).map((m) => (
              <div key={m.meal_id} className="flex items-center justify-between bg-white/5 rounded-xl p-3">
                <div>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-xs text-white/60">
                    {[m.protein && `${m.protein}P`, m.carbs && `${m.carbs}C`, m.fat && `${m.fat}F`, m.calories && `${m.calories} kcal`]
                      .filter(Boolean).join(" · ")}
                  </div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-sm">Swap</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streak / Recovery / Premium */}
      <section className="grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
          <div className="text-white/70 text-sm">Streak</div>
          <div className="text-4xl font-black">
            {streak} <span className="text-white/50 text-lg align-top">day</span>
          </div>
        </div>
        <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
          <div className="text-white/70 text-sm">Recovery</div>
          <ul className="text-sm text-white/80 space-y-1">
            <li>7k steps</li><li>Mobility 8 min</li><li>Protein target</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
          <div className="text-white/70 text-sm">Premium</div>
          <a className="mt-2 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-orange-400 to-red-600 text-black font-semibold">
            Activate $29/mo
          </a>
        </div>
      </section>
    </main>
  );
}
