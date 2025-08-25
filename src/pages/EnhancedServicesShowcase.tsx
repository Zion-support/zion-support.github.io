import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '../data/enhancedInnovativeServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';
import { INDUSTRY_SPECIFIC_SERVICES } from '../data/industrySpecificServices';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'enhanced' | 'emerging' | 'industry'>('enhanced');

  const allEnhancedServices = [...ENHANCED_INNOVATIVE_SERVICES];
  const allEmergingTechServices = [...EMERGING_TECH_INNOVATIVE_SERVICES];
  const allIndustryServices = [...INDUSTRY_SPECIFIC_SERVICES];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'enhanced': return allEnhancedServices;
      case 'emerging': return allEmergingTechServices;
      case 'industry': return allIndustryServices;
      default: return allEnhancedServices;
    }
  };

  const currentServices = getCurrentServices();
  
  const categories = ['all', ...Array.from(new Set(currentServices.map(service => service.category)))];
  
  const filteredServices = currentServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
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

  const getServiceIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Financial')) return DollarSign;
    if (category.includes('Healthcare')) return Shield;
    if (category.includes('Legal')) return Users;
    if (category.includes('Marketing')) return TrendingUp;
    if (category.includes('Supply Chain')) return Globe;
    if (category.includes('Customer Service')) return Users;
    if (category.includes('HR')) return Users;
    if (category.includes('Sales')) return TrendingUp;
    if (category.includes('Product Development')) return Rocket;
    if (category.includes('Quality Assurance')) return CheckCircle;
    if (category.includes('Quantum')) return Zap;
    if (category.includes('Edge')) return Cpu;
    if (category.includes('Neuromorphic')) return Brain;
    if (category.includes('6G')) return Zap;
    if (category.includes('Synthetic Biology')) return Sparkles;
    if (category.includes('Space')) return Globe;
    if (category.includes('Brain-Computer')) return Brain;
    if (category.includes('Fusion')) return Zap;
    return Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Enhanced Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover our cutting-edge AI-powered solutions, emerging technologies, and industry-specific services designed to transform your business
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allEnhancedServices.length}+</div>
              <div className="text-gray-300">Enhanced Services</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allEmergingTechServices.length}+</div>
              <div className="text-gray-300">Emerging Tech</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allIndustryServices.length}+</div>
              <div className="text-gray-300">Industry Solutions</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 flex flex-wrap">
              <button
                onClick={() => setActiveTab('enhanced')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'enhanced'
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Enhanced Services ({allEnhancedServices.length})
              </button>
              <button
                onClick={() => setActiveTab('emerging')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'emerging'
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Emerging Tech ({allEmergingTechServices.length})
              </button>
              <button
                onClick={() => setActiveTab('industry')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'industry'
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Industry Solutions ({allIndustryServices.length})
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${activeTab === 'enhanced' ? 'enhanced' : activeTab === 'emerging' ? 'emerging tech' : 'industry'} services...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-cyan-500/30'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => {
              const IconComponent = getServiceIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:-translate-y-2"
                >
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  {/* Service Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-cyan-400" />
                        <span className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400">/{service.pricingModel}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {service.supportLevel}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.websiteUrl}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25 font-medium"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss how our innovative services can accelerate your digital transformation and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}