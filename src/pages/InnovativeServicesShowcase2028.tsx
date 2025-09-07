import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
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
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Sun,
  Moon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2025 } from '../data/emergingTechInnovativeServices2025';

export default function InnovativeServicesShowcase2028() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...EMERGING_TECH_INNOVATIVE_SERVICES_2025];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Get unique innovation levels
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovationLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
        case 'innovation':
          const innovationOrder = { 'Cutting Edge': 3, 'Advanced': 2, 'Standard': 1 };
          return innovationOrder[b.innovationLevel] - innovationOrder[a.innovationLevel];
        default:
          return a.title.localeCompare(b.title);
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
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Cutting Edge':
        return 'from-purple-500 to-pink-500';
      case 'Advanced':
        return 'from-blue-500 to-cyan-500';
      case 'Standard':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'AI & Legal Tech': Shield,
      'AI & Healthcare': Heart,
      'AI & Finance': DollarSign,
      'AI & Logistics': Truck,
      'AI & Energy': Zap,
      'AI & Education': BookOpen,
      'AI & Real Estate': Building,
      'AI & Manufacturing': Cpu,
      'AI & Customer Experience': Users,
      'Blockchain & Web3': Globe,
      'Metaverse & VR/AR': Rocket,
      'Edge Computing & IoT': Cpu,
      'Quantum Computing': Atom,
      'Autonomous Systems': Target,
      'Digital Twin': Workflow,
      'Space Technology': Rocket,
      'Sustainable Technology': Sun
    };
    return iconMap[category] || Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2028 | Zion Tech Group"
        description="Discover our cutting-edge AI, blockchain, quantum computing, and emerging technology services. Transform your business with innovative solutions."
        keywords="AI services, blockchain, quantum computing, metaverse, edge computing, autonomous systems, digital twin, space technology"
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative Services
            </span>
            <br />
            <span className="text-white">Showcase 2028</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover cutting-edge AI, blockchain, quantum computing, and emerging technology services 
            that will transform your business and drive innovation in 2028 and beyond.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-cyan-300 font-semibold">{allServices.length}+</span> Innovative Services
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-green-300 font-semibold">99.9%</span> Uptime Guarantee
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-purple-300 font-semibold">24/7</span> Expert Support
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                <option value="price" className="bg-slate-800 text-white">Sort by Price</option>
                <option value="roi" className="bg-slate-800 text-white">Sort by ROI</option>
                <option value="innovation" className="bg-slate-800 text-white">Sort by Innovation</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex-shrink-0">
              <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="container mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover {filteredServices.length} Innovative Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From AI-powered solutions to cutting-edge emerging technologies
          </motion.p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group"
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 h-full"
                  variants={cardVariants}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {React.createElement(getCategoryIcon(service.category), {
                          className: "w-5 h-5 text-cyan-400"
                        })}
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                      {service.innovationLevel}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price and ROI */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">ROI</div>
                      <div className="text-lg font-bold text-green-400">{service.roi}</div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <a
                      href={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                  variants={cardVariants}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {React.createElement(getCategoryIcon(service.category), {
                              className: "w-5 h-5 text-cyan-400"
                            })}
                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                              {service.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {service.description}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                          {service.innovationLevel}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Actions */}
                    <div className="lg:w-80 flex flex-col justify-between">
                      <div>
                        {/* Price and ROI */}
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            ${service.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <div className="text-sm text-gray-400">ROI</div>
                          <div className="text-xl font-bold text-green-400">{service.roi}</div>
                        </div>

                        {/* Market Info */}
                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Market Size</div>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                          <div className="text-sm text-gray-400 mt-2">Delivery</div>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                      </div>

                      {/* Contact and Action */}
                      <div>
                        <div className="border-t border-white/10 pt-4 mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <div className="flex items-center gap-2 text-gray-400">
                              <Phone className="w-4 h-4" />
                              <span>{service.contactInfo.phone}</span>
                            </div>
                            <a
                              href={`mailto:${service.contactInfo.email}`}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        <a
                          href={`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedInnovationLevel('All');
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Connect with our team of experts to discuss how our innovative services can drive your business forward in 2028 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Get Started Today
            </a>
            <a
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg border border-white/20"
            >
              View Pricing
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}