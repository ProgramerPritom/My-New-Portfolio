import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command, FileDown, Sparkles } from 'lucide-react'
import { navLinks, profile } from '../data'

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#work')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }

      // Track active section
      const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveHash(`#${id}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Trap body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080C14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="section-shell flex items-center justify-between">
          {/* Custom Monogram & Status Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#home"
              className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
              aria-label="Badruzzaman Pritom Portfolio Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-purple-600 to-emerald-500 p-[1px] shadow-sm shadow-cyan-500/30">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#080C14] transition-colors group-hover:bg-transparent">
                  <span className="font-mono text-xs font-black tracking-tighter text-white">
                    BP
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-sans text-xs font-bold text-white tracking-wide">
                  Pritom <span className="text-cyan-400">.dev</span>
                </span>
                <span className="font-mono text-[9px] text-slate-400 tracking-wider">
                  Full-Stack & AI
                </span>
              </div>
            </a>

            {/* Live Availability Status Pill */}
            <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Available for roles</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Cluster: Cmd+K Trigger & Resume CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ⌘K Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Open Command Palette (Ctrl+K or Cmd+K)"
            >
              <Command className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
              <span className="hidden sm:inline font-mono text-[11px]">Search</span>
              <kbd className="font-mono text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href={profile.cvDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10"
              aria-label="Download CV"
            >
              <FileDown className="h-3.5 w-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>

            {/* Direct Hire CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              Let's Talk
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 lg:hidden hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar Under Nav */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/80 backdrop-blur-lg"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-t-3xl border-t border-white/15 bg-[#0B101B] p-6 pb-10 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white">BP // Menu</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 font-medium">
                    Available
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-4 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-slate-500">→</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    onOpenCommandPalette()
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-medium text-slate-300"
                >
                  <Command className="h-4 w-4 text-cyan-400" />
                  <span>Open Command Palette (⌘K)</span>
                </button>

                <a
                  href={profile.cvDriveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs font-semibold text-emerald-300"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
