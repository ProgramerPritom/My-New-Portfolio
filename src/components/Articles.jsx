import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Clock, ArrowRight, Sparkles, ExternalLink, CornerRightDown } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { articles } from '../data'

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  return (
    <section id="thinking" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          kicker="// Proof of Thinking"
          title="Architectural Writing & Deep Dives"
          subtitle="How an engineer reasons through tradeoffs is best proven in writing. 3 high-signal breakdowns with real takeaways and direct project cross-links."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B101B]/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Header Meta: Category + Read time */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-semibold text-cyan-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Direct Key Takeaway Box */}
                <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    <span>Core Engineering Takeaway</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300 font-medium">
                    "{article.takeaway}"
                  </p>
                </div>
              </div>

              {/* Cross-link to related project build */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#work"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Build: {article.relatedProject}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>

                <span className="font-mono text-[11px] text-slate-500">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
