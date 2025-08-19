// pages/member/index.jsx
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { requireAuth, getProfile, logout } from "@/lib/auth";

export default function MemberHome() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!requireAuth()) return;
    setProfile(getProfile());
  }, []);

  if (!profile) return null;

  const firstName = profile.name?.split(" ")[0] || "Member";

  const cards = [
    {
      title: "Workouts",
      desc: "Your weekly sessions, follow-along videos, and progress.",
      href: "/member/workouts",
    },
    {
      title: "Nutrition",
      desc: "Simple meals and macros to match your goal.",
      href: "/member/nutrition",
    },
    {
      title: "Reset & Recover",
      desc: "Daily reset, emotional reset, mobility and breathwork.",
      href: "/member/reset",
    },
    {
      title: "Mindset",
      desc: "Micro-wins, cues, and momentum builders that stick.",
      href: "/member/mindset",
    },
    {
      title: "Membership",
      desc: "Extend, upgrade, or manage your plan.",
      href: "/member/billing",
    },
  ];

  return (
    <>
      <Nav rightSlot={<button onClick={logout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 lg:py-14">
        {/* Welcome */}
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Welcome back, <span className="brand-word">{firstName}</span>
          </h1>
          <p className="small-dim mt-2">
            Pick your path below. We’ll keep it simple, focused, and effective.
          </p>
        </section>

        {/* Feature grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(c => (
            <article key={c.title} className="gf-card flex flex-col">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="small-dim mt-1 flex-1">{c.desc}</p>
              <div className="mt-4">
                <Link className="btn-ghost no-underline" href={c.href}>
                  Open {c.title}
                </Link>
              </div>
            </article>
          ))}

          {/* CTA: quick start transformation */}
          <article className="gf-card md:col-span-2 lg:col-span-3 flex items-center justify-between flex-col md:flex-row gap-4">
            <div>
              <h4 className="font-semibold text-xl">Your next session is waiting</h4>
              <p className="small-dim mt-1">Zero guesswork. We’ll cue each block and keep you moving.</p>
            </div>
            <Link className="btn-primary no-underline" href="/member/workouts">Start Training</Link>
          </article>
        </section>
      </main>
    </>
  );
}
