import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye,
  Users,
  Building,
  Cpu,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const MARKETPLACE_CATEGORIES = [
  {
    id: 'products',
    title: 'Products',
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-zion-cyan to-zion-blue',
    count: 1247,
    description: 'Hardware, software, and technology products'
  },
  {
    id: 'services',
    title: 'Services',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-zion-purple to-zion-purple-dark',
    count: 892,
    description: 'Professional IT and AI services'
  },
  {
    id: 'talent',
    title: 'Talent',
    icon: <Users className="w-8 h-8" />,
    color: 'from-zion-blue to-zion-blue-dark',
    count: 1563,
    description: 'Expert professionals and consultants'
  },
  {
    id: 'equipment',
    title: 'Equipment',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-zion-green to-zion-cyan',
    count: 734,
    description: 'Industrial and laboratory equipment'
  }
];

const FEATURED_ITEMS = [
  {
    id: 1,
    type: 'product',
    title: 'AI-Powered Security Camera',
    category: 'Hardware',
    price: 299,
    currency: '$',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500',
    description: 'Advanced security camera with AI-powered threat detection and facial recognition.',
    tags: ['AI', 'Security', 'IoT', 'Smart Home'],
    location: 'San Francisco, CA',
    seller: 'TechVision Pro',
    featured: true
  },
  {
    id: 2,
    type: 'service',
    title: 'Enterprise AI Consulting',
    category: 'Consulting',
    price: 5000,
    currency: '$',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500',
    description: 'Comprehensive AI strategy and implementation consulting for enterprise businesses.',
    tags: ['AI Strategy', 'Consulting', 'Enterprise', 'Digital Transformation'],
    location: 'New York, NY',
    seller: 'AI Future Labs',
    featured: true
  },
  {
    id: 3,
    type: 'talent',
    title: 'Senior AI Engineer',
    category: 'Engineering',
    price: 150,
    currency: '$',
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=500',
    description: 'Experienced AI engineer specializing in machine learning and deep learning applications.',
    tags: ['AI Engineer', 'Machine Learning', 'Python', 'TensorFlow'],
    location: 'Remote',
    seller: 'TechTalent Hub',
    featured: true
  },
  {
    id: 4,
    type: 'equipment',
    title: 'Quantum Computing Lab Setup',
    category: 'Laboratory',
    price: 25000,
    currency: '$',
    rating: 4.7,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500',
    description: 'Complete quantum computing laboratory setup for research and development.',
    tags: ['Quantum Computing', 'Laboratory', 'Research', 'Advanced Tech'],
    location: 'Boston, MA',
    seller: 'Quantum Solutions Inc',
    featured: true
  }
];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const filteredItems = FEATURED_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <SEO 
          title="Marketplace - Zion Tech Group" 
          description="Discover cutting-edge technology products, services, talent, and equipment in our comprehensive marketplace." 
          keywords="marketplace, technology products, AI services, tech talent, equipment, Zion Tech Group" 
          url="https://ziontechgroup.com/marketplace"
        />
        
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Technology Marketplace
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge technology products, services, talent, and equipment from the world's leading innovators.
            </p>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {MARKETPLACE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{category.count.toLocaleString()} items</span>
                  <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 mb-8">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                >
                  <option value="all" className="bg-zinc-800 text-white">All Categories</option>
                  <option value="product" className="bg-zinc-800 text-white">Products</option>
                  <option value="service" className="bg-zinc-800 text-white">Services</option>
                  <option value="talent" className="bg-zinc-800 text-white">Talent</option>
                  <option value="equipment" className="bg-zinc-800 text-white">Equipment</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                >
                  <option value="featured" className="bg-zinc-800 text-white">Featured</option>
                  <option value="rating" className="bg-zinc-800 text-white">Highest Rated</option>
                  <option value="price-low" className="bg-zinc-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-zinc-800 text-white">Price: High to Low</option>
                  <option value="newest" className="bg-zinc-800 text-white">Newest</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <div className="text-zion-slate-light text-sm">
                Showing {filteredItems.length} of {FEATURED_ITEMS.length} items
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marketplace Items */}
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Item Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-lg text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-zion-cyan transition-colors duration-300">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-zion-cyan transition-colors duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-zion-blue/20 text-zion-cyan rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-xs font-medium">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue/10 text-zion-cyan text-xs rounded-full border border-zion-blue/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-zion-purple">
                        {item.currency}{item.price?.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-white">{item.rating}</span>
                        </div>
                        <span className="text-zion-slate-light text-sm">({item.reviews})</span>
                      </div>
                    </div>

                    {/* Seller and Location */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="text-zion-slate-light">
                        <span className="text-white font-medium">{item.seller}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                        <ShoppingCart className="w-4 h-4 inline mr-2" />
                        Add to Cart
                      </button>
                      <button className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 p-6"
                >
                  <div className="flex gap-6">
                    {/* Item Image */}
                    <div className="relative w-48 h-32 overflow-hidden rounded-xl flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.featured && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Item Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-zion-blue/20 text-zion-cyan rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-xs font-medium">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-blue/10 text-zion-cyan text-xs rounded-full border border-zion-blue/20">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1 text-zion-slate-light">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                          <div className="flex items-center gap-1 text-zion-slate-light">
                            <span className="text-white font-medium">{item.seller}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-semibold text-white">{item.rating}</span>
                            <span className="text-zion-slate-light">({item.reviews})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-3xl font-bold text-zion-purple">
                              {item.currency}{item.price?.toLocaleString()}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                              <ShoppingCart className="w-4 h-4 inline mr-2" />
                              Add to Cart
                            </button>
                            <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div 
            className="bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm rounded-2xl p-12 text-center border border-zion-cyan/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-zion-cyan">Explore</span> the Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of buyers and sellers in the world's most advanced technology marketplace. 
              Find what you need or showcase your innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-zion-cyan/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Selling
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}