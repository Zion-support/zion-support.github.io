import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Brain
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu
  Lock
  Heart
  Star
  ArrowRight
  CheckCircle
  TrendingUp
  Code
  Database
  Network
  Smartphone
  BarChart3
  MessageSquare
  FileText
  ShoppingCart
  Headphones
  Mail
  Search
  HelpCircle
  ShieldCheck
  Globe2
  Leaf
  Sparkles
  Target
  DollarSign
  Clock
  Award
  Phone
  Mail as MailIcon
  MapPin
  Infinity
  Bot
  CircuitBoard
  Satellite
  Atom
  Blockchain
  CpuIcon
  DatabaseIcon
  BrainCircuit
  RocketIcon
  ShieldIcon
  ZapIcon
  UsersIcon
  GlobeIcon
  LockIcon
  HeartIcon
  StarIcon
  ArrowRightIcon
  CheckCircleIcon
  TrendingUpIcon
  CodeIcon
  DatabaseIcon as DBIcon
  NetworkIcon
  SmartphoneIcon
  BarChart3Icon
  MessageSquareIcon
  FileTextIcon
  ShoppingCartIcon
  HeadphonesIcon
  MailIcon as MailIcon2
  SearchIcon
  HelpCircleIcon
  ShieldCheckIcon
  Globe2Icon
  LeafIcon
  SparklesIcon
  TargetIcon
  DollarSignIcon
  ClockIcon
  AwardIcon
  PhoneIcon
  MapPinIcon
  InfinityIcon
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function ComprehensiveServicesAdvertising() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  // Get unique categories from services
  const categories = [
    { id: 'all', na,
  m: e: 'All Services', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, ic,
  o: n: '🚀', col,
  o: r: 'from-cyan-500 to-blue-500' }, { id: 'AI & Business Intelligence', na,
  m: e: 'AI & Business Intelligence', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, ic,
  o: n: '🤖', col,
  o: r: 'from-purple-500 to-pink-500' }, { id: 'Cybersecurity', na,
  m: e: 'Cybersecurity', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, ic,
  o: n: '🛡️', col,
  o: r: 'from-red-500 to-orange-500' }, { id: 'Cloud & DevOps', na,
  m: e: 'Cloud & DevOps', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, ic,
  o: n: '☁️', col,
  o: r: 'from-blue-500 to-cyan-500' }, { id: 'AI & Marketing', na,
  m: e: 'AI & Marketing', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, ic,
  o: n: '📈', col,
  o: r: 'from-green-500 to-emerald-500' }, { id: 'Quantum Computing', na,
  m: e: 'Quantum Computing', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, ic,
  o: n: '⚛️', col,
  o: r: 'from-indigo-500 to-purple-500' }, { id: 'IoT & Edge Computing', na,
  m: e: 'IoT & Edge Computing', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, ic,
  o: n: '🌐', col,
  o: r: 'from-teal-500 to-cyan-500' }, { id: 'Blockchain & Web3', na,
  m: e: 'Blockchain & Web3', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, ic,
  o: n: '🔗', col,
  o: r: 'from-yellow-500 to-orange-500' }, { id: 'AI & Healthcare', na,
  m: e: 'AI & Healthcare', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, ic,
  o: n: '🏥', col,
  o: r: 'from-pink-500 to-red-500' }, { id: 'FinTech', na,
  m: e: 'FinTech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, ic,
  o: n: '💰', col,
  o: r: 'from-emerald-500 to-green-500' }, { id: 'Digital Twin', na,
  m: e: 'Digital Twin', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, ic,
  o: n: '🔄', col,
  o: r: 'from-blue-500 to-indigo-500' }, { id: 'Space Technology', na,
  m: e: 'Space Technology', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, ic,
  o: n: '🚀', col,
  o: r: 'from-purple-500 to-pink-500' }, { id: 'Sustainable Technology', na,
  m: e: 'Sustainable Technology', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, ic,
  o: n: '🌱', col,
  o: r: 'from-green-500 to-teal-500' }, { id: 'AI & Content', na,
  m: e: 'AI & Content', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, ic,
  o: n: '✍️', col,
  o: r: 'from-orange-500 to-red-500' }, { id: 'AI & Customer Support', na,
  m: e: 'AI & Customer Support', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, ic,
  o: n: '💬', col,
  o: r: 'from-blue-500 to-purple-500' }, { id: 'AI & HR', na,
  m: e: 'AI & HR', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, ic,
  o: n: '👥', col,
  o: r: 'from-indigo-500 to-blue-500' }, { id: 'AI & Legal Tech', na,
  m: e: 'AI & Legal Tech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, ic,
  o: n: '⚖️', col,
  o: r: 'from-blue-500 to-indigo-500' }, { id: 'AI & Research', na,
  m: e: 'AI & Research', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, ic,
  o: n: '🔬', col,
  o: r: 'from-purple-500 to-violet-500' }, { id: 'AI & Green Tech', na,
  m: e: 'AI & Green Tech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, ic,
  o: n: '🌿', col,
  o: r: 'from-green-500 to-emerald-500' }, { id: 'AI & Metaverse', na,
  m: e: 'AI & Metaverse', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, ic,
  o: n: '🌍', col,
  o: r: 'from-purple-500 to-indigo-500' }, { id: 'AI & Space Tech', na,
  m: e: 'AI & Space Tech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, ic,
  o: n: '🛸', col,
  o: r: 'from-indigo-500 to-purple-500' }, { id: 'AI & Operations', na,
  m: e: 'AI & Operations', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, ic,
  o: n: '⚙️', col,
  o: r: 'from-gray-500 to-slate-500' }, { id: 'AI & Development', na,
  m: e: 'AI & Development', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, ic,
  o: n: '💻', col,
  o: r: 'from-cyan-500 to-blue-500' }, { id: 'AI & Education', na,
  m: e: 'AI & Education', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, ic,
  o: n: '🎓', col,
  o: r: 'from-blue-500 to-indigo-500' }, { id: 'AI & Entertainment', na,
  m: e: 'AI & Entertainment', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, ic,
  o: n: '🎮', col,
  o: r: 'from-purple-500 to-pink-500' }
  ]
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service () () => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedServices = [...filteredServices].sort((a, b) () => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'price':
        return a.price - b.price
      case 'reviews':
        return b.reviewCount - a.reviewCount
      case 'name':
        return a.title.localeCompare(b.title)
      defau,
  l: t: return b.rating - a.rating
    }
  })
  const getCategoryIcon = (catego,
  r: y: string) () => {
    switch (category) {
      case 'AI & Business Intelligence': return <Brain className="w-6 h-6" />
      case 'Cybersecurity': return <Shield className="w-6 h-6" />
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />
      case 'AI & Marketing': return <TrendingUp className="w-6 h-6" />
      case 'Quantum Computing': return <Atom className="w-6 h-6" />
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />
      case 'Blockchain & Web3': return <CircuitBoard className="w-6 h-6" />
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />
      case 'FinTech': return <DollarSign className="w-6 h-6" />
      case 'Digital Twin': return <Globe className="w-6 h-6" />
      case 'Space Technology': return <Satellite className="w-6 h-6" />
      case 'Sustainable Technology': return <Leaf className="w-6 h-6" />
      case 'AI & Content': return <FileText className="w-6 h-6" />
      case 'AI & Customer Support': return <MessageSquare className="w-6 h-6" />
      case 'AI & HR': return <Users className="w-6 h-6" />
      case 'AI & Legal Tech': return <ShieldCheck className="w-6 h-6" />
      case 'AI & Research': return <Search className="w-6 h-6" />
      case 'AI & Green Tech': return <Leaf className="w-6 h-6" />
      case 'AI & Metaverse': return <Globe2 className="w-6 h-6" />
      case 'AI & Space Tech': return <Rocket className="w-6 h-6" />
      case 'AI & Operations': return <Cpu className="w-6 h-6" />
      case 'AI & Development': return <Code className="w-6 h-6" />
      case 'AI & Education': return <Award className="w-6 h-6" />
      case 'AI & Entertainment': return <Sparkles className="w-6 h-6" />
      defaul,
  t: return <Star className="w-6 h-6" />
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI & Technology Services - Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, blockchain, quantum computing, and emerging technology services. Transform your business with autonomous solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6";"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">AI & Technology</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Services
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
            className="className="text-xl,
  m: d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto";"
          >
            Transform your business with our comprehensive portfolio of cutting-edge autonomous AI
            blockchain, quantum computing, and emerging technology solutions. 
            <span className="text-cyan-400 font-semibold"> 500%+ ROI guaranteed.</span>
          </motion.p>

          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center";"
          >
            <a 
              href="t,
  e: l:+13024640950"
              className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300,
  transform: hover:scale-105";"
            >
              <Phone className="w-5 h-5" />
              Call,
  No: w: +1 302 464 0950
            </a>
            <a 
              href="mail,
  t: o:kleber@ziontechgroup.com"
              className="className="bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hove,
  r:scale-105";"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>

          {/* Contact Info Banner */}
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
            className="className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20";"
          >
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-emerald-400 mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-emerald-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+
              </span> 
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From autonomous AI platforms to quantum computing solutions, our comprehensive portfolio 
              covers every aspect of modern technology innovation. Each service is designed to deliver 
              exceptional ROI and transformative business outcomes.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="className="mb-12";"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300,
  transform: hover: scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hove,
  r:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Search and Sort */}
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="mb-8 flex flex-col,
  m: d:flex-row gap-4 justify-between items-center";"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="reviews">Sort by Reviews</option>
              <option value="name">Sort by Name</option>
            </select>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
            className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8";"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20,
  hove: r: border-cyan-500/50 transition-all duration-300 transform hove,
  r:scale-105 group";"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="className="px-2 py-1 bg-white/10 text-xs text-cyan-400 rounded-full border border-cyan-500/30";"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Service Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Starting Price</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-400">{service.aiScore}</p>
                    <p className="text-xs text-gray-400">AI Score</p>
                  </div>
                </div>

                {/* Market Information */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Market,
  Pric: e:</span>
                    <span className="text-sm text-emerald-400 font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">R,
  O: I:</span>
                    <span className="text-sm text-cyan-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Setup,
  Tim: e:</span>
                    <span className="text-sm text-purple-400 font-semibold">{service.setupTime}</span>
                  </div>
                </div>

                {/* Contact & Action */}
                <div className="space-y-3">
                  <a
                    href={`t,
  e: l:+13024640950`}
                    className="className="w-full bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300,
  transform: hover:scale-105";"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Quote Now
                  </a>
                  <a
                    href={`mailt,
  o:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="className="w-full bg-white/10,
  hove: r:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 border border-white/20";"
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Inquiry
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Revie,
  w: s: {service.reviewCount}</span>
                    <span className="text-gray-400">Availabili,
  t: y: {service.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6";"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="className="text-xl text-gray-300 mb-8";"
          >
            Join thousands of businesses already leveraging our revolutionary AI and technology services. 
            Get started today with a free consultation and discover how we can accelerate your digital transformation.
          </motion.p>

          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center";"
          >
            <a 
              href="t,
  e: l:+13024640950"
              className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300,
  transform: hover:scale-105";"
            >
              <Phone className="w-5 h-5" />
              Call,
  No: w: +1 302 464 0950
            </a>
            <a 
              href="mail,
  t: o:kleber@ziontechgroup.com"
              className="className="bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hove,
  r:scale-105";"
            >
              <Mail className="w-5 h-5" />
              Schedule Consultation
            </a>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
            className="className="mt-12 grid grid-cols-1,
  m: d:grid-cols-3 gap-8";"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 text-lg">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-400 text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-emerald-400 text-lg">364 E Main St STE 1008</p>
              <p className="text-emerald-400 text-lg">Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | 
            <a href="htt,
  p: s: //ziontechgroup.com" className="text-cyan-400 hove,
  r:text-cyan-300 ml-1">
              ziontechgroup.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}