import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Brain,
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Filter,
  Grid3X3,
  List,
  Eye,
  ExternalLink,
  X
} from "lucide-react"
import { SEO } from "../components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSAASServices2025"
export default function InnovativeMicroSAASServices2025() {
  const [activeCategory, setActiveCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [sortBy, setSortBy] = useState('rating')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedService, setSelectedService] = useState<any>(null)
  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' }
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' }
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' }
    { id: 'AI & Marketing', name: 'AI & Marketing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' }
    { id: 'AI & Content', name: 'AI & Content', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' }
    { id: 'AI & HR', name: 'AI & HR', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' }
    { id: 'FinTech', name: 'FinTech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' }
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' }
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' }
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' }
    { id: 'AI & Education', name: 'AI & Education', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' }
  ]
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    return matchesCategory && matchesSearch
  }),

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating,
      case 'price':
        return a.price - b.price,
      case 'reviews':
        return b.reviewCount - a.reviewCount,
      case 'name':
        return a.title.localeCompare(b.title),
      default: return b.rating - a.rating
    }
  })
  const handleServiceClick = (service: any) => {
    setSelectedService(service)
  }
  const closeModal = () => {
    setSelectedService(null)
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2025 | Zion Tech Group"
        description="Discover cutting-edge micro SAAS services powered by AI, including business intelligence, marketing automation, cybersecurity, and more. Transform your business with Zion Tech Group."
        keywords="micro SAAS, AI services, business intelligence, marketing automation, cybersecurity, fintech, healthcare AI, legal tech, education AI"
        url="https://ziontechgroup.com/innovative-micro-saas-services-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                2025 Edition
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered micro SAAS solutions. 
              From business intelligence to cybersecurity, discover the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}</span>
                <span className="ml-2 text-gray-300">Services Available</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">4.8</span>
                <span className="ml-2 text-gray-300">Average Rating</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">24/7</span>
                <span className="ml-2 text-gray-300">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/20 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white/30 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white/30 text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                    <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-400">
                          ${service.price.toLocaleString()}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm">{service.rating}</span>
                          <span className="ml-1 text-gray-400 text-xs">({service.reviewCount})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-gray-300">{service.marketPrice}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-gray-300">{service.setupTime}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        AI Score: <span className="text-blue-400 font-medium">{service.aiScore}%</span>
                      </span>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">${service.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-400">Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">{service.rating}</div>
                            <div className="text-sm text-gray-400">Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{service.aiScore}%</div>
                            <div className="text-sm text-gray-400">AI Score</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">{service.reviewCount}</div>
                            <div className="text-sm text-gray-400">Reviews</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-64 space-y-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Market Price</div>
                          <div className="text-lg font-semibold text-gray-300">{service.marketPrice}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-400">ROI</div>
                          <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-400">Setup Time</div>
                          <div className="text-lg font-semibold text-gray-300">{service.setupTime}</div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-400">Availability</div>
                          <div className="text-lg font-semibold text-blue-400">{service.availability}</div>
                        </div>

                        <div className="flex items-center justify-end text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm font-medium mr-2">View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how our innovative micro SAAS services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">+1 302 464 0950</div>
                <div className="text-gray-400 text-sm">Phone Support</div>
              </div>
              <div>
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                <div className="text-gray-400 text-sm">Email Support</div>
              </div>
              <div>
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">Middletown, DE</div>
                <div className="text-gray-400 text-sm">Global Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white">{selectedService.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Subcategory:</span>
                        <span className="text-white">{selectedService.subcategory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-blue-400 font-bold">${selectedService.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Availability:</span>
                        <span className="text-white">{selectedService.availability}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-700 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-400">{selectedService.rating}</div>
                          <div className="text-sm text-gray-400">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400">{selectedService.aiScore}%</div>
                          <div className="text-sm text-gray-400">AI Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-400">{selectedService.reviewCount}</div>
                          <div className="text-sm text-gray-400">Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-400">{selectedService.location}</div>
                          <div className="text-sm text-gray-400">Location</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.tags.map((tag: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.integrations.slice(0, 6).map((integration: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full"
                            >
                              {integration}
                            </span>
                          ))}
                          {selectedService.integrations.length > 6 && (
                            <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full">
                              +{selectedService.integrations.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Competitors</h4>
                        <div className="text-gray-300 text-sm">
                          {selectedService.competitors.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="text-gray-400 text-sm">
                      <div>Contact: {selectedService.contactInfo.phone}</div>
                      <div>Email: {selectedService.contactInfo.email}</div>
                    </div>
                    <div className="flex gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Sales
                      </Link>
                      <Link
                        to="/request-quote"
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}