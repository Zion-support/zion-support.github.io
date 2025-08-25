import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES, ComprehensiveService } from '../data/comprehensiveServices';
import { ADVANCED_INNOVATIVE_SERVICES, AdvancedInnovativeService } from '../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES, EmergingTechService } from '../data/emergingTechServices';

// Import all the new service data
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
import { CUTTING_EDGE_AI_SERVICES } from '../data/cuttingEdgeAIServices';
import { INNOVATIVE_MICRO_SAAS_SOLUTIONS_2025 } from '../data/innovativeMicroSaasSolutions2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructure2025';
import { NEXT_GEN_INNOVATIVE_SERVICES } from '../data/nextGenInnovativeServices';

const NewServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services with proper typing
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...ADVANCED_INNOVATIVE_SERVICES,
    ...EMERGING_TECH_SERVICES
  ] as (ComprehensiveService | AdvancedInnovativeService | EmergingTechService)[];
  
  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on selection and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in service && service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
      case 'quantum ai':
      case 'quantum communications':
      case 'quantum networking':
        return <Cpu className="w-6 h-6" />;
      case 'ai consciousness':
      case 'autonomous ai':
      case 'ai research':
        return <Brain className="w-6 h-6" />;
      case 'space technology':
        return <Rocket className="w-6 h-6" />;
      case 'cybersecurity':
      case 'quantum security':
        return <Shield className="w-6 h-6" />;
      case 'edge computing':
      case '5g technology':
        return <Zap className="w-6 h-6" />;
      case 'blockchain & defi':
      case 'blockchain':
        return <Lock className="w-6 h-6" />;
      case 'iot & smart home':
      case 'iot':
        return <Globe className="w-6 h-6" />;
      case 'biotechnology':
        return <Users className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">2025 Innovation Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, Quantum Computing, Space Technology, 
              and Emerging Tech solutions. Stay ahead of the competition with next-generation innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          
          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${'price' in service && typeof service.price === 'number' 
                        ? service.price.toLocaleString() 
                        : 'price' in service && typeof service.price === 'object' && service.price.monthly
                        ? service.price.monthly.toLocaleString()
                        : 'Custom'}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {'estimatedDelivery' in service ? service.estimatedDelivery : 'Custom'}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {'supportLevel' in service ? service.supportLevel : 'Standard'} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {service.marketPrice}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {'tags' in service && service.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-zion-cyan">
            Complete Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${'price' in service && typeof service.price === 'number' 
                        ? service.price.toLocaleString() 
                        : 'price' in service && typeof service.price === 'object' && service.price.monthly
                        ? service.price.monthly.toLocaleString()
                        : 'Custom'}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {'estimatedDelivery' in service ? service.estimatedDelivery : 'Custom'}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {'supportLevel' in service ? service.supportLevel : 'Standard'} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {service.marketPrice}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {'tags' in service && service.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {getCategoryIcon(service.category)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Category:</div>
                <div className="text-sm text-white font-medium">{service.category}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Market Price Range:</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={service.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our innovation experts to discuss how these cutting-edge services 
            can accelerate your digital transformation and give you a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to discuss your technology needs? Our team is here to help you 
              choose the right solutions and implement them successfully.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Service Details</h3>
                <p className="text-zion-slate-light mb-4">{selectedService.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-zion-cyan font-medium">Category:</span>
                    <span className="text-white ml-2">{selectedService.category}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Subcategory:</span>
                    <span className="text-white ml-2">{selectedService.subcategory}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Price:</span>
                    <span className="text-white ml-2">${'price' in selectedService && typeof selectedService.price === 'number' 
                      ? selectedService.price.toLocaleString() 
                      : 'price' in selectedService && typeof selectedService.price === 'object' && selectedService.price.monthly
                      ? selectedService.price.monthly.toLocaleString()
                      : 'Custom'}/{'pricingModel' in selectedService ? selectedService.pricingModel : 'Custom'}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Delivery:</span>
                    <span className="text-white ml-2">{'estimatedDelivery' in selectedService ? selectedService.estimatedDelivery : 'Custom'}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Support:</span>
                    <span className="text-white ml-2">{'supportLevel' in selectedService ? selectedService.supportLevel : 'Standard'}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Features & Benefits</h3>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {'useCases' in selectedService && selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-zion-blue-light/20 rounded-lg border border-zion-cyan/30">
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Get Started Today</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">📱</div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                  <p className="font-semibold text-white">Visit Website</p>
                  <p className="text-zion-slate-light">ziontechgroup.com</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-zion-slate-light text-sm">
                  Market Price: {'marketPrice' in selectedService ? selectedService.marketPrice : 'Custom'} | 
                  Estimated Delivery: {'estimatedDelivery' in selectedService ? selectedService.estimatedDelivery : 'Custom'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default NewServices;