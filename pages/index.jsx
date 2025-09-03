// pages/index.jsx
import Head from "next/head";
import Link from "next/link";
import Brand from "../components/Brand";
import CommandCenter from "../components/CommandCenter";
import Pricing from "../components/Pricing";
import {
  UtensilsCrossed,
  Dumbbell,
  CalendarCheck,
  LineChart,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Personalized Nutrition",
      body:
        "Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly.",
      Icon: UtensilsCrossed,
      color: "orange",
    },
    {
      title: "Smart Workouts",
      body:
        "AI-powered workout plans that adapt to your progress—from beginner to elite athlete.",
      Icon: Dumbbell,
      color: "green",
    },
    {
      title: "Weekly Planning",
      body:
        "See your complete roadmap. Plan sessions, track progress, and stay consistent week by week.",
      Icon: CalendarCheck,
      color: "orange",
    },
    {
      title: "Real-time Tracking",
      body:
        "Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized.",
      Icon: LineChart,
      color: "green",
    },
    {
      title: "Community Support",
      body:
        "Join a community that keeps you accountable, motivated, and inspired.",
      Icon: Users,
      color: "orange",
    },
    {
      title: "Expert Guidance",
      body:
        "Decades of insight distilled into every feature. Trusted by thousands.",
      Icon: ShieldCheck,
      color: "green",
    },
  ];

  return (
    <>
      <Head>
        <title>GrindFit</title>
      </Head>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-2">
            <Brand />
          </Link>

          <nav className="hidden sm:flex items-center gap-2">
            <a href="#why" className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white">
              Why GrindFit
            </a>
            <a href="#nutrition" className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white">
              Nutrition
            </a>
            <a href="#reset" className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white">
              Reset & Recover
            </a>
            <a href="#membership" className="px-3 py-2 rounded-lg text-zinc-300 hover:text-white">
              Membership
            </a>
            <a
              href="#app"
              className="ml-2 px-4 py-2 bg-[var(--gf-btn)] gf-cta"
            >
              Open App
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="top" className="relative">
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Train Hard.<br />
            Think Sharp.<br />
            Live <span className="gf-gradient-text">Unstoppable</span>
          </h1>
          <p className="mt-6 max-w-2xl text-zinc-300">
            A psychology-driven fitness system that upgrades your body, mind, and
            lifestyle. Built to win.
          </p>

          <div className="mt-8">
            <button className="gf-cta px-5 py-3 bg-[var(--gf-btn)] text-black">
              Start Your Transformation
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section id="why" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="gf-section-title mb-6">
            Everything You Need to Succeed
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, body, Icon, color }) => (
              <div key={title} className="gf-feature p-5">
                <div className={`gf-icon ${color === "green" ? "gf-icon--green" : "gf-icon--orange"}`}>
                  <Icon size={22} color="#0b0d12" />
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2
