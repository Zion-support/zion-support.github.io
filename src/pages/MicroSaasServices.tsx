import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PlayIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: React.ComponentType<any>;
  color: string;
  link: string;
}

const MicroSaasServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: MicroSaasService[] = [
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation powered by AI',
      features: ['Process automation', 'AI decision making', 'Integration APIs', 'Real-time monitoring'],
      pricing: 'Starting at $99/month',
      category: 'AI',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-workflow-automation'
    },
    {
      id: 'blockchain-defi',
      name: 'Blockchain & DeFi Solutions',
      description: 'Secure, transparent financial solutions built on blockchain technology',
      features: ['Smart contracts', 'DeFi protocols', 'Security auditing', 'Compliance tools'],
      pricing: 'Starting at $199/month',
      category: 'Blockchain',
      icon: ShieldCheckIcon,
      color: 'from-blue-500 to-cyan-500',
      link: '/blockchain-defi-solutions'
    },
    {
      id: 'iot-platform',
      name: 'IoT Management Platform',
      description: 'Comprehensive IoT device management and data analytics platform',
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Predictive maintenance'],
      pricing: 'Starting at $149/month',
      category: 'IoT',
      icon: GlobeAltIcon,
      color: 'from-green-500 to-emerald-500',
      link: '/iot-management-platform'
    },
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with advanced AI analytics',
      features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $129/month',
      category: 'AI',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-red-500',
      link: '/ai-business-intelligence'
    }
  ];

  const categories = ['all', 'AI', 'Blockchain', 'IoT'];

  const filteredServices = services.filter(service => 
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     service.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Scalable, focused software solutions that deliver immediate value and grow with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200">
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">{service.pricing}</span>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our micro SaaS solutions are designed to deliver immediate value while scaling with your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MicroSaasServices;