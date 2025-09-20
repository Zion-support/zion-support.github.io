import React, { useState, useEffect } from 'react',
import SEO from '../components/SEO',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, Globe, Lock, Cloud, Database,
  DollarSign, Users, Crown, Sparkles
} from 'lucide-react',

// Import all our revolutionary services
import { advancedAIAutonomousEcosystemServices2025 } from '../data/2025-advanced-ai-autonomous-ecosystem-services',
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations',
import { revolutionaryMicroSaasInnovations2025 } from '../data/2025-revolutionary-micro-saas-innovations',
import { emergingTechnologyBreakthroughs2025 } from '../data/2025-emerging-technology-breakthroughs',
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions',

// Combine all services
const allRevolutionaryServices = [
  ...advancedAIAutonomousEcosystemServices2025,
  ...cuttingEdgeITInfrastructureInnovations2025,
  ...revolutionaryMicroSaasInnovations2025,
  ...emergingTechnologyBreakthroughs2025,
  ...specializedEnterpriseSolutions2025
],

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Basic service accessStandard support',
      'Core featuresCommunity forum access',
      'Basic analyticsEmail support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    features: [
      'All Starter featuresAdvanced features',
      'Priority supportTeam collaboration',
      'Advanced analyticsPhone & email support',
      'Custom integrationsTraining sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    icon: <Crown className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    features: [
      'All Professional featuresCustom development',
      'Dedicated support managerSLA guarantees',
      'Custom integrationsOn-site training',
      'White-label optionsCustom AI model training',
      '24/7 priority support'
    ],
    popular: false
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for unique requirements',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Everything in EnterpriseCustom architecture',
      'Dedicated development teamCustom AI models',
      'Exclusive featuresSource code access',
      'Custom deploymentStrategic partnership'
    ],
    popular: false
  }
],

const ServicePricingCard = ({ service, tier }: { service: any, tier: string }) => {
  const getPricing = (tier: string) => {
    switch (tier) {
      case 'Starter':
        return service.pricing.starter,
      case 'Professional':
        return service.pricing.professional || service.pricing.starter,
      case 'Enterprise':
        return service.pricing.enterprise || service.pricing.professional || service.pricing.starter,
      case 'Custom':
        return service.pricing.custom || 'Contact for pricing',
      default:
        return service.pricing.starter
    }
  },

  const getFeatures = (tier: string) => {
    const baseFeatures = service.features.slice(0, 4),
    const advancedFeatures = service.features.slice(4, 8),
    const enterpriseFeatures = service.features.slice(8, 12),

    switch (tier) {
      case 'Starter':
        return baseFeatures,
      case 'Professional':
        return [...baseFeatures, ...advancedFeatures],
      case 'Enterprise':
        return [...baseFeatures, ...advancedFeatures, ...enterpriseFeatures],
      case 'Custom':
        return service.features,
      default: return baseFeatures
    }
  },

const 2025-revolutionary-services-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-revolutionary-services-pricing | Zion Tech Group</title>
        <meta name="description" content="2025-revolutionary-services-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-revolutionary-services-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default 2025-revolutionary-services-pricing,
