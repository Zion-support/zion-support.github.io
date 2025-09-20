import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraFuturisticBackground2045Props {
  children: React.ReactNode
}

const UltraFuturisticBackground2045: React.FC<UltraFuturisticBackground2045Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const animationRef = useRef<number | undefined>(undefined),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number
    }> = [],

    // Create initial particles
    for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        alpha: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      }),
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life--,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.alpha,
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),

        // Add glow effect
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 20,
        ctx.fill(),
        ctx.restore(),

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            alpha: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          },
        }
      }),

      // Draw connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x,
          const dy = particle1.y - particle2.y,
          const distance = Math.sqrt(dx * dx + dy * dy),

          if (distance < 150) {
            ctx.save(),
            ctx.globalAlpha = (150 - distance) / 150 * 0.3,
            ctx.strokeStyle = '#00ffff',
            ctx.lineWidth = 1,
            ctx.beginPath(),
            ctx.moveTo(particle1.x, particle1.y),
            ctx.lineTo(particle2.x, particle2.y),
            ctx.stroke(),
            ctx.restore(),
          }
        }),
      }),

      animationRef.current = requestAnimationFrame(animate),
    },

    animate(),

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
    },

    window.addEventListener('resize', handleResize),

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current),
      }
      window.removeEventListener('resize', handleResize),
    },
  }, []),

const UltraFuturisticBackground2045: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2045</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticBackground2045,
