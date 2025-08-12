import { useEffect } from "react";
import { requireAuth } from "@/lib/auth";
import Nav from "@/components/Nav";

export default function Reset(){
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <Nav />
      <main className="gf-container py-10 space-y-8 max-w-3xl">
        <h1 className="text-3xl font-bold">GrindFit Reset Protocol</h1>
        <p className="small-dim italic">“Fix the body. Reclaim the mind. Build the unbreakable.”</p>

        <section className="gf-card space-y-3">
          <h2 className="font-semibold text-xl">Access</h2>
          <p className="small-dim">Members get the full protocol with daily/weekly patterns and quick prompts.</p>
        </section>

        <section className="gf-card space-y-2">
          <h3 className="font-semibold">What you’ll unlock</h3>
          <ul className="list-disc ml-5 small-dim space-y-2">
            <li>Daily reset to sharpen focus and discipline.</li>
            <li>Emotional reset block to drop mental weight.</li>
            <li>Mobility + breath to recover without friction.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
