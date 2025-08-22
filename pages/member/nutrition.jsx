// pages/member/nutrition.jsx
import { useState } from "react"
import MemberShell from "../../components/MemberShell"

const goals = [
  { id: "fat-loss", label: "Fat Loss", blurb: "Calorie deficit with high protein and simple meals." },
  { id: "lean-mass", label: "Lean Mass", blurb: "Slight surplus, clean carbs, and recovery-focused." },
  { id: "mass-gain", label: "Mass Gain", blurb: "Bigger surplus, convenient calories, still quality." },
]

const levels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
]

const genders = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
]

export default function NutritionPage() {
  const [goal, setGoal] = useState("fat-loss")
  const [level, setLevel] = useState("beginner")
  const [gender, setGender] = useState("male")

  const selectedGoal = goals.find(g => g.id === goal)

  return (
    <MemberShell>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Nutrition
        </h1>
        <p className="text-white/70 mt-1">
          Choose your goal, experience level, and sex to generate your plan.
        </p>
      </section>

      {/* Controls */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Goal */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur-md">
            <div className="text-sm font-medium mb-2">Goal</div>
            <div className="flex flex-wrap gap-2">
              {goals.map(g => (
                <button
                  key={g.id}
                  onClick={() => setGoal(g.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition
                    ${goal === g.id ? "bg-orange-500 text-black shadow" : "bg-white/10 hover:bg-white/15 text-white"}
                  `}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-3">{selectedGoal.blurb}</p>
          </div>

          {/* Level */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur-md">
            <div className="text-sm font-medium mb-2">Level</div>
            <div className="flex flex-wrap gap-2">
              {levels.map(l => (
                <button
                  key={l.id}
                  onClick={() => setLevel(l.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition
                    ${level === l.id ? "bg-orange-500 text-black shadow" : "bg-white/10 hover:bg-white/15 text-white"}
                  `}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sex */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur-md">
            <div className="text-sm font-medium mb-2">Sex</div>
            <div className="flex flex-wrap gap-2">
              {genders.map(s => (
                <button
                  key={s.id}
                  onClick={() => setGender(s.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition
                    ${gender === s.id ? "bg-orange-500 text-black shadow" : "bg-white/10 hover:bg-white/15 text-white"}
                  `}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Preview */}
      <section className="max-w-6xl mx-auto px-6 mt-6">
        <div className="rounded-2xl bg-black/50 ring-1 ring-white/10 p-6 md:p-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">
              {labelize(level)} • {labelize(goal)} • {labelize(gender)}
            </h2>
            <ul className="mt-4 space-y-2 text-white/85 text-sm">
              <li>• Calories and macros tailored for {labelize(gender)} {labelize(level)} targeting {labelize(goal)}</li>
              <li>• 3–5 easy meals/day with shopping list & swaps</li>
              <li>• Weekly adjustments and simple “plate method” visuals</li>
              <li>• Snack options, eating out guide, hydration targets</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="text-sm text-white/70">Macro snapshot</div>
              <div className="mt-2 text-2xl font-semibold">
                {macroEstimate({ goal, level, gender }).calories} kcal
              </div>
              <div className="mt-3 text-sm text-white/80 space-y-1">
                <div>Protein: {macroEstimate({ goal, level, gender }).protein} g</div>
                <div>Carbs: {macroEstimate({ goal, level, gender }).carbs} g</div>
                <div>Fats: {macroEstimate({ goal, level, gender }).fats} g</div>
              </div>
            </div>

            <button
              className="mt-4 w-full h-11 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-black font-medium shadow hover:brightness-110 transition"
              onClick={() => {
                // Later: route to a generated plan page or save selection to DB
                alert(`Generating plan for ${level} • ${goal} • ${gender}`)
              }}
            >
              Generate my plan
            </button>
          </div>
        </div>
      </section>
    </MemberShell>
  )
}

function labelize(id) {
  return id.split("-").map(s => s[0].toUpperCase() + s.slice(1)).join(" ")
}

function macroEstimate({ goal, level, gender }) {
  // Simple placeholder numbers (we’ll wire your real formulas later)
  const base = gender === "male" ? 2400 : 2000
  const levelMod = level === "advanced" ? 1.15 : level === "intermediate" ? 1.07 : 1.0
  const goalMod =
    goal === "fat-loss" ? 0.85 :
    goal === "lean-mass" ? 1.05 :
    1.15 // mass-gain

  const calories = Math.round(base * levelMod * goalMod)
  // mock split — we’ll replace these with program values later
  const protein = Math.round((calories * 0.30) / 4)
  const carbs   = Math.round((calories * 0.40) / 4)
  const fats    = Math.round((calories * 0.30) / 9)
  return { calories, protein, carbs, fats }
}
