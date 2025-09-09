import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  Package, 
  Settings, 
  Search, 
  Filter, 
  Star, 
  Heart,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  DollarSign,
  MessageCircle,
  Cloud,
  BarChart3
} from 'lucide-react';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package, count: 1250 },
    { id: 'products', name: 'Products', icon: Package, count: 450 },
    { id: 'talent', name: 'Talent', icon: Users, count: 320 },
    { id: 'equipment', name: 'Equipment', icon: Settings, count: 280 },
    { id: 'services', name: 'Services', icon: Globe, count: 200 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      category: 'products',
      price: '$2,999',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Enterprise-grade analytics platform with machine learning capabilities',
      tags: ['AI', 'Analytics', 'Enterprise']
    },
    {
      id: 2,
      name: 'Senior DevOps Engineer',
      category: 'talent',
      price: '$120/hr',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      description: 'Experienced DevOps engineer with 8+ years in cloud infrastructure',
      tags: ['DevOps', 'Cloud', 'Senior']
    },
    {
      id: 3,
      name: 'High-Performance Server Cluster',
      category: 'equipment',
      price: '$15,000',
      rating: 4.7,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Enterprise server cluster with 99.99% uptime guarantee',
      tags: ['Hardware', 'Enterprise', 'High-Performance']
    }
  ];

  const topCategories = [
    {
      name: 'AI & Machine Learning',
      count: 180,
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      name: 'Cloud Infrastructure',
      count: 145,
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      name: 'Cybersecurity',
      count: 120,
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-600/20'
    },
    {
      name: 'Data Analytics',
      count: 95,
      icon: BarChart3,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    }
  ];

  const marketplaceStats = [
    {
      label: 'Total Listings',
      value: '1,250+',
      icon: Package,
      color: 'text-blue-400'
    },
    {
      label: 'Active Users',
      value: '45,000+',
      icon: Users,
      color: 'text-green-400'
    },
    {
      label: 'Success Rate',
      value: '98.5%',
      icon: CheckCircle,
      color: 'text-purple-400'
    },
    {
      label: 'Response Time',
      value: '<2 hours',
      icon: Clock,
      color: 'text-orange-400'
    }
  ];

  const recentListings = [
    {
      id: 4,
      name: 'Blockchain Development Kit',
      category: 'products',
      price: '$899',
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1639762681485-074d7f9c7079?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Full-Stack Developer',
      category: 'talent',
      price: '$85/hr',
      time: '4 hours ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Network Security Firewall',
      category: 'equipment',
      price: '$3,200',
      time: '6 hours ago',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Handle category filtering
    console.log('Selected category:', categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600/20 rounded-full">
              <ShoppingCart className="h-16 w-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover, connect, and trade in the ultimate marketplace for tech products, 
            talent, and equipment. Join thousands of professionals and businesses.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, talent, or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/10 border-gray-600 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="inline h-4 w-4 mr-2" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Marketplace Stats */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {marketplaceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-full">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Top Categories */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`${category.bgColor} rounded-xl p-6 border border-slate-700 cursor-pointer hover:scale-105 transition-transform duration-200`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{category.count}</div>
                <div className="text-gray-300 text-sm">Active listings</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Listings</h2>
            <a
              href="/marketplace/products"
              className="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-200"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Heart className="h-5 w-5 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.category === 'products' ? 'bg-blue-600/20 text-blue-400' :
                      product.category === 'talent' ? 'bg-green-600/20 text-green-400' :
                      'bg-orange-600/20 text-orange-400'
                    }`}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">{product.price}</div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm">{product.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Listings */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recently Added</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.category === 'products' ? 'bg-blue-600/20 text-blue-400' :
                      listing.category === 'talent' ? 'bg-green-600/20 text-green-400' :
                      'bg-orange-600/20 text-orange-400'
                    }`}>
                      {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                    </span>
                    <span className="text-gray-400 text-xs">{listing.time}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{listing.name}</h3>
                  <div className="text-xl font-bold text-purple-400">{listing.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-600/20 rounded-full">
                  <Search className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Discover</h3>
              <p className="text-gray-300">
                Browse thousands of listings across products, talent, and equipment. 
                Use advanced filters to find exactly what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <MessageCircle className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Connect</h3>
              <p className="text-gray-300">
                Reach out to sellers, schedule consultations, and negotiate terms. 
                Our secure messaging system keeps you connected.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Trade</h3>
              <p className="text-gray-300">
                Complete transactions with confidence using our secure payment system 
                and buyer protection policies.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals and businesses in the Zion Tech Group marketplace. 
              Start buying, selling, or connecting today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/marketplace/products"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Browse Listings
              </a>
              <a
                href="/marketplace/products/create"
                className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Create Listing
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Get Help
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Marketplace;