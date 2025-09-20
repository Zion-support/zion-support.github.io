import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface QuantumMatrixBackgroundProps {
  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high',
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'matrix'
}

const QuantumMatrixBackground: React.FC<QuantumMatrixBackgroundProps> = ({
  children,
  intensity = 'medium',
  variant = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const animationRef = useRef<number | undefined>(undefined),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: string
    }> = [],

    const colors = {
      quantum: ['#00ffff#0080ff', '#0040ff#0000ff'],
      holographic: ['#ff00ff#8000ff', '#4000ff#0000ff'],
      cyberpunk: ['#ff0080#ff0040', '#ff0000#800000'],
      neural: ['#00ff80#00ff40', '#00ff00#008000'],
      matrix: ['#00ff00#40ff40', '#80ff80#c0ffc0']
    },

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 2
    },

    const particleCount = Math.floor(100 * intensityMultiplier[intensity]),

    // Initialize particles
    for (let i = 0, i < particleCount, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        type: Math.random() > 0.5 ? 'circle' : 'square'
      }),
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Create quantum entanglement effect
      ctx.save(),
      ctx.globalCompositeOperation = 'screen',
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1,
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1,

        // Draw particle
        ctx.beginPath(),
        ctx.globalAlpha = particle.opacity,
        ctx.fillStyle = particle.color,
        
        if (particle.type === 'circle') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        } else {
          ctx.rect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size),
        }
        
        ctx.fill(),

        // Draw connection lines
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            ),
            
            if (distance < 150) {
              ctx.beginPath(),
              ctx.strokeStyle = particle.color,
              ctx.globalAlpha = (150 - distance) / 150 * 0.3,
              ctx.lineWidth = 1,
              ctx.moveTo(particle.x, particle.y),
              ctx.lineTo(otherParticle.x, otherParticle.y),
              ctx.stroke(),
            }
          }
        }),

        // Add glow effect
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 20,
        ctx.fill(),
        ctx.shadowBlur = 0,
      }),

      ctx.restore(),

      // Add matrix rain effect for matrix variant
      if (variant === 'matrix') {
        ctx.fillStyle = '#00ff00',
        ctx.font = '16px monospace',
        ctx.globalAlpha = 0.3,
        
        for (let i = 0, i < 20, i++) {
          const x = (i * 80) % canvas.width,
          const y = (Date.now() * 0.01 + i * 20) % canvas.height,
          ctx.fillText('01', x, y),
        }
        ctx.globalAlpha = 1,
      }

      // Add holographic interference pattern
      if (variant === 'holographic') {
        ctx.strokeStyle = '#ff00ff',
        ctx.globalAlpha = 0.1,
        ctx.lineWidth = 1,
        
        for (let i = 0, i < 10, i++) {
          ctx.beginPath(),
          ctx.moveTo(0, i * 100),
          ctx.lineTo(canvas.width, i * 100),
          ctx.stroke(),
          
          ctx.beginPath(),
          ctx.moveTo(i * 100, 0),
          ctx.lineTo(i * 100, canvas.height),
          ctx.stroke(),
        }
        ctx.globalAlpha = 1,
      }

      animationRef.current = requestAnimationFrame(animate),
    },

    animate(),

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
  }, [intensity, variant]),

const QuantumMatrixBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumMatrixBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default QuantumMatrixBackground,
