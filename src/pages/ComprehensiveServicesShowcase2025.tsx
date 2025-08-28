import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  MapPin,
  Infinity,
  Atom,
  Eye,
  PenTool,
  Building,
  Car,
  Factory,
  City,
  Home,
  Truck,
  Gauge,
  GitFork,
  Key,
  Scale,
  Building2,
  Play,
  MailIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSAASServices2025';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data/comprehensivePricingGuide2025';

export default function ComprehensiveServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedService, setSelectedService] = useState(null);
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Education', name: 'AI & Education', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Research', name: 'AI & Research', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
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
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return Brain;
      case 'AI & Marketing': return TrendingUp;
      case 'Cybersecurity': return Shield;
      case 'AI & Healthcare': return Heart;
      case 'Blockchain & Web3': return Globe;
      case 'AI & Legal Tech': return Scale;
      case 'AI & Education': return Users;
      case 'AI & Entertainment': return Play;
      case 'AI & Research': return Search;
      case 'AI & Green Tech': return Leaf;
      case 'AI & Metaverse': return Globe2;
      case 'AI & Space Tech': return Rocket;
      case 'AI & Operations': return Settings;
      case 'AI & Development': return Code;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return 'from-purple-500 to-pink-500';
      case 'AI & Marketing': return 'from-green-500 to-emerald-500';
      case 'Cybersecurity': return 'from-red-500 to-orange-500';
      case 'AI & Healthcare': return 'from-pink-500 to-red-500';
      case 'Blockchain & Web3': return 'from-yellow-500 to-orange-500';
      case 'AI & Legal Tech': return 'from-blue-500 to-indigo-500';
      case 'AI & Education': return 'from-blue-500 to-indigo-500';
      case 'AI & Entertainment': return 'from-purple-500 to-pink-500';
      case 'AI & Research': return 'from-purple-500 to-violet-500';
      case 'AI & Green Tech': return 'from-green-500 to-emerald-500';
      case 'AI & Metaverse': return 'from-purple-500 to-indigo-500';
      case 'AI & Space Tech': return 'from-indigo-500 to-purple-500';
      case 'AI & Operations': return 'from-gray-500 to-slate-500';
      case 'AI & Development': return 'from-cyan-500 to-blue-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology offerings for 2025. Transform your business with our revolutionary solutions."
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
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology offerings that will transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                onClick={() => setShowPricingModal(true)}
              >
                View Pricing Guide
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Market Overview 2025</h2>
            <p className="text-xl text-gray-300">The technology landscape is evolving rapidly</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{COMPREHENSIVE_PRICING_GUIDE_2025.marketOverview.totalMarketSize}</div>
              <p className="text-blue-100">Total Market Size</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{COMPREHENSIVE_PRICING_GUIDE_2025.marketOverview.growthRate}</div>
              <p className="text-green-100">Growth Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">500%+</div>
              <p className="text-purple-100">Average ROI</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>
              
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                  />
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => {
                const IconComponent = getCategoryIcon(service.category);
                const categoryColor = getCategoryColor(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                        <span className="text-gray-400">({service.reviewCount})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.availability}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        AI Score: <span className="text-cyan-400 font-semibold">{service.aiScore}%</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team of experts to discuss how our innovative solutions can drive your success in 2025.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                onClick={() => window.location.href = '/request-quote'}
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">{selectedService.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <div className="space-y-2">
                    {selectedService.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Technical Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400">AI Score:</span>
                      <div className="text-cyan-400 font-semibold">{selectedService.aiScore}%</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Setup Time:</span>
                      <div className="text-white">{selectedService.setupTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-green-400 font-semibold">{selectedService.roi}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <div className="text-white">{selectedService.marketPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Pricing</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {selectedService.currency}{selectedService.price.toLocaleString()}
                  </div>
                  <div className="text-gray-300 mb-4">{selectedService.availability}</div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Full platform access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Training & onboarding</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    onClick={() => window.location.href = '/request-quote'}
                  >
                    Get Started
                  </motion.button>
                </div>
                
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{selectedService.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{selectedService.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <a 
                        href={selectedService.contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pricing Guide Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">Comprehensive Pricing Guide 2025</h2>
              <button
                onClick={() => setShowPricingModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Market Overview</h3>
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {COMPREHENSIVE_PRICING_GUIDE_2025.marketOverview.totalMarketSize}
                    </div>
                    <div className="text-gray-300">Total Market Size</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-2">
                      {COMPREHENSIVE_PRICING_GUIDE_2025.marketOverview.growthRate}
                    </div>
                    <div className="text-gray-300">Growth Rate</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Pricing Tiers</h3>
                <div className="space-y-4">
                  {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.pricingTiers).map(([key, tier]) => (
                    <div key={key} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-semibold text-white">{tier.name}</h4>
                        <div className="text-cyan-400 font-bold">{tier.price}</div>
                      </div>
                      <div className="text-gray-300 mb-2">{tier.targetAudience}</div>
                      <div className="text-green-400 font-semibold">{tier.roi}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Service Categories</h3>
                <div className="space-y-4">
                  {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.serviceCategories).map(([category, details]) => (
                    <div key={category} className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{category}</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Market Size:</span>
                          <div className="text-cyan-400">{details.marketSize}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Average Price:</span>
                          <div className="text-white">{details.averagePrice}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">ROI:</span>
                          <div className="text-green-400">{details.roi}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Model:</span>
                          <div className="text-gray-300">{details.pricingModel}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                onClick={() => window.location.href = '/request-quote'}
              >
                Request Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
