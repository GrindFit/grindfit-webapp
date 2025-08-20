import Link from "next/link";
import Nav from "../../components/Nav";

export default function Billing() {
  return (
    <>
      <Nav />
      <main className="gf-container py-10">
        <h1 className="text-3xl font-extrabold mb-6">Membership</h1>
        <p className="mb-8">Manage plan, payment method, and extensions.</p>
        <Link className="btn-ghost" href="/member">← Back to Members</Link>
      </main>
    </>
  );
}
