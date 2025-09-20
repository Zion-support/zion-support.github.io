import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraFuturisticBackground2032Props {
  children: React.ReactNode,
  className?: string
}

const UltraFuturisticBackground2032: React.FC<UltraFuturisticBackground2032Props> = ({ 
  children,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number,
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number
    }> = [],

    // Create particles
    const createParticles = () => {
      particles = [],
      for (let i = 0, i < 150, i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.5 + 0.3
        }),
      }
    },

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      ),
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)'),
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.6)'),
      gradient.addColorStop(1, 'rgba(51, 65, 85, 0.4)'),
      ctx.fillStyle = gradient,
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

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.alpha,
        ctx.fillStyle = particle.color,
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 10,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore(),

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            ),
            if (distance < 100) {
              ctx.save(),
              ctx.globalAlpha = (100 - distance) / 100 * 0.1,
              ctx.strokeStyle = particle.color,
              ctx.lineWidth = 0.5,
              ctx.beginPath(),
              ctx.moveTo(particle.x, particle.y),
              ctx.lineTo(otherParticle.x, otherParticle.y),
              ctx.stroke(),
              ctx.restore(),
            }
          }
        }),
      }),

      animationFrameId = requestAnimationFrame(animate),
    },

    createParticles(),
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

const UltraFuturisticBackground2032: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2032</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticBackground2032,
