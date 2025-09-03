// pages/index.jsx
import React from "react";
import CommandCenter from "../components/CommandCenter.jsx";
import {
  Utensils,
  Dumbbell,
  BarChart3,
  Users,
  CalendarCheck2,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Personalized Nutrition",
      copy:
        "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.",
      icon: Utensils,
      tone: "orange",
    },
    {
      title: "Smart Workouts",
      copy:
        "AI-progressive programs that adapt to your progress—from beginner to elite athlete.",
      icon: Dumbbell,
      tone: "orange",
    },
    {
      title: "Real-time Tracking",
      copy:
        "Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized.",
      icon: BarChart3,
      tone: "orange",
    },
    {
      title: "Community Support",
      copy:
        "Join a community that keeps you accountable, motivated, and inspired.",
      icon: Users,
      tone: "green",
    },
    {
      title: "Weekly Planning",
      copy:
        "See your complete roadmap. Plan sessions, track progress, and stay consistent week by week.",
      icon: CalendarCheck2,
      tone: "green",
    },
    {
      title: "Expert Guidance",
      copy:
        "Decades of insight distilled into every feature. Trusted by thousands.",
      icon: GraduationCap,
      tone: "green",
    },
  ];

  return (
    <main className="gf-snap h-screen overflow-y-auto bg-[#0b0f12] text-[#DDE1E6]">
      {/* ————— HERO (full page) ————— */}
      <section className="gf-section snap-start relative min-h-[100svh] flex flex-col">
        {/* top nav */}
        <header className="w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
            <nav className="flex items-center gap-8 text-sm text-[#9BA3AF]">
              <span className="gf-brand font-black tracking-tight text-xl text-white">
                GRINDFIT
              </span>
              <a href="#why" className="hover:text-white">Why Grindfit</a>
              <a href="#nutrition" className="hover:text-white">Nutrition</a>
              <a href="#reset" className="hover:text-white">Reset & Recover</a>
              <a href="#membership" className="hover:text-white">Membership</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="rounded-lg px-3 py-2 text-sm text-[#9BA3AF] hover:text-white"
              >
                Log in
              </a>
              <a
                href="/app"
                className="gf-cta rounded-xl px-4 py-2 text-sm font-semibold text-black"
                aria-label="Open App"
              >
                Open App
              </a>
            </div>
          </div>
        </header>

        {/* hero body (left-aligned; room for background video on right/behind) */}
        <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          {/* video placeholder (you can replace with your <video> later) */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_80%_0%,rgba(255,122,24,0.08),transparent_60%),radial-gradient(1000px_600px_at_0%_100%,rgba(0,255,153,0.06),transparent_55%)]" />
          <div className="max-w-2xl">
            <h1 className="font-black leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
              <span className="block">Train Hard.</span>
              <span className="block">Think Sharp.</span>
              <span className="block">
                Live{" "}
                <span className="gf-gradient-text">Unstoppable</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#9BA3AF]">
              A psychology-driven fitness system that upgrades your body, mind,
              and lifestyle. Built to win.
            </p>
            <div className="mt-8">
              <a
                href="#plans"
                className="gf-cta rounded-xl px-5 py-3 text-sm font-semibold text-black"
              >
                Start Your Transformation
              </a>
            </div>
          </div>

          {/* keep right column free/empty for your future background video */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* ————— FEATURES (full page) ————— */}
      <section
        id="why"
        className="gf-section snap-start relative min-h-[100svh] py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Everything You Need to{" "}
            <span className="gf-gradient-text">Succeed</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, copy, icon: Icon, tone }) => (
              <article
                key={title}
                className="gf-card group relative rounded-2xl p-6"
              >
                <div
                  className={`gf-icon ${
                    tone === "orange" ? "gf-icon--orange" : "gf-icon--green"
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#9BA3AF]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ————— COMMAND CENTER (full page) ————— */}
      <section
        id="command"
        className="gf-section snap-start relative min-h-[100svh] py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Your Fitness{" "}
            <span className="gf-gradient-text">Command Center</span>
          </h2>
          <CommandCenter />
        </div>
      </section>

      {/* ————— PLANS (full page) ————— */}
      <section
        id="plans"
        className="gf-section snap-start relative min-h-[100svh] py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Choose Your <span className="gf-gradient-text">Transformation</span>{" "}
            Plan
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <PlanCard
              title="Starter"
              price="$19"
              period="/month"
              cta="Start Free Trial"
              features={[
                "Basic workout plans",
                "Nutrition tracking",
                "Daily metrics logging",
                "Mobile app access",
                "Community support",
              ]}
            />

            {/* Premium (featured) */}
            <PlanCard
              featured
              title="Premium"
              price="$39"
              period="/month"
              badge="Most Popular"
              cta="Get Premium"
              features={[
                "Everything in Starter",
                "AI-progressive programming",
                "Personalized meal planning",
                "Advanced analytics",
                "Priority support",
              ]}
            />

            {/* Elite */}
            <PlanCard
              title="Elite"
              price="$79"
              period="/month"
              cta="Go Elite"
              features={[
                "All Elite features",
                "Exclusive live workshops",
                "Elite community access",
                "Goal setting sprints",
                "Priority new features",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ——— Helpers ——— */

function PlanCard({ featured = false, badge, title, price, period, features, cta }) {
  return (
    <article
      className={`relative rounded-2xl border border-white/5 bg-[#0e1216]/80 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm ${
        featured ? "scale-[1.02] ring-2 ring-orange-500/30" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <div className="gf-badge flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-black">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black/70"
              aria-hidden="true"
            >
              <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.5L12 17.8 6.4 19.7 7.5 13.2 3 8.9 9 8z" />
            </svg>
            {badge ?? "Most Popular"}
          </div>
        </div>
      )}

      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-3 flex items-end justify-center gap-1">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          <span className="pb-1 text-sm text-[#9BA3AF]">{period}</span>
        </div>
        <button className="gf-cta mt-5 w-full rounded-xl px-4 py-2 text-sm font-semibold text-black">
          {cta}
        </button>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[#C7CDD6]">
            <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500">
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                className="text-white"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M20.285 6.709a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0l-5.364-5.364a1 1 0 111.414-1.414l4.657 4.657 8.486-8.486a1 1 0 011.414 0z"
                />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
