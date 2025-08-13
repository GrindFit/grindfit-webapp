// pages/membership.js
import Link from "next/link";
import Nav from "@/components/Nav";

const PLANS = [
  {
    id: "12",
    term: "12 months",
    badge: "Best value",
    perks: [
      "Weekly plan previews",
      "Goal-tuned meals",
      "Reset & Recover protocol",
      "Priority updates",
    ],
  },
  {
    id: "6",
    term: "6 months",
    badge: null,
    perks: [
      "Weekly plan previews",
      "Goal-tuned meals",
      "Reset & Recover protocol",
      "Progress tracking",
    ],
  },
  {
    id: "3",
    term: "3 months",
    badge: null,
    perks: [
      "Weekly plan previews",
      "Goal-tuned meals",
      "Reset & Recover protocol",
      "Coach add-on eligible",
    ],
  },
  {
    id: "1",
    term: "1 month",
    badge: null,
    perks: [
      "Weekly plan previews",
      "Goal-tuned meals",
      "Reset & Recover protocol",
      "Cancel anytime",
    ],
  },
];

export default function Membership() {
  return (
    <>
      <Nav />

      <main className="gf-container py-16 lg:py-24">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Choose your <span className="text-gradient">Membership</span>
          </h1>
          <p className="mt-5 text-lg text-[color:var(--gf-text-dim)]">
            14-day free trial on every plan. Cancel anytime. No guesswork — just results.
          </p>
        </section>

        {/* Pricing grid */}
        <section className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((p) => (
            <article
              key={p.id}
              className={`gf-card flex flex-col ${p.id === "12" ? "ring-1 ring-white/30" : ""}`}
            >
              {p.badge && (
                <span className="btn-pill inline-block text-xs px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}

              <h3 className="font-bold text-xl mt-3">{p.term}</h3>
              <p className="small-dim mt-1">
                14-day free trial, then billed every {p.id} {p.id === "1" ? "month" : "months"}.
              </p>

              <ul className="small-dim mt-4 list-disc ml-5 space-y-1">
                {p.perks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-5">
                <span className="btn-pill inline-block">14-day free trial</span>
              </div>

              <Link
                href={`/login?plan=${p.id}m`}
                className="btn-primary mt-4 no-underline text-center"
              >
                Start free trial
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-10 small-dim">
          <p>
            After your free trial, your plan renews automatically based on the term you chose. You can
            cancel anytime from your account. Prices shown at checkout.
          </p>
        </section>
      </main>
    </>
  );
}
