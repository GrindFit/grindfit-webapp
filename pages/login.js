// pages/login.js
import { useEffect, useState } from "react";
import { isAuthed, login } from "@/lib/auth";
import { useRouter } from "next/router";

export default function Login(){
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [code,setCode] = useState("");

  useEffect(()=>{
    if(isAuthed()) {
      // If profile exists, go to app; otherwise onboard.
      const hasProfile = !!localStorage.getItem("grindfit_profile");
      router.replace(hasProfile?"/app":"/onboarding");
    }
  },[router]);

  function submit(e){
    e.preventDefault();
    if(!email || !code) return;
    // You can enforce a real code here or integrate Stripe/Memberstack later.
    login(email);
    const hasProfile = !!localStorage.getItem("grindfit_profile");
    router.push(hasProfile?"/app":"/onboarding");
  }

  return (
    <>
      <header className="nav sticky top-0 z-50">
        <div className="gf-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm" style={{background:"linear-gradient(90deg, var(--gf-amber), var(--gf-orange) 55%, var(--gf-vermillion))"}}/>
            <span className="tracking-wide font-semibold">GRINDFIT</span>
          </div>
        </div>
      </header>

      <main className="gf-container py-12 max-w-lg">
        <h1 className="text-2xl font-semibold mb-6">Log in</h1>
        <p className="small-dim mb-6">Members get access to workouts, meals, and the full Reset Protocol.</p>

        <form onSubmit={submit} className="space-y-4 gf-card">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@domain.com"/>
          </div>
          <div>
            <label className="block text-sm mb-1">Access Code</label>
            <input type="password" value={code} onChange={e=>setCode(e.target.value)} placeholder="Your member code"/>
          </div>
          <button className="btn-primary w-full" type="submit">Enter</button>
        </form>

        <p className="small-dim mt-4">Don’t have access yet? Use the hero CTAs to join, then come back here.</p>
      </main>
    </>
  );
}
