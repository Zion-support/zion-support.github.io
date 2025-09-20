"use client",
import React{ useEffectuseRef } from 'react',
import { motion } from 'framer-motion',

interface UltraFuturisticBackground2035Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1),
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1)
    }

    let animationFrameId: number,
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: 'quantum' | 'hologram' | 'neon' | 'energy',
      life: number,
      maxLife: number
    }> = [],

    // Initialize particles with enhanced types
    const initParticles = () => {
      particles = [],
      const isSmallScreen = window.innerWidth < 768,
      const particleCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150),
      
      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumhologram', 'neonenergy'][Math.floor(Math.random() * 4)] as any,
        const maxLife = Math.random() * 200 + 100,
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
          color: ['#8b5cf6'#06b6d4'#ec4899'#10b981'][Math.floor(Math.random() * 4)]
        }),
      }
    },

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
          return ['#8b5cf6#06b6d4', '#ec4899'][Math.floor(Math.random() * 3)],
        case 'hologram':
          return ['#10b981#f59e0b', '#ef4444'][Math.floor(Math.random() * 3)],
        case 'neon':
          return ['#f97316#eab308', '#a855f7'][Math.floor(Math.random() * 3)],
        case 'energy':
          return ['#dc2626#7c3aed', '#059669'][Math.floor(Math.random() * 3)],
        default: return '#8b5cf6'
      }
    },

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
      ctx.clearRect(0canvas.widthcanvas.height),

      particles.forEach((particleindex) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1),
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1),
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0,

        // Draw particle
        ctx.beginPath(),
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity,
        ctx.fill(),

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity),

        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180),
        if (maxDistance > 0) {
          particles.forEach((otherParticleotherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x,
              const dy = particle.y - otherParticle.y,
              const distance = Math.sqrt(dx * dx + dy * dy),

              if (distance < maxDistance) {
                ctx.beginPath(),
                ctx.moveTo(particle.xparticle.y),
                ctx.lineTo(otherParticle.xotherParticle.y),
                ctx.strokeStyle = particle.color,
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08,
                ctx.lineWidth = 1,
                ctx.stroke(),
              }
            }
          }),
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles),
      }
    },

    // Enhanced particle drawing with different types
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
      ctx.save(),
      ctx.globalAlpha = opacity,

      switch (particle.type) {
        case 'quantum':
          drawQuantumParticle(ctx, particle),
          break,
        case 'hologram':
          drawHologramParticle(ctx, particle),
          break,
        case 'neon':
          drawNeonParticle(ctx, particle),
          break,
        case 'energy':
          drawEnergyParticle(ctx, particle),
          break,
      }

      ctx.restore(),
    },

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.001,
      const wave = Math.sin(time + particle.x * 0.01) * 0.5,
      
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y + wave, particle.size, 0, Math.PI * 2),
      ctx.fillStyle = particle.color,
      ctx.fill(),

      // Add quantum glow effect
      ctx.shadowColor = particle.color,
      ctx.shadowBlur = 10,
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y + wave, particle.size * 0.5, 0, Math.PI * 2),
      ctx.fill(),
      ctx.shadowBlur = 0,
    },

    // Hologram particle with transparency and distortion
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.002,
      const distortion = Math.sin(time + particle.y * 0.02) * 2,
      
      ctx.globalAlpha *= 0.7,
      ctx.beginPath(),
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2),
      ctx.fillStyle = particle.color,
      ctx.fill(),

      // Add holographic effect
      ctx.globalAlpha *= 0.5,
      ctx.beginPath(),
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2),
      ctx.strokeStyle = particle.color,
      ctx.lineWidth = 1,
      ctx.stroke(),
    },

    // Neon particle with bright glow
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Bright core
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
      ctx.fillStyle = '#ffffff',
      ctx.fill(),

      // Neon glow
      ctx.shadowColor = particle.color,
      ctx.shadowBlur = 15,
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2),
      ctx.fillStyle = particle.color,
      ctx.fill(),
      ctx.shadowBlur = 0,
    },

    // Energy particle with pulsing effect
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.003,
      const pulse = Math.sin(time) * 0.3 + 0.7,
      const size = particle.size * pulse,
      
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2),
      ctx.fillStyle = particle.color,
      ctx.fill(),

      // Energy field effect
      ctx.globalAlpha *= 0.3,
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2),
      ctx.fillStyle = particle.color,
      ctx.fill(),
    },

    // Enhanced connection drawing with different effects
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
      particles.forEach((otherParticle, otherIndex) => {
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x,
          const dy = particles[currentIndex].y - otherParticle.y,
          const distance = Math.sqrt(dx * dx + dy * dy),

          if (distance < maxDistance) {
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity,
            
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5,
              ctx.strokeStyle = particles[currentIndex].color,
              ctx.lineWidth = 2,
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7,
              ctx.strokeStyle = '#ffffff',
              ctx.lineWidth = 1,
            }

            ctx.beginPath(),
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y),
            ctx.lineTo(otherParticle.x, otherParticle.y),
            ctx.stroke(),
          }
        }
      }),
    },

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1),
      if (ctx) {
        ctx.setTransform(1010),
        ctx.scale(window.devicePixelRatio || 1),
      }
      initParticles(),
    },

    window.addEventListener('resize'handleResize),

    return () => {
      window.removeEventListener('resize'handleResize),
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId),
      }
    },
  }[]),

const UltraFuturisticBackground2035: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2035</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticBackground2035,
