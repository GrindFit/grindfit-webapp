// components/CommandCenter.jsx
export default function CommandCenter() {
  return (
    <section id="dashboard" className="relative py-20">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10">
        <span className="gf-gradient-text">Your Fitness</span>{" "}
        <span>Command Center</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Card 1 — Today's Progress */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <p className="text-sm text-white/70 mb-4">Today&apos;s Progress</p>
          <div className="space-y-5">
            <ProgressRow label="Steps" value={85} />
            <ProgressRow label="Water Intake" value={75} />
            <ProgressRow label="Calories" value={66} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <MiniStat value="45" label="Workouts" />
            <MiniStat value="-12" label="lbs Lost" />
          </div>
        </div>

        {/* Card 2 — This Week's Plan */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <p className="text-sm text-white/70 mb-4">This Week&apos;s Plan</p>
          <ul className="space-y-3 text-sm">
            {[
              ["Monday", "Push Day • Chest & Triceps", "45 min"],
              ["Tuesday", "Pull Day • Back & Biceps", "50 min"],
              ["Wednesday", "Leg Day • Quads & Glutes", "60 min"],
              ["Thursday", "Cardio & Core", "30 min"],
              ["Friday", "Full Body • HIIT", "40 min"],
            ].map(([day, title, dur]) => (
              <li
                key={day}
                className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3"
              >
                <div>
                  <div className="text-white">{day}</div>
                  <div className="text-white/60 text-xs">{title}</div>
                </div>
                <div className="text-white/60 text-xs">{dur}</div>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl p-5 text-center bg-gradient-to-b from-[var(--gf-orange-start)] to-[var(--gf-orange-end)] text-black">
            <div className="text-sm font-medium mb-1">
              Ready for today&apos;s workout?
            </div>
            <div className="text-xs mb-3">45 min Push Day • Chest & Triceps</div>
            <a
              href="#join"
              className="inline-flex items-center rounded-full bg-black/90 text-white px-4 py-2 text-sm"
            >
              Start Workout
            </a>
          </div>
        </div>

        {/* Card 3 — Nutrition Goals */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <p className="text-sm text-white/70 mb-4">Nutrition Goals</p>

          <div className="rounded-xl bg-white/[0.04] p-4 text-center mb-4">
            <div className="text-3xl font-extrabold text-white">2,156</div>
            <div className="text-xs text-white/60">calories remaining</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["120g", "Protein"],
              ["280g", "Carbs"],
              ["75g", "Fat"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-xl bg-white/[0.04] p-3 text-center"
              >
                <div className="text-lg font-bold text-white">{v}</div>
                <div className="text-[11px] text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressRow({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-white/60 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Bar value={value} />
    </div>
  );
}

function Bar({ value }) {
  return (
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-[var(--gf-orange-end)]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-3">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
}
