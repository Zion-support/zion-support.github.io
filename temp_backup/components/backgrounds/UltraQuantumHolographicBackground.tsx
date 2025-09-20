import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode,
  className?: string
}

const UltraQuantumHolographicBackground: React.FC<UltraQuantumHolographicBackgroundProps> = ({
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const particlesRef = useRef<Array<{
    x: number,
    y: number,
    vx: number,
    vy: number,
    size: number,
    color: string,
    opacity: number
  }>>([]),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    const resizeCanvas = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
    },

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

    // Initialize particles
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      color: ['#00ffff#8b5cf6', '#ec4899#10b981', '#3b82f6'][Math.floor(Math.random() * 5)],
      opacity: Math.random() * 0.5 + 0.2
    })),

    particlesRef.current = particles,

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

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
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity,
        ctx.fill(),

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x,
            const dy = particle.y - otherParticle.y,
            const distance = Math.sqrt(dx * dx + dy * dy),

            if (distance < 100) {
              ctx.beginPath(),
              ctx.moveTo(particle.x, particle.y),
              ctx.lineTo(otherParticle.x, otherParticle.y),
              ctx.strokeStyle = particle.color,
              ctx.globalAlpha = (100 - distance) / 100 * 0.1,
              ctx.lineWidth = 0.5,
              ctx.stroke(),
            }
          }
        }),
      }),

      // Draw quantum grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      ctx.globalAlpha = 0.3,

      const gridSize = 50,
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, canvas.height),
        ctx.stroke(),
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(canvas.width, y),
        ctx.stroke(),
      }

      // Draw holographic matrix
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.08)',
      ctx.lineWidth = 0.3,
      ctx.globalAlpha = 0.2,

      const matrixSize = 100,
      for (let x = 0, x < canvas.width, x += matrixSize) {
        for (let y = 0, y < canvas.height, y += matrixSize) {
          if (Math.random() > 0.7) {
            ctx.beginPath(),
            ctx.moveTo(x, y),
            ctx.lineTo(x + matrixSize, y + matrixSize),
            ctx.stroke(),
          }
        }
      }

      // Draw neural network
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.06)',
      ctx.lineWidth = 0.4,
      ctx.globalAlpha = 0.15,

      const nodes = 20,
      const nodePositions = Array.from({ length: nodes }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      })),

      nodePositions.forEach((node, index) => {
        nodePositions.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex && Math.random() > 0.8) {
            ctx.beginPath(),
            ctx.moveTo(node.x, node.y),
            ctx.lineTo(otherNode.x, otherNode.y),
            ctx.stroke(),
          }
        }),
      }),

      requestAnimationFrame(animate),
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas),
    },
  }, []),

const UltraQuantumHolographicBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraQuantumHolographicBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraQuantumHolographicBackground,
