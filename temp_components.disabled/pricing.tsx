import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Check, Star, Users, TrendingUp, DollarSign, Clock, 
  Shield, Zap, Rocket, Brain, Atom, Globe, Target,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react',
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029',

// Import all service data
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
import { innovativeAIServices2029 } from '../data/2029-innovative-ai-services',
import { quantumSpaceInnovations2029 } from '../data/2029-quantum-space-innovations',
import { enterpriseITInnovations2029 } from '../data/2029-enterprise-it-innovations',
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas',

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('All'),

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices2029,
    ...quantumSpaceInnovations2029,
    ...enterpriseITInnovations2029,
    ...innovativeMicroSaas2029
  ],

  // Get unique services by ID
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  ),

  // Get all categories
  const categories = ['All', ...Array.from(new Set(uniqueServices.map(s => 
    Array.isArray(s.category) ? s.category[0] : s.category
  )))],

  // Price ranges
  const priceRanges = [
    { id: 'All', name: 'All Prices', range: 'All' },
    { id: 'Under $1K', name: 'Under $1K/month', range: 'Under $1K' },
    { id: '$1K - $5K', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: '$5K - $20K', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: '$20K+', name: '$20K+/month', range: '$20K+' }
  ],

  // Filter services
  const filteredServices = uniqueServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || 
                           (Array.isArray(service.category) ? 
                             service.category.includes(selectedCategory) : 
                             service.category === selectedCategory),
    
    const price = parseFloat(service.price.replace(/[^0-9.]/g, '')),
    const matchesPrice = selectedPriceRange === 'All' ||
                        (selectedPriceRange === 'Under $1K' && price < 1000) ||
                        (selectedPriceRange === '$1K - $5K' && price >= 1000 && price < 5000) ||
                        (selectedPriceRange === '$5K - $20K' && price >= 5000 && price < 20000) ||
                        (selectedPriceRange === '$20K+' && price >= 20000),
    
    return matchesCategory && matchesPrice,
  }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Group services by category for better organization
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const category = Array.isArray(service.category) ? service.category[0] : service.category,
    if (!acc[category]) {
      acc[category] = [],
    }
    acc[category].push(service),
    return acc,
  }, {} as Record<string, typeof filteredServices>),

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all our services offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ],

  const categories = [
    'AllContent & Marketing',
    'Development & DevOpsSales & CRM',
    'Legal & ComplianceHuman Resources',
    'Analytics & DataFinance & Accounting',
    'Project ManagementCustomer Experience',
    'Security & Compliance'
  ],

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory),

  const yearlyDiscount = 0.2, // 20% discount for yearly billing

const pricing: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">pricing</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default pricing,
