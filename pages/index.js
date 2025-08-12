import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const NUTRITION = {
  "Fat Loss": {
    blurb:
      "Cut the noise. Simple meals, tight macros, and easy swaps that keep you on track without starving.",
    totals: { Calories: 1700, Protein: 140, Carbs: 150, Fat: 60 },
    bullets: ["Greek yogurt parfait", "Grilled chicken salad", "Baked salmon + veg", "Lean beef + greens"],
  },
  "Lean Mass": {
    blurb:
      "Add quality size — not bloat. Clean carbs, high protein, and smart timing to fuel training and recovery.",
    totals: { Calories: 2200, Protein: 165, Carbs: 250, Fat: 65 },
    bullets: ["Oats + whey", "Chicken poke bowl", "Tuna pasta", "Salmon + potatoes"],
  },
  "Mass Gain": {
    blurb:
      "Push the scale the right way. Calorie surplus without the junk, focused on performance and muscle.",
    totals: { Calories: 2600, Protein: 190, Carbs: 330, Fat: 80 },
    bullets: ["Eggs + bagel", "Beef rice bowl", "Pasta + meat sauce", "Steak + rice"],
  },
};

export default function Home(){
  const [tab,setTab] = useState("Fat Loss");

  return (
    <>
      <Nav />

      <main className="gf-container py-16 lg:py-24">
        {/* HERO */}
        <section className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Train Hard.<br/>
            Think Sharp.<br/>
            Live <span className="text-gradient">Unstoppable</span>.
          </h1>
          <p className="mt-5 text-lg text-[color:var(--gf-text-dim)] max-w-2xl">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link className="btn-primary" href="/login">Start Your Transformation</Link>
            <a className="btn-ghost" href="#why">See Features</a>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">Why GrindFit works</h2>
          <div className="grid lg:grid-cols-3 gap-4">
            <article className="gf-card">
              <h3 className="font-semibold mb-2">Goal-tuned plans</h3>
              <p className="small-dim">Fat Loss, Lean Mass, Mass Gain. Pick your goal, level, gender, and days. We serve the right week — one you can actually finish.</p>
            </article>
            <article className="gf-card">
              <h3 className="font-semibold mb-2">Mindset-first</h3>
              <p className="small-dim">Micro-wins and cues that stick. Repeatable motions build momentum. We engineer them into your day.</p>
            </article>
            <article className="gf-card">
              <h3 className="font-semibold mb-2">Lifestyle upgrade</h3>
              <p className="small-dim">Recovery, sleep, and stress designed in — lower friction, higher output, more progress.</p>
            </article>
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Nutrition, made simple</h2>

          <div className="flex gap-2 mb-4 flex-wrap">
            {Object.keys(NUTRITION).map(k=>(
              <button key={k}
                onClick={()=>setTab(k)}
                className={`px-3 py-1.5 rounded-lg border font-semibold ${tab===k?'bg-white text-black border-white':'text-[color:var(--gf-text)] border-[color:var(--gf-stroke)]'}`}>
                {k}
              </button>
            ))}
          </div>

          <div className="gf-card">
            <p className="small-dim">{NUTRITION[tab].blurb}</p>
            <div className="mt-4 grid md:grid-cols-4 gap-3 small-dim text-center">
              {Object.entries(NUTRITION[tab].totals).map(([k,v])=>(
                <div key={k} className="rounded-lg border border-[color:var(--gf-stroke)] p-3 bg-[color:var(--gf-card)]">
                  <div className="text-xs uppercase tracking-wide">{k}</div>
                  <div className="font-semibold mt-1">{v}</div>
                </div>
              ))}
            </div>
            <ul className="mt-4 list-disc ml-5 small-dim grid sm:grid-cols-2 gap-x-8">
              {NUTRITION[tab].bullets.map((b,i)=><li key={i}>{b}</li>)}
            </ul>
            <p className="small-dim mt-4">
              <strong>Disclaimer:</strong> These are general guidelines, not medical advice.
            </p>
          </div>
        </section>

        {/* RESET — teaser only (no how-to details) */}
        <section id="reset" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Reset &amp; Recover</h2>
          <div className="grid lg:grid-cols-3 gap-4">
            <article className="gf-card">
              <h3 className="font-semibold mb-1">Daily Reset</h3>
              <p className="small-dim">A simple morning pattern that sharpens focus and discipline.</p>
            </article>
            <article className="gf-card">
              <h3 className="font-semibold mb-1">Emotional Reset</h3>
              <p className="small-dim">A short, powerful block that clears mental weight and restores momentum.</p>
            </article>
            <article className="gf-card">
              <h3 className="font-semibold mb-1">Recovery Built-In</h3>
              <p className="small-dim">Movement, mobility, and breathwork — integrated without complexity.</p>
            </article>
          </div>
          <div className="mt-4">
            <Link className="btn-ghost" href="/login">See how it works</Link>
          </div>
        </section>

        {/* WEEKLY TRAINING (locked preview) */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Weekly training (preview)</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d=>(
              <div key={d} className="gf-card locked">
                <div className="text-sm small-dim">{d}</div>
                <div className="font-semibold mt-1">Session preview</div>
                <div className="mt-2 small-dim">WOD blocks + optional follow-along video.</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link className="btn-primary" href="/login">Join / Log in to unlock</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="gf-card flex items-center justify-between flex-col md:flex-row gap-4">
            <div>
              <h4 className="font-semibold text-xl">Your 30-day upgrade, zero guesswork</h4>
              <p className="small-dim mt-1">We unlock one week at a time — sustainable, focused, effective.</p>
            </div>
            <Link className="btn-primary" href="/login">Start now</Link>
          </div>
        </section>
      </main>

      <footer className="mt-20 pb-12">
        <div className="gf-container small-dim">© {new Date().getFullYear()} GRINDFIT. Built to win.</div>
      </footer>
    </>
  );
}
