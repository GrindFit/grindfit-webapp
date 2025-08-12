import Head from "next/head";
import Nav from "../components/Nav";
import { useState } from "react";

export default function Login(){
  const [email, setEmail] = useState("");

  function onSubmit(e){
    e.preventDefault();
    alert("Demo: send magic link to " + email);
  }

  return (
    <>
      <Head>
        <title>GrindFit — Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav/>
      <main className="section">
        <div className="container" style={{maxWidth: 520}}>
          <h1 style={{fontWeight:1000, marginBottom:12}}>Access GrindFit</h1>
          <p style={{color:"#a4afba", marginBottom:16}}>Enter your email to get a login link.</p>
          <form onSubmit={onSubmit} className="card" style={{padding:18, display:"grid", gap:12}}>
            <label htmlFor="email" style={{fontWeight:800}}>Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@domain.com"
              style={{
                borderRadius:12, border:"1px solid var(--line)", padding:"12px 14px",
                background:"#0f141a", color:"#eef2f6"
              }}
            />
            <button className="btn-primary" type="submit">Send link</button>
          </form>
        </div>
      </main>
    </>
  );
}
