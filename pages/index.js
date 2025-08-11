export default function Home() {
  return (
    <main className="min-h-screen hero-section text-white">
      {/* Spacer to keep the logo/nav clear if you have one */}
      <div className="h-8" />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Train Hard.
          <br />
          Think <span className="text-white/90">Sharp</span>.
          <br />
          Live <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
            Unstoppable.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-neutral-200/80 text-base sm:text-lg">
          Psychology-driven fitness that upgrades body, mind, and lifestyle.
          Adaptive plans, habit cues, and recovery dialed to your schedule.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex gap-3">
          <a
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold
                       bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400
                       text-black shadow-[0_10px_30px_-10px_rgba(255,140,60,0.6)]
                       hover:brightness-110 active:translate-y-[1px] transition"
          >
            Start Your Transformation
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold
                       bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:bg-white/8 transition"
          >
            See Features
          </a>
        </div>
      </section>

      {/* Feature cards */}
      <section id="features" className="max-w-[1200px] mx-auto px-6 md:px-10 mt-16 sm:mt-20 md:mt-24 grid gap-4 md:gap-6 md:grid-cols-3">
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Hyper-Personal</h3>
          <p className="mt-2 text-sm text-neutral-300/80">
            Adaptive plans based on readiness and schedule.
          </p>
        </div>
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Mindset-First</h3>
          <p className="mt-2 text-sm text-neutral-300/80">
            Micro-wins, focus cues, and streaks that last.
          </p>
        </div>
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Lifestyle Upgrade</h3>
          <p className="mt-2 text-sm text-neutral-300/80">
            Nutrition, recovery, sleep, and stress — in one place.
          </p>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-16" />
    </main>
  );
}
