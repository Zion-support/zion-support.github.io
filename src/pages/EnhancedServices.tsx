import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
<<<<<<< HEAD
import { ENHANCED_INNOVATIVE_SERVICES_2025 } from '../data/enhancedInnovativeServices2025';
import { SEO } from '../components/SEO';

export default function EnhancedServices() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [aiScoreRange, setAiScoreRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('enhanced-services-page');
    if (element) {
      observer.observe(element);
=======
const EnhancedServices: React.FC = () => {
  const enhancedServices = [
    {
      id: 1,
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing for complex problem solving',
      icon: Atom,
      features: ['Quantum Algorithms', 'Error Correction', 'Hybrid Systems', 'Performance Optimization'],
      useCases: ['Research Institutions', 'Financial Services', 'Pharmaceuticals', 'Government Agencies'],
      pricing: 'Starting at $50,000',
      timeline: '6-12 months'
    },
    {
      id: 2,
      title: 'Edge Computing Platform',
      description: 'Distributed computing at the network edge for real-time processing',
      icon: Cpu,
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Low Latency'],
      useCases: ['Smart Cities', 'Manufacturing', 'Healthcare', 'Autonomous Vehicles'],
      pricing: 'Starting at $35,000',
      timeline: '4-8 months'
    },
    {
      id: 3,
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized blockchain infrastructure and applications',
      icon: Shield,
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Solutions', 'Supply Chain Tracking'],
      useCases: ['Financial Services', 'Supply Chain', 'Healthcare', 'Real Estate'],
      pricing: 'Starting at $40,000',
      timeline: '3-6 months'
    },
    {
      id: 4,
      title: 'IoT Integration Platform',
      description: 'Comprehensive Internet of Things connectivity and management',
      icon: Wifi,
      features: ['Device Management', 'Data Analytics', 'Security Protocols', 'Scalable Infrastructure'],
      useCases: ['Smart Homes', 'Industrial IoT', 'Healthcare Monitoring', 'Environmental Sensing'],
      pricing: 'Starting at $30,000',
      timeline: '2-4 months'
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple', count: ENHANCED_INNOVATIVE_SERVICES_2025.length },
    { id: 'Quantum AI Services', name: 'Quantum AI', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Quantum AI Services').length },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Network className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-green-500 to-emerald-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'Cybersecurity', name: 'Security', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Green Tech & Sustainability', name: 'Green Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Green Tech & Sustainability').length },
    { id: 'Healthcare Technology', name: 'Health Tech', icon: <Heart className="h-5 w-5" />, color: 'from-pink-500 to-rose-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Healthcare Technology').length },
    { id: 'FinTech & RegTech', name: 'FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'FinTech & RegTech').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: 'Advanced Analytics & BI', name: 'Analytics', icon: <BarChart3 className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500', count: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Advanced Analytics & BI').length }
  ];
<<<<<<< HEAD

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI Services': return <Brain className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'IoT & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'Cybersecurity': return <Shield className="h-6 w-6" />;
      case 'Green Tech & Sustainability': return <Leaf className="h-6 w-6" />;
      case 'Healthcare Technology': return <Heart className="h-6 w-6" />;
      case 'FinTech & RegTech': return <DollarSign className="h-6 w-6" />;
      case 'AR/VR & Metaverse': return <Eye className="h-6 w-6" />;
      case 'Advanced Analytics & BI': return <BarChart3 className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const filteredServices = ENHANCED_INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesAiScore = service.aiScore >= aiScoreRange[0] && service.aiScore <= aiScoreRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice && matchesAiScore;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'ai-score':
        return b.aiScore - a.aiScore;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
=======
  const advancedSolutions = [
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis and predictive insights',
      benefits: ['Real-time Processing', 'Predictive Modeling', 'Automated Insights', 'Scalable Architecture']
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Advanced threat detection and security automation',
      benefits: ['Threat Prevention', 'Zero-trust Security', 'Compliance Ready', '24/7 Monitoring']
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas for simulation and optimization',
      benefits: ['Real-time Simulation', 'Predictive Maintenance', 'Performance Optimization', 'Risk Assessment']
    },
    {
      title: '5G Network Solutions',
      description: 'Next-generation wireless infrastructure and applications',
      benefits: ['High-speed Connectivity', 'Low Latency', 'Massive IoT Support', 'Network Slicing']
    }
  ];
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, neural networks, and cognitive computing'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Quantum algorithms and quantum-safe cryptography'
    },
    {
      icon: Satellite,
      title: 'Space Technology',
      description: 'Satellite communications and space-based solutions'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed computing and real-time processing'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Zero-trust architecture and threat intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Microservices, containers, and serverless computing'
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
    }
  });

  const stats = [
    { label: 'Total Services', value: ENHANCED_INNOVATIVE_SERVICES_2025.length, icon: <Sparkles className="h-6 w-6" /> },
    { label: 'Categories', value: categories.length - 1, icon: <Grid className="h-6 w-6" /> },
    { label: 'AI-Powered', value: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.aiScore >= 90).length, icon: <Brain className="h-6 w-6" /> },
    { label: 'Featured', value: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.featured).length, icon: <Star className="h-6 w-6" /> }
  ];
  return (
    <>
      <SEO 
        title="Enhanced Innovative Services - Zion Tech Group"
        description="Discover our cutting-edge portfolio of AI-powered, blockchain-enabled, and quantum-ready solutions. Transform your business with the latest technologies."
        keywords="AI services, blockchain solutions, quantum computing, cybersecurity, IoT, healthcare technology, fintech, AR/VR, analytics"
      />
      
      <div id="enhanced-services-page" className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark/80 to-zion-blue-dark/80">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Next-Generation <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Innovative Services
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                Transform your business with our cutting-edge portfolio of AI-powered, blockchain-enabled, 
                and quantum-ready solutions across cybersecurity, IoT, healthcare, and beyond.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 border border-zion-cyan/30">
                      <span className="text-zion-cyan">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="ai-score">AI Score</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-zion-slate-light hover:bg-white/20 transition-all duration-300"
              >
                <Filter className="h-5 w-5" />
                Filters
                {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </div>

            {/* Advanced Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Price Range */}
                    <div>
                      <label className="block text-zion-slate-light mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="0"
                          max="10000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* AI Score Range */}
                    <div>
                      <label className="block text-zion-slate-light mb-2">AI Score Range: {aiScoreRange[0]} - {aiScoreRange[1]}</label>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={aiScoreRange[0]}
                          onChange={(e) => setAiScoreRange([parseInt(e.target.value), aiScoreRange[1]])}
                          className="flex-1"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={aiScoreRange[1]}
                          onChange={(e) => setAiScoreRange([aiScoreRange[0], parseInt(e.target.value)])}
                          className="flex-1"
                        />
                      </div>
                    </div>
=======
        </div>
      </section>
      {/* Enhanced Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Enhanced Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced technology services that redefine what's possible
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enhancedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Ideal For:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                    <span className="text-zion-slate-light text-sm">Timeline: {service.timeline}</span>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-zion-cyan/25`
                      : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-white/40'
                  }`}
                >
                  {category.icon}
                  {category.name}
                  <span className="ml-1 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setPriceRange([0, 10000]);
                    setAiScoreRange([0, 100]);
                  }}
                  className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                  : 'space-y-6'
              }`}>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    whileHover={{ y: -5 }}
                    className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                      viewMode === 'grid' ? 'p-6' : 'p-8'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        {/* Service Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs font-medium">
                              {service.subcategory}
                            </span>
                            {service.featured && (
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Service Content */}
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                          {service.title}
                        </h3>
                        <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-4">
                          <div className="text-xs text-zion-slate-light/70 mb-2 flex items-center gap-2">
                            <Target className="h-3 w-3" />
                            Key Features:
                          </div>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                <span className="line-clamp-1">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Stack */}
                        <div className="mb-4">
                          <div className="text-xs text-zion-slate-light/70 mb-2 flex items-center gap-2">
                            <Cpu className="h-3 w-3" />
                            Tech Stack:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {service.technologyStack.slice(0, 3).map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded border border-zion-cyan/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price and Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-left">
                            <span className="text-2xl font-bold text-white">{service.currency}{service.price}</span>
                            <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-zion-slate-light">{service.rating}</span>
                            <span className="text-xs text-zion-slate-light/70">({service.reviewCount})</span>
                          </div>
                        </div>

                        {/* AI Score */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zion-slate-light">AI Intelligence Score:</span>
                            <span className="text-zion-cyan font-semibold">{service.aiScore}/100</span>
                          </div>
                          <div className="w-full bg-zion-slate-dark rounded-full h-2 mt-1">
                            <div 
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                              style={{ width: `${service.aiScore}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-4 p-3 bg-zion-slate-dark/50 rounded-lg border border-zion-slate-light/20">
                          <div className="flex items-center gap-2 text-xs text-zion-slate-light mb-2">
                            <MapPin className="h-3 w-3" />
                            {service.location}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-zion-slate-light mb-2">
                            <Clock className="h-3 w-3" />
                            {service.availability}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <Mail className="h-3 w-3" />
                            {service.contactEmail}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-2">
                          <Link
                            to={`/services/${service.id}`}
                            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <a
                            href={service.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light border border-white/20 rounded-lg transition-all duration-300 flex items-center justify-center"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </>
                    ) : (
                      // List View
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan">
                            {getCategoryIcon(service.category)}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {service.title}
                                </h3>
                                <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-sm font-medium">
                                  {service.subcategory}
                                </span>
                                {service.featured && (
                                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-zion-slate-light text-lg mb-4">
                                {service.description}
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white mb-2">{service.currency}{service.price}</div>
                              <div className="text-zion-slate-light mb-2">/{service.pricingModel}</div>
                              <div className="flex items-center justify-center gap-1 mb-2">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-zion-slate-light">{service.rating}</span>
                                <span className="text-xs text-zion-slate-light/70">({service.reviewCount})</span>
                              </div>
                              <div className="text-center">
                                <div className="text-zion-cyan font-semibold mb-1">AI Score: {service.aiScore}/100</div>
                                <div className="w-24 bg-zion-slate-dark rounded-full h-2 mx-auto">
                                  <div 
                                    className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${service.aiScore}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                Key Features
                              </h4>
                              <div className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-zion-slate-light">
                                    <CheckCircle className="h-4 w-4 text-zion-cyan" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Cpu className="h-4 w-4" />
                                Technology Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologyStack.map((tech, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded border border-zion-cyan/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zion-slate-light">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {service.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {service.availability}
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                {service.contactEmail}
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Link
                                to={`/services/${service.id}`}
                                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                              >
                                Learn More
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <a
                                href={service.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-zion-slate-light border border-white/20 rounded-lg transition-all duration-300 flex items-center gap-2"
                              >
                                <ExternalLink className="h-5 w-5" />
                                Visit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
<<<<<<< HEAD
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark/80 to-zion-blue-dark/80">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Contact our team of experts to discuss how our innovative services can drive your business forward.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
=======
        </div>
      </section>
      {/* Advanced Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized solutions for complex technological challenges
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge technologies that power our enhanced services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Our Enhanced Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Our Enhanced Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Innovation, expertise, and proven results in advanced technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Innovation Leaders', description: 'Pioneering cutting-edge technology solutions' },
              { icon: Rocket, title: 'Rapid Development', description: 'Fast prototyping and deployment' },
              { icon: Shield, title: 'Future-Proof', description: 'Built for tomorrow\'s challenges' },
              { icon: TrendingUp, title: 'Proven Results', description: 'Track record of successful implementations' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Innovate</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's explore how our enhanced services can transform your business
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 border border-zion-cyan/30">
                    <Phone className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 border border-zion-cyan/30">
                    <Mail className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 border border-zion-cyan/30">
                    <MapPin className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-zion-slate-light">Middletown, DE 19709</p>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};
export default EnhancedServices;
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
