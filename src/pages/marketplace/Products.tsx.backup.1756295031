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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Amazing
              <span className="text-gradient"> Products</span>
            </h1>
            
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}