import { motion } from 'framer-motion'
import { Palette, Server, BrainCircuit, Check, Briefcase, CalendarRange } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { journey } from '../data'

const icons = [Palette, Server, BrainCircuit]

const accentStyles = {
  cyan: {
    node: 'bg-gradient-to-br from-cyan to-purple shadow-glow-cyan',
    chip: 'border-cyan/30 bg-cyan/10 text-cyan',
    bar: 'from-cyan to-purple',
    glow: 'group-hover:shadow-glow-cyan',
    connector: 'bg-gradient-to-r from-cyan/60 to-transparent',
    connectorR: 'bg-gradient-to-l from-cyan/60 to-transparent',
  },
  purple: {
    node: 'bg-gradient-to-br from-purple to-emerald shadow-glow-purple',
    chip: 'border-purple/30 bg-purple/10 text-purple',
    bar: 'from-purple to-emerald',
    glow: 'group-hover:shadow-glow-purple',
    connector: 'bg-gradient-to-r from-purple/60 to-transparent',
    connectorR: 'bg-gradient-to-l from-purple/60 to-transparent',
  },
  emerald: {
    node: 'bg-gradient-to-br from-emerald to-cyan shadow-glow-emerald',
    chip: 'border-emerald/30 bg-emerald/10 text-emerald',
    bar: 'from-emerald to-cyan',
    glow: 'group-hover:shadow-glow-emerald',
    connector: 'bg-gradient-to-r from-emerald/60 to-transparent',
    connectorR: 'bg-gradient-to-l from-emerald/60 to-transparent',
  },
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-cyan/10 blur-[130px]" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeader
          kicker="Career Evolution"
          title="The Road I've Traveled"
          subtitle="Three phases, one continuous evolution — from crafting UIs to building intelligent systems."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Central Vertical Timeline Bar */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute left-6 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-emerald via-cyan to-purple shadow-glow-cyan md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-16">
            {journey.map((item, i) => {
              const styles = accentStyles[item.accent] || accentStyles.cyan
              const Icon = icons[i] || Briefcase
              const leftSide = i % 2 === 0

              return (
                <motion.article
                  key={item.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative flex items-start pl-14 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:pl-0"
                >
                  {/* LEFT SIDE: Card if leftSide, else Icon Badge */}
                  <div className="hidden w-full md:flex md:items-center md:justify-end">
                    {leftSide ? (
                      <div className="relative w-full">
                        <Card item={item} styles={styles} />
                      </div>
                    ) : (
                      <IconBadge Icon={Icon} styles={styles} label={item.phase} />
                    )}
                  </div>

                  {/* CENTER NODE: Glowing Dot on Center Line */}
                  <div className="absolute left-[24px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-slate-900 bg-white shadow-glow-cyan md:relative md:left-auto md:top-auto md:translate-x-0">
                    <span className="absolute -inset-1 animate-ping rounded-full bg-cyan/40 opacity-75" />
                  </div>

                  {/* RIGHT SIDE: Card if !leftSide, else Icon Badge */}
                  <div className="w-full md:flex md:items-center md:justify-start">
                    {!leftSide ? (
                      <div className="relative w-full">
                        <Card item={item} styles={styles} />
                      </div>
                    ) : (
                      <div className="hidden md:block">
                        <IconBadge Icon={Icon} styles={styles} label={item.phase} />
                      </div>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function IconBadge({ Icon, styles, label }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
      className="flex items-center gap-3"
    >
      <div className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-slate-800 ${styles.node} shadow-lg`}>
        <Icon className="h-6 w-6 text-white" />
        <span className="absolute -inset-1 animate-pulse rounded-2xl bg-white/10" />
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
        {label}
      </span>
    </motion.div>
  )
}

function Card({ item, styles }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className={`group relative rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 sm:p-7 ${styles.glow}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wider ${styles.chip}`}>
          <CalendarRange className="h-3 w-3" />
          {item.period}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
          {item.phase}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
      <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-400">
        <Briefcase className={`h-4 w-4 ${styles.chip.split(' ')[1]}`} />
        {item.company}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>

      <ul className="mt-4 space-y-2.5">
        {item.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5 ${styles.chip}`}>
              <Check className="h-3 w-3" />
            </span>
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
