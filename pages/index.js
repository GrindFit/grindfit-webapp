export default function Home() {
  return (
    <div className="min-h-screen hero-section text-white">
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" className="w-9 h-9 rounded-md ring-1 ring-white/10" />
          <span className="font-extrabold tracking-tight text-lg">GRINDFIT</span>
        </div>
        {/* no "Open App" button — this is the app */}
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          Train Hard. Think<br/>Sharp.<br/>
          Live <span className="bg-gradient-to-b from-orange-400 via-orange-500 to-red-600 text-transparent bg-clip-text">Unstoppable.</span>
        </h1>
        <p className="text-white/70 max-w-2xl mt-4">
          Psychology-driven fitness that upgrades body, mind, and lifestyle.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="/onboarding" className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-600 text-black font-semibold">
            Start Your Transformation
          </a>
          <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10">See Features</a>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4 pb-20">
        {[
          ["Hyper-Personal","Adaptive plans based on readiness and schedule."],
          ["Mindset-First","Micro-wins, focus cues, and streaks that last."],
          ["Lifestyle Upgrade","Nutrition, recovery, finance & legal basics."]
        ].map(([t,s])=>(
          <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="font-semibold">{t}</div>
            <div className="text-white/70 text-sm mt-1">{s}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
