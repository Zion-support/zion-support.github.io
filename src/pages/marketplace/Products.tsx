import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  Share2,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Server,
  BarChart3,
  Users,
  Code,
  Network,
  Atom,
  TrendingUp,
  Globe,
  Cpu,
  Lock,
  Database,
  Rocket,
  Star,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Tag,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Package,
  Truck,
  CreditCard,
  Shield as ShieldIcon,
  RefreshCw,
  Settings,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Zap as ZapIcon,
  MessageCircle
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function MarketplaceProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: Package, count: 156 },
    { id: 'ai-tools', name: 'AI Tools & Software', icon: Brain, count: 45 },
    { id: 'cybersecurity', name: 'Cybersecurity Solutions', icon: Shield, count: 32 },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud, count: 28 },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, count: 25 },
    { id: 'development', name: 'Development Tools', icon: Code, count: 18 },
    { id: 'iot', name: 'IoT Solutions', icon: Network, count: 8 }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'free', name: 'Free', range: 'Free' },
    { id: 'under-50', name: 'Under $50', range: '$0 - $50' },
    { id: '50-200', name: '$50 - $200', range: '$50 - $200' },
    { id: '200-500', name: '$200 - $500', range: '$200 - $500' },
    { id: 'over-500', name: 'Over $500', range: '$500+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'popular', name: 'Most Popular' }
  ];

  const products = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation tool that generates high-quality articles, blog posts, and marketing copy.",
      longDescription: "Transform your content creation process with our AI Content Generator Pro. This powerful tool uses advanced language models to create engaging, SEO-optimized content in seconds. Perfect for marketers, content creators, and businesses looking to scale their content production.",
      category: "ai-tools",
      price: 99.99,
      originalPrice: 149.99,
      currency: "USD",
      rating: 4.8,
      reviewCount: 1247,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "AI-powered content generation",
        "SEO optimization",
        "Multiple content types",
        "Plagiarism-free content",
        "24/7 support"
      ],
      tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 500,
      featured: true,
      new: false,
      discount: 33,
      deliveryTime: "Instant",
      deliveryType: "Digital Download",
      warranty: "30-day money-back guarantee",
      compatibility: ["Windows", "Mac", "Linux", "Web"],
      fileSize: "2.5 MB",
      version: "2.1.0",
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      name: "Quantum Security Suite",
      description: "Next-generation cybersecurity solution powered by quantum-resistant algorithms and AI threat detection.",
      longDescription: "Protect your digital assets with our Quantum Security Suite, featuring quantum-resistant encryption, AI-powered threat detection, and real-time monitoring. This comprehensive security solution is designed to protect against both current and future cyber threats.",
      category: "cybersecurity",
      price: 299.99,
      originalPrice: 399.99,
      currency: "USD",
      rating: 4.9,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "Quantum-resistant encryption",
        "AI threat detection",
        "Real-time monitoring",
        "Automated response",
        "Compliance reporting"
      ],
      tags: ["Cybersecurity", "Quantum", "AI", "Encryption", "Monitoring"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 200,
      featured: true,
      new: true,
      discount: 25,
      deliveryTime: "1-2 business days",
      deliveryType: "Digital Download + Physical",
      warranty: "1-year warranty",
      compatibility: ["Windows", "Mac", "Linux", "Enterprise"],
      fileSize: "45.2 MB",
      version: "1.0.0",
      lastUpdated: "2025-01-10"
    },
    {
      id: 3,
      name: "Cloud Infrastructure Manager",
      description: "Comprehensive cloud infrastructure management platform with automated scaling and cost optimization.",
      longDescription: "Streamline your cloud operations with our Cloud Infrastructure Manager. This platform provides automated scaling, cost optimization, monitoring, and management tools for multi-cloud environments. Perfect for DevOps teams and cloud architects.",
      category: "cloud-services",
      price: 199.99,
      originalPrice: 249.99,
      currency: "USD",
      rating: 4.7,
      reviewCount: 567,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "Multi-cloud management",
        "Automated scaling",
        "Cost optimization",
        "Real-time monitoring",
        "DevOps integration"
      ],
      tags: ["Cloud", "DevOps", "Infrastructure", "Automation", "Monitoring"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 150,
      featured: false,
      new: false,
      discount: 20,
      deliveryTime: "Instant",
      deliveryType: "Digital Download",
      warranty: "90-day money-back guarantee",
      compatibility: ["AWS", "Azure", "GCP", "Kubernetes"],
      fileSize: "15.8 MB",
      version: "3.2.1",
      lastUpdated: "2025-01-08"
    },
    {
      id: 4,
      name: "Data Analytics Dashboard Pro",
      description: "Advanced business intelligence platform with real-time analytics, custom dashboards, and predictive insights.",
      longDescription: "Transform your data into actionable insights with our Data Analytics Dashboard Pro. This comprehensive BI platform offers real-time analytics, custom dashboards, predictive modeling, and advanced reporting capabilities for data-driven decision making.",
      category: "data-analytics",
      price: 149.99,
      originalPrice: 199.99,
      currency: "USD",
      rating: 4.6,
      reviewCount: 423,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "Real-time analytics",
        "Custom dashboards",
        "Predictive modeling",
        "Advanced reporting",
        "Data visualization"
      ],
      tags: ["Analytics", "BI", "Dashboard", "Predictive", "Visualization"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 300,
      featured: false,
      new: false,
      discount: 25,
      deliveryTime: "Instant",
      deliveryType: "Digital Download",
      warranty: "60-day money-back guarantee",
      compatibility: ["Windows", "Mac", "Linux", "Web"],
      fileSize: "28.4 MB",
      version: "2.5.3",
      lastUpdated: "2025-01-05"
    },
    {
      id: 5,
      name: "IoT Edge Computing Platform",
      description: "Complete IoT solution with edge computing capabilities, real-time processing, and cloud integration.",
      longDescription: "Build and deploy IoT solutions with our Edge Computing Platform. This comprehensive platform provides edge computing capabilities, real-time data processing, cloud integration, and device management for industrial and commercial IoT applications.",
      category: "iot",
      price: 399.99,
      originalPrice: 499.99,
      currency: "USD",
      rating: 4.8,
      reviewCount: 234,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "Edge computing",
        "Real-time processing",
        "Cloud integration",
        "Device management",
        "Security protocols"
      ],
      tags: ["IoT", "Edge Computing", "Real-time", "Cloud", "Security"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 100,
      featured: false,
      new: true,
      discount: 20,
      deliveryTime: "3-5 business days",
      deliveryType: "Digital Download + Hardware",
      warranty: "2-year warranty",
      compatibility: ["Linux", "ARM", "x86", "Custom Hardware"],
      fileSize: "156.7 MB",
      version: "1.0.0",
      lastUpdated: "2025-01-12"
    },
    {
      id: 6,
      name: "AI Development Toolkit",
      description: "Comprehensive toolkit for AI and machine learning development with pre-trained models and frameworks.",
      longDescription: "Accelerate your AI development with our comprehensive toolkit. This package includes pre-trained models, development frameworks, documentation, and tools for building, training, and deploying machine learning models across various domains.",
      category: "development",
      price: 79.99,
      originalPrice: 99.99,
      currency: "USD",
      rating: 4.5,
      reviewCount: 678,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
      ],
      features: [
        "Pre-trained models",
        "Development frameworks",
        "Documentation",
        "Example projects",
        "Community support"
      ],
      tags: ["AI", "Machine Learning", "Development", "Frameworks", "Models"],
      vendor: "Zion Tech Group",
      vendorRating: 4.9,
      vendorVerified: true,
      inStock: true,
      stockCount: 1000,
      featured: false,
      new: false,
      discount: 20,
      deliveryTime: "Instant",
      deliveryType: "Digital Download",
      warranty: "30-day money-back guarantee",
      compatibility: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
      fileSize: "2.1 GB",
      version: "4.1.2",
      lastUpdated: "2025-01-03"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'free' && product.price === 0) ||
                        (selectedPriceRange === 'under-50' && product.price < 50) ||
                        (selectedPriceRange === '50-200' && product.price >= 50 && product.price <= 200) ||
                        (selectedPriceRange === '200-500' && product.price > 200 && product.price <= 500) ||
                        (selectedPriceRange === 'over-500' && product.price > 500);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.reviewCount - a.reviewCount;
      default:
        return b.featured ? 1 : -1;
    }
  });

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Marketplace Products - Zion Tech Group"
        description="Discover innovative technology products in our marketplace. From AI tools to cybersecurity solutions, find the perfect products for your business needs."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Marketplace <span className="text-zion-cyan">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Discover cutting-edge technology products, software solutions, and tools 
            designed to accelerate your business growth and innovation.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* View Mode Toggle */}
              <div className="flex bg-zion-slate-light/10 rounded-lg p-1 border border-zion-slate-light/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-all duration-200"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-zion-slate-light/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                      setSearchQuery('');
                    }}
                    className="w-full px-4 py-2 bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30 rounded-lg hover:bg-zion-slate-light/30 hover:text-white transition-all duration-200"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-4 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-zion-slate-light">
            <span>Showing {sortedProducts.length} of {products.length} products</span>
            <span>Sort by: {sortOptions.find(opt => opt.id === sortBy)?.name}</span>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {sortedProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'h-full' : 'h-48'
                      }`}
                    />
                    {product.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                    {product.new && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                          <Sparkles className="w-3 h-3 mr-1" />
                          New
                        </span>
                      </div>
                    )}
                    {product.discount > 0 && (
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                          -{product.discount}%
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category and Vendor */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-zion-slate-light text-sm">{product.vendor}</span>
                        {product.vendorVerified && (
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        )}
                      </div>
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-zion-cyan transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {product.discount > 0 ? (
                          <div>
                            <span className="text-zion-cyan">{formatPrice(product.price, product.currency)}</span>
                            <span className="text-zion-slate-light text-lg line-through ml-2">
                              {formatPrice(product.originalPrice, product.currency)}
                            </span>
                          </div>
                        ) : (
                          formatPrice(product.price, product.currency)
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 group-hover:scale-105">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </button>
                      <button className="inline-flex items-center justify-center px-4 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-zion-slate-light mb-8">
              We're constantly adding new products and solutions. Contact us to discuss 
              custom solutions or request specific products for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Custom Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}