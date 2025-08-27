import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and reporting platform with machine learning capabilities',
      category: 'AI & Machine Learning',
      price: 2999,
      currency: '$',
      innovationLevel: 'Cutting-edge',
      roi: '300%',
      marketPrice: '$5,000',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards'],
      estimatedDelivery: '2-4 weeks',
      supportLevel: '24/7 Premium',
      tags: ['AI', 'Analytics', 'Business Intelligence'],
      createdAt: '2025-01-01'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services for complex problem solving',
      category: 'Quantum Computing',
      price: 15000,
      currency: '$',
      innovationLevel: 'Cutting-edge',
      roi: '500%',
      marketPrice: '$25,000',
      features: ['Quantum algorithms', 'Optimization', 'Research support'],
      estimatedDelivery: '6-8 weeks',
      supportLevel: 'Dedicated Team',
      tags: ['Quantum', 'Computing', 'Research'],
      createdAt: '2025-01-01'
    },
    {
      id: 3,
      title: 'Blockchain Development Platform',
      description: 'Comprehensive blockchain solutions for enterprise applications',
      category: 'Blockchain & Web3',
      price: 7999,
      currency: '$',
      innovationLevel: 'Advanced',
      roi: '250%',
      marketPrice: '$12,000',
      features: ['Smart contracts', 'DeFi protocols', 'Security audits'],
      estimatedDelivery: '4-6 weeks',
      supportLevel: '24/7 Standard',
      tags: ['Blockchain', 'Web3', 'DeFi'],
      createdAt: '2025-01-01'
    },
    {
      id: 4,
      title: 'IoT Edge Computing Suite',
      description: 'End-to-end IoT solutions with edge computing capabilities',
      category: 'IoT & Edge Computing',
      price: 5999,
      currency: '$',
      innovationLevel: 'Advanced',
      roi: '200%',
      marketPrice: '$10,000',
      features: ['Device management', 'Real-time processing', 'Scalable architecture'],
      estimatedDelivery: '3-5 weeks',
      supportLevel: '24/7 Standard',
      tags: ['IoT', 'Edge Computing', 'Real-time'],
      createdAt: '2025-01-01'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Lock, color: 'from-green-500 to-emerald-500' },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  // Filter and sort services
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel] || 0) - (innovationOrder[a.innovationLevel] || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-zion-green rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Revolutionary Technology
              </span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing, 
              blockchain applications to healthcare AI, discover the future of business technology with our comprehensive platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 text-lg bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-zion-slate-light">Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">200+</div>
                <div className="text-zion-slate-light">Clients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price and Sort Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <label className="text-zion-slate-light">Price Range:</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $1,000</option>
                <option value="mid-range">$1,000 - $5,000</option>
                <option value="enterprise">Over $5,000</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-zion-slate-light">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                        <div className="text-sm text-zion-slate-light">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4 mb-6">
                    {/* Category & Innovation Level */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan font-medium">{service.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Cutting-edge' 
                          ? 'bg-zion-cyan/20 text-zion-cyan' 
                          : service.innovationLevel === 'Advanced'
                          ? 'bg-zion-purple/20 text-zion-purple'
                          : 'bg-zion-blue/20 text-zion-blue'
                      }`}>
                        {service.innovationLevel}
                      </span>
                    </div>

                    {/* ROI & Market Price */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-zion-green">
                        <TrendingUp className="w-4 h-4" />
                        <span>ROI: {service.roi}</span>
                      </div>
                      <div className="text-zion-slate-light">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-zion-cyan" />
                        <span>{service.supportLevel}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our cutting-edge technology solutions can drive innovation and growth for your organization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
