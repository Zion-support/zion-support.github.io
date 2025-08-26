import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  ShoppingCart, 
  Heart,
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain,
  Lock,
  Cpu,
  Globe,
  Users,
  Rocket,
  Code,
  Database,
  Network,
  ArrowRight,
  ChevronRight,
  Package,
  Briefcase,
  Wrench,
  Leaf
} from 'lucide-react';

export default function Marketplace() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package, color: 'from-zion-cyan to-zion-blue', count: 1250 },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: 156 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: 89 },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud, color: 'from-zion-blue to-zion-cyan', count: 234 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-purple', count: 45 },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue', count: 78 },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan', count: 123 },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: TrendingUp, color: 'from-zion-orange to-zion-purple', count: 167 },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple', count: 89 },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-zion-green to-zion-blue', count: 67 },
    { id: 'equipment', name: 'Equipment', icon: Wrench, color: 'from-zion-blue to-zion-cyan', count: 234 },
    { id: 'services', name: 'Professional Services', icon: Briefcase, color: 'from-zion-cyan to-zion-green', count: 189 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence Suite',
      category: 'AI & Analytics',
      price: 2499,
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/200',
      description: 'Advanced analytics platform with machine learning capabilities',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
      featured: true
    },
    {
      id: 2,
      name: 'Quantum-Safe Encryption Protocol',
      category: 'Cybersecurity',
      price: 1899,
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      description: 'Next-generation encryption resistant to quantum attacks',
      tags: ['Cybersecurity', 'Quantum', 'Encryption', 'Security'],
      featured: true
    },
    {
      id: 3,
      name: 'Cloud Migration Toolkit',
      category: 'Cloud Solutions',
      price: 1299,
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/200',
      description: 'Comprehensive tools for seamless cloud migration',
      tags: ['Cloud', 'Migration', 'DevOps', 'Infrastructure'],
      featured: true
    },
    {
      id: 4,
      name: 'IoT Edge Computing Platform',
      category: 'IoT & Edge',
      price: 899,
      rating: 4.6,
      reviews: 78,
      image: '/api/placeholder/300/200',
      description: 'Scalable edge computing solution for IoT deployments',
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Scalable'],
      featured: true
    }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Marketplace</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover cutting-edge technology solutions, professional services, and innovative products from leading tech companies and experts.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, services, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Browse Categories</h2>
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/category/${category.id}`}>
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-lg text-center group-hover:shadow-lg transition-all duration-300`}>
                    <category.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} items</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zinc-700/50 text-white border border-zion-cyan/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <Package className="w-16 h-16 text-zion-cyan/50" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">{product.category}</span>
                      {product.featured && (
                        <span className="text-xs bg-zion-purple/20 text-zion-purple px-2 py-1 rounded-full">Featured</span>
                      )}
                    </div>
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{product.rating}</span>
                        <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                      </div>
                      <span className="text-zion-cyan font-bold">${product.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors border border-zion-cyan/20 rounded-lg hover:border-zion-cyan/40">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-24 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-12 h-12 text-zion-cyan/50" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">{product.category}</span>
                        {product.featured && (
                          <span className="text-xs bg-zion-purple/20 text-zion-purple px-2 py-1 rounded-full">Featured</span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-zion-slate-light mb-3">{product.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{product.rating}</span>
                          <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                        </div>
                        <span className="text-zion-cyan font-bold text-lg">${product.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors border border-zion-cyan/20 rounded-lg hover:border-zion-cyan/40">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using Zion Tech Group solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started Today
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
