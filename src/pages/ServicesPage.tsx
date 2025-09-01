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
  Users
} from 'lucide-react';
import { allServices, contactInfo } from '../data/services';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: any = ['All', 'AI Services', 'IT Services', 'Enterprise AI', 'Quantum Technology', 'Blockchain Technology', 'Strategic Consulting', 'Compliance Consulting'];

  const filteredServices: any = useMemo(() => {
    return allServices.filter(service => {
      const categoryMatch: any = selectedCategory === 'All' || service.category === selectedCategory;
      const searchMatch: any = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  const serviceIcons: any = {
    'AI Services': Brain,
    'IT Services': Shield,
    'Enterprise AI': Database,
    'Quantum Technology': Zap,
    'Blockchain Technology': Users,
    'Strategic Consulting': Cloud,
    'Compliance Consulting': Check
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: any = {
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
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = serviceIcons[service.category] || Sparkles;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Service Icon */}
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Service Header */}
                <div className="mb-4">
                  <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mt-2 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400">
                    Market: {service.marketPrice}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                  <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our innovative solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Call Now
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
