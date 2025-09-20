import React, { useState, useEffect } from 'react',
import SEO from '../components/SEO',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database, Cloud, Lock,
  ArrowRight, Check, Star, TrendingUp, Users, Zap, Infinity, Sparkles,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react',

// Import our new revolutionary services
// import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services',
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services',

const Revolutionary20402041PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedPlan, setSelectedPlan] = useState('professional'),
  const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    setIsVisible(true),
  }, []),

  // Combine all services
  const allServices = [...revolutionary2041AdvancedServices],

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: <Atom className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Business Intelligence', name: 'Business Intelligence', icon: <Target className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Neural Technology', name: 'Neural Technology', icon: <Brain className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Financial Technology', name: 'Financial Technology', icon: <TrendingUp className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Transportation AI', name: 'Transportation AI', icon: <Rocket className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'Materials Science', name: 'Materials Science', icon: <Atom className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Psychology', name: 'AI & Psychology', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500' }
  ],

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory),

  // Get pricing for selected plan
  const getPricing = (service: any) => {
    if (!service.pricing) return 'Contact for pricing',
    
    if (selectedPlan === 'starter') return service.pricing.starter || 'Contact for pricing',
    if (selectedPlan === 'professional') return service.pricing.professional || 'Contact for pricing',
    if (selectedPlan === 'enterprise') return service.pricing.enterprise || 'Contact for pricing',
    return service.pricing.custom || 'Contact for pricing'
  },

  // Get plan features
  const getPlanFeatures = (plan: string) => {
    const features = {
      starter: ['Core functionalityBasic support', 'Standard featuresCommunity access'],
      professional: ['Advanced featuresPriority support', 'Custom integrationsAnalytics dashboard'],
      enterprise: ['Full feature set24/7 dedicated support', 'Custom developmentWhite-label options'"
    },
    return features[plan as keyof typeof features] || [],
  },

const revolutionary-2040-2041-pricing-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>revolutionary-2040-2041-pricing-showcase | Zion Tech Group</title>
        <meta name="description" content="revolutionary-2040-2041-pricing-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">revolutionary-2040-2041-pricing-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default revolutionary-2040-2041-pricing-showcase,
