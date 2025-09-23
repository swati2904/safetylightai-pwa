import { useState } from 'react'
import { motion } from 'framer-motion'
import ResultCard from '../components/ResultCard';

export default function PrivacyPage(){
  const [input, setInput] = useState('')
  const score = input ? Math.min(99, Math.max(1, input.length % 100)) : undefined
  const reasons = input ? ['secret key pattern','email detected','phone detected'] : []

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
      <div className="relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 60% at 80% 0%, rgba(14,165,233,.25) 0%, transparent 55%)' }} />
        <h2 className="relative text-xl font-semibold">DataGuardian</h2>
        <p className="relative mt-1 text-sm opacity-75">
          Paste text/code; we’ll flag PII and secrets. Runs on-device.
        </p>
        <div className="relative mt-4">
          <textarea
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="API key: sk_live_...  Email: alice@example.com  Phone: +1-555-123-4567"
            className="h-48 w-full rounded-xl bg-slate-900/70 p-4 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <ResultCard title="DataGuardian" score={score} reasons={reasons} />
    </motion.div>
  )
}
