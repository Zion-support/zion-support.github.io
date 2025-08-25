import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, Heart, Eye, Download, Code, Brain, Shield, Database, Globe, Zap, Users, TrendingUp, Clock, Tag, ArrowRight, ShoppingBag, Package, Award } from 'lucide-react';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package, count: 156 },
    { id: 'ai-models', name: 'AI Models', icon: Brain, count: 45 },
    { id: 'security', name: 'Security Tools', icon: Shield, count: 32 },
    { id: 'data', name: 'Data Solutions', icon: Database, count: 28 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 23 },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, count: 18 },
    { id: 'integration', name: 'Integrations', icon: Globe, count: 15 }
  ];

  const marketplaceItems = [
    {
      id: 1,
      title: 'Advanced AI Content Generator',
      category: 'ai-models',
      description: 'Enterprise-grade AI content generation with advanced NLP capabilities and multi-language support.',
      price: 299,
      originalPrice: 499,
      rating: 4.8,
      reviews: 127,
      downloads: 2341,
      tags: ['AI', 'Content Generation', 'NLP', 'Multi-language'],
      image: '/images/marketplace/ai-content-generator.jpg',
      author: 'Zion Tech Labs',
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: 'Quantum-Safe Encryption Suite',
      category: 'security',
      description: 'Next-generation encryption solution designed to withstand quantum computing attacks.',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 89,
      downloads: 1567,
      tags: ['Security', 'Encryption', 'Quantum-Safe', 'Compliance'],
      image: '/images/marketplace/quantum-encryption.jpg',
      author: 'Quantum Security Pro',
      featured: true,
      icon: Shield
    },
    {
      id: 3,
      title: 'Real-Time Data Analytics Platform',
      category: 'analytics',
      description: 'High-performance analytics platform for real-time data processing and visualization.',
      price: 399,
      originalPrice: 599,
      rating: 4.7,
      reviews: 203,
      downloads: 3421,
      tags: ['Analytics', 'Real-time', 'Data Processing', 'Visualization'],
      image: '/images/marketplace/data-analytics.jpg',
      author: 'DataFlow Systems',
      featured: false,
      icon: TrendingUp
    },
    {
      id: 4,
      title: 'AI-Powered Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation platform that learns and adapts to your business processes.',
      price: 249,
      originalPrice: 349,
      rating: 4.6,
      reviews: 156,
      downloads: 2189,
      tags: ['Automation', 'AI', 'Workflow', 'Business Process'],
      image: '/images/marketplace/workflow-automation.jpg',
      author: 'AutoFlow Solutions',
      featured: false,
      icon: Zap
    },
    {
      id: 5,
      title: 'Enterprise Data Integration Hub',
      category: 'data',
      description: 'Comprehensive data integration solution for connecting disparate systems and databases.',
      price: 349,
      originalPrice: 499,
      rating: 4.8,
      reviews: 178,
      downloads: 2876,
      tags: ['Data Integration', 'Enterprise', 'ETL', 'API'],
      image: '/images/marketplace/data-integration.jpg',
      author: 'DataConnect Pro',
      featured: true,
      icon: Database
    },
    {
      id: 6,
      title: 'AI-Powered Threat Detection',
      category: 'security',
      description: 'Advanced threat detection system using machine learning to identify and prevent cyber attacks.',
      price: 279,
      originalPrice: 379,
      rating: 4.9,
      reviews: 234,
      downloads: 4123,
      tags: ['Security', 'Threat Detection', 'AI', 'Machine Learning'],
      image: '/images/marketplace/threat-detection.jpg',
      author: 'CyberGuard AI',
      featured: false,
      icon: Shield
    }
  ];

  const featuredItems = marketplaceItems.filter(item => item.featured);
  const filteredItems = marketplaceItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (searchQuery === '' || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const stats = [
    { label: 'Total Solutions', value: '156+', icon: Package },
    { label: 'Active Users', value: '25K+', icon: Users },
    { label: 'Downloads', value: '100K+', icon: Download },
    { label: 'Categories', value: '7', icon: Tag }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI solutions, security tools, and enterprise technologies from leading developers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Browse Solutions
            </button>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Submit Your Solution
            </Link>
          </div>
        </div>

        {/* Marketplace Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for solutions, tools, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="text-xs opacity-75">({category.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Solutions */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{item.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({item.reviews})</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">by {item.author}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">${item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Solution
                      </button>
                      <button className="p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Solutions */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              All Solutions
            </h2>
            <div className="text-gray-300">
              Showing {filteredItems.length} of {marketplaceItems.length} solutions
            </div>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{item.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({item.reviews})</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">by {item.author}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">${item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Solution
                      </button>
                      <button className="p-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Solution to Share?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our marketplace and showcase your innovative solutions to thousands of potential customers. 
              Get started today and reach a global audience of technology professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Submit Your Solution
              </Link>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}