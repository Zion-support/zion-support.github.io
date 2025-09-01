import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Bot, 
  Cloud, 
  Users, 
  Calendar,
  GraduationCap,
  Cpu,
  Activity,
  Zap,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp
} from 'lucide-react';
import { ENHANCED_ZION_SERVICES_2025, ZION_CONTACT_INFO, SERVICE_CATEGORIES } from '../data/enhancedServicesData2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categoryIcons: Record<string, React.ComponentType<any>> = {
    "AI & Content Marketing": Brain,
    "Customer Experience": Users,
    "Marketing Automation": Bot,
    "HR & Workforce Management": Users,
    "Event Management": Calendar,
    "Education Technology": GraduationCap,
    "Cybersecurity": Shield,
    "Healthcare AI": Activity,
    "AI & Edge Computing": Cpu
  };

  const filteredServices = ENHANCED_ZION_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getInnovationBadgeColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Cutting-edge': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Advanced': return 'bg-gradient-to-r from-green-500 to-teal-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Revolutionary
              </span>
              <br />
              Tech Solutions 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Cutting-edge micro SAAS, AI, and IT services designed to transform your business 
              with innovative technology solutions and exceptional market value.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">{ZION_CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">{ZION_CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{ZION_CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="All">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = categoryIcons[service.category] || Brain;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">{service.category}</p>
                      </div>
                    </div>
                    
                    {/* Innovation Badge */}
                    <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getInnovationBadgeColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Market Range</p>
                        <p className="text-cyan-400 font-semibold">{service.marketPrice}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                      <span className="text-gray-400 ml-4">Market: {service.marketSize}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {service.features.length > 6 && (
                      <p className="text-sm text-cyan-400 mt-2">+{service.features.length - 6} more features</p>
                    )}
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.map((audience, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technical Highlights</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Technology:</span>
                          <p className="text-white">{service.technicalSpecs.technology.slice(0, 3).join(', ')}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Uptime:</span>
                          <p className="text-green-400 font-semibold">{service.technicalSpecs.uptime}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {service.demoUrl && (
                      <a
                        href={service.demoUrl}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={`mailto:${ZION_CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </a>
                  </div>

                  {/* Delivery & Support */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>Support: {service.supportLevel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact Zion Tech Group today to discuss how our innovative solutions can drive your success
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={`tel:${ZION_CONTACT_INFO.phone}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={`mailto:${ZION_CONTACT_INFO.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServicesShowcase2025;