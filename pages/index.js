// pages/index.js
import { useState } from "react";
import Nav from "../components/Nav";

export default function Home() {
  const [goal, setGoal] = useState("mass");

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <h1 className="hero-title">
            <span>Train Hard.</span><br />
            <span>Think Sharp.</span><br />
            <span>Live <span className="brand-word">Unstoppable</span>.</span>
          </h1>

          <p className="hero-sub">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle —
            with adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
          </p>

          <div className="hero-cta">
            <a className="btn btn-brand" href="#join">Start Your Transformation</a>
            <a className="btn btn-ghost" href="#why">See Features</a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <div className="container">
          <h2 className="h2">Why GrindFit works</h2>
          <div className="grid-3">
            <div className="card">
              <h3 className="card-title">Goal-tuned plans</h3>
              <p>
                Built for Fat Loss, Lean Mass, and Mass Gain. Pick your goal, level, gender, and
                days. We serve the right week — the one you can actually finish.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Mindset-first</h3>
              <p>
                Micro-wins and cues create compounding momentum. We engineer them into your day,
                not just your workout.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Lifestyle upgrade</h3>
              <p>
                Recovery, sleep, and stress integrated — habits that lower friction and raise
                output. Less burnout, more progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="section">
        <div className="container">
          <h2 className="h2">Nutrition, made simple</h2>

          <div className="pills">
            <button className={`pill ${goal === "fat" ? "is-active" : ""}`} onClick={() => setGoal("fat")}>Fat Loss</button>
            <button className={`pill ${goal === "lean" ? "is-active" : ""}`} onClick={() => setGoal("lean")}>Lean Mass</button>
            <button className={`pill ${goal === "mass" ? "is-active" : ""}`} onClick={() => setGoal("mass")}>Mass Gain</button>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metric-label">Calories</div>
              <div className="metric-value">{goal === "fat" ? 1900 : goal === "lean" ? 2100 : 2600}</div>
            </div>
            <div className="metric">
              <div className="metric-label">Protein</div>
              <div className="metric-value">{goal === "fat" ? 180 : goal === "lean" ? 190 : 190}</div>
            </div>
            <div className="metric">
              <div className="metric-label">Carbs</div>
              <div className="metric-value">{goal === "fat" ? 150 : goal === "lean" ? 220 : 330}</div>
            </div>
            <div className="metric">
              <div className="metric-label">Fat</div>
              <div className="metric-value">{goal === "fat" ? 60 : goal === "lean" ? 70 : 80}</div>
            </div>
          </div>

          <ul className="bullet">
            <li>Eggs + bagel</li>
            <li>Pasta + meat sauce</li>
          </ul>

          <p className="disclaimer">
            Disclaimer: These are general guidelines, not medical advice. Consult a qualified professional for personalized recommendations.
          </p>
        </div>
      </section>

      {/* RESET & RECOVER */}
      <section id="reset" className="section">
        <div className="container">
          <h2 className="h2">Reset & Recover</h2>

          <div className="grid-3">
            <div className="card">
              <h3 className="card-title">Daily reset</h3>
              <p>
                Cold shower on wake + water. 10k steps, 20 min GrindFit reading. Low-friction
                habits that build discipline.
              </p>
              <a className="btn btn-ghost sm" href="#protocol">Access full protocol</a>
            </div>

            <div className="card">
              <h3 className="card-title">Emotional reset</h3>
              <p>
                Gratitude, letting-go ritual, and social reconnection. Short, repeatable
                (1–2×/week).
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Mobility & breath</h3>
              <p>
                Optional 5–10 min flow, barefoot walks, or a weekly ruck. Recovery that raises output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY TEASER */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Weekly training (teaser)</h2>

          <div className="grid-5">
            {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((d) => (
              <div className="card small" key={d}>
                <div className="muted">{d}</div>
                <div className="preview">Session preview</div>
                <div className="badge">Members only</div>
              </div>
            ))}
          </div>

          <div className="center mt-4">
            <a id="join" className="btn btn-brand" href="/login">Join / Log in to unlock</a>
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="cta-bar">
        <div className="container cta-bar-row">
          <div>
            <div className="cta-title">Your 30-day upgrade, zero guesswork</div>
            <div className="muted">We unlock one week at a time — sustainable, focused, effective.</div>
          </div>
          <a className="btn btn-brand" href="/membership">Start now</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">© 2025 GRINDFIT. Built to win.</div>
      </footer>
    </>
  );
}
