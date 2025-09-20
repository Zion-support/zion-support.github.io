import React, { useState, useEffect } from 'react',
import SEO from '../components/SEO',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, TrendingUp, Users, Globe, Phone, Mail, MapPin
} from 'lucide-react',

// Import our new innovative 2025 services
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services',
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services',
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services',
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions',

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [filteredServices, setFilteredServices] = useState<any[]>([]),

  // Combine all services
  const allServices = [
    ...innovativeAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasServices2025,
    ...innovativeBusinessSolutions2025
  ],

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, count: innovativeAIAutomationServices2025.length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cpu, count: innovativeITInfrastructureServices2025.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, count: innovativeMicroSaasServices2025.length },
    { id: 'business-solutions', name: 'Business Solutions', icon: Target, count: innovativeBusinessSolutions2025.length }
  ],

  useEffect(() => {
    let filtered = allServices,

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai-automation') return innovativeAIAutomationServices2025.includes(service),
        if (selectedCategory === 'it-infrastructure') return innovativeITInfrastructureServices2025.includes(service),
        if (selectedCategory === 'micro-saas') return innovativeMicroSaasServices2025.includes(service),
        if (selectedCategory === 'business-solutions') return innovativeBusinessSolutions2025.includes(service),
        return true,
      }),
    }

    setFilteredServices(filtered),
  }, [searchTerm, selectedCategory]),

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Automation')) return Brain,
    if (category.includes('IT') || category.includes('Infrastructure')) return Cpu,
    if (category.includes('Micro SAAS')) return Building,
    if (category.includes('Business')) return Target,
    return Globe
  },

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Automation')) return 'from-purple-600 to-pink-600',
    if (category.includes('IT') || category.includes('Infrastructure')) return 'from-blue-600 to-cyan-600',
    if (category.includes('Micro SAAS')) return 'from-green-600 to-emerald-600',
    if (category.includes('Business')) return 'from-orange-600 to-red-600',
    return 'from-gray-600 to-slate-600'
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive collection of innovative AI, IT infrastructure, micro SAAS, and business solutions for 2025. Transform your business with cutting-edge technology."
        keywords="AI services, IT infrastructure, micro SAAS, business solutions, 2025, innovation, technology, automation"
        image="https://ziontechgroup.com/og-innovative-2025-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of cutting-edge AI, IT infrastructure, micro SAAS, and business solutions designed to transform your business in 2025 and beyond.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Website
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl border border-white/20"
              >
                Contact Us
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="text-white mb-8">
            <p className="text-lg">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
          </div>

          {/* Services Grid */}
          <AnimatePresence>
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl">
                  No services found matching your criteria.
                </div>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          {service.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Starting at:</div>
                        <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/10 text-white px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6 text-sm">
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Market Size:</span>
                          <span className="text-cyan-400 font-semibold">{service.marketSize}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Target:</span> {service.targetAudience}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-2">
                        <a
                          href={service.slug}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        <a
                          href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                          className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 border border-white/20"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our innovative 2025 services are designed to give you a competitive edge. 
              Contact us today to learn how we can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 text-gray-300">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
},

export default Innovative2025ServicesShowcase,
