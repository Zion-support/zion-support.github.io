import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
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
  Atom
  Satellite
  Car
  Bot
  Eye
  CpuIcon
  ZapIcon
  ShieldIcon
  CloudIcon
  BrainIcon
  RocketIcon
  LeafIcon
  GlobeIcon
  CodeIcon
  DatabaseIcon
  NetworkIcon
  SmartphoneIcon
  BarChartIcon
  MessageSquareIcon
  FileTextIcon
  ShoppingCartIcon
  HeadphonesIcon
  MailIcon as MailIcon2
  SearchIcon
  HelpCircleIcon
  ShieldCheckIcon
  Globe2Icon
  LeafIcon as LeafIcon2
  SparklesIcon
  TargetIcon
  DollarSignIcon
  ClockIcon
  AwardIcon
  PhoneIcon
  MapPinIcon
  InfinityIcon
  ChevronDown
  ChevronUp
  Play
  ExternalLink
  BookOpen
  Lightbulb
  Target as TargetIcon
  Users as UsersIcon
  Settings
  BarChart
  PieChart
  LineChart
  TrendingDown
  Calculator
  Calendar
  Clock as ClockIcon
  Award as AwardIcon
  Star as StarIcon
  Heart as HeartIcon
  Zap as ZapIcon
  Shield as ShieldIcon
  Cloud as CloudIcon
  Brain as BrainIcon
  Rocket as RocketIcon
  Leaf as LeafIcon
  Globe as GlobeIcon
  Code as CodeIcon
  Database as DatabaseIcon
  Network as NetworkIcon
  Smartphone as SmartphoneIcon
  BarChart3 as BarChart3Icon
  MessageSquare as MessageSquareIcon
  FileText as FileTextIcon
  ShoppingCart as ShoppingCartIcon
  Headphones as HeadphonesIcon
  Mail as MailIcon3
  Search as SearchIcon
  HelpCircle as HelpCircleIcon
  ShieldCheck as ShieldCheckIcon
  Globe2 as Globe2Icon
  Leaf as LeafIcon2
  Sparkles as SparklesIcon
  Target as TargetIcon2
  DollarSign as DollarSignIcon
  Clock as ClockIcon2
  Award as AwardIcon2
  Phone as PhoneIcon2
  MapPin as MapPinIcon2
  Infinity as InfinityIcon2
} from "lucide-react"
import { SEO } from "../components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from "../data/innovativeMicroSaasServices2027"
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027 } from "../data/innovativeITInfrastructureServices2027"
import { EMERGING_TECHNOLOGY_SERVICES_2027 } from "../data/emergingTechnologyServices2027"
export default function ComprehensiveServicesLanding2027() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Combine all services
const allServices = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2027
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027
    ...EMERGING_TECHNOLOGY_SERVICES_2027
]
  // Get unique categories with counts
const categories = [
  { id: 'all', na,
  m: e: 'All Services', cou,
  n: t: allServices.length, ic,
  o: n: '🚀', col,
  o: r: 'from-cyan-500 to-blue-500' },
  },
  { id: 'AI & Business Intelligence', na,
  m: e: 'AI & Business Intelligence', cou,
  n: t: allServices.filter(s => s.category === 'AI & Business Intelligence').length, ic,
  o: n: '🤖', col,
  o: r: 'from-purple-500 to-pink-500' },
  },
  { id: 'Cybersecurity', na,
  m: e: 'Cybersecurity', cou,
  n: t: allServices.filter(s => s.category === 'Cybersecurity').length, ic,
  o: n: '🛡️', col,
  o: r: 'from-red-500 to-orange-500' },
  },
  { id: 'Cloud & DevOps', na,
  m: e: 'Cloud & DevOps', cou,
  n: t: allServices.filter(s => s.category === 'Cloud & DevOps').length, ic,
  o: n: '☁️', col,
  o: r: 'from-blue-500 to-cyan-500' },
  },
  { id: 'AI & Healthcare', na,
  m: e: 'AI & Healthcare', cou,
  n: t: allServices.filter(s => s.category === 'AI & Healthcare').length, ic,
  o: n: '🏥', col,
  o: r: 'from-pink-500 to-red-500' },
  },
  { id: 'Blockchain & Web3', na,
  m: e: 'Blockchain & Web3', cou,
  n: t: allServices.filter(s => s.category === 'Blockchain & Web3').length, ic,
  o: n: '🔗', col,
  o: r: 'from-yellow-500 to-orange-500' },
  },
  { id: 'IoT & Edge Computing', na,
  m: e: 'IoT & Edge Computing', cou,
  n: t: allServices.filter(s => s.category === 'IoT & Edge Computing').length, ic,
  o: n: '🌐', col,
  o: r: 'from-teal-500 to-cyan-500' },
  },
  { id: 'Quantum Computing', na,
  m: e: 'Quantum Computing', cou,
  n: t: allServices.filter(s => s.category === 'Quantum Computing').length, ic,
  o: n: '⚛️', col,
  o: r: 'from-indigo-500 to-purple-500' },
  },
  { id: 'Space Technology', na,
  m: e: 'Space Technology', cou,
  n: t: allServices.filter(s => s.category === 'Space Technology').length, ic,
  o: n: '🚀', col,
  o: r: 'from-purple-500 to-pink-500' },
  },
  { id: 'Sustainable Technology', na,
  m: e: 'Sustainable Technology', cou,
  n: t: allServices.filter(s => s.category === 'Sustainable Technology').length, ic,
  o: n: '🌱', col,
  o: r: 'from-green-500 to-teal-500' },
  },
  { id: 'AI & Legal Tech', na,
  m: e: 'AI & Legal Tech', cou,
  n: t: allServices.filter(s => s.category === 'AI & Legal Tech').length, ic,
  o: n: '⚖️', col,
  o: r: 'from-blue-500 to-indigo-500' },
  },
  { id: 'FinTech', na,
  m: e: 'FinTech', cou,
  n: t: allServices.filter(s => s.category === 'FinTech').length, ic,
  o: n: '💰', col,
  o: r: 'from-emerald-500 to-green-500' },
  },
  { id: 'AI & Content', na,
  m: e: 'AI & Content', cou,
  n: t: allServices.filter(s => s.category === 'AI & Content').length, ic,
  o: n: '✍️', col,
  o: r: 'from-orange-500 to-red-500' },
  },
  { id: 'IT Infrastructure', na,
  m: e: 'IT Infrastructure', cou,
  n: t: allServices.filter(s => s.category === 'IT Infrastructure').length, ic,
  o: n: '🏗️', col,
  o: r: 'from-gray-500 to-slate-500' },
  },
  { id: 'AI & Computing', na,
  m: e: 'AI & Computing', cou,
  n: t: allServices.filter(s => s.category === 'AI & Computing').length, ic,
  o: n: '💻', col,
  o: r: 'from-cyan-500 to-blue-500' },
  },
  { id: 'Biotechnology', na,
  m: e: 'Biotechnology', cou,
  n: t: allServices.filter(s => s.category === 'Biotechnology').length, ic,
  o: n: '🧬', col,
  o: r: 'from-green-500 to-emerald-500' },
  },
  { id: 'Energy Technology', na,
  m: e: 'Energy Technology', cou,
  n: t: allServices.filter(s => s.category === 'Energy Technology').length, ic,
  o: n: '⚡', col,
  o: r: 'from-yellow-500 to-orange-500' },
  },
  { id: 'Metaverse & AR/VR', na,
  m: e: 'Metaverse & AR/VR', cou,
  n: t: allServices.filter(s => s.category === 'Metaverse & AR/VR').length, ic,
  o: n: '🌍', col,
  o: r: 'from-purple-500 to-indigo-500' },
  },
  { id: 'Neurotechnology', na,
  m: e: 'Neurotechnology', cou,
  n: t: allServices.filter(s => s.category === 'Neurotechnology').length, ic,
  o: n: '🧠', col,
  o: r: 'from-indigo-500 to-purple-500' },
  },
  { id: 'Quantum Technology', na,
  m: e: 'Quantum Technology', cou,
  n: t: allServices.filter(s => s.category === 'Quantum Technology').length, ic,
  o: n: '⚛️', col,
  o: r: 'from-indigo-500 to-purple-500' },
  },
  { id: 'Autonomous Systems', na,
  m: e: 'Autonomous Systems', cou,
  n: t: allServices.filter(s => s.category === 'Autonomous Systems').length, ic,
  o: n: '🚗', col,
  o: r: 'from-blue-500 to-indigo-500' },
  },
  { id: 'Robotics & Automation', na,
  m: e: 'Robotics & Automation', cou,
  n: t: allServices.filter(s => s.category === 'Robotics & Automation').length, ic,
  o: n: '🤖', col,
  o: r: 'from-gray-500 to-slate-500' },
  },
  ]
  // Filter services based on category and search
const filteredServices = allServices.filter(service () => {
  const matchesCategory = activeCategory === 'all' || service.category === activeCategory
const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
})

  const toggleServiceExpansion = (service,
  I: d: string) () => {
  setExpandedService(expandedService === serviceId ? null : serviceId)
  }
  const getCategoryIcon = (catego,
  r: y: string) () => {
  const,
  const: iconMap: { [ke,
  y: string]: React.ReactNode } = {
  = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />
      'Cybersecurity': <Shield className="w-6 h-6" />
      'Cloud & DevOps': <Cloud className="w-6 h-6" />
      'AI & Healthcare': <Heart className="w-6 h-6" />
      'Blockchain & Web3': <Link className="w-6 h-6" />
      'IoT & Edge Computing': <Network className="w-6 h-6" />
      'Quantum Computing': <Atom className="w-6 h-6" />
      'Space Technology': <Satellite className="w-6 h-6" />
      'Sustainable Technology': <Leaf className="w-6 h-6" />
      'AI & Legal Tech': <FileText className="w-6 h-6" />
      'FinTech': <DollarSign className="w-6 h-6" />
      'AI & Content': <MessageSquare className="w-6 h-6" />
      'IT Infrastructure': <Database className="w-6 h-6" />
      'AI & Computing': <Cpu className="w-6 h-6" />
      'Biotechnology': <Dna className="w-6 h-6" />
      'Energy Technology': <Zap className="w-6 h-6" />
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />
      'Neurotechnology': <Brain className="w-6 h-6" />
      'Quantum Technology': <Atom className="w-6 h-6" />
      'Autonomous Systems': <Car className="w-6 h-6" />
      'Robotics & Automation': <Bot className="w-6 h-6" />
    }
    return iconMap[category] || <Star className="w-6 h-6" />
}

  const formatPrice = (pri,
  c: e: number) () => {
  if (if (price >= 1000) {
  ) {
      return `$${(price / 1000).toFixed(1)}K`
}
    return `$${price}`
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2027 | Zion Tech Group"
        description="Explore our complete portfolio of innovative AI, quantum computing, space technology, and emerging tech services. Transform your business with cutting-edge solutions."
        keywords="AI services, quantum computing, space technology, emerging tech, Zion Tech Group, innovative solutions"
      />

      {/* Hero Section */},
  }
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6";"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
            <br />
            <span className="text-white">Landing 2027</span>
          </motion.h1>
          
          <motion.p 
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-xl,
  m: d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto";"
          >
            Discover our complete portfolio of cutting-edge technology services designed to 
            transform your business and drive innovation across every industry.
          </motion.p>

          {/* Search Bar */},
  }
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
            className="className="max-w-2xl mx-auto mb-8";"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, technologies, or solutions..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-full px-12 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white placeholder-gray-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent text-lg";"
              />
            </div>
          </motion.div>

          {/* Quick Stats */},
  }
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
            className="className="grid grid-cols-1,
  m: d:grid-cols-4 gap-6 max-w-4xl mx-auto";"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{allServices.length}</div>
              <div className="text-cyan-400 text-sm">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
              <div className="text-green-400 text-sm">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">800%+</div>
              <div className="text-yellow-400 text-sm">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-purple-400 text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */},
  }
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through our comprehensive service categories to find the perfect 
              solution for your business needs.
            </p>
          </motion.div>

          {/* Category Grid */},
  }
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6">
            {categories.map((category, index) => (
  <motion.button
                key={category.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                onClick={onClick={() => setActiveCategory(category.id)},
  },
  }
                className={`p-6 rounded-2xl border transition-all duration-300,
  transform: hover: scale-105 ${
  activeCategory === category.id
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50'
                    : 'bg-white/10 backdrop-blur-lg border-white/20 hove,
  r:border-cyan-500/30'
}`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <div className="text-cyan-400 font-medium">{category.count} Services</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */},
  }
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              {activeCategory === 'all' ? 'All Services' : `${activeCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {activeCategory === 'all' 
                ? 'Explore our complete portfolio of innovative services and solutions.'
                : `Discover our specialized ${activeCategory.toLowerCase()} services designed to meet your specific needs.`
}
            </p>
          </motion.div>

          {/* Services Grid */},
  }
          <div className="space-y-6">
            {filteredServices.map((service, index) => (
  <motion.div
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden";"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {getCategoryIcon(service.category)},
  }
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-900 text-cyan-300 rounded-full">
                          {service.category},
  }
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{formatPrice(service.price)}</div>
                      <div className="text-sm text-gray-400">Mark,
  e: t: {service.marketPrice}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400">{service.setupTime}</div>
                      <div className="text-xs text-gray-400">Setup Time</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{service.aiScore}%</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={onClick={() => toggleServiceExpansion(service.id)},
  },
  }
                      className="className="inline-flex items-center px-4 py-2 text-cyan-400,
  hove: r:text-cyan-300 transition-colors duration-300";"
                    >
                      {expandedService === service.id ? (
  <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Hide Details
                        </>
                      ) : (
  <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          View Details
                        </>
                      )}
                    </button>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/30 text-white font-medium rounded-lg,
  hove: r: bg-white/20 transition-all duration-300";"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Learn More
                      </Link>
                      <a
                        href={`mailt,
  o:kleber@ziontechgroup.com?subject=Quote for ${service.title}`}
                        className="className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg,
  hove: r: from-cyan-600 hove,
  r:to-blue-700 transition-all duration-300";"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */},
  }
                <AnimatePresence>
                  {expandedService === service.id && (
  <motion.div
                      initial={ heig,
  h: t: 0, opaci,
  t: y: 0 },
  }
                      animate={ heig,
  h: t: "auto", opaci,
  t: y: 1 },
  }
                      exit={ heig,
  h: t: 0, opaci,
  t: y: 0 },
  }
                      transition={ durati,
  o: n: 0.3 },
  }
                      className="className="border-t border-white/20 bg-white/5";"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                            <div className="space-y-2">
                              {service.tags.slice(0, 8).map((tag, tagIndex) => (
  <div key={tagIndex} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                  <span className="text-gray-300">{tag}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>
                            <div className="space-y-2">
                              {service.integrations?.slice(0, 6).map((integration, integrationIndex) => (
  <div key={integrationIndex} className="flex items-center">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                                  <span className="text-gray-300">{integration}</span>
                                </div>
                              ))},
  {service.integrations && service.integrations.length > 6 && (
  <div className="text-gray-400 text-sm">
                                  +{service.integrations.length - 6} more integrations
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-white/5 rounded-lg">
                          <h4 className="text-lg font-semibold text-white mb-3">Competitive Analysis</h4>
                          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium text-gray-400 mb-2">Competitors</h5>
                              <div className="space-y-1">
                                {service.competitors?.slice(0, 3).map((competitor, competitorIndex) => (
  <div key={competitorIndex} className="text-gray-300 text-sm">
                                    • {competitor},
  }
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-gray-400 mb-2">Our Advantage</h5>
                              <div className="text-gray-300 text-sm">
                                • {service.aiScore}% AI-powered accuracy<br />
                                • {service.roi} ROI guarantee<br />
                                • {service.setupTime} rapid deployment<br />
                                • 24/7 expert support
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))},
  {/* No Results Message */},
  },
  {filteredServices.length === 0 && (
  <motion.div 
                initial={ opaci,
  t: y: 0 },
  }
                animate={ opaci,
  t: y: 1 },
  }
                className="className="text-center py-20";"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or category selection</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */},
  }
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20";"
          >
            <h3 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized consultation and discover how our 
              innovative services can drive your business forward.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-2xl";"
              >
                Get Started Today
              </Link>
              <a
                href="t,
  e: l:+13024640950"
                className="className="bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300,
  transform: hover:scale-105 hove,
  r:shadow-2xl flex items-center gap-2 justify-center";"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Contact Information */},
  }
            <div className="mt-12 grid grid-cols-1,
  m: d: grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Phone</div>
                <a href="t,
  e: l:+13024640950" className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Email</div>
                <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-purple-400 hove,
  r:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Address</div>
                <div className="text-green-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Helper component for DNA icon
function Dna({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  )
}