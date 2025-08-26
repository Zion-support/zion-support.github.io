import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
<<<<<<< HEAD
  Sparkles,
  Crown,
  Award,
  Eye,
  Handshake,
  TrendingDown,
  Zap as ZapIcon,
  Grid,
  List
=======
  ShoppingCart,
  Building,
  Truck
>>>>>>> cursor/expand-services-and-deploy-updates-f909
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ALL_INNOVATIVE_SERVICES, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Cpu, color: 'from-zion-purple to-zion-red' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Blockchain, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Scale, color: 'from-zion-orange to-zion-purple' },
    { id: 'financial-ai', name: 'Financial AI', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing-ai', name: 'Manufacturing AI', icon: Factory, color: 'from-zion-blue to-zion-purple' },
    { id: 'space-tech', name: 'Space Technology', icon: Satellite, color: 'from-zion-purple to-zion-cyan' },
    { id: 'neuromorphic-computing', name: 'Neuromorphic Computing', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Heart, color: 'from-zion-pink to-zion-green' },
    { id: 'advanced-robotics', name: 'Advanced Robotics', icon: Cpu, color: 'from-zion-blue to-zion-red' },
    { id: 'advanced-materials', name: 'Advanced Materials', icon: Factory, color: 'from-zion-green to-zion-blue' },
    { id: 'advanced-energy', name: 'Advanced Energy', icon: Zap, color: 'from-zion-yellow to-zion-orange' },
    { id: 'advanced-transportation', name: 'Advanced Transportation', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'advanced-communication', name: 'Advanced Communication', icon: Globe, color: 'from-zion-cyan to-zion-blue' },
    { id: 'advanced-manufacturing', name: 'Advanced Manufacturing', icon: Factory, color: 'from-zion-orange to-zion-blue' },
    { id: 'advanced-gaming', name: 'Advanced Gaming', icon: Code, color: 'from-zion-purple to-zion-pink' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'extended-reality', name: 'Extended Reality', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'edge-ai', name: 'Edge AI', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'federated-learning', name: 'Federated Learning', icon: Brain, color: 'from-zion-purple to-zion-blue' },
    { id: 'sustainable-tech', name: 'Sustainable Technology', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All', color: 'from-zion-cyan to-zion-blue' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000', color: 'from-zion-green to-zion-cyan' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000', color: 'from-zion-yellow to-zion-orange' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+', color: 'from-zion-purple to-zion-pink' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'price-low', name: 'Price: Low to High', icon: TrendingUp },
    { id: 'price-high', name: 'Price: High to Low', icon: TrendingDown },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: TrendingUp }
  ];

  // Filter and sort services
  const filteredServices = ALL_INNOVATIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
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
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      case 'popular':
        return Math.random() - 0.5; // Placeholder for popularity
      default:
        return 0;
    }
  });

  const getCategoryColor = (category: string) => {
    const found = categories.find(cat => cat.name.toLowerCase().includes(category.toLowerCase()));
    return found ? found.color : 'from-zion-cyan to-zion-blue';
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'cutting-edge':
        return 'from-zion-purple to-zion-pink';
      case 'advanced':
        return 'from-zion-cyan to-zion-blue';
      case 'innovative':
        return 'from-zion-green to-zion-cyan';
      default:
        return 'from-zion-blue to-zion-purple';
    }
  };

  return (
    <div className="min-h-screen bg-futuristic pt-20">
      <SEO 
        title="Innovative Services - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, blockchain, and digital transformation services. Transform your business with our innovative solutions."
        keywords="AI services, quantum computing, blockchain, digital transformation, cybersecurity, IoT, edge computing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Innovative</span>
              <br />
              <span className="neon-cyan">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, blockchain, 
              and digital transformation solutions. Stay ahead of the curve with Zion Tech Group.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: '50+', label: 'Services', icon: ZapIcon, color: 'from-zion-cyan to-zion-blue' },
              { value: '99.9%', label: 'Uptime', icon: CheckCircle, color: 'from-zion-green to-zion-cyan' },
              { value: '24/7', label: 'Support', icon: Clock, color: 'from-zion-purple to-zion-pink' },
              { value: '500+', label: 'Clients', icon: Users, color: 'from-zion-orange to-zion-purple' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold neon-cyan mb-1">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/30 backdrop-blur-xl border-y border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-futuristic w-full pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>

<<<<<<< HEAD
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-zinc-800/50 rounded-lg p-1 border border-zinc-700">
=======
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_INNOVATIVE_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">32+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
>>>>>>> cursor/expand-services-and-deploy-updates-f909
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-futuristic min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Price:</span>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="input-futuristic min-w-[200px]"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-futuristic min-w-[200px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedPriceRange !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-zinc-400">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm border border-zion-cyan/30">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedPriceRange !== 'all' && (
                <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-sm border border-zion-purple/30">
                  {priceRanges.find(p => p.id === selectedPriceRange)?.name}
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm hover:bg-zinc-600/50 transition-colors duration-200"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <div className="text-zinc-400">
              Showing <span className="text-white font-semibold">{sortedServices.length}</span> of{' '}
              <span className="text-white font-semibold">{ALL_INNOVATIVE_SERVICES.length}</span> services
            </div>
            <div className="text-zinc-400">
              Sort by: <span className="text-white font-semibold">
                {sortOptions.find(s => s.id === sortBy)?.name}
              </span>
            </div>
          </div>

          {/* Services Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-futuristic group cursor-pointer hover:scale-105 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white rounded-full text-xs font-medium`}>
                        {service.innovationLevel}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 text-sm">Category:</span>
                      <span className="text-white text-sm font-medium">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 text-sm">Price:</span>
                      <span className="text-zion-cyan font-bold">${service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 text-sm">Delivery:</span>
                      <span className="text-white text-sm">{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-300 rounded-md text-xs border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-2 py-1 bg-zinc-800/50 text-zinc-400 rounded-md text-xs border border-zinc-700">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-futuristic text-sm py-2">
                      Learn More
                    </button>
                    <button className="px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200 border border-zinc-700">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-futuristic group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Brain className="w-10 h-10 text-white" />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-zinc-300 leading-relaxed max-w-3xl">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end space-y-2">
                          <div className={`px-4 py-2 bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white rounded-full text-sm font-medium`}>
                            {service.innovationLevel}
                          </div>
                          <div className="text-3xl font-bold neon-cyan">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-zinc-400 text-sm">
                            {service.pricingModel}
                          </div>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-zinc-400 text-sm">Category:</span>
                          <div className="text-white font-medium">{service.category}</div>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-sm">Delivery:</span>
                          <div className="text-white font-medium">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-sm">ROI:</span>
                          <div className="text-zion-green font-medium">{service.roi}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-md text-sm border border-zinc-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button className="btn-futuristic">
                          Get Started
                        </button>
                        <button className="px-6 py-3 bg-zinc-800/50 text-zinc-300 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200 border border-zinc-700">
                          Schedule Demo
                        </button>
                        <button className="px-6 py-3 bg-zinc-800/50 text-zinc-300 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200 border border-zinc-700">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find the services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="btn-futuristic"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900/50 to-black/50 backdrop-blur-xl border-y border-zinc-800/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you implement the right solutions for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-futuristic text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link to="/demo" className="px-8 py-4 bg-zinc-800/50 text-white rounded-lg hover:bg-zinc-700/50 transition-colors duration-200 border border-zinc-700 text-lg">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
