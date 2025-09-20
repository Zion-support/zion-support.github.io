import React, { useState, useEffect, useRef } from 'react',
import { motion, AnimatePresence } from 'framer-motion',

interface AdvancedFuturisticCardProps {
  children: React.ReactNode,
  className?: string,
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'quantum-holographic' | 'neural-cyberpunk',
  intensity?: 'low' | 'medium' | 'high' | 'extreme',
  interactive?: boolean,
  glow?: boolean,
  floating?: boolean,
  border?: boolean,
  background?: boolean,
  onClick?: () => void
}

const AdvancedFuturisticCard: React.FC<AdvancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum-holographic',
  intensity = 'medium',
  interactive = true,
  glow = true,
  floating = true,
  border = true,
  background = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false),
  const [isFocused, setIsFocused] = useState(false),
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
  const cardRef = useRef<HTMLDivElement>(null),
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const animationRef = useRef<number | undefined>(undefined),

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400'
        },
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-purple-900/20 to-indigo-900/20',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          text: 'text-purple-400'
        },
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20',
          text: 'text-emerald-400'
        },
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-red-900/20 to-orange-900/20',
          border: 'border-red-500/30',
          glow: 'shadow-red-500/20',
          text: 'text-red-400'
        },
      case 'quantum-holographic':
        return {
          bg: 'bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20 shadow-purple-500/20',
          text: 'text-cyan-400'
        },
      case 'neural-cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-emerald-900/20 via-red-900/20 to-teal-900/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20 shadow-red-500/20',
          text: 'text-emerald-400'
        },
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-900/20 to-slate-900/20',
          border: 'border-gray-500/30',
          glow: 'shadow-gray-500/20',
          text: 'text-gray-400'
        },
    }
  },

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'extreme': return 2.0,
      case 'high': return 1.5,
      case 'medium': return 1.0,
      case 'low': return 0.5,
      default: return 1.0
    }
  },

  const styles = getVariantStyles(),
  const intensityMultiplier = getIntensityMultiplier(),

  // Canvas animation for quantum effects
  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas || !background) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect(),
        canvas.width = rect.width,
        canvas.height = rect.height,
      }
    },

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

    let time = 0,
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      life: number,
      maxLife: number,
      color: string
    }> = [],

    // Create particles
    const particleCount = Math.floor(20 * intensityMultiplier),
    for (let i = 0, i < particleCount, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        life: Math.random() * 100,
        maxLife: 100,
        color: styles.text
      }),
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Update life
        particle.life--,
        if (particle.life <= 0) {
          particle.life = particle.maxLife,
          particle.x = Math.random() * canvas.width,
          particle.y = Math.random() * canvas.height,
        }

        // Render particle
        const alpha = particle.life / particle.maxLife,
        ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'),
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
      }),

      time++,
      animationRef.current = requestAnimationFrame(animate),
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current),
      }
    },
  }, [background, intensityMultiplier, styles.text]),

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return,
    
    const rect = cardRef.current?.getBoundingClientRect(),
    if (rect) {
      const x = e.clientX - rect.left,
      const y = e.clientY - rect.top,
      setMousePosition({ x, y }),
    }
  },

  const handleMouseEnter = () => {
    if (!interactive) return,
    setIsHovered(true),
  },

  const handleMouseLeave = () => {
    if (!interactive) return,
    setIsHovered(false),
  },

  const handleFocus = () => {
    if (!interactive) return,
    setIsFocused(true),
  },

  const handleBlur = () => {
    if (!interactive) return,
    setIsFocused(false),
  },

  const getTransform = () => {
    if (!interactive) return {},
    
    const isActive = isHovered || isFocused,
    const intensity = isActive ? intensityMultiplier : 1,
    
    if (floating) {
      return {
        y: isActive ? -8 * intensity : 0,
        rotateX: isActive ? (mousePosition.y - 150) * 0.01 * intensity : 0,
        rotateY: isActive ? (mousePosition.x - 150) * 0.01 * intensity : 0,
        scale: isActive ? 1.02 * intensity : 1
      },
    }
    
    return {
      scale: isActive ? 1.02 * intensity : 1
    },
  },

  const getGlowEffect = () => {
    if (!glow) return {},
    
    const isActive = isHovered || isFocused,
    const intensity = isActive ? intensityMultiplier : 0.5,
    
    return {
      boxShadow: isActive 
        ? `0 0 30px ${intensity * 2}px ${styles.glow.replace('shadow-', '').replace('/20', '')}`
        : `0 0 20px ${intensity}px ${styles.glow.replace('shadow-', '').replace('/20', '')}`
    },
  },

const AdvancedFuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedFuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default AdvancedFuturisticCard,
