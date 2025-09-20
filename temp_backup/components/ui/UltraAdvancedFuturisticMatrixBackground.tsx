import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',

interface UltraAdvancedFuturisticMatrixBackgroundProps {
  children: React.ReactNode,
  className?: string,
  intensity?: 'low' | 'medium' | 'high',
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural'
}

const UltraAdvancedFuturisticMatrixBackground: React.FC<UltraAdvancedFuturisticMatrixBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const animationRef = useRef<number | undefined>(undefined),

  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.8)',
      particles: ['#00ffff#ff00ff', '#ffff00#00ff00', '#ff0080']
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080#00ffff', '#ffff00#ff4000', '#8000ff']
    },
    holographic: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff#ff00ff', '#ffff00#00ff80', '#ff8000']
    },
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80#ff0080', '#ffff00#00ffff', '#ff8000']
    }
  },

  const intensitySettings = {
    low: { particleCount: 50, speed: 0.5, size: 2 },
    medium: { particleCount: 100, speed: 1, size: 3 },
    high: { particleCount: 200, speed: 1.5, size: 4 }
  },

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

    const colors = colorSchemes[colorScheme],
    const settings = intensitySettings[intensity],

    // Matrix rain effect
    const matrixRain = () => {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      const fontSize = 14,
      const columns = canvas.width / fontSize,
      const drops: number[] = [],

      for (let i = 0, i < columns, i++) {
        drops[i] = 1
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)',
        ctx.fillRect(0, 0, canvas.width, canvas.height),

        ctx.fillStyle = colors.primary,
        ctx.font = `${fontSize}px monospace`,

        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)],
          ctx.fillText(text, i * fontSize, drops[i] * fontSize),

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0,
          }
          drops[i]++,
        }
      },

      const interval = setInterval(draw, 50),
      return () => clearInterval(interval),
    },

    // Particle system
    class Particle {
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number,

      constructor() {
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        this.vx = (Math.random() - 0.5) * settings.speed,
        this.vy = (Math.random() - 0.5) * settings.speed,
        this.size = Math.random() * settings.size + 1,
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)],
        this.life = Math.random() * 100,
        this.maxLife = 100
      }

      update() {
        this.x += this.vx,
        this.y += this.vy,
        this.life--,

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1,
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1,
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife,
          ctx.globalAlpha = alpha,
          ctx.fillStyle = this.color,
          ctx.beginPath(),
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
          ctx.fill(),
        }
      }
    }

    const particles: Particle[] = [],
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.fillStyle = colors.background,
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update(),
        particle.draw(),

        if (particle.life <= 0) {
          particles[index] = new Particle(),
        }
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = colors.secondary,
      ctx.lineWidth = 0.5,
      ctx.globalAlpha = 0.3,

      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x,
          const dy = particles[i].y - particles[j].y,
          const distance = Math.sqrt(dx * dx + dy * dy),

          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke(),
          }
        }
      }

      // Draw quantum entanglement effect
      ctx.strokeStyle = colors.accent,
      ctx.lineWidth = 1,
      ctx.globalAlpha = 0.6,

      for (let i = 0, i < particles.length, i += 2) {
        if (particles[i] && particles[i + 1]) {
          ctx.beginPath(),
          ctx.moveTo(particles[i].x, particles[i].y),
          ctx.lineTo(particles[i + 1].x, particles[i + 1].y),
          ctx.stroke(),
        }
      }

      animationRef.current = requestAnimationFrame(animate),
    },

    animate(),

    // Start matrix rain
    const stopMatrix = matrixRain(),

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current),
      }
      stopMatrix(),
      window.removeEventListener('resize', resizeCanvas),
    },
  }, [intensity, colorScheme]),

const UltraAdvancedFuturisticMatrixBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedFuturisticMatrixBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraAdvancedFuturisticMatrixBackground,
