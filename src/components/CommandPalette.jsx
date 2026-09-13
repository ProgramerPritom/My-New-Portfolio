import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Command,
  FileText,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Phone,
} from 'lucide-react'
import { profile, allProjects, automationSystems, skillCategories } from '../data'

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedKey, setCopiedKey] = useState(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Build searchable items list
  const defaultActions = [
    {
      id: 'work',
      title: 'Flagship & Client Projects',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        window.location.hash = 'work'
        onClose()
      },
    },
    {
      id: 'automation',
      title: 'AI & Workflow Automation Solutions',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        window.location.hash = 'automation'
        onClose()
      },
    },
    {
      id: 'stack',
      title: 'Skills & Architecture Matrix',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        window.location.hash = 'stack'
        onClose()
      },
    },
    {
      id: 'about',
      title: 'About Pritom & Career Story',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        window.location.hash = 'about'
        onClose()
      },
    },
    {
      id: 'timeline',
      title: 'Career Timeline & Experience',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        window.location.hash = 'timeline'
        onClose()
      },
    },
    {
      id: 'thinking',
      title: 'Proof of Thinking / Technical Writing',
      category: 'Navigation',
      icon: FileText,
      action: () => {
        window.location.hash = 'thinking'
        onClose()
      },
    },
    {
      id: 'contact',
      title: 'Get In Touch / Contact Channel',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.hash = 'contact'
        onClose()
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${profile.email})`,
      category: 'Quick Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(profile.email)
        setCopiedKey('email')
        setTimeout(() => {
          setCopiedKey(null)
          onClose()
        }, 1000)
      },
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${profile.phone})`,
      category: 'Quick Actions',
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText(profile.phone)
        setCopiedKey('phone')
        setTimeout(() => {
          setCopiedKey(null)
          onClose()
        }, 1000)
      },
    },
    {
      id: 'download-cv',
      title: 'Download Resume (PDF)',
      category: 'Quick Actions',
      icon: FileText,
      action: () => {
        window.open(profile.cvDriveUrl, '_blank')
        onClose()
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile (@ProgramerPritom)',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open(profile.socials.github, '_blank')
        onClose()
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open(profile.socials.linkedin, '_blank')
        onClose()
      },
    },
  ]

  // Add all projects to search
  const projectActions = allProjects.map((p) => ({
    id: `proj-${p.id}`,
    title: `Project: ${p.title}`,
    subtitle: p.tagline,
    category: 'Projects',
    icon: Briefcase,
    action: () => {
      window.location.hash = 'work'
      onClose()
    },
  }))

  // Add all automation systems to search
  const automationActions = automationSystems.map((a) => ({
    id: `auto-${a.id}`,
    title: `Automation: ${a.title}`,
    subtitle: a.tagline,
    category: 'Automation',
    icon: Cpu,
    action: () => {
      window.location.hash = 'automation'
      onClose()
    },
  }))

  // Add individual skills to search
  const skillActions = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({
      id: `skill-${s.name.replace(/\s+/g, '-').toLowerCase()}`,
      title: `Tech: ${s.name}`,
      subtitle: s.context,
      category: cat.name,
      icon: Cpu,
      action: () => {
        window.location.hash = 'stack'
        onClose()
      },
    }))
  )

  const allItems = [...defaultActions, ...projectActions, ...automationActions, ...skillActions]

  const filteredItems = query.trim() === ''
    ? defaultActions
    : allItems.filter((item) => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(q))
        )
      })

  // Keyboard navigation
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action()
      }
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[selectedIndex]
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0B101B] shadow-2xl shadow-cyan-950/40"
          >
            {/* Input bar */}
            <div className="relative flex items-center border-b border-white/10 px-4 py-3.5">
              <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, project, or skill (e.g. 'RAG', 'Kafka', 'Email')..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 outline-none"
                aria-autocomplete="list"
              />
              <span className="hidden sm:inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-400 border border-white/10">
                ESC to close
              </span>
            </div>

            {/* Results count label for screen readers */}
            <div className="sr-only" aria-live="polite">
              {filteredItems.length} commands available
            </div>

            {/* List */}
            <div
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-white/5"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-400">
                  <p>No results found for "{query}".</p>
                  <p className="mt-1 text-xs text-slate-500">Try searching for "Projects", "Kafka", or "Contact".</p>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex
                  const Icon = item.icon
                  const isCopied =
                    (item.id === 'copy-email' && copiedKey === 'email') ||
                    (item.id === 'copy-phone' && copiedKey === 'phone')

                  return (
                    <div
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-3 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                          : 'text-slate-300 hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-3">
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border ${
                            isSelected
                              ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-300'
                              : 'border-white/10 bg-white/5 text-slate-400'
                          }`}
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </span>
                        <div className="min-w-0">
                          <p className={`text-sm font-medium truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {item.title}
                          </p>
                          {item.subtitle && (
                            <p className="text-xs text-slate-400 truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 border border-white/5 px-2 py-0.5 rounded bg-white/[0.02]">
                          {item.category}
                        </span>
                        {isSelected && (
                          <ArrowRight className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* Footer controls hint */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#080C14] px-4 py-2.5 font-mono text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-300">↑</kbd>{' '}
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-300">↓</kbd> navigate
                </span>
                <span>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-slate-300">↵</kbd> select
                </span>
              </div>
              <span>Pritom // Portfolio Search</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
