import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {

  Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  Workflow, Phone, MapPin, Mail as MailIcon, ExternalLink,
  CheckCircle, Clock, Users as UsersIcon, Zap as ZapIcon,
  Globe as GlobeIcon, Shield as ShieldIcon, TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { enhancedInnovativeServices2026, enhancedServiceCategories } from '../data/enhancedInnovativeServices2026';

export default function EnhancedServicesShowcase2026() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = enhancedInnovativeServices2026.filter(service => {

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {

    switch (sortBy) {

      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'roi':
        return parseFloat(b.roi?.replace('%', '') || '0') - parseFloat(a.roi?.replace('%', '') || '0');
      case 'market-size':
        return parseFloat(b.marketSize?.replace('$', '').replace('B', '000') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '000') || '0');
      default:
        return b.featured ? 1 : -1;
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS, AI solutions, and emerging technologies that drive innovation and transform businesses across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-400 mb-2" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MailIcon className="w-6 h-6 text-purple-400 mb-2" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {enhancedServiceCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">ROI</option>
                <option value="market-size">Market Size</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {service.category}
                      </span>
                      {service.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing and ROI */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{service.price}</p>
                    <p className="text-sm text-gray-400">per {service.billing}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-400">{service.roi}</p>
                    <p className="text-sm text-gray-400">ROI</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-gray-400">Market Size</p>
                    <p className="text-white font-semibold">{service.marketSize}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">Implementation</p>
                    <p className="text-white font-semibold">{service.implementationTime}</p>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <TrendingUpIcon className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                {service.technologyStack && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologyStack.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance Metrics */}
                {service.performanceMetrics && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Performance</h4>
                    <div className="space-y-2">
                      {service.performanceMetrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="flex items-center">
                          <ZapIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href={service.href}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <UsersIcon className="w-3 h-3 mr-1" />
                    {service.enterprise ? 'Enterprise' : 'SMB'}
                  </div>
                  <div className="flex items-center">
                    <GlobeIcon className="w-3 h-3 mr-1" />
                    {service.api ? 'API Available' : 'Custom Solution'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            <button
              onClick={() => {

                setSelectedCategory('all');
                setSearchTerm('');
                setSortBy('featured');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our cutting-edge technology solutions are designed to drive innovation, increase efficiency, and deliver measurable ROI. Contact us today to discuss how we can help your organization stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative technology solutions, AI services, and digital transformation consulting.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-green-400 mt-0.5" />
                  <div>
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Proven ROI and measurable results
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Expert consultation and support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Industry-leading security standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}