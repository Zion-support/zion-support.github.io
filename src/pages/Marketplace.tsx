<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
<<<<<<< HEAD
  Grid, 
  List, 
  Star, 
  ShoppingCart,
  Eye,
=======
  Star, 
  ShoppingCart, 
  Eye, 
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
<<<<<<< HEAD
  Code,
  Database,
  Globe,
  Users
} from 'lucide-react';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Grid className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-4 h-4" /> },
    { id: 'saas', name: 'Micro SAAS', icon: <Code className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-4 h-4" /> }
=======
  Users,
  Globe
} from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Globe className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'enterprise', name: 'Enterprise', icon: <Users className="w-5 h-5" /> }
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
  ];

  const products = [
    {
      id: 1,
      name: "AI Business Intelligence Suite",
      category: "ai",
<<<<<<< HEAD
      description: "Transform your business data into actionable insights with our advanced AI analytics platform",
      price: 299,
      currency: "$",
      pricingModel: "per month",
      rating: 4.8,
      reviews: 127,
      image: "🤖",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      id: 2,
      name: "Micro SAAS Starter Kit",
      category: "saas",
      description: "Complete foundation for building and launching your micro SAAS business",
      price: 199,
      currency: "$",
      pricingModel: "per month",
      rating: 4.9,
      reviews: 89,
      image: "🚀",
      features: ["User Management", "Subscription Billing", "Analytics Dashboard", "Multi-tenant Support"],
      tags: ["SAAS", "Startup", "B2B", "Scalable"]
    },
    {
      id: 3,
      name: "Cloud Infrastructure Manager",
      category: "cloud",
      description: "Optimize and manage your cloud infrastructure for performance and cost",
      price: 149,
      currency: "$",
      pricingModel: "per month",
      rating: 4.7,
      reviews: 156,
      image: "☁️",
      features: ["Cost Optimization", "Performance Monitoring", "Auto-scaling", "Security Hardening"],
      tags: ["Cloud", "DevOps", "Infrastructure", "AWS/Azure"]
    },
    {
      id: 4,
      name: "Cybersecurity Compliance Suite",
      category: "security",
      description: "Achieve and maintain compliance with industry standards and regulations",
      price: 399,
      currency: "$",
      pricingModel: "per month",
      rating: 4.9,
      reviews: 203,
      image: "🔒",
      features: ["SOC 2 Compliance", "GDPR Compliance", "HIPAA Compliance", "Regular Audits"],
      tags: ["Security", "Compliance", "Enterprise", "Audit"]
    },
    {
      id: 5,
      name: "Data Analytics Platform",
      category: "data",
      description: "Comprehensive data analytics and visualization platform for enterprises",
      price: 249,
      currency: "$",
      pricingModel: "per month",
      rating: 4.6,
      reviews: 94,
      image: "📊",
      features: ["Data Visualization", "ETL Processing", "Real-time Streaming", "Advanced Reporting"],
      tags: ["Data", "Analytics", "Visualization", "Big Data"]
    },
    {
      id: 6,
      name: "AI Chatbot Platform",
      category: "ai",
      description: "Build intelligent chatbots and virtual assistants for customer service",
      price: 179,
      currency: "$",
      pricingModel: "per month",
      rating: 4.8,
      reviews: 167,
      image: "💬",
      features: ["Natural Language Processing", "Multi-language Support", "Integration APIs", "Analytics Dashboard"],
      tags: ["AI", "Chatbot", "Customer Service", "NLP"]
=======
      description: "Advanced analytics and business intelligence powered by artificial intelligence",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 127,
      image: "🤖",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Access"],
      tags: ["AI", "Analytics", "Business Intelligence"]
    },
    {
      id: 2,
      name: "Cloud Infrastructure Manager",
      category: "cloud",
      description: "Comprehensive cloud infrastructure management and optimization platform",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 89,
      image: "☁️",
      features: ["Multi-cloud Support", "Auto-scaling", "Cost Optimization", "24/7 Monitoring"],
      tags: ["Cloud", "DevOps", "Infrastructure"]
    },
    {
      id: 3,
      name: "Cybersecurity Compliance Hub",
      category: "security",
      description: "Complete cybersecurity compliance and threat management solution",
      price: 399,
      originalPrice: 499,
      rating: 4.9,
      reviews: 156,
      image: "🔒",
      features: ["SOC2 Compliance", "Threat Detection", "Incident Response", "Security Training"],
      tags: ["Security", "Compliance", "Cybersecurity"]
    },
    {
      id: 4,
      name: "Micro SAAS Starter Kit",
      category: "saas",
      description: "Complete toolkit for building and launching micro SAAS applications",
      price: 99,
      originalPrice: 149,
      rating: 4.7,
      reviews: 203,
      image: "🚀",
      features: ["Template Library", "Deployment Tools", "Analytics", "Support"],
      tags: ["SAAS", "Development", "Templates"]
    },
    {
      id: 5,
      name: "Enterprise Data Platform",
      category: "enterprise",
      description: "Scalable enterprise data management and analytics platform",
      price: 999,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 67,
      image: "🏢",
      features: ["Data Warehousing", "ETL Pipelines", "Advanced Analytics", "Enterprise Security"],
      tags: ["Enterprise", "Data", "Analytics"]
    },
    {
      id: 6,
      name: "AI Chatbot Builder",
      category: "ai",
      description: "No-code AI chatbot creation platform for customer service",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      reviews: 94,
      image: "💬",
      features: ["No-code Builder", "Multi-language", "Integration APIs", "Analytics"],
      tags: ["AI", "Chatbot", "Customer Service"]
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Discover cutting-edge technology solutions, micro SAAS platforms, and AI-powered tools 
            designed to accelerate your business growth.
=======
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge technology solutions, AI tools, and enterprise software designed to transform your business.
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search products and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
=======
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
              />
            </div>
          </div>

<<<<<<< HEAD
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
=======
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
<<<<<<< HEAD
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/10 text-zion-slate-light border border-white/20 hover:bg-white/20'
=======
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/20 text-zion-slate-light hover:bg-white/30 border border-white/30'
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* View Mode Toggle */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-zion-slate-light">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
=======
      {/* Filters and Sorting */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
            <div className="text-zion-slate-light">
              {filteredProducts.length} products found
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Products Grid/List */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                  <div className="p-6">
                    {/* Product Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{product.image}</div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {product.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zion-slate-light">{product.rating}</span>
                          <span className="text-xs text-zion-slate-light">({product.reviews})</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
=======
      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                  {/* Product Image */}
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {categories.find(c => c.id === product.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

<<<<<<< HEAD
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{product.currency}{product.price}</span>
                        <span className="text-zion-slate-light">{product.pricingModel}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-zion-cyan hover:bg-zion-cyan/90 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Started
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-medium transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl flex-shrink-0">{product.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                                {product.category.toUpperCase()}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-zion-slate-light">{product.rating}</span>
                                <span className="text-xs text-zion-slate-light">({product.reviews})</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                            <p className="text-zion-slate-light leading-relaxed">{product.description}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-1">{product.currency}{product.price}</div>
                            <div className="text-zion-slate-light text-sm">{product.pricingModel}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-zion-cyan mb-2">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                          <button className="bg-zion-cyan hover:bg-zion-cyan/90 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Get Started
                          </button>
                          <Link
                            to={`/product/${product.id}`}
                            className="px-6 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-medium transition-colors"
                          >
                            View Details
                          </Link>
                          <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
=======
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-zion-cyan">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-zion-slate-light line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8">
            We offer custom development services to create tailored solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Solution
            </Link>
            <Link
              to="/services"
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Can't find exactly what you're looking for? Our team can create custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Quote
            </Link>
            <Link 
              to="/services" 
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Users, 
  Settings, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const Marketplace: React.FC = () => {
  const marketplaceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and intelligence",
      icon: Brain,
      link: "/ai-services",
      features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Solutions"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      link: "/cloud-devops-solutions",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business transformation and digital solutions",
      icon: Settings,
      link: "/enterprise-solutions",
      features: ["ERP Integration", "Digital Transformation", "Process Automation", "Legacy Modernization"]
    },
    {
      title: "Micro SAAS Services",
      description: "Specialized software solutions for specific business needs",
      icon: Zap,
      link: "/micro-saas-services",
      features: ["Custom Applications", "API Development", "Database Solutions", "Web Applications"]
    },
    {
      title: "Talent & Expertise",
      description: "Access to skilled professionals and industry experts",
      icon: Users,
      link: "/talent",
      features: ["AI Engineers", "DevOps Specialists", "Data Scientists", "Full-Stack Developers"]
    },
    {
      title: "Equipment & Tools",
      description: "Professional-grade tools and equipment for IT operations",
      icon: ShoppingCart,
      link: "/equipment",
      features: ["Network Equipment", "Security Tools", "Development Tools", "Testing Equipment"]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      price: "From $2,500/month",
      rating: 4.9,
      reviews: 127,
      badge: "Popular"
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud and optimize your infrastructure for cost and performance",
      price: "From $5,000",
      rating: 4.8,
      reviews: 89,
      badge: "Featured"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment for your organization",
      price: "From $3,500",
      rating: 4.9,
      reviews: 156,
      badge: "Essential"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Marketplace
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative solutions, expert talent, and cutting-edge technology 
              to transform your business and accelerate growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Our Marketplace
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions across all technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketplaceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={category.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our most popular and highly-rated solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                {service.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-4">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already accelerated their growth 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
    </div>
  );
};

export default Marketplace;