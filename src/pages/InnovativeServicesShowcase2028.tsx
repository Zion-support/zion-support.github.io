import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
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
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  Target, 
  CheckCircle, 
  TrendingUp,
  Atom,
  Sparkles,
  Flame,
  Infinity,
  Crown,
  Award,
  ArrowRight,
  DollarSign,
  Workflow,
  Satellite,
  Dna,
  Microscope,
  Wifi,
  Activity,
  Lightbulb,
  Leaf,
  Droplets,
  Phone,
  Mail,
  CheckCircle as CheckCircleIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from '../data/innovativeMicroSaasServices2028';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2028 } from '../data/emergingTechInnovativeServices2028';

export default function InnovativeServicesShowcase2028() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2028, ...EMERGING_TECH_INNOVATIVE_SERVICES_2028];

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
        case 'innovation':
          return innovationLevels.indexOf(b.innovationLevel) - innovationLevels.indexOf(a.innovationLevel);
        case 'roi':
          return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Quantum AI': Atom,
      'AI & Automation': Brain,
      'AI & Security': Shield,
      'AI & Content': PenTool,
      'AI & Sales': Users,
      'AI & Support': Users,
      'Network Infrastructure': Network,
      'Blockchain': Lock,
      'AI & IoT': Activity,
      'Space Technology': Satellite,
      'Biotechnology': Dna,
      'Nanotechnology': Microscope,
      'Quantum Technology': Atom,
      'Neurotechnology': Brain,
      'Fusion Energy': Flame,
      'Synthetic Biology': Dna
    };
    return iconMap[category] || Zap;
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'from-purple-600 to-pink-600';
      case 'Advanced':
        return 'from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'from-green-600 to-emerald-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  const getInnovationLevelBadge = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2028 - Zion Tech Group"
        description="Discover our revolutionary 2028 innovative services including Quantum AI, Space Technology, Biotechnology, and cutting-edge emerging technologies."
        keywords="innovative services 2028, quantum AI, space technology, biotechnology, nanotechnology, brain-computer interface, fusion energy, synthetic biology"
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovative Services Showcase 2028
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our revolutionary services spanning Quantum AI, 
            Space Technology, Biotechnology, and cutting-edge emerging technologies
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
              <div className="text-gray-300">Total Services</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">$2.5B+</div>
              <div className="text-gray-300">Market Value</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">800%</div>
              <div className="text-gray-300">Max ROI</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Innovation Level Filter */}
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="innovation" className="bg-slate-800 text-white">Sort by Innovation</option>
                <option value="price" className="bg-slate-800 text-white">Sort by Price</option>
                <option value="roi" className="bg-slate-800 text-white">Sort by ROI</option>
                <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center mt-6">
              <div className="bg-white/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  List View
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              Discover our cutting-edge solutions for the future
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                        {React.createElement(getCategoryIcon(service.category), { 
                          className: "w-6 h-6 text-cyan-400" 
                        })}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelBadge(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price and ROI */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">ROI</div>
                        <div className="text-lg font-bold text-green-400">{service.roi}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300 border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-400">
                          <div>Phone: {service.contactInfo.phone}</div>
                          <div>Email: {service.contactInfo.email}</div>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                          {React.createElement(getCategoryIcon(service.category), { 
                            className: "w-8 h-8 text-cyan-400" 
                          })}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getInnovationLevelBadge(service.innovationLevel)}`}>
                              {service.innovationLevel}
                            </div>
                          </div>
                          <p className="text-gray-300 text-lg">{service.description}</p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300 border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Price and ROI */}
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400 mb-2">per month</div>
                        <div className="text-lg font-bold text-green-400">{service.roi} ROI</div>
                      </div>

                      {/* Market Info */}
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                        <div className="text-sm text-gray-400 mb-2">Market Price</div>
                        <div className="text-lg font-bold text-white mb-2">{service.marketPrice}</div>
                        <div className="text-sm text-gray-400 mb-2">Market Size</div>
                        <div className="text-lg font-bold text-purple-400">{service.marketSize}</div>
                      </div>

                      {/* Contact and CTA */}
                      <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                        <div className="text-sm text-gray-400 mb-2">Contact</div>
                        <div className="text-xs text-gray-300 mb-3">
                          <div>{service.contactInfo.phone}</div>
                          <div>{service.contactInfo.email}</div>
                        </div>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative services. 
              Contact us today to discuss your needs and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-lg font-semibold border border-white/30">
                <Mail className="w-5 h-5 mr-2" />
                Email kleber@ziontechgroup.com
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}