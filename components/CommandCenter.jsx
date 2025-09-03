// components/CommandCenter.jsx
// self-contained; no external icon imports

export default function CommandCenter() {
  // sample display numbers (static)
  const steps = "6,700 / 10,000";
  const water = "2 L / 4 L";
  const calories = "1,950 / 2,500";
  const weight = "72 kg";
  const workouts = 45;
  const delta = -12; // kg

  const week = [
    { day: "Monday",    text: "Push Day — Chest & Triceps",   done: true },
    { day: "Tuesday",   text: "Pull Day — Back & Biceps",     done: true },
    { day: "Wednesday", text: "Leg Day — Quads & Glutes",     now:  true },
    { day: "Thursday",  text: "Cardio & Core" },
    { day: "Friday",    text: "Full Body HIIT" },
  ];

  const Nut = [
    { label: "Protein", val: "120g", color:"orange" },
    { label: "Carbs",   val: "280g", color:"green"  },
    { label: "Fat",     val: "75g",  color:"orange" },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* LEFT – Progress */}
      <div className="gf-card">
        <h3 className="gf-card-title">Today’s Progress</h3>

        <div className="mt-3 space-y-3">
          <Row label="Steps" value={steps}>
            <Bar pct={67} color="orange" />
          </Row>
          <Row label="Water" value={water}>
            <Bar pct={50} color="green" />
          </Row>
          <Row label="Calories" value={calories}>
            <Bar pct={78} color="orange" />
          </Row>
          <Row label="Weight" value={weight} />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="gf-pill">
            <span className="text-white/70 text-xs">Workouts</span>
            <div className="text-xl font-bold text-green-400">{workouts}</div>
          </div>
          <div className="gf-pill">
            <span className="text-white/70 text-xs">Weight Δ</span>
            <div className="text-xl font-bold">
              <span className="text-orange-400">{delta}</span>
              <span className="text-white/70 ml-1">kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE – Week plan (soft translucent badges) */}
      <div className="gf-card">
        <h3 className="gf-card-title">This Week’s Plan</h3>

        <div className="mt-4 space-y-2">
          {week.map((w, i) => (
            <div key={i} className="gf-row">
              <div className="text-white/70 w-24">{w.day}</div>
              <div className="flex-1 text-white">{w.text}</div>

              {w.done ? (
                <span className="gf-badge gf-badge--orange">✓</span>
              ) : w.now ? (
                <span className="gf-badge gf-badge--green">▶</span>
              ) : (
                <span className="gf-badge gf-badge--muted">•</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT – Nutrition goals (unchanged style) */}
      <div className="gf-card">
        <h3 className="gf-card-title">Nutrition Goals</h3>

        <div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
          <div className="text-white/70 text-xs uppercase tracking-wide">Calories remaining</div>
          <div className="mt-2 text-3xl font-black text-white">2,156</div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {Nut.map((n, i) => (
              <div key={i} className="rounded-lg bg-black/30 ring-1 ring-white/10 p-3">
                <div className="text-white/65 text-xs">{n.label}</div>
                <div className={`mt-1 font-bold ${n.color === "green" ? "text-emerald-400" : "text-orange-400"}`}>
                  {n.val}
                </div>
              </div>
            ))}
          </div>

          <a href="#plans" className="gf-cta mt-6 inline-block">Start Workout</a>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, children }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm">{label}</span>
        <span className="text-white/90 text-sm">{value}</span>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}

function Bar({ pct, color }) {
  return (
    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
      <div
        className={`h-full rounded-full ${color === "green" ? "bg-emerald-500" : "bg-orange-500"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
