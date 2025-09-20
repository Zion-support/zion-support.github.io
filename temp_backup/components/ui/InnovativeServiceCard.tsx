import React from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Star, TrendingUp, Clock, DollarSign, Users, Zap, Shield, Check, ExternalLink } from 'lucide-react',
import Button from './Button',

interface InnovativeServiceCardProps {
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
    marketPosition: string,
    targetAudience: string,
    trialDays: number,
    setupTime: string,
    category: string,
    realService: boolean,
    technology: string[],
    integrations: string[],
    useCases: string[],
    roi: string,
    competitors: string[],
    marketSize: string,
    growthRate: string,
    variant: string,
    contactInfo: {
      mobile: string,
      email: string,
      address: string,
      website: string
    },
    realImplementation: boolean,
    implementationDetails: string,
    launchDate: string,
    customers: number,
    rating: number,
    reviews: number
  },
  className?: string,
}

const InnovativeServiceCard: React.FC<InnovativeServiceCardProps> = ({ service, className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  },

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  },

  const getGradientClass = (variant: string) => {
    switch (variant) {
      case 'quantum-advanced':
        return 'from-cyan-500 via-blue-500 to-purple-600',
      case 'holographic-matrix':
        return 'from-purple-500 via-pink-500 to-cyan-600',
      case 'neural-quantum':
        return 'from-green-500 via-emerald-500 to-cyan-600',
      case 'cyberpunk-futuristic':
        return 'from-pink-500 via-red-500 to-orange-600',
      case 'quantum-entanglement':
        return 'from-indigo-500 via-purple-500 to-pink-600',
      case 'ai-futuristic':
        return 'from-blue-500 via-cyan-500 to-green-600',
      default:
        return 'from-cyan-500 to-blue-600'
    }
  },

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InnovativeServiceCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  ),
},
export default InnovativeServiceCard,