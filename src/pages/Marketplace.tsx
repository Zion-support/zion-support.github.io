import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Eye,
  Bookmark,
  Share2,
  BarChart3,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Filter as FilterIcon,
  Crown,
  Server
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { REVOLUTIONARY_SERVICES_2025 } from '@/data/revolutionaryServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showFilters, setShowFilters] = useState(false);

  // Combine all services
  const allServices = [...REVOLUTIONARY_SERVICES_2025, ...INNOVATIVE_MICRO_SAAS_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', 'Revolutionary', 'Advanced', 'Standard'];

  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by innovation level
    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'name':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case 'innovation':
          const levelOrder = { 'Revolutionary': 3, 'Advanced': 2, 'Standard': 1 };
          aValue = levelOrder[a.innovationLevel as keyof typeof levelOrder] || 0;
          bValue = levelOrder[b.innovationLevel as keyof typeof levelOrder] || 0;
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedInnovationLevel, priceRange, sortBy, sortOrder]);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Analytics': <Brain className="w-5 h-5" />,
      'AI & Quantum Computing': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'AI Sales & Marketing': <TrendingUp className="w-5 h-5" />,
      'IoT & Edge Computing': <Cpu className="w-5 h-5" />,
      'Healthcare AI': <Heart className="w-5 h-5" />,
      'Blockchain & AI': <Lock className="w-5 h-5" />,
      'Sustainability & Green Tech': <Globe className="w-5 h-5" />,
      'Autonomous Systems': <Rocket className="w-5 h-5" />,
      'Legal Tech': <Shield className="w-5 h-5" />,
      'Cloud & DevOps': <Server className="w-5 h-5" />,
      'Data & Analytics': <BarChart3 className="w-5 h-5" />,
      'Digital Twin': <Rocket className="w-5 h-5" />,
      'IT Infrastructure': <Server className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getInnovationLevelIcon = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return <Crown className="w-4 h-4 text-yellow-400" />;
      case 'Advanced':
        return <Star className="w-4 h-4 text-blue-400" />;
      case 'Standard':
        return <Zap className="w-4 h-4 text-slate-400" />;
      default:
        return <Zap className="w-4 h-4 text-slate-400" />;
    }
  };

  const stats = {
    total: allServices.length,
    revolutionary: allServices.filter(s => s.innovationLevel === 'Revolutionary').length,
    advanced: allServices.filter(s => s.innovationLevel === 'Advanced').length,
    standard: allServices.filter(s => s.innovationLevel === 'Standard').length,
    avgPrice: Math.round(allServices.reduce((sum, s) => sum + s.price, 0) / allServices.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Marketplace - Zion Tech Group" 
        description="Explore our comprehensive marketplace of AI, IT, and Micro SaaS services. Find the perfect solution for your business needs."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <ShoppingCart className="w-12 h-12 text-cyan-400" />
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Marketplace
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive collection of cutting-edge AI, IT, and Micro SaaS solutions designed to transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{stats.total}</div>
                <div className="text-sm text-slate-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{stats.revolutionary}</div>
                <div className="text-sm text-slate-400">Revolutionary</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stats.advanced}</div>
                <div className="text-sm text-slate-400">Advanced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">${stats.avgPrice}</div>
                <div className="text-sm text-slate-400">Avg Price</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-cyan-400/20 rounded-lg text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <FilterIcon className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Innovation Level Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Innovation Level</label>
                  <select
                    value={selectedInnovationLevel}
                    onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                    className="w-full bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  >
                    {innovationLevels.map(level => (
                      <option key={level} value={level}>
                        {level === 'all' ? 'All Levels' : level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Price Range</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full bg-slate-800 border border-cyan-400/20 rounded-lg px-2 py-2 text-white text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                    />
                    <span className="text-slate-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                      className="w-full bg-slate-800 border border-cyan-400/20 rounded-lg px-2 py-2 text-white text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                    />
                  </div>
                </div>

                {/* Sort Options */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                    <option value="innovation">Innovation Level</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* View Mode and Results */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-400 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-400 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Order Toggle */}
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="flex items-center gap-2 px-3 py-1 bg-slate-800 border border-cyan-400/20 rounded-lg text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  {sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
              </div>

              <div className="text-sm text-slate-400">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group bg-slate-800/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-xl p-5 hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {getInnovationLevelIcon(service.innovationLevel)}
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            service.innovationLevel === 'Revolutionary' 
                              ? 'bg-yellow-400/20 text-yellow-400' 
                              : service.innovationLevel === 'Advanced'
                              ? 'bg-blue-400/20 text-blue-400'
                              : 'bg-slate-400/20 text-slate-400'
                          }`}>
                            {service.innovationLevel}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Pricing */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Price:</span>
                          <span className="text-lg font-bold text-cyan-400">{formatPrice(service.price)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Billing:</span>
                          <span className="text-slate-300 capitalize">{service.pricingModel}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {service.tags?.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/services/${service.id}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Link>
                        <Link
                          to="/request-quote"
                          className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-medium rounded hover:opacity-90 transition-opacity"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group bg-slate-800/40 backdrop-blur border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 rounded-xl p-6 hover:scale-102"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          {getCategoryIcon(service.category)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                                {service.title}
                              </h3>
                              <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                                <span className="uppercase tracking-wide text-cyan-300/70">{service.category}</span>
                                <span>•</span>
                                <span>{service.subcategory}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getInnovationLevelIcon(service.innovationLevel)}
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                service.innovationLevel === 'Revolutionary' 
                                  ? 'bg-yellow-400/20 text-yellow-400' 
                                  : service.innovationLevel === 'Advanced'
                                  ? 'bg-blue-400/20 text-blue-400'
                                  : 'bg-slate-400/20 text-slate-400'
                              }`}>
                                {service.innovationLevel}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-slate-400">Price: <span className="text-cyan-400 font-semibold">{formatPrice(service.price)}/{service.pricingModel}</span></span>
                            <span className="text-slate-400">Delivery: <span className="text-slate-300">{service.estimatedDelivery}</span></span>
                            {service.roi && <span className="text-slate-400">ROI: <span className="text-green-400 font-semibold">{service.roi}</span></span>}
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Link
                            to={`/services/${service.id}`}
                            className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors text-center"
                          >
                            View Details
                          </Link>
                          <Link
                            to="/request-quote"
                            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our team of experts can create custom solutions tailored to your specific needs. 
              Let's discuss how we can help transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Request Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="https://ziontechgroup.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
              >
                Explore All Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Site</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
