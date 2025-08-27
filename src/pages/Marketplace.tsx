import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Search,
  Filter,
  Grid,
  List,
  Sparkles,
  Brain,
  Cloud,
  Lock,
  Globe,
  Heart,
  Rocket,
  Code,
  Users,
  Building,
  BarChart3,
  MessageCircle,
  Eye,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ALL_ENHANCED_SERVICES } from '../data/enhancedMicroSaasServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export default function Marketplace() {
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, and solutions..."
                  className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
                />
              </div>
              <button className="px-6 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="flex border border-zion-cyan/20 rounded-lg overflow-hidden">
                <button className="px-3 py-3 bg-zion-cyan/20 text-zion-cyan border-r border-zion-cyan/20">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="px-3 py-3 bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50 transition-colors">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                <p className="text-zion-slate-light text-center text-sm mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="text-zion-cyan text-sm">{category.count} products</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://via.placeholder.com/400x300/1f2937/6b7280?text=Product+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Marketplace Coming Soon</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              We're building a comprehensive technology marketplace that will connect you with the best 
              AI solutions, cybersecurity tools, and innovative products. Sign up to be notified when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Brain,
  Shield,
  Cloud,
  Zap,
  Rocket,
  Code,
  Users,
  Globe,
  Heart,
  Leaf,
  Flask,
  Coins,
  Microscope,
  Car,
  Factory,
  Building2,
  Wifi,
  Satellite,
  Wind,
  Sun,
  Droplets,
  ShoppingCart,
  Eye,
  Bookmark,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { ALL_ENHANCED_SERVICES } from '@/data/enhancedMicroSaasServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Combine all services
  const allServices = [...ALL_ENHANCED_SERVICES, ...INNOVATIVE_MICRO_SAAS_SERVICES_2025];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue', count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: allServices.filter(s => s.category.toLowerCase().includes('cyber')).length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cloud, color: 'from-zion-blue to-zion-cyan', count: allServices.filter(s => s.category.toLowerCase().includes('infrastructure')).length },
    { id: 'green-tech', name: 'Green Technology', icon: Leaf, color: 'from-zion-green to-zion-cyan', count: allServices.filter(s => s.category.toLowerCase().includes('green')).length },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Flask, color: 'from-zion-pink to-zion-purple', count: allServices.filter(s => s.category.toLowerCase().includes('healthcare')).length },
    { id: 'fintech', name: 'Financial Technology', icon: Coins, color: 'from-zion-yellow to-zion-orange', count: allServices.filter(s => s.category.toLowerCase().includes('financial')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-purple', count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'blockchain', name: 'Blockchain', icon: Code, color: 'from-zion-purple to-zion-blue', count: allServices.filter(s => s.category.toLowerCase().includes('blockchain')).length },
    { id: 'iot', name: 'IoT & Edge', icon: Wifi, color: 'from-zion-green to-zion-cyan', count: allServices.filter(s => s.category.toLowerCase().includes('iot')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $2,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$2,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'roi', name: 'Highest ROI' }
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 2000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 2000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Sparkles;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const toggleFavorite = (serviceId: string) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <SEO 
        title="Technology Marketplace - Zion Tech Group"
        description="Explore our comprehensive marketplace of innovative micro SAAS services, IT solutions, and AI technologies. Find the perfect solution for your business needs."
        canonical="/marketplace"
        url="https://ziontechgroup.com/marketplace"
      />
      
      <div className="min-h-screen bg-futuristic relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan/20 rounded-full animate-pulse delay-3000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Neon glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-20">
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Technology Marketplace</span>
              </motion.div>

              <h1 className="heading-responsive font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Technology
                </span>
                <br />
                <span className="text-white">Marketplace</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover cutting-edge micro SAAS solutions, IT services, and AI technologies. 
                Transform your business with innovative solutions from industry experts.
              </p>
              
              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for services, technologies, or solutions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zion-slate-dark/80 border border-zion-cyan/30 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg backdrop-blur-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: allServices.length + '+', label: 'Total Services', icon: ShoppingCart, color: 'from-zion-cyan to-zion-blue' },
                  { value: categories.length - 1, label: 'Categories', icon: Sparkles, color: 'from-zion-purple to-zion-pink' },
                  { value: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-zion-green to-zion-cyan' },
                  { value: '24/7', label: 'Expert Support', icon: Users, color: 'from-zion-orange to-zion-purple' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Filters and Categories */}
        <section className="py-12 bg-zion-slate-dark/50 relative">
          <div className="container-responsive">
            {/* Category Pills */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Advanced Filters and View Controls */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-4">
                {/* Price Range Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-zion-cyan" />
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan backdrop-blur-sm"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>{range.name}</option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan backdrop-blur-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-zion-slate-light/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-zion-cyan text-zion-slate-dark' 
                        : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 w-4 h-4">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-zion-cyan text-zion-slate-dark' 
                        : 'text-zion-slate-light hover:text-white'
                    }`}
                  >
                    <div className="space-y-1 w-4 h-4">
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="text-zion-slate-light">
                Showing {sortedServices.length} of {allServices.length} services
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 bg-zion-slate-dark relative">
          <div className="container-responsive">
            <AnimatePresence mode="wait">
              {sortedServices.length > 0 ? (
                <motion.div 
                  className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className={`group relative ${viewMode === 'list' ? 'bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-2xl p-6 backdrop-blur-sm' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: viewMode === 'grid' ? -10 : 0 }}
                    >
                      {viewMode === 'grid' ? (
                        // Grid View
                        <>
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                          
                          {/* Service Card */}
                          <div className="relative bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300">
                            {/* Service Header */}
                            <div className="mb-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg`}>
                                  <getCategoryIcon(service.category) className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                                  <div className="text-sm text-zion-slate-light">per month</div>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                                {service.title}
                              </h3>
                              
                              <p className="text-zion-slate-light leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            {/* Service Details */}
                            <div className="space-y-4 mb-6">
                              {/* Category & Innovation Level */}
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-zion-cyan font-medium">{service.category}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  service.innovationLevel === 'Cutting-edge' 
                                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' 
                                    : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30'
                                }`}>
                                  {service.innovationLevel}
                                </span>
                              </div>

                              {/* ROI & Market Price */}
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1 text-zion-green">
                                  <TrendingUp className="w-4 h-4" />
                                  <span>ROI: {service.roi}</span>
                                </div>
                                <div className="text-zion-slate-light">
                                  Market: {service.marketPrice}
                                </div>
                              </div>

                              {/* Key Features */}
                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                                <div className="grid grid-cols-1 gap-1">
                                  {service.features.slice(0, 3).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Service Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                              <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{service.estimatedDelivery}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-zion-cyan" />
                                  <span>{service.supportLevel}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleFavorite(service.id)}
                                  className={`p-2 rounded-lg transition-all duration-200 ${
                                    favorites.includes(service.id)
                                      ? 'text-zion-cyan bg-zion-cyan/20'
                                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                                  }`}
                                >
                                  <Bookmark className="w-4 h-4" />
                                </button>
                                
                                <Link
                                  to={`/services/${service.id}`}
                                  className="btn-futuristic px-4 py-2 text-sm group-hover:scale-105 transition-transform duration-200"
                                >
                                  Learn More
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        // List View
                        <div className="flex items-center gap-6 p-6 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-2xl backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300">
                          <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <getCategoryIcon(service.category) className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                                {service.title}
                              </h3>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                                <div className="text-sm text-zion-slate-light">per month</div>
                              </div>
                            </div>
                            
                            <p className="text-zion-slate-light mb-3 leading-relaxed">
                              {service.description}
                            </p>
                            
                            <div className="flex items-center gap-6 text-sm">
                              <span className="text-zion-cyan font-medium">{service.category}</span>
                              <div className="flex items-center gap-1 text-zion-green">
                                <TrendingUp className="w-4 h-4" />
                                <span>ROI: {service.roi}</span>
                              </div>
                              <span className="text-zion-slate-light">Market: {service.marketPrice}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => toggleFavorite(service.id)}
                              className={`p-2 rounded-lg transition-all duration-200 ${
                                favorites.includes(service.id)
                                  ? 'text-zion-cyan bg-zion-cyan/20'
                                  : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                              }`}
                            >
                              <Bookmark className="w-4 h-4" />
                            </button>
                            
                            <Link
                              to={`/services/${service.id}`}
                              className="btn-futuristic px-4 py-2 text-sm"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-zion-slate-light mb-6">
                    Try adjusting your search criteria or browse all categories
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="btn-futuristic px-6 py-3"
                  >
                    View All Services
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 relative">
          <div className="container-responsive text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-responsive font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Get in touch with our technology experts to discuss your specific needs and discover 
                how our innovative solutions can drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="btn-futuristic px-8 py-4 text-lg group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Get Free Consultation
                </Link>
                
                <a
                  href="tel:+13024640950"
                  className="btn-neon px-8 py-4 text-lg group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Call Now: +1 302 464 0950
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-zion-slate-light">{contactInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                  <Mail className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-zion-slate-light">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                  <MapPin className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">Address</div>
                    <div className="text-sm text-zion-slate-light">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7259
  );
}
