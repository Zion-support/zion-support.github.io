import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  innovativeAIServices2032, 
  innovativeITServices2032, 
  innovativeMicroSaasServices2032 
} from '../data/innovativeServices2032';
import {
  Brain,
  Server,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Shield,
  BarChart3,
  Code,
  Atom,
  Globe,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Eye,
  Sparkles,
  Quantum,
  Space,
  Healthcare,
  Finance,
  SupplyChain
} from 'lucide-react';

const InnovativeServicesShowcase2032: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'text-blue-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'text-purple-500' },
    { id: 'it', name: 'IT Infrastructure', icon: Server, color: 'text-green-500' },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, color: 'text-orange-500' }
  ];

  const filteredServices = () => {
    let services = [];
    
    if (selectedCategory === 'all' || selectedCategory === 'ai') {
      services.push(...innovativeAIServices2032);
    }
    if (selectedCategory === 'all' || selectedCategory === 'it') {
      services.push(...innovativeITServices2032);
    }
    if (selectedCategory === 'all' || selectedCategory === 'saas') {
      services.push(...innovativeMicroSaasServices2032);
    }

    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return services;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Quantum Computing':
      case 'AI & Business Automation':
      case 'AI & Space Technology':
        return Brain;
      case 'IT Infrastructure & Quantum Computing':
      case 'IT Security & AI':
        return Server;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'text-purple-500';
    if (category.includes('IT')) return 'text-green-500';
    if (category.includes('Micro SaaS')) return 'text-orange-500';
    return 'text-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Innovative Services Showcase 2032 - Zion Tech Group"
        description="Discover our revolutionary AI, IT infrastructure, and Micro SaaS services for 2032. Next-generation solutions with quantum computing, autonomous operations, and space technology."
        keywords="AI services 2032, quantum computing, autonomous business, space technology, IT infrastructure, micro SaaS, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative Services 2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, IT infrastructure, and Micro SaaS solutions that define the future of technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                        : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${category.color}`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge technology that will transform industries in 2032
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {allInnovativeServices2032.aiServices.slice(0, 3).map((service, index) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-purple-500/20 rounded-lg">
                            <Brain className="w-6 h-6 text-purple-400" />
                          </div>
                          <span className="text-purple-400 font-semibold">{service.category}</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-green-400">{service.pricing}</span>
                          <Link
                            to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            Learn More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Market Impact</h4>
                          <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex justify-between">
                              <span>Market Size:</span>
                              <span className="text-green-400">{service.marketSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>AI Score:</span>
                              <span className="text-blue-400">{service.aiScore}/100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative services across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices().map((service) => {
              const Icon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${categoryColor.replace('text-', 'bg-')}/20 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${categoryColor}`} />
                    </div>
                    <span className={`${categoryColor} font-semibold text-sm`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-600 text-gray-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Starting Price:</span>
                      <span className="text-green-400 font-semibold">
                        {service.pricing}
                      </span>
                    </div>
                    
                    {'aiScore' in service && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">AI Score:</span>
                        <span className="text-blue-400 font-semibold">
                          {service.aiScore}/100
                        </span>
                      </div>
                    )}

                    {'marketSize' in service && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Market Size:</span>
                        <span className="text-purple-400 font-semibold text-sm">
                          {service.marketSize}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices().length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our innovative services and how they can drive your success in 2032
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2032;