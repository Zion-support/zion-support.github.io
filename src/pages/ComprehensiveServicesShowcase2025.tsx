import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Brain,
  Server,
  Database,
  Lock,
  Cpu,
  Network,
  Cloud,
  Code,
  Smartphone,
  Monitor,
  Target,
  Rocket
} from 'lucide-react';
import { enhancedServicesCatalog2025, contactInfo, serviceCategories, pricingTiers, successMetrics } from '../data/enhancedServicesCatalog2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allServices = enhancedServicesCatalog2025.flatMap(category => category.items);

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS':
        return <Code className="w-6 h-6" />;
      case 'AI Solutions':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Server className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'AI Solutions':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'IT Services':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Comprehensive IT Services, AI Solutions & Micro SaaS Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{successMetrics.totalClients}</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{successMetrics.successRate}</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{successMetrics.averageROI}</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{successMetrics.timeToValue}</div>
              <div className="text-gray-600">Time to Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{successMetrics.satisfactionScore}</div>
              <div className="text-gray-600">Satisfaction Score</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of innovative solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} services</span>
                  <span className="text-lg font-semibold text-blue-600">{category.marketValue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Micro SaaS">Micro SaaS</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="IT Services">IT Services</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-600">
              Find the perfect solution for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                      <span className="ml-2">{service.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">per {service.billing}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {service.marketSize && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <BarChart3 className="w-4 h-4" />
                      <span>Market: {service.marketSize}</span>
                    </div>
                  )}

                  {service.growthRate && (
                    <div className="flex items-center gap-2 text-sm text-green-600 mb-3">
                      <TrendingUp className="w-4 h-4" />
                      <span>{service.growthRate} growth</span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.roi && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-green-700">
                        <Target className="w-4 h-4" />
                        <span className="font-medium">ROI: {service.roi}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <a
                      href={service.href}
                      target={service.external ? "_blank" : "_self"}
                      rel={service.external ? "noopener noreferrer" : ""}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    {service.external && (
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricingTiers).map(([key, tier], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                  key === 'business' ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {key === 'business' && (
                  <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-gray-900 mb-6">{tier.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">{contactInfo.phone}</p>
                <p className="text-sm text-blue-200">{contactInfo.hours}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">{contactInfo.email}</p>
                <p className="text-sm text-blue-200">24/7 Support Available</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">{contactInfo.address}</p>
                <p className="text-sm text-blue-200">Professional Office Space</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View All Services
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative IT services, AI solutions, and micro SaaS platforms.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://ziontechgroup.com" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="https://ziontechgroup.com/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="https://ziontechgroup.com/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="https://ziontechgroup.com/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://ziontechgroup.com/micro-saas" className="hover:text-white transition-colors">Micro SaaS</a></li>
                <li><a href="https://ziontechgroup.com/ai-services" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="https://ziontechgroup.com/it-services" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="https://ziontechgroup.com/consulting" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p className="text-xs">{contactInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com/privacy" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="https://ziontechgroup.com/terms" className="hover:text-white transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
