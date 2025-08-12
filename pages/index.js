import Head from "next/head";

export default function Home(){
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta name="description" content="Premium coaching system that upgrades your body, mind, and lifestyle. Adaptive plans, habit cues, and recovery dialed to your schedule."/>
      </Head>

      <header className="container" style={{paddingTop:20}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span className="logo"><span className="logo-mark"/><span className="logo-type">GrindFit</span></span>
          <nav className="row">
            <a className="btn btn-ghost" href="#why">Why GrindFit</a>
            <a className="btn btn-ghost" href="#nutrition">Nutrition</a>
            <a className="btn btn-ghost" href="#reset">Reset & Recover</a>
            <a className="btn btn-amber" href="/onboarding">Open App</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section">
          <div className="container" style={{paddingTop:32,paddingBottom:28}}>
            <div style={{maxWidth:980}}>
              <h1>
                Train Hard.<br/>
                Think Sharp.<br/>
                Live <span className="unstoppable">Unstoppable</span>.
              </h1>
              <p className="muted" style={{maxWidth:720,margin:"0 0 16px"}}>
                A psychology-driven fitness system that upgrades body, mind, and lifestyle —
                with adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
              </p>

              <div className="row">
                <a className="btn btn-amber" href="/onboarding">Start Your Transformation</a>
                <a className="btn" href="#why">See Features</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="section">
          <div className="container">
            <h2 style={{fontSize:"clamp(26px,4vw,36px)",margin:"0 0 12px",fontWeight:800}}>Why GrindFit works</h2>
            <p className="muted" style={{margin:"0 0 16px"}}>Adaptive design based on readiness and schedule — so you stay consistent and get the win.</p>

            <div className="feature-grid">
              <article className="card" style={{padding:16}}>
                <div className="kicker">Goal-Tuned Plans</div>
                <h3 style={{margin:"4px 0 6px"}}>Built for Fat Loss, Lean Mass, and Mass Gain</h3>
                <p className="muted">Pick your goal, level, gender, and training days. We serve the right week — one you can actually finish.</p>
              </article>

              <article className="card" style={{padding:16}}>
                <div className="kicker">Mindset First</div>
                <h3 style={{margin:"4px 0 6px"}}>Micro-wins and cues that stick</h3>
                <p className="muted">Small, repeatable completions produce momentum. We engineer them into your day.</p>
              </article>

              <article className="card" style={{padding:16}}>
                <div className="kicker">Lifestyle Upgrade</div>
                <h3 style={{margin:"4px 0 6px"}}>Recovery, sleep, and stress — integrated</h3>
                <p className="muted">Habits that lower friction and raise output. Less burnout, more progress.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section id="nutrition" className="section">
          <div className="container">
            <h2 style={{fontSize:"clamp(26px,4vw,36px)",margin:"0 0 12px",fontWeight:800}}>Nutrition, made simple</h2>
            <div className="card" style={{padding:16}}>
              <p className="muted" style={{marginTop:0}}>
                Plans are calibrated for your goal. Keep protein high, hydrate, and be consistent.  
                <br/>Below is the plan copy we surface per goal (Fat Loss sample):
              </p>

              <div style={{display:"grid",gap:16,gridTemplateColumns:"1fr"}}>
                <article className="card" style={{padding:16}}>
                  <div className="kicker">Fat Loss — Guidance</div>
                  <p style={{margin:"8px 0 0"}}>
                    These plans are designed for individuals between <strong>60–85kg</strong> aiming to reduce body fat.  
                    Calorie needs vary by body weight, age, activity level, and metabolism. Adjust portions accordingly or consult a professional.
                  </p>
                </article>
              </div>

              <div className="card" style={{padding:16, marginTop:16}}>
                <div className="kicker">Disclaimer</div>
                <p className="muted" style={{margin:"6px 0 0"}}>
                  These meal plans are general guidelines. They do not replace medical or nutritional advice.  
                  Always consult a qualified professional before starting any diet or fitness program.  
                  Plans are based on estimated averages and may not fit your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reset & Recover */}
        <section id="reset" className="section">
          <div className="container">
            <h2 style={{fontSize:"clamp(26px,4vw,36px)",margin:"0 0 12px",fontWeight:800}}>Reset & Recover Protocol</h2>
            <div className="card" style={{padding:16}}>
              <p style={{marginTop:0, fontStyle:"italic"}}>“Fix the body. Reclaim the mind. Build the unbreakable.”</p>

              <div className="feature-grid" style={{gridTemplateColumns:"repeat(2,minmax(0,1fr))"}}>
                <article className="card" style={{padding:16}}>
                  <div className="kicker">Start Strong (AM)</div>
                  <ul>
                    <li>Cold shower within 10 minutes of waking.</li>
                    <li>350–500ml water immediately after.</li>
                    <li>No screens for the first 30 minutes.</li>
                  </ul>
                  <p className="muted">This resets your nervous system and puts discipline on the clock early.</p>
                </article>

                <article className="card" style={{padding:16}}>
                  <div className="kicker">GrindFit Reading (20m)</div>
                  <p>Feed your mind before the world distracts you. Choose high-signal books and log one insight.</p>
                </article>

                <article className="card" style={{padding:16}}>
                  <div className="kicker">10,000 Steps & Mobility</div>
                  <p>Walk daily. Add light mobility or a 5–10 minute movement flow. Use nature to clear noise.</p>
                </article>

                <article className="card" style={{padding:16}}>
                  <div className="kicker">Emotional Reset (1–2×/wk)</div>
                  <p>Gratitude, letting-go ritual, and a reconnection message to someone who lifts you.  
                  Short, powerful, and repeatable.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container card" style={{padding:16, display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
            <div>
              <div className="kicker">Ready</div>
              <h3 style={{margin:"4px 0 6px"}}>Start your 1-week GrindFit block</h3>
              <p className="muted" style={{margin:0}}>Mon–Fri plan, built for your goal, level, and schedule.</p>
            </div>
            <a className="btn btn-amber" href="/onboarding">Open App</a>
          </div>
        </section>
      </main>
    </>
  );
}
