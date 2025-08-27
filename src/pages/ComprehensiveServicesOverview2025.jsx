import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Factory, 
  Heart, 
  ShoppingCart, 
  Building2, 
  GraduationCap, 
  Leaf, 
  Truck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  Star,
  Clock,
  Users,
  DollarSign,
  Target,
  CheckCircle
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025 } from '../data/2025-ultimate-innovative-services-expansion.js';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from '../data/2025-specialized-industry-solutions-ultimate.js';

const ComprehensiveServicesOverview2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const allServices = [
    ...ULTIMATE_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025
  ];

  const categories = [
    {
      name: 'AI & Automation',
      icon: Brain,
      description: 'Advanced AI-powered solutions for business automation and intelligence',
      services: allServices.filter(s => s.category === 'AI & Automation' || s.tags.includes('AI')),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing',
      icon: Brain,
      description: 'Revolutionary quantum computing platforms and solutions',
      services: allServices.filter(s => s.category === 'Quantum Computing' || s.quantumReady),
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Military-grade security solutions and zero-trust platforms',
      services: allServices.filter(s => s.category === 'Cybersecurity' || s.cybersecurityLevel),
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'AI-powered trading platforms and financial solutions',
      services: allServices.filter(s => s.industry === 'Financial Services'),
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart factory automation and Industry 4.0 solutions',
      services: allServices.filter(s => s.industry === 'Manufacturing'),
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare analytics and medical imaging',
      services: allServices.filter(s => s.industry === 'Healthcare' || s.category === 'Healthcare AI'),
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = {
    totalServices: allServices.length,
    totalCategories: categories.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + s.price, 0) / allServices.length),
    averageROI: Math.round(allServices.reduce((sum, s) => {
      const roi = parseInt(s.roi.match(/\d+/)?.[0] || "0");
      return sum + roi;
    }, 0) / allServices.length),
    aiServices: allServices.filter(s => s.aiScore && s.aiScore > 80).length,
    quantumReady: allServices.filter(s => s.quantumReady).length,
    enterpriseServices: allServices.filter(s => s.supportLevel === 'enterprise' || s.supportLevel === 'dedicated').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="text-white">Services Overview</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our complete portfolio of cutting-edge micro SAAS services, 
              AI solutions, and industry-specific platforms designed to revolutionize 
              your business operations and drive unprecedented growth.
            </p>

            {/* Contact Banner */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-blue-500 font-semibold">Contact Us</p>
                    <p className="text-white text-lg">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-purple-600 font-semibold">Email</p>
                    <p className="text-white text-lg">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
              {stats.totalServices}
            </div>
            <div className="text-gray-300">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {stats.totalCategories}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
              ${(stats.averagePrice / 1000).toFixed(1)}K
            </div>
            <div className="text-gray-300">Avg Investment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              {stats.averageROI}%
            </div>
            <div className="text-gray-300">Avg ROI</div>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Service Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zinc-800/50 border border-zinc-700/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.services.length} services
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-500 text-sm font-medium">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="text-gray-400 text-sm">
                  From ${Math.min(...category.services.map(s => s.price)).toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution 
            for your business needs. Get in touch today to start your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ultimate-services-2025"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg"
            >
              Explore All Services
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServicesOverview2025;
