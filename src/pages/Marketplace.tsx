import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Package, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

export default function Marketplace() {
  const categories = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence tools and services",
      count: 24
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Cybersecurity",
      description: "Advanced security solutions and threat protection",
      count: 18
    },
    {
      icon: <Package className="w-8 h-8 text-blue-400" />,
      title: "Software Tools",
      description: "Professional software development and productivity tools",
      count: 32
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Analytics",
      description: "Data analysis and business intelligence solutions",
      count: 15
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "AI-Powered Chatbot Suite",
      description: "Enterprise-grade conversational AI platform with natural language processing",
      price: "$2,499",
      rating: 4.8,
      reviews: 127,
      image: "/images/product-chatbot.jpg",
      category: "AI Solutions",
      featured: true
    },
    {
      id: 2,
      name: "Quantum Encryption Toolkit",
      description: "Next-generation encryption using quantum computing principles",
      price: "$5,999",
      rating: 4.9,
      reviews: 89,
      image: "/images/product-encryption.jpg",
      category: "Cybersecurity",
      featured: true
    },
    {
      id: 3,
      name: "Cloud DevOps Platform",
      description: "Comprehensive DevOps solution for cloud-native applications",
      price: "$1,299",
      rating: 4.7,
      reviews: 203,
      image: "/images/product-devops.jpg",
      category: "Software Tools",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology Marketplace
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, cybersecurity tools, and innovative technology 
            products from leading providers and developers.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, services, and solutions..."
                  className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
                />
              </div>
              <button className="px-6 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="flex border border-zion-cyan/20 rounded-lg overflow-hidden">
                <button className="px-3 py-3 bg-zion-cyan/20 text-zion-cyan border-r border-zion-cyan/20">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="px-3 py-3 bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50 transition-colors">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                <p className="text-zion-slate-light text-center text-sm mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="text-zion-cyan text-sm">{category.count} products</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "https://via.placeholder.com/400x300/1f2937/6b7280?text=Product+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Marketplace Coming Soon</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              We're building a comprehensive technology marketplace that will connect you with the best 
              AI solutions, cybersecurity tools, and innovative products. Sign up to be notified when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan/40 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
