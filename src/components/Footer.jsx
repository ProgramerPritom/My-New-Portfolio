import { motion } from 'framer-motion'
import { Github, Linkedin, Heart, Terminal, FileDown } from 'lucide-react'
import { profile, navLinks } from '../data'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github, hover: 'hover:border-white/30 hover:shadow-glow-cyan' },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin, hover: 'hover:border-white/30 hover:shadow-glow-purple' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan via-purple to-emerald">
              <Terminal className="h-4 w-4 text-white" strokeWidth={2.2} />
            </span>
            <span className="text-sm font-bold text-white">
              {profile.name.split(' ')[0]}
              <span className="text-cyan">.</span>
              <span className="text-slate-400">dev</span>
            </span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="/cv.pdf"
              download
              aria-label="Download CV"
              whileHover={{ y: -6, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              className="grid h-11 w-11 place-items-center rounded-xl glass text-slate-300 transition-colors duration-300 hover:border-emerald/40 hover:shadow-glow-emerald"
            >
              <FileDown className="h-5 w-5" />
            </motion.a>
            {socials.map(({ label, href, Icon, hover }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -6, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                className={`grid h-11 w-11 place-items-center rounded-xl glass text-slate-300 transition-colors duration-300 ${hover}`}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & built with <Heart className="h-3.5 w-3.5 fill-cyan text-cyan animate-pulse" /> React,
            Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
