import React from 'react';
import { ShoppingCart, Star, Download, Eye, Search, Filter, Grid, List, Heart, Share2, Play, Clock, Users, Building, Brain, Shield, Zap, Globe, Rocket } from 'lucide-react';

export default function Marketplace() {
  const products = [
    {
      id: 1,
      name: "AI Autonomous Business Manager Pro",
      description: "Advanced AI-powered business management platform that automates decision-making, process optimization, and strategic planning.",
      category: "AI Solutions",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 127,
      downloads: 2341,
      featured: true,
      tags: ["AI", "Business Automation", "Decision Making", "Process Optimization"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "2.1.0",
      lastUpdated: "2025-01-15",
      compatibility: ["Windows", "macOS", "Linux"],
      license: "Commercial",
      support: "24/7 Premium Support"
    },
    {
      id: 2,
      name: "Quantum Neural Network Suite",
      description: "Complete quantum computing solution for neural network training and optimization, featuring advanced algorithms and enterprise integration.",
      category: "Quantum Technology",
      price: 4999,
      originalPrice: 5999,
      rating: 4.8,
      reviews: 89,
      downloads: 1567,
      featured: true,
      tags: ["Quantum Computing", "Neural Networks", "Machine Learning", "Enterprise"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "1.5.2",
      lastUpdated: "2025-01-10",
      compatibility: ["Linux", "Cloud"],
      license: "Enterprise",
      support: "Dedicated Support Team"
    },
    {
      id: 3,
      name: "SOC2 Compliance Automation Toolkit",
      description: "Comprehensive toolkit for automating SOC2 compliance processes, including risk assessment, monitoring, and reporting.",
      category: "Cybersecurity",
      price: 1499,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 203,
      downloads: 3421,
      featured: false,
      tags: ["SOC2", "Compliance", "Automation", "Security"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "3.0.1",
      lastUpdated: "2025-01-08",
      compatibility: ["Windows", "Linux", "Cloud"],
      license: "Commercial",
      support: "Standard Support"
    },
    {
      id: 4,
      name: "5G Enterprise Network Optimizer",
      description: "Advanced 5G network optimization platform for enterprise environments, featuring real-time monitoring and automated optimization.",
      category: "Infrastructure",
      price: 2499,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 156,
      downloads: 2134,
      featured: false,
      tags: ["5G", "Network Optimization", "Enterprise", "Real-time"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "2.3.0",
      lastUpdated: "2025-01-05",
      compatibility: ["Linux", "Cloud"],
      license: "Enterprise",
      support: "Premium Support"
    },
    {
      id: 5,
      name: "Blockchain Supply Chain Manager",
      description: "End-to-end blockchain solution for supply chain management, featuring transparency, traceability, and smart contract automation.",
      category: "Blockchain",
      price: 1999,
      originalPrice: 2499,
      rating: 4.5,
      reviews: 98,
      downloads: 1876,
      featured: false,
      tags: ["Blockchain", "Supply Chain", "Smart Contracts", "Transparency"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "1.8.3",
      lastUpdated: "2024-12-28",
      compatibility: ["Windows", "Linux", "Cloud"],
      license: "Commercial",
      support: "Standard Support"
    },
    {
      id: 6,
      name: "AI Content Generation Studio",
      description: "Professional AI-powered content creation platform for marketing, documentation, and creative writing with advanced language models.",
      category: "AI Solutions",
      price: 899,
      originalPrice: 1199,
      rating: 4.4,
      reviews: 312,
      downloads: 4567,
      featured: false,
      tags: ["AI", "Content Generation", "Marketing", "Creative Writing"],
      image: "/api/placeholder/300/200",
      demoUrl: "#",
      documentationUrl: "#",
      version: "2.0.5",
      lastUpdated: "2024-12-20",
      compatibility: ["Windows", "macOS", "Linux", "Cloud"],
      license: "Commercial",
      support: "Standard Support"
    }
  ];

  const categories = [
    { name: "AI Solutions", icon: Brain, count: 12, color: "text-cyan-400" },
    { name: "Quantum Technology", icon: Globe, count: 8, color: "text-purple-400" },
    { name: "Cybersecurity", icon: Shield, count: 15, color: "text-red-400" },
    { name: "Infrastructure", icon: Zap, count: 10, color: "text-blue-400" },
    { name: "Blockchain", icon: Building, count: 6, color: "text-green-400" },
    { name: "Emerging Tech", icon: Rocket, count: 9, color: "text-yellow-400" }
  ];

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technology Marketplace
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, quantum computing platforms, cybersecurity tools, and more. 
            Download enterprise-grade software and solutions to transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Browse All Products
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Submit Your Product
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, categories, or features..."
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <select className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
            <select className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
              <option value="">All Prices</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Filter className="w-5 h-5 inline mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group text-center">
              <div className={`w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-all duration-200`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.count} products</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{product.rating}</span>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center text-gray-400 text-sm space-x-4">
                  <span>{product.downloads.toLocaleString()} downloads</span>
                  <span>v{product.version}</span>
                  <span>{product.license}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download
                </button>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">All Products</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Grid className="w-4 h-4" />
            </button>
            <button className="p-2 bg-cyan-500 text-white rounded-lg">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.category === 'AI Solutions' ? 'bg-cyan-500/20 text-cyan-400' :
                      product.category === 'Quantum Technology' ? 'bg-purple-500/20 text-purple-400' :
                      product.category === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' :
                      product.category === 'Infrastructure' ? 'bg-blue-500/20 text-blue-400' :
                      product.category === 'Blockchain' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {product.category}
                    </span>
                    {product.featured && <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Featured</span>}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Download className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{product.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>v{product.version}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{product.support}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-4">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{product.license} License</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                      <Download className="w-4 h-4 mr-1 inline" />
                      Download
                    </button>
                    <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our cutting-edge solutions and join thousands of businesses that have already 
            transformed their operations with Zion Tech Group's innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Start Downloading
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Submit Your Product */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Have a Great Product?</h2>
          <p className="text-gray-300 mb-8">
            Are you a developer or company with innovative technology solutions? Submit your product 
            to our marketplace and reach thousands of potential customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Submit Product
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}