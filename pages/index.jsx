export default function Home() {
  return (
    <main>
      {/* ===== Top Nav + Hero ===== */}
      <header className="gf-topnav">
        <div className="gf-nav-inner">
          <a className="gf-brand" href="/">GRINDFIT</a>

          <nav className="gf-tabs">
            <a className="gf-tab" href="#why">Why Grindfit</a>
            <a className="gf-tab" href="#nutrition">Nutrition</a>
            <a className="gf-tab" href="#reset">Reset & Recover</a>
            <a className="gf-tab" href="#membership">Membership</a>
            <a className="gf-login" href="/login">Log in</a>
            <a className="gf-cta" href="/app">Open App</a>
          </nav>
        </div>
      </header>

      <section className="gf-section gf-hero" id="why" aria-label="Hero">
        <div className="gf-inner">
          <h1 className="gf-hero-h">
            Train Hard.<br />
            Think Sharp.<br />
            Live <span className="gf-orange-grad">Unstoppable</span>
          </h1>
          <p className="gf-hero-sub">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
          </p>
          <a className="gf-cta lg" href="#plans">Start Your Transformation</a>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="gf-section gf-features" aria-label="Everything You Need to Succeed">
        <div className="gf-inner">
          <h2 className="gf-feat-title">
            Everything You Need to <span className="gf-orange-grad">Succeed</span>
          </h2>

          <div className="gf-feature-grid">
            {[
              {
                icon: "🍽️",
                title: "Personalized Nutrition",
                body: "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly."
              },
              {
                icon: "📈",
                title: "Smart Workouts",
                body: "Adaptive programs that adjust to your progress—from beginner to elite athlete."
              },
              {
                icon: "📊",
                title: "Real-time Tracking",
                body: "Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized."
              },
              {
                icon: "👥",
                title: "Community Support",
                body: "Join a community that keeps you accountable, motivated, and inspired."
              },
              {
                icon: "🗓️",
                title: "Weekly Planning",
                body: "See your complete fitness roadmap. Plan sessions, track progress, and stay consistent week by week."
              },
              {
                icon: "🎖️",
                title: "Expert Guidance",
                body: "Decades of insight distilled into every feature. Trusted by thousands."
              }
            ].map((f, i) => (
              <article className="gf-card" key={i}>
                <div className="gf-icon-wrap">
                  <span className="gf-icon" aria-hidden="true">{f.icon}</span>
                </div>
                <div className="gf-card-body">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMAND CENTER ===== */}
      <section className="gf-section gf-cc" id="command" aria-label="Your Fitness Command Center">
        <div className="gf-inner gf-cc-grid">
          {/* Progress */}
          <div className="gf-cc-card">
            <h3 className="gf-cc-h">Today's Progress</h3>

            <div className="gf-meter">
              <div className="gf-meter-row">
                <span>Steps</span>
                <div className="gf-bar gf-bar-orange"><i style={{ width: "67%" }} /></div>
                <em>6,700 / 10,000</em>
              </div>

              <div className="gf-meter-row">
                <span>Water</span>
                <div className="gf-bar gf-bar-green"><i style={{ width: "50%" }} /></div>
                <em>2 L / 4 L</em>
              </div>

              <div className="gf-meter-row">
                <span>Calories</span>
                <div className="gf-bar gf-bar-orange"><i style={{ width: "78%" }} /></div>
                <em>1,950 / 2,500</em>
              </div>

              <div className="gf-meter-row">
                <span>Weight</span>
                <div className="gf-bar gf-bar-green"><i style={{ width: "100%" }} /></div>
                <em>72 kg</em>
              </div>
            </div>

            <div className="gf-pills">
              <div className="gf-pill green"><b>45</b><span>Workouts</span></div>
              <div className="gf-pill orange"><b>-12</b><span>kg lost</span></div>
            </div>
          </div>

          {/* Week Plan */}
          <div className="gf-cc-card">
            <h3 className="gf-cc-h">This Week’s Plan</h3>
            <ul className="gf-week">
              <li><strong>Monday</strong><span>Push Day — Chest & Triceps</span><i className="gf-check" /></li>
              <li><strong>Tuesday</strong><span>Pull Day — Back & Biceps</span><i className="gf-play" /></li>
              <li><strong>Wednesday</strong><span>Leg Day — Quads & Glutes</span><i className="gf-next" /></li>
              <li><strong>Thursday</strong><span>Cardio & Core</span><i className="gf-next" /></li>
              <li><strong>Friday</strong><span>Full Body HIIT</span><i className="gf-next" /></li>
            </ul>
          </div>

          {/* Nutrition */}
          <div className="gf-cc-card">
            <h3 className="gf-cc-h">Nutrition Goals</h3>
            <div className="gf-nutri">
              <div className="gf-n-circle"><b>2,156</b><small>calories remaining</small></div>
              <div className="gf-macros">
                <div className="gf-macro"><span>Protein</span><b>120g</b></div>
                <div className="gf-macro"><span>Carbs</span><b>280g</b></div>
                <div className="gf-macro"><span>Fat</span><b>75g</b></div>
              </div>
              <a className="gf-cta w100" href="/app">Start Workout</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section className="gf-section gf-plans" id="plans" aria-label="Choose Your Transformation Plan">
        <div className="gf-inner">
          <h2 className="gf-plans-title">Choose Your <span className="gf-orange-grad">Transformation Plan</span></h2>

          <div className="gf-plans-grid">
            {/* Starter */}
            <article className="gf-plan">
              <div className="gf-plan-head">
                <div className="gf-plan-icon">⚡</div>
                <h3>Starter</h3>
                <div className="gf-price"><span>$19</span><small>/month</small></div>
              </div>
              <ul className="gf-feats">
                {["Basic workout plans", "Nutrition tracking", "Daily metrics logging", "Mobile app access", "Community support"].map((t, i) => (
                  <li key={i}><i />{t}</li>
                ))}
              </ul>
              <a className="gf-cta w100" href="/signup">Start Free Trial</a>
            </article>

            {/* Premium (Most Popular) */}
            <article className="gf-plan gf-popular">
              <div className="gf-pop-badge"><span>👑</span> Most Popular</div>
              <div className="gf-plan-head">
                <div className="gf-plan-icon">🏅</div>
                <h3>Premium</h3>
                <div className="gf-price"><span>$39</span><small>/month</small></div>
              </div>
              <ul className="gf-feats">
                {[
                  "Everything in Starter",
                  "AI-progressive programming",
                  "Personalized meal planning",
                  "Advanced analytics",
                  "Priority support"
                ].map((t, i) => (<li key={i}><i />{t}</li>))}
              </ul>
              <a className="gf-cta w100" href="/signup">Start Free Trial</a>
            </article>

            {/* Elite */}
            <article className="gf-plan">
              <div className="gf-plan-head">
                <div className="gf-plan-icon">🎯</div>
                <h3>Elite</h3>
                <div className="gf-price"><span>$79</span><small>/month</small></div>
              </div>
              <ul className="gf-feats">
                {[
                  "All Elite features",
                  "1 on 1 personal coaching",
                  "Custom workout design",
                  "Elite community access",
                  "Priority new features"
                ].map((t, i) => (<li key={i}><i />{t}</li>))}
              </ul>
              <a className="gf-cta w100" href="/signup">Start Free Trial</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
