import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Home(){
  return (
    <>
      <Head>
        <title>GrindFit — Train Hard. Think Sharp. Live Unstoppable</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0f13" />
        <meta name="description" content="The psychology-driven fitness system that upgrades your body, mind, and lifestyle." />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* System stack is default; if you prefer Manrope uncomment below */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800;1000&display=swap" rel="stylesheet" /> */}
      </Head>

      <Nav/>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container stack-lg">
            <h1>
              <span>Train Hard.</span><br/>
              <span>Think Sharp.</span><br/>
              <span>Live <span className="brand-word">Unstoppable</span></span>
            </h1>
            <p>
              A psychology-driven fitness system that upgrades your body, mind, and lifestyle — with adaptive plans, habit cues, and recovery built in. No noise. No guesswork.
            </p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <Link className="btn-primary" href="/membership">Start Your Transformation</Link>
              <a className="btn-ghost" href="#why">See Features</a>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="section">
          <div className="container">
            <h2 style={{fontWeight:1000, marginBottom:18}}>Why GrindFit works</h2>
            <div className="grid-3">
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Goal-tuned plans</div>
                <div>Built for Fat Loss, Lean Mass, and Mass Gain. We serve the right week — the one you can actually finish.</div>
              </div>
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Mindset-first</div>
                <div>Micro-wins and cues create compounding momentum. Not just your workout — your whole day.</div>
              </div>
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Lifestyle upgrade</div>
                <div>Recovery, sleep, and stress integrated. Lower friction, higher output. Less burnout, more progress.</div>
              </div>
            </div>
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="section">
          <div className="container stack-md">
            <h2 style={{fontWeight:1000, marginBottom:10}}>Nutrition, made simple</h2>
            <div className="pills" aria-label="Nutrition goal">
              <button className="pill is-active" aria-pressed="true">Fat Loss</button>
              <button className="pill" aria-pressed="false">Lean Mass</button>
              <button className="pill" aria-pressed="false">Mass Gain</button>
            </div>

            <div className="grid-3" style={{marginTop:16}}>
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Calories</div>
                <div>1900</div>
              </div>
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Protein</div>
                <div>180</div>
              </div>
              <div className="card">
                <div className="title" style={{fontWeight:900, marginBottom:6}}>Carbs</div>
                <div>150</div>
              </div>
            </div>

            <div style={{marginTop:12}}>
              <Link className="btn-primary" href="/membership">Access full meal library</Link>
            </div>
          </div>
        </section>

        {/* RESET & RECOVER */}
        <section id="reset" className="section">
          <div className="container">
            <h2 style={{fontWeight:1000, marginBottom:14}}>Reset &amp; Recover</h2>
            <div className="grid-3">
              <div className="card"><div className="title" style={{fontWeight:900, marginBottom:6}}>Daily reset</div><div>Cold shower + water on wake, 10k steps, 20 min reading. Low-friction habits that build discipline.</div></div>
              <div className="card"><div className="title" style={{fontWeight:900, marginBottom:6}}>Emotional reset</div><div>Gratitude, letting-go, social reconnection. Short, powerful, repeatable.</div></div>
              <div className="card"><div className="title" style={{fontWeight:900, marginBottom:6}}>Mobility &amp; breath</div><div>5–10 min flow, barefoot walks, or a weekly ruck. Recovery that raises output.</div></div>
            </div>
          </div>
        </section>

        {/* MEDIA PLACEHOLDERS (you’ll swap in real video/images later) */}
        <section className="section">
          <div className="container">
            <h2 style={{fontWeight:1000, marginBottom:14}}>See it in action</h2>
            <div className="media-grid">
              <div className="media">Hero video placeholder</div>
              <div className="media">Client results</div>
              <div className="media">Coaching clip</div>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP PREVIEW */}
        <section className="section" id="plans">
          <div className="container">
            <h2 style={{fontWeight:1000, marginBottom:14}}>Membership</h2>
            <div className="pricing">
              <div className="card price-card">
                <div className="title">Starter</div>
                <div className="amount">$29/mo</div>
                <ul>
                  <li>Weekly plan preview</li>
                  <li>Nutrition basics</li>
                  <li>Reset &amp; Recover lite</li>
                </ul>
                <Link className="btn-primary" href="/membership">Join GrindFit</Link>
              </div>
              <div className="card price-card">
                <div className="title">Elite</div>
                <div className="amount">$49/mo</div>
                <ul>
                  <li>Full Mon–Fri workouts</li>
                  <li>Goal+gender meals</li>
                  <li>Full Reset Protocol</li>
                </ul>
                <Link className="btn-primary" href="/membership">Join GrindFit</Link>
              </div>
              <div className="card price-card">
                <div className="title">Pro</div>
                <div className="amount">$79/mo</div>
                <ul>
                  <li>Everything in Elite</li>
                  <li>Priority updates</li>
                  <li>Future coach add-ons</li>
                </ul>
                <Link className="btn-primary" href="/membership">Join GrindFit</Link>
              </div>
              <div className="card price-card">
                <div className="title">Team</div>
                <div className="amount">Custom</div>
                <ul>
                  <li>Group programs</li>
                  <li>Team accountability</li>
                  <li>Coach integration</li>
                </ul>
                <Link className="btn-primary" href="/membership">Contact</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} GrindFit. Built to win.</div>
      </footer>
    </>
  );
}
