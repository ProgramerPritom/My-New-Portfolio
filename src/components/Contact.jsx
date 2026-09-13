import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile } from '../data'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'sending' | 'sent'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrProject: '',
    message: '',
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate robust transmission
    setTimeout(() => {
      setFormStatus('sent')
    }, 1200)
  }

  const prefilledMailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    'Engineering Role / Project Discussion for Badruzzaman Pritom'
  )}&body=${encodeURIComponent(
    'Hi Badruzzaman,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding...\n'
  )}`

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          kicker="// Zero Friction Outreach"
          title="Direct Channels to Connect"
          subtitle="No gatekeeping behind slow forms. Reach me through 3 parallel paths: direct email, instant copy, or priority message."
        />

        {/* 3 Low-Friction Contact Action Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {/* Card 1: 1-Click Copy Email */}
          <div className="rounded-2xl border border-white/10 bg-[#0B101B]/90 p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Fastest Path
              </span>
              <h4 className="mt-1 text-base font-bold text-white">Direct Email</h4>
              <p className="mt-1 text-xs text-slate-400 break-all font-mono">
                {profile.email}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
              <a
                href={prefilledMailto}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Open mail client"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone / WhatsApp Direct */}
          <div className="rounded-2xl border border-white/10 bg-[#0B101B]/90 p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Direct Call / Text
              </span>
              <h4 className="mt-1 text-base font-bold text-white">WhatsApp & Mobile</h4>
              <p className="mt-1 text-xs text-slate-400 font-mono">
                {profile.phone}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5">
              <a
                href={`https://wa.me/880${profile.phone.slice(1)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Location & Availability Context */}
          <div className="rounded-2xl border border-white/10 bg-[#0B101B]/90 p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all">
            <div>
              <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-wider">
                Work Compatibility
              </span>
              <h4 className="mt-1 text-base font-bold text-white">Global Remote</h4>
              <p className="mt-1 text-xs text-slate-400">
                {profile.timezone}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] text-slate-300">
                Immediate availability for interviews
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Message Form Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Pitch Context */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#080D16] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">What can we build?</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              I collaborate with forward-thinking teams to design and deploy:
            </p>

            <ul className="mt-4 space-y-3 font-mono text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">01.</span>
                <span>Autonomous tool-calling AI agents & RAG pipelines</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-purple-400 font-bold">02.</span>
                <span>High-throughput microservices & Kafka event streams</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">03.</span>
                <span>Production React & Next.js full-stack web platforms</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">04.</span>
                <span>End-to-end sales & CRM workflow automation engines</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400">
                Prefer asynchronous correspondence? Send an email directly to{' '}
                <a
                  href={prefilledMailto}
                  className="text-cyan-400 font-medium hover:underline"
                >
                  {profile.email}
                </a>{' '}
                for a reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Clean Accessible Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0B101B] p-6 sm:p-8 shadow-xl">
            {formStatus === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Received</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! Badruzzaman Pritom will review your note and respond
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Miller"
                      className="w-full rounded-xl border border-white/10 bg-[#060A11] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/10 bg-[#060A11] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Role / Project Topic
                  </label>
                  <input
                    id="contact-topic"
                    type="text"
                    name="roleOrProject"
                    value={formData.roleOrProject}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Full-Stack Role or Custom RAG Pipeline"
                    className="w-full rounded-xl border border-white/10 bg-[#060A11] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Message & Timeline
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Details about your timeline, tech stack, and goals..."
                    className="w-full rounded-xl border border-white/10 bg-[#060A11] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-70"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
