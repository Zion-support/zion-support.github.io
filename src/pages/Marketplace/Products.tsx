import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Search, 
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
  Smartphone
} from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'software', name: 'Software', icon: Cpu },
    { id: 'hardware', name: 'Hardware', icon: Database },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const products = [
    {
      id: 1,
      name: 'Enterprise Security Suite',
      category: 'security',
      description: 'Comprehensive security solution for enterprise environments.',
      price: 299.99,
      rating: 4.8,
      reviews: 156,
      image: '/api/placeholder/300/200',
      features: ['Advanced threat detection', 'Real-time monitoring', 'Compliance reporting'],
      vendor: 'Zion Security',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Cloud Management Platform',
      category: 'cloud',
      description: 'Unified cloud management across multiple platforms.',
      price: 199.99,
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/300/200',
      features: ['Multi-cloud support', 'Cost optimization', 'Performance monitoring'],
      vendor: 'Zion Cloud',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'AI Analytics Dashboard',
      category: 'software',
      description: 'Intelligent analytics platform with AI-powered insights.',
      price: 149.99,
      rating: 4.9,
      reviews: 234,
      image: '/api/placeholder/300/200',
      features: ['Machine learning', 'Predictive analytics', 'Custom dashboards'],
      vendor: 'Zion Analytics',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Network Monitoring Tool',
      category: 'hardware',
      description: 'Advanced network monitoring and troubleshooting solution.',
      price: 399.99,
      rating: 4.7,
      reviews: 67,
      image: '/api/placeholder/300/200',
      features: ['Real-time monitoring', 'Alert system', 'Performance metrics'],
      vendor: 'Zion Networks',
      badge: 'Featured'
    },
    {
      id: 5,
      name: 'Mobile App Development Kit',
      category: 'mobile',
      description: 'Complete toolkit for mobile app development.',
      price: 179.99,
      rating: 4.5,
      reviews: 123,
      image: '/api/placeholder/300/200',
      features: ['Cross-platform support', 'UI components', 'Testing tools'],
      vendor: 'Zion Mobile',
      badge: 'Trending'
    },
    {
      id: 6,
      name: 'Data Backup Solution',
      category: 'software',
      description: 'Automated data backup and recovery system.',
      price: 89.99,
      rating: 4.4,
      reviews: 198,
      image: '/api/placeholder/300/200',
      features: ['Automated backups', 'Cloud storage', 'Quick recovery'],
      vendor: 'Zion Data',
      badge: 'Value'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Package className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Marketplace
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Products
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover innovative technology products and solutions from Zion Tech Group. 
            Quality, reliability, and cutting-edge technology in every product.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-slate-700 flex items-center justify-center">
                    <Package className="h-16 w-16 text-gray-500" />
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Vendor */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">by {product.vendor}</span>
                      <span className="text-2xl font-bold text-blue-400">${product.price}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-lg transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You Need?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect solution or create a custom product 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Sales Team
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Request Custom Solution
              </a>
              <a
                href="/marketplace"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <ArrowRight className="inline mr-2 h-5 w-5" />
                Browse All Products
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Products;