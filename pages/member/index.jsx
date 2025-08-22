import Link from "next/link";
import MemberShell from "../../components/MemberShell";

export default function MemberHome() {
  return (
    <MemberShell>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold text-white/90 mb-6">
          Welcome back, <span className="text-orange-400">Member</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Tile
            title="Workouts"
            desc="Weekly sessions + follow-along videos."
            href="/member/workouts"
            cta="Open Workouts"
          />
          <Tile
            title="Nutrition"
            desc="Simple meals and macros for your goal."
            href="/member/nutrition"
            cta="Open Nutrition"
          />
          <Tile
            title="Reset & Recover"
            desc="Daily & emotional reset, mobility."
            href="/member/reset"
            cta="Open Reset & Recover"
          />
          <Tile
            title="Mindset"
            desc="Micro-wins and cues that stick."
            href="/member/mindset"
            cta="Open Mindset"
          />
          <Tile
            title="Membership"
            desc="Extend or manage your plan."
            href="/member/membership"
            cta="Open Membership"
          />
        </div>
      </section>
    </MemberShell>
  );
}

function Tile({ title, desc, href, cta }) {
  return (
    <div className="rounded-xl bg-black/40 border border-white/5 shadow-2xl shadow-black/40 p-5 backdrop-blur-md">
      <h3 className="text-white/90 font-medium mb-1">{title}</h3>
      <p className="text-white/60 text-sm mb-4">{desc}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:opacity-90 transition"
      >
        {cta}
      </Link>
    </div>
  );
}
