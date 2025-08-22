import MemberShell from "../../../components/MemberShell";

export default function NutritionHome() {
  return (
    <MemberShell>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold text-white/90 mb-6">
          Nutrition
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Beginner" />
          <Card title="Intermediate" />
          <Card title="Advanced" />
          <Card title="Fat Loss" />
          <Card title="Lean Mass" />
          <Card title="Mass Gain" />
          <Card title="Male" />
          <Card title="Female" />
        </div>
      </section>
    </MemberShell>
  );
}

function Card({ title }) {
  return (
    <div className="rounded-xl bg-black/40 border border-white/5 shadow-2xl shadow-black/40 p-5 backdrop-blur-md">
      <h3 className="text-white/90 font-medium">{title}</h3>
      <p className="text-white/60 text-sm mt-1">
        Tap to view plans and sample days.
      </p>
    </div>
  );
}
