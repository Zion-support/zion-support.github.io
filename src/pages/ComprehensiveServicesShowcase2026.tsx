import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Network, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Cloud,
  Code,
  Grid,
  List
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_CATALOG_2025 } from '../data/comprehensiveServicesCatalog2025';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories and price ranges
  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES_CATALOG_2025.map(s => s.category)))];
  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget ($100 - $1,000)' },
    { id: 'mid-range', name: 'Mid-Range ($1,001 - $5,000)' },
    { id: 'enterprise', name: 'Enterprise ($5,001 - $15,000)' },
    { id: 'premium', name: 'Premium ($15,001+)' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = [...COMPREHENSIVE_SERVICES_CATALOG_2025];

    // Search filter
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedPriceRange) {
          case 'budget': return service.price >= 100 && service.price <= 1000;
          case 'mid-range': return service.price > 1000 && service.price <= 5000;
          case 'enterprise': return service.price > 5000 && service.price <= 15000;
          case 'premium': return service.price > 15000;
          default: return true;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.launchDate || '').localeCompare(a.launchDate || ''));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  // Get category icon and color
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return <Brain className="w-5 h-5" />;
      case 'AI & Business Intelligence': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Customer Experience': return <Users className="w-5 h-5" />;
      case 'AI & FinTech': return <Zap className="w-5 h-5" />;
      case 'AI & Legal Tech': return <Shield className="w-5 h-5" />;
      case 'AI & Healthcare': return <CheckCircle className="w-5 h-5" />;
      case 'AI & Education': return <Brain className="w-5 h-5" />;
      case 'AI & Real Estate': return <MapPin className="w-5 h-5" />;
      case 'AI & Marketing': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Supply Chain': return <Network className="w-5 h-5" />;
      case 'AI & Customer Service': return <Users className="w-5 h-5" />;
      case 'AI & Sales': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Project Management': return <CheckCircle className="w-5 h-5" />;
      case 'AI & Business Automation': return <Zap className="w-5 h-5" />;
      case 'AI & Robotics': return <Cpu className="w-5 h-5" />;
      case 'AI & Space Tech': return <Zap className="w-5 h-5" />;
      case 'AI & Climate': return <Shield className="w-5 h-5" />;
      case 'AI & Content Creation': return <Brain className="w-5 h-5" />;
      case 'AI & Human Resources': return <Users className="w-5 h-5" />;
      case 'AI & Financial Services': return <Zap className="w-5 h-5" />;
      case 'AI & Logistics': return <Network className="w-5 h-5" />;
      case 'AI & Manufacturing': return <Cpu className="w-5 h-5" />;
      case 'AI & Retail': return <TrendingUp className="w-5 h-5" />;
      case 'AI & Energy': return <Zap className="w-5 h-5" />;
      case 'AI & Transportation': return <Network className="w-5 h-5" />;
      case 'AI & Agriculture': return <Shield className="w-5 h-5" />;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Quantum AI': return <Brain className="w-5 h-5" />;
      case 'Quantum Security': return <Shield className="w-5 h-5" />;
      case 'Quantum Finance': return <Zap className="w-5 h-5" />;
      case 'Quantum Chemistry': return <Brain className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Shield className="w-5 h-5" />;
      case 'DeFi & NFTs': return <Zap className="w-5 h-5" />;
      case 'Supply Chain & Sustainability': return <Network className="w-5 h-5" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Data & Analytics': return <TrendingUp className="w-5 h-5" />;
      case 'Networking': return <Network className="w-5 h-5" />;
      case 'Managed Services': return <CheckCircle className="w-5 h-5" />;
      case 'Software Development': return <Code className="w-5 h-5" />;
      case 'Digital Transformation': return <Zap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500',
      'bg-pink-500', 'bg-indigo-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500'
    ];
    const index = category.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Comprehensive Services{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                2026
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover Zion Tech Group's comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. 
              From quantum computing to edge AI, autonomous agents to blockchain solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{COMPREHENSIVE_SERVICES_CATALOG_2025.length}+</div>
                <div className="text-gray-400">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-zinc-700/50 border border-zinc-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-gray-400">
                  {filteredServices.length} services found
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-zinc-700/50 text-gray-400 hover:bg-zinc-600/50'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-zinc-700/50 text-gray-400 hover:bg-zinc-600/50'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 overflow-hidden hover:border-zinc-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl ${getCategoryColor(service.category)}`}>
                              {getCategoryIcon(service.category)}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                              <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-zinc-700/50 text-gray-300 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-400">
                              <Clock className="inline w-4 h-4 mr-1" />
                              {service.estimatedDelivery}
                            </div>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      // List View
                      <>
                        <div className="p-6 flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl ${getCategoryColor(service.category)}`}>
                              {getCategoryIcon(service.category)}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                              <p className="text-gray-400 text-sm">{service.category}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                              <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{service.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {service.estimatedDelivery}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {service.supportLevel}
                              </span>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and discover how our comprehensive services 
                can transform your business operations and drive innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl font-semibold transition-colors">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2026;
