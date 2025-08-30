import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  BarChart3, 
  PenTool, 
  Package, 
  MessageCircle, 
  TrendingUp, 
  Atom, 
  Link as LinkIcon, 
  Cpu,
  Zap,
  Star,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Award,
  Target,
  Rocket
} from 'lucide-react';
import { innovativeMicroSaasServices } from '../data/innovativeMicroSaasServices2025';
import { innovativeAIServices } from '../data/innovativeAIServices2025';
import { innovativeITServices } from '../data/innovativeITServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-services', name: 'AI Services', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'it-services', name: 'IT Services', icon: Cloud, color: 'from-orange-500 to-red-500' }
  ];

  const allServices = [
    ...innovativeMicroSaasServices.map(service => ({ ...service, category: 'micro-saas' })),
    ...innovativeAIServices.map(service => ({ ...service, category: 'ai-services' })),
    ...innovativeITServices.map(service => ({ ...service, category: 'it-services' }))
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'micro-saas': return Users;
      case 'ai-services': return Brain;
      case 'it-services': return Cloud;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'micro-saas': return 'from-blue-500 to-cyan-500';
      case 'ai-services': return 'from-green-500 to-emerald-500';
      case 'it-services': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge Micro SaaS, AI Services, and IT Solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Micro SaaS Solutions
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                AI Services
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Cloud className="w-5 h-5" />
                IT Infrastructure
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.featured && (
                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                          Featured
                        </span>
                      )}
                      {service.trending && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Trending
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light mb-4">{service.shortDescription}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.starter.price}
                      <span className="text-sm text-zion-slate-light font-normal">/{service.pricing.starter.period}</span>
                    </div>
                    <p className="text-sm text-zion-slate-light">Starting from</p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <span className="text-sm text-zion-slate-light">{service.innovationLevel}</span>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate to-zion-slate-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our experts to discuss your specific needs and discover how our innovative solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Rocket className="w-5 h-5" />
              Start Your Transformation Today
            </motion.button>
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
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal content would go here */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">Service Details</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {/* Service details content */}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
