import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Manrope for bold, crisp headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />

      {/* HERO */}
      <section className="section">
        <div className="gf-container stack-24">
          <h1>
            Train Hard.<br />
            Think Sharp.<br />
            Live <span className="brand-word">Unstoppable</span>.
          </h1>

          <p className="lead">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle —
            with adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
          </p>

          <div style={{ display: "flex", gap: "12px" }} className="mt-4">
            <a className="btn btn-primary" href="/login">Start Your Transformation</a>
            <a className="btn btn-ghost" href="#why">See Features</a>
          </div>
        </div>
      </section>

      {/* WHY GRINDFIT */}
      <section id="why" className="section">
        <div className="gf-container">
          <h2>Why GrindFit works</h2>
          <div className="cards mt-4">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Goal-tuned plans</h3>
              <p style={{ color: "var(--muted)" }}>
                Built for Fat Loss, Lean Mass, and Mass Gain. Pick your goal, level, gender, and
                training days. We serve the right week — the one you can actually finish.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Mindset-first</h3>
              <p style={{ color: "var(--muted)" }}>
                Micro-wins and cues create compounding momentum. We engineer your day, not just your workout.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Lifestyle upgrade</h3>
              <p style={{ color: "var(--muted)" }}>
                Recovery, sleep, and stress integrated — habits that lower friction and raise output.
                Less burnout, more progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="section">
        <div className="gf-container stack-24">
          <h2>Nutrition, made simple</h2>

          {/* Pills under the header */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="pill is-active">Fat Loss</button>
            <button className="pill">Lean Mass</button>
            <button className="pill">Mass Gain</button>
          </div>

          {/* Macro tiles / quick primer */}
          <div className="cards mt-6">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Calories</h3>
              <p style={{ color: "var(--muted)" }}>1900</p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Protein</h3>
              <p style={{ color: "var(--muted)" }}>180</p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Carbs</h3>
              <p style={{ color: "var(--muted)" }}>150</p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Fat</h3>
              <p style={{ color: "var(--muted)" }}>60</p>
            </div>
          </div>

          <ul style={{ color: "var(--muted)", margin: "4px 0 0 20px" }}>
            <li>Greek yogurt parfait</li>
            <li>Grilled chicken salad</li>
            <li>Baked salmon + greens</li>
          </ul>

          <div className="mt-6">
            <a className="btn btn-primary" href="/login">Access full meal library</a>
          </div>
        </div>
      </section>

      {/* RESET & RECOVER */}
      <section id="reset" className="section">
        <div className="gf-container">
          <h2>Reset & Recover</h2>
          <div className="cards mt-4">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Daily reset</h3>
              <p style={{ color: "var(--muted)" }}>
                Cold shower on wake + water. 10k steps. 20 min GrindFit reading. Low-friction habits
                that build discipline.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Emotional reset</h3>
              <p style={{ color: "var(--muted)" }}>
                Gratitude, letting-go, and social reconnection. Short, powerful, and repeatable.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Mobility & breath</h3>
              <p style={{ color: "var(--muted)" }}>
                Optional 5–10 min flow, barefoot walks, or a weekly ruck. Recovery that raises output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY TEASER */}
      <section className="section">
        <div className="gf-container">
          <h2>Weekly training (teaser)</h2>
          <div className="cards mt-4">
            <div className="card center">
              <div>Monday<br /><small style={{ color: "var(--muted)" }}>Members only</small></div>
            </div>
            <div className="card center">
              <div>Tuesday<br /><small style={{ color: "var(--muted)" }}>Members only</small></div>
            </div>
            <div className="card center">
              <div>Wednesday<br /><small style={{ color: "var(--muted)" }}>Members only</small></div>
            </div>
            <div className="card center">
              <div>Thursday<br /><small style={{ color: "var(--muted)" }}>Members only</small></div>
            </div>
            <div className="card center">
              <div>Friday<br /><small style={{ color: "var(--muted)" }}>Members only</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA PLACEHOLDERS (swap with real video/images later) */}
      <section className="section">
        <div className="gf-container">
          <h2>See it in action</h2>
          <div className="media-grid mt-4">
            <div className="media-slot center">Hero video placeholder</div>
            <div className="media-slot center">Client results</div>
            <div className="media-slot center">Coaching clip</div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="section">
        <div className="gf-container">
          <h2>Membership</h2>
          <div className="cards mt-4">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Starter</h3>
              <ul style={{ color: "var(--muted)" }}>
                <li>Weekly plan preview</li>
                <li>Nutrition basics</li>
                <li>Reset & Recover lite</li>
              </ul>
              <a className="btn btn-primary mt-4" href="/login">Join GrindFit</a>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Elite</h3>
              <ul style={{ color: "var(--muted)" }}>
                <li>Full Mon–Fri workouts</li>
                <li>Goal+gender meals</li>
                <li>Full Reset Protocol</li>
                <li>Progress tracking (soon)</li>
              </ul>
              <a className="btn btn-primary mt-4" href="/login">Join GrindFit</a>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Pro</h3>
              <ul style={{ color: "var(--muted)" }}>
                <li>Everything in Elite</li>
                <li>Priority updates</li>
                <li>Future coach add-ons</li>
              </ul>
              <a className="btn btn-primary mt-4" href="/login">Join GrindFit</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section--tight">
        <div className="gf-container" style={{ color: "var(--muted)", fontSize: 13 }}>
          © {new Date().getFullYear()} GrindFit. Built to win.
        </div>
      </footer>
    </>
  );
}
