import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Package, Building2, Search, Filter, Star, TrendingUp, Globe, Zap } from 'lucide-react';

const MarketplacePage = () => {
  const categories = [
    {
      name: 'Products',
      description: 'Software, hardware, and digital solutions',
      icon: Package,
      count: '500+',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      name: 'Talent',
      description: 'Expert developers, designers, and consultants',
      icon: Users,
      count: '200+',
      color: 'from-zion-purple to-zion-pink'
    },
    {
      name: 'Equipment',
      description: 'IT infrastructure and hardware solutions',
      icon: Building2,
      count: '150+',
      color: 'from-zion-green to-zion-cyan'
    },
    {
      name: 'Services',
      description: 'Professional IT and consulting services',
      icon: Zap,
      count: '100+',
      color: 'from-zion-orange to-zion-red'
    }
  ];

  const featuredProducts = [
    {
      name: 'AI Business Intelligence Suite',
      category: 'Software',
      rating: 4.8,
      reviews: 127,
      price: '$299/month',
      description: 'Comprehensive AI-powered business intelligence platform',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Cloud Infrastructure Package',
      category: 'Services',
      rating: 4.9,
      reviews: 89,
      price: '$1,999/month',
      description: 'Enterprise-grade cloud infrastructure solutions',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Cybersecurity Framework',
      category: 'Software',
      rating: 4.7,
      reviews: 156,
      price: '$499/month',
      description: 'Advanced cybersecurity and compliance framework',
      image: '/api/placeholder/300/200'
    }
  ];

  const topTalent = [
    {
      name: 'Sarah Chen',
      role: 'Senior AI Engineer',
      expertise: ['Machine Learning', 'Python', 'TensorFlow'],
      rating: 4.9,
      projects: 45,
      hourlyRate: '$150'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Cloud Architect',
      expertise: ['AWS', 'Azure', 'Kubernetes'],
      rating: 4.8,
      projects: 38,
      hourlyRate: '$180'
    },
    {
      name: 'Priya Patel',
      role: 'Cybersecurity Specialist',
      expertise: ['Penetration Testing', 'SOC', 'Compliance'],
      rating: 4.9,
      projects: 52,
      hourlyRate: '$160'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Zion Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover innovative products, expert talent, and cutting-edge services 
              from the Zion Tech Group ecosystem.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search products, services, or talent..."
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity duration-300">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive marketplace organized by category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-zion-cyan">{category.count}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover our most popular and highly-rated solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <Package className="w-16 h-16 text-zion-cyan" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zion-cyan font-medium">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-white">{product.rating}</span>
                      <span className="text-sm text-zion-slate-light">({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                  <p className="text-zion-slate-light mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{product.price}</span>
                    <button className="btn-futuristic px-6 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Talent */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Top Talent
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Connect with highly skilled professionals and experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topTalent.map((talent, index) => (
              <motion.div
                key={talent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{talent.name}</h3>
                  <p className="text-zion-cyan font-medium mb-3">{talent.role}</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white">{talent.rating}</span>
                    <span className="text-zion-slate-light">({talent.projects} projects)</span>
                  </div>
                  <div className="text-2xl font-bold text-zion-purple mb-4">{talent.hourlyRate}/hr</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-zion-slate-light">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full btn-futuristic mt-6">
                  View Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-zion-cyan mb-2">1000+</h3>
              <div className="text-zion-slate-light">Products Listed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-zion-purple mb-2">500+</h3>
              <div className="text-zion-slate-light">Expert Talent</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-zion-blue mb-2">50+</h3>
              <div className="text-zion-slate-light">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-zion-cyan mb-2">98%</h3>
              <div className="text-zion-slate-light">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and professionals who trust Zion Marketplace 
              for their technology needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Browse Products
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Find Talent
              </button>
              <button className="btn-futuristic px-8 py-4 text-lg">
                List Your Service
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
