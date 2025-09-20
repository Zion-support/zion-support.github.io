import React, { useState } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Shield, Brain, Globe, Cpu, Database, Atom, Bot, Cloud, Network } from 'lucide-react',
import Link from 'next/link',

interface Service {
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
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
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
}

interface Enhanced2026ServicesShowcaseV2Props {
  services: Service[]
}

export default function Enhanced2026ServicesShowcaseV2({ services }: Enhanced2026ServicesShowcaseV2Props) {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  // Filter services based on search and filters
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory),
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) < 1500) ||
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1500),
    
    return matchesSearch && matchesCategory && matchesPrice,
  }),

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name),
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
      case 'rating':
        return b.rating - a.rating,
      case 'popularity':
        return b.customers - a.customers,
      default: return 0
    }
  }),

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(services.map(s => s.category.split(' ')[0])))],
  
  // Get category counts
  const getCategoryCount = (category: string) => {
    if (category === 'all') return services.length,
    return services.filter(s => s.category.includes(category)).length
  },

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai':
        return <Brain className="w-5 h-5" />,
      case 'quantum':
        return <Atom className="w-5 h-5" />,
      case 'blockchain':
        return <Globe className="w-5 h-5" />,
      case 'autonomous':
        return <Bot className="w-5 h-5" />,
      case 'cloud':
        return <Cloud className="w-5 h-5" />,
      case 'network':
        return <Network className="w-5 h-5" />,
      case 'enterprise':
        return <Database className="w-5 h-5" />,
      case 'emerging':
        return <Zap className="w-5 h-5" />,
      default:
        return <Rocket className="w-5 h-5" />
    }
  },

const Enhanced2026ServicesShowcaseV2: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Enhanced2026ServicesShowcaseV2</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default Enhanced2026ServicesShowcaseV2,
