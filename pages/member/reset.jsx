import MemberShell from "../../components/MemberShell";

export default function Reset() {
  return (
    <MemberShell>
      {() => (
        <>
          <h1 className="text-2xl sm:text-3xl font-semibold">Reset &amp; Recover</h1>
          <p className="text-white/70 mt-2">Daily & emotional reset, mobility.</p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/80">Coming soon: breathwork & mobility flows 🧘</div>
          </div>
        </>
      )}
    </MemberShell>
  );
}
