// components/CommandCenter.jsx
export default function CommandCenter() {
  return (
    <div id="dashboard" className="w-full">
      <h2 className="text-center font-black text-white text-[28px] sm:text-[34px] md:text-[40px]">
        Your Fitness <span className="gf-gradient-text">Command Center</span>
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* LEFT: Progress */}
        <div className="rounded-2xl bg-white/[0.03] p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-zinc-300">Today’s Progress</h3>

          <MetricBar label="Steps" value="6,700 / 10,000" color="orange" />
          <MetricBar label="Water" value="2 L / 4 L" color="green" />
          <MetricBar label="Calories" value="1,950 / 2,500" color="orange" />
          <MetricBar label="Weight" value="72 kg" color="slate" />

          <div className="mt-5 flex items-center gap-4">
            <CircleStat label="Workouts" value="45" color="green" />
            <CircleStat label="Weight Δ" value="-12 kg" color="orange" />
          </div>
        </div>

        {/* CENTER: This Week's Plan */}
        <div className="rounded-2xl bg-white/[0.03] p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-zinc-300">This Week’s Plan</h3>
          <PlanRow day="Monday"    task="Push Day — Chest & Triceps"  status="done" />
          <PlanRow day="Tuesday"   task="Pull Day — Back & Biceps"   status="next" />
          <PlanRow day="Wednesday" task="Leg Day — Quads & Glutes"   />
          <PlanRow day="Thursday"  task="Cardio & Core"              />
          <PlanRow day="Friday"    task="Full Body HIIT"             />
        </div>

        {/* RIGHT: Nutrition */}
        <div className="rounded-2xl bg-white/[0.03] p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-zinc-300">Nutrition Goals</h3>
          <div className="mt-5 rounded-2xl bg-black/30 p-6 border border-white/5">
            <div className="text-3xl font-extrabold text-white text-center">2,156</div>
            <div className="text-[11px] text-zinc-400 text-center mt-1 tracking-wide">CALORIES REMAINING</div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <Macro label="Protein" value="120g" />
              <Macro label="Carbs" value="280g" highlight="green" />
              <Macro label="Fat" value="75g" />
            </div>

            <button className="mt-6 w-full rounded-xl px-4 py-2 text-black font-semibold bg-[var(--gf-btn)] hover:brightness-105">
              Start Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Subcomponents ---------- */

function MetricBar({ label, value, color }) {
  const bar =
    color === "green"
      ? "bg-gradient-to-r from-[var(--gf-green-start)] via-[var(--gf-green-mid)] to-[var(--gf-green-end)]"
      : color === "orange"
      ? "bg-gradient-to-r from-[var(--gf-orange-start)] via-[var(--gf-orange-mid)] to-[var(--gf-orange-end)]"
      : "bg-white/15";

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-zinc-300">{label}</span>
        <span className="text-[13px] font-medium text-zinc-200">{value}</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/8 overflow-hidden">
        <div className={`h-full w-[66%] ${bar}`}></div>
      </div>
    </div>
  );
}

function CircleStat({ label, value, color = "green" }) {
  const ring =
    color === "orange"
      ? "bg-gradient-to-br from-[var(--gf-orange-start)] via-[var(--gf-orange-mid)] to-[var(--gf-orange-end)]"
      : "bg-gradient-to-br from-[var(--gf-green-start)] via-[var(--gf-green-mid)] to-[var(--gf-green-end)]";

  return (
    <div className="flex items-center gap-3">
      <div className={`w-14 h-14 rounded-full grid place-items-center text-black font-extrabold ${ring} shadow-[0_12px_30px_rgba(0,0,0,.25)]`}>
        {value}
      </div>
      <div className="text-xs text-zinc-400">{label}</div>
    </div>
  );
}

function PlanRow({ day, task, status }) {
  const base = "flex items-center justify-between rounded-xl px-4 py-3 border border-white/5";
  const doneBg  = "bg-[rgba(255,122,26,.12)]";   // translucent orange
  const nextBg  = "bg-[rgba(46,213,115,.12)]";   // translucent green

  return (
    <div className={`mt-3 ${base} ${status === "done" ? doneBg : status === "next" ? nextBg : "bg-white/[0.03]"}`}>
      <div>
        <div className="text-[13px] text-zinc-400">{day}</div>
        <div className="text-sm font-medium text-zinc-100">{task}</div>
      </div>

      <div className="ml-4">
        {status === "done" && (
          <span title="Completed" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--gf-orange-mid)] text-black font-bold">✓</span>
        )}
        {status === "next" && (
          <span title="Next up" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--gf-green-mid)] text-black font-bold">▶</span>
        )}
      </div>
    </div>
  );
}

function Macro({ label, value, highlight }) {
  return (
    <div className="rounded-xl bg-white/[0.035] border border-white/5 p-3 text-center">
      <div className={`text-sm font-semibold ${highlight === "green" ? "text-[var(--gf-green-mid)]" : "text-[var(--gf-orange-mid)]"}`}>{label}</div>
      <div className="mt-1 font-bold text-white">{value}</div>
    </div>
  );
}
