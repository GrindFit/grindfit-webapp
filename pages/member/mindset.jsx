import MemberShell from "../../components/MemberShell";

export default function Mindset() {
  return (
    <MemberShell>
      {() => (
        <>
          <h1 className="text-2xl sm:text-3xl font-semibold">Mindset</h1>
          <p className="text-white/70 mt-2">Micro-wins and cues that stick.</p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/80">Coming soon: daily cues & reflections 🧠</div>
          </div>
        </>
      )}
    </MemberShell>
  );
}
