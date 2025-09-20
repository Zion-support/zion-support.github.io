import React, { useState } from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Check, Zap, Shield, Rocket, Brain, Atom, Target, 
  Star, TrendingUp, Users, Award, Globe, Phone, Mail, MapPin,
  ArrowRight, ExternalLink, Clock, DollarSign, Shield as SecurityIcon, Search
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { innovative2025Q4MicroSaasServices } from '../data/innovative-2025-q4-micro-saas-services',
import { innovative2025Q4ITServices } from '../data/innovative-2025-q4-it-services',
import { innovative2025Q4AIServices } from '../data/innovative-2025-q4-ai-services',

const InnovativeServicesShowcase2025Q4: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" /> },
    { id: 'it-services', name: 'IT Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" /> }
  ],

  const allServices = [
    ...innovative2025Q4MicroSaasServices.map(service => ({ ...service, category: 'micro-saas' })),
    ...innovative2025Q4ITServices.map(service => ({ ...service, category: 'it-services' })),
    ...innovative2025Q4AIServices.map(service => ({ ...service, category: 'ai-services' }))
  ],

  // Helper function to get setup time from different service structures
  const getSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime,
    if (service.price?.setupTime) return service.price.setupTime,
    return 'Contact for details'
  },

  // Helper function to get trial days from different service structures
  const getTrialDays = (service: any) => {
    if (service.trialDays) return service.trialDays,
    if (service.price?.trialDays) return service.price.trialDays,
    return null
  },

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch,
  }),

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

const innovative-services-showcase-2025-q4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-services-showcase-2025-q4 | Zion Tech Group</title>
        <meta name="description" content="innovative-services-showcase-2025-q4 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-services-showcase-2025-q4</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},

export default innovative-services-showcase-2025-q4,
