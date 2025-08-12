// pages/reset.js
import { useEffect } from "react";
import { requireAuth } from "@/lib/auth";

export default function Reset(){
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <header className="nav sticky top-0 z-50">
        <div className="gf-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm" style={{background:"linear-gradient(90deg, var(--gf-amber), var(--gf-orange) 55%, var(--gf-vermillion))"}}/>
            <span className="tracking-wide font-semibold">GRINDFIT</span>
          </div>
        </div>
      </header>

      <main className="gf-container py-10 space-y-8 max-w-3xl">
        <h1 className="text-3xl font-bold">GrindFit Reset Protocol</h1>
        <p className="small-dim italic">“Fix the body. Reclaim the mind. Build the unbreakable.”</p>

        <section className="gf-card space-y-3">
          <h2 className="font-semibold text-xl">⚡ Daily Reset Habits</h2>
          <ul className="list-disc ml-5 small-dim space-y-2">
            <li><strong>Cold Shower</strong> within 10 minutes of waking + 350–500ml water. No screens for 30 minutes.</li>
            <li><strong>GrindFit Reading (20 min/day)</strong> — feed your mind before the world pulls you away.</li>
            <li><strong>10,000 Steps</strong> daily + optional mobility flow or weekly ruck.</li>
          </ul>
        </section>

        <section className="gf-card space-y-3">
          <h2 className="font-semibold text-xl">🧠 Emotional Reset Block (1–2×/week)</h2>
          <div>
            <h3 className="font-semibold">1) Gratitude (3–5 min)</h3>
            <p className="small-dim">Write 3 things you’re grateful for + 1 win from the last 24 hours.</p>
          </div>
          <div>
            <h3 className="font-semibold">2) Letting Go (5 min)</h3>
            <p className="small-dim">List what you’re releasing; rip it up or delete with intention.</p>
          </div>
          <div>
            <h3 className="font-semibold">3) Social Reconnection (2 min)</h3>
            <p className="small-dim">Message one person who lifts you. No asks — just appreciation.</p>
          </div>
          <div>
            <h3 className="font-semibold">Bonus: Detox Stack</h3>
            <p className="small-dim">Cold shower • 30–60 min nature walk • silence notifications • eye contact with a loved one (or yourself).</p>
          </div>
        </section>
      </main>
    </>
  );
}
