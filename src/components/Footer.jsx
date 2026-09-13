import { useEffect } from 'react'
import { Github, Linkedin, Mail, FileDown, ArrowUp, Code2, Heart } from 'lucide-react'
import { profile, navLinks } from '../data'

export default function Footer() {
  // Easter Egg: Styled console.log for developers who open DevTools
  useEffect(() => {
    const greetingStyle = [
      'color: #06B6D4',
      'background: #080C14',
      'font-size: 14px',
      'font-weight: bold',
      'padding: 8px 12px',
      'border: 1px solid #06B6D4',
      'border-radius: 6px',
    ].join(';')

    const messageStyle = ['color: #cbd5e1', 'font-size: 12px', 'line-height: 1.5'].join(';')

    console.log('%c🚀 Hello curious developer!', greetingStyle)
    console.log(
      '%cYou are inspecting Badruzzaman Pritom’s portfolio.\nBuilt with React, Vite, Framer Motion & Tailwind CSS.\nSource: https://github.com/ProgramerPritom/My-New-Portfolio\nLet’s build something together: badruzzamanpritom@gmail.com',
      messageStyle
    )
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-[#06090F] pt-14 pb-12 overflow-hidden">
      <div className="section-shell">
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-start">
          {/* Brand & Monogram Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#080C14]">
                  <span className="font-mono text-xs font-black text-white">BP</span>
                </div>
              </div>
              <span className="font-bold text-white tracking-wide text-sm">
                Badruzzaman Pritom
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full-Stack & AI Systems Engineer. Shipping production autonomous agents, RAG
              pipelines, and distributed streaming microservices.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.cvDriveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                aria-label="Download Resume"
              >
                <FileDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Sitemap */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Site Index
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Engineering Craft Badge & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-left md:text-right">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                Open Architecture
              </span>
              <a
                href={profile.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-cyan-400 hover:underline mt-1"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>View Portfolio Source</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Contrast-Compliant Metadata */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Badruzzaman Pritom. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Designed for conversion, speed, and craft • Deployed on Netlify
          </p>
        </div>
      </div>
    </footer>
  )
}
