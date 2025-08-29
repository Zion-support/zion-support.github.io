import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Car,
  Microscope,
  Atom,
  Satellite,
  Dna,
  Eye,
  Gauge,
  Palette,
  Building2,
  Carrot,
  Lightbulb,
  Wifi,
  Server,
  Key,
  Smartphone as Mobile
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030, PRICING_INSIGHTS_2030 } from '../data/comprehensivePricingGuide2030';

export default function ComprehensiveServicesLanding2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Autonomous Systems', name: 'AI & Autonomous Systems', icon: '🚗', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Environmental Tech', name: 'AI & Environmental Tech', color: 'from-teal-500 to-green-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: '🏠', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Operations', name: 'AI & Operations', icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Research', name: 'AI & Research', icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Development', name: 'AI & Development', icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: '🏗️', color: 'from-slate-500 to-gray-500' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: '🚀', color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category?.icon || '🔧';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category?.color || 'from-gray-500 to-slate-500';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services 2030 - Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge micro SAAS, IT infrastructure, and AI services for 2030. Transform your business with innovative technology solutions."
        keywords="comprehensive services, micro SAAS, IT services, AI services, 2030, technology solutions, business transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  2030
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Discover our complete portfolio of {SERVICE_STATISTICS_2030.totalServices} cutting-edge services across {SERVICE_STATISTICS_2030.totalCategories} categories. 
                From AI-powered solutions to emerging technologies, we deliver innovation that drives real business value.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            {/* Services Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8"
            >
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{SERVICE_STATISTICS_2030.totalServices}</div>
                <div className="text-sm text-slate-300">Total Services</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-purple-400 mb-2">{SERVICE_STATISTICS_2030.totalCategories}</div>
                <div className="text-sm text-slate-300">Categories</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-green-400 mb-2">{SERVICE_STATISTICS_2030.aiServices}</div>
                <div className="text-sm text-slate-300">AI Services</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{SERVICE_STATISTICS_2030.emergingTechServices}</div>
                <div className="text-sm text-slate-300">Emerging Tech</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
                <div className="text-2xl font-bold text-orange-400 mb-2">${PRICING_INSIGHTS_2030.averagePrice.toLocaleString()}</div>
                <div className="text-sm text-slate-300">Avg. Price</div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3 max-h-32 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover Our Services
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of innovative solutions designed to transform your business operations and drive growth.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="bg-slate-800/50 rounded-xl border border-slate-600 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-white text-xl`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">
                        {service.availability}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-400">
                        ROI: {service.roi}
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-300">Try adjusting your search or category filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team of experts to discuss how our innovative services can drive your business forward in 2030 and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              
              <div className="mt-8 text-sm text-slate-400">
                <p>Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}