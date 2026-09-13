import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, FileText, CheckCircle2, ChevronRight, BookOpen, Clock } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile } from '../data'

export default function Profile() {
  const [viewMode, setViewMode] = useState('short') // 'short' | 'full'

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          kicker="// About & Engineering Philosophy"
          title="The Story Behind the Systems"
          subtitle="Moving past resume bullet dumps: how I transitioned from computer science fundamentals to autonomous production AI."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait & Credibility Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Real Photo Card with Floating Animated Badges */}
            <div className="relative">
              {/* Floating animated chips */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 top-6 z-20 rounded-full border border-cyan-500/40 bg-[#080C14]/90 px-3 py-1 text-[11px] font-mono font-semibold text-cyan-300 shadow-lg shadow-cyan-950/50 backdrop-blur-md"
              >
                ⚛️ React & Next.js
              </motion.span>
              <motion.span
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-3 top-1/3 z-20 rounded-full border border-purple-500/40 bg-[#080C14]/90 px-3 py-1 text-[11px] font-mono font-semibold text-purple-300 shadow-lg shadow-purple-950/50 backdrop-blur-md"
              >
                ⚡ Kafka & Microservices
              </motion.span>
              <motion.span
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute left-6 -bottom-3 z-20 rounded-full border border-emerald-500/40 bg-[#080C14]/90 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-300 shadow-lg shadow-emerald-950/50 backdrop-blur-md"
              >
                🤖 Autonomous RAG
              </motion.span>

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0B101B] p-2 shadow-2xl glow-ring">
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={profile.avatar || '/Personal-Photo.png'}
                    alt="Badruzzaman Pritom — Full-Stack & AI Systems Engineer"
                    onError={(e) => {
                      e.currentTarget.src = '/Personal-Photo.png'
                    }}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-base">{profile.name}</p>
                      <p className="text-xs text-cyan-400 font-mono">{profile.role}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-mono font-medium text-emerald-300 border border-emerald-500/30">
                      🟢 Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Credibility Markers */}
            <div className="grid grid-cols-2 gap-3">
              {profile.credibilityMarkers.map((marker, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B101B]/80 p-4 transition-all hover:border-cyan-500/30"
                >
                  <p className="gradient-accent text-2xl font-black">{marker.value}</p>
                  <p className="mt-1 text-xs font-semibold text-white">{marker.label}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400 leading-tight">
                    {marker.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Prose with Short vs. Full Story Toggle */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Short vs. Full Toggle Switch */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Reading Mode:
              </span>
              <div
                role="tablist"
                aria-label="Biography view format"
                className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === 'short'}
                  aria-controls="bio-content-short"
                  onClick={() => setViewMode('short')}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    viewMode === 'short'
                      ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" />
                  <span>The 30-Sec Summary</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === 'full'}
                  aria-controls="bio-content-full"
                  onClick={() => setViewMode('full')}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    viewMode === 'full'
                      ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>The Full Story</span>
                </button>
              </div>
            </div>

            {/* Prose Content Area */}
            <div className="rounded-3xl border border-white/10 bg-[#0B101B]/60 p-6 sm:p-8 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {viewMode === 'short' ? (
                  <motion.div
                    key="short"
                    id="bio-content-short"
                    role="tabpanel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg"
                  >
                    <p>
                      I’m <strong className="text-white font-semibold">Badruzzaman Pritom</strong>,
                      a <span className="text-cyan-300 font-medium">Full-Stack & AI Systems Engineer</span> with
                      over 3 years of production experience shipping scalable platforms, autonomous
                      RAG pipelines, and distributed event architectures.
                    </p>
                    <p>
                      Currently at <strong className="text-white">Glow Radius</strong>, I architect
                      intelligent tool-calling agent runtimes, CRM automation engines, and
                      microservice brokers. My builds combine modern web frameworks (
                      <span className="text-slate-200">React, Next.js, Node.js</span>) with resilient
                      asynchronous backends (<span className="text-purple-300">Kafka, Redis, BullMQ</span>) and
                      vector search (<span className="text-emerald-300">Pinecone, LangChain</span>).
                    </p>
                    <p className="text-slate-400 text-sm">
                      ⚡ I design systems for measurable business ROI: eliminating hundreds of hours of
                      manual operations while sustaining low-latency performance at scale.
                    </p>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500">
                        Want the full trajectory? Switch to "The Full Story".
                      </span>
                      <button
                        type="button"
                        onClick={() => setViewMode('full')}
                        className="inline-flex items-center gap-1 font-mono text-xs text-cyan-400 hover:underline"
                      >
                        Read chapters →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="full"
                    id="bio-content-full"
                    role="tabpanel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8"
                  >
                    {profile.fullStory.map((chapter) => (
                      <div key={chapter.step} className="relative pl-6 border-l border-white/15">
                        <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[#0B101B] bg-cyan-400" />
                        <span className="font-mono text-xs font-semibold text-cyan-400">
                          {chapter.step}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                          {chapter.title}
                        </h4>
                        <div className="mt-2 space-y-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                          {chapter.paragraphs.map((p, pi) => (
                            <p
                              key={pi}
                              dangerouslySetInnerHTML={{
                                __html: p.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-white font-semibold">$1</strong>'
                                ),
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
