import Head from "next/head";
import Link from "next/link";
import CommandCenter from "../components/CommandCenter";

export default function Home() {
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp.</title>
        <meta
          name="description"
          content="A psychology-driven fitness system that upgrades your body, mind, and lifestyle. Built to win."
        />
      </Head>

      <main className="min-h-screen text-zinc-200">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-20">
          {/* top-right warm orange bloom (subtle) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 30% 30%, rgba(255,122,26,.22), rgba(255,255,255,0) 70%)",
            }}
          />
          {/* bottom-left ambient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 h-[560px] w-[560px] rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 70%, rgba(255,122,26,.10), rgba(255,255,255,0) 70%)",
            }}
          />

          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Train Hard.
              <br />
              Think Sharp.
              <br />
              Live{" "}
              <span className="gf-gradient-text">Unstoppable</span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400">
              A psychology-driven fitness system that upgrades your body, mind,
              and lifestyle. Built to win.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#membership"
                className="gf-cta inline-flex items-center gap-2 rounded-2xl bg-[var(--gf-btn)] px-6 py-3 font-semibold text-black hover:brightness-105"
              >
                Start Your Transformation
              </Link>

              <Link
                href="#preview"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-zinc-200 hover:bg-white/5"
              >
                Watch Preview
              </Link>
            </div>
          </div>
        </section>

        {/* WHY / FEATURES */}
        <section id="why" className="scroll-mt-[96px] py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="gf-section-title">Everything You Need to Succeed</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* 1 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">
                  Personalized Nutrition
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Custom meal plans based on your goals, fitness level, and dietary
                  preferences. Track macros effortlessly.
                </p>
              </div>

              {/* 2 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">Smart Workouts</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  AI-powered workout plans that adapt to your progress—from
                  beginner to elite athlete.
                </p>
              </div>

              {/* 3 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">Weekly Planning</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  See your complete roadmap. Plan sessions, track progress, and
                  stay consistent week by week.
                </p>
              </div>

              {/* 4 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">
                  Real-time Tracking
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Monitor steps, water intake, calories, and all vital metrics.
                  Your progress, visualized.
                </p>
              </div>

              {/* 5 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">
                  Community Support
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Join a community that keeps you accountable, motivated, and
                  inspired.
                </p>
              </div>

              {/* 6 */}
              <div className="gf-feature">
                <div className="gf-icon">★</div>
                <h3 className="text-lg font-semibold text-white">Expert Guidance</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Decades of insight distilled into every feature. Trusted by
                  thousands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMMAND CENTER */}
        <section id="preview" className="scroll-mt-[96px] py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="gf-section-title">Your Fitness Command Center</h2>
            <CommandCenter />
          </div>
        </section>

        {/* PRICING */}
        <section id="membership" className="scroll-mt-[96px] py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="gf-section-title">Choose Your Transformation Plan</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Starter */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-sm text-zinc-400">Starter</p>
                <p className="mb-6 text-3xl font-bold text-white">
                  $19<span className="text-sm text-zinc-400">/month</span>
                </p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Basic workout plans</li>
                  <li>Nutrition tracking</li>
                  <li>Daily metrics logging</li>
                  <li>Mobile app access</li>
                  <li>Community support</li>
                </ul>
                <button className="gf-cta mt-6 w-full rounded-xl bg-[var(--gf-btn)] px-5 py-3 font-semibold text-black hover:brightness-105">
                  Start Free Trial
                </button>
              </div>

              {/* Premium (most popular) */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-[var(--gf-orange-mid)]/40">
                <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-200">
                  MOST POPULAR
                </div>
                <p className="mb-2 text-sm text-zinc-400">Premium</p>
                <p className="mb-6 text-3xl font-bold text-white">
                  $39<span className="text-sm text-zinc-400">/month</span>
                </p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Everything in Starter</li>
                  <li>Personalized meal plans</li>
                  <li>Advanced workout design</li>
                  <li>Progress analytics</li>
                  <li>Priority support</li>
                </ul>
                <button className="gf-cta mt-6 w-full rounded-xl bg-[var(--gf-btn)] px-5 py-3 font-semibold text-black hover:brightness-105">
                  Get Premium
                </button>
              </div>

              {/* Elite */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-sm text-zinc-400">Elite</p>
                <p className="mb-6 text-3xl font-bold text-white">
                  $79<span className="text-sm text-zinc-400">/month</span>
                </p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Everything in Premium</li>
                  <li>1 on 1 personal coaching</li>
                  <li>Custom workout design</li>
                  <li>Advanced biometrics</li>
                  <li>Priority new features</li>
                </ul>
                <button className="gf-cta mt-6 w-full rounded-xl bg-[var(--gf-btn)] px-5 py-3 font-semibold text-black hover:brightness-105">
                  Go Elite
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
