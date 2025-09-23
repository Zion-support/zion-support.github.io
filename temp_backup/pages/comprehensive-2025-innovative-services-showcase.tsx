<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Atom, Shield, Zap, TrendingUp, Globe, 
  Rocket, Lock, Palette, Factory, Database, Cloud, 
  Cpu, Eye, Target, Users, BarChart3
} from 'lucide-react';
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';

const Comprehensive2025InnovativeServicesShowcase: React.FC = () => {
  const categories = [
    { name: 'AI & Marketing', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum & Finance', icon: Atom, color: 'from-cyan-500 to-blue-500' },
    { name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { name: 'Metaverse & AI', icon: Globe, color: 'from-green-500 to-teal-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { name: 'Supply Chain & AI', icon: Factory, color: 'from-yellow-500 to-orange-500' },
    { name: 'Quantum & Healthcare', icon: Cpu, color: 'from-violet-500 to-purple-500' },
    { name: 'AI & Creativity', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { name: 'AI & Robotics', icon: Database, color: 'from-emerald-500 to-green-500' }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Star;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <SEO 
        title="2025 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 innovative micro SAAS services, IT solutions, and AI platforms. Quantum computing, space technology, and autonomous systems."
        keywords={[
          'innovative services 2025',
          'micro SAAS',
          'quantum computing',
          'space technology',
          'AI platforms',
          'autonomous systems'
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-1500"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Enhanced Company Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
            >
              <Star className="w-5 h-5" />
              <span>Innovation Leader 2025</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Innovative Services
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge micro SAAS services, quantum computing solutions, and autonomous AI platforms
            </p>
            
            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
                <div className="text-gray-300 text-sm">Innovative Services</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>
                <div className="text-gray-300 text-sm">Quantum Solutions</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
                <div className="text-gray-300 text-sm">Autonomous Operations</div>
              </div>
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">∞</div>
                <div className="text-gray-300 text-sm">Future Possibilities</div>
              </div>
            </motion.div>
=======
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Globe,
  Search, Grid, List, Star as StarIcon,
  Phone, Mail, MapPin
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion';
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services';

export default function Comprehensive2025InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'enterprise'>('all');

  // Combine all services
  const allServices = [...comprehensiveInnovativeServices, ...specializedEnterpriseServices];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Financial Technology', name: 'FinTech', count: allServices.filter(s => s.category.includes('Financial')).length },
    { id: 'Education Technology', name: 'EdTech', count: allServices.filter(s => s.category.includes('Education')).length },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'Energy & Sustainability', name: 'Energy', count: allServices.filter(s => s.category.includes('Energy')).length },
    { id: 'Advanced AI & Consciousness', name: 'AI Consciousness', count: allServices.filter(s => s.category.includes('Consciousness')).length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Space Technology', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'Neural Technology & BCI', name: 'Neural Tech', count: allServices.filter(s => s.category.includes('Neural')).length },
    { id: 'Advanced IoT & Edge Computing', name: 'Advanced IoT', count: allServices.filter(s => s.category.includes('Advanced IoT')).length },
    { id: 'Advanced Analytics & AI', name: 'Advanced Analytics', count: allServices.filter(s => s.category.includes('Advanced Analytics')).length }
  ];

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice < 1000) return 'budget';
    if (numPrice < 5000) return 'mid';
    return 'enterprise';
  };

  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesPrice = priceRange === 'all' || getPriceRange(service.price) === priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our extensive collection of cutting-edge micro SAAS services, AI solutions, 
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{allServices.filter(s => s.popular).length}</div>
                <div className="text-white/60">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{allServices.filter(s => s.realService).length}</div>
                <div className="text-white/60">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{allServices.filter(s => s.rating >= 4.5).length}</div>
                <div className="text-white/60">Top Rated</div>
              </div>
            </div>
>>>>>>> origin/auto/autonomy-17186719616
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Categories */}
      <section className="py-20 px-4 bg-black/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our comprehensive range of innovative services across cutting-edge technology domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <div className="text-gray-300 text-sm">
                        {innovative2025MicroSaasBatch.filter(service => service.category === category.name).length} Services
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our most popular and innovative services that are transforming industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovative2025MicroSaasBatch.filter(service => service.popular).map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-4xl`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {service.price}<span className="text-lg text-gray-400">/{service.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Market Info */}
                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <div className="text-xs text-gray-400">
                        Market Price: <span className="text-green-400">{service.marketPrice}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Category: <span className="text-cyan-400">{service.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 bg-black/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our entire collection of innovative services designed for the future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovative2025MicroSaasBatch.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-2xl flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1 truncate">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{service.tagline}</p>
                        <div className="text-cyan-400 font-semibold text-sm">
                          {service.price}<span className="text-gray-400">/{service.period}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
=======
      {/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $999)</option>
                  <option value="mid">Mid-Range ($1,000 - $4,999)</option>
                  <option value="enterprise">Enterprise ($5,000+)</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">View Mode</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-white/60">
                Showing results for &quot;{searchTerm || 'all services'}&quot; in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Card Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`text-3xl ${service.color.includes('from-') ? '' : service.color}`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-sm text-white/60">{service.tagline}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white/70 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-white/40">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price and Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-sm text-white/60">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white/70">{service.rating}</span>
                          <span className="text-xs text-white/50">({service.reviews})</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm font-medium text-center transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="px-4 py-2 border border-white/20 hover:border-cyan-400/50 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-white/10"
                        >
                          Contact
                        </a>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-4 text-xs text-white/50">
                          <div>
                            <span className="block text-white/70">Setup Time:</span>
                            {service.setupTime}
                          </div>
                          <div>
                            <span className="block text-white/70">Trial:</span>
                            {service.trialDays} days
                          </div>
                          <div>
                            <span className="block text-white/70">Customers:</span>
                            {service.customers}+
                          </div>
                          <div>
                            <span className="block text-white/70">ROI:</span>
                            <span className="text-green-400">{service.roi.split(' ').slice(0, 3).join(' ')}...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
>>>>>>> origin/auto/autonomy-17186719616
        </div>
      </section>

      {/* Contact CTA */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
=======
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Consultation Request`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us directly:</p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <span>{contactInfo.mobile}</span>
                <span>{contactInfo.email}</span>
                <span>{contactInfo.address}</span>
              </div>
>>>>>>> origin/auto/autonomy-17186719616
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
  );
};

export default Comprehensive2025InnovativeServicesShowcase;
=======

      <EnhancedFooter />
    </div>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
