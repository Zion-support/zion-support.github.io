<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Star, CheckCircle, ArrowRight, Search, Filter, Grid, List } from 'lucide-react';

export default function Products() {
  const categories = [
    'Software Solutions',
    'Hardware Equipment',
    'Cloud Services',
    'Security Tools',
    'Analytics Platforms',
    'Development Tools',
    'Business Applications',
    'IT Services'
  ];

  const featuredProducts = [
    {
      name: 'AI Analytics Suite',
      description: 'Comprehensive AI-powered analytics platform for business intelligence',
      price: '$299/month',
      rating: 4.8,
      category: 'Analytics Platforms',
      image: '/images/products/ai-analytics.jpg'
    },
    {
      name: 'Cybersecurity Toolkit',
      description: 'Advanced security solutions for enterprise protection',
      price: '$199/month',
      rating: 4.9,
      category: 'Security Tools',
      image: '/images/products/cybersecurity.jpg'
    },
    {
      name: 'Cloud Infrastructure Package',
      description: 'Scalable cloud infrastructure and management services',
      price: '$499/month',
      rating: 4.7,
      category: 'Cloud Services',
      image: '/images/products/cloud-infrastructure.jpg'
    },
    {
      name: 'Development Platform',
      description: 'Complete development environment with CI/CD tools',
      price: '$149/month',
      rating: 4.6,
      category: 'Development Tools',
      image: '/images/products/development-platform.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Filter, Star, Heart, ArrowRight, Zap, Shield, Cloud, Database, Cpu, Users } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart },
    { id: 'hardware', name: 'Hardware', icon: Cpu },
    { id: 'software', name: 'Software', icon: Database },
    { id: 'services', name: 'Services', icon: Users },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'cloud', name: 'Cloud', icon: Cloud }
  ];

  const products = [
    {
      id: 1,
      name: 'AI-Powered Analytics Suite',
      category: 'software',
      description: 'Advanced business intelligence with machine learning capabilities',
      price: '$299/month',
      rating: 4.8,
      reviews: 124,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=AI+Analytics',
      features: ['Machine Learning', 'Real-time Data', 'Custom Dashboards']
    },
    {
      id: 2,
      name: 'Enterprise Security Bundle',
      category: 'security',
      description: 'Comprehensive cybersecurity solution for large organizations',
      price: '$599/month',
      rating: 4.9,
      reviews: 89,
      image: 'https://via.placeholder.com/300x200/dc2626/ffffff?text=Security+Bundle',
      features: ['Threat Detection', '24/7 Monitoring', 'Compliance Ready']
    },
    {
      id: 3,
      name: 'Cloud Infrastructure Package',
      category: 'cloud',
      description: 'Scalable cloud solutions with managed services',
      price: '$199/month',
      rating: 4.7,
      reviews: 156,
      image: 'https://via.placeholder.com/300x200/059669/ffffff?text=Cloud+Infra',
      features: ['Auto-scaling', '99.9% Uptime', 'Global CDN']
    },
    {
      id: 4,
      name: 'High-Performance Server',
      category: 'hardware',
      description: 'Enterprise-grade server with latest specifications',
      price: '$2,999',
      rating: 4.6,
      reviews: 67,
      image: 'https://via.placeholder.com/300x200/ea580c/ffffff?text=Server',
      features: ['64GB RAM', '2TB SSD', 'Dual CPU']
    },
    {
      id: 5,
      name: 'Data Management Platform',
      category: 'software',
      description: 'Unified data platform for analytics and insights',
      price: '$399/month',
      rating: 4.8,
      reviews: 203,
      image: 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=Data+Platform',
      features: ['Data Integration', 'ETL Tools', 'Visualization']
    },
    {
      id: 6,
      name: 'IoT Development Kit',
      category: 'hardware',
      description: 'Complete IoT solution for connected devices',
      price: '$499',
      rating: 4.5,
      reviews: 78,
      image: 'https://via.placeholder.com/300x200/0891b2/ffffff?text=IoT+Kit',
      features: ['Sensors', 'Gateway', 'Cloud API']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Marketplace</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
=======
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
              Discover Amazing
              <span className="text-gradient"> Products</span>
            </h1>
            
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our curated marketplace of cutting-edge technology products and services. 
              From AI solutions to infrastructure tools, find everything you need to accelerate 
              your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300">
                Sell Your Product
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Browse our curated collection of cutting-edge technology products, 
              software solutions, and professional services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories and Products */}
      <section className="py-20">
        <div className="container-responsive">
          {/* Categories */}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 text-center cursor-pointer hover:transform hover:scale-105"
              >
                <Package className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <span className="text-white font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked solutions that deliver exceptional value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
=======
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-black font-semibold'
                      : 'bg-white/5 text-zion-slate-light hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Package className="w-12 h-12 text-purple-400" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-purple-400 font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
=======
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zion-cyan font-medium uppercase tracking-wide">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{product.rating}</span>
                      <span className="text-sm text-zion-slate-light">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-zion-slate-light mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{product.price}</div>
                    <button className="btn-futuristic px-6 py-2 text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-zion-slate-light text-xl mb-4">
                No products found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-zion-cyan hover:text-white transition-colors duration-300"
              >
                Clear filters and try again
              </button>
            </motion.div>
          )}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
      <section className="py-20">
        <div className="container-responsive">
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Find Your Perfect Solution?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Explore our marketplace and discover innovative products that can transform 
                your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Browse All Products
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                  Contact Sales
=======
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us know what you need and we'll help you find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Request Custom Solution
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Contact Sales Team
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}