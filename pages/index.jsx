// pages/index.jsx
import Head from "next/head";
import Link from "next/link";
import {
  Flame, Apple, Users, CalendarCheck, Activity, Dumbbell,
  PlayCircle, CheckCircle2, Crown
} from "lucide-react";

import CommandCenter from "../components/CommandCenter.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRINDFIT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Page snapping */}
      <main className="min-h-screen overflow-x-hidden snap-y snap-mandatory">
        {/* ====== NAV (fixed) ====== */}
        <nav className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-transparent px-6 md:px-10">
          <div className="flex items-center gap-7 text-sm text-neutral-300">
            <Link href="#why" className="hover:text-white transition">Why Grindfit</Link>
            <Link href="#nutrition" className="hover:text-white transition">Nutrition</Link>
            <Link href="#reset" className="hover:text-white transition">Reset &amp; Recover</Link>
            <Link href="#membership" className="hover:text-white transition">Membership</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-neutral-300 hover:text-white transition">Log in</Link>
            <Link href="/app" className="gf-cta text-sm">Open App</Link>
          </div>
        </nav>

        {/* ====== HERO ====== */}
        <section className="gf-section relative">
          {/* ambient */}
          <div className="gf-canvas-ambient" aria-hidden />

          {/* Big brand at top-left in same gradient & size as “Unstoppable” */}
          <div className="absolute left-6 top-20 md:left-10 md:top-24">
            <div className="gf-brand-hero">GRINDFIT</div>
          </div>

          <div className="container mx-auto max-w-6xl px-6 md:px-10">
            <h1 className="leading-tight font-black text-[36px] sm:text-[52px] md:text-[68px] lg:text-[82px] tracking-tight max-w-4xl">
              <span className="block text-white">Train Hard.</span>
              <span className="block text-white">Think Sharp.</span>
              <span className="block text-white">Live <span className="gf-gradient-text">Unstoppable</span></span>
            </h1>

            <p className="mt-5 max-w-2xl text-neutral-300">
              A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
              Built to win.
            </p>

            <div className="mt-8">
              <Link href="#features" className="gf-cta">Start Your Transformation</Link>
            </div>
          </div>
        </section>

        {/* ====== FEATURES (Everything You Need to Succeed) ====== */}
        <section id="features" className="gf-section">
          <div className="container mx-auto max-w-6xl px-6 md:px-10">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl text-white">
              Everything You Need to <span className="gf-gradient-text">Succeed</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Row 1 (orange) */}
              <FeatureCard
                icon={<Apple className="gf-icon" />}
                title="Personalized Nutrition"
                text="Custom meal plans based on your goals, fitness level, and dietary preferences. Track macros effortlessly."
                chipColor="orange"
              />
              <FeatureCard
                icon={<Activity className="gf-icon" />}
                title="Smart Workouts"
                text="AI-progressive programs that adapt to your progress—from beginner to elite athlete."
                chipColor="orange"
              />
              <FeatureCard
                icon={<CalendarCheck className="gf-icon" />}
                title="Weekly Planning"
                text="See your complete roadmap, plan sessions, and stay consistent week by week."
                chipColor="orange"
              />

              {/* Row 2 (green) */}
              <FeatureCard
                icon={<Users className="gf-icon" />}
                title="Community Support"
                text="Join a community that keeps you accountable, motivated, and inspired."
                chipColor="green"
              />
              <FeatureCard
                icon={<Dumbbell className="gf-icon" />}
                title="Real-time Tracking"
                text="Monitor steps, water intake, calories, and all vital metrics. Your progress, visualized."
                chipColor="green"
              />
              <FeatureCard
                icon={<Flame className="gf-icon" />}
                title="Expert Guidance"
                text="Decades of insight distilled into every feature. Trusted by thousands."
                chipColor="green"
              />
            </div>
          </div>
        </section>

        {/* ====== COMMAND CENTER ====== */}
        <section className="gf-section">
          <div className="container mx-auto max-w-6xl px-6 md:px-10">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl text-white">
              Your Fitness <span className="gf-gradient-text">Command Center</span>
            </h2>
            <CommandCenter />
          </div>
        </section>

        {/* ====== PRICING ====== */}
        <section id="membership" className="gf-section">
          <div className="container mx-auto max-w-6xl px-6 md:px-10">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl text-white">
              Choose Your <span className="gf-gradient-text">Transformation Plan</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <PriceCard
                title="Starter"
                price="$19"
                cta="Start Free Trial"
                features={[
                  "Basic workout plans",
                  "Nutrition tracking",
                  "Daily metrics logging",
                  "Mobile app access",
                  "Community support",
                ]}
              />

              <PriceCard
                title="Premium"
                price="$39"
                cta="Start Free Trial"
                popular
                features={[
                  "Everything in Starter",
                  "AI-progressive programming",
                  "Personalized meal planning",
                  "Progress analytics",
                  "Priority support",
                ]}
              />

              <PriceCard
                title="Elite"
                price="$79"
                cta="Start Free Trial"
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
    </>
  );
}

/* ---------- Helpers ---------- */

function FeatureCard({ icon, title, text, chipColor = "orange" }) {
  return (
    <div className="gf-card">
      <div className={`gf-chip ${chipColor === "green" ? "gf-chip--green" : "gf-chip--orange"}`}>
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{text}</p>
    </div>
  );
}

function PriceCard({ title, price, features, cta, popular = false }) {
  return (
    <div className={`gf-price ${popular ? "gf-price--pop" : ""}`}>
      {popular && (
        <div className="gf-popular">
          <Crown size={16} />
          <span>Most Popular</span>
        </div>
      )}

      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <div className="mt-1 text-4xl font-black text-white">{price}
        <span className="ml-1 align-top text-sm font-bold text-neutral-300">/month</span>
      </div>

      <ul className="mt-5 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-neutral-200">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link href="/signup" className="gf-cta w-full text-center">{cta}</Link>
      </div>
    </div>
  );
}
