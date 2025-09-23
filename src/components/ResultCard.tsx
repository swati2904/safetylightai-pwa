import { motion } from 'framer-motion'
import { Sparkles, ExternalLink, Bug, Clipboard } from 'lucide-react'

const ResultCard =({ title, score, reasons = [] }: { title: string; score?: number; reasons?: string[] }) => {
  const v = typeof score === 'number' ? Math.max(0, Math.min(100, score)) : undefined
  const label = v == null ? '—' : v < 30 ? 'Safe' : v < 70 ? 'Suspicious' : 'High Risk'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(56,189,248,.8) 0%, rgba(56,189,248,0) 60%)' }} />
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title} result</div>
        <span className="text-xs rounded-lg px-2 py-1 border border-white/15 bg-white/10">{label}</span>
      </div>

      <div className="mt-4 grid grid-cols-[auto_1fr] gap-4">
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="h-24 w-24">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="12" />
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgb(56,189,248)" strokeWidth="12"
              strokeDasharray={`${(v ?? 0) * 3.27} 1000`} strokeLinecap="round"
              transform="rotate(-90 60 60)" />
          </svg>
          <div className="absolute text-2xl font-bold">{v ?? '--'}</div>
        </div>
        <div>
          <div className="text-sm font-medium opacity-90">Why it scored this way</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(reasons.length ? reasons : ['new domain','look-alike','keyword: verify']).slice(0,4).map(r => (
              <span key={r} className="text-xs rounded-full px-2 py-1 border border-white/10 bg-slate-900/60">{r}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="transition active:scale-[.98] inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/30">
          <Sparkles className="size-4" /> Explain
        </button>
        <button className="transition active:scale-[.98] inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 hover:bg-white/10">
          <ExternalLink className="size-4" /> Safe open
        </button>
        <button className="transition active:scale-[.98] inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 hover:bg-white/10">
          <Bug className="size-4" /> Report
        </button>
        <button className="transition active:scale-[.98] inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 hover:bg-white/10">
          <Clipboard className="size-4" /> Copy tips
        </button>
      </div>
    </motion.div>
  )
}

export default ResultCard;