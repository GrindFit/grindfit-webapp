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
              <p style={{ color: "var(--
