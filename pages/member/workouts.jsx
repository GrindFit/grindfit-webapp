import Link from "next/link";
import Nav from "../../components/Nav";

export default function Workouts() {
  return (
    <>
      <Nav />
      <main className="gf-container py-10">
        <h1 className="text-3xl font-extrabold mb-6">Workouts</h1>
        <p className="mb-8">Your goal-tuned training lives here.</p>
        <Link className="btn-ghost" href="/member">← Back to Members</Link>
      </main>
    </>
  );
}
