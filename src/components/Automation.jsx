import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Workflow,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Database,
  Send,
  ExternalLink,
  Bot,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { automationSystems, profile } from '../data'

const accentStyles = {
  cyan: {
    border: 'hover:border-cyan-500/40',
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    icon: 'text-cyan-400',
    glow: 'hover:shadow-cyan-950/40',
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    icon: 'text-emerald-400',
    glow: 'hover:shadow-emerald-950/40',
  },
  purple: {
    border: 'hover:border-purple-500/40',
    badge: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    icon: 'text-purple-400',
    glow: 'hover:shadow-purple-950/40',
  },
}

export default function Automation() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(automationSystems[0].id)
  const [showAllAutomations, setShowAllAutomations] = useState(false)

  const DEFAULT_VISIBLE_AUTOMATION = 2
  const displayedAutomations = showAllAutomations
    ? automationSystems
    : automationSystems.slice(0, DEFAULT_VISIBLE_AUTOMATION)

  return (
    <section id="automation" className="relative py-20 sm:py-28 overflow-hidden bg-[#060A11]/60">
      <div className="section-shell">
        <SectionHeader
          kicker="// Client Automation Solutions"
          title="Turn Manual Operations Into Self-Running Systems"
          subtitle={`A dedicated suite of client-ready automated pipelines: showing ${showAllAutomations ? automationSystems.length : Math.min(DEFAULT_VISIBLE_AUTOMATION, automationSystems.length)} of ${automationSystems.length} production setups. From multi-service n8n orchestration and web scrapers to 24/7 intelligent WhatsApp sales copilots.`}
        />

        {/* Client ROI Impact Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="rounded-2xl border border-white/10 bg-[#0B101B] p-4 text-center">
            <p className="gradient-accent font-mono text-2xl sm:text-3xl font-black">30+ hrs/wk</p>
            <p className="mt-1 text-xs font-semibold text-white">Manual Work Slashed</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Automated lead validation</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B101B] p-4 text-center">
            <p className="gradient-accent font-mono text-2xl sm:text-3xl font-black">&lt;5s</p>
            <p className="mt-1 text-xs font-semibold text-white">AI Reply Latency</p>
            <p className="text-[10px] text-slate-400 mt-0.5">24/7 WhatsApp customer capture</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B101B] p-4 text-center">
            <p className="gradient-accent font-mono text-2xl sm:text-3xl font-black">10,000+</p>
            <p className="mt-1 text-xs font-semibold text-white">Contacts / Week</p>
            <p className="text-[10px] text-slate-400 mt-0.5">High-volume proxy scraping</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B101B] p-4 text-center">
            <p className="gradient-accent font-mono text-2xl sm:text-3xl font-black">99.9%</p>
            <p className="mt-1 text-xs font-semibold text-white">Execution Uptime</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Queue retries & error fallbacks</p>
          </div>
        </div>

        {/* Automation Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedAutomations.map((system) => {
            const styles = accentStyles[system.accent] || accentStyles.cyan
            const isSelected = activeWorkflowId === system.id

            return (
              <div
                key={system.id}
                className={`group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B101B]/90 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${styles.border} ${styles.glow}`}
              >
                <div>
                  {/* Category & Client Metric Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {system.category}
                    </span>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${styles.badge}`}>
                      {system.clientMetric}
                    </span>
                  </div>

                  {/* Visual Image (if available) */}
                  {system.image && (
                    <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                      <img
                        src={system.image}
                        alt={system.title}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Title & Tagline */}
                  <h3 className="mt-4 text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {system.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {system.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {system.tools.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Step-by-Step Execution Pipeline */}
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    <p className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      Autonomous Pipeline:
                    </p>
                    {system.steps.map((s, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5"
                      >
                        <span className="font-mono text-[11px] font-bold text-cyan-400 shrink-0 mt-0.5">
                          {s.step}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">{s.title}</p>
                          <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  {system.liveUrl && (
                    <a
                      href={system.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-950/40 hover:border-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all"
                    >
                      <span>Live Platform</span>
                      <ExternalLink className="h-3.5 w-3.5 text-cyan-300" />
                    </a>
                  )}
                  <a
                    href="#contact"
                    className={`${
                      system.liveUrl ? 'w-full sm:flex-1' : 'w-full'
                    } inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white transition-all`}
                  >
                    <span>Request Similar Workflow</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* View More / Show Less Automations Toggle Button */}
        {automationSystems.length > DEFAULT_VISIBLE_AUTOMATION && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (showAllAutomations) {
                  setShowAllAutomations(false)
                  const el = document.getElementById('automation')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                } else {
                  setShowAllAutomations(true)
                }
              }}
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-950/70 via-[#0C1222] to-cyan-950/70 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-950/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-purple-400 hover:shadow-purple-500/25 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                {showAllAutomations ? (
                  <>
                    <span>Show Less Automations</span>
                    <ChevronUp className="h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                    <span>View All Automations ({automationSystems.length})</span>
                    <ChevronDown className="h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:translate-y-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        )}

        {/* Client Consultation Banner */}
        <div className="mt-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Custom Client Automation Delivery</span>
            </div>
            <h4 className="mt-2 text-xl sm:text-2xl font-black text-white">
              Have a manual workflow slowing down your team?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
              I audit your current process, architect custom webhooks and AI function calling pipelines, and deploy reliable automations that eliminate human error.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
          >
            Discuss Your Workflow
          </a>
        </div>
      </div>
    </section>
  )
}
