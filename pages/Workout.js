// pages/workout/[day].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requireAuth } from "@/lib/auth";

export default function WorkoutDay(){
  const router = useRouter();
  const { day } = router.query;
  const [session,setSession] = useState(null);

  useEffect(()=>{
    if(!requireAuth()) return;
    const w = localStorage.getItem("grindfit_plan");
    if(!w){ window.location.href="/onboarding"; return; }
    const plan = JSON.parse(w);
    const map = { monday:"Monday", tuesday:"Tuesday", wednesday:"Wednesday", thursday:"Thursday", friday:"Friday" };
    const label = map[(day||"").toLowerCase()];
    if(label && plan.week1 && plan.week1[label]){
      setSession({ label, blocks: plan.week1[label] });
    }
  },[day]);

  if(!session) return null;

  return (
    <>
      <header className="nav sticky top-0 z-50">
        <div className="gf-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm" style={{background:"linear-gradient(90deg, var(--gf-amber), var(--gf-orange) 55%, var(--gf-vermillion))"}}/>
            <span className="tracking-wide font-semibold">GRINDFIT</span>
          </div>
          <button onClick={()=>history.back()} className="btn-ghost">Back</button>
        </div>
      </header>

      <main className="gf-container py-10 space-y-6">
        <h1 className="text-2xl font-semibold">{session.label}</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {session.blocks.map((b,idx)=>(
              <div key={idx} className="gf-card">
                <div className="font-semibold mb-2">{b.title}</div>
                {b.items?.length>0 && (
                  <ul className="list-disc ml-5 small-dim space-y-1">
                    {b.items.map((it,i)=><li key={i}>{it}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="gf-card">
            <div className="font-semibold">Follow-along (Optional)</div>
            <p className="small-dim mt-2">Drop your video link here when ready. Placeholder for now.</p>
            <div className="mt-3 aspect-video rounded-xl border border-[color:var(--gf-stroke)] bg-[color:var(--gf-card)] grid place-content-center small-dim">
              Video Player
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
