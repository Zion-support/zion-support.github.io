import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Users,
  Target,
  BarChart3,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Heart,
  Search,
  Filter,
  DollarSign,
  Clock,
  Zap as Lightning,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { additionalInnovativeMicroSaasServices } from '../data/innovativeMicroSaasServices2025';

export default function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'AI & Analytics', 'Cloud & DevOps', 'Digital Innovation', 'Cybersecurity', 'Emerging Tech', 'Micro SaaS Solutions'];

  const allServices = [
    ...additionalInnovativeMicroSaasServices,
    // Add other service categories here
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
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
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return Brain;
      case 'Cloud & DevOps':
        return Cloud;
      case 'Digital Innovation':
        return Rocket;
      case 'Cybersecurity':
        return Shield;
      case 'Emerging Tech':
        return Cpu;
      case 'Micro SaaS Solutions':
        return Zap;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return 'from-purple-500 to-pink-600';
      case 'Cloud & DevOps':
        return 'from-blue-500 to-cyan-600';
      case 'Digital Innovation':
        return 'from-green-500 to-emerald-600';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-600';
      case 'Emerging Tech':
        return 'from-indigo-500 to-purple-600';
      case 'Micro SaaS Solutions':
        return 'from-yellow-500 to-orange-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative services including AI solutions, cloud services, cybersecurity, and cutting-edge technology solutions. Transform your business with Zion Tech Group."
        canonical="/comprehensive-services-showcase-2025"
        url="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          
          <motion.div 
            className="relative z-10 container mx-auto text-center max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative solutions designed to transform your business and drive growth in the digital age
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
                  <Brain className="w-5 h-5" />
                  <span>AI & Analytics</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                  <Cloud className="w-5 h-5" />
                  <span>Cloud & DevOps</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                  <Rocket className="w-5 h-5" />
                  <span>Digital Innovation</span>
                </div>
                <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>Cybersecurity</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </Link>
              <Link 
                to="/emerging-tech-2030" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Emerging Tech 2030
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <motion.div 
            className="container mx-auto max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="w-full lg:w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="w-full lg:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                  </select>
                </div>

                {/* Advanced Filters Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white hover:bg-slate-600/50 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-slate-600/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Billing Cycle</label>
                      <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option value="">All</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                        <option value="project">Project-based</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Features</label>
                      <input
                        type="text"
                        placeholder="Search features..."
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <motion.div 
            className="container mx-auto max-w-7xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {searchQuery || selectedCategory !== 'All' 
                  ? `Showing ${filteredServices.length} services matching your criteria`
                  : 'Explore our comprehensive portfolio of innovative solutions'
                }
              </p>
            </motion.div>

            {filteredServices.length === 0 ? (
              <motion.div variants={itemVariants} className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all services</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedServices.map((service, index) => {
                  const IconComponent = getCategoryIcon(service.category);
                  const categoryColor = getCategoryColor(service.category);
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-sm text-cyan-400">{service.category}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">{service.price}/{service.billing}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-400">Quick deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-400">Enterprise ready</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors"
                        >
                          Get Started
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <motion.div 
            className="container mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can help transform your business and drive growth
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
