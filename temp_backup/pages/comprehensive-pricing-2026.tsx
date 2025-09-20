import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { CheckCircle, Star, Phone, Mail, MapPin, Rocket, Shield, Zap, Brain, Cpu } from 'lucide-react',
import Button from '../components/ui/Button',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation',
import { innovative2026Services } from '../data/innovative-2026-services',
import { revolutionaryAIServices2026 } from '../data/revolutionary-ai-services-2026',
import { enterpriseITSolutions2026 } from '../data/enterprise-it-solutions-2026',
import { cybersecuritySolutions2026 } from '../data/cybersecurity-solutions-2026',

export default function ComprehensivePricing2026Page() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026Services,
    ...revolutionaryAIServices2026,
    ...enterpriseITSolutions2026,
    ...cybersecuritySolutions2026
  ],

  // Group services by price range
  const priceRanges = [
    {
      range: 'Entry Level',
      services: all2026Services.filter(s => parseInt(s.price.replace('$', '').replace(, '')) < 2000),
      color: 'from-green-500 to-emerald-600',
      description: 'Perfect for startups and small businesses'
    },
    {
      range: 'Professional',
      services: all2026Services.filter(s => {
        const price = parseInt(s.price.replace('$', '').replace(, '')),
        return price >= 2000 && price < 4000,
      }),
      color: 'from-blue-500 to-indigo-600',
      description: 'Ideal for growing companies and enterprises'
    },
    {
      range: 'Enterprise',
      services: all2026Services.filter(s => parseInt(s.price.replace('$', '').replace(, '')) >= 4000),
      color: 'from-purple-500 to-pink-600',
      description: 'For large enterprises and government agencies'
    }
  ],

  // Service categories for comparison
  const serviceCategories = [
    {
      title: 'AI & Consciousness Services',
      services: innovative2026Services.filter(s => s.category.includes('AI')),
      icon: Brain,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Quantum & Neural Interface',
      services: innovative2026Services.filter(s => s.category.includes('Quantum')),
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Revolutionary AI Services',
      services: revolutionaryAIServices2026,
      icon: Zap,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Enterprise IT Solutions',
      services: enterpriseITSolutions2026,
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cybersecurity Solutions',
      services: cybersecuritySolutions2026,
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ],

const comprehensive-pricing-2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-pricing-2026 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-pricing-2026 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-pricing-2026</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default comprehensive-pricing-2026,
