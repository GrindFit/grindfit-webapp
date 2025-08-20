// pages/member/index.jsx
import Link from "next/link";
import Nav from "../../components/Nav";

export default function MemberHome() {
  return (
    <>
      <Nav rightSlot={<Link className="btn-ghost" href="/logout">Log out</Link>} />
      <main className="gf-container py-10">
        <h1 className="text-4xl font-extrabold mb-8">Welcome back</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card href="/member/workouts" title="Workouts" desc="Goal-tuned plans. Start training now." />
          <Card href="/member/nutrition" title="Nutrition" desc="Simple, sustainable, results-driven." />
          <Card href="/member/reset" title="Reset & Recover" desc="Sleep, mobility, stress—engineered to stick." />
          <Card href="/member/mindset" title="Mindset" desc="Micro wins. Momentum. Make it stick." />
          <Card href="/member/billing" title="Membership" desc="Manage plan, payment, and extensions." />
        </section>
      </main>
    </>
  );
}

function Card({ href, title, desc }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-6 border border-neutral-800 hover:border-neutral-600 transition-colors bg-neutral-900/40"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-neutral-300 text-sm">{desc}</p>
    </Link>
  );
}
