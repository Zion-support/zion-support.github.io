import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  Check, 
  X, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Shield, 
  Rocket, 
  Zap, 
  Lock, 
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Eye,
  Heart,
  Share2,
  Search,
  Filter
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { SPECIALIZED_INNOVATIVE_SERVICES_2025 } from '../data/specializedInnovativeServices2025';

const UltimatePricingShowcase2025: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_INNOVATIVE_SERVICES_2025
  ];

  // Get unique categories
  const categories = useMemo(() => {

    const uniqueCategories = [...new Set(allServices.map(s => s.category))];
    return [
      { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
      ...uniqueCategories.map(cat => ({

        id: cat,
        name: cat,
        count: allServices.filter(s => s.category === cat).length,
        icon: getCategoryIcon(cat)
      }))
    ];
  }, [allServices]);

  function getCategoryIcon(category: string): string {

    const iconMap: { [key: string]: string } = {

      'AI & Automation': '🤖',
      'Quantum Computing': '⚛️',
      'Blockchain': '🔗',
      'AI & Healthcare': '🏥',
      'Edge Computing': '🌐',
      'Metaverse': '🌍',
      'AI & Content': '✍️',
      'Cybersecurity': '🛡️',
      'AI & HR': '👥',
      'Biotechnology': '🧬',
      'Neuromorphic Computing': '🧠',
      'Synthetic Biology': '🔬',
      'Fusion Energy': '☢️',
      'Quantum Cryptography': '🔐',
      'Brain-Computer Interface': '💻',
      'Quantum Sensing': '📡',
      'Quantum Materials': '⚡',
      'Quantum Communication': '📡',
      'Autonomous Systems': '🚗',
      'Environmental Tech': '🌱',
      'Robotics': '🤖',
      'Digital Twin': '🔄',
      'Space Technology': '🚀'
    };
    return iconMap[category] || '⚡';
  }

  const filteredServices = allServices.filter(service => {

    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {

    switch (sortBy) {

      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'aiScore':
        return (b.aiScore || 0) - (a.aiScore || 0);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const formatPrice = (price: number) => {

    return new Intl.NumberFormat('en-US', {

      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0}).format(price);
  };

  const getPriceTier = (price: number) => {

    if (price < 3000) return 'starter';
    if (price < 7000) return 'professional';
    if (price < 15000) return 'enterprise';
    return 'premium';
  };

  const getPriceTierColor = (tier: string) => {

    switch (tier) {

      case 'starter': return 'from-green-500 to-emerald-500';
      case 'professional': return 'from-blue-500 to-cyan-500';
      case 'enterprise': return 'from-purple-500 to-pink-500';
      case 'premium': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getPriceTierLabel = (tier: string) => {

    switch (tier) {

      case 'starter': return 'Starter';
      case 'professional': return 'Professional';
      case 'enterprise': return 'Enterprise';
      case 'premium': return 'Premium';
      default: return 'Custom';
    }
  };

  return (
    <>
      <Helmet>
        <title>Ultimate Pricing Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Comprehensive pricing information for all our innovative AI, Quantum Computing, Blockchain, and emerging technology services. Transparent pricing with detailed feature comparisons." />
        <meta name="keywords" content="pricing, AI services pricing, quantum computing pricing, blockchain pricing, cybersecurity pricing, Zion Tech Group pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-pricing-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full">
                  <DollarSign className="h-12 w-12 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Pricing Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for our comprehensive portfolio of cutting-edge technology services. Find the perfect solution for your business needs and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  {allServices.length}+ Services
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  Transparent Pricing
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  ROI Guaranteed
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Custom Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center">
                <Phone className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Phone</span>
                <a href="tel:+13024640950" className="text-lg font-bold hover:text-cyan-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-bold hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">Address</span>
                <span className="text-lg font-bold">
                  364 E Main St STE 1008<br />Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>

                {/* Sort By */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="aiScore" className="bg-gray-800 text-white">Sort by AI Score</option>
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`flex-1 px-4 py-3 rounded-lg transition-colors ${

                      viewMode === 'cards' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Cards
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex-1 px-4 py-3 rounded-lg transition-colors ${

                      viewMode === 'table' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards View */}
        {viewMode === 'cards' && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {sortedServices.map((service, index) => {

                  const priceTier = getPriceTier(service.price);
                  const tierColor = getPriceTierColor(priceTier);
                  const tierLabel = getPriceTierLabel(priceTier);
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Price Tier Badge */}
                      <div className={`bg-gradient-to-r ${tierColor} text-white text-center py-2 text-sm font-bold`}>
                        {tierLabel} Tier
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                            {service.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm font-medium">{service.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                          {service.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Pricing Information */}
                        <div className="bg-white/5 rounded-lg p-4 mb-6">
                          <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-white mb-1">
                              {formatPrice(service.price)}
                            </div>
                            <div className="text-gray-400 text-sm">One-time setup</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-400">Market Price:</span>
                              <div className="text-white font-medium">{service.marketPrice}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Setup Time:</span>
                              <div className="text-white">{service.availability}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">ROI:</span>
                              <div className="text-white font-medium">{service.roi}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">AI Score:</span>
                              <div className="text-white font-medium">{service.aiScore}%</div>
                            </div>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.tags.slice(0, 4).map((tag, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{tag}</span>
                              </div>
                            ))}
                            {service.tags.length > 4 && (
                              <div className="text-gray-400 text-sm">
                                +{service.tags.length - 4} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <a
                            href={`mailto:kleber@ziontechgroup.com?subject=Quote Request for ${service.title}&body=Hi, I'm interested in getting a detailed quote for your ${service.title} service. Please provide comprehensive pricing and implementation details.`}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-center flex items-center justify-center gap-2"
                          >
                            <Mail className="h-4 w-4" />
                            Get Detailed Quote
                          </a>
                          <a
                            href={`tel:+13024640950`}
                            className="w-full px-4 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2"
                          >
                            <Phone className="h-4 w-4" />
                            Call for Consultation
                          </a>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="text-xs text-gray-400 space-y-1">
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                                {service.contactInfo.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                                {service.contactInfo.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        )}

        {/* Pricing Table View */}
        {viewMode === 'table' && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Market Price</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Setup Time</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">ROI</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">AI Score</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedServices.map((service, index) => (
                        <tr key={service.id} className={`border-t border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}`}>
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-white font-medium">{service.title}</div>
                              <div className="text-gray-400 text-sm line-clamp-2">{service.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                              {service.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-white font-bold">{formatPrice(service.price)}</div>
                            <div className="text-gray-400 text-xs">{getPriceTierLabel(getPriceTier(service.price))} Tier</div>
                          </td>
                          <td className="px-6 py-4 text-white">{service.marketPrice}</td>
                          <td className="px-6 py-4 text-white">{service.availability}</td>
                          <td className="px-6 py-4 text-white">{service.roi}</td>
                          <td className="px-6 py-4">
                            <div className="text-white font-medium">{service.aiScore}%</div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                                style={{ width: `${service.aiScore}%` }}
                              ></div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <a
                                href={`mailto:kleber@ziontechgroup.com?subject=Quote Request for ${service.title}`}
                                className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded text-sm hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                              >
                                Quote
                              </a>
                              <a
                                href={`tel:+13024640950`}
                                className="px-3 py-2 bg-white/10 text-white rounded text-sm hover:bg-white/20 transition-colors border border-white/20"
                              >
                                Call
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Tiers Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pricing Tiers Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are organized into clear pricing tiers to help you choose the right solution for your business needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starter Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                  Starter Tier
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">$1,999 - $2,999</h3>
                <p className="text-gray-300 mb-4">Perfect for small businesses and startups</p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Basic AI integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Standard support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    2-3 week setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Core features
                  </li>
                </ul>
                <div className="text-sm text-gray-400">
                  {allServices.filter(s => getPriceTier(s.price) === 'starter').length} services available
                </div>
              </motion.div>

              {/* Professional Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                  Professional Tier
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">$3,000 - $6,999</h3>
                <p className="text-gray-300 mb-4">Ideal for growing businesses</p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Advanced AI capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    3-5 week setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Premium features
                  </li>
                </ul>
                <div className="text-sm text-gray-400">
                  {allServices.filter(s => getPriceTier(s.price) === 'professional').length} services available
                </div>
              </motion.div>

              {/* Enterprise Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                  Enterprise Tier
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">$7,000 - $14,999</h3>
                <p className="text-gray-300 mb-4">For large organizations</p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Enterprise AI solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    5-8 week setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Custom integrations
                  </li>
                </ul>
                <div className="text-sm text-gray-400">
                  {allServices.filter(s => getPriceTier(s.price) === 'enterprise').length} services available
                </div>
              </motion.div>

              {/* Premium Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 inline-block">
                  Premium Tier
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">$15,000+</h3>
                <p className="text-gray-300 mb-4">Cutting-edge research solutions</p>
                <ul className="text-left text-gray-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Research-grade AI
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Dedicated team
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    8+ week setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    Full customization
                  </li>
                </ul>
                <div className="text-sm text-gray-400">
                  {allServices.filter(s => getPriceTier(s.price) === 'premium').length} services available
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized pricing, custom solutions, and expert consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation&body=Hi, I'm interested in discussing pricing options for your services. Please schedule a consultation call to discuss my specific needs and budget." 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Pricing Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .line-clamp-2 {

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {

          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default UltimatePricingShowcase2025;