import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Heart, 
  Scale, 
  Factory, 
  Home, 
  GraduationCap, 
  Zap,
  Building2,
  TrendingUp,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { COMPREHENSIVE_PRICING_GUIDE_2026 } from '../data/comprehensivePricingGuide2026';

const InnovativeServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-blue-500 to-purple-600' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'AI & Finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-green-500 to-blue-600' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-600' },
    { id: 'AI & Legal', name: 'AI & Legal', icon: Scale, color: 'from-yellow-500 to-orange-600' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', icon: Factory, color: 'from-gray-500 to-blue-600' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: Building2, color: 'from-indigo-500 to-purple-600' },
    { id: 'AI & Education', name: 'AI & Education', icon: GraduationCap, color: 'from-emerald-500 to-teal-600' },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Zap, color: 'from-orange-500 to-red-600' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_MICRO_SAAS_SERVICES_2026 
    : INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(service => service.category === selectedCategory);

  const getServicePricing = (serviceId: string) => {
    return COMPREHENSIVE_PRICING_GUIDE_2026.find(pricing => pricing.id === serviceId);
  };

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
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI-powered micro SAAS services that are transforming industries and driving innovation across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">10+ Revolutionary Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Enterprise Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => {
            const pricing = getServicePricing(service.id);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  {/* Category & Innovation Level */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI & Implementation */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-green-400 font-bold text-sm">ROI</div>
                      <div className="text-white text-xs">{service.roi}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-blue-400 font-bold text-sm">Delivery</div>
                      <div className="text-white text-xs">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Comparison */}
                  {pricing && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-yellow-400 font-bold text-sm mb-1">
                          Market Savings
                        </div>
                        <div className="text-white text-lg font-bold">
                          {pricing.marketComparison.savings}
                        </div>
                        <div className="text-gray-400 text-xs">
                          vs. average market price
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Expanded Service Details */}
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-white/10"
                  >
                    {/* Detailed Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">All Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Target Audience</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.targetAudience.map((audience, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    {service.technicalSpecs && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Technical Specifications</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-gray-400 text-sm mb-2">Technology Stack</div>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.technology.map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-2">Integrations</div>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.integrations.slice(0, 3).map((integration, index) => (
                                <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                                  {integration}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact Information */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Phone className="w-4 h-4 text-blue-400" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-white transition-colors">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Mail className="w-4 h-4 text-green-400" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-white transition-colors">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span>{service.contactInfo.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <ExternalLink className="w-4 h-4 text-purple-400" />
                          <a 
                            href={service.contactInfo.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            {service.contactInfo.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already leveraging our AI-powered solutions to drive innovation, reduce costs, and achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
            <button className="bg-white/10 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              View Pricing Guide
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss how our innovative services can transform your business? Our team of experts is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-500">Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
