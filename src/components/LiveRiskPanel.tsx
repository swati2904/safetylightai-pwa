import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

export default function LiveRiskPanel() {
  const buckets = [
    { label: 'Safe', v: 62 },
    { label: 'Suspicious', v: 28 },
    { label: 'High', v: 10 },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-5 border border-white/10 bg-slate-900/70 md:bg-white/5 md:backdrop-blur-md"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium opacity-90">Environment risk</div>
        <Activity className="size-4 opacity-70" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {buckets.map((b) => (
          <div key={b.label} className="rounded-xl p-3 border border-white/10 bg-slate-900/70">
            <div className="text-xs opacity-70">{b.label}</div>
            <div className="mt-1 text-2xl font-semibold">{b.v}%</div>
            <div className="mt-2 h-1 rounded-full bg-white/10">
              <div className="h-1 rounded-full bg-sky-400/80" style={{ width: `${b.v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
