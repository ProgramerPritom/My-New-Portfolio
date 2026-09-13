import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Automation from './components/Automation'
import TechStack from './components/TechStack'
import Profile from './components/Profile'
import Journey from './components/Journey'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  // Listen for global Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="cosmic-bg relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500/25 selection:text-cyan-200 overflow-hidden">
      {/* Dynamic Ambient Auroras */}
      <div className="aurora left-[-10%] top-[10%] h-[32rem] w-[32rem] bg-purple-600/20" aria-hidden="true" />
      <div className="aurora right-[-8%] top-[35%] h-[30rem] w-[30rem] bg-cyan-500/18" aria-hidden="true" />
      <div className="aurora bottom-[15%] left-[25%] h-[28rem] w-[28rem] bg-emerald-500/15" aria-hidden="true" />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Slim Blur-on-Scroll Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <Projects />
        <Automation />
        <TechStack />
        <Profile />
        <Journey />
        <Articles />
        <Contact />
      </main>

      {/* Cohesive Footer with DevTools Easter Egg */}
      <Footer />
    </div>
  )
}
