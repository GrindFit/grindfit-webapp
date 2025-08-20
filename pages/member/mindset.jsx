import Link from "next/link";
import Nav from "../../components/Nav";

export default function Mindset() {
  return (
    <>
      <Nav />
      <main className="gf-container py-10">
        <h1 className="text-3xl font-extrabold mb-6">Mindset</h1>
        <p className="mb-8">Micro wins. Momentum. Make it a habit.</p>
        <Link className="btn-ghost" href="/member">← Back to Members</Link>
      </main>
    </>
  );
}
