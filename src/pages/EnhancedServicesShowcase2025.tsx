import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Target,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-400 to-blue-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-purple-400 to-cyan-400' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-400 to-red-400' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-400 to-pink-400' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '⚡', color: 'from-yellow-400 to-orange-400' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-400 to-pink-400' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-400 to-emerald-400' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-400 to-cyan-400' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-400 to-blue-400' },
    { id: 'Space Tech', name: 'Space Tech', count: allServices.filter(s => s.category === 'Space Tech').length, icon: '🚀', color: 'from-indigo-400 to-purple-400' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered, quantum computing, blockchain, and innovative micro SAAS services. Transform your business with cutting-edge technology solutions."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered solutions, quantum computing platforms, blockchain innovations, and cutting-edge micro SAAS services designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full">
                <Brain className="w-5 h-5" />
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-400/20 text-purple-400 px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full">
                <Lock className="w-5 h-5" />
                <span>Blockchain & Web3</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-400/20 text-blue-400 px-4 py-2 rounded-full">
                <Cpu className="w-5 h-5" />
                <span>IoT & Edge Computing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="appearance-none bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 pr-10"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 pr-10"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{service.features.length - 3} more features</span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-semibold">{service.roi} ROI</div>
                      <div className="text-xs text-gray-400">{service.innovationLevel}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/request-quote"
                      className="bg-slate-700/50 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary AI, quantum computing, and blockchain solutions to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServicesShowcase2025;