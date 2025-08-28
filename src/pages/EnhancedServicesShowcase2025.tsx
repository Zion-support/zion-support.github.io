import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Scale,
  Heart,
  Leaf,
  Eye,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-purple to-zion-violet' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀', color: 'from-zion-indigo to-zion-purple' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                {" "}Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of intelligent solutions designed to transform your business operations, 
              enhance productivity, and drive unprecedented growth in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="text-white">50+ Innovative Services</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <TrendingUp className="w-5 h-5" />
                <span className="text-white">Industry-Leading ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-white">Enterprise-Grade Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Category & Price */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Market Price & ROI */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Market Price</div>
                    <div className="text-white font-semibold">{service.marketPrice}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className="text-zion-green font-semibold">{service.roi}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="text-gray-400 text-sm mb-2">Key Features</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-zion-cyan/20 text-zion-cyan">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <div className="text-gray-400 text-sm mb-2">Key Benefits</div>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white">
                        <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Learn More */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Delivery: {service.estimatedDelivery}
                    </div>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-200"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-cyan to-zion-blue py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of forward-thinking companies already leveraging our AI-powered solutions 
            to achieve unprecedented growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-zion-blue font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-zion-blue transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase2025;