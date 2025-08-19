import { useEffect } from "react";
import Nav from "@/components/Nav";
import { requireAuth, logout } from "@/lib/auth";
import Link from "next/link";

export default function Billing() {
  useEffect(()=>{ requireAuth(); },[]);
  return (
    <>
      <Nav rightSlot={<button onClick={logout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Membership</h1>
        <div className="gf-card">
          <p className="small-dim">
            Extend or change membership. (When you’re ready, we’ll wire this to Stripe checkout links for 1/3/6/12-month plans.)
          </p>
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
