import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode,
  className?: string
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ 
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
      alpha: number,
      type: 'quantum' | 'holographic' | 'neon'
    }> = [],

    // Initialize particles
    const initParticles = () => {
      particles = [],
      for (let i = 0, i < 150, i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          alpha: Math.random() * 0.8 + 0.2,
          type: ['quantumholographic', 'neon'][Math.floor(Math.random() * 3)] as 'quantum' | 'holographic' | 'neon'
        }),
      }
    },

    // Draw quantum particles
    const drawQuantumParticle = (particle: typeof particles[0]) => {
      ctx.save(),
      ctx.globalAlpha = particle.alpha,
      ctx.fillStyle = particle.color,
      
      // Create quantum wave effect
      const time = Date.now() * 0.001,
      const wave = Math.sin(time * 3 + particle.x * 0.01) * 0.5 + 0.5,
      
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, particle.size * wave, 0, Math.PI * 2),
      ctx.fill(),
      
      // Add quantum entanglement lines
      if (Math.random() < 0.1) {
        ctx.strokeStyle = particle.color,
        ctx.lineWidth = 0.5,
        ctx.beginPath(),
        ctx.moveTo(particle.x, particle.y),
        ctx.lineTo(
          particle.x + Math.cos(time) * 50,
          particle.y + Math.sin(time) * 50
        ),
        ctx.stroke(),
      }
      
      ctx.restore(),
    },

    // Draw holographic particles
    const drawHolographicParticle = (particle: typeof particles[0]) => {
      ctx.save(),
      ctx.globalAlpha = particle.alpha * 0.7,
      
      const time = Date.now() * 0.002,
      const hologram = Math.sin(time + particle.x * 0.02) * 0.5 + 0.5,
      
      // Create holographic grid effect
      ctx.strokeStyle = particle.color,
      ctx.lineWidth = 0.3,
      
      const gridSize = 20,
      const offsetX = (particle.x % gridSize) - gridSize / 2,
      const offsetY = (particle.y % gridSize) - gridSize / 2,
      
      ctx.beginPath(),
      ctx.moveTo(particle.x - offsetX, particle.y - offsetY),
      ctx.lineTo(particle.x + offsetX, particle.y + offsetY),
      ctx.stroke(),
      
      // Add holographic glow
      ctx.shadowColor = particle.color,
      ctx.shadowBlur = 10,
      ctx.fillStyle = particle.color,
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, particle.size * hologram, 0, Math.PI * 2),
      ctx.fill(),
      
      ctx.restore(),
    },

    // Draw neon particles
    const drawNeonParticle = (particle: typeof particles[0]) => {
      ctx.save(),
      ctx.globalAlpha = particle.alpha,
      
      const time = Date.now() * 0.001,
      const pulse = Math.sin(time * 5 + particle.x * 0.01) * 0.5 + 0.5,
      
      // Create neon glow effect
      ctx.shadowColor = particle.color,
      ctx.shadowBlur = 20 * pulse,
      
      // Draw neon core
      ctx.fillStyle = particle.color,
      ctx.beginPath(),
      ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2),
      ctx.fill(),
      
      // Add neon trail
      ctx.strokeStyle = particle.color,
      ctx.lineWidth = 2 * pulse,
      ctx.lineCap = 'round',
      ctx.beginPath(),
      ctx.moveTo(particle.x, particle.y),
      ctx.lineTo(
        particle.x - particle.vx * 10,
        particle.y - particle.vy * 10
      ),
      ctx.stroke(),
      
      ctx.restore(),
    },

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,
        
        // Draw based on type
        switch (particle.type) {
          case 'quantum':
            drawQuantumParticle(particle),
            break,
          case 'holographic':
            drawHolographicParticle(particle),
            break,
          case 'neon':
            drawNeonParticle(particle),
            break,
        }
        
        // Occasionally change particle type
        if (Math.random() < 0.001) {
          particle.type = ['quantumholographic', 'neon'][Math.floor(Math.random() * 3)] as 'quantum' | 'holographic' | 'neon',
        }
      }),
      
      animationFrameId = requestAnimationFrame(animate),
    },

    initParticles(),
    animate(),

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
      initParticles(),
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId),
    },
  }, []),

const UltraFuturisticBackground2030: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2030</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticBackground2030,
