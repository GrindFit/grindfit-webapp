import MemberShell from "../../components/MemberShell";

export default function Membership() {
  return (
    <MemberShell>
      {() => (
        <>
          <h1 className="text-2xl sm:text-3xl font-semibold">Membership</h1>
          <p className="text-white/70 mt-2">Extend or manage your plan.</p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/80">Coming soon: billing portal & receipts 💳</div>
          </div>
        </>
      )}
    </MemberShell>
  );
}
