import React, { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Star, Mail, Phone, MapPin, Sparkles, Brain, Cpu, Zap, Grid, List, ExternalLink, Rocket, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { Layout } from '../components/layout/Layout';
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services';
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure';
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas';

export default function Revolutionary2025ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'popularity' | 'newest'>('popularity');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ];

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
        return true;
      });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Statistics
  const stats = {
    totalServices: allRevolutionaryServices.length,
    totalCustomers: allRevolutionaryServices.reduce((sum, service) => sum + service.customers, 0),
    averageRating: (allRevolutionaryServices.reduce((sum, service) => sum + service.rating, 0) / allRevolutionaryServices.length).toFixed(1),
    totalRevenue: allRevolutionaryServices.reduce((sum, service) => {
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      return sum + (price * service.customers);
    }, 0)
  };

  return (
    <Layout>
      <UltraQuantumHolographicBackground intensity={2.0}>
        <div className="min-h-screen">
        <Head>
          <title>Revolutionary 2025 Services Showcase - Zion Tech Group | Cutting-Edge AI & IT Solutions</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services including AI consciousness simulation, quantum computing, zero trust security, and innovative micro SaaS solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI consciousness, quantum computing, zero trust security, edge computing, 5G networks, neuromorphic computing, AI branding, holographic events, mental health AI, creative AI" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Revolutionary 2025 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, quantum computing, and IT infrastructure services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code,
  Phone, Mail, MapPin, ExternalLink, ChevronDown,
  Award, Target, Zap as ZapIcon, Globe as GlobeIcon
} from 'lucide-react';

// Import the new revolutionary services
import { revolutionary2025Services } from '../data/revolutionary-2025-innovative-services';
import { revolutionary2025ITServices } from '../data/revolutionary-2025-it-infrastructure';

const allServices = [...revolutionary2025Services, ...revolutionary2025ITServices];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI Consciousness & Emotional Intelligence',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: allServices.filter(s => s.category.includes('AI Consciousness') || s.category.includes('Healthcare AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-blue-500 to-cyan-500',
    services: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('DNA Computing')),
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'space-tech',
    title: '🚀 Space Technology & Satellite',
    description: 'Space mission management and satellite operations',
    icon: Rocket,
    color: 'from-indigo-500 to-blue-500',
    services: allServices.filter(s => s.category.includes('Space Technology')),
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 'cybersecurity',
    title: '🔒 Next-Generation Cybersecurity',
    description: 'Quantum encryption and AI threat detection',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    services: allServices.filter(s => s.category.includes('Cybersecurity')),
    gradient: 'from-red-500/20 to-pink-500/20'
  },
  {
    id: 'cloud-infrastructure',
    title: '☁️ Quantum Cloud & Infrastructure',
    description: 'Quantum-enhanced cloud computing and infrastructure',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    services: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')),
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'fintech',
    title: '🏦 Financial Technology Revolution',
    description: 'AI-powered trading and quantum risk management',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    services: allServices.filter(s => s.category.includes('Financial Technology')),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'industrial-iot',
    title: '🏭 Industrial IoT & Smart Manufacturing',
    description: 'Zero downtime manufacturing and predictive maintenance',
    icon: Building2,
    color: 'from-gray-500 to-slate-500',
    services: allServices.filter(s => s.category.includes('Industrial IoT')),
    gradient: 'from-gray-500/20 to-slate-500/20'
  },
  {
    id: 'edtech',
    title: '🎓 Education Technology Revolution',
    description: 'AI-powered personalized learning and 10x faster knowledge acquisition',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    services: allServices.filter(s => s.category.includes('Education Technology')),
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'sustainability',
    title: '🌱 Sustainability & Green Technology',
    description: 'AI-powered environmental solutions for carbon neutrality',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    services: allServices.filter(s => s.category.includes('Sustainability')),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'logistics',
    title: '🚛 Logistics & Supply Chain',
    description: '99.9% delivery accuracy and zero waste supply chain',
    icon: Package,
    color: 'from-orange-500 to-red-500',
    services: allServices.filter(s => s.category.includes('Logistics')),
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export default function Revolutionary2025ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover the most innovative micro SAAS services, IT solutions, and AI platforms of 2025. Revolutionary technology with real implementation and proven ROI." />
        <meta name="keywords" content="AI services, quantum computing, cybersecurity, cloud infrastructure, fintech, healthcare AI, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
          
          <div className="container mx-auto relative z-10">
>>>>>>> origin/auto/autonomy-17186719616
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Revolutionary 2025 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our cutting-edge AI, quantum computing, and IT infrastructure services. 
                Transform your business with solutions that were once only science fiction.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30"
                >
                  <div className="text-3xl font-bold text-blue-400">{stats.totalServices}</div>
                  <div className="text-sm text-gray-400">Revolutionary Services</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30"
                >
                  <div className="text-3xl font-bold text-green-400">{stats.totalCustomers.toLocaleString()}+</div>
                  <div className="text-sm text-gray-400">Active Customers</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
                >
                  <div className="text-3xl font-bold text-purple-400">{stats.averageRating}</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30"
                >
                  <div className="text-3xl font-bold text-orange-400">${(stats.totalRevenue / 1000000).toFixed(1)}M+</div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us: {contactInfo.mobile}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/20"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {contactInfo.email}
                </Button>
=======
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary 2025 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover the most innovative micro SAAS services, IT solutions, and AI platforms that are reshaping industries and creating unprecedented value.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300">Real Implementation</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300">Proven ROI</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Market Leaders</span>
                </div>
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Filter and Controls */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white'
                        : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-400'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-400'
                    }`}
                  >
                    <List className="w-5 h-5" />
=======
        {/* Search and Filter Section */}
        <section className="py-8 px-4 border-b border-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                  >
                    <option value="all">All Categories</option>
                    {serviceCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title.split(' ').slice(1).join(' ')}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* Sort Filter */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="customers">Most Customers</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
>>>>>>> origin/auto/autonomy-17186719616
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid/List */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={`${selectedCategory}-${viewMode}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`group relative ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105'
                      : 'bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300'
                  }`}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                      <div className="text-gray-400">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold">{service.trialDays} days</div>
                      <div className="text-gray-400">Free Trial</div>
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                    <h4 className="text-xs font-semibold text-gray-300 mb-1">Market Position:</h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{service.marketPosition}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/20"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
=======
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> revolutionary services
                {selectedCategory !== 'all' && (
                  <> in <span className="text-white font-semibold">{serviceCategories.find(c => c.id === selectedCategory)?.title.split(' ').slice(1).join(' ')}</span></>
                )}
              </p>
            </div>

            {/* Services Grid */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 rounded-2xl p-6 h-full backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}

                        {/* Service Icon */}
                        <div className="text-4xl mb-4">{service.icon}</div>

                        {/* Service Title */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {service.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {service.tagline}
                        </p>

                        {/* Price */}
                        <div className="text-3xl font-bold text-white mb-4">
                          {service.price}
                          <span className="text-lg text-gray-400 font-normal">{service.period}</span>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-semibold text-purple-400">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Data */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">Market Size</div>
                            <div className="text-sm text-gray-200">{service.marketSize}</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">Growth Rate</div>
                            <div className="text-sm text-gray-200">{service.growthRate}</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mb-4">
                          <Link href={service.link} target="_blank" rel="noopener noreferrer">
                            <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm">
                              <ExternalLink className="w-4 h-4 mr-2 inline" />
                              Learn More
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm">
                              Contact
                            </button>
                          </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex items-center gap-2 text-purple-400">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                              {service.contactInfo.mobile}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-blue-400">
                            <Mail className="w-3 h-3" />
                            <a href={`mailto:${service.contactInfo.email}`} className="hover:text-white">
                              {service.contactInfo.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 rounded-xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{service.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                                {service.popular && (
                                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 text-sm">{service.tagline}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {service.features.slice(0, 4).map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-blue-400 mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technology.slice(0, 6).map((tech, techIndex) => (
                                  <span key={techIndex} className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-80 space-y-4">
                          {/* Price */}
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                              {service.price}
                              <span className="text-lg text-gray-400 font-normal">{service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400">30-day free trial</div>
                          </div>

                          {/* Market Data */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-400 mb-1">Market Size</div>
                              <div className="text-sm text-gray-200">{service.marketSize}</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                              <div className="text-xs text-gray-400 mb-1">Growth Rate</div>
                              <div className="text-sm text-gray-200">{service.growthRate}</div>
                            </div>
                          </div>

                          {/* ROI */}
                          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                            <div className="text-xs text-green-400 mb-1">Expected ROI</div>
                            <div className="text-sm text-green-300">{service.roi}</div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-3">
                            <Link href={service.link} target="_blank" rel="noopener noreferrer">
                              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                                <ExternalLink className="w-4 h-4 mr-2 inline" />
                                Learn More
                              </button>
                            </Link>
                            <Link href="/contact">
                              <button className="w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                                Contact Sales
                              </button>
                            </Link>
                          </div>

                          {/* Contact Info */}
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-purple-400">
                              <Phone className="w-3 h-3" />
                              <a href={`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                                {service.contactInfo.mobile}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                              <Mail className="w-3 h-3" />
                              <a href={`mailto:${service.contactInfo.email}`} className="hover:text-white">
                                {service.contactInfo.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        </section>

        {/* Contact Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
=======
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto text-center">
>>>>>>> origin/auto/autonomy-17186719616
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already leveraging our revolutionary 2025 services. 
                Get started today with a free consultation and discover how we can help you achieve the impossible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{contactInfo.mobile}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-400">{contactInfo.email}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 text-sm">{contactInfo.address}</p>
=======
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-3">{contactInfo.mobile}</p>
                  <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="text-purple-400 hover:text-purple-300">
                    Call Now →
                  </a>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-3">{contactInfo.email}</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                    Send Email →
                  </a>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-3 text-sm">{contactInfo.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    Get Directions →
                  </a>
>>>>>>> origin/auto/autonomy-17186719616
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Transformation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/20"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
=======
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Start Your Transformation
                  </button>
                </Link>
                <Link href={contactInfo.website}>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-lg">
                    Visit Website
                  </button>
                </Link>
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
              </div>
      </UltraQuantumHolographicBackground>
    </Layout>
=======
      </div>
    </>
>>>>>>> origin/auto/autonomy-17186719616
  );
}