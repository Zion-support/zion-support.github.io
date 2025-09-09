import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  Users, 
  Wrench, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const MarketplacePage = () => {
  const categories = [
    {
      title: 'Products',
      description: 'Cutting-edge technology products and hardware solutions.',
      icon: Package,
      count: 150,
      href: '/marketplace/products'
    },
    {
      title: 'Talent',
      description: 'Expert professionals and specialized skills for hire.',
      icon: Users,
      count: 500,
      href: '/marketplace/talent'
    },
    {
      title: 'Equipment',
      description: 'High-quality equipment and tools for various industries.',
      icon: Wrench,
      count: 200,
      href: '/marketplace/equipment'
    },
    {
      title: 'Services',
      description: 'Professional services and consulting solutions.',
      icon: Zap,
      count: 300,
      href: '/marketplace/services'
    }
  ];

  const featuredProducts = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced business intelligence with machine learning capabilities.',
      price: '$2,500/month',
      category: 'Software',
      rating: 4.8,
      reviews: 127
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solution for enterprise protection.',
      price: '$3,200/month',
      category: 'Security',
      rating: 4.9,
      reviews: 89
    },
    {
      title: 'Cloud Infrastructure Package',
      description: 'Scalable cloud solutions with 99.9% uptime guarantee.',
      price: '$1,800/month',
      category: 'Infrastructure',
      rating: 4.7,
      reviews: 156
    },
    {
      title: 'IoT Development Kit',
      description: 'Complete IoT solution for smart device development.',
      price: '$4,500',
      category: 'Hardware',
      rating: 4.6,
      reviews: 73
    }
  ];

  const benefits = [
    'Access to verified vendors and professionals',
    'Competitive pricing and transparent costs',
    'Quality assurance and customer reviews',
    'Secure transactions and escrow protection'
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
            <div className="flex items-center justify-center mb-6">
              <ShoppingCart className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Zion Marketplace
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connect with innovators, talent, and cutting-edge technology worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, talent, equipment, or services..."
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-lg hover:scale-105 transition-transform duration-300">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/marketplace/products"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Browse Products
              </Link>
              <Link
                to="/marketplace/talent"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Find Talent
              </Link>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Marketplace Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive marketplace with products, talent, equipment, and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
              >
                <Link to={category.href}>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="text-center">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {category.count}+
                    </span>
                    <p className="text-zion-slate-light text-sm">Available</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Products & Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover top-rated solutions from our verified vendors and professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{product.rating}</span>
                    <span className="text-zion-slate-light text-sm">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {product.price}
                  </div>
                  <button className="flex items-center text-zion-cyan hover:text-white transition-colors duration-300 group">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the advantages of our comprehensive high-tech marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light leading-relaxed">
                  {benefit}
                </p>
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
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of innovators and professionals in the world's premier high-tech marketplace. 
              Find what you need or offer your expertise to the community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/marketplace/products"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Shopping
              </Link>
              <Link
                to="/marketplace/talent"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Find Talent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;