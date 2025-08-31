import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';
import { SPECIALIZED_INNOVATIVE_SERVICES_2025 } from '../data/specializedInnovativeServices2025';

const UltimateInnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

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
      { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
      ...uniqueCategories.map(cat => ({
        id: cat,
        name: cat,
        count: allServices.filter(s => s.category === cat).length,
        icon: getCategoryIcon(cat),
        color: getCategoryColor(cat)
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

  function getCategoryColor(category: string): string {
    const colorMap: { [key: string]: string } = {
      'AI & Automation': 'from-zion-purple to-zion-cyan',
      'Quantum Computing': 'from-zion-purple to-zion-pink',
      'Blockchain': 'from-zion-green to-zion-emerald',
      'AI & Healthcare': 'from-zion-red to-zion-pink',
      'Edge Computing': 'from-zion-blue to-zion-cyan',
      'Metaverse': 'from-zion-purple to-zion-indigo',
      'AI & Content': 'from-zion-orange to-zion-red',
      'Cybersecurity': 'from-zion-green to-zion-blue',
      'AI & HR': 'from-zion-purple to-zion-cyan',
      'Biotechnology': 'from-zion-green to-zion-blue',
      'Neuromorphic Computing': 'from-zion-purple to-zion-indigo',
      'Synthetic Biology': 'from-zion-green to-zion-emerald',
      'Fusion Energy': 'from-zion-orange to-zion-red',
      'Quantum Cryptography': 'from-zion-blue to-zion-purple',
      'Brain-Computer Interface': 'from-zion-purple to-zion-pink',
      'Quantum Sensing': 'from-zion-blue to-zion-cyan',
      'Quantum Materials': 'from-zion-purple to-zion-orange',
      'Quantum Communication': 'from-zion-blue to-zion-green',
      'Autonomous Systems': 'from-zion-orange to-zion-blue',
      'Environmental Tech': 'from-zion-green to-zion-blue',
      'Robotics': 'from-zion-purple to-zion-orange',
      'Digital Twin': 'from-zion-blue to-zion-purple',
      'Space Technology': 'from-zion-purple to-zion-blue'
    };
    return colorMap[category] || 'from-zion-cyan to-zion-blue';
  }

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'aiScore':
        return (b.aiScore || 0) - (a.aiScore || 0);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>Ultimate Innovative Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of cutting-edge AI, Quantum Computing, Blockchain, and emerging technology services. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="AI services, quantum computing, blockchain, cybersecurity, edge computing, metaverse, biotechnology, fusion energy, neuromorphic computing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-innovative-services-showcase-2025" />
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
                  <Rocket className="h-12 w-12 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Innovative Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge AI, Quantum Computing, Blockchain, and emerging technology services that are transforming industries worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  {allServices.length}+ Innovative Services
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  AI-Powered Solutions
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  Quantum Computing
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Emerging Technologies
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
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="reviews" className="bg-gray-800 text-white">Sort by Reviews</option>
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                    <option value="aiScore" className="bg-gray-800 text-white">Sort by AI Score</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'h-48'}`}>
                    <img
                      src={service.images[0] || 'https://ziontechgroup.com/images/default-service.jpg'}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                        {service.aiScore}% AI
                      </div>
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1 text-black text-sm font-medium font-bold">
                          ⭐ Featured
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                        {service.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount || 0})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-400">Price:</span>
                        <div className="text-white font-bold">{formatPrice(service.price)}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Setup Time:</span>
                        <div className="text-white">{service.availability}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Market Price:</span>
                        <div className="text-white">{service.marketPrice}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">ROI:</span>
                        <div className="text-white">{service.roi}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details and pricing information.`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-center flex items-center justify-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Get Quote
                      </a>
                      <a
                        href={`tel:+13024640950`}
                        className="px-4 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center"
                      >
                        <Phone className="h-4 w-4" />
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
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span>{service.contactInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or contact us directly for custom solutions.
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </div>
            )}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team of experts is ready to help you implement cutting-edge solutions that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation&body=Hi, I'm interested in discussing how Zion Tech Group can help transform my business with innovative technology solutions. Please schedule a consultation call." 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
        
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

export default UltimateInnovativeServicesShowcase2025;