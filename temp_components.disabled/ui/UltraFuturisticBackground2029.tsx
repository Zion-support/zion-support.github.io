import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2029({ children }: UltraFuturisticBackground2029Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number,
    let time = 0,

    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [],

    // Initialize particles
    for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        opacity: Math.random() * 0.5 + 0.3
      }),
    }

    const animate = () => {
      time += 0.01,
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)',
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle with glow effect
        ctx.save(),
        ctx.globalAlpha = particle.opacity,
        
        // Outer glow
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 20,
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),

        // Inner core
        ctx.shadowBlur = 0,
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)',
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2),
        ctx.fill(),
        
        ctx.restore(),
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 1,
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x,
          const dy = particles[i].y - particles[j].y,
          const distance = Math.sqrt(dx * dx + dy * dy),
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1,
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke(),
          }
        }
      }

      // Draw quantum waves
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)',
      ctx.lineWidth = 2,
      
      for (let i = 0, i < 5, i++) {
        const waveY = canvas.height * 0.5 + Math.sin(time + i) * 50,
        ctx.beginPath(),
        ctx.moveTo(0, waveY),
        
        for (let x = 0, x < canvas.width, x += 10) {
          const y = waveY + Math.sin(x * 0.01 + time + i) * 30,
          ctx.lineTo(x, y),
        }
        
        ctx.stroke(),
      }

      animationFrameId = requestAnimationFrame(animate),
    },

    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId),
    },
  }, []),

const UltraFuturisticBackground2029: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2029</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticBackground2029,
