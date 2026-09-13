import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Terminal,
  FileDown,
  Sparkles,
  Play,
  CornerDownLeft,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react'
import { profile, terminalCommands } from '../data'
import ParticleField from './ParticleField'
import HeroPortrait3D from './HeroPortrait3D'

function OperableTerminal() {
  const [activeCmd, setActiveCmd] = useState('whoami')
  const [history, setHistory] = useState([
    { cmd: 'whoami', output: terminalCommands.whoami.output },
  ])
  const [inputVal, setInputVal] = useState('')
  const terminalEndRef = useRef(null)

  const handleRunCommand = (cmdKey) => {
    const found = terminalCommands[cmdKey]
    if (found) {
      setHistory((prev) => [...prev, { cmd: cmdKey, output: found.output }])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          cmd: cmdKey,
          output: `Command not found: "${cmdKey}". Available: whoami, git log --oneline -3, cat skills.json, status`,
        },
      ])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputVal.trim()
    if (!trimmed) return
    handleRunCommand(trimmed)
    setInputVal('')
  }

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-[#060A11] shadow-2xl shadow-cyan-950/30 overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0B101A] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[11px] text-slate-400">pritom-agent-runtime ~ zsh</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300 border border-cyan-500/20 font-medium">
            LIVE CLI
          </span>
        </div>
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-white/5 bg-[#080D16] px-3.5 py-2 text-[11px]">
        <span className="text-slate-500 mr-1 hidden sm:inline">Try:</span>
        {Object.keys(terminalCommands).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => handleRunCommand(k)}
            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-slate-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-200 transition-colors"
          >
            $ {k}
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div className="max-h-72 sm:max-h-80 overflow-y-auto p-4 space-y-3 font-mono text-slate-300 leading-relaxed">
        <div className="text-slate-500">
          // Badruzzaman Pritom Interactive Shell v2.4
          <br />
          // Type any command or click suggestions above.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="text-purple-400">pritom@cloud:~$</span>
              <span>{item.cmd}</span>
            </div>
            <div className="pl-4 text-slate-300 whitespace-pre-wrap">
              {Array.isArray(item.output) ? (
                <div className="space-y-1">
                  {item.output.map((line, li) => (
                    <div key={li} className="text-emerald-300/90 font-mono text-[11px]">
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                item.output
              )}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-t border-white/10 bg-[#080D16] px-4 py-2"
      >
        <span className="text-purple-400 mr-2 font-semibold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'cat skills.json', 'whoami' or 'status'..."
          className="w-full bg-transparent text-slate-200 placeholder-slate-600 outline-none text-xs"
        />
        <button
          type="submit"
          className="rounded bg-white/10 p-1 text-slate-400 hover:text-white transition-colors"
          aria-label="Run command"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  )
}

export default function Hero({ onOpenCommandPalette }) {
  // Magnetic hover simulation on primary CTA
  const buttonRef = useRef(null)
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25
    setBtnPos({ x, y })
  }

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows & Particle Constellations */}
      <div className="tech-grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <ParticleField className="opacity-80" />
      <div
        className="ambient-glow -top-32 left-1/4 h-[32rem] w-[32rem] bg-cyan-600/20"
        aria-hidden="true"
      />
      <div
        className="ambient-glow top-1/3 -right-20 h-[30rem] w-[30rem] bg-purple-600/20"
        aria-hidden="true"
      />
      <div
        className="ambient-glow -bottom-24 left-1/3 h-[28rem] w-[28rem] bg-emerald-600/15"
        aria-hidden="true"
      />

      <div className="section-shell relative z-10 w-full">
        {/* 3-Part Command Center Hero Layout (Portrait Left, Core Value Middle, Operable CLI Right) */}
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: 3D Animated Holographic Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -25, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-2 lg:order-1 lg:col-span-4 flex justify-center w-full"
          >
            <HeroPortrait3D />
          </motion.div>

          {/* Center Column: Positioning & Provable Claim */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-start">
            {/* Monospace Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-[11px] text-cyan-300 mb-6 leading-normal"
            >
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>{profile.eyebrow}</span>
            </motion.div>

            {/* Static DOM fallback for screen readers */}
            <h1 className="sr-only">
              Badruzzaman Pritom — {profile.headlineLead} {profile.headlineAccent}
            </h1>

            {/* Visual Headline with guaranteed line separation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ lineHeight: '1.55' }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-black text-white tracking-normal"
            >
              <span className="inline leading-[1.55]">{profile.headlineLead} </span>{' '}
              <span className="inline leading-[1.55] gradient-accent">{profile.headlineAccent}</span>
            </motion.h1>

            {/* Quantified Proof One-Liner with increased spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ lineHeight: '1.75' }}
              className="mt-8 text-sm sm:text-base text-slate-300 font-normal"
            >
              <span className="font-semibold text-white">Badruzzaman Pritom</span> builds
              high-throughput microservices, real-time event streaming architectures (Kafka), and
              autonomous AI agents with grounded RAG pipelines.
            </motion.p>

            {/* Credibility metric pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2.5 sm:gap-3"
            >
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-slate-200">
                ⚡ 3+ Years Prod Experience
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-slate-200">
                🚀 15+ Shipped Platforms
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-slate-200">
                🌐 RAG & Distributed Kafka
              </span>
            </motion.div>

            {/* Dual CTAs with Magnetic Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary CTA: Magnetic Button */}
              <motion.a
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                href="#work"
                className="btn-magnetic group w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>View Flagship Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary CTA: Quick Contact & Resume */}
              <a
                href="#contact"
                className="btn-magnetic w-full sm:w-auto rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white"
              >
                <span>Quick Contact</span>
              </a>

              <a
                href={profile.cvDriveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
                aria-label="Download CV"
              >
                <FileDown className="h-4 w-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </motion.div>

            {/* Timezone & Remote Readiness Marker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-5 flex items-center gap-2 text-[11px] text-slate-400 font-mono"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{profile.timezone} • Remote Ready</span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Operable Terminal Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="order-3 lg:order-3 lg:col-span-3 w-full"
          >
            <OperableTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
