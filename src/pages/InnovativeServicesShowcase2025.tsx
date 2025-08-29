import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Heart, 
  Globe, 
  Cpu,
  Lock,
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
  Users,
  Calendar,
  Play,
  BookOpen,
  Eye,
  Settings,
  Key,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight,
  MailIcon as MailIconComponent
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSAASServices2025';

export default function InnovativeServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Content', name: 'AI & Content', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Sales', name: 'AI & Sales', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Sales').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Intelligence').length, icon: '📊', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & HR', name: 'AI & HR', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Project Management', name: 'AI & Project Management', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Project Management').length, icon: '📋', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & FinTech').length, icon: '💳', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Education', name: 'AI & Education', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Technology', name: 'AI & Space Technology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Space Technology').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Green Technology', name: 'AI & Green Technology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Green Technology').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Development', name: 'AI & Development', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return b.rating - a.rating;
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.name === category);
    return categoryData?.icon || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.name === category);
    return categoryData?.color || 'from-cyan-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="🚀 Innovative AI Micro SAAS Services 2025 | Zion Tech Group"
        description="Discover cutting-edge AI-powered micro SAAS solutions for 2025. From contract analysis to space technology, get enterprise-grade AI services with transparent pricing, ROI guarantees, and expert support. Contact us: +1 302 464 0950"
        keywords="AI micro SAAS, AI services 2025, AI contract analysis, AI supply chain, AI cybersecurity, AI healthcare, AI content creation, AI sales intelligence, AI customer support, AI data analytics, AI HR, AI project management, AI financial trading, AI education, AI research, AI metaverse, AI space technology, AI green technology, AI development, Zion Tech Group"
        ogTitle="🚀 Innovative AI Micro SAAS Services 2025 | Zion Tech Group"
        ogDescription="Transform your business with cutting-edge AI micro SAAS solutions. 17 innovative services with transparent pricing, ROI guarantees, and expert support. Starting at $99/month."
        ogImage="/images/ai-services-2025-hero.jpg"
        ogUrl="https://ziontechgroup.com/innovative-services-2025"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🚀 <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative AI Micro SAAS Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered micro SAAS solutions. 
              <span className="text-cyan-400 font-semibold"> 17 innovative services</span> with transparent pricing, 
              <span className="text-pink-400 font-semibold"> ROI guarantees</span>, and 
              <span className="text-purple-400 font-semibold"> expert support</span>.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
                <div className="text-cyan-400 text-2xl mb-2">💰</div>
                <h3 className="text-white font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-300 text-sm">Starting at $99/month with no hidden fees</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30">
                <div className="text-pink-400 text-2xl mb-2">📈</div>
                <h3 className="text-white font-semibold mb-2">Proven ROI</h3>
                <p className="text-gray-300 text-sm">Average 300% ROI within 6 months</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
                <div className="text-purple-400 text-2xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-2">Quick Setup</h3>
                <p className="text-gray-300 text-sm">Deploy in 24-48 hours with expert support</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl mx-auto mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">📞 Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="text-cyan-400 w-4 h-4" />
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="text-pink-400 w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="text-purple-400 w-4 h-4" />
                  <span className="text-gray-300">Middletown, DE</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                📞 Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect AI Solution</h2>
              <p className="text-gray-300">Search and filter through our comprehensive collection of innovative micro SAAS services</p>
            </motion.div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services by name, category, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {category.icon} {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center mb-8">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/25"
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                          
                          {/* Category and Rating */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                              {service.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-sm">{service.rating}</span>
                              <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                            </div>
                          </div>

                          {/* AI Score */}
                          <div className="flex items-center gap-2 mb-4">
                            <Brain className="w-4 h-4 text-purple-400" />
                            <span className="text-white text-sm">AI Score:</span>
                            <div className="flex-1 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${service.aiScore}%` }}
                              ></div>
                            </div>
                            <span className="text-purple-400 text-sm font-semibold">{service.aiScore}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and ROI */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-slate-700/30 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400 text-xs">Our Price</span>
                          </div>
                          <div className="text-white font-bold">{service.price}</div>
                          <div className="text-gray-400 text-xs">Market: {service.marketPrice}</div>
                        </div>
                        <div className="bg-slate-700/30 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-400 text-xs">ROI</span>
                          </div>
                          <div className="text-white font-bold">{service.roi}</div>
                          <div className="text-gray-400 text-xs">Setup: {service.setupTime}</div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Key Features
                        </h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-cyan-400 text-xs mt-2">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-pink-400" />
                          Use Cases
                        </h4>
                        <div className="space-y-1">
                          {service.useCases.slice(0, 2).map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                              <span className="text-gray-300">{useCase}</span>
                            </div>
                          ))}
                          {service.useCases.length > 2 && (
                            <div className="text-pink-400 text-xs mt-2">
                              +{service.useCases.length - 2} more use cases
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-cyan-400" />
                          Contact Info
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-gray-400" />
                            <a href={`tel:${service.contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                              {service.contactInfo.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-gray-400" />
                            <a href={`mailto:${service.contactInfo.email}`} className="text-pink-400 hover:text-pink-300">
                              {service.contactInfo.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-slate-700/30 border-t border-slate-600/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>Setup: {service.setupTime}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                          onClick={() => window.location.href = `/contact?service=${service.id}`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🚀 Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses already leveraging our AI-powered micro SAAS solutions. 
                Get started today with transparent pricing, expert support, and proven ROI.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
                  <div className="text-cyan-400 text-3xl mb-2">💰</div>
                  <h3 className="text-white font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-300 text-sm">Starting at $99/month with no hidden fees</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30">
                  <div className="text-pink-400 text-3xl mb-2">📈</div>
                  <h3 className="text-white font-semibold mb-2">Proven ROI</h3>
                  <p className="text-gray-300 text-sm">Average 300% ROI within 6 months</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
                  <div className="text-purple-400 text-3xl mb-2">⚡</div>
                  <h3 className="text-white font-semibold mb-2">Quick Setup</h3>
                  <p className="text-gray-300 text-sm">Deploy in 24-48 hours with expert support</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl mx-auto mb-8">
                <h3 className="text-white font-semibold text-lg mb-4">📞 Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="text-cyan-400 w-4 h-4" />
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="text-pink-400 w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="text-purple-400 w-4 h-4" />
                    <span className="text-gray-300">Middletown, DE</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  🌐 Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  📞 Contact Sales Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  onClick={() => window.location.href = '/schedule-demo'}
                >
                  📅 Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}