// pages/index.jsx
import Head from "next/head";

// local components (explicit .jsx to be case-safe for Vercel)
import Brand from "../components/Brand.jsx";
import CommandCenter from "../components/CommandCenter.jsx";
import Plans from "../components/Plans.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Scroll-snap container so every section is a full page */}
      <main className="gf-snap">
        {/* ===================== HERO ===================== */}
        <section className="gf-section gf-hero">
          {/* top nav */}
          <header className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Brand />
                <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
                  <a className="hover:text-white" href="#why">Why GrindFit</a>
                  <a className="hover:text-white" href="#nutrition">Nutrition</a>
                  <a className="hover:text-white" href="#reset">Reset &amp; Recover</a>
                  <a className="hover:text-white" href="#membership">Membership</a>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <a className="text-white/80 hover:text-white text-sm" href="/member">Log in</a>
                <a className="gf-cta" href="/member">Open App</a>
              </div>
            </div>
          </header>

          {/* hero content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-black tracking-tight leading-[1.05] text-[44px] sm:text-[60px] lg:text-[74px] text-white">
              Train Hard.<br />
              Think Sharp.<br />
              Live <span className="gf-gradient-text">Unstoppable</span>
            </h1>

            <p className="mt-5 max-w-xl text-white/80">
              A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
            </p>

            <div className="mt-8">
              <a href="#features" className="gf-cta">Start Your Transformation</a>
            </div>
          </div>

          {/* soft ambient blocks (beneath text) */}
          <div className="gf-hero-decos" aria-hidden="true">
            <span className="gf-hero-deco" />
            <span className="gf-hero-deco" />
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section id="features" className="gf-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="gf-section-title text-center">
              Everything You Need to <span className="gf-gradient-text">Succeed</span>
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Personalized Nutrition", body: "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.", color: "orange" },
                { title: "Smart Workouts", body: "Adaptive programs that adjust to your progress — from beginner to elite athlete.", color: "orange" },
                { title: "Real-time Tracking", body: "Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized.", color: "green" },
                { title: "Community Support", body: "Join a community that keeps you accountable, motivated, and inspired.", color: "green" },
                { title: "Weekly Planning", body: "See your complete roadmap, plan sessions, track progress, and stay consistent week by week.", color: "orange" },
                // bottom-right = green per your instruction
                { title: "Expert Guidance", body: "Decades of insight distilled into every feature. Trusted by thousands.", color: "green" },
              ].map((f, i) => (
                <div key={i} className="gf-feature">
                  <div className={`gf-icon ${f.color === "green" ? "gf-icon--green" : "gf-icon--orange"}`} />
                  <h3 className="mt-4 font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-white/75">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== COMMAND CENTER ===================== */}
        <section id="command" className="gf-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="gf-section-title text-center">Your Fitness <span className="gf-gradient-text">Command Center</span></h2>
            <CommandCenter />
          </div>
        </section>

        {/* ===================== PLANS ===================== */}
        <section id="plans" className="gf-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="gf-section-title text-center">Choose Your <span className="gf-gradient-text">Transformation Plan</span></h2>
            <Plans />
          </div>
        </section>
      </main>
    </>
  );
}
