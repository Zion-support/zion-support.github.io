import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  Code,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Check,
  ArrowRight
} from 'lucide-react';
import { allServices, contactInfo } from '../data/services';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI Services', 'IT Services', 'Quantum Technology', 'Blockchain Technology'];

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
      const searchMatch = (service.title || service.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  const serviceIcons: { [key: string]: any } = {
    'AI Services': Brain,
    'IT Services': Shield,
    'Quantum Technology': Zap,
    'Blockchain Technology': Users2,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions to drive your business forward with cutting-edge AI, cybersecurity, and digital transformation services.
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.mobile}`}>{contactInfo.mobile}</a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-cyan-400"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Categories Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.slice(1).map((category, index) => {
            const Icon = serviceIcons[category] || Brain;
            const serviceCount = allServices.filter(s => s.category === category).length;
            
            return (
              <motion.div
                key={category}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                  <p className="text-sm text-gray-400">{serviceCount} services</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map(service => {
            const Icon = serviceIcons[service.category] || Brain;
            const serviceTitle = service.title || service.name || 'Service';

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{serviceTitle}</h3>
                      <p className="text-sm text-cyan-400">{service.category}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      ${service.price?.toLocaleString() || 'Contact'}
                    </span>
                    <span className="text-sm text-gray-400">
                      {service.pricingModel || 'monthly'}
                    </span>
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-500 mt-1">Market: {service.marketPrice}</p>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features?.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features && service.features.length > 3 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <span key={index} className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">
                          {benefit.split(' ').slice(0, 3).join(' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="space-y-2">
                  <motion.a
                    href={`mailto:${contactInfo.email}?subject=Interest in ${serviceTitle}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="w-full border border-cyan-400/50 text-cyan-400 py-2 px-4 rounded-lg text-sm hover:bg-cyan-400/10 transition-colors flex items-center justify-center"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Services Found */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No services found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* Contact CTA Section */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-12 border border-cyan-400/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your success. Get in touch for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${contactInfo.email}?subject=Business Consultation Request`}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;
