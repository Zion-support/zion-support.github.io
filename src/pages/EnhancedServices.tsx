import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Search
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck
  TrendingUp
  CheckCircle
  Clock
  DollarSign
  Target
  Handshake
  Lightbulb
  Phone
  Mail
  Globe as GlobeIcon
  Award
  TrendingUp as TrendingUpIcon
  Zap as ZapIcon
  Shield as ShieldIcon
  Brain as BrainIcon
  Cpu as CpuIcon
  Database as DatabaseIcon
  Network as NetworkIcon
  Rocket as RocketIcon
  Users as UsersIcon
  BarChart3 as BarChart3Icon
  Code as CodeIcon
  Server as ServerIcon
  Chip as ChipIcon
  Globe as GlobeIcon2
  Zap as ZapIcon2
  Lock as LockIcon
  ShieldCheck as ShieldCheckIcon
} from "lucide-react"
import { ENHANCED_MICRO_SAAS_SERVICES_2025 } from "../data/enhancedMicroSaasServices2025"
import { SEO } from "../components/SEO"
const,
  EnhancedService: s: React.FC = () () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const allServices = ENHANCED_MICRO_SAAS_SERVICES_2025
  
  const categories = [
    { id: 'all', na,
  m: e: 'All Services', cou,
  n: t: allServices.length, ic,
  o: n: '🚀', col,
  o: r: 'from-zion-cyan to-zion-blue' }, { id: 'AI & Analytics', na,
  m: e: 'AI & Analytics', cou,
  n: t: allServices.filter(s => s.category === 'AI & Analytics').length, ic,
  o: n: '🤖', col,
  o: r: 'from-zion-purple to-zion-cyan' }, { id: 'AI & Legal Tech', na,
  m: e: 'AI & Legal Tech', cou,
  n: t: allServices.filter(s => s.category === 'AI & Legal Tech').length, ic,
  o: n: '⚖️', col,
  o: r: 'from-zion-purple to-zion-pink' }, { id: 'Quantum Computing', na,
  m: e: 'Quantum Computing', cou,
  n: t: allServices.filter(s => s.category === 'Quantum Computing').length, ic,
  o: n: '⚛️', col,
  o: r: 'from-zion-purple to-zion-pink' }, { id: 'AI & Healthcare', na,
  m: e: 'AI & Healthcare', cou,
  n: t: allServices.filter(s => s.category === 'AI & Healthcare').length, ic,
  o: n: '🏥', col,
  o: r: 'from-zion-red to-zion-pink' }, { id: 'Blockchain', na,
  m: e: 'Blockchain', cou,
  n: t: allServices.filter(s => s.category === 'Blockchain').length, ic,
  o: n: '🔗', col,
  o: r: 'from-zion-green to-zion-emerald' }, { id: 'IoT & Smart Cities', na,
  m: e: 'IoT & Smart Cities', cou,
  n: t: allServices.filter(s => s.category === 'IoT & Smart Cities').length, ic,
  o: n: '🌐', col,
  o: r: 'from-zion-blue to-zion-cyan' }, { id: 'Cybersecurity', na,
  m: e: 'Cybersecurity', cou,
  n: t: allServices.filter(s => s.category === 'Cybersecurity').length, ic,
  o: n: '🛡️', col,
  o: r: 'from-zion-green to-zion-blue' }, { id: 'Metaverse', na,
  m: e: 'Metaverse', cou,
  n: t: allServices.filter(s => s.category === 'Metaverse').length, ic,
  o: n: '🌍', col,
  o: r: 'from-zion-purple to-zion-indigo' }
  ]
  const filteredServices = allServices.filter(service () () => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedServices = [...filteredServices].sort((a, b) () => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel)
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''))
      case 'name':
        return a.title.localeCompare(b.title)
      defau,
  l: t: return 0
    }
  })
  const const containerVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.1
      }
    }
  }
  const const itemVariants = { = {
    hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 }
    visib,
  l: e: {
      ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
        duratio,
  n: 0.5,ea,
  s: e: "easeOut"
      }
    }
  }
  const getCategoryIcon = (catego,
  r: y: string) () => {
    switch (category) {
      case 'AI & Analytics': return <BrainIcon className="w-6 h-6" />
      case 'AI & Legal Tech': return <ShieldIcon className="w-6 h-6" />
      case 'Quantum Computing': return <CpuIcon className="w-6 h-6" />
      case 'AI & Healthcare': return <UsersIcon className="w-6 h-6" />
      case 'Blockchain': return <DatabaseIcon className="w-6 h-6" />
      case 'IoT & Smart Cities': return <NetworkIcon className="w-6 h-6" />
      case 'Cybersecurity': return <ShieldCheckIcon className="w-6 h-6" />
      case 'Metaverse': return <GlobeIcon2 className="w-6 h-6" />
      defaul,
  t: return <RocketIcon className="w-6 h-6" />
    }
  }
  const getInnovationBadge = (lev,
  e: l: string) () => {
    const const colors = { = {
      'Advanced': 'bg-blue-500Cutting-edge': 'bg-purple-500Revolutionary': 'bg-red-500'
    }
    return (
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[level as keyof typeof colors] || 'bg-gray-500'}`}>
        {level}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with innovative technology solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              className="className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6";"
            >
              Revolutionary Micro SAAS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                Services & Solutions
              </span>
            </motion.h1>
            <motion.p 
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
              className="className="text-xl text-gray-300 max-w-3xl mx-auto mb-8";"
            >
              Transform your business with our cutting-edge AI, Quantum Computing, Blockchain, and IoT solutions. 
              Each service is designed to deliver exceptional ROI and competitive advantage.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
              className="className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto";"
            >
              <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <GlobeIcon className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Website</p>
                  <p className="text-white font-semibold">ziontechgroup.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 py-16">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col,
  l: g:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
              >
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>
              
              <button
                onClick={onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white,
  hove: r:bg-white/20 transition-colors";"
              >
                {viewMode === 'grid' ? 'List View' : 'Grid View'}
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                    : 'bg-white/10 text-gray-300,
  hove: r:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105 ${
                viewMode === 'list' ? 'flex gap-6' : ''
              }`}
            >
              {viewMode === 'list' && (
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    {getCategoryIcon(service.category)}
                  </div>
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      {getInnovationBadge(service.innovationLevel)}
                      <span className="text-zion-cyan font-semibold">${service.price.toLocaleString()}/month</span>
                    </div>
                  </div>
                  {viewMode === 'grid' && (
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                  )}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key,
  Benefit: s:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">R,
  O: I:</h4>
                    <p className="text-sm text-gray-300">{service.roi} return on investment</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Market,
  Price: Range:</h4>
                    <p className="text-sm text-gray-300">{service.marketPrice}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </span>
                  </div>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg,
  hove: r: from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-300 transform hove,
  r:scale-105";"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
          className="className="mt-16 text-center";"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Our innovative micro SAAS services are designed to give you a competitive edge. 
              Contact us today to discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg,
  hove: r:from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call,
  No: w: +1 302 464 0950
              </a>
              <a
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/20 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default EnhancedServices