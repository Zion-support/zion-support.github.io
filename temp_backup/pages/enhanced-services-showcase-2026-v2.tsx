import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Zap, Shield, Globe, Microscope, Atom, Cpu, Database, Lock, Eye, Code, Palette, Cloud, Server, Network, TestTube, Dna, Car, Gamepad2, ShieldCheck } from 'lucide-react',
import { innovative2026MicroSaasV4Services } from '../data/innovative-2026-micro-saas-v4',
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4',
import { ultimate2026Services } from '../data/ultimate-2026-services',
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations',
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services',
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services',
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services',
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services',
import UltraAdvancedFuturisticBackground2026V2 from '../components/ui/UltraAdvancedFuturisticBackground2026V2',
import UltraAdvancedNavigation2026V2 from '../components/layout/UltraAdvancedNavigation2026V2',

export default function EnhancedServicesShowcase2026V2() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  // Combine all services for comprehensive showcase
  const allServices = [
    ...innovative2026MicroSaasV4Services,
    ...emergingTech2026ServicesV4,
    ...ultimate2026Services,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026
  ],

  // Dynamic category counts
  const aiCount = allServices.filter(service => 
    service.category?.includes('AI') || 
    service.category?.includes('Machine Learning') || 
    service.category?.includes('AI Autonomous') || 
    service.category?.includes('AI Consciousness') || 
    service.category?.includes('AI Legal') || 
    service.category?.includes('AI Scientific') || 
    service.category?.includes('AI Creative') || 
    service.category?.includes('AI Healthcare') || 
    service.category?.includes('AI Education') ||
    service.category?.includes('AI & Legal Tech') ||
    service.category?.includes('AI & Content Creation') ||
    service.category?.includes('AI & Healthcare') ||
    service.category?.includes('AI & Research') ||
    service.category?.includes('AI & Environmental Tech') ||
    service.category?.includes('AI & Transportation')
  ).length,

  const quantumCount = allServices.filter(service => 
    service.category?.includes('Quantum') || 
    service.category?.includes('Space') || 
    service.category?.includes('Quantum Space') ||
    service.category?.includes('Quantum & Cybersecurity') ||
    service.category?.includes('Quantum & Fintech') ||
    service.category?.includes('Quantum & Internet Infrastructure') ||
    service.category?.includes('Quantum & AI') ||
    service.category?.includes('Quantum & Blockchain')
  ).length,

  const emergingTechCount = allServices.filter(service => 
    service.category?.includes('Emerging Tech') ||
    service.category?.includes('Emerging Tech & AI') ||
    service.category?.includes('Emerging Tech & Data Storage') ||
    service.category?.includes('Emerging Tech & Biotech') ||
    service.category?.includes('Emerging Tech & Energy') ||
    service.category?.includes('Emerging Tech & Neuroscience') ||
    service.category?.includes('Emerging Tech & Virtual Reality')
  ).length,

  const microSaasCount = allServices.filter(service => 
    service.category?.includes('Micro SaaS')
  ).length,

  const metaverseCount = allServices.filter(service => 
    service.category?.includes('Metaverse') || 
    service.category?.includes('Digital Reality') || 
    service.category?.includes('Consciousness Interface') || 
    service.category?.includes('Holographic')
  ).length,

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length, color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', count: aiCount, color: 'from-blue-600 to-cyan-600' },
    { id: 'quantum', name: 'Quantum & Space Tech', icon: '⚛️', count: quantumCount, color: 'from-indigo-600 to-purple-600' },
    { id: 'emerging', name: 'Emerging Technologies', icon: '🔬', count: emergingTechCount, color: 'from-green-600 to-teal-600' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💼', count: microSaasCount, color: 'from-orange-600 to-red-600' },
    { id: 'metaverse', name: 'Metaverse & VR', icon: '🌌', count: metaverseCount, color: 'from-purple-600 to-blue-600' }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $1,500', range: '$500 - $1,500' },
    { id: 'high', name: '$1,500 - $3,000', range: '$1,500 - $3,000' },
    { id: 'enterprise', name: 'Over $3,000', range: 'Over $3,000' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'newest', name: 'Newest First' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'ai' && (service.category?.includes('AI') || service.category?.includes('Machine Learning'))) ||
        (selectedCategory === 'quantum' && service.category?.includes('Quantum')) ||
        (selectedCategory === 'emerging' && service.category?.includes('Emerging Tech')) ||
        (selectedCategory === 'micro-saas' && service.category?.includes('Micro SaaS')) ||
        (selectedCategory === 'metaverse' && (service.category?.includes('Metaverse') || service.category?.includes('Virtual Reality'))),

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 1500) ||
        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) > 1500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 3000) ||
        (selectedPriceRange === 'enterprise' && parseInt(service.price.replace(/[^0-9]/g, '')) > 3000),

      return matchesSearch && matchesCategory && matchesPrice,
    }),

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))),
        break,
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))),
        break,
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating),
        break,
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()),
        break,
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name)),
    }

    return filtered,
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  const getCategoryIcon = (category: string) => {
    if (category?.includes('AI') || category?.includes('Machine Learning')) return <Brain className="w-5 h-5" />,
    if (category?.includes('Quantum')) return <Atom className="w-5 h-5" />,
    if (category?.includes('Emerging Tech')) return <Microscope className="w-5 h-5" />,
    if (category?.includes('Micro SaaS')) return <Code className="w-5 h-5" />,
    if (category?.includes('Metaverse') || category?.includes('Virtual Reality')) return <Gamepad2 className="w-5 h-5" />,
    if (category?.includes('Cybersecurity')) return <ShieldCheck className="w-5 h-5" />,
    if (category?.includes('Space')) return <Rocket className="w-5 h-5" />,
    if (category?.includes('Biotech')) return <TestTube className="w-5 h-5" />,
    if (category?.includes('Blockchain')) return <Database className="w-5 h-5" />,
    if (category?.includes('Transportation')) return <Car className="w-5 h-5" />,
    return <Zap className="w-5 h-5" />
  },

const enhanced-services-showcase-2026-v2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>enhanced-services-showcase-2026-v2 | Zion Tech Group</title>
        <meta name="description" content="enhanced-services-showcase-2026-v2 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">enhanced-services-showcase-2026-v2</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default enhanced-services-showcase-2026-v2,
