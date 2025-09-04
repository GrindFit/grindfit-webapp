import Head from "next/head";
import {
  UtensilsCrossed,
  Activity,
  CalendarCheck,
  LineChart,
  Users,
  Radar
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRINDFIT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ===== Top Navigation (brand left, tabs right) ===== */}
      <header className="gf-topnav">
        {/* Brand — left */}
        <a href="/" className="gf-brand" aria-label="GRINDFIT">
          GRINDFIT
        </a>

        {/* Tabs — right */}
        <nav className="gf-tabs" aria-label="Primary">
          <a href="#why" className="gf-tab">Why Grindfit</a>
          <a href="#nutrition" className="gf-tab">Nutrition</a>
          <a href="#reset" className="gf-tab">Reset &amp; Recover</a>
          <a href="#membership" className="gf-tab">Membership</a>

          <a href="/login" className="gf-login">Log in</a>
          <a href="/app" className="gf-cta">Open App</a>
        </nav>
      </header>

      <main>
        {/* ====== HERO (full-screen) ====== */}
        <section className="gf-section gf-hero" id="hero" aria-label="Hero">
          <div className="gf-inner">
            <div className="gf-hero-copy">
              <h1 className="gf-hero-h1">
                Train Hard.<br />
                Think Sharp.<br />
                Live <span className="gf-orange">Unstoppable</span>
              </h1>
              <p className="gf-hero-sub">
                A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
              </p>
              <a href="#plans" className="gf-cta gf-cta-lg">Start Your Transformation</a>
            </div>
          </div>
        </section>

        {/* ====== FEATURES (Everything You Need to Succeed) ====== */}
        <section className="gf-section gf-features" id="why" aria-label="Everything You Need to Succeed">
          <div className="gf-inner">
            <header className="gf-sechead">
              <h2 className="gf-h2">
                Everything You Need to <span className="gf-orange">Succeed</span>
              </h2>
              <p className="gf-sub">
                Built from 25 years of industry experience, our platform gives you the tools that have
                helped millions transform their lives.
              </p>
            </header>

            <div className="gf-grid">
              {/* 1 */}
              <article className="gf-card" data-color="orange">
                <div className="gf-ico" aria-hidden>
                  <UtensilsCrossed size={18} />
                </div>
                <h3 className="gf-card-title">Personalized Nutrition</h3>
                <p className="gf-card-body">
                  Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.
                </p>
              </article>

              {/* 2 */}
              <article className="gf-card" data-color="orange">
                <div className="gf-ico" aria-hidden>
                  <Activity size={18} />
                </div>
                <h3 className="gf-card-title">Smart Workouts</h3>
                <p className="gf-card-body">
                  AI-progressive programs that adapt to your progress — from beginner to elite athlete.
                </p>
              </article>

              {/* 3 */}
              <article className="gf-card" data-color="orange">
                <div className="gf-ico" aria-hidden>
                  <CalendarCheck size={18} />
                </div>
                <h3 className="gf-card-title">Weekly Planning</h3>
                <p className="gf-card-body">
                  See your complete roadmap. Plan sessions, track progress, and stay consistent week by week.
                </p>
              </article>

              {/* 4 */}
              <article className="gf-card" data-color="green">
                <div className="gf-ico" aria-hidden>
                  <LineChart size={18} />
                </div>
                <h3 className="gf-card-title">Real-time Tracking</h3>
                <p className="gf-card-body">
                  Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized beautifully.
                </p>
              </article>

              {/* 5 */}
              <article className="gf-card" data-color="green">
                <div className="gf-ico" aria-hidden>
                  <Users size={18} />
                </div>
                <h3 className="gf-card-title">Community Support</h3>
                <p className="gf-card-body">
                  Join a community that keeps you accountable, motivated, and inspired.
                </p>
              </article>

              {/* 6 */}
              <article className="gf-card" data-color="green">
                <div className="gf-ico" aria-hidden>
                  <Radar size={18} />
                </div>
                <h3 className="gf-card-title">Expert Guidance</h3>
                <p className="gf-card-body">
                  Decades of insight distilled into every feature. Trusted by thousands worldwide.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ===== other full-height sections continue below (Command Center, Plans, etc.) ===== */}
      </main>
    </>
  );
}
