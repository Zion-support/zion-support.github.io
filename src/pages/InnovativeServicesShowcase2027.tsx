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
} from "lucide-react"
import { SEO } from "../components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from "../data/innovativeMicroSaasServices2027"
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027 } from "../data/innovativeITInfrastructureServices2027"
import { EMERGING_TECHNOLOGY_SERVICES_2027 } from "../data/emergingTechnologyServices2027"
export default function InnovativeServicesShowcase2027() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')

  // Combine all services
const allServices = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2027
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027
    ...EMERGING_TECHNOLOGY_SERVICES_2027
]
  // Get unique categories from services
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
  o: n: '🧠', col,
  o: r: 'from-purple-500 to-indigo-500' },
  },
  { id: 'Biotechnology', na,
  m: e: 'Biotechnology', cou,
  n: t: allServices.filter(s => s.category === 'Biotechnology').length, ic,
  o: n: '🧬', col,
  o: r: 'from-green-500 to-blue-500' },
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
  o: r: 'from-blue-500 to-purple-500' },
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
  o: n: '🤖', col,
  o: r: 'from-gray-500 to-blue-500' },
  },
  { id: 'Robotics & Automation', na,
  m: e: 'Robotics & Automation', cou,
  n: t: allServices.filter(s => s.category === 'Robotics & Automation').length, ic,
  o: n: '🦾', col,
  o: r: 'from-blue-500 to-gray-500' },
  },
  ]
  const filteredServices = allServices.filter(service () => {
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
},
  })
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2027 | Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, space technology, and emerging tech services. Transform your business with Zion Tech Group's innovative solutions."
        keywords="AI services, quantum computing, space technology, emerging tech, innovative solutions, Zion Tech Group"
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
              Innovative Services
            </span>
            <br />
            <span className="text-white">Showcase 2027</span>
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
            Discover the future of technology with our cutting-edge AI, quantum computing, space technology, and emerging tech services. Transform your business with Zion Tech Group's innovative solutions.
          </motion.p>

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
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center";"
          >
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
  r:shadow-2xl flex items-center gap-2";"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          {/* Contact Information */},
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
            className="className="mt-12 grid grid-cols-1,
  m: d: grid-cols-3 gap-6 max-w-4xl mx-auto";"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="t,
  e: l:+13024640950" className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-purple-400 hove,
  r:text-purple-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-green-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */},
  }
      <section className="py-20 px-4">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business solutions to quantum computing and space technology
              we offer the most advanced services to drive your digital transformation.
            </p>
          </motion.div>

          {/* Service Categories */},
  }
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6 mb-16">
            {categories.slice(1).map((category, index) => (
  <motion.div
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
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white cursor-pointer transform transition-all duration-300,
  hove: r: scale-105 hove,
  r:shadow-2xl`}
                onClick={onClick={() => setActiveCategory(category.id)},
  },
  }
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} services</p>
              </motion.div>
            ))}
          </div>

          {/* Search and Filter */},
  }
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
            className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-12";"
          >
            <div className="flex flex-col,
  m: d:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm},
  }
                  onChange={(e) => setSearchTerm(e.target.value)},
  }
                  className="className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                />
              </div>
              <select
                value={sortBy},
  }
                onChange={(e) => setSortBy(e.target.value)},
  }
                className="className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white,
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
            </div>
          </motion.div>

          {/* Services Grid */},
  }
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
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
                className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20,
  hove: r: border-cyan-500/50 transition-all duration-300 transform hove,
  r:scale-105";"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)},
  }
                    <span className="text-sm text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                      {service.category},
  }
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Pri,
  c: e:</span>
                    <span className="text-cyan-400 font-semibold">
                      {service.currency},
  {service.price.toLocaleString()},
  }
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market,
  Pric: e:</span>
                    <span className="text-green-400 text-sm">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">R,
  O: I:</span>
                    <span className="text-yellow-400 text-sm">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Setup,
  Tim: e:</span>
                    <span className="text-blue-400 text-sm">{service.setupTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
  <span
                      key={tagIndex},
  }
                      className="className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full";"
                    >
                      {tag},
  }
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300,
  transform: hover:scale-105";"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailt,
  o:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="className="bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r: from-purple-600,
  hove: r:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hove,
  r:scale-105";"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */},
  }
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
            className="className="text-center mt-20";"
          >
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Our innovative services 
                are designed to give you a competitive edge in the digital age.
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
                  Start Your Journey
                </Link>
                <a
                  href="htt,
  p: s://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="className="bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300,
  transform: hover:scale-105 hove,
  r:shadow-2xl";"
                >
                  Visit Our Website
                </a>
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
