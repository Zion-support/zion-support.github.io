import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Lock,
  Network,
  Server,
  Globe,
  Rocket,
  Target,
  BarChart3,
  Workflow,
  Leaf,
  Satellite,
  Link as LinkIcon,
  MessageCircle,
  HelpCircle,
  Smartphone,
  ShoppingCart,
  FileText,
  Video,
  GraduationCap,
  TestTube,
  Building2,
  Car,
  Factory,
  Heart,
  DollarSign,
  ShoppingBag,
  Plane,
  Ship,
  Truck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Award,
  Clock,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { allEnhancedZionServices2025 } from '../data/enhancedZionServices2025';

export default function EnhancedServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, color: 'bg-gradient-to-r from-green-500 to-blue-600' },
    { id: 'it-services', name: 'IT Services', icon: Server, color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
    { id: 'ai-services', name: 'AI Services', icon: Brain, color: 'bg-gradient-to-r from-orange-500 to-red-600' }
  ];

  const getServicesByCategory = () => {
    switch (activeCategory) {
      case 'micro-saas':
        return allEnhancedZionServices2025.microSaas;
      case 'it-services':
        return allEnhancedZionServices2025.itServices;
      case 'ai-services':
        return allEnhancedZionServices2025.aiServices;
      default:
        return [
          ...allEnhancedZionServices2025.microSaas,
          ...allEnhancedZionServices2025.itServices,
          ...allEnhancedZionServices2025.aiServices
        ];
    }
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'hourly') {
      return `$${price}/hour`;
    }
    return `$${price.toLocaleString()}/${model}`;
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Environmental Sustainability': Leaf,
      'Smart City Infrastructure': Building2,
      'Financial Technology': DollarSign,
      'Healthcare Technology': Heart,
      'Educational Technology': GraduationCap,
      'Advanced Cybersecurity': Shield,
      'Edge Computing': Network,
      'Blockchain Technology': Globe,
      'Industrial AI': Factory,
      'Content AI': FileText,
      'Customer Analytics': BarChart3
    };
    return iconMap[category] || Zap;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Enhanced Zion Services 2025 - Revolutionary Micro SAAS, IT & AI Solutions"
        description="Discover Zion Tech Group's cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms. Transform your business with innovative technology solutions."
        keywords="micro SAAS, IT services, AI services, Zion Tech Group, technology solutions, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enhanced Zion Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Revolutionary Micro SAAS, IT Infrastructure, and AI Services that transform businesses and drive innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">🚀 11+ New Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">💡 Cutting-Edge Innovation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">📈 Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Phone</p>
                <p className="font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p className="font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Address</p>
                <p className="font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServicesByCategory().map((service) => {
              const Icon = getServiceIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${activeCategory === 'micro-saas' ? 'bg-green-500/20' : activeCategory === 'it-services' ? 'bg-purple-500/20' : 'bg-orange-500/20'}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300 mb-1">{service.category}</div>
                      <div className="text-2xl font-bold text-white">
                        {service.pricingModel === 'hourly' 
                          ? `$${service.hourlyRate}/hr`
                          : `$${service.price.toLocaleString()}`
                        }
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      <TrendingUpIcon className="w-4 h-4" />
                      <span>Market: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-200">
                      <Target className="w-4 h-4" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-purple-200">
                      <Clock className="w-4 h-4" />
                      <span>Setup: {service.setupTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                  <p className="text-blue-300 text-lg">{selectedService.category}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Pricing:</span>
                      <span className="text-white font-semibold">
                        {selectedService.pricingModel === 'hourly' 
                          ? `$${selectedService.hourlyRate}/hour`
                          : `$${selectedService.price.toLocaleString()}/${selectedService.pricingModel}`
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-blue-300">{selectedService.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-green-300">{selectedService.roi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Setup Time:</span>
                      <span className="text-purple-300">{selectedService.setupTime}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedService.aiModels && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">AI Models</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.aiModels.map((model, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-500/20 rounded-full text-sm text-orange-300"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  Ready to Transform Your Business?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-blue-200">
                    <Phone className="w-5 h-5" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-200">
                    <Mail className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-200">
                    <GlobeIcon className="w-5 h-5" />
                    <a 
                      href="https://ziontechgroup.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of forward-thinking companies already transforming their business with Zion Tech Group's innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Visit Our Website</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}