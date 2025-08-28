import React, { useState, useMemo } from 'react';
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
  Filter,
  Grid,
  List,
  Eye,
  ExternalLink,
  Play,
  BookOpen,
  Lightbulb,
  CpuIcon,
  Server,
  SmartphoneIcon,
  Building,
  Car,
  Factory,
  City,
  Home,
  Building2,
  Truck,
  Scale,
  Gauge,
  GitFork,
  Atom,
  EyeIcon,
  PenTool,
  MessageCircle,
  Calendar,
  ClockIcon,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Enhanced categories with better organization
  const categories = useMemo(() => {
    const categoryMap = new Map<string, { count: number; icon: string; color: string; description: string }>();
    
    COMPREHENSIVE_INNOVATIVE_SERVICES_2030.forEach(service => {
      const category = service.category;
      if (!categoryMap.has(category)) {
        categoryMap.set(category, { count: 0, icon: '🚀', color: 'from-cyan-500 to-blue-500', description: '' });
      }
      const current = categoryMap.get(category)!;
      current.count++;
    });

    return [
      { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-purple-500 to-pink-500', description: 'Complete portfolio of innovative solutions' },
      ...Array.from(categoryMap.entries()).map(([category, data]) => ({
        id: category,
        name: category,
        count: data.count,
        icon: getCategoryIcon(category),
        color: getCategoryColor(category),
        description: getCategoryDescription(category)
      }))
    ];
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    COMPREHENSIVE_INNOVATIVE_SERVICES_2030.forEach(service => {
      service.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Enhanced filtering with multiple criteria
  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => service.tags.includes(tag));
      
      return matchesCategory && matchesSearch && matchesPrice && matchesTags;
    });
  }, [activeCategory, searchTerm, priceRange, selectedTags]);

  // Enhanced sorting with multiple options
  const sortedServices = useMemo(() => {
    const services = [...filteredServices];
    switch (sortBy) {
      case 'rating':
        return services.sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return services.sort((a, b) => a.price - b.price);
      case 'price-high':
        return services.sort((a, b) => b.price - a.price);
      case 'newest':
        return services.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case 'ai-score':
        return services.sort((a, b) => b.aiScore - a.aiScore);
      case 'roi':
        return services.sort((a, b) => b.roi - a.roi);
      case 'setup-time':
        return services.sort((a, b) => a.setupTime - b.setupTime);
      default:
        return services;
    }
  }, [filteredServices, sortBy]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 10000]);
    setSelectedTags([]);
    setActiveCategory('all');
  };

  const getCategoryIcon = (category: string): string => {
    const iconMap: Record<string, string> = {
      'AI & Content': '🤖',
      'AI & Customer Support': '💬',
      'AI & HR': '👥',
      'AI & Legal Tech': '⚖️',
      'AI & Research': '🔬',
      'AI & Green Tech': '🌱',
      'AI & Metaverse': '🌐',
      'AI & Space Tech': '🚀',
      'AI & Operations': '⚙️',
      'AI & Development': '💻',
      'AI & Education': '📚',
      'AI & Entertainment': '🎮',
      'AI & Business Intelligence': '📊',
      'AI & Healthcare': '🏥',
      'AI & Marketing': '📢',
      'AI & FinTech': '💰',
      'AI & Transportation': '🚗',
      'AI & Cybersecurity': '🔒',
      'Cybersecurity': '🛡️',
      'Cloud & DevOps': '☁️',
      'IT Infrastructure': '🏗️',
      'Blockchain & Web3': '⛓️',
      'Quantum Computing': '⚛️',
      'IoT & Edge Computing': '📡',
      'Data Analytics': '📈',
      'Digital Twin': '🔄',
      'Space Technology': '🌌',
      'Sustainable Technology': '♻️'
    };
    return iconMap[category] || '🚀';
  };

  const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
      'AI & Content': 'from-purple-500 to-pink-500',
      'AI & Customer Support': 'from-blue-500 to-cyan-500',
      'AI & HR': 'from-green-500 to-emerald-500',
      'AI & Legal Tech': 'from-yellow-500 to-orange-500',
      'AI & Research': 'from-indigo-500 to-purple-500',
      'AI & Green Tech': 'from-green-500 to-teal-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-blue-500 to-indigo-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Development': 'from-blue-500 to-purple-500',
      'AI & Education': 'from-emerald-500 to-teal-500',
      'AI & Entertainment': 'from-pink-500 to-rose-500',
      'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
      'AI & Healthcare': 'from-emerald-500 to-green-500',
      'AI & Marketing': 'from-purple-500 to-pink-500',
      'AI & FinTech': 'from-green-500 to-emerald-500',
      'AI & Transportation': 'from-blue-500 to-cyan-500',
      'AI & Cybersecurity': 'from-red-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'IT Infrastructure': 'from-gray-500 to-slate-500',
      'Blockchain & Web3': 'from-purple-500 to-indigo-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-green-500 to-teal-500',
      'Data Analytics': 'from-blue-500 to-purple-500',
      'Digital Twin': 'from-cyan-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Sustainable Technology': 'from-green-500 to-emerald-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  const getCategoryDescription = (category: string): string => {
    const descriptionMap: Record<string, string> = {
      'AI & Content': 'AI-powered content creation and optimization',
      'AI & Customer Support': 'Intelligent customer service automation',
      'AI & HR': 'Human resources optimization with AI',
      'AI & Legal Tech': 'Legal technology powered by AI',
      'AI & Research': 'Research acceleration through AI',
      'AI & Green Tech': 'Sustainable technology solutions',
      'AI & Metaverse': 'Next-generation virtual experiences',
      'AI & Space Tech': 'Space technology innovation',
      'AI & Operations': 'Business operations optimization',
      'AI & Development': 'AI-assisted software development',
      'AI & Education': 'Educational technology advancement',
      'AI & Entertainment': 'Entertainment industry innovation',
      'AI & Business Intelligence': 'Data-driven business insights',
      'AI & Healthcare': 'Healthcare technology revolution',
      'AI & Marketing': 'Marketing automation and optimization',
      'AI & FinTech': 'Financial technology innovation',
      'AI & Transportation': 'Transportation system optimization',
      'AI & Cybersecurity': 'Advanced security with AI',
      'Cybersecurity': 'Comprehensive security solutions',
      'Cloud & DevOps': 'Cloud infrastructure and operations',
      'IT Infrastructure': 'Enterprise IT solutions',
      'Blockchain & Web3': 'Decentralized technology platforms',
      'Quantum Computing': 'Quantum computing services',
      'IoT & Edge Computing': 'Internet of Things solutions',
      'Data Analytics': 'Business intelligence and analytics',
      'Digital Twin': 'Digital twin technology platforms',
      'Space Technology': 'Space exploration technology',
      'Sustainable Technology': 'Eco-friendly technology solutions'
    };
    return descriptionMap[category] || 'Innovative technology solutions';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO 
        title="Innovative AI & Technology Services | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, micro SAAS, IT infrastructure, and innovative technology services. Transform your business with our revolutionary 2030 solutions."
        keywords="AI services, micro SAAS, IT solutions, technology consulting, AI automation, cloud computing, cybersecurity, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary 2030 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, micro SAAS, IT infrastructure, and innovative technology solutions that will transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing-guide-2030"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
                    showFilters 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="rating">Highest Rated</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="newest">Newest First</option>
                        <option value="ai-score">AI Score</option>
                        <option value="roi">ROI</option>
                        <option value="setup-time">Setup Time</option>
                      </select>
                    </div>

                    {/* Tags */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Popular Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {allTags.slice(0, 10).map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                              selectedTags.includes(tag)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Clear all filters
                    </button>
                    <span className="text-sm text-gray-500">
                      {filteredServices.length} of {COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length} services
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className={`text-xs ${
                      activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {category.count} services
                    </div>
                  </div>
                </div>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="space-y-6">
          {sortedServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              <AnimatePresence>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'
                    }`}>
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                          ${service.price.toLocaleString()}
                        </div>
                      </div>
                      {service.featured && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Category and Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                          <span className="text-sm text-gray-500">({service.reviewCount})</span>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="text-xs text-gray-500">+{service.tags.length - 3} more</span>
                        )}
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">AI Score: {service.aiScore}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">ROI: {service.roi}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-600">Setup: {service.setupTime}h</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">Market: ${service.marketPrice.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Link
                          to={`/services/${service.id}`}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/request-quote"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Get in touch with our team to discuss how our innovative AI and technology services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-6 text-blue-100">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
