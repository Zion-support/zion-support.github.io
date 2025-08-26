import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Users, 
  Package, 
  Settings, 
  Search, 
  Filter,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  ShoppingCart,
  Heart,
  Eye,
  Clock,
  MapPin,
  DollarSign,
  Shield,
  Globe
} from 'lucide-react';

const MarketplacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Store, count: 1250 },
    { id: 'products', name: 'Products', icon: Package, count: 450 },
    { id: 'talent', name: 'Talent', icon: Users, count: 320 },
    { id: 'equipment', name: 'Equipment', icon: Settings, count: 280 },
    { id: 'services', name: 'Services', icon: Store, count: 200 }
  ];

  const featuredProducts = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'products',
      description: 'Enterprise-grade analytics platform with machine learning capabilities.',
      price: '$2,499',
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/200',
      tags: ['AI', 'Analytics', 'Dashboard', 'Enterprise']
    },
    {
      id: 2,
      title: 'Senior Full-Stack Developer',
      category: 'talent',
      description: 'Experienced developer specializing in React, Node.js, and cloud technologies.',
      price: '$85/hr',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      tags: ['React', 'Node.js', 'Full-Stack', 'Senior']
    },
    {
      id: 3,
      title: 'High-Performance Server Cluster',
      category: 'equipment',
      description: 'Enterprise server infrastructure with 99.99% uptime guarantee.',
      price: '$15,999',
      rating: 4.7,
      reviews: 45,
      image: '/api/placeholder/300/200',
      tags: ['Server', 'Infrastructure', 'Enterprise', 'High-Performance']
    },
    {
      id: 4,
      title: 'Cybersecurity Assessment Service',
      category: 'services',
      description: 'Comprehensive security audit and vulnerability assessment.',
      price: '$3,500',
      rating: 4.9,
      reviews: 156,
      image: '/api/placeholder/300/200',
      tags: ['Security', 'Audit', 'Assessment', 'Compliance']
    }
  ];

  const marketplaceStats = [
    { label: 'Total Listings', value: '1,250+', icon: Store },
    { label: 'Active Users', value: '15,000+', icon: Users },
    { label: 'Categories', value: '25+', icon: Package },
    { label: 'Success Rate', value: '98%', icon: Award }
  ];

  const benefits = [
    {
      title: 'Verified Quality',
      description: 'All listings undergo rigorous quality checks and verification processes.',
      icon: CheckCircle
    },
    {
      title: 'Secure Transactions',
      description: 'Built-in escrow and secure payment processing for safe transactions.',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions.',
      icon: Users
    },
    {
      title: 'Global Reach',
      description: 'Connect with buyers and sellers from around the world.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Store className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech
              <span className="text-gradient"> Marketplace</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover, buy, and sell cutting-edge technology products, top-tier talent, 
              premium equipment, and professional services in one trusted platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products, talent, equipment, or services..."
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-futuristic px-6 py-2">
                  Search
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Browse Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                List Your Item
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive marketplace organized by category to find exactly what you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-center hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan/20 border-zion-cyan/40'
                    : 'bg-zion-slate-dark/50 border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} items</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Items
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover handpicked premium listings from our marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <Store className="w-16 h-16 text-zion-cyan/40" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-zion-slate-dark/80 rounded-full flex items-center justify-center hover:bg-zion-cyan/20 transition-colors duration-300">
                      <Heart className="w-4 h-4 text-zion-slate-light" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-medium">{product.rating}</span>
                      <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                    </div>
                    <span className="text-zion-cyan font-bold">{product.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-xs text-zion-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full btn-futuristic">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Stats Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Marketplace Statistics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join thousands of users who trust our platform for their technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketplaceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-zion-slate-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide a secure, reliable, and user-friendly platform for all your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join our marketplace today and discover the best technology products, talent, 
              and services, or list your own offerings to reach a global audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Browsing
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                List Your Item
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
