// components/CommandCenter.jsx
export default function CommandCenter() {
  // NOTE: All values are plain numbers (no %), as requested.
  const today = { steps: "6,700 / 10,000", water: "2 L / 4 L", calories: "1,950 / 2,500" };
  const week = [
    { day: "Monday",     label: "Push Day – Chest & Triceps",   done: true  },
    { day: "Tuesday",    label: "Pull Day – Back & Biceps",     done: true  },
    { day: "Wednesday",  label: "Leg Day – Quads & Glutes",     done: false },
    { day: "Thursday",   label: "Cardio & Core",                 done: false },
    { day: "Friday",     label: "Full Body HIIT",                done: false },
  ];
  const macros = [
    { name: "Protein", value: "120g", tint: "orange" },
    { name: "Carbs",   value: "280g", tint: "green"  },
    { name: "Fat",     value: "75g",  tint: "orange" },
  ];

  return (
    <section className="relative mx-auto my-14 max-w-6xl px-5">
      <h2 className="gf-section-title text-3xl sm:text-4xl">
        Your Fitness <span className="gf-gradient-text">Command Center</span>
      </h2>

      {/* Big dedicated layout */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Today’s Progress */}
        <div className="rounded-2xl bg-black/40 p-6 ring-1 ring-white/10 backdrop-blur">
          <h3 className="font-semibold text-white mb-4">Today’s Progress</h3>
          <div className="space-y-4 text-white/90">
            <Row label="Steps"   value={today.steps} />
            <Row label="Water"   value={today.water} />
            <Row label="Calories" value={today.calories} />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center">
            <StatCard label="Workouts" value="45" />
            <StatCard label="lbs lost" value="-12" />
          </div>
        </div>

        {/* This Week’s Plan */}
        <div className="rounded-2xl bg-black/40 p-6 ring-1 ring-white/10 backdrop-blur">
          <h3 className="font-semibold text-white mb-4">This Week’s Plan</h3>
          <ul className="space-y-3">
            {week.map((w, i) => (
              <li
                key={i}
                className={`flex items-center justify-between rounded-xl px-4 py-3 ring-1 ring-white/10 ${
                  w.done ? "bg-gradient-to-r from-[var(--gf-orange-start)] to-[var(--gf-orange-end)]/20" : "bg-white/5"
                }`}
              >
                <div>
                  <p className="text-sm text-white/70">{w.day}</p>
                  <p className="text-white">{w.label}</p>
                </div>
                {/* O (orange) – G (green) – O (orange) dot badges */}
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--gf-orange-mid)]" />
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${w.done ? "bg-[var(--gf-green-mid)]/40" : "bg-[var(--gf-green-mid)]"}`} />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--gf-orange-mid)]" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Nutrition Goals */}
        <div className="rounded-2xl bg-black/40 p-6 ring-1 ring-white/10 backdrop-blur">
          <h3 className="font-semibold text-white mb-4">Nutrition Goals</h3>
          <div className="rounded-xl bg-black/60 p-6 ring-1 ring-white/10">
            <p className="text-4xl font-extrabold text-white text-center">2,156</p>
            <p className="mt-1 text-center text-white/70 text-sm">calories remaining</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {macros.map((m, i) => (
                <div key={i} className="rounded-lg bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <p className="text-xs text-white/60">{m.name}</p>
                  <p
                    className={`mt-1 text-lg font-bold ${
                      m.tint === "green" ? "text-[var(--gf-green-mid)]" : "text-[var(--gf-orange-mid)]"
                    }`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <button className="gf-cta w-full rounded-xl px-5 py-3 font-semibold text-black bg-[var(--gf-btn)] hover:brightness-105">
              Start Workout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/70">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
      <p className="text-2xl font-extrabold text-white text-center">{value}</p>
      <p className="mt-1 text-center text-xs text-white/60">{label}</p>
    </div>
  );
}
