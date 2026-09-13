import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Server,
  Layout,
  Cloud,
  CheckCircle2,
  Sparkles,
  GitPullRequest,
  Github,
  Zap,
  Info,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { skillCategories, currentlyLearning, profile, marqueeSkills } from '../data'

function MarqueeRow({ reverse = false }) {
  const items = [...marqueeSkills, ...marqueeSkills]
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 items-center gap-3 pr-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400 hover:text-white"
          >
            <span className={`h-2 w-2 rounded-full ${['bg-cyan-400', 'bg-purple-400', 'bg-emerald-400'][i % 3]}`} />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

const categoryIcons = {
  'ai-agentic': BrainCircuit,
  'backend-distributed': Server,
  'frontend-ui': Layout,
  'cloud-infra': Cloud,
}

const accentColors = {
  cyan: {
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    border: 'hover:border-cyan-500/40',
    icon: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-950/40',
  },
  purple: {
    badge: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    border: 'hover:border-purple-500/40',
    icon: 'text-purple-400',
    glow: 'group-hover:shadow-purple-950/40',
  },
  emerald: {
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    border: 'hover:border-emerald-500/40',
    icon: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-950/40',
  },
  amber: {
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    border: 'hover:border-amber-500/40',
    icon: 'text-amber-400',
    glow: 'group-hover:shadow-amber-950/40',
  },
}

export default function TechStack() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <section id="stack" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          kicker="// Technical Fluency"
          title="Proof by Usage, Not Arbitrary Percentages"
          subtitle="Replacing meaningless '85% React' progress bars with contextual architectural proof: where, how, and why each tool is used in production."
        />

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Server
            const colors = accentColors[category.accent] || accentColors.cyan

            return (
              <div
                key={category.id}
                className={`group rounded-3xl border border-white/10 bg-[#0B101B]/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl border ${colors.badge}`}>
                      <Icon className={`h-5 w-5 ${colors.icon}`} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{category.name}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{category.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Context Cards (No Progress Bars!) */}
                <div className="mt-5 space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-white group-hover/skill:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 border border-white/10 px-2 py-0.5 rounded bg-white/5">
                          {skill.proof}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300 font-normal">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* GitHub Live Proof & Growth Mindset Strip */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Currently Learning Chip Strip */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#080D16] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Currently Experimenting & Learning</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Transparent technical curiosity: what I’m building with during my R&D hours.
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <span className="font-mono text-xs text-cyan-400 shrink-0 mt-0.5">0{idx + 1}</span>
                  <div>
                    <p className="text-xs font-bold text-white">{item.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time GitHub Profile & Activity Card */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#080D16] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  <Github className="h-3.5 w-3.5" />
                  <span>Public Code & Contributions</span>
                </div>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-cyan-400 hover:underline"
                >
                  <span>@ProgramerPritom</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Verifiable commits, open repositories, and multi-service experimental architectures.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <p className="font-mono text-lg sm:text-xl font-bold text-white">15+</p>
                <p className="font-mono text-[10px] text-slate-400 mt-0.5">Public Repos</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <p className="font-mono text-lg sm:text-xl font-bold text-emerald-400">100%</p>
                <p className="font-mono text-[10px] text-slate-400 mt-0.5">TypeScript & JS</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <p className="font-mono text-lg sm:text-xl font-bold text-cyan-400">Active</p>
                <p className="font-mono text-[10px] text-slate-400 mt-0.5">Weekly Shipping</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Primary Stack: React, Next.js, Node.js, Kafka, LangChain</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-300 font-semibold"
              >
                Inspect Repos →
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Continuous Marquee Tickers */}
        <div className="mt-14 space-y-3.5" aria-hidden="true">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </div>
    </section>
  )
}
