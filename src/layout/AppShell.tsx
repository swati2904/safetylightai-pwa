import { Outlet, NavLink } from 'react-router-dom'
import {
  ShieldCheck, Link2, Shield, FileSearch, Lock, History, Settings,
  Search, Download
} from 'lucide-react'
import LiveRiskPanel from '../components/LiveRiskPanel'
import { MiniHistory } from '../components/MiniHistory'

const nav = [
  { to: '/link',    label: 'Link',    Icon: Link2 },
  { to: '/prompt',  label: 'Prompt',  Icon: Shield },
  { to: '/audit',   label: 'Audit',   Icon: FileSearch },
  { to: '/privacy', label: 'Privacy', Icon: Lock },
  { to: '/history', label: 'History', Icon: History },
  { to: '/settings',label: 'Settings',Icon: Settings },
]

export default function AppShell() {
  return (
    // solid gradient background (already in your project)
    <div className="min-h-dvh relative overflow-x-hidden text-slate-100 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex md:flex-col border-r border-white/10 bg-slate-900/60 backdrop-blur">
          <div className="flex items-center gap-3 p-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-400/30">
              <ShieldCheck className="size-6 text-sky-300" />
            </div>
            <div>
              <div className="text-lg font-bold">SafetyLight AI</div>
              <div className="text-[11px] opacity-70">Explainable safety</div>
            </div>
          </div>
          <nav className="flex-1 p-2 space-y-1">
            {nav.map(({to,label,Icon})=>(
              <NavLink key={to} to={to}
                className={({isActive}) =>
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ' +
                  (isActive
                    ? 'bg-sky-500/20 text-sky-100 ring-1 ring-sky-400/30'
                    : 'text-slate-200 hover:bg-white/5')
                }>
                <Icon className="size-4" /> {label}
              </NavLink>
            ))}
          </nav>
          <div className="p-3 text-[11px] opacity-60">PWA • offline-first</div>
        </aside>

        {/* ===== App content column ===== */}
        {/* Make this a column so we can have a fixed header + fixed app bar + a single scroll area */}
        <main className="min-h-dvh isolate flex flex-col overscroll-contain">
          {/* Mobile top header (brand strip) – fixed */}
          <header className="md:hidden sticky top-0 z-30 flex items-center justify-between bg-slate-900/85 backdrop-blur px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-sky-300" />
              <div className="font-semibold">SafetyLight AI</div>
            </div>
            <button
              onClick={() => alert('Install from the (+) icon in the address bar')}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/15"
            >
              <Download className="size-4" /> Install
            </button>
          </header>

          {/* App bar (title + search) – also fixed under the header on mobile */}
          <div className="sticky top-[52px] md:static z-20 bg-gradient-to-b from-slate-950/95 to-slate-950/80 backdrop-blur border-b border-white/10">
            <div className="mx-auto max-w-[1400px] px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">SafetyLight AI</h1>
                  <p className="text-sm opacity-70">Explainable safety copilot</p>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 size-4 opacity-60" />
                    <input
                      placeholder="Search scans…"
                      className="rounded-xl bg-white/5 pl-8 pr-3 py-2 text-sm border border-white/10 outline-none focus:border-sky-400/40"
                    />
                  </div>
                  <NavLink to="/history" className="rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 hover:bg-white/10">History</NavLink>
                  <NavLink to="/settings" className="rounded-xl px-3 py-2 text-sm bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/30">Settings</NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* The ONLY scrollable area */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-[1400px] p-6">
              <div className="mt-0 grid grid-cols-1 gap-6 xl:grid-cols-12">
                <div className="xl:col-span-7">
                  <Outlet />
                </div>
                <div className="xl:col-span-5 xl:sticky xl:top-6 space-y-6">
                  <LiveRiskPanel />
                  <MiniHistory />
                </div>
              </div>
            </div>

            {/* Bottom padding so content never hides under mobile tab bar */}
            <div className="h-20 md:h-0" />
          </div>

          {/* Mobile bottom tabs – fixed */}
          <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 flex justify-around border-t border-white/10 bg-slate-900/90 backdrop-blur px-2 py-2">
            {nav.slice(0,4).map(({to,label,Icon})=>(
              <NavLink key={to} to={to}
                className={({isActive}) =>
                  'flex flex-col items-center text-xs px-3 py-1 rounded ' +
                  (isActive ? 'text-sky-300' : 'text-slate-300')
                }>
                <Icon className="size-5" />
                {label}
              </NavLink>
            ))}
          </nav>
        </main>
      </div>
    </div>
  )
}
