import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function readJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [plan, setPlan] = useState([]);

  // hydrate
  useEffect(() => {
    const p = readJSON("grindfit_profile");
    const w = readJSON("grindfit_plan", []);
    if (!p || w.length === 0) {
      router.replace("/onboarding");
      return;
    }
    setProfile(p);
    setPlan(w);
  }, [router]);

  const toggleComplete = (idx) => {
    setPlan((prev) => {
      const next = prev.map((d, i) => (i === idx ? { ...d, complete: !d.complete } : d));
      localStorage.setItem("grindfit_plan", JSON.stringify(next));
      return next;
    });
  };

  if (!profile) return null;

  return (
    <>
      <Head>
        <title>GrindFit — Your Week</title>
      </Head>

      {/* Header */}
      <header className="container" style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="logo"><span className="logo-mark" /><span className="logo-type">GRINDFIT</span></span>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="/" className="btn btn-ghost">Home</a>
            <a
              className="btn btn-ghost"
              onClick={() => {
                localStorage.removeItem("grindfit_profile");
                localStorage.removeItem("grindfit_plan");
                router.replace("/onboarding");
              }}
            >
              Reset
            </a>
          </div>
        </div>
      </header>

      {/* Overview */}
      <main className="section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="card" style={{ padding: 16, marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
              <div>
                <div className="kicker">Welcome</div>
                <h1 style={{ margin: 4, fontSize: "clamp(22px,3vw,30px)", fontWeight: 800 }}>
                  {profile.name}&nbsp;— {profile.goal} · {profile.level} · {profile.gender}
                </h1>
                <p className="muted" style={{ marginTop: 6 }}>
                  Your training week (Mon–Fri by default). Tap a day to mark complete.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {profile.days.map((d) => (
                  <span key={d} className="btn" style={{ padding: ".45rem .7rem" }}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Week grid */}
          <div
            className="feature-grid"
            style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}
          >
            {plan.map((d, idx) => (
              <article key={idx} className="card" style={{ padding: 16, borderRadius: 14 }}>
                <div className="kicker">{d.day}</div>
                <h3 style={{ margin: "6px 0 6px", fontWeight: 700 }}>{d.title}</h3>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--brand-ink-dim)" }}>
                  {d.cues.map((c, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>{c}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                  <button
                    className="btn btn-amber"
                    onClick={() => toggleComplete(idx)}
                    style={{
                      background: d.complete
                        ? "linear-gradient(180deg, #5ee179, #24c75d)"
                        : undefined,
                      borderColor: d.complete ? "rgba(36,199,93,.45)" : undefined,
                    }}
                  >
                    {d.complete ? "Completed" : "Complete"}
                  </button>
                  <a className="btn btn-ghost" href="#notes">Notes</a>
                </div>
              </article>
            ))}
          </div>

          <div className="card" style={{ padding: 16, marginTop: 18 }}>
            <div className="kicker">Meals (Track)</div>
            <p className="muted" style={{ marginTop: 6 }}>
              We’ll attach the plan-specific meal track here (Fat Loss / Lean Mass / Mass Gain).  
              For now, keep protein high, hydrate, and hit your sleep target. I’ll wire your CSVs in the next pass.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
