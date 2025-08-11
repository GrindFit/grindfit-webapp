// pages/index.js
export default function Home() {
  return (
    <>
      <main className="min-h-screen hero-section text-white">
        {/* NAV */}
        <header className="max-w-[1200px] mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-orange-400 to-amber-600 shadow-lg shadow-orange-500/25" />
            <span className="text-lg font-semibold tracking-wide">
              <span className="gradient-text">GRINDFIT</span>
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm/6">
            <a href="#features" className="hover:text-orange-300 transition-colors">Features</a>
            <a href="#how" className="hover:text-orange-300 transition-colors">How it works</a>
            <a href="/onboarding" className="rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors border border-white/10">
              Open App
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Train Hard. <br />
              Think Sharp. <br />
              Live <span className="gradient-text">Unstoppable.</span>
            </h1>

            <p className="mt-5 text-white/80 max-w-xl">
              Psychology-driven fitness that upgrades body, mind, and lifestyle.
              Adaptive plans, habit cues, and recovery dialed to your schedule.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/onboarding"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 px-6 py-3 font-semibold shadow-lg shadow-orange-500/25 ring-1 ring-white/10 hover:scale-[1.02] transition-transform"
              >
                Start Your Transformation
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white/5 hover:bg-white/10 border border-white/10"
              >
                See Features
              </a>
            </div>

            {/* Social proof / mini stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                97% plan adherence after week 2
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                30-day adaptive progression
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Today</p>
                <h3 className="text-2xl font-bold">Week 1 · Day 1</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                Ready
              </span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="panel">
                <p className="label">Workout</p>
                <p className="title">EMOM Complex</p>
                <p className="sub">Kettlebell cleans, front squats, push press</p>
                <a href="/onboarding" className="btn-ghost mt-4">Start Workout</a>
              </div>

              <div className="panel">
                <p className="label">Mindset</p>
                <p className="title">Focus Cue</p>
                <p className="sub">Box breathing · 30s inhale/exhale</p>
                <a href="/onboarding" className="btn-ghost mt-4">Open Cue</a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="mini-stat">
                <p className="value">1</p>
                <p className="muted">day streak</p>
              </div>
              <div className="mini-stat">
                <p className="value">7+</p>
                <p className="muted">hrs sleep</p>
              </div>
              <div className="mini-stat">
                <p className="value">8,000</p>
                <p className="muted">steps</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why GrindFit works</h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            A system that adapts to your readiness and schedule—so you stay consistent and keep winning.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
                </svg>
              }
              title="Hyper-Personal Plans"
              desc="Plans tuned to your goal (Fat Loss, Lean Mass, Mass Gain), training days, and real-time readiness."
            />
            <Feature
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                </svg>
              }
              title="Mindset-First"
              desc="Micro-wins, breathing cues, and focus checks that lock in momentum and make progress inevitable."
            />
            <Feature
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v4H4zm0 6h16v10H4z" />
                </svg>
              }
              title="Lifestyle Upgrade"
              desc="Smart recovery, sleep targets, and simple meals. Keep energy high and stay on track."
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold">Your 30-day upgrade, zero guesswork</h2>
            <ol className="mt-6 grid sm:grid-cols-3 gap-6">
              <Step num="1" title="Onboard in 60s" desc="Pick goal, level, and training days." />
              <Step num="2" title="Generate Plan" desc="A tailored 30-day plan appears instantly." />
              <Step num="3" title="Win Daily" desc="Follow the day’s workout, cue, and targets." />
            </ol>

            <div className="mt-6">
              <a href="/onboarding" className="inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 px-6 py-3 font-semibold shadow-lg shadow-orange-500/25 ring-1 ring-white/10 hover:scale-[1.02] transition-transform">
                Start Now
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-[1200px] mx-auto px-4 py-12 text-white/60">
          <div className="h-px w-full bg-white/10 mb-6" />
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} GRINDFIT. Built to win.</p>
            <div className="flex items-center gap-5">
              <a className="hover:text-white transition-colors" href="/onboarding">Open App</a>
              <a className="hover:text-white transition-colors" href="#features">Features</a>
              <a className="hover:text-white transition-colors" href="#how">How it works</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* ---------- Small presentational helpers ---------- */

function Feature({ icon, title, desc }) {
  return (
    <div className="feature-card p-5 rounded-2xl border border-white/10">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/25">
          {icon}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <li className="panel p-5 rounded-xl border border-white/10">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/15 text-sm font-semibold">
          {num}
        </span>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-white/70 text-sm">{desc}</p>
    </li>
  );
}
