import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  AlertCircle,
  CheckCircle2,
  GitFork,
  Layers,
  Cpu,
  RefreshCw,
  Compass,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Filter,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { allProjects } from '../data'

const categories = ['All Projects', 'AI & Vector Systems', 'Full-Stack Web', 'Distributed Systems']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [expandedProjectId, setExpandedProjectId] = useState(allProjects[0].id)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const DEFAULT_VISIBLE = 3

  const toggleProject = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id))
  }

  const filteredProjects = selectedCategory === 'All Projects'
    ? allProjects
    : allProjects.filter((p) => {
        if (selectedCategory === 'AI & Vector Systems') {
          return p.category.includes('AI') || p.category.includes('Vector')
        }
        if (selectedCategory === 'Full-Stack Web') {
          return p.category.includes('Full-Stack') || p.category.includes('EdTech') || p.category.includes('Creative') || p.category.includes('Maritime')
        }
        if (selectedCategory === 'Distributed Systems') {
          return p.category.includes('Distributed') || p.category.includes('Maritime')
        }
        return true
      })

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, DEFAULT_VISIBLE)

  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          kicker="// Portfolio Showcase"
          title="All Production Projects & Systems"
          subtitle={`Showing ${showAllProjects ? allProjects.length : Math.min(DEFAULT_VISIBLE, allProjects.length)} of ${allProjects.length} flagship platforms, maritime OS architectures, RAG systems, and web engines. Every project includes live verification links, problem-solution breakdowns, and architectural insights.`}
        />

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat)
                setShowAllProjects(false)
              }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/25 font-bold'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="space-y-12">
          {displayedProjects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B101B]/90 shadow-2xl transition-all hover:border-white/20"
              >
                {/* Case Study Top Bar */}
                <div className="p-6 sm:p-8 border-b border-white/10 bg-[#080D16]/90">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                        PROJECT 0{index + 1}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {project.client} • {project.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 font-mono text-xs font-semibold text-emerald-300">
                        {project.outcomeMetric}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-300 max-w-3xl leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Pills & Action CTAs */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-black hover:bg-cyan-400 transition-colors shadow-sm"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code Repo</span>
                        </a>
                      ) : (
                        <span className="font-mono text-[11px] text-slate-500 border border-white/10 px-3 py-1.5 rounded-xl bg-white/[0.02]">
                          🔒 Enterprise Codebase
                        </span>
                      )}
                      {project.process && (
                        <button
                          type="button"
                          onClick={() => toggleProject(project.id)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                          <span>{isExpanded ? 'Collapse' : 'Deep Dive'}</span>
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Flagship Body: Visual + Structured Breakdown */}
                <div className="p-6 sm:p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Project Visual Preview */}
                    <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#06090F] shadow-lg">
                      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#0B101B]">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-500/80" />
                          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                          <span className="h-2 w-2 rounded-full bg-green-500/80" />
                        </div>
                        <span className="font-mono text-[10px] text-slate-500 truncate max-w-[200px]">
                          {project.liveUrl || `${project.id}.production`}
                        </span>
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-slate-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Right: Problem & Solution Summary */}
                    <div className="lg:col-span-7 space-y-4">
                      {/* Problem Block */}
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>The Challenge & Friction</span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Solution Block */}
                      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Engineered Architecture & Solution</span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* Constraints */}
                      {project.constraints && (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                          <p className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Engineering Constraints
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {project.constraints.map((c, ci) => (
                              <li key={ci} className="text-xs text-slate-400 flex items-start gap-2">
                                <span className="text-cyan-400 font-bold">•</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Deep Dive Collapsible Section: Abandoned Approach, Architecture Flow & Reflection */}
                  <AnimatePresence>
                    {isExpanded && project.process && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-8 border-t border-white/10 space-y-6"
                      >
                        {/* The Approach Tried and Abandoned */}
                        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                          <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300 uppercase tracking-wider">
                            <Compass className="h-4 w-4 text-amber-400" />
                            <span>Architecture Process & Abandoned Path (What didn't work)</span>
                          </div>
                          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {project.process}
                          </p>
                        </div>

                        {/* Interactive Architecture Flow Diagram */}
                        {project.architectureFlow && (
                          <div className="rounded-2xl border border-white/10 bg-[#06090F] p-5">
                            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                              <Layers className="h-4 w-4" />
                              <span>System Architecture Pipeline</span>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                              {project.architectureFlow.map((step, si) => (
                                <div key={si} className="flex items-center gap-2">
                                  <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-200">
                                    {step}
                                  </span>
                                  {si < project.architectureFlow.length - 1 && (
                                    <span className="text-slate-500 font-bold">→</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* What I'd Do Differently (Reflection) */}
                        {project.whatIdDoDifferently && (
                          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
                            <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300 uppercase tracking-wider">
                              <RefreshCw className="h-4 w-4 text-purple-400" />
                              <span>Post-Mortem: What I'd Do Differently</span>
                            </div>
                            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                              {project.whatIdDoDifferently}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* View More / Show Less Projects Toggle Button */}
        {filteredProjects.length > DEFAULT_VISIBLE && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (showAllProjects) {
                  setShowAllProjects(false)
                  const el = document.getElementById('work')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                } else {
                  setShowAllProjects(true)
                }
              }}
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/70 via-[#0C1222] to-purple-950/70 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-cyan-950/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400 hover:shadow-cyan-500/25 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                {showAllProjects ? (
                  <>
                    <span>Show Less Projects</span>
                    <ChevronUp className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                    <span>View More Projects ({filteredProjects.length - DEFAULT_VISIBLE} more)</span>
                    <ChevronDown className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-y-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
