import MemberShell from "../../components/MemberShell";

export default function Workouts() {
  return (
    <MemberShell>
      {() => (
        <>
          <h1 className="text-2xl sm:text-3xl font-semibold">Workouts</h1>
          <p className="text-white/70 mt-2">Weekly sessions + follow-along videos.</p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            {/* TODO: Replace with your real workouts UI */}
            <div className="text-white/80">Coming soon: killer training UI 🔥</div>
          </div>
        </>
      )}
    </MemberShell>
  );
}
