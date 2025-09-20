import React, { useState, useRef, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { ExternalLink, Star, Users, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react',

interface QuantumHolographicCardProps {
  service: {
    id: string,
    name: string,
    tagline: string,
    price: string,
    period: string,
    description: string,
    features: string[],
    popular: boolean,
    icon: string,
    color: string,
    textColor: string,
    link: string,
    category: string,
    variant: string,
    rating: number,
    reviews: number,
    customers: number,
    growthRate: string,
    marketSize: string,
    roi: string,
    contactInfo: {
      mobile: string,
      email: string,
      address: string,
      website: string
    },
  },
  onClick?: () => void,
  className?: string,
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({ 
  service, 
  onClick, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false),
  const [isExpanded, setIsExpanded] = useState(false),
  const cardRef = useRef<HTMLDivElement>(null),
  const [particleCount, setParticleCount] = useState(0),

  useEffect(() => {
    if (isHovered) {
      setParticleCount(20),
    } else {
      setParticleCount(0),
    }
  }, [isHovered]),

  const getVariantStyles = (variant: string) => {
    const baseStyles = "relative overflow-hidden rounded-2xl border border-transparent",
    
    switch (variant) {
      case 'quantum-entanglement-advanced':
        return `${baseStyles} bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(0,255,255,0.3)]`,
      case 'quantum-space':
        return `${baseStyles} bg-gradient-to-br from-blue-900/20 via-cyan-900/30 to-indigo-900/20 shadow-[0_0_50px_rgba(59,130,246,0.3)]`,
      case 'neural-quantum-advanced':
        return `${baseStyles} bg-gradient-to-br from-green-900/20 via-emerald-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(16,185,129,0.3)]`,
      case 'holographic-matrix-advanced':
        return `${baseStyles} bg-gradient-to-br from-purple-900/20 via-pink-900/30 to-violet-900/20 shadow-[0_0_50px_rgba(139,92,246,0.3)]`,
      case 'quantum-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-emerald-900/20 via-teal-900/30 to-cyan-900/20 shadow-[0_0_50px_rgba(0,255,255,0.3)]`,
      case 'neural-cyberpunk':
        return `${baseStyles} bg-gradient-to-br from-orange-900/20 via-red-900/30 to-pink-900/20 shadow-[0_0_50px_rgba(236,73,153,0.3)]`,
      case 'quantum-neural-advanced':
        return `${baseStyles} bg-gradient-to-br from-fuchsia-900/20 via-pink-900/30 to-purple-900/20 shadow-[0_0_50px_rgba(236,73,153,0.3)]`,
      default:
        return `${baseStyles} bg-gradient-to-br from-gray-900/20 via-slate-900/30 to-gray-900/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]`,
    }
  },

  const getGlowEffect = (variant: string) => {
    switch (variant) {
      case 'quantum-entanglement-advanced':
        return 'shadow-[0_0_80px_rgba(0,255,255,0.6)]',
      case 'quantum-space':
        return 'shadow-[0_0_80px_rgba(59,130,246,0.6)]',
      case 'neural-quantum-advanced':
        return 'shadow-[0_0_80px_rgba(16,185,129,0.6)]',
      case 'holographic-matrix-advanced':
        return 'shadow-[0_0_80px_rgba(139,92,246,0.6)]',
      case 'quantum-cyberpunk':
        return 'shadow-[0_0_80px_rgba(0,255,255,0.6)]',
      case 'neural-cyberpunk':
        return 'shadow-[0_0_80px_rgba(236,73,153,0.6)]',
      case 'quantum-neural-advanced':
        return 'shadow-[0_0_80px_rgba(236,73,153,0.6)]',
      default:
        return 'shadow-[0_0_60px_rgba(139,92,246,0.4)]',
    }
  },

const QuantumHolographicCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumHolographicCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default QuantumHolographicCard,
