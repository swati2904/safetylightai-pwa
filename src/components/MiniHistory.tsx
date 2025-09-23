export function MiniHistory() {
  const data = [
    { t: '12:01', s: 12 }, { t: '12:05', s: 54 }, { t: '12:07', s: 72 }, { t: '12:12', s: 38 }
  ]
  return (
    <div className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium opacity-90">Recent scores</div>
        <a href="/history" className="text-xs opacity-70 hover:opacity-100">View all</a>
      </div>
      <div className="mt-3 text-xs opacity-70">
        {data.map((d, i) => (
          <div key={i} className="flex items-center justify-between py-1">
            <span>{d.t}</span>
            <div className="w-2/3 h-1 rounded bg-white/10">
              <div className="h-1 rounded bg-sky-400/80" style={{ width: `${d.s}%` }} />
            </div>
            <span>{d.s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
