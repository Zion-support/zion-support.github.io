import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UltraFuturisticNeonBackground } from '@/components/UltraFuturisticNeonBackground';
import { FuturisticServiceCard } from '@/components/FuturisticServiceCard';
import { revolutionary2037AIAutomationServices } from '@/data/revolutionary-2037-ai-automation-services';
import { revolutionary2037ITInfrastructureServices } from '@/data/revolutionary-2037-it-infrastructure-services';
import { revolutionary2037MicroSaasServices } from '@/data/revolutionary-2037-micro-saas-services';
import { Search, Filter, Grid, List, Star, TrendingUp, Zap, Brain, Cloud, Rocket } from 'lucide-react';

const RevolutionaryServices2037: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'rating'>('popularity');

  // Combine all services
  const allServices = [
    ...revolutionary2037AIAutomationServices,
    ...revolutionary2037ITInfrastructureServices,
    ...revolutionary2037MicroSaasServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'popularity':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category.split(' ')[0])))];

  // Stats
  const totalServices = allServices.length;
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0);
  const averageRating = allServices.reduce((sum, service) => sum + service.rating, 0) / totalServices;
  const totalMarketSize = allServices.reduce((sum, service) => {
    const size = service.marketSize.match(/\$([\d.]+)B/);
    return sum + (size ? parseFloat(size[1]) : 0);
  }, 0);

  return (
    <UltraFuturisticNeonBackground intensity="high" colorScheme="multi" className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6">
            Revolutionary Services 2037
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI consciousness, quantum computing, and revolutionary micro SAAS solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">{totalServices}</div>
            <div className="text-zion-slate-light">Revolutionary Services</div>
          </div>
          <div className="bg-gradient-to-br from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl p-6 border border-zion-purple/20 text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">{totalCustomers.toLocaleString()}+</div>
            <div className="text-zion-slate-light">Active Customers</div>
          </div>
          <div className="bg-gradient-to-br from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">{averageRating.toFixed(1)}</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl p-6 border border-zion-purple/20 text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">${totalMarketSize.toFixed(1)}B</div>
            <div className="text-zion-slate-light">Total Market Size</div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-gradient-to-r from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/40 border border-zion-slate-light/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-zion-slate-light w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark/40 border border-zion-slate-light/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <TrendingUp className="text-zion-slate-light w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-zion-slate-dark/40 border border-zion-slate-light/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              >
                <option value="popularity" className="bg-zion-slate-dark text-white">Most Popular</option>
                <option value="rating" className="bg-zion-slate-dark text-white">Highest Rated</option>
                <option value="price" className="bg-zion-slate-dark text-white">Price</option>
                <option value="name" className="bg-zion-slate-dark text-white">Name</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark/40 text-zion-slate-light hover:bg-zion-slate-dark/60'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-slate-dark/40 text-zion-slate-light hover:bg-zion-slate-dark/60'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-zion-slate-light">
            Showing {filteredServices.length} of {totalServices} revolutionary services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <FuturisticServiceCard 
                service={service} 
                className={viewMode === 'list' ? 'max-w-none' : ''}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 py-12 bg-gradient-to-r from-zion-slate-dark/60 to-zion-slate/40 backdrop-blur-xl rounded-2xl border border-zion-cyan/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our revolutionary services to transform their operations and achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-purple/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/comprehensive-services"
              className="px-8 py-4 bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </UltraFuturisticNeonBackground>
  );
};

export default RevolutionaryServices2037;