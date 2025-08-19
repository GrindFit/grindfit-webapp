import Link from "next/link";
import Nav from "../../components/Nav";
function doLogout(){ try{localStorage.removeItem("grindfit_profile");}catch{} window.location.href="/"; }

export default function Billing(){
  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Membership</h1>
        <div className="gf-card">
          <p className="small-dim">
            Extend or change membership. (We’ll wire this to Stripe checkout links for 1/3/6/12-month plans.)
          </p>
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
