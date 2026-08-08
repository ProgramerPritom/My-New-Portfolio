import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Terminal, Download } from 'lucide-react'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = navLinks.map((l) => l.href.slice(1))
      let current = '#home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex w-[min(100%-2rem,80rem)] items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan via-purple to-emerald shadow-glow-cyan">
            <Terminal className="h-4 w-4 text-white" strokeWidth={2.2} />
          </span>
          <span className="hidden text-sm font-bold tracking-wide text-white sm:block">
            {profile.name.split(' ')[0]}
            <span className="text-cyan">.</span>
            <span className="text-slate-400">dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-cyan via-purple to-emerald transition-all duration-300 ${
                    active === link.href ? 'opacity-100' : 'opacity-0 scale-x-50 group-hover:opacity-60 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
          <li className="ml-1">
            <a
              href="/cv.pdf"
              download
              className="btn-glow glass-strong px-4 py-2 text-sm text-white hover:-translate-y-0.5 hover:border-cyan/50"
              aria-label="Download CV"
            >
              <Download className="h-4 w-4 text-cyan" />
              <span className="hidden lg:inline">CV</span>
            </a>
          </li>
          <li className="ml-3">
            <a
              href="#contact"
              className="btn-glow bg-gradient-to-r from-cyan to-purple px-5 py-2 text-sm text-white shadow-glow-cyan hover:shadow-glow-cyan-lg hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 w-[min(100%-2rem,80rem)] md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                      <span className="text-xs text-cyan">→</span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.length }}
                  className="mt-2 border-t border-white/10 pt-3"
                >
                  <a
                    href="/cv.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-cyan transition-colors hover:bg-cyan/10"
                  >
                    Download CV
                    <Download className="h-4 w-4" />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
