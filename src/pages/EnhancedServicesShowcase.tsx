import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ENHANCED_SERVICES } from '../data/enhancedServices';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticServiceCard from '../components/ui/UltraAdvancedFuturisticServiceCard';
import { EnhancedService } from '../data/enhancedServices';

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'category' | 'featured'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showNewServices, setShowNewServices] = useState(true);
  const [showFeaturedServices, setShowFeaturedServices] = useState(true);

  // Combine all services
  const allServices = [...COMPREHENSIVE_SERVICES, ...ENHANCED_SERVICES];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  // Filter services based on search, category, and filters
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesNewFilter = !showNewServices || !('isNew' in service) || service.isNew;
    const matchesFeaturedFilter = !showFeaturedServices || !('featured' in service) || service.featured;
    
    return matchesCategory && matchesSearch && matchesNewFilter && matchesFeaturedFilter;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'featured':
        const aFeatured = 'featured' in a && a.featured;
        const bFeatured = 'featured' in b && b.featured;
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        return 0;
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
        duration: 0.5
      }
    }
  };

  return (
    <UltraAdvancedFuturisticBackground intensity="high" theme="quantum">
      <div className="min-h-screen text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Enhanced Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of cutting-edge technology solutions, from AI-powered platforms to quantum computing services
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
                <div className="text-gray-400">Total Services</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-purple-400">{ENHANCED_SERVICES.length}</div>
                <div className="text-gray-400">New Services</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-yellow-400">
                  {ENHANCED_SERVICES.filter(s => s.featured).length}
                </div>
                <div className="text-gray-400">Featured Services</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-green-400">{categories.length - 1}</div>
                <div className="text-gray-400">Categories</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search services by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-sm"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price">Price: Low to High</option>
                    <option value="name">Name: A to Z</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                {/* View Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                  <div className="flex bg-gray-800/50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-cyan-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-cyan-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      List
                    </button>
                  </div>
                </div>

                {/* Toggle Filters */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Filters</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showNewServices}
                        onChange={(e) => setShowNewServices(e.target.checked)}
                        className="mr-2 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-300">New Services</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showFeaturedServices}
                        onChange={(e) => setShowFeaturedServices(e.target.checked)}
                        className="mr-2 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-300">Featured Only</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            {sortedServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={viewMode === 'list' ? 'col-span-1' : ''}
                  >
                    <UltraAdvancedFuturisticServiceCard
                      service={service as EnhancedService}
                      onClick={() => {
                        // Handle service click - could open modal, navigate to detail page, etc.
                        console.log('Service clicked:', service.title);
                      }}
                      className={viewMode === 'list' ? 'h-auto' : ''}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our team to discuss how our cutting-edge services can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-cyan-400">
                  <span className="mr-2">📞</span>
                  <span className="font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <span className="mr-2">✉️</span>
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-2">🌐</span>
                  <span className="font-semibold">ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

export default EnhancedServicesShowcase;