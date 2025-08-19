import Link from "next/link";
import Nav from "../../components/Nav";
function doLogout(){ try{localStorage.removeItem("grindfit_profile");}catch{} window.location.href="/"; }

export default function Nutrition(){
  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Nutrition</h1>
        <div className="gf-card">
          <p className="small-dim">Your simple plan with totals and meal ideas. (We’ll hook this to your real data next.)</p>
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
