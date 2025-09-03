// pages/index.jsx
import Link from "next/link";
import CommandCenter from "../components/CommandCenter";
import {
  Utensils,
  Dumbbell,
  CalendarDays,
  Activity,
  Users,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* ====================== HERO ====================== */}
      <section className="relative overflow-hidden">
        {/* subtle top-right orange bloom (already styled in globals) */}
        <div aria-hidden className="pointer-events-none absolute -top-40 right-[-8rem] hidden md:block">
          <div
            className="radial-gradient"
            style={{
              width: 480,
              height: 480,
              borderRadius: "50%",
              filter: "blur(70px)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-zinc-100">
              Train Hard.
              <br />
              Think Sharp.
              <br />
              Live{" "}
              <span className="gf-gradient-text inline-block">
                Unstoppable
              </span>
              .
            </h1>

            <p className="mt-5 text-zinc-300/80 max-w-2xl">
              A psychology-driven fitness system that upgrades your body, mind,
              and lifestyle. Built to win.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-zinc-950 shadow-sm transition hover:brightness-110"
                style={{ background: "var(--gf-btn)" }}
              >
                Start Your Transformation
              </Link>

              <Link
                href="#watch"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-zinc-200/90 ring-1 ring-inset ring-white/10 hover:bg-white/5"
              >
                Watch Preview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FEATURES ====================== */}
      <section id="why" className="container mx-auto px-4 pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-200 mb-6">
          Everything You Need to{" "}
          <span className="gf-gradient-text">Succeed</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Personalized Nutrition */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Utensils className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Personalized Nutrition</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Custom meal plans based on your goals, fitness level, and dietary
              preferences. Track macros effortlessly.
            </p>
          </div>

          {/* 2. Smart Workouts */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Dumbbell className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Smart Workouts</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Adaptive programs that adjust to your progress — from beginner to
              elite athlete.
            </p>
          </div>

          {/* 3. Weekly Planning */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <CalendarDays className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Weekly Planning</h3>
            <p className="mt-2 text-sm text-zinc-400">
              See your complete fitness roadmap. Stay consistent week by week.
            </p>
          </div>

          {/* 4. Real-time Tracking */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Activity className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Real-time Tracking</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Monitor steps, water intake, calories, and all vital metrics. Your
              progress, visualized beautifully.
            </p>
          </div>

          {/* 5. Community Support */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Users className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Community Support</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Join a community that keeps you accountable. Share progress, get
              motivated, achieve together.
            </p>
          </div>

          {/* 6. Expert Guidance */}
          <div className="gf-feature p-6">
            <div className="mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <Shield className="h-5 w-5 text-zinc-200" />
              </span>
            </div>
            <h3 className="text-zinc-100 font-semibold">Expert Guidance</h3>
            <p className="mt-2 text-sm text-zinc-400">
              25 years of industry expertise distilled into every feature.
              Trusted by millions.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== COMMAND CENTER (dashboard teaser) ====================== */}
      <section id="watch" className="container mx-auto px-4 pb-16 md:pb-24">
        <h2 className="sr-only">Dashboard preview</h2>
        <CommandCenter />
      </section>

      {/* ====================== PRICING ====================== */}
      <section id="pricing" className="container mx-auto px-4 pb-24">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-200 mb-6">
          Choose Your <span className="gf-gradient-text">Transformation</span> Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-sm text-zinc-400 mb-2">Starter</div>
            <div className="text-3xl font-extrabold text-zinc-100">$19</div>
            <div className="text-xs text-zinc-500 mb-4">/month</div>
            <ul className="space-y-2 text-sm text-zinc-300/90">
              <li>Basic workout plans</li>
              <li>Nutrition tracking</li>
              <li>Daily metrics logging</li>
              <li>Mobile app access</li>
              <li>Community support</li>
            </ul>
            <Link
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold text-zinc-950 shadow-sm transition hover:brightness-110"
              style={{ background: "var(--gf-btn)" }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl bg-white/5 ring-2 ring-[var(--gf-orange-mid)] p-6 relative">
            <div className="absolute -top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/15 text-zinc-200">
              MOST POPULAR
            </div>
            <div className="text-sm text-zinc-400 mb-2">Premium</div>
            <div className="text-3xl font-extrabold text-zinc-100">$39</div>
            <div className="text-xs text-zinc-500 mb-4">/month</div>
            <ul className="space-y-2 text-sm text-zinc-300/90">
              <li>Everything in Starter</li>
              <li>Personalized meal plans</li>
              <li>Advanced workout library</li>
              <li>Progress analytics</li>
              <li>Priority support</li>
            </ul>
            <Link
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold text-zinc-950 shadow-sm transition hover:brightness-110"
              style={{ background: "var(--gf-btn)" }}
            >
              Get Premium
            </Link>
          </div>

          {/* Elite */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-sm text-zinc-400 mb-2">Elite</div>
            <div className="text-3xl font-extrabold text-zinc-100">$79</div>
            <div className="text-xs text-zinc-500 mb-4">/month</div>
            <ul className="space-y-2 text-sm text-zinc-300/90">
              <li>Everything in Premium</li>
              <li>1-on-1 personal coaching</li>
              <li>Custom workout design</li>
              <li>Nutrition consultations</li>
              <li>Elite community access</li>
            </ul>
            <Link
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold text-zinc-950 shadow-sm transition hover:brightness-110"
              style={{ background: "var(--gf-btn)" }}
            >
              Go Elite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
