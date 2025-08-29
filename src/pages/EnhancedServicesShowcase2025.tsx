import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  Workflow, CheckCircle, Award, Clock, Users2, Globe2,
  Search, Phone, Bot
 } from 'lucide-react.ts';
import { enhancedServicesCatalog2025  } from '../data/enhancedServicesCatalog2025';

export default function EnhancedServicesShowcase2025(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = enhancedServicesCatalog2025
    .filter(category => selectedCategory === 'all' || category.slug === selectedCategory)
    .flatMap(category => 
      category.items.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const getCategoryIcon = (category: anystring)  => {
    const iconMap: { [key: string]: any } = {
      'AI Solutions': Brain,
      'Micro SaaS': ShoppingCart,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cloud,
      'BioTech & Health': Heart,
      'FinTech & DeFi': DollarSign,
      'Quantum Computing': Atom,
      'Blockchain & Web3': Network,
      'IoT & Edge': Cpu,
      'Green Tech': Leaf,
      'Space Tech': Satellite,
      'Metaverse & AR/VR': Eye,
      'Autonomous Systems': Bot,
      'Digital Transformation': Zap,
      'Enterprise Solutions': Building,
      'Industry Specific': Target
    };
    return iconMap[category] || Star;
  };

  const getCategoryColor = (category: anystring)  => {
    const colorMap: { [key: string]: string } = {
      'AI Solutions': 'from-blue-500 to-indigo-500',
      'Micro SaaS': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-cyan-500 to-blue-500',
      'BioTech & Health': 'from-green-500 to-emerald-500',
      'FinTech & DeFi': 'from-yellow-500 to-orange-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Blockchain & Web3': 'from-blue-500 to-cyan-500',
      'IoT & Edge': 'from-teal-500 to-green-500',
      'Green Tech': 'from-green-500 to-teal-500',
      'Space Tech': 'from-purple-500 to-indigo-500',
      'Metaverse & AR/VR': 'from-pink-500 to-purple-500',
      'Autonomous Systems': 'from-orange-500 to-red-500',
      'Digital Transformation': 'from-blue-500 to-purple-500',
      'Enterprise Solutions': 'from-gray-500 to-blue-500',
      'Industry Specific': 'from-indigo-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-200">
              2025 Enhanced Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive suite of cutting-edge micro SAAS solutions, 
            AI-powered services, and enterprise-grade IT solutions designed to transform 
            your business operations and drive innovation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 text-white bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/30">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {enhancedServicesCatalog2025.map(category => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service)  => {
                const IconComponent = getCategoryIcon(service.category);
                const categoryColor = getCategoryColor(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {service.category}
                      </span>
                    </div>

                    {/* Service Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${categoryColor} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">/{service.billing}</span>
                      </div>
                      <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        Market Rate
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-blue-400">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.href}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${categoryColor} hover:opacity-90 transition-opacity group-hover:scale-105 transform duration-200`}
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="text-xs text-gray-400 space-y-1">
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {service.contactInfo.mobile}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {service.contactInfo.email}
                        </div>
                        <div className="flex items-center">
                          <Globe2 className="w-3 h-3 mr-1" />
                          {service.contactInfo.website}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement the perfect solution 
              for your business needs. Get in touch today for a personalized consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400">Certified professionals with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400">Round-the-clock assistance and monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful implementations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative technology solutions and services.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>AI Solutions</p>
                <p>Micro SaaS</p>
                <p>Cybersecurity</p>
                <p>Cloud & DevOps</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-4">Website</h4>
              <a 
                href="https://ziontechgroup.com" 
                className="text-blue-400 hover:text-blue-300 text-sm block mb-2"
              >
                ziontechgroup.com
              </a>
              <p className="text-gray-400 text-sm">
                Visit our website for more information about our services and solutions.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}