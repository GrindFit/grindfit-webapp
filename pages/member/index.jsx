// /pages/member/index.jsx
import Link from "next/link";
import MemberShell from "../../components/MemberShell";

export default function MemberHome() {
  return (
    <MemberShell>
      {(user) => {
        // Make a nice name from metadata or email prefix
        const meta = user?.user_metadata || {};
        const name =
          meta.first_name ||
          meta.full_name ||
          meta.name ||
          (user?.email ? user.email.split("@")[0] : "Member");

        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Welcome back, <span className="text-orange-400">{name}</span>
              </h1>
              <p className="text-white/70 mt-2">Pick your path below.</p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <SectionCard
                title="Workouts"
                desc="Weekly sessions + follow-along videos."
                href="/member/workouts"
                cta="Open Workouts"
              />
              <SectionCard
                title="Nutrition"
                desc="Simple meals and macros for your goal."
                href="/member/nutrition"
                cta="Open Nutrition"
              />
              <SectionCard
                title="Reset & Recover"
                desc="Daily & emotional reset, mobility."
                href="/member/reset"
                cta="Open Reset & Recover"
              />
              <SectionCard
                title="Mindset"
                desc="Micro-wins and cues that stick."
                href="/member/mindset"
                cta="Open Mindset"
              />
              <SectionCard
                title="Membership"
                desc="Extend or manage your plan."
                href="/member/membership"
                cta="Open Membership"
              />
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-medium text-white">Your next session is waiting</h3>
              <p className="text-white/70 text-sm mt-1">
                Zero guesswork. We’ll cue each block and keep you moving.
              </p>
              <Link
                href="/member/workouts"
                className="mt-4 inline-flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-black hover:bg-orange-400"
              >
                Start Training
              </Link>
            </div>
          </>
        );
      }}
    </MemberShell>
  );
}

function SectionCard({ title, desc, href, cta }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/70 text-sm mt-1">{desc}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
      >
        {cta}
      </Link>
    </div>
  );
}
