// pages/index.jsx
import Link from "next/link";

// IMPORTANT: these imports include the file extensions and correct case
import CommandCenter from "../components/CommandCenter.jsx";
import Plans from "../components/Plans.jsx";

const features = [
  {
    title: "Personalized Nutrition",
    copy:
      "Custom meal plans based on your goals, fitness level and dietary preferences. Track macros effortlessly.",
    color: "green",
  },
  {
    title: "Smart Workouts",
    copy:
      "Adaptive programs that adjust to your progress—from beginner to elite athletes.",
    color: "green",
  },
  {
    title: "Real-time Tracking",
    copy:
      "Monitor steps, water intake, calories, and vital metrics. Your progress, visualized.",
    color: "green",
  },
  {
    title: "Community Support",
    copy:
      "Join a community that keeps you accountable, motivated, and inspired.",
    color: "green",
  },
  {
    title: "Weekly Planning",
    copy:
      "See your complete roadmap, plan sessions, track progress, and stay consistent week by week.",
    color: "green",
  },
  {
    title: "Expert Guidance",
    copy:
      "Decades of insight distilled into every feature. Trusted by thousands.",
    color: "green", // keep bottom-right card green for consistency
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-white">
            Train Hard.
            <br />
            Think Sharp.
            <br />
            Live{" "}
            <span className="gf-gradient-text">Unstoppable</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
            A psychology-driven fitness system that upgrades your body, mind, and lifestyle.
            Built to win.
          </p>

          <div className="mt-8">
            <Link
              href="#plans"
              className="gf-cta inline-flex items-center rounded-xl px-5 py-3 font-semibold text-black bg-[var(--gf-btn)] hover:brightness-105"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto mb-8 max-w-6xl px-5">
        <h2 className="gf-section-title">Everything You Need to Succeed</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, copy, color }, i) => (
            <div key={i} className="gf-feature">
              {/* small gradient chip behind the icon */}
              <span className={`gf-icon ${color === "green" ? "green" : ""}`} />
              <h3 className="font-bold text-white mt-4">{title}</h3>
              <p className="mt-2 text-white/80">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMAND CENTER */}
      <CommandCenter />

      {/* PRICING */}
      <section id="plans" className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="gf-section-title">Choose Your <span className="gf-gradient-text">Transformation</span> Plan</h2>
        <div className="mt-6">
          <Plans />
        </div>
      </section>
    </main>
  );
}
