// pages/index.jsx
import Head from "next/head";
import { Activity, Salad, Brain, Dumbbell, CalendarCheck2, UsersRound } from "lucide-react";
import Nav from "../components/Nav.jsx";
import CommandCenter from "../components/CommandCenter.jsx";
import Plans from "../components/Plans.jsx";

function IconChip({ children, color = "orange" }) {
  const grad =
    color === "green"
      ? "linear-gradient(90deg,#22c55e 0%,#10b981 50%,#059669 100%)"
      : "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)";
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-black shadow"
      style={{ background: grad }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>GRINDFIT</title>
        <meta name="description" content="Train Hard. Think Sharp. Live Unstoppable." />
      </Head>

      <Nav />

      {/* hero */}
      <main className="relative">
        {/* ambient background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% -10%, rgba(255,122,24,0.25), transparent 60%), radial-gradient(900px 400px at 90% -20%, rgba(255,162,74,0.15), transparent 60%)",
          }}
        />

        {/* Hero */}
        <section className="pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-white font-black leading-tight text-4xl sm:text-5xl md:text-6xl">
              Train Hard.
              <br />
              Think Sharp.
              <br />
              Live{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
                }}
              >
                Unstoppable
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300">
              A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
              Built to win.
            </p>

            <div className="mt-6">
              <a
                href="#plans"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-black shadow ring-1 ring-black/10"
                style={{
                  background:
                    "linear-gradient(90deg,#FF7A18 0%,#FF8A21 45%,#FFA24A 100%)",
                }}
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="why" className="mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white mb-8">
              Everything You Need to Succeed
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Personalized Nutrition",
                  body:
                    "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.",
                  icon: <Salad className="w-4 h-4" />,
                },
                {
                  title: "Smart Workouts",
                  body:
                    "Adaptive programs that adjust to your progress—from beginner to elite athlete.",
                  icon: <Dumbbell className="w-4 h-4" />,
                },
                {
                  title: "Real-time Tracking",
                  body:
                    "Monitor steps, water intake, calories, and vital metrics. Your progress, visualized.",
                  icon: <Activity className="w-4 h-4" />,
                },
                {
                  title: "Community Support",
                  body:
                    "Join a community that keeps you accountable, motivated, and inspired.",
                  icon: <UsersRound className="w-4 h-4" />,
                },
                {
                  title: "Weekly Planning",
                  body:
                    "See your complete roadmap. Plan sessions, track progress, and stay consistent week by week.",
                  icon: <CalendarCheck2 className="w-4 h-4" />,
                },
                {
                  title: "Expert Guidance",
                  body:
                    "Decades of insight distilled into every feature. Trusted by thousands.",
                  icon: <Brain className="w-4 h-4" />,
                  color: "green", // <- bottom-right is green now
                },
              ].map(({ title, body, icon, color }, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-zinc-950/70 ring-1 ring-white/5 p-5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <IconChip color={color}>{icon}</IconChip>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMAND CENTER */}
        <div className="mt-16">
          <CommandCenter />
        </div>

        {/* PLANS (single, centered) */}
        <section id="plans" className="mt-20 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Plans />
          </div>
        </section>
      </main>
    </>
  );
}
