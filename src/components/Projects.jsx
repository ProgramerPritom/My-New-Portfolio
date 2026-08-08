import { motion } from 'framer-motion'
import { ArrowUpRight, Github, FolderGit2, TrendingUp, TriangleAlert, Lightbulb } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { projects } from '../data'

const cardStyles = {
  cyan: {
    visual: 'from-cyan/25 via-cyan/5 to-transparent',
    accent: 'text-cyan',
    chip: 'border-cyan/30 bg-cyan/10 text-cyan',
    glow: 'group-hover:shadow-glow-cyan',
    line: 'bg-cyan',
  },
  purple: {
    visual: 'from-purple/25 via-purple/5 to-transparent',
    accent: 'text-purple',
    chip: 'border-purple/30 bg-purple/10 text-purple',
    glow: 'group-hover:shadow-glow-purple',
    line: 'bg-purple',
  },
  emerald: {
    visual: 'from-emerald/25 via-emerald/5 to-transparent',
    accent: 'text-emerald',
    chip: 'border-emerald/30 bg-emerald/10 text-emerald',
    glow: 'group-hover:shadow-glow-emerald',
    line: 'bg-emerald',
  },
}

function VisualMock({ project }) {
  const accent = project.accent
  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl sm:h-64"
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2 backdrop-blur-md">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="truncate font-mono text-[10px] text-slate-400 max-w-[200px]">
          {project.liveUrl && project.liveUrl.startsWith('http')
            ? project.liveUrl.replace('https://', '').replace('http://', '').replace(/\/$/, '')
            : project.title}
        </span>
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${cardStyles[accent].chip}`}>
          {accent.toUpperCase()}
        </span>
      </div>

      {/* Real Image Preview */}
      {project.image ? (
        <div className="relative h-[calc(100%-33px)] w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
        </div>
      ) : (
        <div className={`relative h-full overflow-hidden bg-gradient-to-br ${cardStyles[accent].visual}`}>
          <div className="absolute bottom-4 left-4 right-4 space-y-2.5">
            <div className={`h-2 w-2/3 rounded-full ${cardStyles[accent].line} opacity-70`} />
            <div className="h-2 w-1/2 rounded-full bg-white/15" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-purple/10 blur-[140px]" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeader
          kicker="Selected Work"
          title="Shipped & Making Impact"
          subtitle="A bento grid of production apps, RAG learning platforms, microservices & automation architectures."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:border-white/25 ${
                cardStyles[project.accent].glow
              } ${project.span === 'lg' ? 'lg:col-span-2' : ''}`}
            >
              <div className="p-4 pb-0">
                <div className="overflow-hidden rounded-2xl transition-transform duration-500">
                  <VisualMock project={project} />
                </div>
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-[11px] font-semibold uppercase tracking-widest ${cardStyles[project.accent].accent}`}>
                    {project.category}
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-emerald">
                    <TrendingUp className="h-3 w-3" />
                    {project.metrics}
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">{project.title}</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-red-400/15 bg-red-400/5 p-3.5">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-300/80" />
                    <p className="text-xs leading-relaxed text-slate-400">
                      <span className="font-semibold text-slate-300">Problem — </span>
                      {project.problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald/20 bg-emerald/5 p-3.5">
                    <Lightbulb className={`mt-0.5 h-4 w-4 shrink-0 ${cardStyles[project.accent].accent}`} />
                    <p className="text-xs leading-relaxed text-slate-400">
                      <span className="font-semibold text-slate-300">Solution — </span>
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-300 transition-colors duration-300 group-hover:border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 sm:mt-auto">
                  {project.liveUrl && project.liveUrl.startsWith('http') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glow flex-1 bg-gradient-to-r from-purple via-cyan to-emerald bg-[length:200%_auto] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-glow-purple transition-all duration-500 hover:bg-[position:100%_0] hover:-translate-y-0.5"
                    >
                      Live Preview
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glow glass-strong px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:-translate-y-0.5"
                    >
                      <Github className="h-4 w-4 text-cyan" />
                      Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 font-mono text-[11px] text-purple-300">
                      Enterprise Private
                    </span>
                  )}
                </div>
              </div>

              <span
                className={`pointer-events-none absolute -right-3 -top-3 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-500 transition-all duration-300 group-hover:rotate-12 ${cardStyles[project.accent].accent}`}
                aria-hidden="true"
              >
                <FolderGit2 className="h-6 w-6" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
