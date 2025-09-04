// pages/index.jsx
import React from "react";
import {
  Utensils,
  Activity,
  BarChart3,
  Users,
  CalendarClock,
  Zap,
  Play,
} from "lucide-react";

const FEATS = [
  { title: "Personalized Nutrition", copy: "Custom meal plans based on your goals, fitness level, and preferences. Track macros effortlessly.", Icon: Utensils },
  { title: "Smart Workouts", copy: "Adaptive programs that adjust to your progress—from beginner to elite.", Icon: Activity },
  { title: "Weekly Planning", copy: "See your complete roadmap, plan sessions, track progress, and stay consistent.", Icon: CalendarClock },
  { title: "Real-time Tracking", copy: "Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized.", Icon: BarChart3 },
  { title: "Community Support", copy: "Join a community that keeps you accountable, motivated, and inspired.", Icon: Users },
  { title: "Expert Guidance", copy: "Decades of insight distilled into every feature. Trusted by thousands.", Icon: Zap },
];

export default function Home() {
  return (
    <main>
      {/* Top nav: brand left, tabs right */}
      <header className="gf-topnav">
        <div className="gf-inner">
          <div className="gf-brand">GRINDFIT</div>
          <nav className="gf-tabs">
            <a href="#why" className="gf-tab">Why Grindfit</a>
            <a href="#nutrition" className="gf-tab">Nutrition</a>
            <a href="#reset" className="gf-tab">Reset & Recover</a>
            <a href="#membership" className="gf-tab">Membership</a>
            <a href="/login" className="gf-login">Log in</a>
            <a href="/app" className="gf-cta">Open App</a>
          </nav>
        </div>
      </header>

      {/* SECTION 1 – Hero */}
      <section className="gf-section gf-hero">
        <div className="gf-inner">
          <h1 className="gf-hero-title">
            Train Hard.<br />
            Think Sharp.<br />
            Live <span className="gf-orange-grad-text">Unstoppable</span>
          </h1>
          <p className="gf-hero-sub">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
            Built to win.
          </p>
          <a href="#plans" className="gf-cta gf-hero-cta">Start Your Transformation</a>
        </div>
      </section>

      {/* SECTION 2 – Features (6 cards, exact sizes) */}
      <section id="why" className="gf-section">
        <div className="gf-inner">
          <h2 className="gf-center-title">
            Everything You Need to <span className="gf-orange-grad-text">Succeed</span>
          </h2>

          <ul className="gf-feat-grid">
            {FEATS.map(({ title, copy, Icon }, i) => (
              <li key={title} className="gf-feat-card">
                <div className="gf-feature-icon">
                  <Icon />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3 – Command Center (with new Nutrition box) */}
      <section id="command-center" className="gf-section">
        <div className="gf-inner">
          <div className="gf-section-lead">
            <h2>
              Your Fitness <span className="gf-orange-grad-text">Command Center</span>
            </h2>
            <p>
              Experience the dashboard that will guide you to your goals.
              Track everything that matters in one beautiful interface.
            </p>
          </div>

          <div className="gf-cc-grid">
            {/* Progress card */}
            <div className="gf-card">
              <h3>Today’s Progress</h3>
              <div className="gf-metrics">
                <div className="gf-metric">
                  <span>Steps</span>
                  <div className="gf-bar gf-bar-orange" style={{ ["--val"]: "67%" }} />
                  <span className="gf-num">6,700 / 10,000</span>
                </div>
                <div className="gf-metric">
                  <span>Water</span>
                  <div className="gf-bar gf-bar-green" style={{ ["--val"]: "50%" }} />
                  <span className="gf-num">2 L / 4 L</span>
                </div>
                <div className="gf-metric">
                  <span>Calories</span>
                  <div className="gf-bar gf-bar-orange" style={{ ["--val"]: "78%" }} />
                  <span className="gf-num">1,950 / 2,500</span>
                </div>
                <div className="gf-metric">
                  <span>Weight</span>
                  <div className="gf-bar gf-bar-green" style={{ ["--val"]: "100%" }} />
                  <span className="gf-num">72 kg</span>
                </div>
              </div>

              <div className="gf-pills">
                <div className="gf-pill gf-pill-orange">
                  <Activity size={16} />
                  <span>45</span>
                  <small>Workouts</small>
                </div>
                <div className="gf-pill gf-pill-green">
                  <BarChart3 size={16} />
                  <span>-12</span>
                  <small>kg lost</small>
                </div>
              </div>
            </div>

            {/* Week plan */}
            <div className="gf-card">
              <h3>This Week’s Plan</h3>
              <ul className="gf-week">
                <li><strong>Monday</strong><span>Push Day — Chest & Triceps</span></li>
                <li><strong>Tuesday</strong><span>Pull Day — Back & Biceps</span></li>
                <li><strong>Wednesday</strong><span>Leg Day — Quads & Glutes</span></li>
                <li><strong>Thursday</strong><span>Cardio & Core</span></li>
                <li><strong>Friday</strong><span>Full Body HIIT</span></li>
              </ul>
            </div>

            {/* Nutrition (macros inside big box, button under) */}
            <div className="gf-card">
              <h3>Nutrition Goals</h3>
              <div className="gf-calorie-box">
                <div className="gf-cal-number">2,156</div>
                <div className="gf-macros">
                  <div className="gf-macro">
                    <span className="gf-micro">Protein</span>
                    <strong>120g</strong>
                  </div>
                  <div className="gf-macro">
                    <span className="gf-micro">Carbs</span>
                    <strong>280g</strong>
                  </div>
                  <div className="gf-macro">
                    <span className="gf-micro">Fat</span>
                    <strong>75g</strong>
                  </div>
                </div>
              </div>
              <button className="gf-cta-wide">
                <Play size={16} />
                Start Workout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – Plans */}
      <section id="plans" className="gf-section">
        <div className="gf-inner">
          <h2 className="gf-center-title">
            Choose Your <span className="gf-orange-grad-text">Transformation Plan</span>
          </h2>

          <div className="gf-plans-grid">
            <article className="gf-plan">
              <div className="gf-plan-head">
                <div className="gf-plan-icon" />
                <h3>Starter</h3>
                <div className="gf-price">$19 <span>/month</span></div>
              </div>
              <ul className="gf-plan-list">
                <li><span className="gf-check" /> Basic workout plans</li>
                <li><span className="gf-check" /> Nutrition tracking</li>
                <li><span className="gf-check" /> Daily metrics logging</li>
                <li><span className="gf-check" /> Mobile app access</li>
                <li><span className="gf-check" /> Community support</li>
              </ul>
              <a href="/start" className="gf-cta-wide">Start Free Trial</a>
            </article>

            <article className="gf-plan gf-plan-pop">
              <div className="gf-plan-head">
                <div className="gf-pop-badge">Most Popular</div>
                <div className="gf-plan-icon" />
                <h3>Premium</h3>
                <div className="gf-price">$39 <span>/month</span></div>
              </div>
              <ul className="gf-plan-list">
                <li><span className="gf-check" /> Everything in Starter</li>
                <li><span className="gf-check" /> AI-progressive programming</li>
                <li><span className="gf-check" /> Personalized meal planning</li>
                <li><span className="gf-check" /> Advanced analytics</li>
                <li><span className="gf-check" /> Priority support</li>
              </ul>
              <a href="/start" className="gf-cta-wide">Start Free Trial</a>
            </article>

            <article className="gf-plan">
              <div className="gf-plan-head">
                <div className="gf-plan-icon" />
                <h3>Elite</h3>
                <div className="gf-price">$79 <span>/month</span></div>
              </div>
              <ul className="gf-plan-list">
                <li><span className="gf-check" /> All Elite features</li>
                <li><span className="gf-check" /> 1 on 1 personal coaching</li>
                <li><span className="gf-check" /> Custom workout design</li>
                <li><span className="gf-check" /> Elite community access</li>
                <li><span className="gf-check" /> Priority new features</li>
              </ul>
              <a href="/start" className="gf-cta-wide">Start Free Trial</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
