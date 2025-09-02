// pages/index.jsx
import Head from "next/head";
import CommandCenter from "../components/CommandCenter";

const features = [
  {
    title: "Personalized Nutrition",
    desc:
      "Meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.",
  },
  {
    title: "Smart Workouts",
    desc:
      "Kettle bell programs that push you to win. From beginner to elite athlete.",
  },
  {
    title: "Weekly Planning",
    desc:
      "See your complete fitness roadmap. Plan workouts, track progress, and stay motivated week by week.",
  },
  {
    title: "Real-time Tracking",
    desc:
      "Monitor steps, water intake and calories. Your progress, visualized beautifully.",
  },
  {
    title: "Community Support",
    desc:
      "Join a community that keeps you accountable. Share progress, get motivated, and inspire others.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    features: [
      "Basic workout plans",
      "Nutrition tracking",
      "Daily metrics logging",
      "Mobile app access",
      "Community support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    price: "$39",
    period: "/month",
    highlight: "MOST POPULAR",
    features: [
      "Everything in Starter",
      "Personalized meal plans",
      "Advanced workout library",
      "Progress analytics",
      "Priority support",
    ],
    cta: "Get Premium",
  },
  {
    name: "Elite",
    price: "$79",
    period: "/month",
    features: [
      "Everything in Premium",
      "1 on 1 personal coaching",
      "Custom workout design",
      "Advanced biometrics",
      "Priority new features",
    ],
    cta: "Go Elite",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta
          name="description"
          content="A psychology-driven fitness system that upgrades your body, mind, and lifestyle."
        />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-[var(--gf-bg)] text-zinc-200">
        {/* top-right warm orange bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 right-[-18rem] h-[32rem] w-[32rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,129,0,.28), rgba(255,123,0,.12), transparent 60%)",
            filter: "blur(28px)",
          }}
        />

        {/* Hero */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28">
          <h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Train Hard.
            <br />
            Think Sharp.
            <br />
            <span className="gf-gradient-text">Live Unstoppable</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300/90">
            A kettle bell driven fitness system that upgrades your body, mind,
            and lifestyle. Built to win.
          </p>

          <div className="mt-10">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-xl bg-[var(--gf-btn)] px-5 py-3 text-[15px] font-semibold text-zinc-950 shadow-[0_8px_24px_rgba(255,120,24,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Start Your Transformation
            </a>
          </div>
        </section>

        {/* Why / FEATURES */}
        <section id="why" className="relative z-10 mx-auto max-w-6xl px-6 pb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Everything You Need to Succeed!
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Nutrition, Smart Training, and Real-Time Progress — All In One Place.
            </p>
          </div>

          {/* 6 feature cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-zinc-900/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,123,0,0.1),0_18px_38px_-10px_rgba(255,120,24,0.18)]"
              >
                <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-b from-[var(--gf-orange-start)] to-[var(--gf-orange-end)] opacity-90" />
                <h3 className="text-[15px] font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------- Command Center (own section) --------------- */}
        <section aria-labelledby="command-center" className="relative z-10 mx-auto max-w-6xl px-6 py-8">
          {/* The Command Center component you already have */}
          <CommandCenter />
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative z-10 mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Choose Your <span className="gf-gradient-text">Transformation</span> Plan
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Start your 14-day free trial. Cancel anytime.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-800 px-3 py-1 text-[11px] font-semibold tracking-wide text-zinc-200 shadow">
                    {plan.highlight}
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-sm font-semibold text-zinc-400">
                    {plan.name}
                  </div>
                  <div className="mt-2 flex items-end gap-1">
                    <div className="text-4xl font-extrabold text-zinc-100">
                      {plan.price}
                    </div>
                    <div className="pb-1 text-sm text-zinc-400">{plan.period}</div>
                  </div>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-zinc-300/90">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-block h-[6px] w-[6px] rounded-full bg-[var(--gf-orange-mid)]/90" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--gf-btn)] px-4 py-2.5 text-[15px] font-semibold text-zinc-950 shadow-[0_10px_28px_rgba(255,120,24,0.32)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} GrindFit
        </footer>
      </main>
    </>
  );
}
