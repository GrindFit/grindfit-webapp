import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit</title>
        <meta name="description" content="Train hard. Think sharp. Live unstoppable." />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-[#0B0B0E] text-zinc-200">
        {/* --- brand ambient glows -------------------------------------- */}
        {/* top-right main orange bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-12rem] h-[52rem] w-[52rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,122,24,0.26), rgba(255,122,24,0.08) 55%, rgba(255,122,24,0) 70%)",
            filter: "blur(28px)",
          }}
        />
        {/* subtle bottom-left ember */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-32 h-[36rem] w-[36rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,178,86,0.16), rgba(255,178,86,0) 65%)",
            filter: "blur(36px)",
          }}
        />

        {/* --- NAV ------------------------------------------------------- */}
        <header className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-lg font-semibold tracking-wide text-zinc-50">GRINDFIT</a>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#why" className="hover:text-zinc-200">Why GrindFit</a>
            <a href="#nutrition" className="hover:text-zinc-200">Nutrition</a>
            <a href="#reset" className="hover:text-zinc-200">Reset &amp; Recover</a>
            <a href="#membership" className="hover:text-zinc-200">Membership</a>
          </nav>

          <a
            href="#app"
            className="rounded-full bg-[#FF7A18] px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(255,122,24,0.35)]"
          >
            Open App
          </a>
        </header>

        {/* --- HERO ------------------------------------------------------ */}
        <section className="container mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-6 md:grid-cols-2 md:pt-16">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight text-zinc-50 md:text-5xl">
              Train Hard. <br /> Think Sharp. <br /> Live
              <span className="text-[#FF7A18]"> Unstoppable</span>
            </h1>

            <p className="mt-5 max-w-lg text-zinc-400">
              A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
              Built to win.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#plans"
                className="rounded-full bg-[#FF7A18] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(255,122,24,0.45)]"
              >
                Start Your Transformation
              </a>
              <a href="#watch" className="text-sm text-zinc-300 hover:text-zinc-100">Watch Preview</a>
            </div>
          </div>

          {/* right: hero feature teaser tiles */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            {["Goal-tuned plans", "Mindset-first", "Lifestyle upgrade", "Recovery"].map((t, i) => (
              <div key={i} className="relative group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-zinc-700">
                {/* ambient orange under-glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at 50% 50%, rgba(255,122,24,0.25), transparent 60%)",
                  }}
                />
                <div className="text-sm font-semibold text-zinc-100">{t}</div>
                <div className="mt-2 h-4 w-24 rounded bg-zinc-800" />
                <div className="mt-2 h-4 w-16 rounded bg-zinc-800/70" />
              </div>
            ))}
          </div>
        </section>

        {/* --- WHY / FEATURES (Lovable style grid + hover glow) ---------- */}
        <section id="why" className="container mx-auto max-w-6xl px-6 py-14">
          <div className="mb-10">
            <h2 className="text-center text-3xl font-bold text-zinc-50">
              Everything You Need to <span className="text-[#FF7A18]">Succeed</span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-zinc-400">
              Built from 25 years of experience. Personalized nutrition, smart training, and real-time progress —
              all in one place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized Nutrition",
                desc:
                  "Custom meal plans based on your goals, fitness level, and preferences. Track macros effortlessly.",
              },
              {
                title: "Smart Workouts",
                desc:
                  "Adaptive programs that adjust to your progress — from beginner to elite athlete.",
              },
              {
                title: "Weekly Planning",
                desc:
                  "Plan sessions and see your full roadmap. Stay consistent week by week.",
              },
              {
                title: "Real-time Tracking",
                desc:
                  "Monitor steps, water intake, calories, and vital metrics. Your progress, visualized.",
              },
              {
                title: "Community Support",
                desc:
                  "Join a community that keeps you accountable, motivated, and inspired.",
              },
              {
                title: "Expert Guidance",
                desc:
                  "Decades of insight distilled into every feature. Trusted by thousands.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-zinc-700"
              >
                {/* orange glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(650px circle at 50% 50%, rgba(255,122,24,0.25), transparent 60%)",
                  }}
                />
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800/60 text-[#FF7A18]">★</div>
                <div className="text-base font-semibold text-zinc-100">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- DASHBOARD TEASER (simplified) ----------------------------- */}
        <section id="dashboard" className="container mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-zinc-50">
            Your Fitness <span className="text-[#FF7A18]">Command Center</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Today’s Progress",
                content: (
                  <div className="space-y-3">
                    <Bar label="Steps" value={85} />
                    <Bar label="Water Intake" value={75} />
                    <Bar label="Calories" value={68} />
                  </div>
                ),
              },
              {
                title: "This Week’s Plan",
                content: (
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>Mon — Push Day • Chest &amp; Tris • 45 min</li>
                    <li>Tue — Pull Day • Back &amp; Bis • 50 min</li>
                    <li>Wed — Legs • Quads &amp; Glutes • 60 min</li>
                    <li>Thu — Cardio &amp; Core • 30 min</li>
                    <li>Fri — Full Body HIIT • 40 min</li>
                  </ul>
                ),
              },
              {
                title: "Nutrition Goals",
                content: (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <Macro label="Protein" value="120g" />
                    <Macro label="Carbs" value="280g" />
                    <Macro label="Fat" value="75g" />
                  </div>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(650px circle at 50% 50%, rgba(255,122,24,0.22), transparent 60%)",
                  }}
                />
                <div className="mb-3 text-sm font-semibold text-zinc-100">{card.title}</div>
                {card.content}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gradient-to-r from-[#FF9A3E] to-[#FF7A18] p-5 text-center text-black">
            <div className="text-sm font-medium">Ready for today’s workout?</div>
            <div className="text-xs opacity-80">45 min Push Day • Chest &amp; Triceps</div>
            <a
              href="#app"
              className="mt-3 inline-block rounded-full bg-black/90 px-5 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Start Workout
            </a>
          </div>
        </section>

        {/* --- PRICING (with “most popular” pop + hover glow) ------------- */}
        <section id="plans" className="container mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-zinc-50">
            Choose Your <span className="text-[#FF7A18]">Transformation Plan</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Starter",
                price: "$19",
                cta: "Start Free Trial",
                features: [
                  "Basic workout plans",
                  "Nutrition tracking",
                  "Daily metrics logging",
                  "Mobile app access",
                  "Community support",
                ],
                popular: false,
              },
              {
                title: "Premium",
                price: "$39",
                cta: "Get Premium",
                features: [
                  "Everything in Starter",
                  "Personalized meal plans",
                  "Advanced workout design",
                  "Progress analytics",
                  "Priority support",
                ],
                popular: true, // most popular
              },
              {
                title: "Elite",
                price: "$79",
                cta: "Go Elite",
                features: [
                  "Everything in Premium",
                  "1-on-1 personal coaching",
                  "Custom goal setting",
                  "Elite community access",
                  "Priority new features",
                ],
                popular: false,
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={[
                  "relative group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300",
                  tier.popular
                    ? "hover:scale-[1.05] md:scale-[1.03]" // give the middle card a bit more pop by default on MD+
                    : "hover:scale-[1.03]",
                ].join(" ")}
              >
                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(700px circle at 50% 50%, rgba(255,122,24,0.28), transparent 60%)",
                  }}
                />

                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF7A18] px-3 py-1 text-xs font-semibold text-black">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-1 text-sm text-zinc-400">{tier.title}</div>
                <div className="mb-4 text-3xl font-extrabold text-zinc-100">
                  {tier.price}
                  <span className="text-sm font-normal text-zinc-400"> /month</span>
                </div>

                <ul className="mb-5 space-y-2 text-sm text-zinc-300">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FF7A18]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#subscribe"
                  className="block rounded-full bg-[#FF7A18] px-5 py-2 text-center text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(255,122,24,0.45)]"
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* footer spacer */}
        <div className="pb-16" />
      </main>
    </>
  );
}

/* ---------- small helper components for the dashboard teaser ---------- */
function Bar({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
        <span>{label}</span>
        <span className="text-zinc-300">{value}%</span>
      </div>
      <div className="h-2 w-full rounded bg-zinc-800">
        <div
          className="h-2 rounded bg-[#FF7A18]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Macro({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="text-lg font-semibold text-zinc-100">{value}</div>
    </div>
  );
}
