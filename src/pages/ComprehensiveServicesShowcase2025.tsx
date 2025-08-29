import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  CheckCircle, Clock, Users as UsersIcon, Zap as ZapIcon
} from 'lucide-react';
import { 
  revolutionaryMicroSaasServices2025, 
  advancedITInfrastructureServices2025, 
  revolutionaryAIServices2025 
} from '../data/comprehensiveServices2025';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: ShoppingCart, color: 'from-blue-500 to-cyan-500' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-orange-500 to-red-500' }
  ];

  const getServicesByCategory = () => {
    switch (selectedCategory) {
      case 'micro-saas':
        return revolutionaryMicroSaasServices2025;
      case 'it-infrastructure':
        return advancedITInfrastructureServices2025;
      case 'ai':
        return revolutionaryAIServices2025;
      default:
        return [
          ...revolutionaryMicroSaasServices2025,
          ...advancedITInfrastructureServices2025,
          ...revolutionaryAIServices2025
        ];
    }
  };

  const services = getServicesByCategory();

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              2025 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS, IT infrastructure, and AI services designed for the future of business
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg ${
                    selectedCategory === category.id ? 'ring-4 ring-white/30' : ''
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Pricing:</span>
                    <span className="text-white font-semibold">
                      {service.pricing || `$${service.hourlyRate}/hr`}
                    </span>
                  </div>
                  
                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Price:</span>
                      <span className="text-cyan-400 font-bold text-lg">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {service.hourlyRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Hourly Rate:</span>
                      <span className="text-cyan-400 font-bold">
                        ${service.hourlyRate}/hr
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-cyan-400 text-sm">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Learn More
                  </div>
                  <div className="text-xs text-gray-500">
                    {service.innovationLevel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to learn how our innovative services can drive your success
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-cyan-400">ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-300 text-lg">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-slate-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                <p className="text-gray-300 mb-6">{selectedService.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-semibold">{selectedService.category}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Innovation Level:</span>
                    <span className="text-cyan-400 font-semibold">{selectedService.innovationLevel}</span>
                  </div>

                  {selectedService.pricing && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Pricing:</span>
                      <span className="text-white font-semibold">{selectedService.pricing}</span>
                    </div>
                  )}

                  {selectedService.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400 font-bold text-xl">
                        ${selectedService.price.toLocaleString()}/month
                      </span>
                    </div>
                  )}

                  {selectedService.hourlyRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Hourly Rate:</span>
                      <span className="text-cyan-400 font-bold text-xl">
                        ${selectedService.hourlyRate}/hour
                      </span>
                    </div>
                  )}

                  {selectedService.projectRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Project Rate:</span>
                      <span className="text-cyan-400 font-bold text-xl">
                        ${selectedService.projectRate.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Features & Benefits</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedService.features?.slice(0, 5).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedService.benefits?.slice(0, 3).map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <ZapIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedService.targetAudience && (
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.slice(0, 4).map((audience: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded-full"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Market Information</h4>
                  <div className="space-y-2 text-sm">
                    {selectedService.marketPrice && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                    )}
                    {selectedService.marketSize && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white">{selectedService.marketSize}</span>
                      </div>
                    )}
                    {selectedService.growthRate && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-white">{selectedService.growthRate}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white">+1 302 464 0950</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Website:</span>
                      <span className="text-cyan-400">ziontechgroup.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about %20{selectedService.name}"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
