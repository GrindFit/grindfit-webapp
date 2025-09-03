// components/CommandCenter.jsx
import { CheckCircle2, PlayCircle } from "lucide-react";

export default function CommandCenter() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr_0.9fr]">
      {/* Today's Progress */}
      <div className="gf-panel">
        <div className="text-sm font-semibold text-neutral-200">Today’s Progress</div>

        <Bar label="Steps" value={67} sub="6,700 / 10,000" color="orange" />
        <Bar label="Water" value={50} sub="2 L / 4 L" color="green" />
        <Bar label="Calories" value={78} sub="1,950 / 2,500" color="orange" />
        {/* weight bar specifically green per request */}
        <Bar label="Weight" value={72} sub="72 kg" color="green" />

        <div className="mt-5 grid grid-cols-2 gap-3">
          <MiniStat label="Workouts" value="45" tone="orange" />
          <MiniStat label="kg lost" value="-12" tone="green" />
        </div>
      </div>

      {/* This Week's Plan */}
      <div className="gf-panel">
        <div className="text-sm font-semibold text-neutral-200">This Week’s Plan</div>

        <PlanRow day="Monday"   title="Push Day — Chest & Triceps"  status="done" />
        <PlanRow day="Tuesday"  title="Pull Day — Back & Biceps"   status="next" />
        <PlanRow day="Wednesday" title="Leg Day — Quads & Glutes"  />
        <PlanRow day="Thursday" title="Cardio & Core" />
        <PlanRow day="Friday"   title="Full Body HIIT" />
      </div>

      {/* Nutrition Goals */}
      <div className="gf-panel">
        <div className="text-sm font-semibold text-neutral-200">Nutrition Goals</div>

        <div className="mt-4 rounded-lg bg-neutral-900/50 p-5 text-center">
          <div className="text-xs text-neutral-400">CALORIES REMAINING</div>
          <div className="mt-1 text-3xl font-black text-white">2,156</div>
        </div>

        {/* gradient numbers (no squares above) */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-neutral-900/40 p-3 text-center">
            <div className="text-xs text-neutral-400">Protein</div>
            <div className="gf-num--orange text-2xl font-extrabold">120g</div>
          </div>
          <div className="rounded-lg bg-neutral-900/40 p-3 text-center">
            <div className="text-xs text-neutral-400">Carbs</div>
            <div className="gf-num--green text-2xl font-extrabold">280g</div>
          </div>
          <div className="rounded-lg bg-neutral-900/40 p-3 text-center">
            <div className="text-xs text-neutral-400">Fat</div>
            <div className="gf-num--orange text-2xl font-extrabold">75g</div>
          </div>
        </div>

        <button className="mt-5 w-full gf-cta">Start Workout</button>
      </div>
    </div>
  );
}

/* ---------- small bits ---------- */

function Bar({ label, value, sub, color }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-neutral-400">
        <span>{label}</span>
        <span>{sub}</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-neutral-800">
        <div
          className={`h-2 rounded-full ${color === "green" ? "gf-bar--green" : "gf-bar--orange"}`}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value, tone = "orange" }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-xl bg-neutral-900/50 p-4">
      <div className={`gf-mini ${tone === "green" ? "gf-mini--green" : "gf-mini--orange"}`}>
        {value}
      </div>
      <div className="text-sm font-semibold text-white">{label}</div>
    </div>
  );
}

function PlanRow({ day, title, status }) {
  const chip =
    status === "done" ? (
      <div className="gf-dot gf-dot--orange" aria-label="completed" />
    ) : status === "next" ? (
      <div className="gf-play">
        {/* explicitly green play for Tuesday */}
        <PlayCircle size={16} />
      </div>
    ) : (
      <div className="gf-dot" />
    );

  return (
    <div className="mt-3 flex items-center justify-between rounded-lg bg-neutral-900/40 p-3">
      <div>
        <div className="text-xs text-neutral-400">{day}</div>
        <div className="text-sm font-medium text-neutral-100">{title}</div>
      </div>
      {chip}
    </div>
  );
}
