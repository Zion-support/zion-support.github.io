import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu,
  ArrowRight, Check, Star, TrendingUp, Users, Zap,
  Phone, Mail, MapPin, ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react',

// Import our new innovative services
import { innovative2037Services } from '../data/innovative-2037-services',
import { advanced2038Services } from '../data/advanced-2038-services',
import { revolutionary2039Services } from '../data/revolutionary-2039-services',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
},

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
},

export default function ComprehensivePricing2037() {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set()),
  const [selectedCategory, setSelectedCategory] = useState('all'),

  const allServices = [
    ...innovative2037Services,
    ...advanced2038Services,
    ...revolutionary2039Services
  ],

  const categories = [
    { id: 'all', name: 'All Services', color: 'from-gray-500 to-slate-500' },
    { id: 'ai-emotional', name: 'AI & Emotional Intelligence', color: 'from-pink-500 to-purple-600' },
    { id: 'quantum-security', name: 'Quantum Security', color: 'from-indigo-600 to-purple-700' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', color: 'from-green-600 to-teal-700' },
    { id: 'metaverse-business', name: 'Metaverse Business', color: 'from-blue-500 to-cyan-600' },
    { id: 'neural-quantum', name: 'Neural & Quantum', color: 'from-purple-600 to-pink-700' }
  ],

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        switch (selectedCategory) {
          case 'ai-emotional':
            return service.category.includes('AI') && (service.category.includes('Personal Development') || service.category.includes('Consciousness')),
          case 'quantum-security':
            return service.category.includes('Quantum') && (service.category.includes('Security') || service.category.includes('Communications')),
          case 'autonomous-systems':
            return service.category.includes('AI') && (service.category.includes('Operations') || service.category.includes('Strategy')),
          case 'metaverse-business':
            return service.category.includes('Metaverse') || service.category.includes('Digital Reality'),
          case 'neural-quantum':
            return service.category.includes('Neural') || (service.category.includes('Quantum') && service.category.includes('AI')),
          default: return true
        }
      }),

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices),
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId)
    } else {
      newExpanded.add(serviceId),
    }
    setExpandedServices(newExpanded),
  },

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Personal Development':
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6" />,
      case 'Cybersecurity & Quantum':
      case 'Quantum & Communications':
        return <Shield className="w-6 h-6" />,
      case 'AI & Operations':
      case 'AI & Strategy':
        return <Cpu className="w-6 h-6" />,
      case 'Metaverse & Digital Reality':
        return <Globe className="w-6 h-6" />,
      case 'AI & Legal Tech':
        return <Target className="w-6 h-6" />,
      case 'Quantum & Finance':
        return <TrendingUp className="w-6 h-6" />,
      case 'AI & Transportation':
        return <Rocket className="w-6 h-6" />,
      case 'Quantum & IoT':
        return <Atom className="w-6 h-6" />,
      case 'AI & Creative':
      case 'AI & Content':
        return <Brain className="w-6 h-6" />,
      case 'Quantum & Space Tech':
      case 'Quantum & Space':
        return <Rocket className="w-6 h-6" />,
      default:
        return <Target className="w-6 h-6" />
    }
  },

const comprehensive-pricing-2037: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-pricing-2037 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-pricing-2037 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-pricing-2037</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default comprehensive-pricing-2037,
