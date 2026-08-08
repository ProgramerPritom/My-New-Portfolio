import { motion } from 'framer-motion'
import { Sparkles, Layers, BrainCircuit, Target, Quote, FileDown } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile, profileHighlights } from '../data'

const highlightIcons = [Layers, BrainCircuit, Target]

const floatingBadges = [
  { label: 'React', className: 'left-0 top-8 text-cyan border-cyan/40 shadow-glow-cyan', delay: 0 },
  { label: 'Node.js', className: 'right-0 top-1/3 text-purple border-purple/40 shadow-glow-purple', delay: 0.6 },
  { label: 'AI Agents', className: 'left-2 bottom-10 text-emerald border-emerald/40 shadow-glow-emerald', delay: 1.2 },
]

const neuralNodes = [
  { x: 20, y: 18 }, { x: 52, y: 10 }, { x: 80, y: 24 }, { x: 34, y: 40 },
  { x: 64, y: 46 }, { x: 18, y: 66 }, { x: 50, y: 74 }, { x: 82, y: 62 },
  { x: 38, y: 88 }, { x: 70, y: 90 }, { x: 88, y: 12 }, { x: 12, y: 42 },
]

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      <div className="neural-bg absolute inset-4 rounded-full opacity-60" aria-hidden="true" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="neural-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {[
          [0, 1], [1, 2], [1, 4], [2, 3], [3, 7], [4, 5], [4, 11],
          [5, 6], [6, 9], [7, 8], [8, 9], [9, 10], [10, 5], [3, 10],
        ].map(([a, b], i) => (
          <motion.line
            key={i}
            x1={neuralNodes[a].x}
            y1={neuralNodes[a].y}
            x2={neuralNodes[b].x}
            y2={neuralNodes[b].y}
            stroke="url(#neural-line)"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
          />
        ))}
        {neuralNodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="1.3"
            fill={i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#06B6D4' : '#10B981'}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05 }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto aspect-square w-4/5 overflow-hidden rounded-full border-2 border-cyan/40 p-1.5 shadow-glow-cyan"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-900">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm sm:h-48 sm:w-48">
                <span className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {profile.firstName[0]}
                  <span className="gradient-text">P</span>
                </span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-300">
                  Full-Stack · AI
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-obsidian/90 to-transparent" />
        </div>
      </motion.div>

      <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-purple/40 via-transparent to-cyan/40 blur-2xl" aria-hidden="true" />

      {floatingBadges.map((badge) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + badge.delay, type: 'spring', stiffness: 200 }}
          className={`absolute rounded-full border bg-obsidian/80 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xl ${badge.className}`}
        >
          <motion.span
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5 + badge.delay, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            {badge.label}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  )
}

export default function Profile() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple/10 blur-[140px]" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeader
          kicker="About Me"
          title="The Engineer Behind the Vision"
          subtitle="A systems architect turned intelligent automation specialist."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Portrait />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative rounded-3xl glass p-6 sm:p-8">
              <Quote className="absolute -top-4 left-6 h-8 w-8 text-purple" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">{profile.bio}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <Sparkles className="h-4 w-4 text-emerald" />
                {profile.role}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="btn-glow group bg-gradient-to-r from-purple via-cyan to-emerald bg-[length:200%_auto] px-6 py-3 text-sm text-white shadow-glow-purple transition-all duration-500 hover:bg-[position:100%_0] hover:-translate-y-0.5"
                >
                  Download CV
                  <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#journey"
                  className="group text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  See my journey
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {profileHighlights.map((item, i) => {
                const Icon = highlightIcons[i]
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-start gap-4 rounded-2xl glass p-5 transition-colors duration-300 hover:border-purple/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-purple/30 bg-purple/10 text-purple transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
