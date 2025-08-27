import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Leaf,
  Car,
  Heart,
  Scale,
  Eye,
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';
export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Infrastructure', name: 'DevOps & Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-rose-500 to-pink-500' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', icon: Zap, color: 'from-amber-500 to-yellow-500' }
  ];
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return a.innovationLevel === 'Cutting-edge' ? -1 : 1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
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
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
      {/* Header Section */}
      <motion.div 
        className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Innovative Services 2026
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover cutting-edge micro SAAS solutions that transform industries and drive innovation. 
            From AI-powered platforms to quantum-safe cybersecurity, we deliver the future of technology.
          </motion.p>
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Filters and Search */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="innovation">Sort by Innovation Level</option>
                  <option value="price">Sort by Price</option>
                  <option value="roi">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Services Grid */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Innovation Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Cutting-edge' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : service.innovationLevel === 'Advanced'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {/* Price and ROI */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400 ml-1">/{service.pricingModel}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">ROI</div>
                    <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                  </div>
                </div>
                {/* Market Price */}
                <div className="text-sm text-gray-400 mb-4">
                  Market Price: {service.marketPrice}
                </div>
                {/* Features Preview */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-xs text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Contact and Learn More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Call to Action */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success. 
              Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-xl font-semibold border border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
