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
                GRINDFIT gives you the tools that will transform your life. 
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
                Meal plans based on your goals and fitness level. 
                </p>
              </article>

              {/* 2 */}
              <article className="gf-card" data-color="orange">
                <div className="gf-ico" aria-hidden>
                  <Activity size={18} />
                </div>
                <h3 className="gf-card-title">Smart Workouts</h3>
                <p className="gf-card-body">
                 Kettle bell progressive programs that adapt to your progress — from beginner to elite athlete.
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
                  Monitor steps, water intake, calories, and your progress, visualized beautifully.
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
                  Decades of insight distilled into every feature.
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
// …keep everything above unchanged

        {/* ====== COMMAND CENTER ====== */}
        <section className="gf-section gf-cc" id="command" aria-label="Your Fitness Command Center">
          <div className="gf-inner">
            <header className="gf-sechead">
              <h2 className="gf-h2">
                Your Fitness <span className="gf-orange">Command Center</span>
              </h2>
            </header>

            <div className="gf-cc-grid">
              {/* Progress */}
              <article className="gf-cc-panel">
                <h3 className="gf-cc-h3">Today's Progress</h3>

                <div className="gf-cc-metric">
                  <div className="gf-cc-row">
                    <span>Steps</span>
                    <span className="gf-cc-num">6,700 / 10,000</span>
                  </div>
                  <div className="gf-cc-bar"><span style={{width:"67%"}} className="o"></span></div>
                </div>

                <div className="gf-cc-metric">
                  <div className="gf-cc-row">
                    <span>Water</span>
                    <span className="gf-cc-num">2 L / 4 L</span>
                  </div>
                  <div className="gf-cc-bar"><span style={{width:"50%"}} className="g"></span></div>
                </div>

                <div className="gf-cc-metric">
                  <div className="gf-cc-row">
                    <span>Calories</span>
                    <span className="gf-cc-num">1,950 / 2,500</span>
                  </div>
                  <div className="gf-cc-bar"><span style={{width:"78%"}} className="o"></span></div>
                </div>

                <div className="gf-cc-chips">
                  <span className="gf-chip g">45<br/><small>Workouts</small></span>
                  <span className="gf-chip o">-12<br/><small>kg lost</small></span>
                </div>
              </article>

              {/* Week plan */}
              <article className="gf-cc-panel">
                <h3 className="gf-cc-h3">This Week's Plan</h3>

                <div className="gf-cc-list">
                  <div className="gf-cc-item">
                    <div><strong>Monday</strong><span className="gf-cc-sub">Push Day — Chest &amp; Triceps</span></div>
                    <span className="gf-badge o">✓</span>
                  </div>
                  <div className="gf-cc-item">
                    <div><strong>Tuesday</strong><span className="gf-cc-sub">Pull Day — Back &amp; Biceps</span></div>
                    <span className="gf-badge g">▶</span>
                  </div>
                  <div className="gf-cc-item">
                    <div><strong>Wednesday</strong><span className="gf-cc-sub">Leg Day — Quads &amp; Glutes</span></div>
                  </div>
                  <div className="gf-cc-item">
                    <div><strong>Thursday</strong><span className="gf-cc-sub">Cardio &amp; Core</span></div>
                  </div>
                  <div className="gf-cc-item">
                    <div><strong>Friday</strong><span className="gf-cc-sub">Full Body HIIT</span></div>
                  </div>
                </div>
              </article>

              {/* Nutrition */}
              <article className="gf-cc-panel">
                <h3 className="gf-cc-h3">Nutrition Goals</h3>

                <div className="gf-cc-cal">
                  <div className="gf-cc-cal-label">CALORIES REMAINING</div>
                  <div className="gf-cc-cal-num">2,156</div>
                </div>

                <div className="gf-cc-macros">
                  <span className="gf-macro o"><b>120g</b><small>Protein</small></span>
                  <span className="gf-macro g"><b>280g</b><small>Carbs</small></span>
                  <span className="gf-macro o"><b>75g</b><small>Fat</small></span>
                </div>

                <a href="/app" className="gf-cta gf-cc-cta">Start Workout</a>
              </article>
            </div>
          </div>
        </section>

        {/* ====== PRICING ====== */}
        <section className="gf-section gf-plans" id="plans" aria-label="Choose Your Transformation Plan">
          <div className="gf-inner">
            <header className="gf-sechead">
              <h2 className="gf-h2">Choose Your <span className="gf-orange">Transformation Plan</span></h2>
            </header>

            <div className="gf-plan-grid">
              {/* Starter */}
              <article className="gf-plan">
                <h3 className="gf-plan-name">Starter</h3>
                <div className="gf-price"><span className="gf-dollar">$</span>19<span className="gf-per">/month</span></div>
                <ul className="gf-feats">
                  <li>Basic workout plans</li>
                  <li>Nutrition tracking</li>
                  <li>Daily metrics logging</li>
                  <li>Mobile app access</li>
                  <li>Community support</li>
                </ul>
                <a href="/app" className="gf-cta gf-plan-cta">Start Free Trial</a>
              </article>

              {/* Premium (Most Popular) */}
              <article className="gf-plan gf-plan-pop">
                <div className="gf-pop"><span className="gf-crown">👑</span> Most Popular</div>
                <h3 className="gf-plan-name">Premium</h3>
                <div className="gf-price"><span className="gf-dollar">$</span>39<span className="gf-per">/month</span></div>
                <ul className="gf-feats">
                  <li>Everything in Starter</li>
                  <li>AI-progressive programming</li>
                  <li>Personalized meal planning</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                </ul>
                <a href="/app" className="gf-cta gf-plan-cta">Start Free Trial</a>
              </article>

              {/* Elite */}
              <article className="gf-plan">
                <h3 className="gf-plan-name">Elite</h3>
                <div className="gf-price"><span className="gf-dollar">$</span>79<span className="gf-per">/month</span></div>
                <ul className="gf-feats">
                  <li>All Elite features</li>
                  <li>Exclusive live workshops</li>
                  <li>Elite community access</li>
                  <li>Goal setting sprints</li>
                  <li>Priority new features</li>
                </ul>
                <a href="/app" className="gf-cta gf-plan-cta">Start Free Trial</a>
              </article>
            </div>
          </div>
        </section>

// …keep anything below unchanged
