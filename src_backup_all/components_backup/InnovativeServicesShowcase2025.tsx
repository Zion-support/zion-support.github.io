import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  BarChart3, 
  Briefcase,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  Zap,
  Lock,
  Database,
  Users,
  TrendingUp,
  Globe,
  Cpu,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Target,
  Award,
  Code,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Network,
  Clock,
  X
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, INNOVATIVE_SERVICE_CATEGORIES_2025, INNOVATIVE_SERVICE_SUBCATEGORIES_2025, INNOVATIVE_PRICING_TIERS_2025, INNOVATIVE_CONTACT_INFO_2025, INNOVATIVE_SERVICE_GUARANTEES_2025 } from '@/data/innovativeServices2025';

export default function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'name'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = ['all', ...Object.keys(INNOVATIVE_SERVICE_CATEGORIES_2025)];

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'price':
        aValue = a.price;
        bValue = b.price;
        break;
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'aiScore':
        aValue = a.aiScore;
        bValue = b.aiScore;
        break;
      case 'name':
        aValue = a.title;
        bValue = b.title;
        break;
      default:
        aValue = a.title;
        bValue = b.title;
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getCategoryIcon = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return INNOVATIVE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{INNOVATIVE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    if (category === 'all') return 'from-cyan-500 to-blue-500';
    return INNOVATIVE_SERVICE_CATEGORIES_2025[category]?.color || 'from-gray-500 to-slate-500';
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Matrix Rain Background Effect */}
      <div className="matrix-rain"></div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="futuristic-heading text-5xl md:text-7xl mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="futuristic-subheading text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="futuristic-btn inline-flex items-center px-8 py-4"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </motion.button>
              <motion.a
                href={`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.phone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.email}</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category)}
                    <span className="capitalize">{category === 'all' ? 'All' : category}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* View Mode and Sort Controls */}
            <div className="flex gap-2">
              <div className="flex bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [newSortBy, newSortOrder] = e.target.value.split('-');
                  setSortBy(newSortBy as any);
                  setSortOrder(newSortOrder as any);
                }}
                className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="name-desc">Name (A-Z)</option>
                <option value="name-asc">Name (Z-A)</option>
                <option value="price-asc">Price (Low-High)</option>
                <option value="price-desc">Price (High-Low)</option>
                <option value="rating-desc">Rating (High-Low)</option>
                <option value="aiScore-desc">AI Score (High-Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-4'}>
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={viewMode === 'grid' ? 'futuristic-card p-6' : 'futuristic-card p-6'}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <span className="text-sm text-gray-400 capitalize">{service.category}</span>
                          <p className="text-xs text-gray-500 capitalize">{service.subcategory}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">AI Score:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                              style={{ width: `${service.aiScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-cyan-400 font-semibold">{service.aiScore}%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Market Price:</span>
                        <span className="text-sm text-green-400">{service.marketPrice}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">ROI:</span>
                        <span className="text-sm text-yellow-400">{service.roi}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal(service)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-sm text-gray-400 capitalize">{service.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span>AI Score: <span className="text-cyan-400 font-semibold">{service.aiScore}%</span></span>
                        <span>Market Price: <span className="text-green-400">{service.marketPrice}</span></span>
                        <span>ROI: <span className="text-yellow-400">{service.roi}</span></span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-3">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openServiceModal(service)}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filter</p>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
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
              className="futuristic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                      {getCategoryIcon(selectedService.category)}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="capitalize">{selectedService.category}</span>
                        <span>•</span>
                        <span className="capitalize">{selectedService.subcategory}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{selectedService.rating}</span>
                          <span>({selectedService.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Service Overview</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">AI Score:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-700 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                              style={{ width: `${selectedService.aiScore}%` }}
                            ></div>
                          </div>
                          <span className="text-cyan-400 font-semibold">{selectedService.aiScore}%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-green-400 font-semibold">{selectedService.marketPrice}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-yellow-400 font-semibold">{selectedService.roi}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                        {selectedService.currency}{selectedService.price.toLocaleString()}
                      </h3>
                      <p className="text-gray-400 mb-4">One-time setup fee</p>
                      
                      <div className="space-y-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full futuristic-btn py-3"
                          onClick={() => window.open(`mailto:${INNOVATIVE_CONTACT_INFO_2025.email}?subject=Inquiry about ${selectedService.title}`, '_blank')}
                        >
                          Get Started
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                          onClick={() => window.open(`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`, '_blank')}
                        >
                          Call for Quote
                        </motion.button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Integrations</h4>
                      <div className="space-y-2">
                        {selectedService.integrations.map((integration: string) => (
                          <div key={integration} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm">{integration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Competitors</h4>
                      <div className="space-y-2">
                        {selectedService.competitors.map((competitor: string) => (
                          <div key={competitor} className="flex items-center gap-2 text-gray-300">
                            <Target className="w-4 h-4 text-red-400" />
                            <span className="text-sm">{competitor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Guarantees Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="futuristic-heading text-4xl mb-4">Our Guarantees</h2>
          <p className="futuristic-subheading text-xl">We stand behind every service with comprehensive guarantees</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(INNOVATIVE_SERVICE_GUARANTEES_2025).map(([key, value]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              className="futuristic-card p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{key}</h3>
              <p className="text-gray-300">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="futuristic-card p-8 text-center">
          <h2 className="futuristic-heading text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="futuristic-subheading text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our innovative services can drive your business forward and deliver exceptional ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${INNOVATIVE_CONTACT_INFO_2025.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="futuristic-btn inline-flex items-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {INNOVATIVE_CONTACT_INFO_2025.phone}
            </motion.a>
            
            <motion.a
              href={`mailto:${INNOVATIVE_CONTACT_INFO_2025.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </motion.a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">{INNOVATIVE_CONTACT_INFO_2025.hours}</p>
            <p className="text-cyan-400 font-semibold">{INNOVATIVE_CONTACT_INFO_2025.emergency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}