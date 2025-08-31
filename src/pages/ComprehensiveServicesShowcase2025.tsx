import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
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
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Award,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Heart,
  Building,
  Truck,
  ShoppingCart,
  BookOpen,
  HelpCircle,
  Globe2,
  Bot,
  Workflow,
  Zap as ZapIcon,
  X
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced categories with better organization
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Automation')).length, icon: '🤖', color: 'from-purple-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Insurance')).length, icon: '💰', color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Medical')).length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Manufacturing & Logistics', name: 'Manufacturing & Logistics', count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Logistics') || s.category.includes('Supply Chain')).length, icon: '🏭', color: 'from-blue-500 to-indigo-500' },
    { id: 'Retail & E-commerce', name: 'Retail & E-commerce', count: allServices.filter(s => s.category.includes('Retail') || s.category.includes('E-commerce')).length, icon: '🛒', color: 'from-indigo-500 to-purple-500' },
    { id: 'Education & Legal', name: 'Education & Legal', count: allServices.filter(s => s.category.includes('Education') || s.category.includes('Legal')).length, icon: '📚', color: 'from-yellow-500 to-orange-500' },
    { id: 'Energy & Sustainability', name: 'Energy & Sustainability', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Sustainability')).length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'Media & Entertainment', name: 'Media & Entertainment', count: allServices.filter(s => s.category.includes('Media') || s.category.includes('Entertainment')).length, icon: '🎬', color: 'from-pink-500 to-rose-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || 
      categories.find(cat => cat.id === activeCategory)?.name.includes(service.category) ||
      service.category.includes(activeCategory);
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
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive AI & IT Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of AI-powered micro SAAS services, IT solutions, and innovative technology services. From cybersecurity to healthcare AI, we deliver cutting-edge solutions for modern businesses." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cybersecurity, healthcare AI, financial technology, manufacturing AI, retail analytics, legal AI, education technology" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Comprehensive AI & IT Services
              </span>
              <br />
              <span className="text-white">Showcase 2025</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our cutting-edge portfolio of {allServices.length}+ innovative micro SAAS services, 
              AI-powered solutions, and enterprise-grade IT services designed to transform your business
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">4.8+</div>
                <div className="text-gray-400">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">Global</div>
                <div className="text-gray-400">Coverage</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services, categories, or features..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="reviews" className="bg-gray-800 text-white">Sort by Reviews</option>
                    <option value="aiScore" className="bg-gray-800 text-white">Sort by AI Score</option>
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex-shrink-0">
                  <div className="flex bg-white/10 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Service Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Category:</span>
                          <span className="text-white text-sm font-medium">{service.category}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">AI Score:</span>
                          <span className="text-cyan-400 text-sm font-medium">{service.aiScore}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Rating:</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm ml-1">{service.rating}</span>
                            <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                            <span className="text-gray-400 text-sm ml-2">starting</span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 text-sm font-medium">{service.roi}</div>
                            <div className="text-gray-400 text-xs">ROI</div>
                          </div>
                        </div>
                        <button
                          onClick={() => openServiceModal(service)}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="p-6 flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 4).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                          <div className="text-center lg:text-right">
                            <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                            <div className="text-gray-400 text-sm">starting</div>
                          </div>
                          <div className="text-center lg:text-right">
                            <div className="text-cyan-400 text-sm font-medium">{service.aiScore}%</div>
                            <div className="text-gray-400 text-xs">AI Score</div>
                          </div>
                          <div className="text-center lg:text-right">
                            <div className="flex items-center justify-center lg:justify-end">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-sm ml-1">{service.rating}</span>
                            </div>
                            <div className="text-gray-400 text-xs">({service.reviewCount} reviews)</div>
                          </div>
                          <button
                            onClick={() => openServiceModal(service)}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <span>Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our AI-powered solutions can drive innovation and growth for your organization
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Service Details</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-white">{selectedService.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Subcategory:</span>
                          <span className="text-white">{selectedService.subcategory}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">AI Score:</span>
                          <span className="text-cyan-400">{selectedService.aiScore}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-white">{selectedService.rating}/5 ({selectedService.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Pricing & ROI</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Starting Price:</span>
                          <span className="text-white">${selectedService.price.toLocaleString()}</span>
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-center"
                      >
                        Request Quote
                      </Link>
                      <a
                        href="tel:+13024640950"
                        className="flex-1 border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
