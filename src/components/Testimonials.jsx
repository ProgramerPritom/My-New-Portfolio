import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { testimonials } from '../data'

const bubbleStyles = {
  cyan: 'hover:border-cyan/40 hover:shadow-glow-cyan',
  purple: 'hover:border-purple/40 hover:shadow-glow-purple',
  emerald: 'hover:border-emerald/40 hover:shadow-glow-emerald',
}

const avatarGradients = [
  'from-purple to-cyan',
  'from-cyan to-emerald',
  'from-emerald to-purple',
  'from-purple to-emerald',
]

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`}
        />
      ))}
    </div>
  )
}

function Bubble({ t, i }) {
  return (
    <div
      className={`flex w-[85vw] max-w-md shrink-0 flex-col rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 ${bubbleStyles[t.accent]} sm:w-[26rem]`}
    >
      <Quote className={`h-6 w-6 ${i % 2 === 0 ? 'text-cyan' : 'text-purple'}`} aria-hidden="true" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${avatarGradients[i % 4]} text-sm font-bold text-white`}
          >
            {t.name.split(' ').map((n) => n[0]).join('')}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-slate-400">{t.title}</p>
          </div>
        </div>
        <Stars rating={t.rating} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-emerald/10 blur-[130px]" aria-hidden="true" />
      <div className="section-shell">
        <SectionHeader
          kicker="Testimonials"
          title="What Others Say"
          subtitle="Real words from the people I've built with and for."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max shrink-0 animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div key={`${t.name}-${i}`} className="flex pr-6">
              <Bubble t={t} i={i} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
