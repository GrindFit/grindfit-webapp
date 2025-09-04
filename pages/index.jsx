// pages/index.jsx
import React from "react";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section className="gf-hero">
        <div className="gf-wrap">
          <h1 className="gf-hero-title">
            <span>Train Hard.</span>
            <span>Think Sharp.</span>
            <span>Live <strong className="gf-grad-orange">Unstoppable</strong></span>
          </h1>

          <p className="gf-hero-sub">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
          </p>

          <a className="gf-cta" href="#plans">Start Your Transformation</a>
        </div>
      </section>

      {/* ===== Features (6 boxes) ===== */}
      <section className="gf-features" id="features">
        <div className="gf-wrap">
          <h2 className="gf-section-title">
            Everything You Need to <strong className="gf-grad-orange">Succeed</strong>
          </h2>

          {/* 2 x 3 grid – icons already sized/colored per your spec */}
          <div className="gf-feat-grid">
            {/* top row – orange gradient icons */}
            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-orange" aria-hidden />
              <h3>Personalized Nutrition</h3>
              <p>Custom meal plans based on your goals. Track macros effortlessly.</p>
            </article>

            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-orange" aria-hidden />
              <h3>Smart Workouts</h3>
              <p>Adaptive programs that adjust to your progress—from beginner to elite.</p>
            </article>

            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-orange" aria-hidden />
              <h3>Weekly Planning</h3>
              <p>See your roadmap. Plan sessions and stay consistent week by week.</p>
            </article>

            {/* bottom row – green gradient icons */}
            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-green" aria-hidden />
              <h3>Real-time Tracking</h3>
              <p>Monitor steps, water intake, calories and vital metrics beautifully.</p>
            </article>

            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-green" aria-hidden />
              <h3>Community Support</h3>
              <p>Join a community that keeps you accountable, motivated, and inspired.</p>
            </article>

            <article className="gf-feat-card">
              <div className="gf-feat-icon gf-ico-green" aria-hidden />
              <h3>Expert Guidance</h3>
              <p>Decades of insight distilled into every feature. Trusted by thousands.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Command Center (restored, clean) ===== */}
      <section className="gf-cc" id="command">
        <div className="gf-wrap">
          <header className="gf-cc-head">
            <h2>Your Fitness <span className="gf-grad-orange">Command Center</span></h2>
            <p>Experience the dashboard that will guide you to your goals. Track everything that matters in one beautiful interface.</p>
          </header>

          <div className="gf-cc-grid">
            {/* Left: Today's Progress */}
            <div className="gf-cc-card">
              <h3>Today’s Progress</h3>

              <div className="gf-bar">
                <label>Steps</label>
                <div className="gf-bar-track"><span style={{width:"67%"}}/></div>
                <div className="gf-bar-num">6,700 / 10,000</div>
              </div>

              <div className="gf-bar">
                <label>Water</label>
                <div className="gf-bar-track gf-green"><span style={{width:"50%"}}/></div>
                <div className="gf-bar-num">2 L / 4 L</div>
              </div>

              <div className="gf-bar">
                <label>Calories</label>
                <div className="gf-bar-track"><span style={{width:"78%"}}/></div>
                <div className="gf-bar-num">1,950 / 2,500</div>
              </div>

              <div className="gf-bar">
                <label>Weight</label>
                <div className="gf-bar-track gf-green"><span style={{width:"100%"}}/></div>
                <div className="gf-bar-num">72 kg</div>
              </div>

              <div className="gf-stats-row">
                <div className="gf-stat-badge gf-grad-orange">45<span>Workouts</span></div>
                <div className="gf-stat-badge gf-grad-green">-12<span>kg lost</span></div>
              </div>
            </div>

            {/* Middle: This Week's Plan (green check circles) */}
            <div className="gf-cc-card">
              <h3>This Week’s Plan</h3>
              <ul className="gf-list">
                {[
                  ["Monday","Push Day — Chest & Triceps"],
                  ["Tuesday","Pull Day — Back & Biceps"],
                  ["Wednesday","Leg Day — Quads & Glutes"],
                  ["Thursday","Cardio & Core"],
                  ["Friday","Full Body HIIT"],
                ].map(([day,work],i)=>(
                  <li key={i}>
                    <span className="gf-day">{day}</span>
                    <span className="gf-work">{work}</span>
                    <span className="gf-check" aria-hidden>
                      {/* green circle with check (white) */}
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="url(#g)"/>
                        <path d="M6 10.3l2.3 2.3L14 7.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#16a34a"/><stop offset="1" stopColor="#22c55e"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Nutrition Goals (macros + button under) */}
            <div className="gf-cc-card">
              <h3>Nutrition Goals</h3>

              <div className="gf-macros">
                <div className="gf-macro">
                  <strong>120g</strong>
                  <span>Protein</span>
                </div>
                <div className="gf-macro">
                  <strong>280g</strong>
                  <span>Carbs</span>
                </div>
                <div className="gf-macro">
                  <strong>75g</strong>
                  <span>Fat</span>
                </div>
              </div>

              <button className="gf-cta gf-cta-block" type="button">Start Workout</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section className="gf-plans" id="plans">
        <div className="gf-wrap">
          <h2 className="gf-section-title">Choose Your <strong className="gf-grad-orange">Transformation Plan</strong></h2>

          <div className="gf-plans-grid">
            {/* Starter */}
            <article className="gf-plan">
              <div className="gf-plan-icon gf-ico-orange" aria-hidden />
              <h3>Starter</h3>
              <div className="gf-price"><span>$19</span><small>/month</small></div>
              <ul className="gf-bullets">
                {[
                  "Basic workout plans",
                  "Nutrition tracking",
                  "Daily metrics logging",
                  "Mobile app access",
                  "Community support",
                ].map((t,i)=>(
                  <li key={i}><span className="gf-bullet-check" aria-hidden />{t}</li>
                ))}
              </ul>
              <a href="#" className="gf-cta gf-cta-block">Start Free Trial</a>
            </article>

            {/* Premium – only crown here */}
            <article className="gf-plan gf-popular">
              <div className="gf-pop-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 17h14l-1-8-4 3-3-5-3 5-4-3-1 8z" stroke="currentColor" strokeWidth="2" />
                </svg>
                Most Popular
              </div>
              <div className="gf-plan-icon gf-ico-orange" aria-hidden />
              <h3>Premium</h3>
              <div className="gf-price"><span>$39</span><small>/month</small></div>
              <ul className="gf-bullets">
                {[
                  "Everything in Starter",
                  "AI-progressive programming",
                  "Personalized meal planning",
                  "Advanced analytics",
                  "Priority support",
                ].map((t,i)=>(
                  <li key={i}><span className="gf-bullet-check" aria-hidden />{t}</li>
                ))}
              </ul>
              <a href="#" className="gf-cta gf-cta-block">Start Free Trial</a>
            </article>

            {/* Elite */}
            <article className="gf-plan">
              <div className="gf-plan-icon gf-ico-orange" aria-hidden />
              <h3>Elite</h3>
              <div className="gf-price"><span>$79</span><small>/month</small></div>
              <ul className="gf-bullets">
                {[
                  "All Elite features",
                  "1 on 1 personal coaching",
                  "Custom workout design",
                  "Elite community access",
                  "Priority new features",
                ].map((t,i)=>(
                  <li key={i}><span className="gf-bullet-check" aria-hidden />{t}</li>
                ))}
              </ul>
              <a href="#" className="gf-cta gf-cta-block">Start Free Trial</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
