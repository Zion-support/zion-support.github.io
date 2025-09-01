import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {

  Brain, 
  Shield, 
  Heart, 
  DollarSign, 
  Target, 
  Users, 
  GraduationCap, 
  Scale, 
  Home, 
  Factory, 
  Truck, 
  Zap, 
  Leaf, 
  ShoppingCart,
  Search,
  Filter,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  Zap as Lightning
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2032 } from '../data/innovativeMicroSaasServices2032';

const ComprehensiveServicesShowcase2032: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: <Brain className="w-5 h-5" /> },
    { id: 'AI & Cybersecurity', name: 'AI & Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: <Heart className="w-5 h-5" /> },
    { id: 'AI & Finance', name: 'AI & Finance', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: <Target className="w-5 h-5" /> },
    { id: 'AI & HR', name: 'AI & HR', icon: <Users className="w-5 h-5" /> },
    { id: 'AI & Education', name: 'AI & Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'AI & Legal', name: 'AI & Legal', icon: <Scale className="w-5 h-5" /> },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: <Home className="w-5 h-5" /> },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', icon: <Factory className="w-5 h-5" /> },
    { id: 'AI & Transportation', name: 'AI & Transportation', icon: <Truck className="w-5 h-5" /> },
    { id: 'AI & Energy', name: 'AI & Energy', icon: <Zap className="w-5 h-5" /> },
    { id: 'AI & Agriculture', name: 'AI & Agriculture', icon: <Leaf className="w-5 h-5" /> },
    { id: 'AI & Retail', name: 'AI & Retail', icon: <ShoppingCart className="w-5 h-5" /> }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2032.filter(service => {

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {

    switch (sortBy) {

      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group 2032 - Comprehensive Micro SAAS Services Showcase</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive suite of innovative AI-powered micro SAAS services for 2032. From cybersecurity to healthcare, finance to manufacturing - discover cutting-edge solutions." />
        <meta name="keywords" content="AI services, micro SAAS, cybersecurity, healthcare AI, financial technology, manufacturing AI, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2032" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2032 Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered micro SAAS solutions transforming industries across the globe. 
              From cybersecurity to healthcare, finance to manufacturing - we're building the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>15+ Industry Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Revolutionary AI Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>Rapid Deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-black/50 backdrop-blur-sm border-t border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-gray-300 text-sm">Phone</span>
              <a href="tel:+13024640950" className="text-white font-semibold hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-gray-300 text-sm">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-green-400 mb-2" />
              <span className="text-gray-300 text-sm">Website</span>
              <a href="https://ziontechgroup.com" className="text-white font-semibold hover:text-green-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-black/30 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation</option>
              </select>
            </div>
            <div className="text-white">
              <span className="text-gray-400">Showing </span>
              <span className="font-semibold">{filteredServices.length}</span>
              <span className="text-gray-400"> of {INNOVATIVE_MICRO_SAAS_SERVICES_2032.length} services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-black/20 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${

                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="ml-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ${service.price}/mo
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Category</span>
                  <span className="text-sm text-gray-300">{service.category}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">ROI</span>
                  <span className="text-sm text-green-400 font-semibold">{service.roi}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Delivery</span>
                  <span className="text-sm text-gray-300">{service.estimatedDelivery}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Innovation</span>
                  <span className="text-sm text-purple-400 font-semibold">{service.innovationLevel}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      +{service.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Market: {service.marketPrice}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                  <p className="text-gray-400 text-lg">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white ml-2">{selectedService.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Subcategory:</span>
                      <span className="text-white ml-2">{selectedService.subcategory}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Price:</span>
                      <span className="text-green-400 font-semibold ml-2">${selectedService.price}/month</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-white ml-2">{selectedService.marketPrice}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-400 font-semibold ml-2">{selectedService.roi}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-white ml-2">{selectedService.estimatedDelivery}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Innovation Level:</span>
                      <span className="text-purple-400 font-semibold ml-2">{selectedService.innovationLevel}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                  {selectedService.technicalSpecs && (
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400">Technology:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedService.technicalSpecs.technology.map((tech) => (
                            <span key={tech} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-green-400 font-semibold ml-2">{selectedService.technicalSpecs.uptime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">API Endpoints:</span>
                        <span className="text-white ml-2">{selectedService.technicalSpecs.apiEndpoints}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.useCases.map((useCase) => (
                    <span key={useCase} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Target Audience</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.targetAudience.map((audience) => (
                    <span key={audience} className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {selectedService.competitors && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Competitors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.competitors.map((competitor) => (
                      <span key={competitor} className="text-sm bg-red-600 text-white px-3 py-1 rounded-full">
                        {competitor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-gray-300 text-sm">Call Us</span>
                    <a href="tel:+13024640950" className="block text-white font-semibold hover:text-blue-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <span className="text-gray-300 text-sm">Email Us</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="block text-white font-semibold hover:text-purple-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="text-center">
                    <Globe className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <span className="text-gray-300 text-sm">Visit Website</span>
                    <a href="https://ziontechgroup.com" className="block text-white font-semibold hover:text-green-400 transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging Zion Tech Group's revolutionary AI-powered solutions. 
              Contact us today to start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="https://ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2032;