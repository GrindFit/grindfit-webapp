// pages/onboarding.js
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import { requireAuth } from "@/lib/auth";
import { loadMeals, loadWeekOneMonFri } from "@/lib/data";

const GOALS = ["Fat Loss", "Lean Mass", "Mass Gain"];
const GENDERS = ["Male", "Female"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function Onboarding() {
  const router = useRouter();

  // Gate: if no token, bounce to /login
  useEffect(() => {
    requireAuth();
  }, []);

  // Form state
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(GOALS[0]);
  const [gender, setGender] = useState(GENDERS[0]);
  const [level, setLevel] = useState(LEVELS[0]);
  const [days, setDays] = useState(new Set(WEEKDAYS)); // Mon–Fri default
  const [submitting, setSubmitting] = useState(false);

  // (Optional) tiny preview so the page feels alive
  const [calories, setCalories] = useState(null);
  const [previewWorkouts, setPreviewWorkouts] = useState([]);
  const [loadingPreview, setLoadingPreview] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [mealsJson, week1] = await Promise.all([
          loadMeals().catch(() => []),
          loadWeekOneMonFri().catch(() => []),
        ]);
        if (!alive) return;

        // Try to infer calories for the currently picked goal
        const match =
          mealsJson.find(
            (m) =>
              (m.goal || m.Goal || "").toLowerCase() === goal.toLowerCase()
          ) || {};
        const cals =
          match.calories ?? match.Calories ?? match.kcal ?? match.Kcal ?? null;

        setCalories(cals ?? null);
        setPreviewWorkouts(Array.isArray(week1) ? week1.slice(0, 5) : []);
      } finally {
        if (alive) setLoadingPreview(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [goal]);

  const toggleDay = (d) =>
    setDays((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });

  const orderedDays = useMemo(
    () =>
      Array.from(days).sort(
        (a, b) => WEEKDAYS.indexOf(a) - WEEKDAYS.indexOf(b)
      ),
    [days]
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const profile = {
        name: name.trim(),
        goal,
        gender,
        level,
        days: orderedDays,
        createdAt: new Date().toISOString(),
      };

      // Save for the dashboard
      try {
        localStorage.setItem("grindfit_profile", JSON.stringify(profile));
        if (!localStorage.getItem("gf_token")) {
          // Safety: ensure a token exists so /app doesn't bounce
          localStorage.setItem("gf_token", "session");
        }
      } catch {}

      router.replace("/app");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Nav />
      <main className="container py-16">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FORM */}
          <div className="card p-6">
            <h1 className="text-2xl font-extrabold mb-2">Let’s build your plan</h1>
            <p className="text-muted mb-6">
              Pick your goal, level, gender, and the days you’ll train. We’ll wire the
              right week one — then unlock the next week automatically.
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="label">Your name</label>
                <input
                  className="input"
                  placeholder="e.g., Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">Goal</label>
                  <select
                    className="input"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    {GOALS.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Gender</label>
                  <select
                    className="input"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    {GENDERS.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Level</label>
                  <select
                    className="input"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    {LEVELS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Training days</label>
                  <div className="flex flex-wrap gap-2">
                    {WEEKDAYS.map((d) => {
                      const active = days.has(d);
                      return (
                        <button
                          type="button"
                          key={d}
                          onClick={() => toggleDay(d)}
                          className={active ? "chip chip-on" : "chip"}
                          aria-pressed={active}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || !name.trim() || orderedDays.length === 0}
                  className="btn-primary"
                >
                  {submitting ? "Generating…" : "Generate my week 1"}
                </button>
              </div>
            </form>
          </div>

          {/* PREVIEW / REASSURANCE */}
          <div className="card p-6">
            <h2 className="text-xl font-extrabold mb-2">What you’ll see inside</h2>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="dot mt-2" />
                <div>
                  <p className="font-semibold">Mon–Fri training, ready to go</p>
                  <p className="text-muted">
                    Session layout, sets & reps, pacing cues. Week 1 unlocks now — week 2
                    unlocks after completion.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="dot mt-2" />
                <div>
                  <p className="font-semibold">Meals aligned to your goal</p>
                  <p className="text-muted">
                    Simple, high-quality meals that fit your day.{" "}
                    {loadingPreview ? (
                      "Loading preview…"
                    ) : calories ? (
                      <span className="text-amber-300">
                        ~{calories} cals for <strong>{goal}</strong>.
                      </span>
                    ) : (
                      "Preview ready."
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="dot mt-2" />
                <div>
                  <p className="font-semibold">Reset & Recover built in</p>
                  <p className="text-muted">
                    Low-friction habits (sleep, breath, mobility) to raise output without
                    burnout.
                  </p>
                </div>
              </li>
            </ul>

            <div className="rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] p-4">
              <p className="text-sm font-semibold mb-2">Week 1 snapshot</p>
              {loadingPreview ? (
                <p className="text-muted">Preparing…</p>
              ) : previewWorkouts.length ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {previewWorkouts.map((w, i) => (
                    <li
                      key={i}
                      className="rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] p-3"
                    >
                      <p className="font-semibold">
                        {w.day || w.Day || `Day ${i + 1}`}
                      </p>
                      <p className="text-muted">
                        {(w.title || w.Title || w.focus || "").toString()}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">Ready to unlock inside the app.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
