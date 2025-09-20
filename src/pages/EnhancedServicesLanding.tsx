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
  Building2
  Car
  Factory
  GraduationCap
  Gamepad2
  Calendar
  Briefcase
  Scale
  Lightbulb
  Leaf as LeafIcon
  Home
  Hotel
  Truck
  Crop
  Hammer
  Palette
  Music
  Video
  Camera
  BookOpen
  Microscope
  Flask
  Atom
  Satellite
  Rocket as RocketIcon
  Zap as ZapIcon
  Cpu as CpuIcon
  Database as DatabaseIcon
  Network as NetworkIcon
  Smartphone as SmartphoneIcon
  BarChart3 as BarChart3Icon
  MessageSquare as MessageSquareIcon
  FileText as FileTextIcon
  ShoppingCart as ShoppingCartIcon
  Headphones as HeadphonesIcon
  Mail as MailIcon2
  Search as SearchIcon
  HelpCircle as HelpCircleIcon
  ShieldCheck as ShieldCheckIcon
  Globe2 as Globe2Icon
  Leaf as LeafIcon2
  Sparkles as SparklesIcon
  Target as TargetIcon
  DollarSign as DollarSignIcon
  Clock as ClockIcon
  Award as AwardIcon
  Phone as PhoneIcon
  MapPin as MapPinIcon
  Infinity as InfinityIcon
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function EnhancedServicesLanding() {
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
  l: t: return 0
    }
  })
  const getCategoryIcon = (catego,
  r: y: string) () => {
    const,
  const: iconMap: { [ke,
  y: string]: React.ReactNode } = { = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />
      'Cybersecurity': <Shield className="w-6 h-6" />
      'Cloud & DevOps': <Cloud className="w-6 h-6" />
      'AI & Marketing': <TrendingUp className="w-6 h-6" />
      'Quantum Computing': <Atom className="w-6 h-6" />
      'IoT & Edge Computing': <Network className="w-6 h-6" />
      'Blockchain & Web3': <Globe2 className="w-6 h-6" />
      'AI & Healthcare': <Heart className="w-6 h-6" />
      'FinTech': <DollarSign className="w-6 h-6" />
      'Digital Twin': <Cpu className="w-6 h-6" />
      'Space Technology': <Rocket className="w-6 h-6" />
      'Sustainable Technology': <Leaf className="w-6 h-6" />
      'AI & Content': <FileText className="w-6 h-6" />
      'AI & Customer Support': <MessageSquare className="w-6 h-6" />
      'AI & HR': <Users className="w-6 h-6" />
      'AI & Legal Tech': <Scale className="w-6 h-6" />
      'AI & Research': <Microscope className="w-6 h-6" />
      'AI & Green Tech': <LeafIcon className="w-6 h-6" />
      'AI & Metaverse': <Globe className="w-6 h-6" />
      'AI & Space Tech': <Satellite className="w-6 h-6" />
      'AI & Operations': <Settings className="w-6 h-6" />
      'AI & Development': <Code className="w-6 h-6" />
      'AI & Education': <GraduationCap className="w-6 h-6" />
      'AI & Entertainment': <Gamepad2 className="w-6 h-6" />
    }
    return iconMap[category] || <Sparkles className="w-6 h-6" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enhanced AI Services & Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge AI solutions."
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
  m: d: text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-white">Micro SAAS Solutions</span>
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of intelligent, innovative, and diversified AI services. 
              From business intelligence to quantum computing, we deliver cutting-edge solutions that drive real results.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-slate-900 transition-all duration-300";"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <p className="text-sm font-medium">Phone</p>
              <p className="text-lg font-bold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <p className="text-sm font-medium">Email</p>
              <p className="text-lg font-bold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <p className="text-sm font-medium">Address</p>
              <p className="text-lg font-bold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4,
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Comprehensive AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI solutions span across industries and use cases, delivering measurable business value 
              and competitive advantages to organizations worldwide.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6 mb-16">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white cursor-pointer,
  transform: hover:scale-105 transition-all duration-300`}
                onClick={onClick={() => setActiveCategory(category.id)}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} Services</p>
              </motion.div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col,
  m: d:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-cyan-500";"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-cyan-500";"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="reviews">Sort by Reviews</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1,
  l: g: grid-cols-2 x,
  l:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800 rounded-xl p-6 border border-slate-700,
  hove: r: border-cyan-500 transition-all duration-300 transform hove,
  r:scale-105";"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-900 text-cyan-300 rounded-full">
                        {service.category}
                      </span>
                    </div>
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
                    <span className="text-gray-400 text-sm">Pri,
  c: e:</span>
                    <span className="text-white font-bold text-lg">${service.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market,
  Pric: e:</span>
                    <span className="text-cyan-400 font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">R,
  O: I:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Setup,
  Tim: e:</span>
                    <span className="text-orange-400 font-medium">{service.setupTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key,
  Feature: s:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded-full";"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">AI,
  Scor: e: {service.aiScore}%</span>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg,
  hove: r: from-cyan-600 hove,
  r:to-blue-700 transition-all duration-300";"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that transform businesses 
              and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2,
  l: g:grid-cols-3 gap-8">
            {[
              {
                ico,
  n: <Brain className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "AI-First Approach",descripti,
  o: n: "Every solution is built with AI at its core, ensuring maximum intelligence and automation capabilities."
              }, {
                ic,
  o: n: <Award className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Proven Results",descripti,
  o: n: "Our solutions deliver measurable ROI with documented success stories across industries."
              }, {
                ic,
  o: n: <Globe className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Global Expertise",descripti,
  o: n: "Serving clients worldwide with localized solutions and 24/7 support capabilities."
              }, {
                ic,
  o: n: <Zap className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Rapid Deployment",descripti,
  o: n: "Quick implementation with minimal disruption to your existing operations."
              }, {
                ic,
  o: n: <Shield className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-grade security and compliance with industry standards and regulations."
              }, {
                ic,
  o: n: <Users className="w-12 h-12 text-cyan-400" />,tit,
  l: e: "Expert Team",descripti,
  o: n: "Experienced professionals with deep expertise in AI, cloud, and enterprise solutions."
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
  a: y: 0.6 + index * 0.1 }
                className="className="text-center p-6";"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations that have already transformed their operations with our AI-powered solutions. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Link>
              <Link
                to="/request-quote"
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-slate-900 transition-all duration-300";"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Settings icon component
const Settings = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)