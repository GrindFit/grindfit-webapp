import Head from "next/head";
import CommandCenter from "../components/CommandCenter";
import { Utensils, Dumbbell, Gauge, Users, CalendarDays, ShieldCheck, Crown } from "lucide-react";

function FeatureCard({ title, desc, Icon, color = "orange" }) {
  return (
    <div className="gf-feature">
      <div className={`gf-icon ${color === "green" ? "gf-icon--green" : ""}`}>
        <Icon size={22} />
      </div>
      <h3 className="font-bold text-white mt-4">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{desc}</p>
    </div>
  );
}

function PricingCard({ name, price, period, items, featured = false, popular = false }) {
  return (
    <div className={`plan-card ${featured ? "plan-card--featured" : ""}`}>
      {popular && (
        <span className="badge-popular">
          <Crown size={16} /> Most Popular
        </span>
      )}
      <div>
        <p className="text-sm opacity-75">{name}</p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold">${price}</span>
          <span className="opacity-70 mb-1 text-sm">/{period}</span>
        </div>
      </div>

      <ul className="space-y-2 text-sm">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span className="gf-icon gf-icon--green w-5 h-5 rounded-md text-[10px] flex items-center justify-center">✓</span>
            <span className="opacity-90">{t}</span>
          </li>
        ))}
      </ul>

      <button className="gf-cta mt-2">{featured ? "Get Premium" : "Start Free Trial"}</button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit</title>
        <meta name="description" content="Think Sharp. Live Unstoppable." />
      </Head>

      {/* NAV (assumes your existing Nav uses <Brand />) */}

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-5 pt-20 pb-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-none">
          Train Hard.
          <br />
          Think Sharp.
          <br />
          Live <span className="gf-gradient-text">Unstoppable</span>
        </h1>
        <p className="max-w-2xl mt-5 opacity-85">
          A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win.
        </p>
        <div className="mt-6">
          <button className="gf-cta px-5 py-3 rounded-xl font-semibold">
            Start Your Transformation
          </button>
        </div>

        {/* Features */}
        <section id="why" className="mt-16">
          <h2 className="gf-section-title text-3xl sm:text-4xl">
            Everything You Need to <span className="gf-gradient-text">Succeed</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <FeatureCard
              title="Personalized Nutrition"
              desc="Custom meal plans based on your goals, fitness level, and preferences. Track macros effortlessly."
              Icon={Utensils}
            />
            <FeatureCard
              title="Smart Workouts"
              desc="Adaptive programs that adjust to your progress — from beginner to elite athlete."
              Icon={Dumbbell}
            />
            <FeatureCard
              title="Weekly Planning"
              desc="Plan sessions and see your full roadmap. Stay consistent week by week."
              Icon={CalendarDays}
            />
            <FeatureCard
              title="Real-time Tracking"
              desc="Monitor steps, water intake, calories, and vital metrics. Your progress, visualized."
              Icon={Gauge}
              color="green"
            />
            <FeatureCard
              title="Community Support"
              desc="Join a community that keeps you accountable, motivated, and inspired."
              Icon={Users}
              color="green"
            />
            <FeatureCard
              title="Expert Guidance"
              desc="Decades of insight distilled into every feature. Trusted by thousands."
              Icon={ShieldCheck}
            />
          </div>
        </section>

        {/* Command Center */}
        <CommandCenter />

        {/* Pricing */}
        <section id="pricing" className="mt-20">
          <h2 className="gf-section-title text-3xl sm:text-4xl">
            Choose Your <span className="gf-gradient-text">Transformation Plan</span>
          </h2>

          <div className="grid lg:grid-cols-4 gap-6 mt-8">
            <PricingCard
              name="Starter"
              price="19"
              period="month"
              items={[
                "Basic workout plans",
                "Nutrition tracking",
                "Daily metrics logging",
                "Mobile app access",
                "Community support",
              ]}
            />
            <PricingCard
              name="Premium"
              price="39"
              period="month"
              featured
              popular
              items={[
                "Everything in Starter",
                "AI-progressive programming",
                "Personalized meal planning",
                "Advanced analytics",
                "Priority support",
              ]}
            />
            <PricingCard
              name="Elite"
              price="59"
              period="month"
              items={[
                "Everything in Premium",
                "1-on-1 personal coaching",
                "Custom workout design",
                "Advanced biometrics",
                "Nutrition consultations",
              ]}
            />
            <PricingCard
              name="Champion"
              price="79"
              period="month"
              items={[
                "All Elite features",
                "Exclusive live workshops",
                "Elite community access",
                "Goal setting sprints",
                "Priority new features",
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}
