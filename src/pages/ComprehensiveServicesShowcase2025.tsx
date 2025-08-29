import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Truck, 
  Heart, 
  DollarSign, 
  FileText, 
  Users, 
  Workflow, 
  Database, 
  Cpu, 
  Target, 
  Zap,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  Award,
  Clock,
  DollarSign as DollarIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_CATALOG_2025 } from '../data/comprehensiveServicesCatalog2025';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data/comprehensivePricingGuide2025';

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const categories = ['All', 'AI & Analytics', 'Cybersecurity', 'Healthcare', 'FinTech', 'Quantum Computing', 'Blockchain', 'IoT', 'Sustainability', 'Space Tech'];
  const priceRanges = ['All', 'Under $2K', '$2K-$5K', '$5K-$10K', 'Over $10K'];

  const filteredServices = COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      const price = service.price;
      switch (selectedPriceRange) {
        case 'Under $2K':
          matchesPrice = price < 2000;
          break;
        case '$2K-$5K':
          matchesPrice = price >= 2000 && price < 5000;
          break;
        case '$5K-$10K':
          matchesPrice = price >= 5000 && price < 10000;
          break;
        case 'Over $10K':
          matchesPrice = price >= 10000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Healthcare':
        return Heart;
      case 'FinTech':
        return DollarSign;
      case 'Quantum Computing':
        return Cpu;
      case 'Blockchain':
        return Target;
      case 'IoT':
        return Zap;
      case 'Sustainability':
        return Globe;
      case 'Space Tech':
        return Rocket;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return 'from-purple-600 to-pink-600';
      case 'Cybersecurity':
        return 'from-red-600 to-orange-600';
      case 'Healthcare':
        return 'from-green-600 to-emerald-600';
      case 'FinTech':
        return 'from-blue-600 to-cyan-600';
      case 'Quantum Computing':
        return 'from-violet-600 to-purple-600';
      case 'Blockchain':
        return 'from-indigo-600 to-blue-600';
      case 'IoT':
        return 'from-teal-600 to-green-600';
      case 'Sustainability':
        return 'from-emerald-600 to-green-600';
      case 'Space Tech':
        return 'from-slate-600 to-gray-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  const getPricingInfo = (serviceId: string) => {
    return COMPREHENSIVE_PRICING_GUIDE_2025.find(pricing => pricing.id === serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, cybersecurity, healthcare, fintech, and emerging technology solutions designed for enterprise success."
        keywords="AI services, cybersecurity, healthcare analytics, fintech, quantum computing, blockchain, IoT, sustainability, space technology, enterprise solutions"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Services Showcase 2025
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Innovation at Every Scale
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Discover our cutting-edge portfolio of AI-powered solutions, cybersecurity platforms, 
            healthcare analytics, fintech innovations, and emerging technologies designed to transform 
            your business and drive exponential growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </button>
            <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>

              {/* Results Count */}
              <div className="flex items-center justify-center text-white">
                <span className="text-lg font-semibold">{filteredServices.length} Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const pricingInfo = getPricingInfo(service.id);
                const CategoryIcon = getCategoryIcon(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <CategoryIcon className="w-8 h-8" />
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Star className="w-5 h-5 text-zion-cyan mr-2" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-sm text-zion-cyan font-medium">
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing */}
                      {pricingInfo && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <DollarIcon className="w-5 h-5 text-zion-cyan mr-2" />
                            Pricing
                          </h4>
                          <div className="space-y-2">
                            {pricingInfo.pricingTiers.map((tier, idx) => (
                              <div key={idx} className="flex items-center justify-between text-sm">
                                <span className={`font-medium ${tier.popular ? 'text-zion-cyan' : 'text-gray-600'}`}>
                                  {tier.name}
                                  {tier.popular && <span className="ml-2 text-xs bg-zion-cyan text-white px-2 py-1 rounded">Popular</span>}
                                </span>
                                <span className="font-bold text-gray-800">
                                  ${tier.price.toLocaleString()}/month
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 text-zion-cyan mr-2" />
                          Benefits
                        </h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="text-sm text-gray-600 flex items-start">
                              <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-zion-cyan font-bold">ROI</div>
                          <div className="text-gray-800">{service.roi}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-zion-cyan font-bold">Delivery</div>
                          <div className="text-gray-800">{service.estimatedDelivery}</div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">Contact Information</span>
                          <span className="text-xs text-gray-500">Zion Tech Group</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 text-zion-cyan mr-2" />
                            <span>{service.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 text-zion-cyan mr-2" />
                            <span>{service.contactInfo.email}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="mt-6 space-y-3">
                        <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                        <button className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                          <span>Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-white text-xl mb-4">No services found matching your criteria</div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPriceRange('All');
                  }}
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              Let our team of experts help you implement the perfect solution for your needs. 
              Get in touch today to start your transformation journey.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <ExternalLink className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">ziontechgroup.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
