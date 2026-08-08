import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, MessageCircle, Cpu, Zap, Code2, Rocket, Download } from 'lucide-react'
import ParticleField from './ParticleField'
import { profile, heroStats } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-purple/25 blur-[130px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan/20 blur-[120px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald/15 blur-[110px] animate-pulse-glow"
        aria-hidden="true"
      />
      <ParticleField />

      <div className="section-shell relative pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-slate-300"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald" />
            Available for freelance & full-time roles
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Engineering the Future
            <span className="block gradient-text text-glow-cyan">with Code & AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            Hi, I'm <span className="font-semibold text-white">Badruzzaman Pritom</span> — a{' '}
            <span className="text-cyan">Full-Stack Developer</span> (
            <span className="text-slate-300">React, Next.js, Node.js</span>) and{' '}
            <span className="text-emerald">AI Automation Expert</span>. {profile.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="btn-glow group bg-gradient-to-r from-purple via-cyan to-emerald bg-[length:200%_auto] px-8 py-3.5 text-sm text-white shadow-glow-purple transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-glow-cyan-lg hover:-translate-y-1"
            >
              Explore Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-glow glass-strong px-8 py-3.5 text-sm text-white hover:border-cyan/50 hover:shadow-glow-cyan hover:-translate-y-1"
            >
              <MessageCircle className="h-4 w-4 text-cyan" />
              Connect
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-glow glass px-8 py-3.5 text-sm text-white hover:border-emerald/50 hover:shadow-glow-emerald hover:-translate-y-1"
            >
              <Download className="h-4 w-4 text-emerald" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-3 sm:gap-6"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="glass glow-ring rounded-2xl px-3 py-4 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-5">
                <div className="gradient-text text-2xl font-extrabold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400 sm:text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center gap-10 text-slate-600 lg:flex"
        aria-hidden="true"
      >
        {[Cpu, Code2, Zap, Rocket].map((Icon, i) => (
          <Icon key={i} className="h-5 w-5 animate-float" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute inset-x-0 bottom-5 z-10 flex justify-center"
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border-2 border-slate-600 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-cyan animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
