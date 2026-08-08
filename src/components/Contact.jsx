import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile, formFields } from '../data'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1400)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-emerald/10 via-purple/10 to-transparent" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeader
          kicker="Contact"
          title="Let's Build Something Great"
          subtitle="Have a project, a role, or an idea worth automating? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Whether it's a full-stack build, an AI agent, or a workflow that should run itself —
              I'd love to hear about it.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: profile.email, accent: 'text-cyan border-cyan/30 bg-cyan/10' },
                { icon: MapPin, label: 'Location', value: profile.location, accent: 'text-purple border-purple/30 bg-purple/10' },
              ].map((row) => (
                <a
                  key={row.label}
                  href={row.label === 'Email' ? `mailto:${row.value}` : undefined}
                  className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25"
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${row.accent}`}>
                    <row.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">{row.label}</span>
                    <span className="block text-sm font-medium text-slate-200 group-hover:text-white">
                      {row.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl glass p-5">
              <p className="font-mono text-xs text-slate-500">$ whoami</p>
              <p className="mt-1 font-mono text-sm text-emerald">Full-Stack & AI Engineer</p>
              <p className="font-mono text-xs text-slate-400">{'>'} 3+ years building & automating</p>
              <p className="font-mono text-xs text-slate-400">{'>'} 15+ products shipped to production</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl glass-strong p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {formFields.map((field) => (
                <Field key={field.name} field={field} value={form[field.name]} onChange={onChange} />
              ))}
              <div className="sm:col-span-2">
                <Field
                  field={{ name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...' }}
                  value={form.message}
                  onChange={onChange}
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status !== 'idle'}
              className={`btn-glow mt-6 w-full bg-gradient-to-r from-cyan via-purple to-emerald bg-[length:200%_auto] px-8 py-4 text-sm font-semibold text-white shadow-glow-cyan transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-glow-cyan-lg disabled:cursor-not-allowed disabled:opacity-80`}
            >
              {status === 'idle' && (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
              {status === 'sending' && (
                <>
                  Sending... <Loader2 className="h-4 w-4 animate-spin" />
                </>
              )}
              {status === 'sent' && (
                <>
                  Message Sent! <CheckCircle2 className="h-4 w-4" />
                </>
              )}
            </motion.button>

            {status === 'sent' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-3 text-center text-sm text-emerald"
              >
                Thanks for reaching out! I'll get back to you within 24 hours.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ field, value, onChange }) {
  const base =
    'peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300'
  const focus = 'focus:border-cyan/50 focus:bg-white/[0.06] focus:shadow-glow-cyan'

  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
        {field.label}
      </label>
      <div className="group relative">
        {field.type === 'textarea' ? (
          <textarea
            name={field.name}
            value={value}
            onChange={onChange}
            rows={5}
            placeholder={field.placeholder}
            className={`${base} ${focus} resize-none`}
            required
          />
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
            placeholder={field.placeholder}
            className={`${base} ${focus}`}
            required
          />
        )}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 peer-focus:opacity-100"
          style={{
            background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #10B981)',
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
