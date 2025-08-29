import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Cpu,
  Lock,
  Heart,
  DollarSign as DollarIcon,
  BookOpen,
  Building,
  Leaf,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ALL_COMPREHENSIVE_SERVICES_2025, ENHANCED_SERVICE_CATEGORIES, ENHANCED_PRICING_TIERS } from '../data/comprehensiveServicesExpansion2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'aiScore'>('name');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const filteredServices = useMemo(() => {
    let filtered = ALL_COMPREHENSIVE_SERVICES_2025;
    
    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'budget':
          filtered = filtered.filter(service => service.price < 2000);
          break;
        case 'mid-range':
          filtered = filtered.filter(service => service.price >= 2000 && service.price < 5000);
          break;
        case 'enterprise':
          filtered = filtered.filter(service => service.price >= 5000);
          break;
      }
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const getCategoryIcon = (categoryName: string) => {
    const category = ENHANCED_SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    
    switch (category?.icon) {
      case 'Brain': return Brain;
      case 'Cloud': return Cloud;
      case 'Shield': return Shield;
      case 'Cpu': return Cpu;
      case 'Lock': return Lock;
      case 'Heart': return Heart;
      case 'DollarSign': return DollarIcon;
      case 'BookOpen': return BookOpen;
      case 'Building': return Building;
      case 'Leaf': return Leaf;
      default: return Zap;
    }
  };

  const getCategoryColor = (categoryName: string) => {
    const category = ENHANCED_SERVICE_CATEGORIES.find(cat => 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative">
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: allServices.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'Data Analytics', name: 'Data Analytics', count: allServices.filter(s => s.category === 'Data Analytics').length, icon: '📊', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: allServices.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: allServices.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'FinTech', name: 'FinTech', count: allServices.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' }
  ];

  // Get unique tags
  const allTags = Array.from(new Set(allServices.flatMap(service => service.tags)));

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => service.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesPrice && matchesTags;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'ai-score':
        return b.aiScore - a.aiScore;
      default:
        return b.rating - a.rating;
    }
  });

  const toggleFavorite = (serviceId: string) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('rating');
    setPriceRange([0, 5000]);
    setSelectedTags([]);
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, IT, and micro SAAS services. Cutting-edge solutions for modern businesses with transparent pricing and proven ROI."
        keywords="AI services, IT solutions, micro SAAS, business intelligence, cybersecurity, cloud computing, quantum computing, blockchain, digital twin"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Services 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Comprehensive Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge AI, IT, and technology services designed to transform your business and drive innovation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{ALL_COMPREHENSIVE_SERVICES_2025.length}+</div>
                <div className="text-sm text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{ENHANCED_SERVICE_CATEGORIES.length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-sm text-gray-400">AI Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/30">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Categories</option>
                {ENHANCED_SERVICE_CATEGORIES.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.serviceCount})
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget ($0 - $2,000)</option>
                <option value="mid-range">Mid-Range ($2,000 - $5,000)</option>
                <option value="enterprise">Enterprise ($5,000+)</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="aiScore">Sort by AI Score</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-800/50 border border-slate-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular and innovative services that are transforming businesses worldwide
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_COMPREHENSIVE_SERVICES_2025.filter(service => service.featured).slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      AI Score: {service.aiScore}%
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400 line-through">${service.marketPrice.toLocaleString()}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {service.reviewCount} reviews
                  </div>
                  <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid/List */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete portfolio of {ALL_COMPREHENSIVE_SERVICES_2025.length} services across {ENHANCED_SERVICE_CATEGORIES.length} categories
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-slate-800/50 border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-5 h-5 text-white" })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      AI Score: {service.aiScore}%
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">${service.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-400 line-through">${service.marketPrice.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {service.reviewCount} reviews
                    </div>
                    <button className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-slate-800/50 border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                            AI Score: {service.aiScore}%
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-400 line-through">${service.marketPrice.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-3">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          {service.rating} ({service.reviewCount} reviews)
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.createdAt}
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-600">
              {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.name}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
          
          {favorites.length > 0 && (
            <div className="flex items-center gap-2 text-blue-600">
              <HeartIcon className="h-5 w-5" />
              <span>{favorites.length} favorites</span>
            </div>
          )}

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Services Grid/List */}
        {sortedServices.length === 0 ? (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Image */}
                <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gradient-to-br ${getCategoryColor(service.category)} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{getCategoryIcon(service.category)}</span>
                  </div>
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(service.id)}
                    className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <HeartIcon 
                      className={`h-5 w-5 ${favorites.includes(service.id) ? 'text-red-500 fill-current' : 'text-white'}`} 
                    />
                  </button>

                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      Featured
                    </div>
                  )}

                  {/* AI Score */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                {/* Service Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-500">{service.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{service.subcategory}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        {service.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {service.reviewCount}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                  </div>

                  {/* ROI and Setup */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500">ROI</div>
                      <div className="font-semibold text-green-600">{service.roi}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Setup Time</div>
                      <div className="font-semibold">{service.setupTime}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Learn More
                    </Link>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>


      {/* Pricing Tiers */}
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENHANCED_PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 border rounded-2xl p-6 ${
                  tier.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-600/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-white mb-1">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span className="text-lg font-medium">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span className="text-lg font-medium">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
