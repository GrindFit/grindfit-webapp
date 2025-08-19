// pages/member/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";

function doLogout() {
  try {
    localStorage.removeItem("grindfit_profile");
  } catch {}
  window.location.href = "/";
}

export default function MemberHome() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("grindfit_profile");
      setProfile(raw ? JSON.parse(raw) : null);
    } catch { setProfile(null); }
  }, []);

  const first = profile?.name?.split(" ")[0] || "Member";

  const cards = [
    { title: "Workouts",   desc: "Weekly sessions + follow-along videos.", href: "/member/workouts" },
    { title: "Nutrition",  desc: "Simple meals and macros for your goal.", href: "/member/nutrition" },
    { title: "Reset & Recover", desc: "Daily & emotional reset, mobility.", href: "/member/reset" },
    { title: "Mindset",    desc: "Micro-wins and cues that stick.",        href: "/member/mindset" },
    { title: "Membership", desc: "Extend or manage your plan.",            href: "/member/billing" },
  ];

  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 lg:py-14">
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Welcome back, <span className="brand-word">{first}</span>
          </h1>
          <p className="small-dim mt-2">Pick your path below.</p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => (
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
