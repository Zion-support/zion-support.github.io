import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  EyeIcon,
  TagIcon,
  UserIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ai-tools', name: 'AI Tools' },
    { id: 'quantum', name: 'Quantum Solutions' },
    { id: 'cybersecurity', name: 'Security Tools' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'templates', name: 'Templates' },
    { id: 'courses', name: 'Training Courses' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' }
  ];

  const marketplaceProducts = [
    {
      id: 1,
      title: 'AI Autonomous Business Manager Pro',
      description: 'Complete AI-powered business management solution with advanced analytics and automation.',
      category: 'ai-tools',
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 156,
      downloads: 1200,
      author: 'Zion Tech Group',
      image: '/images/marketplace/ai-business-manager.jpg',
      tags: ['AI', 'Business', 'Automation', 'Analytics'],
      featured: true,
      isNew: false,
      discount: 25
    },
    {
      id: 2,
      title: 'Quantum Neural Network Framework',
      description: 'Advanced framework for building and training quantum neural networks.',
      category: 'quantum',
      price: 1999,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 89,
      downloads: 450,
      author: 'Quantum Labs',
      image: '/images/marketplace/quantum-framework.jpg',
      tags: ['Quantum', 'Neural Networks', 'Framework', 'Research'],
      featured: true,
      isNew: true,
      discount: 20
    },
    {
      id: 3,
      title: 'SOC2 Compliance Automation Suite',
      description: 'Comprehensive SOC2 compliance automation and monitoring platform.',
      category: 'cybersecurity',
      price: 1499,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 203,
      downloads: 890,
      author: 'Security Solutions Inc',
      image: '/images/marketplace/soc2-suite.jpg',
      tags: ['SOC2', 'Compliance', 'Security', 'Automation'],
      featured: false,
      isNew: false,
      discount: 25
    },
    {
      id: 4,
      title: '5G Enterprise Deployment Kit',
      description: 'Complete toolkit for deploying 5G enterprise solutions.',
      category: 'cloud',
      price: 899,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 67,
      downloads: 320,
      author: '5G Solutions',
      image: '/images/marketplace/5g-kit.jpg',
      tags: ['5G', 'Enterprise', 'Deployment', 'Network'],
      featured: false,
      isNew: true,
      discount: 25
    },
    {
      id: 5,
      title: 'AI Workflow Automation Templates',
      description: 'Collection of pre-built AI workflow automation templates.',
      category: 'templates',
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 134,
      downloads: 2100,
      author: 'Workflow Masters',
      image: '/images/marketplace/workflow-templates.jpg',
      tags: ['AI', 'Workflow', 'Templates', 'Automation'],
      featured: false,
      isNew: false,
      discount: 33
    },
    {
      id: 6,
      title: 'Advanced Cybersecurity Training Course',
      description: 'Comprehensive cybersecurity training with hands-on labs.',
      category: 'courses',
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 89,
      downloads: 450,
      author: 'Cyber Academy',
      image: '/images/marketplace/cyber-course.jpg',
      tags: ['Cybersecurity', 'Training', 'Labs', 'Certification'],
      featured: false,
      isNew: false,
      discount: 25
    },
    {
      id: 7,
      title: 'Cloud Infrastructure Templates',
      description: 'AWS, Azure, and GCP infrastructure templates for enterprise.',
      category: 'templates',
      price: 299,
      originalPrice: 399,
      rating: 4.7,
      reviews: 178,
      downloads: 1200,
      author: 'Cloud Architects',
      image: '/images/marketplace/cloud-templates.jpg',
      tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure', 'GCP'],
      featured: false,
      isNew: false,
      discount: 25
    },
    {
      id: 8,
      title: 'AI Content Generation Pro',
      description: 'Professional AI content generation and optimization platform.',
      category: 'ai-tools',
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      reviews: 245,
      downloads: 1800,
      author: 'Content AI Pro',
      image: '/images/marketplace/content-ai.jpg',
      tags: ['AI', 'Content', 'Generation', 'SEO'],
      featured: false,
      isNew: false,
      discount: 20
    }
  ];

  const filteredProducts = marketplaceProducts.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  ).filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Marketplace
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover cutting-edge AI tools, quantum solutions, cybersecurity platforms, and professional services from leading technology providers.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, tools, and services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Filters and Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-200 group"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <TagIcon className="h-16 w-16 text-purple-400 mx-auto mb-2" />
                    <span className="text-purple-400 text-sm">Product</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 space-y-2">
                    {product.featured && (
                      <span className="bg-yellow-600/80 text-white px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-green-600/80 text-white px-2 py-1 rounded text-xs font-semibold">
                        New
                      </span>
                    )}
                    {product.discount > 0 && (
                      <span className="bg-red-600/80 text-white px-2 py-1 rounded text-xs font-semibold">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200">
                      <HeartIcon className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold text-white">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Product Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <UserIcon className="h-3 w-3" />
                      <span>{product.author}</span>
                    </span>
                    <span>{product.downloads} downloads</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                      <ShoppingCartIcon className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200">
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                No products found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a Product to Sell?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our marketplace as a vendor and reach thousands of technology professionals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200">
                <span>Become a Vendor</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                <span>Learn More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;