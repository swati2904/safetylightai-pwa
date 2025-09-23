import { useState } from 'react'
import { motion } from 'framer-motion'
import ResultCard from '../components/ResultCard'

export default function LinkPage(){
  const [input, setInput] = useState('')
  const score = input ? Math.min(99, Math.max(1, input.length % 100)) : undefined
  const reasons = input ? ['new domain','brand look-alike','keyword: verify'] : []

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
      {/* HERO CARD with bg gradient baked in; dark & opaque on mobile */}
      <div
        className="
          relative overflow-hidden rounded-2xl p-6 border border-white/10
          bg-slate-900/70 md:bg-white/5 md:backdrop-blur-md mb-6
          [background-image:radial-gradient(60%_60%_at_80%_0%,rgba(14,165,233,.25)_0%,transparent_55%)]
        "
      >
        <div className="relative z-10">
          <h2 className="text-xl font-semibold">Link Sentinel</h2>
          <p className="mt-1 text-sm opacity-75">
            Paste a URL or email text. On-device analysis. No data leaves your browser.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto]">
            <textarea
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="https://example.com/login?..."
              className="h-48 w-full rounded-xl bg-slate-900/80 p-4 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-500"
            />
            <div className="flex lg:flex-col gap-2">
              <button className="rounded-xl px-4 py-2 bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/30 transition active:scale-[.98]">Scan</button>
              <button className="rounded-xl px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition active:scale-[.98]">Sandbox</button>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW HERO */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <section className="lg:col-span-7 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 md:bg-white/5 md:backdrop-blur-md p-4">
            <div className="text-sm font-medium opacity-90">Tips</div>
            <ul className="mt-2 list-disc pl-5 text-sm opacity-80 space-y-1">
              <li>We normalize URLs (punycode, lowercase, strip zero-width).</li>
              <li>Heuristics catch brand look-alikes and suspicious params.</li>
              <li>Results save locally; offline works after install.</li>
            </ul>
          </div>
        </section>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-6">
            <ResultCard title="Link Sentinel" score={score} reasons={reasons} />
          </div>
        </aside>
      </div>
    </motion.div>
  )
}
