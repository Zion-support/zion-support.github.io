import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  BarChart,
  Activity,
  Atom,
  Heart,
  Leaf,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  CreditCard,
  Globe2,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Watch,
  X
} from 'lucide-react';
import { enhancedServices2025, EnhancedService } from '../data/enhancedServices2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<EnhancedService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allServices = enhancedServices2025.flatMap(category => category.items);
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: allServices.filter(s => s.category === 'Micro SaaS').length },
    { id: 'AI Solutions', name: 'AI Solutions', icon: Brain, count: allServices.filter(s => s.category === 'AI Solutions').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Quantum AI', name: 'Quantum AI', icon: Atom, count: allServices.filter(s => s.category === 'Quantum AI').length },
    { id: 'Sustainable Tech', name: 'Sustainable Tech', icon: Leaf, count: allServices.filter(s => s.category === 'Sustainable Tech').length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'FinTech & DeFi', name: 'FinTech & DeFi', icon: DollarSign, count: allServices.filter(s => s.category === 'FinTech & DeFi').length }
  ];

  const openServiceModal = (service: EnhancedService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enhanced Services 2025
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our cutting-edge micro-SaaS, AI solutions, and innovative technology services designed to transform your business
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="tel:+13024640950" 
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Request Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openServiceModal(service)}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{service.icon}</div>
                {service.featured && (
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                )}
              </div>

              {/* Service Title and Category */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 mb-3">
                {service.category}
              </span>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing and ROI */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}/{service.billing}</span>
                  <span className="text-xs text-slate-400">Market: {service.marketPrice}</span>
                </div>
                <div className="text-xs text-green-400">
                  ROI: {service.roi}
                </div>
              </div>

              {/* Key Features Preview */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                {service.ctaLabel}
              </button>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven business strategies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              title: 'Industry Expertise',
              description: '20+ years of experience in technology consulting and implementation'
            },
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: 'Military-grade security with SOC 2, ISO 27001, and GDPR compliance'
            },
            {
              icon: Zap,
              title: 'Rapid Implementation',
              description: 'Most solutions deployed in 2-8 weeks with proven ROI'
            },
            {
              icon: Users,
              title: '24/7 Support',
              description: 'Round-the-clock support with dedicated specialists and AI assistance'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific needs and discover how our innovative solutions can drive your success
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-6 h-6" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Request Consultation
            </a>
          </div>

          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <p className="text-slate-300 mb-2">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p className="text-slate-300">
              <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-900 border border-white/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-slate-300">{selectedService.description}</p>
                </div>

                {/* Pricing and ROI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Pricing & ROI</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Our Price:</span>
                        <span className="text-cyan-400 font-semibold">{selectedService.price}/{selectedService.billing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Market Price:</span>
                        <span className="text-slate-300">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Implementation:</span>
                        <span className="text-slate-300">{selectedService.implementationTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Support & Compliance</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-slate-300">Support:</span>
                        <p className="text-white">{selectedService.support}</p>
                      </div>
                      <div>
                        <span className="text-slate-300">Compliance:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedService.compliance.map((comp, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ideal For</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.integrations.map((integration, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedService.href}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
                  >
                    {selectedService.ctaLabel}
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedServicesShowcase2025;
