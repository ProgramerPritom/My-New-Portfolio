import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FileDown,
  Copy,
  Check,
  ListFilter,
  Eye,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { careerTimeline, profile } from '../data'

export default function Journey() {
  const [viewMode, setViewMode] = useState('visual') // 'visual' | 'ats'
  const [copiedResume, setCopiedResume] = useState(false)

  const handleCopyAtsText = () => {
    const plainText = careerTimeline
      .map(
        (item) =>
          `${item.role} — ${item.company} (${item.period})\nLocation: ${item.location}\n` +
          item.achievements.map((a) => `• ${a}`).join('\n')
      )
      .join('\n\n')

    navigator.clipboard.writeText(plainText)
    setCopiedResume(true)
    setTimeout(() => setCopiedResume(false), 2000)
  }

  return (
    <section id="timeline" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              // Career Trajectory & Scope
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Experience & Proven Achievements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Framed around measurable outcomes, architectural ownership, and systems shipped to
              production.
            </p>
          </div>

          {/* Mode Switcher & Resume Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="Timeline display mode"
              className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'visual'}
                onClick={() => setViewMode('visual')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  viewMode === 'visual'
                    ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Visual Timeline</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'ats'}
                onClick={() => setViewMode('ats')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  viewMode === 'ats'
                    ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ListFilter className="h-3.5 w-3.5" />
                <span>Plain ATS / Text View</span>
              </button>
            </div>

            <a
              href={profile.cvDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
            >
              <FileDown className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Dynamic Display: Visual Timeline vs Plain ATS Text View */}
        {viewMode === 'visual' ? (
          <div className="relative mx-auto max-w-4xl">
            {/* Center line */}
            <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500" />

            {/* Semantic Ordered List for Accessibility */}
            <ol className="space-y-10">
              {careerTimeline.map((item, idx) => (
                <li key={idx} className="relative pl-12 sm:pl-16">
                  {/* Timeline Dot Node */}
                  <div className="absolute left-[11px] sm:left-[19px] top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#080C14] bg-cyan-400 shadow-sm shadow-cyan-400" />

                  {/* Card Content */}
                  <div className="rounded-2xl border border-white/10 bg-[#0B101B]/80 p-6 sm:p-7 backdrop-blur-md transition-all hover:border-white/20">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          {item.company}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-400">{item.location}</span>
                      </div>
                      <span className="font-mono text-xs text-slate-400 border border-white/5 bg-white/5 px-2.5 py-0.5 rounded-md">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>

                    {/* Measurable Achievements */}
                    <ul className="mt-4 space-y-2.5">
                      {item.achievements.map((achieve, ai) => (
                        <li key={ai} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          /* Plain ATS / Text Resume View */
          <div className="rounded-3xl border border-white/10 bg-[#060A11] p-6 sm:p-8 font-mono text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-slate-400 font-semibold">
                Clean ATS Text Format (Ready for copy & paste)
              </span>
              <button
                type="button"
                onClick={handleCopyAtsText}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition-colors"
              >
                {copiedResume ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedResume ? 'Copied to Clipboard!' : 'Copy Plain Text'}</span>
              </button>
            </div>

            <div className="space-y-8 text-slate-300">
              {careerTimeline.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-white font-bold text-base">
                    {item.role} — {item.company}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {item.period} | Location: {item.location} | {item.type}
                  </p>
                  <ul className="pl-4 space-y-1 text-slate-300">
                    {item.achievements.map((achieve, ai) => (
                      <li key={ai} className="list-disc leading-relaxed">
                        {achieve}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
