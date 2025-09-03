// pages/index.jsx
import Head from "next/head";
import Link from "next/link";
import CommandCenter from "../components/CommandCenter"; // <- path is from /pages

// Lucide icons for the feature cards
import {
  Utensils,          // Personalized Nutrition
  Dumbbell,          // Smart Workouts
  CalendarCheck,     // Weekly Planning
  Activity,          // Real-time Tracking
  Users,             // Community Support
  ShieldCheck        // Expert Guidance
} from "lucide-react";

// Small, focused card component so we keep markup tidy
function FeatureCard({ icon: Icon, title, desc, color = "orange" }) {
  return (
    <div className="gf-feature rounded-2xl border border-white/5 bg-black/20 p-5 sm:p-6">
      <div className={`gf-icon ${color === "green" ? "green" : ""}`}>
        <Icon size={22} color="#0c0d0f" />
      </div>

      <h3 className="mt-4 font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: Utensils,
      title: "Personalized Nutrition",
      desc:
        "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.",
      color: "orange",
    },
    {
      icon: Dumbbell,
      title: "Smart Workouts",
      desc:
        "AI-powered workout plans that adapt to your progress—from beginner to elite athletes.",
      color: "green",
    },
    {
      icon: CalendarCheck,
      title: "Weekly Planning",
      desc:
        "See your complete fitness roadmap. Plan sessions, track progress, and stay consistent week by week.",
      color: "orange",
    },
    {
      icon: Activity,
      title: "Real-time Tracking",
      desc:
        "Monitor steps, water intake, calories, and vital metrics. Your progress, visualized.",
      color: "green",
    },
    {
      icon: Users,
      title: "Community Support",
      desc:
        "Join a community that keeps you accountable, motivated, and inspired.",
      color: "orange",
    },
    {
      icon: ShieldCheck,
      title: "Expert Guidance",
      desc:
        "Decades of insight distilled into every feature. Trusted by thousands.",
      color: "green",
    },
  ];

  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
        <meta
          name="description"
          content="A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win."
        />
      </Head>

      <main className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* HERO */}
        <section
          id="home"
          className="relative min-h-[60vh] w-full pt-16 sm:pt-24 md:pt-28"
        >
          <h1 className="font-black tracking-tight leading-tight text-[36px] sm:text-[48px] md:text-[60px] lg:text-[76px] text-white">
            Train Hard.
            <br />
            Think Sharp.
            <br />
            Live <span className="gf-gradient-text">Unstoppable</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/80">
            A psychology-driven fitness system that upgrades your body, mind, and
            lifestyle. Built to win.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/#membership"
              className="gf-cta px-5 py-3 rounded-xl font-semibold text-black bg-[var(--gf-btn)] hover:brightness-105"
            >
              Start Your Transformation
            </Link>

            <Link
              href="/#preview"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white/80 hover:text-white/95 hover:bg-white/5"
            >
              Watch Preview
            </Link>
          </div>

          {/* top-right warm ambient hero bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full blur-[88px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,122,24,.08), rgba(255,122,24,0) 60%)",
            }}
          />
        </section>

        {/* FEATURES */}
        <section id="why" className="relative mt-20 sm:mt-24 md:mt-28">
          <h2 className="gf-section-title">Everything You Need to Succeed</h2>

          <div className="mt-6 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                color={f.color}
              />
            ))}
          </div>
        </section>

        {/* COMMAND CENTER */}
        <section id="preview" className="relative mt-24 sm:mt-28 md:mt-32">
          <h2 className="gf-section-title">Your Fitness Command Center</h2>
          <CommandCenter />
        </section>

        {/* PRICING ANCHOR (content will come later) */}
        <section id="membership" className="mt-24 sm:mt-28 md:mt-32" />
      </main>
    </>
  );
}
