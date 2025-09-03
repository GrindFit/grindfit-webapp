// components/CommandCenter.jsx
import React from "react";

export default function CommandCenter() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr_0.9fr]">
      {/* Progress */}
      <div className="gf-card rounded-2xl p-6">
        <h3 className="font-semibold text-white/90">Today’s Progress</h3>

        <div className="mt-5 space-y-4">
          <Bar label="Steps" value={6700} max={10000} tone="orange" />
          <Bar label="Water" value={2} max={4} tone="green" unit="L" />
          <Bar label="Calories" value={1950} max={2500} tone="orange" />
          {/* weight bar explicitly green as requested */}
          <Bar label="Weight" value={72} max={80} tone="green" unit="kg" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <MiniStat label="Workouts" value="45" tone="orange" />
          <MiniStat label="kg lost" value="-12" tone="green" />
        </div>
      </div>

      {/* Week plan */}
      <div className="gf-card rounded-2xl p-6">
        <h3 className="font-semibold text-white/90">This Week’s Plan</h3>
        <ul className="mt-4 space-y-3">
          {[
            ["Monday", "Push Day — Chest & Triceps", "done"],
            ["Tuesday", "Pull Day — Back & Biceps", "next"],
            ["Wednesday", "Leg Day — Quads & Glutes", "todo"],
            ["Thursday", "Cardio & Core", "todo"],
            ["Friday", "Full Body HIIT", "todo"],
          ].map(([day, label, state]) => (
            <li
              key={day}
              className="flex items-center justify-between rounded-xl bg-white/3 px-4 py-3 ring-1 ring-black/5"
            >
              <div>
                <p className="text-sm font-semibold text-white">{day}</p>
                <p className="text-xs text-[#9BA3AF]">{label}</p>
              </div>

              {/* badge on the right: orange check for completed, black/white play for next, subtle dot for todo */}
              {state === "done" ? (
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--gf-orange-start),var(--gf-orange-end))] shadow-[0_0_0_2px_#0b0f12]">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    className="text-black"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M20.285 6.709a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0l-5.364-5.364a1 1 0 111.414-1.414l4.657 4.657 8.486-8.486a1 1 0 011.414 0z"
                    />
                  </svg>
                </span>
              ) : state === "next" ? (
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    className="text-white"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M8 5v14l11-7z"
                    />
                  </svg>
                </span>
              ) : (
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/20" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Nutrition */}
      <div className="gf-card rounded-2xl p-6">
        <h3 className="font-semibold text-white/90">Nutrition Goals</h3>

        <div className="mt-5 rounded-2xl bg-black/30 p-5 text-center ring-1 ring-black/10">
          <p className="text-sm text-[#9BA3AF]">CALORIES REMAINING</p>
          <p className="mt-1 text-4xl font-extrabold text-white">2,156</p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <Macro label="Protein" value="120g" tone="orange" />
          <Macro label="Carbs" value="280g" tone="green" />
          <Macro label="Fat" value="75g" tone="orange" />
        </div>

        <button className="gf-cta mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold text-black">
          Start Workout
        </button>
      </div>
    </div>
  );
}

/* ——— subcomponents ——— */

function Bar({ label, value, max, tone, unit }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const grad =
    tone === "green"
      ? "bg-[linear-gradient(90deg,var(--gf-green-start),var(--gf-green-end))]"
      : "bg-[linear-gradient(90deg,var(--gf-orange-start),var(--gf-orange-end))]";
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-white/90">{label}</span>
        <span className="text-[#9BA3AF]">
          {value}
          {unit ? ` ${unit}` : ""} / {max}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>
      <div className="mt-2 h-2.5 w-full rounded-full bg-white/10">
        <div
          className={`h-2.5 rounded-full ${grad}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value, tone }) {
  const grad =
    tone === "green"
      ? "bg-[linear-gradient(135deg,var(--gf-green-start),var(--gf-green-end))]"
      : "bg-[linear-gradient(135deg,var(--gf-orange-start),var(--gf-orange-end))]";
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl bg-black/30 p-4 ring-1 ring-black/10">
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${grad} text-black font-bold`}>
        {typeof value === "string" ? value : String(value)}
      </span>
      <span className="text-sm text-[#9BA3AF]">{label}</span>
    </div>
  );
}

function Macro({ label, value, tone }) {
  const grad =
    tone === "green"
      ? "bg-[linear-gradient(135deg,var(--gf-green-start),var(--gf-green-end))]"
      : "bg-[linear-gradient(135deg,var(--gf-orange-start),var(--gf-orange-end))]";
  return (
    <div className="rounded-xl bg-black/30 p-3 text-center ring-1 ring-black/10">
      <div className={`mx-auto mb-2 h-7 w-7 rounded-md ${grad}`} />
      <div className="text-xs text-[#9BA3AF]">{label}</div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
