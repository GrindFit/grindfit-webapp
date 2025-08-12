// pages/index.js
import { useState } from "react";
import Nav from "@/components/Nav";

const NUTRITION = {
  "Fat Loss": {
    macros: { calories: 1900, protein: 180, carbs: 150, fat: 60 },
    bullets: ["Greek yogurt parfait", "Grilled chicken salad", "Baked salmon + greens"],
  },
  "Lean Mass": {
    macros: { calories: 2300, protein: 190, carbs: 260, fat: 70 },
    bullets: ["Eggs + bagel", "Beef rice bowl", "Steak + rice"],
  },
  "Mass Gain": {
    macros: { calories: 2600, protein: 190, carbs: 330, fat: 80 },
    bullets: ["Eggs + bagel", "Beef rice bowl", "Pasta + meat sauce"],
  },
};

export default function Home() {
  const [goal, setGoal] = useState("Fat Loss");

  const macros = NUTRITION[goal].macros;
  const foods = NUTRITION[goal].bullets;

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="section hero">
        <div className="gf-container grid gap-8 md:gap-10">
          <h1 className="hero-title">
            <span>Train Hard.</span>
            <br />
            <span>Think Sharp.</span>
            <br />
            <span className="brand-word">Unstoppable</span>
          </h1>

          <p className="hero-sub">
            A psychology-driven fitness system that upgrades your body, mind, and
            lifestyle — with adaptive plans, habit cues, and recovery built in.
            No noise. No guesswork.
          </p>

          <div className="flex gap-3">
            <a className="btn-primary btn-xl" href="/login">
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <div className="gf-container">
          <h2 className="section-h">Why GrindFit works</h2>

          <div className="grid cards-3">
            <article className="card">
              <h3 className="card-h">Goal-tuned plans</h3>
              <p className="card-p">
                Built for Fat Loss, Lean Mass, and Mass Gain. Pick your goal, level,
                gender, and training days. We serve the right week — the one you can
                actually finish.
              </p>
            </article>

            <article className="card">
              <h3 className="card-h">Mindset-first</h3>
              <p className="card-p">
                Micro-wins and cues create compounding momentum. We engineer your day,
                not just your workout.
              </p>
            </article>

            <article className="card">
              <h3 className="card-h">Lifestyle upgrade</h3>
              <p className="card-p">
                Recovery, sleep, and stress integrated — habits that lower friction and
                raise output. Less burnout, more progress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
<section id="nutrition" className="section">
  <div className="gf-container stack-24">
    <h2>Nutrition, made simple</h2>

    <div className="stack-24">
      {/* Pills directly UNDER the headline */}
      <div className="stack-24" style={{gap: "12px"}}>
        <div className="stack-24">
          <div className="stack-24" />
        </div>
        <div className="stack-24" />
      </div>

      <div className="stack-24">
        <div className="stack-24" />
      </div>
    </div>

    <div style={{display:"flex", gap:"10px"}}>
      <button className="pill is-active">Fat Loss</button>
      <button className="pill">Lean Mass</button>
      <button className="pill">Mass Gain</button>
    </div>

    {/* ...your macros panel / meals go here... */}
  </div>
</section>


          {/* macros */}
          <div className="grid macros mt-6">
            {Object.entries(macros).map(([k, v]) => (
              <div key={k} className="macro">
                <span className="macro-label">{k}</span>
                <span className="macro-value">{v}</span>
              </div>
            ))}
          </div>

          {/* foods */}
          <ul className="list">
            {foods.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <a className="btn-primary mt-4 inline-block" href="/login">
            Access full meal library
          </a>
        </div>
      </section>

      {/* RESET & RECOVER */}
      <section id="reset" className="section">
        <div className="gf-container">
          <h2 className="section-h">Reset & Recover</h2>

          <div className="grid cards-3">
            <article className="card">
              <h3 className="card-tag">Daily reset</h3>
              <p className="card-p">
                Cold shower on wake + water. 10k steps. 20 min GrindFit reading.
                Low-friction habits that build discipline.
              </p>
              <a href="/login" className="btn-ghost mt-2">Access full protocol</a>
            </article>

            <article className="card">
              <h3 className="card-tag">Emotional reset</h3>
              <p className="card-p">
                Gratitude, letting-go ritual, and social reconnection. Short,
                powerful, repeatable.
              </p>
            </article>

            <article className="card">
              <h3 className="card-tag">Mobility & breath</h3>
              <p className="card-p">
                5–10 min flow, barefoot walks, or a weekly ruck. Recovery that
                raises output.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WEEKLY TRAINING (teaser) */}
      <section className="section">
        <div className="gf-container">
          <h2 className="section-h">Weekly training (teaser)</h2>

          <div className="grid days">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
              <div key={d} className="day-card">
                <div className="day-title">{d}</div>
                <div className="day-sub">Session preview</div>
                <div className="day-lock">Members only</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA: video / images placeholders */}
      <section className="section">
        <div className="gf-container">
          <h2 className="section-h">See it in action</h2>

          <div className="media-grid">
            <div className="media-slot">Hero video placeholder</div>
            <div className="media-slot">Client results</div>
            <div className="media-slot">Coaching clip</div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="section">
        <div className="gf-container">
          <h2 className="section-h">Membership</h2>

          <div className="grid pricing">
            {[
              {
                name: "Starter",
                price: "$29/mo",
                items: [
                  "Weekly plan preview",
                  "Nutrition basics",
                  "Reset & Recover lite",
                ],
              },
              {
                name: "Elite",
                price: "$49/mo",
                items: [
                  "Full Mon–Fri workouts",
                  "Goal+gender meals",
                  "Full Reset Protocol",
                  "Progress tracking (soon)",
                ],
              },
              {
                name: "Pro",
                price: "$79/mo",
                items: [
                  "Everything in Elite",
                  "Priority updates",
                  "Future coach add-ons",
                ],
              },
            ].map((tier) => (
              <article key={tier.name} className="price-card">
                <div className="price-top">
                  <div className="price-name">{tier.name}</div>
                  <div className="price">{tier.price}</div>
                </div>
                <ul className="price-list">
                  {tier.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a href="/login" className="btn-primary mt-3 inline-block">
                  Join GrindFit
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="section pt-0">
        <div className="gf-container text-sm text-muted-2">
          © {new Date().getFullYear()} GrindFit. Built to win.
        </div>
      </footer>
    </>
  );
}
