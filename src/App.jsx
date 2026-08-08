import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Journey from './components/Journey'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="cosmic-bg relative min-h-screen text-slate-300">
      <div className="aurora left-[-10%] top-[18%] h-[28rem] w-[28rem] bg-purple/30" aria-hidden="true" />
      <div className="aurora right-[-8%] top-[55%] h-[26rem] w-[26rem] bg-cyan/25" aria-hidden="true" />
      <div className="aurora bottom-[5%] left-[30%] h-[22rem] w-[22rem] bg-emerald/20" aria-hidden="true" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Profile />
        <Journey />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
