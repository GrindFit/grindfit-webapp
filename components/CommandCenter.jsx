export default function CommandCenter() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* LEFT: Today's Progress */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="mb-4 text-sm text-zinc-400 font-medium">Today’s Progress</p>

        <ProgressRow label="Steps" value={85} />
        <ProgressRow label="Water Intake" value={75} suffix="%" />
        <ProgressRow label="Calories" value={66} suffix="%" />

        <div className="mt-6 grid grid-cols-2 gap-4">
          <MiniStat label="Workouts" value="45" />
          <MiniStat label="lbs Lost" value="-12" />
        </div>
      </div>

      {/* MIDDLE: This Week's Plan */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="mb-4 text-sm text-zinc-400 font-medium">This Week’s Plan</p>

        <PlanRow
          day="Monday"
          title="Push Day – Chest & Triceps"
          meta="45 min"
          active
        />
        <PlanRow day="Tuesday" title="Pull Day – Back & Biceps" meta="50 min" />
        <PlanRow day="Wednesday" title="Leg Day – Quads & Glutes" meta="60 min" />
        <PlanRow day="Thursday" title="Cardio & Core" meta="30 min" />
        <PlanRow day="Friday" title="Full Body HIIT" meta="40 min" />
      </div>

      {/* RIGHT: Nutrition Goals */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="mb-4 text-sm text-zinc-400 font-medium">Nutrition Goals</p>

        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">
          <div className="text-4xl font-extrabold text-white">2,156</div>
          <div className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
            calories remaining
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-left">
            <MacroBox label="Protein" value="120g" />
            <MacroBox label="Carbs" value="280g" />
            <MacroBox label="Fat" value="75g" />
          </div>
        </div>
      </div>

      {/* FULL-WIDTH CTA ROW */}
      <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--gf-orange-start)]/15 via-[var(--gf-orange-mid)]/10 to-transparent p-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm text-zinc-300">Ready for today’s workout?</p>
            <p className="text-xs text-zinc-400">
              45 min Push Day · Chest &amp; Triceps
            </p>
          </div>

          <button className="gf-cta rounded-xl bg-[var(--gf-btn)] px-5 py-3 font-semibold text-black hover:brightness-105">
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small, local UI helpers ---------- */

function ProgressRow({ label, value, suffix = "%" }) {
  // value: 0 - 100
  const display = Math.max(0, Math.min(100, value));
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
        <span>{label}</span>
        <span>{display}{suffix}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-[var(--gf-orange-mid)]"
          style={{ width: `${display}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{label}</div>
    </div>
  );
}

function PlanRow({ day, title, meta, active = false }) {
  return (
    <div
      className={`mt-2 rounded-xl border p-4 ${
        active
          ? "border-[var(--gf-orange-mid)]/40 bg-white/5"
          : "border-white/10 bg-black/20"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">{day}</div>
          <div className="text-xs text-zinc-400">{title}</div>
        </div>
        <div className="text-xs text-zinc-400">{meta}</div>
      </div>
    </div>
  );
}

function MacroBox({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{label}</div>
    </div>
  );
}
