// pages/index.jsx
import Head from "next/head";
import CommandCenter from "../components/CommandCenter.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRINDFIT — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Scroll-snap container: each section is a full page */}
      <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory">

        {/* ===== HERO (full page) ===== */}
        <section className="snap-start min-h-screen flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            {/* Top bar (brand + simple nav). If you already have a site-wide Nav, this row will just sit quietly. */}
            <div className="flex items-center justify-between pt-6">
              <div className="text-xl sm:text-2xl font-black tracking-tight">
                <span className="gf-gradient-text">GRINDFIT</span>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                <a className="hover:text-white/90" href="#why">Why GrindFit</a>
                <a className="hover:text-white/90" href="#nutrition">Nutrition</a>
                <a className="hover:text-white/90" href="#reset">Reset &amp; Recover</a>
                <a className="hover:text-white/90" href="#membership">Membership</a>
                <div className="flex items-center gap-2">
                  <a href="/login" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">Log in</a>
                  <a href="/app" className="px-4 py-2 rounded-xl bg-[var(--gf-btn)] hover:brightness-105 text-black font-semibold text-[13px] shadow-[0_8px_20px_rgba(255,122,26,.25)]">
                    Open App
                  </a>
                </div>
              </nav>
            </div>

            {/* Left-aligned headline/CTA */}
            <div className="mt-16 md:mt-24 max-w-3xl">
              <h1 className="font-black leading-tight text-white text-[42px] sm:text-[56px] md:text-[68px]">
                Train Hard.
                <br />
                Think Sharp.
                <br />
                Live <span className="gf-gradient-text">Unstoppable</span>
              </h1>

              <p className="mt-5 text-zinc-300 max-w-xl">
                A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
              </p>

              <div className="mt-8">
                <a
                  href="#features"
                  className="gf-cta px-6 py-3 rounded-xl font-semibold text-black bg-[var(--gf-btn)] hover:brightness-105 shadow-[0_8px_20px_rgba(255,122,26,.25)]"
                >
                  Start Your Transformation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES (full page) ===== */}
        <section id="features" className="snap-start min-h-screen flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            <h2 className="text-center font-black text-white text-[30px] sm:text-[36px] md:text-[42px]">
              Everything You Need to <span className="gf-gradient-text">Succeed</span>
            </h2>

            {/* 6 feature cards – real icons, bigger + glow */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                color="orange"
                title="Personalized Nutrition"
                copy="Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly."
                icon="apple"
              />
              <Feature
                color="orange"
                title="Smart Workouts"
                copy="Adaptive programs that adjust to your progress—from beginner to elite athlete."
                icon="dumbbell"
              />
              <Feature
                color="orange"
                title="Real-time Tracking"
                copy="Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized."
                icon="activity"
              />
              <Feature
                color="green"
                title="Community Support"
                copy="Join a community that keeps you accountable, motivated, and inspired."
                icon="users"
              />
              <Feature
                color="green"
                title="Weekly Planning"
                copy="See your complete roadmap, plan sessions, track progress, and stay consistent week by week."
                icon="calendar"
              />
              <Feature
                color="green"
                title="Expert Guidance"
                copy="Decades of insight distilled into every feature. Trusted by thousands."
                icon="target"
              />
            </div>
          </div>
        </section>

        {/* ===== COMMAND CENTER (full page) ===== */}
        <section className="snap-start min-h-screen flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            <CommandCenter />
          </div>
        </section>

        {/* ===== PRICING (full page) ===== */}
        <section id="membership" className="snap-start min-h-screen flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            <h2 className="text-center font-black text-white text-[30px] sm:text-[36px] md:text-[42px]">
              Choose Your <span className="gf-gradient-text">Transformation Plan</span>
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <PlanCard period="1 MONTH" price="$19" cta="Start Free Trial" features={[
                "Basic workout plans",
                "Nutrition tracking",
                "Daily metrics logging",
                "Mobile app access",
                "Community support"
              ]} />
              <PlanCard period="3 MONTHS" price="$39" tag="Most Popular" accent="orange" cta="Start Free Trial" features={[
                "Everything in 1 Month",
                "AI-progressive programming",
                "Personalized meal planning",
                "Advanced analytics",
                "Priority support"
              ]} />
              <PlanCard period="6 MONTHS" price="$59" cta="Start Free Trial" features={[
                "Everything in 3 Months",
                "1-on-1 personal coaching",
                "Custom workout design",
                "Advanced biometrics",
                "Nutrition consultations"
              ]} />
              <PlanCard period="12 MONTHS" price="$79" cta="Start Free Trial" features={[
                "All Elite features",
                "Exclusive live workshops",
                "Elite community access",
                "Goal setting sprints",
                "Priority new features"
              ]} />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

/* ---------- Helpers ---------- */

function Feature({ color = "orange", title, copy, icon }) {
  const chip =
    color === "green"
      ? "from-[var(--gf-green-start)] via-[var(--gf-green-mid)] to-[var(--gf-green-end)] shadow-[0_12px_30px_rgba(46,213,115,.18)]"
      : "from-[var(--gf-orange-start)] via-[var(--gf-orange-mid)] to-[var(--gf-orange-end)] shadow-[0_12px_30px_rgba(255,122,26,.22)]";

  return (
    <div className="relative rounded-2xl bg-white/[0.03] p-5 border border-white/5 hover:bg-white/[0.045] transition">
      <div className={`w-12 h-12 rounded-xl grid place-items-center text-white bg-gradient-to-br ${chip} mb-4`}>
        <SvgIcon name={icon} className="w-6 h-6" />
      </div>

      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{copy}</p>
    </div>
  );
}

function PlanCard({ period, price, tag, accent = "green", cta, features }) {
  const glow =
    accent === "orange"
      ? "shadow-[0_18px_40px_rgba(255,122,26,.15)]"
      : "shadow-[0_18px_40px_rgba(46,213,115,.12)]";

  return (
    <div className={`rounded-2xl bg-white/[0.03] p-6 border border-white/5 ${glow}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-wide text-zinc-400">{period}</span>
        {tag && (
          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold text-black bg-gradient-to-br from-[var(--gf-orange-start)] via-[var(--gf-orange-mid)] to-[var(--gf-orange-end)]">
            {tag}
          </span>
        )}
      </div>
      <div className="mt-4 text-4xl font-black text-white">{price}<span className="text-sm font-semibold text-zinc-400 align-super">/month</span></div>

      <ul className="mt-5 space-y-2 text-sm text-zinc-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            {/* small circle ticks */}
            <span className={`mt-1 inline-block w-2.5 h-2.5 rounded-full ${accent === "orange" ? "bg-[var(--gf-orange-mid)]" : "bg-[var(--gf-green-mid)]"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full rounded-xl px-4 py-2 text-black font-semibold bg-[var(--gf-btn)] hover:brightness-105">
        {cta}
      </button>
    </div>
  );
}

// Minimal inline icons (no new deps)
function SvgIcon({ name, className }) {
  switch (name) {
    case "apple":      return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 13c-1.333.667-2.667.667-4 0M12 5c.8-2.5 3-3 4-3-.2 1.4-1.2 3-4 3Zm6.5 6.5c0 5-3 8.5-6.5 8.5S5.5 16.5 5.5 11 8.5 3 12 3s6.5 3.5 6.5 8.5Z"/></svg>);
    case "dumbbell":  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M6 10v4M18 10v4M3 10v4m18-4v4M8 12h8"/></svg>);
    case "activity":  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 12h4l2-6 4 12 2-6h4"/></svg>);
    case "users":     return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    case "calendar":  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>);
    case "target":    return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M22 12h-2M4 12H2M12 2v2M12 20v2"/></svg>);
    default:          return null;
  }
}
