import Link from "next/link";
import Nav from "../../components/Nav";
function doLogout(){ try{localStorage.removeItem("grindfit_profile");}catch{} window.location.href="/"; }

export default function Reset(){
  return (
    <>
      <Nav rightSlot={<button onClick={doLogout} className="btn-ghost">Log out</button>} />
      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">Reset &amp; Recover</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Daily Reset","A simple morning pattern that sharpens focus and discipline."],
            ["Emotional Reset","A short, powerful block that clears mental weight and restores momentum."],
            ["Recovery Built-In","Movement, mobility, and breathwork — integrated without complexity."],
          ].map(([t,d])=>(
            <div key={t} className="gf-card">
              <h3 className="font-semibold">{t}</h3>
              <p className="small-dim mt-1">{d}</p>
            </div>
          ))}
        </div>
        <Link className="btn-ghost" href="/member">Back to Members</Link>
      </main>
    </>
  );
}
