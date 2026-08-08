import { motion } from 'framer-motion'
import { Sparkles, Server, BrainCircuit, Wifi, Gauge } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { skillGroups, marqueeSkills } from '../data'

const iconMap = { sparkle: Sparkles, server: Server, brain: BrainCircuit }

const groupStyles = {
  cyan: {
    ring: 'hover:border-cyan/60',
    glow: 'hover:shadow-glow-cyan',
    icon: 'text-cyan',
    iconBg: 'bg-cyan/10 border-cyan/30',
    bar: 'from-cyan to-purple',
    header: 'from-cyan/20',
  },
  purple: {
    ring: 'hover:border-purple/60',
    glow: 'hover:shadow-glow-purple',
    icon: 'text-purple',
    iconBg: 'bg-purple/10 border-purple/30',
    bar: 'from-purple to-emerald',
    header: 'from-purple/20',
  },
  emerald: {
    ring: 'hover:border-emerald/60',
    glow: 'hover:shadow-glow-emerald',
    icon: 'text-emerald',
    iconBg: 'bg-emerald/10 border-emerald/30',
    bar: 'from-emerald to-cyan',
    header: 'from-emerald/20',
  },
}

const masteryStyles = {
  Expert: 'border-emerald/40 bg-emerald/10 text-emerald',
  Specialist: 'border-cyan/40 bg-cyan/10 text-cyan',
  Proficient: 'border-purple/40 bg-purple/10 text-purple',
}

function MarqueeRow({ reverse = false }) {
  const items = [...marqueeSkills, ...marqueeSkills]
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-cyan/50 hover:text-white"
          >
            <Wifi className={`h-3 w-3 ${['text-cyan', 'text-purple', 'text-emerald'][i % 3]}`} />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-purple/10 blur-[130px]" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeader
          kicker="Tech Stack"
          title="The Interactive Skill Matrix"
          subtitle="Hover any badge — watch it pulse, ignite its outline, and reveal exactly how I put it to work."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const styles = groupStyles[group.accent]
            const Icon = iconMap[group.icon]

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-all duration-300 sm:p-7 ${styles.ring} ${styles.glow}`}
              >
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${styles.iconBg}`}>
                    <Icon className={`h-6 w-6 ${styles.icon}`} />
                  </span>
                  <span className="font-mono text-xs text-slate-500">/{group.label.toLowerCase().replace(/\s/g, '')}</span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-white">{group.label}</h3>
                <p className="relative mt-1 text-xs text-slate-500">{group.tagline}</p>

                <div className="relative mt-5 flex flex-1 flex-col gap-3">
                  {group.skills.map((skill, si) => (
                    <div
                      key={skill.name}
                      className="glow-ring group/skill rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:animate-ring-pulse"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex min-w-0 items-center gap-2">
                          <Gauge className={`h-3.5 w-3.5 shrink-0 ${styles.icon} opacity-70`} />
                          <span className="truncate text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover/skill:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${masteryStyles[skill.mastery]}`}>
                          {skill.mastery}
                        </span>
                      </div>

                      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2 + 0.05 * si, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${styles.bar}`}
                        />
                      </div>

                      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/skill:max-h-24 group-hover/skill:opacity-100 group-hover/skill:mt-2.5">
                        <p className="border-t border-white/10 pt-2.5 text-xs leading-relaxed text-slate-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}
