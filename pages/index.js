// pages/index.js
import Head from "next/head";
import { useState } from "react";
import Nav from "@/components/Nav";

const NUTRITION = {
  "Fat Loss": { cals: 1900, protein: 180, carbs: 150, fat: 60, bullets: ["Greek yogurt parfait", "Grilled chicken salad", "Baked salmon + greens"] },
  "Lean Mass": { cals: 2400, protein: 190, carbs: 260, fat: 70, bullets: ["Eggs + bagel", "Beef rice bowl", "Pasta + meat sauce"] },
  "Mass Gain": { cals: 2800, protein: 200, carbs: 330, fat: 80, bullets: ["Yogurt + granola", "Chicken pesto pasta", "Salmon + potato"] },
};

export default function Home() {
  const [plan, setPlan] = useState("Fat Loss");

  const m = NUTRITION[plan];

  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
      </Head>

      <Nav />

      {/* HERO */}
      <main className="gf-container pt-20 pb-16">
        <section className="hero">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6">
            Train Hard.<br />
            Think Sharp.<br />
            Live <span className="brand-word">Unstoppable.</span>
          </h1>

          <p className="max-w-2xl text-lg text-muted mb-8">
            A psychology-driven fitness system that upgrades body, mind, and lifestyle — with
            adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="/login" className="btn-primary">Start Your Transformation</a>
          </div>
        </section>
      </main>

      {/* WHY */}
      <section id="why" className="gf-container py-10">
        <h2 className="text-2xl font-extrabold mb-5">Why GrindFit works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="gf-card">
            <h3 className="font-bold mb-2">Goal-tuned plans</h3>
            <p className="text-muted">Built for Fat Loss, Lean Mass, and Mass Gain. Pick your goal, level, and training days. We serve the right week — the one you can actually finish.</p>
          </div>
          <div className="gf-card">
            <h3 className="font-bold mb-2">Mindset-first</h3>
            <p className="text-muted">Micro-wins and cues create compounding momentum. We engineer your day, not just your workout.</p>
          </div>
          <div className="gf-card">
            <h3 className="font-bold mb-2">Lifestyle upgrade</h3>
            <p className="text-muted">Recovery, sleep, and stress integrated — habits that lower friction and raise output. Less burnout, more progress.</p>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="gf-container py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-extrabold">Nutrition, made simple</h2>

          {/* tabs under the title */}
          <div className="flex gap-2">
            {Object.keys(NUTRITION).map((k) => (
              <button
                key={k}
                onClick={() => setPlan(k)}
                className={`px-3 py-1.5 rounded-full border text-sm ${
                  plan === k
                    ? "border-transparent bg-[rgba(255,138,58,.15)] text-white"
                    : "border-[rgba(255,255,255,.1)] text-muted hover:text-white"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="gf-card">
          <div className="grid sm:grid-cols-4 gap-4 mb-5">
            <Metric label="Calories" value={m.cals} />
            <Metric label="Protein" value={m.protein} />
            <Metric label="Carbs" value={m.carbs} />
            <Metric label="Fat" value={m.fat} />
          </div>

          <ul className="list-disc pl-5 space-y-1 text-[0.95rem]">
            {m.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <div className="mt-6">
            <a href="/login" className="btn-primary">Access full meal library</a>
          </div>

          <p className="mt-4 text-muted text-sm">
            Disclaimer: These meal plans are general guidelines only and not medical advice. Consult a qualified professional for personalized recommendations.
          </p>
        </div>
      </section>

      {/* RESET & RECOVER */}
      <section id="reset" className="gf-container py-14">
        <h2 className="text-2xl font-extrabold mb-5">Reset &amp; Recover</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="gf-card">
            <h3 className="font-bold mb-2">Daily reset</h3>
            <p className="text-muted">Cold shower on wake + water. 10k steps. 20 min GrindFit reading. Low-friction habits that build discipline.</p>
            <a href="/login" className="btn-ghost mt-4 inline-block">Access full protocol</a>
          </div>
          <div className="gf-card">
            <h3 className="font-bold mb-2">Emotional reset</h3>
            <p className="text-muted">Gratitude, letting-go ritual, and social reconnection. Short, powerful, and repeatable.</p>
          </div>
          <div className="gf-card">
            <h3 className="font-bold mb-2">Mobility &amp; breath</h3>
            <p className="text-muted">Optional 5–10 min flow, barefoot walks, or a weekly ruck. Recovery that raises output.</p>
          </div>
        </div>
      </section>

      {/* WEEK PREVIEW (locked) */}
      <section className="gf-container py-14">
        <h2 className="text-2xl font-extrabold mb-5">Weekly training (teaser)</h2>
        <div className="grid sm:grid-cols-5 gap-3">
          {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((d) => (
            <div key={d} className="gf-card text-center">
              <div className="text-sm text-muted mb-2">{d}</div>
              <div className="font-semibold mb-2">Session preview</div>
              <div className="text-[12px] opacity-70">Members only</div>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA PLACEHOLDERS */}
      <section className="gf-container py-14">
        <h2 className="text-2xl font-extrabold mb-5">See it in action</h2>
        <div className="media-grid">
          <div className="media-slot aspect-[16/9]">Hero video placeholder</div>
          <div className="media-slot aspect-[16/9]">Client results</div>
          <div className="media-slot aspect-[16/9]">Coaching clip</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="gf-container py-16">
        <h2 className="text-2xl font-extrabold mb-6">Membership</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <PriceCard
            name="Starter"
            price="$29/mo"
            points={["Weekly plan preview","Nutrition basics","Reset & Recover lite"]}
          />
          <PriceCard
            name="Elite"
            price="$49/mo"
            highlight
            points={["Full Mon–Fri workouts","Goal+gender meals","Full Reset Protocol","Progress tracking (soon)"]}
          />
          <PriceCard
            name="Pro"
            price="$79/mo"
            points={["Everything in Elite","Priority updates","Future coach add-ons"]}
          />
        </div>
      </section>

      <footer className="gf-container py-10 text-sm text-muted">
        © {new Date().getFullYear()} GrindFit. Built to win.
      </footer>
    </>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.03)] p-4 text-center">
      <div className="text-[12px] text-muted">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}

function PriceCard({ name, price, points, highlight }) {
  return (
    <div className={`gf-card flex flex-col ${highlight ? "ring-2 ring-[rgba(255,138,58,.45)]" : ""}`}>
      <div className="flex items-baseline justify-between mb-2">
        <div className="font-bold">{name}</div>
        <div className="text-lg font-extrabold">{price}</div>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-[0.95rem] mb-5">
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <a href="/login" className="btn-primary mt-auto">Join GrindFit</a>
    </div>
  );
}
