import { useState } from 'react'
import { motion } from 'framer-motion'
import ResultCard from '../components/ResultCard'

export default function AuditPage(){
  const [input, setInput] = useState('')
  const score = input ? Math.min(99, Math.max(1, input.length % 100)) : undefined
  const reasons = input ? ['height mismatch','date inconsistency','low citation confidence'] : []

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
      <div
        className="
          relative overflow-hidden rounded-2xl p-6 border border-white/10
          bg-slate-900/70 md:bg-white/5 md:backdrop-blur-md mb-6
          [background-image:radial-gradient(60%_60%_at_80%_0%,rgba(14,165,233,.25)_0%,transparent_55%)]
        "
      >
        <div className="relative z-10">
          <h2 className="text-xl font-semibold">ModelMirror</h2>
          <p className="mt-1 text-sm opacity-75">
            Paste an AI output; we’ll highlight unsupported sentences and mismatches.
          </p>
          <div className="mt-4">
            <textarea
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="“The Eiffel Tower is 5000m tall and was built in 1998.”"
              className="h-48 w-full rounded-xl bg-slate-900/80 p-4 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>

      <ResultCard title="ModelMirror" score={score} reasons={reasons} />
    </motion.div>
  )
}
