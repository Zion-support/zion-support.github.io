import React, { useState } from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Search, Grid, List, Star, Check, ArrowRight,
  Brain, Atom, Shield, Globe,
  Cloud, Network
} from 'lucide-react',

// Import our new service data
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services',
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations',

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

// Combine all services
const allServices = [
  ...innovative2025Q4NewServices,
  ...emergingTech2025Innovations
],

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative services'
  },
  {
    id: 'ai-business',
    name: 'AI & Business',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'AI-powered business solutions and intelligence'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and threat intelligence'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Cloud optimization and autonomous DevOps'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Space technology, quantum computing, and more'
  },
  {
    id: 'blockchain-iot',
    name: 'Blockchain & IoT',
    icon: <Network className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Blockchain solutions and IoT platforms'
  }
],

export default function ServicesAdvertising2025() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch,
  }),



const services-advertising-2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>services-advertising-2025 | Zion Tech Group</title>
        <meta name="description" content="services-advertising-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">services-advertising-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  )
},


export default RevolutionaryServices2025,
