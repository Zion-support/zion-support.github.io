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
  Car
  Building2
  Factory
  Wheat
  Zap as EnergyIcon
  Stethoscope
  Satellite
  TrendingUp as ChartIcon
  PenTool
  UserCheck
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function ComprehensiveServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  // Enhanced categories with new services
  const categories = [
    { id: 'all', na,
  m: e: 'All Services', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, ic,
  o: n: '🚀', col,
  o: r: 'from-cyan-500 to-blue-500' }, { id: 'AI & Business Intelligence', na,
  m: e: 'AI & Business Intelligence', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, ic,
  o: n: '🤖', col,
  o: r: 'from-purple-500 to-pink-500' }, { id: 'AI & Operations', na,
  m: e: 'AI & Operations', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, ic,
  o: n: '⚙️', col,
  o: r: 'from-gray-500 to-slate-500' }, { id: 'AI & Green Tech', na,
  m: e: 'AI & Green Tech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, ic,
  o: n: '🌿', col,
  o: r: 'from-green-500 to-emerald-500' }, { id: 'Quantum Computing', na,
  m: e: 'Quantum Computing', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, ic,
  o: n: '⚛️', col,
  o: r: 'from-indigo-500 to-purple-500' }, { id: 'AI & Metaverse', na,
  m: e: 'AI & Metaverse', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, ic,
  o: n: '🌍', col,
  o: r: 'from-purple-500 to-indigo-500' }, { id: 'AI & Healthcare', na,
  m: e: 'AI & Healthcare', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, ic,
  o: n: '🏥', col,
  o: r: 'from-pink-500 to-red-500' }, { id: 'AI & Space Tech', na,
  m: e: 'AI & Space Tech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, ic,
  o: n: '🛸', col,
  o: r: 'from-indigo-500 to-purple-500' }, { id: 'FinTech', na,
  m: e: 'FinTech', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, ic,
  o: n: '💰', col,
  o: r: 'from-emerald-500 to-green-500' }, { id: 'AI & Content', na,
  m: e: 'AI & Content', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, ic,
  o: n: '✍️', col,
  o: r: 'from-orange-500 to-red-500' }, { id: 'AI & Customer Support', na,
  m: e: 'AI & Customer Support', cou,
  n: t: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, ic,
  o: n: '💬', col,
  o: r: 'from-blue-500 to-purple-500' }
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
      case 'AI & Operations':
        return <Factory className="w-6 h-6" />
      case 'AI & Green Tech':
        return <Leaf className="w-6 h-6" />
      case 'Quantum Computing':
        return <Atom className="w-6 h-6" />
      case 'AI & Metaverse':
        return <Globe2 className="w-6 h-6" />
      case 'AI & Healthcare':
        return <Stethoscope className="w-6 h-6" />
      case 'AI & Space Tech':
        return <Satellite className="w-6 h-6" />
      case 'FinTech':
        return <DollarSign className="w-6 h-6" />
      case 'AI & Content':
        return <PenTool className="w-6 h-6" />
      case 'AI & Customer Support':
        return <UserCheck className="w-6 h-6" />
      defaul,
  t: return <Brain className="w-6 h-6" />
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI Services Showcase 2030 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered micro SAAS services and solutions for 2030. From autonomous operations to quantum computing, discover the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Services 2030
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our comprehensive suite of AI-powered micro SAAS services. 
              From autonomous operations to quantum computing, we're building tomorrow's solutions today.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact,
  U: s: +1 302 464 0950
              </Link>
              <Link
                to="/request-quote"
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full,
  hove: r:bg-cyan-400 hove,
  r:text-slate-900 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-y border-cyan-500/30">
        <div className="max-w-7xl mx-auto py-6 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-white font-semibold">Phone</p>
              <p className="text-cyan-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-cyan-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-cyan-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="className="text-center mb-12";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Services for 2030
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI solutions are designed to transform industries and drive innovation. 
              Each service is built with the latest technology and backed by our expert team.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300,
  transform: hover: scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-gray-300 hove,
  r:bg-slate-700 border border-slate-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col,
  s: m:flex-row gap-4 mb-8 justify-center items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white,
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

          {/* Services Grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  exit={ opaci,
  t: y: 0, y: -20 }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                  className="className="bg-slate-800 rounded-xl p-6 border border-slate-700,
  hove: r: border-cyan-500/50 transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-2xl hove,
  r:shadow-cyan-500/20";"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm text-cyan-400 font-medium">{service.subcategory}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Pri,
  c: e:</span>
                      <span className="text-2xl font-bold text-cyan-400">{service.currency}, {service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Market,
  Pric: e:</span>
                      <span className="text-green-400 font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">R,
  O: I:</span>
                      <span className="text-yellow-400 font-medium">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Setup,
  Tim: e:</span>
                      <span className="text-blue-400 font-medium">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">AI Score</span>
                      <span className="text-cyan-400 font-bold">{service.aiScore}/100</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500";"
                        style={ wid,
  t: h: `${service.aiScore}%` }
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="className="px-2 py-1 bg-slate-700 text-cyan-300 text-xs rounded-full";"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300";"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/request-quote"
                      className="className="flex-1 border border-cyan-500 text-cyan-400 text-center py-2 px-4 rounded-lg font-medium,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-300";"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our AI-powered solutions to drive innovation
              increase efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call,
  U: s: +1 302 464 0950
              </Link>
              <Link
                to="/request-quote"
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full,
  hove: r:bg-cyan-400,
  hove: r:text-slate-900 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Emai,
  l: kleber@ziontechgroup.com
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
            className="className="text-center mb-12";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6">
            {[
              {
                ico,
  n: <Award className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Proven Excellence",descripti,
  o: n: "Over 95% client satisfaction rate with proven ROI across industries"
              }, {
                ic,
  o: n: <Rocket className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Innovation First",descripti,
  o: n: "Cutting-edge AI solutions that keep you ahead of the competition"
              }, {
                ic,
  o: n: <Shield className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-level security with SOC 2 compliance and 99.99% uptime"
              }, {
                ic,
  o: n: <Users className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Expert Support",descripti,
  o: n: "24/7 dedicated support team with deep technical expertise"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: 0.8 + index * 0.1 }
                className="className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700,
  hove: r:border-cyan-500/50 transition-all duration-300";"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Atom icon component for quantum computing
const Atom = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="M12 1a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-8.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z" />
  </svg>
)