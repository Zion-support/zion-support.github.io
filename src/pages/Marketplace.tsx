import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Tag,
  Category,
  SortAsc,
  SortDesc,
  Download
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
  features: string[];
  vendor: {
    name: string;
    verified: boolean;
    rating: number;
  };
  type: 'AI Tool' | 'API Service' | 'Template' | 'Plugin' | 'Dataset' | 'Course';
  status: 'Active' | 'Beta' | 'New' | 'Popular';
  downloads: number;
  lastUpdated: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'ZionGPT Pro',
    description: 'Advanced AI-powered content generation and analysis tool with multi-language support and enterprise-grade security.',
    category: 'AI Tools',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviewCount: 1247,
    image: '/api/placeholder/400/300',
    tags: ['AI', 'Content Generation', 'Multi-language', 'Enterprise'],
    features: [
      'Advanced GPT-4 integration',
      'Multi-language support (50+ languages)',
      'Enterprise security & compliance',
      'Custom model training',
      'API access included'
    ],
    vendor: {
      name: 'Zion Tech Group',
      verified: true,
      rating: 4.9
    },
    type: 'AI Tool',
    status: 'Popular',
    downloads: 15420,
    lastUpdated: '2 days ago'
  },
  {
    id: '2',
    name: 'DataViz Pro Suite',
    description: 'Comprehensive data visualization and analytics platform with real-time dashboards and advanced reporting.',
    category: 'Analytics',
    price: 79.99,
    rating: 4.6,
    reviewCount: 892,
    image: '/api/placeholder/400/300',
    tags: ['Data Visualization', 'Analytics', 'Dashboards', 'Real-time'],
    features: [
      'Interactive dashboards',
      'Real-time data streaming',
      'Advanced chart types',
      'Custom reporting',
      'Team collaboration'
    ],
    vendor: {
      name: 'DataFlow Solutions',
      verified: true,
      rating: 4.7
    },
    type: 'Plugin',
    status: 'Active',
    downloads: 8920,
    lastUpdated: '1 week ago'
  },
  {
    id: '3',
    name: 'SecureAPI Gateway',
    description: 'Enterprise-grade API management and security platform with rate limiting and authentication.',
    category: 'API Services',
    price: 149.99,
    rating: 4.9,
    reviewCount: 567,
    image: '/api/placeholder/400/300',
    tags: ['API Management', 'Security', 'Rate Limiting', 'Authentication'],
    features: [
      'Advanced security protocols',
      'Rate limiting & throttling',
      'OAuth 2.0 & JWT support',
      'API analytics & monitoring',
      'Developer portal'
    ],
    vendor: {
      name: 'SecureNet Systems',
      verified: true,
      rating: 4.8
    },
    type: 'API Service',
    status: 'New',
    downloads: 3450,
    lastUpdated: '3 days ago'
  },
  {
    id: '4',
    name: 'React Enterprise Starter',
    description: 'Production-ready React application template with TypeScript, testing, and CI/CD setup.',
    category: 'Templates',
    price: 29.99,
    rating: 4.7,
    reviewCount: 1234,
    image: '/api/placeholder/400/300',
    tags: ['React', 'TypeScript', 'Template', 'Enterprise'],
    features: [
      'TypeScript configuration',
      'Testing setup (Jest, RTL)',
      'CI/CD pipeline',
      'Docker configuration',
      'Documentation included'
    ],
    vendor: {
      name: 'DevTemplates Pro',
      verified: true,
      rating: 4.6
    },
    type: 'Template',
    status: 'Active',
    downloads: 15670,
    lastUpdated: '2 weeks ago'
  },
  {
    id: '5',
    name: 'ML Dataset Collection',
    description: 'Curated machine learning datasets for computer vision, NLP, and predictive analytics.',
    category: 'Datasets',
    price: 49.99,
    rating: 4.5,
    reviewCount: 456,
    image: '/api/placeholder/400/300',
    tags: ['Machine Learning', 'Datasets', 'Computer Vision', 'NLP'],
    features: [
      '10,000+ labeled images',
      'Text corpus (1M+ documents)',
      'Time series data',
      'Data validation scripts',
      'Usage examples'
    ],
    vendor: {
      name: 'DataScience Hub',
      verified: true,
      rating: 4.5
    },
    type: 'Dataset',
    status: 'Active',
    downloads: 6780,
    lastUpdated: '1 month ago'
  },
  {
    id: '6',
    name: 'AI Business Course',
    description: 'Comprehensive course on implementing AI solutions in business with practical case studies.',
    category: 'Education',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 789,
    image: '/api/placeholder/400/300',
    tags: ['AI', 'Business', 'Course', 'Case Studies'],
    features: [
      '20+ hours of content',
      'Practical exercises',
      'Real business cases',
      'Certificate included',
      'Lifetime access'
    ],
    vendor: {
      name: 'AI Academy Pro',
      verified: true,
      rating: 4.9
    },
    type: 'Course',
    status: 'Popular',
    downloads: 2340,
    lastUpdated: '1 week ago'
  }
];

const categories = [
  'All Categories',
  'AI Tools',
  'Analytics',
  'API Services',
  'Templates',
  'Datasets',
  'Education',
  'Security',
  'Development'
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular', icon: TrendingUp },
  { value: 'rating', label: 'Highest Rated', icon: Star },
  { value: 'newest', label: 'Newest', icon: Clock },
  { value: 'price-low', label: 'Price: Low to High', icon: SortAsc },
  { value: 'price-high', label: 'Price: High to Low', icon: SortDesc }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState<Set<string>>(new Set());
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.downloads - a.downloads;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const addToCart = (productId: string) => {
    setCart(prev => new Set([...prev, productId]));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-green-500/20 text-green-400';
      case 'Popular':
        return 'bg-orange-500/20 text-orange-400';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Explore our marketplace of AI-powered technology solutions and services. Find the perfect tools, APIs, templates, and datasets for your business needs."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              AI Technology
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Marketplace</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover cutting-edge AI tools, APIs, templates, and datasets. 
              Find the perfect solutions to accelerate your business and stay ahead of the competition.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for AI tools, APIs, templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-700 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-slate-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-zion-cyan text-slate-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-300">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Cart: {cart.size} items</span>
              <span className="text-gray-400">Wishlist: {wishlist.size} items</span>
            </div>
          </div>

          {/* Products */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-2xl overflow-hidden border border-slate-600/50 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Product Image</div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          wishlist.has(product.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-slate-800/80 text-gray-400 hover:text-white'
                        }`}
                      >
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-slate-800/80 text-gray-400 hover:text-white transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                    {product.status !== 'Active' && (
                      <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
                      </div>
                    </div>

                    {/* Vendor Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-400">{product.vendor.name}</span>
                      {product.vendor.verified && (
                        <Shield className="h-4 w-4 text-zion-cyan" />
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{product.vendor.rating}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-600/50 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{product.rating}</span>
                        <span>({product.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{product.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-gray-400 text-xs text-center">Product Image</div>
                      {product.status !== 'Active' && (
                        <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-2">{product.name}</h3>
                          <p className="text-gray-300 mb-3">{product.description}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              wishlist.has(product.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-slate-600 text-gray-400 hover:text-white'
                            }`}
                          >
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 rounded-lg bg-slate-600 text-gray-400 hover:text-white transition-colors">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Vendor and Rating */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">{product.vendor.name}</span>
                          {product.vendor.verified && (
                            <Shield className="h-4 w-4 text-zion-cyan" />
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-gray-300">{product.rating}</span>
                          <span className="text-gray-400">({product.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-400">{product.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-600/50 text-gray-300 text-sm rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-white">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-gray-400 line-through text-lg">${product.originalPrice}</span>
                            )}
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{product.type}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">Updated {product.lastUpdated}</span>
                        </div>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center gap-2"
                        >
                          <ShoppingCart className="h-5 w-5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                }}
                className="px-6 py-3 bg-zion-cyan text-slate-900 rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why Choose Our Marketplace?
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              We curate the best AI and technology solutions to help your business succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Vendors',
                description: 'All vendors are thoroughly vetted and verified for quality and reliability'
              },
              {
                icon: Zap,
                title: 'Latest Technology',
                description: 'Access to cutting-edge AI tools and the newest technological innovations'
              },
              {
                icon: Globe,
                title: 'Global Community',
                description: 'Connect with developers and businesses from around the world'
              },
              {
                icon: Award,
                title: 'Quality Guaranteed',
                description: 'Every product meets our strict quality standards and requirements'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our marketplace and find the perfect AI solutions for your business needs. 
              Start building the future today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Browse All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-slate-600 rounded-xl hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300">
                Become a Vendor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
