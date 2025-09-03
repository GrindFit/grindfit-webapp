// pages/index.jsx
import Head from "next/head";
import { Dumbbell, Utensils, LineChart, Users, CalendarCheck, BookOpen } from "lucide-react";
import CommandCenter from "../components/CommandCenter";
import Plans from "../components/Plans";

// tiny helper for icon chips
function IconChip({ children, color = "orange" }) {
  const isGreen = color === "green";
  const chip =
    isGreen
      ? "from-emerald-400 to-emerald-500"
      : "from-[#FF7A18] to-[#FFA24A]";

  return (
    <div className="absolute -top-3 -left-3 h-9 w-9 rounded-xl bg-gradient-to-br shadow-[0_10px_30px_rgba(0,0,0,0.35)] blur-[0px] grid place-items-center">
      <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${chip} grid place-items-center`} />
      <div className="absolute inset-0 grid place-items-center text-black">
        {children}
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, Icon, color = "orange" }) {
  return (
    <div className="relative rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
      <IconChip color={color}>
        <Icon size={18} />
      </IconChip>
      <h3 className="font-semibold text-white mt-2">{title}</h3>
      <p className="mt-1 text-[13px] leading-5 text-white/70">{desc}</p>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      title: "Personalized Nutrition",
      desc: "Custom meal plans tuned to your goals with effortless macro tracking.",
      Icon: Utensils,
      color: "orange",
    },
    {
      title: "Smart Workouts",
      desc: "Adaptive programs that grow with you—from beginner to elite.",
      Icon: Dumbbell,
      color: "orange",
    },
    {
      title: "Real-time Tracking",
      desc: "Steps, water, calories and vitals visualized beautifully.",
      Icon: LineChart,
      color: "green",
    },
    {
      title: "Community Support",
      desc: "Train with accountability, motivation and inspiration.",
      Icon: Users,
      color: "green",
    },
    {
      title: "Weekly Planning",
      desc: "Plan sessions, track progress, stay consistent week by week.",
      Icon: CalendarCheck,
      color: "green",
    },
    {
      title: "Expert Guidance",
      desc: "Decades of insight distilled into every feature. Trusted by thousands.",
      Icon: BookOpen,
      color: "green", // ← bottom-right is green (consistency)
    },
  ];

  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable.</title>
      </Head>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle ambient canvas already exists from your globals; we keep it dark */}
        <div className="mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24 md:pt-28">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.05] font-black tracking-tight text-white">
            Train Hard.
            <br />
            Think Sharp.
            <br />
            Live{" "}
            <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] bg-clip-text text-transparent">
              Unstoppable
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-white/75">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
            Built to win.
          </p>

          <button
            className="mt-7 inline-flex items-center rounded-xl px-6 py-3 font-semibold text-black
                       bg-gradient-to-r from-[#FF7A18] to-[#FFA24A]
                       shadow-[0_10px_40px_rgba(255,122,24,0.25)]
                       hover:brightness-105 transition"
          >
            Start Your Transformation
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-14 md:pt-18">
        <h2 className="mb-6 text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-white">
          Everything You Need to Succeed
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* COMMAND CENTER — full, bold section */}
      <CommandCenter />

      {/* PRICING */}
      <Plans />
    </>
  );
}
