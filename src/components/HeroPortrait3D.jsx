import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Cpu, Bot, Zap, ShieldCheck } from 'lucide-react'
import { profile } from '../data'

export default function HeroPortrait3D() {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse coordinate motion values for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for natural fluid response
  const springConfig = { damping: 20, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Tilt rotation transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-14deg', '14deg'])
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      className="relative w-full max-w-sm mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Neon Aura behind portrait */}
      <motion.div
        animate={{
          scale: isHovered ? [1.05, 1.15, 1.05] : [1, 1.08, 1],
          opacity: isHovered ? 0.7 : 0.45,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-emerald-500/30 blur-2xl pointer-events-none"
      />

      {/* Floating Holographic Badge 1 (Top Left) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, -4, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -left-4 z-30 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-[#080C14]/90 px-3 py-1 text-[11px] font-mono font-semibold text-cyan-300 shadow-xl shadow-cyan-950/60 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        </span>
        <span>⚛️ Node JS & Next JS</span>
      </motion.div>


      {/* Floating Holographic Badge 3 (Bottom Left) */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -bottom-3 left-4 z-30 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#080C14]/90 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-300 shadow-xl shadow-emerald-950/60 backdrop-blur-md"
      >
        <Zap className="h-3 w-3 text-purple-400" />
        <span>⚡ AI Automation & Agents</span>
      </motion.div>

      {/* Main 3D Tilted Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full aspect-[4/5] rounded-[2rem] border border-white/15 bg-gradient-to-b from-[#0F172A]/90 via-[#0A0F1D]/90 to-[#060911]/95 p-2.5 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden cursor-pointer"
      >
        {/* Cyber HUD Bracket Accents */}
        <div className="absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-cyan-400/70 z-20 pointer-events-none rounded-tl-sm" />
        <div className="absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-cyan-400/70 z-20 pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-cyan-400/70 z-20 pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-cyan-400/70 z-20 pointer-events-none rounded-br-sm" />

        {/* Inner Container with Image and Gradient Blending */}
        <div className="relative h-full w-full rounded-[1.6rem] overflow-hidden bg-[#070B14]">
          {/* User Portrait Image */}
          <img
            src={profile.avatar || '/Personal-Photo.png'}
            alt="Badruzzaman Pritom — Full-Stack & AI Systems Engineer"
            onError={(e) => {
              e.currentTarget.src = '/Personal-Photo.png'
            }}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
          />

          {/* Deep Dark Gradient Blend Overlays (Fades image edges seamlessly into background) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#060A12]/30 to-transparent opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060A12]/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060A12] to-transparent pointer-events-none" />

          {/* Holographic Light Sweep Beam */}
          <motion.div
            animate={{
              x: ['-150%', '200%'],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent pointer-events-none blur-sm"
          />

          {/* Cyber Scanning Grid line */}
          <motion.div
            animate={{
              y: ['0%', '100%', '0%'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none"
          />

          {/* Interactive Mouse Glare Effect */}
          {isHovered && (
            <motion.div
              style={{
                background: `radial-gradient(circle 180px at ${glareX} ${glareY}, rgba(6, 182, 212, 0.22), transparent 80%)`,
              }}
              className="absolute inset-0 pointer-events-none"
            />
          )}

          {/* Card Lower Info HUD */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between p-2 rounded-xl bg-[#080D18]/80 backdrop-blur-md border border-white/10 shadow-lg">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-mono text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                  Systems Active
                </p>
              </div>
              <p className="font-bold text-white text-sm leading-tight mt-0.5">
                Badruzzaman Pritom
              </p>
              <p className="text-[11px] font-mono text-cyan-300">
                Full-Stack & AI Engineer
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block rounded-md border border-cyan-500/30 bg-cyan-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-200">
                Glow Radius
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
