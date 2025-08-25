import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Blockchain, 
  Wifi, 
  Cpu, 
  Eye, 
  Zap, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Shield,
  Globe,
  Target,
  Users,
  BarChart3,
  Rocket
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  // Filter services by category
  const getServicesByCategory = (category: string) => {
    if (category === 'all') return allServices;
    return allServices.filter(service => service.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return <Brain className="w-8 h-8" />;
      case 'Blockchain & Web3':
        return <Blockchain className="w-8 h-8" />;
      case 'Internet of Things':
        return <Wifi className="w-8 h-8" />;
      case 'Quantum Computing':
        return <Cpu className="w-8 h-8" />;
      case 'Extended Reality':
        return <Eye className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return 'from-purple-500 to-pink-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Internet of Things':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum Computing':
        return 'from-cyan-500 to-blue-500';
      case 'Extended Reality':
        return 'from-pink-500 to-purple-500';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return 'Transform your business with cutting-edge AI solutions that automate processes, provide insights, and drive innovation.';
      case 'Blockchain & Web3':
        return 'Build secure, transparent, and decentralized applications with enterprise-grade blockchain technology.';
      case 'Internet of Things':
        return 'Connect and optimize your devices with intelligent IoT solutions that provide real-time data and automation.';
      case 'Quantum Computing':
        return 'Access the future of computing with quantum solutions that solve complex problems exponentially faster.';
      case 'Extended Reality':
        return 'Create immersive experiences with VR, AR, and MR technologies for training, collaboration, and customer engagement.';
      default:
        return 'Innovative technology solutions designed to drive your business forward.';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Comprehensive Technology Services Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of AI-powered solutions, emerging technologies, and innovative micro SAAS platforms designed to transform your business operations and drive exponential growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Explore Our Service Categories</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getServicesByCategory(activeTab).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                  {getCategoryIcon(service.category)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    ${service.price.monthly}
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">{service.pricingModel}</div>
                </div>
              </div>

              {/* Service Title and Category */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-400">{service.category}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* ROI and Market Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="bg-green-500/20 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">ROI</span>
                  </div>
                  <span className="text-green-400">{service.roi}</span>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <div className="text-gray-400 mb-1">Market</div>
                  <span className="text-blue-400">{service.marketPrice}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{service.supportLevel}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-3 h-3" />
                  <span>{service.estimatedDelivery}</span>
                </div>
              </div>

              {/* Contact Button */}
              <div className="space-y-2">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200"
                >
                  Get Started
                </a>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {getServicesByCategory(activeTab).length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found in this category</div>
            <button
              onClick={() => setActiveTab('all')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
            >
              View All Services
            </button>
          </div>
        )}
      </div>

      {/* Category Descriptions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Service Categories Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} mb-4 inline-block`}>
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-bold mb-3">{category}</h3>
              <p className="text-gray-300 mb-4">{getCategoryDescription(category)}</p>
              
              <div className="text-sm text-gray-400 mb-4">
                {getServicesByCategory(category).length} services available
              </div>
              
              <button
                onClick={() => setActiveTab(category)}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-400 font-semibold">Middletown, DE</p>
            </div>
          </div>

          <div className="space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Get Free Consultation
            </a>
            <a
              href="/comprehensive-services-showcase"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview;