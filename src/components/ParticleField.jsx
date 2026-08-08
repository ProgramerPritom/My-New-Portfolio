import { useEffect, useRef } from 'react'

const COLORS = ['#06B6D4', '#8B5CF6', '#10B981']

export default function ParticleField({ className = '', density = 0.00008 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let particles = []
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999 }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = canvas.width = rect.width * window.devicePixelRatio
      h = canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      const count = Math.min(130, Math.floor(rect.width * rect.height * density))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: (Math.random() * 1.8 + 0.6) * window.devicePixelRatio,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const onMouse = (e) => {
      const rect = canvas.parentElement.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * window.devicePixelRatio
      mouse.y = (e.clientY - rect.top) * window.devicePixelRatio
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const dpr = window.devicePixelRatio
      for (const p of particles) {
        p.x += p.vx * dpr
        p.y += p.vy * dpr
        p.pulse += 0.02
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(p.pulse))
        ctx.globalAlpha = 0.85 * twinkle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      ctx.globalAlpha = 0.12
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120 * dpr) {
            ctx.strokeStyle = '#8B5CF6'
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 0.5
      ctx.strokeStyle = '#06B6D4'
      ctx.lineWidth = 1.2 * dpr
      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 160 * dpr) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    const parent = canvas.parentElement
    parent.addEventListener('mousemove', onMouse)
    parent.addEventListener('mouseleave', onLeave)

    if (reduced) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      parent.removeEventListener('mousemove', onMouse)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
