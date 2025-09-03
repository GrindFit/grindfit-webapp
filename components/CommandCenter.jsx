// components/CommandCenter.jsx
import { CheckCircle2, PlayCircle, Dumbbell, Scale, Droplets } from "lucide-react";

function StatBar({ label, valueLabel, pct, color = "orange" }) {
  const grad =
    color === "green"
      ? "linear-gradient(90deg,#22c55e 0%,#10b981 50%,#059669 100%)"
      : "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)";
  return (
    <div className="space-y-1">
      <div className="flex items-end justify-between text-zinc-300 text-xs">
        <span>{label}</span>
        <span className="font-medium text-white">{valueLabel}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-800/70 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: grad }}
        />
      </div>
    </div>
  );
}

function MiniCard({ value, label, color = "orange" }) {
  const grad =
    color === "green"
      ? "linear-gradient(90deg,#22c55e 0%,#10b981 50%,#059669 100%)"
      : "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)";
  return (
    <div className="flex-1 rounded-xl bg-zinc-900/60 ring-1 ring-white/5 p-3 text-center">
      <div
        className="mx-auto mb-2 inline-flex items-center justify-center rounded-full w-10 h-10 text-black font-bold"
        style={{ background: grad }}
      >
        {value}
      </div>
      <div className="text-xs text-zinc-400">{label}</div>
    </div>
  );
}

function DayRow({ day, title, status }) {
  // status: "done" | "next" | "upcoming"
  const icon =
    status === "done" ? (
      <CheckCircle2 className="w-4 h-4" />
    ) : status === "next" ? (
      <PlayCircle className="w-4 h-4" />
    ) : null;

  const gradDone = "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)";
  const gradNext = "linear-gradient(90deg,#22c55e 0%,#10b981 50%,#059669 100%)";

  return (
    <div className="flex items-center justify-between rounded-lg bg-zinc-900/60 ring-1 ring-white/5 px-3 py-2">
      <div className="min-w-0">
        <div className="text-xs text-zinc-400">{day}</div>
        <div className="truncate font-medium text-white">{title}</div>
      </div>

      {status !== "upcoming" && (
        <div
          className="ml-3 inline-flex items-center justify-center rounded-full w-8 h-8 text-black"
          style={{ background: status === "done" ? gradDone : gradNext }}
          title={status === "done" ? "Completed" : "Up next"}
        >
          {icon}
        </div>
      )}
    </div>
  );
}

export default function CommandCenter() {
  return (
    <section id="command" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Your Fitness{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
            }}
          >
            Command Center
          </span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Today’s Progress */}
          <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-white/5 p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-zinc-400" />
              Today’s Progress
            </h3>

            {/* Bars w/ numbers */}
            <div className="space-y-4">
              <StatBar label="Steps" valueLabel="6,700 / 10,000" pct={67} />
              <StatBar
                label="Water"
                valueLabel="2 L / 4 L"
                pct={50}
                color="green"
              />
              <StatBar label="Calories" valueLabel="1,950 / 2,500" pct={78} />
              {/* New: Weight metric (just a readout line) */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Scale className="w-4 h-4 text-zinc-500" />
                  <span>Weight</span>
                </div>
                <span className="text-white text-sm font-medium">72 kg</span>
              </div>
            </div>

            {/* Mini cards */}
            <div className="mt-5 flex gap-3">
              <MiniCard value="45" label="Workouts" color="green" />
              <MiniCard value="-12 kg" label="Weight Lost" color="orange" />
            </div>
          </div>

          {/* Middle: This Week’s Plan */}
          <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-white/5 p-5">
            <h3 className="text-white font-semibold mb-4">This Week’s Plan</h3>
            <div className="space-y-2">
              <DayRow day="Monday" title="Push Day — Chest & Triceps" status="done" />
              <DayRow day="Tuesday" title="Pull Day — Back & Biceps" status="done" />
              <DayRow day="Wednesday" title="Leg Day — Quads & Glutes" status="next" />
              <DayRow day="Thursday" title="Cardio & Core" status="upcoming" />
              <DayRow day="Friday" title="Full Body HIIT" status="upcoming" />
            </div>
          </div>

          {/* Right: Nutrition Goals (unchanged look) */}
          <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-white/5 p-5">
            <h3 className="text-white font-semibold mb-4">Nutrition Goals</h3>

            <div className="rounded-xl bg-zinc-900/80 ring-1 ring-white/5 p-6 text-center">
              <div className="text-3xl font-extrabold text-white">2,156</div>
              <div className="text-xs text-zinc-400">calories remaining</div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-zinc-950/60 p-3">
                  <div
                    className="mx-auto mb-2 inline-flex items-center justify-center rounded-full w-8 h-8 text-black"
                    style={{
                      background:
                        "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
                    }}
                  >
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-white">120g</div>
                  <div className="text-[11px] text-zinc-400">Protein</div>
                </div>
                <div className="rounded-lg bg-zinc-950/60 p-3">
                  <div
                    className="mx-auto mb-2 inline-flex items-center justify-center rounded-full w-8 h-8 text-black"
                    style={{
                      background:
                        "linear-gradient(90deg,#22c55e 0%,#10b981 50%,#059669 100%)",
                    }}
                  >
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-white">280g</div>
                  <div className="text-[11px] text-zinc-400">Carbs</div>
                </div>
                <div className="rounded-lg bg-zinc-950/60 p-3">
                  <div
                    className="mx-auto mb-2 inline-flex items-center justify-center rounded-full w-8 h-8 text-black"
                    style={{
                      background:
                        "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
                    }}
                  >
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-white">75g</div>
                  <div className="text-[11px] text-zinc-400">Fat</div>
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-xl px-4 py-2 font-semibold text-black shadow ring-1 ring-black/10"
                style={{
                  background:
                    "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
                }}
              >
                Start Workout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
