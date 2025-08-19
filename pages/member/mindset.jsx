import Link from "next/link";
import Nav from "../../components/Nav";
function doLogout(){ try{localStorage.removeItem("grindfit_profile");}catch{} window.location.href="/"; }

export default function Mindset(){
  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Mindset</h1>
        <div className="gf-card">
          <p className="small-dim">
            Micro-wins, cues, and repeatable motions that build momentum. We’ll drop your weekly cue set here.
          </p>
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
