import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box
} from 'lucide-react';
import SEO from '../components/SEO';
import { INNOVATIVE_SERVICES_2025, InnovativeService2025 } from '../data/innovativeServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const categories = ['All', ...Array.from(new Set(INNOVATIVE_SERVICES_2025.map(service => service.category)))];
  const priceRanges = [
    'All',
    'Under $1,000',
    '$1,000 - $2,999',
    '$3,000 - $4,999',
    '$5,000+'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6" />;
      case 'AI & Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-6 h-6" />;
      case 'AI & Sales':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Customer Experience':
        return <MessageSquare className="w-6 h-6" />;
      case 'AI & Analytics':
        return <Database className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Box className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Wallet className="w-6 h-6" />;
      case 'Sustainability & Technology':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getPriceRangeFilter = (range: string) => {
    switch (range) {
      case 'Under $1,000':
        return (service: InnovativeService2025) => service.price < 1000;
      case '$1,000 - $2,999':
        return (service: InnovativeService2025) => service.price >= 1000 && service.price <= 2999;
      case '$3,000 - $4,999':
        return (service: InnovativeService2025) => service.price >= 3000 && service.price <= 4999;
      case '$5,000+':
        return (service: InnovativeService2025) => service.price >= 5000;
      default:
        return () => true;
    }
  };

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = getPriceRangeFilter(selectedPriceRange)(service);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge innovative services including AI, Quantum Computing, IoT, Blockchain, and more. Transform your business with next-generation technology solutions."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Innovative Services 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                Technology Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge services that combine AI, Quantum Computing, 
              IoT, Blockchain, and sustainable technology to transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-blue-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{service.supportLevel}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Target className="w-3 h-3 mr-1" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Award className="w-3 h-3 mr-1" />
                    <span>{service.marketPrice}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30">
                  <span className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedPriceRange('All');
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions 
              and drive your business forward with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;