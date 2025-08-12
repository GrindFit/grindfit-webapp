// /pages/index.js
import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const NUTRITION = {
  tabs: ["Fat Loss", "Lean Mass", "Mass Gain"],
  data: {
    "Fat Loss": {
      blurb:
        "Keep it simple. Tighter meals, right macros, and easy swaps that keep you on track without starving.",
      macros: { Calories: 1900, Protein: 180, Carbs: 150, Fat: 60 },
      bullets: ["Greek yogurt parfait", "Grilled chicken salad", "Baked salmon + greens"],
    },
    "Lean Mass": {
      blurb:
        "Quality in, quality up — not bloat. Clean carbs, high protein, and smart fats to fuel training and recovery.",
      macros: { Calories: 2600, Protein: 190, Carbs: 330, Fat: 80 },
      bullets: ["Eggs + bagel", "Beef rice bowl", "Pasta + meat sauce"],
    },
    "Mass Gain": {
      blurb:
        "Push the scale the right way. Calorie surplus without the junk, focused on performance and muscle.",
      macros: { Calories: 3000, Protein: 210, Carbs: 420, Fat: 95 },
      bullets: ["Eggs + bagel", "Beef fried rice", "Pasta + meat sauce", "Steak + rice"],
    },
  },
};

export default function Home() {
  const [tab, setTab] = useState("Fat Loss");

  const m = NUTRITION.data[tab];

  return (
    <>
      <Nav />

      {/* HERO */}
      <main className="gf-container pt-16 pb-10">
        <section className="hero mb-12">
          <h1 className="text-5xl sm:text-6xl leading-tight font-extrabold">
            Train Hard. <br />
            Think Sharp. <br />
            Live{" "}
            <span className="bg-gradient-to-r from-[#FFB36B] via-[#FF7A3D] to-[#FF4B2B] bg-clip-text text-transparent">
              Unstoppable
            </span>
            .
          </h1>
          <p className="mt-4 text-lg text-muted-1 max-w-2xl">
            A psychology-driven fitness system that upgrades body, mind, and lifestyle — with adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
          </p>

        <div className="mt-6 flex gap-3">
            <Link href="/login" className="btn-primary">Start Your Transformation</Link>
            <a href="#why" className="btn-ghost">See Features</a>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="mb-14">
          <h2 className="section-title">Why GrindFit works</h2>
          <div className="grid-cards">
            <article className="card">
              <h3 className="card-title">Goal-tuned plans</h3>
              <p className="card-copy">
                Built for <strong>Fat Loss, Lean Mass, and Mass Gain</strong>.
                Pick your goal, level, gender, and training days. We serve the right week — the one you can actually finish.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Mindset-first</h3>
              <p className="card-copy">
                Micro-wins and clear focus cues create compounding momentum. We engineer your day, not just your workouts.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Lifestyle upgrade</h3>
              <p className="card-copy">
                Recovery, sleep, and stress integrated — habits that lower friction and raise output. Less burnout, more progress.
              </p>
            </article>
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="section-title m-0">Nutrition, made simple</h2>
            <div className="tabs">
              {NUTRITION.tabs.map((t) => (
                <button
                  key={t}
                  className={`tab ${t === tab ? "is-active" : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <p className="card-copy mb-4">{m.blurb}</p>

            <div className="grid macros">
              {Object.entries(m.macros).map(([k, v]) => (
                <div key={k} className="macro">
                  <div className="macro-key">{k}</div>
                  <div className="macro-val">{v}</div>
                </div>
              ))}
            </div>

            <ul className="bullets mt-4">
              {m.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <span className="badge-ghost">Members only</span>
              <Link href="/login" className="btn-primary">Access full meal library</Link>
            </div>

            <p className="disclaimer mt-3">
              Disclaimer: These are general guidelines, not medical advice. Consult a qualified professional for personalized recommendations.
            </p>
          </div>
        </section>

        {/* RESET & RECOVER */}
        <section id="reset" className="mb-14">
          <h2 className="section-title">Reset &amp; Recover</h2>
          <div className="grid-cards">
            <article className="card">
              <h3 className="card-title">Daily reset</h3>
              <p className="card-copy">
                Cold shower on wake + water. 10k steps. 20 min GrindFit reading.
                Low-friction habits that build discipline and clarity.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Emotional reset</h3>
              <p className="card-copy">
                Gratitude, letting-go ritual, and social reconnection. Short, powerful,
                and repeatable (1–2×/week).
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Mobility &amp; breath</h3>
              <p className="card-copy">
                Optional 5–10 min flow, barefoot walks, or a weekly ruck.
                Recovery that raises output.
              </p>
            </article>
          </div>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
            <span className="badge-ghost">Members only</span>
            <Link href="/login" className="btn-primary">Access full protocol</Link>
          </div>
        </section>

        {/* WEEKLY TRAINING (teaser) */}
        <section className="mb-16">
          <h2 className="section-title">Weekly training (teaser)</h2>
          <div className="grid-week">
            {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((d) => (
              <article key={d} className="card">
                <header className="flex items-center justify-between">
                  <span className="badge">{d}</span>
                  <span className="badge-ghost">Members only</span>
                </header>
                <div className="mt-2 text-sm text-muted-2">
                  Session preview
                  <br />
                  <span className="opacity-70">EMOM complex • 30–40 min</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/login" className="btn-primary">Unlock your training</Link>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-muted-2">
        © {new Date().getFullYear()} GrindFit. Built to win.
      </footer>
    </>
  );
}
