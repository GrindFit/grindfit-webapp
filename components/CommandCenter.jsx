// components/CommandCenter.jsx
import { CheckCircle, Flame } from "lucide-react";

export default function CommandCenter() {
  // fake example values; wire these to real data whenever you want
  const steps = { current: 6700, goal: 10000 };
  const water = { current: 2, goal: 4, unit: "L" };
  const calories = { current: 1950, goal: 2500 };

  const week = [
    { day: "Monday", title: "Push Day · Chest & Triceps", done: true },
    { day: "Tuesday", title: "Pull Day · Back & Biceps", next: true },
    { day: "Wednesday", title: "Leg Day · Quads & Glutes" },
    { day: "Thursday", title: "Cardio & Core" },
    { day: "Friday", title: "Full Body HIIT" },
  ];

  return (
    <section className="relative py-16 sm:py-18 md:py-22">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-white">
          Your Fitness <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] bg-clip-text text-transparent">Command Center</span>
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* LEFT – stats as NUMBERS */}
          <div className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-white/80 mb-4">Today’s Progress</h3>

            <div className="space-y-4">
              <Stat label="Steps" value={`${steps.current.toLocaleString()} / ${steps.goal.toLocaleString()}`} />
              <Stat label="Water Intake" value={`${water.current}${water.unit} / ${water.goal}${water.unit}`} />
              <Stat label="Calories" value={`${calories.current.toLocaleString()} / ${calories.goal.toLocaleString()}`} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniStat label="Workouts" value="45" />
              <MiniStat label="lbs lost" value="-12" negative />
            </div>
          </div>

          {/* MIDDLE – week plan (orange complete, green next) */}
          <div className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-white/80 mb-4">This Week’s Plan</h3>
            <div className="space-y-3">
              {week.map((w, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 text-sm transition
                    ${w.done ? "border-amber-500/30 bg-amber-500/5" : w.next ? "border-emerald-500/30 bg-emerald-500/5" : "border-white/10 bg-white/0"}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-white/90">{w.day}</div>
                    {w.done && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] px-2 py-0.5 text-[11px] font-semibold text-black">
                        <Flame size={14} /> Done
                      </span>
                    )}
                    {w.next && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-2 py-0.5 text-[11px] font-semibold text-black">
                        Next
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-white/70">{w.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – nutrition with O/G/O badges */}
          <div className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-white/80 mb-4">Nutrition Goals</h3>

            <div className="rounded-xl border border-white/10 bg-white/0 p-5">
              <div className="text-3xl font-black text-white">2,156</div>
              <div className="text-xs uppercase tracking-wide text-white/60">calories remaining</div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Macro label="Protein" value="120g" color="orange" />
                <Macro label="Carbs" value="280g" color="green" />
                <Macro label="Fat" value="75g" color="orange" />
              </div>
            </div>

            <button
              className="mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold text-black
                         bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] hover:brightness-105 transition"
            >
              Start Workout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/0 px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/60">{label}</span>
      <span className="text-[15px] font-semibold text-white">{value}</span>
    </div>
  );
}

function MiniStat({ label, value, negative = false }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/0 p-4 text-center">
      <div className={`mx-auto grid h-10 w-10 place-items-center rounded-full ${negative ? "bg-rose-500/15 text-rose-300" : "bg-emerald-500/15 text-emerald-300"}`}>
        {negative ? "–" : "+"}
      </div>
      <div className="mt-2 text-xl font-extrabold text-white">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

function Macro({ label, value, color = "orange" }) {
  const pill =
    color === "green"
      ? "from-emerald-400 to-emerald-500"
      : "from-[#FF7A18] to-[#FFA24A]";
  return (
    <div className="rounded-xl border border-white/10 bg-white/0 p-3">
      <div className={`mx-auto w-fit rounded-md bg-gradient-to-r ${pill} px-2 py-0.5 text-[11px] font-bold text-black`}>
        {value}
      </div>
      <div className="mt-1 text-[12px] uppercase tracking-wide text-white/60">{label}</div>
    </div>
  );
}
