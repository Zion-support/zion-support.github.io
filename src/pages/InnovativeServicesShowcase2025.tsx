import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  ChevronRight,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Filter,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  BookOpen,
  Code2,
  Sparkles,
  Crown,
  Gem,
  Diamond
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-green-500 to-teal-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Code, color: 'from-yellow-500 to-orange-600' },
    { id: 'Marketing & Sales', name: 'Marketing & Sales', icon: TrendingUp, color: 'from-indigo-500 to-purple-600' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', icon: Heart, color: 'from-pink-500 to-rose-600' },
    { id: 'Space Technology', name: 'Space Technology', icon: Rocket, color: 'from-violet-500 to-purple-600' },
    { id: 'Sustainability', name: 'Sustainability', icon: Heart, color: 'from-emerald-500 to-green-600' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600';
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Cutting Edge':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Security First':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Innovation Leader':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Healthcare Innovation':
        return 'bg-gradient-to-r from-pink-500 to-rose-500';
      case 'Space Pioneer':
        return 'bg-gradient-to-r from-violet-500 to-purple-500';
      case 'Marketing Innovation':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'Web3 Leader':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Eco-Friendly':
        return 'bg-gradient-to-r from-emerald-500 to-green-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Innovative Micro SaaS Services 2025</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SaaS solutions that combine AI, quantum computing, and emerging technologies 
              to transform your business operations and drive innovation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Atom className="w-5 h-5" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span>Advanced Security</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Rocket className="w-5 h-5" />
                <span>Space Technology</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or use cases..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="featured">Featured First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="ai-score">AI Score</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Price Range: ${priceRange[0]} - ${priceRange[1]}/month
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing {filteredServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  {service.badge && (
                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getBadgeColor(service.badge)}`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Rating and AI Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-semibold">AI: {service.aiScore}%</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-white">${service.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  Market: {service.marketPrice}
                </p>
                {service.pricingTiers && (
                  <div className="space-y-2">
                    {service.pricingTiers.slice(0, 2).map((tier, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{tier.name}</span>
                        <span className="text-cyan-400">${tier.price}/mo</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <p className="text-xs text-gray-500">+{service.features.length - 4} more features</p>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                  {service.documentation && (
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Docs</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{service.contactEmail}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Globe className="w-4 h-4" />
                    <span>{service.website}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your search criteria or filters to find the services you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange([0, 2000]);
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions and drive your business forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/pricing"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InnovativeServicesShowcase2025;