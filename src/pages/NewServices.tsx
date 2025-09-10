import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Cpu, Brain, Rocket, Shield, Zap, Lock, Globe, Users, CheckCircle, Sparkles } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';

const NewServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...ADVANCED_INNOVATIVE_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];
  
  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on selection and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
      case 'quantum ai':
        return <Cpu className="w-6 h-6" />;
      case 'ai consciousness':
      case 'autonomous ai':
        return <Brain className="w-6 h-6" />;
      case 'space technology':
        return <Rocket className="w-6 h-6" />;
      case 'cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'edge computing':
      case '5g technology':
        return <Zap className="w-6 h-6" />;
      case 'blockchain':
        return <Lock className="w-6 h-6" />;
      case 'iot':
        return <Globe className="w-6 h-6" />;
      case 'biotechnology':
        return <Users className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">2025 Innovation Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, Quantum Computing, Space Technology, 
              and Emerging Tech solutions. Stay ahead of the competition with next-generation innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "100+", label: "Services Available" },
              { number: "50+", label: "Categories" },
              { number: "24/7", label: "Support" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {getCategoryIcon(service.category)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    ${typeof service.price === 'number' ? service.price.toLocaleString() : 'Custom'}
                  </div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Category:</div>
                <div className="text-sm text-white font-medium">{service.category}</div>
              </div>

              {service.marketPrice && (
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Market Price Range:</div>
                  <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
                </div>
              )}

              {service.benefits && (
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-300 text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewServices;