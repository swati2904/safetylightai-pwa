export default function HistoryPage(){
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
        <h1 className="text-xl font-semibold">Recent scans</h1>
        <p className="text-sm opacity-70">Local-only for now. IndexedDB coming next.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
        <div className="grid gap-2 text-sm opacity-80">
          <div className="rounded-xl bg-slate-900/60 p-3">8a1f… • High (72) • 2m ago</div>
          <div className="rounded-xl bg-slate-900/60 p-3">c3e9… • Suspicious (54) • 7m ago</div>
          <div className="rounded-xl bg-slate-900/60 p-3">1baf… • Safe (12) • 12m ago</div>
        </div>
      </div>
    </div>
  )
}
