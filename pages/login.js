import { useEffect, useState } from "react";
import { isAuthed, login } from "@/lib/auth";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";

export default function Login(){
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [code,setCode] = useState("");

  useEffect(()=>{
    if(isAuthed()) {
      const hasProfile = !!localStorage.getItem("grindfit_profile");
      router.replace(hasProfile?"/app":"/onboarding");
    }
  },[router]);

  function submit(e){
    e.preventDefault();
    if(!email || !code) return;
    login(email);
    const hasProfile = !!localStorage.getItem("grindfit_profile");
    router.push(hasProfile?"/app":"/onboarding");
  }

  return (
    <>
      <Nav />

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
      </main>
    </>
  );
}
