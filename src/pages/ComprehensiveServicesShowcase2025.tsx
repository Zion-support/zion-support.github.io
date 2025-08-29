import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { advancedInnovativeServices2025 } from '../data/advancedInnovativeServices2025';
import { nextGenInnovativeServices2025 } from '../data/nextGenInnovativeServices2025';
import { comprehensivePricingGuide2025 } from '../data/comprehensivePricingGuide2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showPricing, setShowPricing] = useState(false);

  // Combine all services
  const allServices = useMemo(() => {
    const advancedServices = advancedInnovativeServices2025.flatMap(cat => cat.items);
    const nextGenServices = nextGenInnovativeServices2025.flatMap(cat => cat.items);
    return [...advancedServices, ...nextGenServices];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allServices.map(service => service.category));
    return Array.from(cats);
  }, [allServices]);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return allServices;
    return allServices.filter(service => service.category === selectedCategory);
  }, [allServices, selectedCategory]);

  // Get pricing for a service
  const getServicePricing = (serviceId: string) => {
    return comprehensivePricingGuide2025.find(pricing => pricing.id === serviceId);
  };

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI Solutions': <Brain className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Cloud & DevOps': <Cloud className="w-6 h-6" />,
    'Quantum Computing': <Cpu className="w-6 h-6" />,
    'Data & Analytics': <Database className="w-6 h-6" />,
    'Blockchain & Web3': <Globe className="w-6 h-6" />,
    'IoT & Edge': <Zap className="w-6 h-6" />,
    'Space Tech': <Rocket className="w-6 h-6" />,
    'BioTech & Health': <Brain className="w-6 h-6" />,
    'FinTech & DeFi': <TrendingUp className="w-6 h-6" />,
    'Metaverse & AR/VR': <Globe className="w-6 h-6" />,
    'Autonomous Systems': <Rocket className="w-6 h-6" />,
    'Green Tech': <Zap className="w-6 h-6" />
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Services Showcase 2025
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered innovations designed to transform your business and drive exponential growth.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-slate-400 text-sm">Website</p>
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-cyan-400 transition-colors"
                  >
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {categoryIcons[category] || <Star className="w-5 h-5" />}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    {categoryIcons[service.category] || <Star className="w-6 h-6 text-white" />}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Starting Price:</span>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Billing:</span>
                    <span className="text-white font-semibold capitalize">{service.billing}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                      setShowPricing(true);
                    }}
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
                  >
                    View Pricing
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    {categoryIcons[selectedService.category] || <Star className="w-8 h-8 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                    <p className="text-slate-400">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-slate-300">{selectedService.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Business Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technical Specifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Scalability:</span>
                        <span className="text-white">{selectedService.scalability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Support Level:</span>
                        <span className="text-white">{selectedService.supportLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Innovation Level:</span>
                        <span className="text-white">{selectedService.innovationLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Integration Capabilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrationCapabilities.map((integration, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-6">
                    Contact our team to learn more about {selectedService.title} and how it can transform your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://ziontechgroup.com/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Contact Sales</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setShowPricing(true)}
                      className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-semibold"
                    >
                      View Pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pricing Modal */}
      {showPricing && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedService.title} - Pricing</h2>
                  <p className="text-slate-400">Choose the plan that fits your business needs</p>
                </div>
                <button
                  onClick={() => setShowPricing(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {(() => {
                const pricing = getServicePricing(selectedService.id);
                if (!pricing) {
                  return (
                    <div className="text-center py-12">
                      <p className="text-slate-400 mb-4">Pricing information coming soon</p>
                      <p className="text-white">Contact us for custom pricing</p>
                    </div>
                  );
                }

                return (
                  <div className="space-y-8">
                    {/* Service Overview */}
                    <div className="bg-slate-800/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-slate-400 text-sm">Market Position</p>
                          <p className="text-white font-semibold">{pricing.marketPosition}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Competitive Advantage</p>
                          <p className="text-white font-semibold">{pricing.competitiveAdvantage}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">ROI</p>
                          <p className="text-white font-semibold">{pricing.roi}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Implementation Time</p>
                          <p className="text-white font-semibold">{pricing.implementationTime}</p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">Pricing Tiers</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricing.tiers.map((tier, index) => (
                          <div
                            key={index}
                            className={`bg-slate-800/50 rounded-xl p-6 ${
                              tier.popular ? 'ring-2 ring-cyan-500' : ''
                            }`}
                          >
                            {tier.popular && (
                              <div className="text-center mb-4">
                                <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full font-semibold">
                                  Most Popular
                                </span>
                              </div>
                            )}
                            
                            <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                            <div className="mb-6">
                              <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                              <span className="text-slate-400">/{tier.billing}</span>
                            </div>
                            
                            {tier.savings && (
                              <p className="text-green-400 text-sm mb-4">{tier.savings}</p>
                            )}
                            
                            <p className="text-slate-400 text-sm mb-4">{tier.bestFor}</p>
                            
                            <ul className="space-y-3 mb-6">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                              Get Started
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-6 text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Need Custom Pricing?</h3>
                      <p className="text-slate-300 mb-6">
                        Contact our sales team for enterprise solutions and custom pricing options.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="https://ziontechgroup.com/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                        >
                          <span>Contact Sales</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <div className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold flex items-center justify-center space-x-2">
                          <Phone className="w-5 h-5" />
                          <span>{pricing.contactInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that have already embraced the future with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            <div className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg flex items-center justify-center space-x-2">
              <Phone className="w-6 h-6" />
              <span>+1 302 464 0950</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
