import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Globe, 
  Lock, 
  Cpu, 
  Target, 
  Award, 
  BarChart3, 
  Heart, 
  Package, 
  Network, 
  Atom, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Zap },
    { id: 'it-services', name: 'IT Services', icon: Cpu },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'blockchain', name: 'Blockchain', icon: Network },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield }
  ];

  const allServices = [
    // AI Solutions
    {
      id: 'ai-enterprise-resource-planning',
      title: 'AI Enterprise Resource Planning',
      description: 'Revolutionary AI-powered ERP platform that optimizes resource allocation, demand forecasting, and operational efficiency.',
      category: 'ai-solutions',
      price: '$1,299 - $5,999',
      period: 'month',
      features: ['AI-powered demand forecasting', 'Real-time resource allocation', 'Predictive maintenance', 'Workforce planning', 'Financial optimization'],
      href: '/services/ai-enterprise-resource-planning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'ai-quantum-financial-trading',
      title: 'AI Quantum Financial Trading',
      description: 'Revolutionary AI-powered quantum trading platform that combines quantum computing with advanced AI for unprecedented trading performance.',
      category: 'ai-solutions',
      price: '$4,999 - $29,999',
      period: 'month',
      features: ['Quantum-enhanced AI algorithms', 'Real-time multi-asset trading', 'Advanced risk management', 'High-frequency trading', 'Portfolio optimization'],
      href: '/services/ai-quantum-financial-trading',
      icon: Atom,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI Healthcare Diagnostics',
      description: 'Revolutionary AI-powered healthcare diagnostics platform that enhances medical imaging analysis and improves diagnostic accuracy.',
      category: 'healthcare',
      price: '$2,999 - $19,999',
      period: 'month',
      features: ['AI-powered medical image analysis', 'Real-time diagnostic assistance', 'Predictive analytics', 'Automated reporting', 'EHR integration'],
      href: '/services/ai-healthcare-diagnostics',
      icon: Heart,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'ai-blockchain-supply-chain',
      title: 'AI Blockchain Supply Chain',
      description: 'Revolutionary AI-powered blockchain supply chain platform that combines AI optimization with blockchain transparency.',
      category: 'blockchain',
      price: '$3,999 - $24,999',
      period: 'month',
      features: ['AI-powered demand forecasting', 'Blockchain transparency', 'Smart contracts', 'Real-time tracking', 'Multi-party collaboration'],
      href: '/services/ai-blockchain-supply-chain',
      icon: Network,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-cyber-threat-intelligence',
      title: 'AI Cyber Threat Intelligence',
      description: 'Revolutionary AI-powered cyber threat intelligence platform that provides real-time threat detection and automated response.',
      category: 'cybersecurity',
      price: '$3,999 - $24,999',
      period: 'month',
      features: ['AI-powered threat detection', 'Behavioral analytics', 'Machine learning', 'Automated response', 'SIEM integration'],
      href: '/services/ai-cyber-threat-intelligence',
      icon: Shield,
      color: 'from-red-500 to-purple-600'
    },
    {
      id: 'ai-quantum-computing-platform',
      title: 'AI Quantum Computing Platform',
      description: 'Revolutionary AI-powered quantum computing platform that combines quantum algorithms with AI for unprecedented computational power.',
      category: 'quantum',
      price: '$7,999 - $49,999',
      period: 'month',
      features: ['Hybrid quantum-classical AI', 'Quantum machine learning', 'Error correction', 'Multi-provider access', 'Quantum simulation'],
      href: '/services/ai-quantum-computing-platform',
      icon: Atom,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Innovative AI Services Showcase 2025 | Zion Tech Group"
        description="Discover our comprehensive suite of innovative AI services, micro SAAS solutions, and cutting-edge technology platforms. Transform your business with Zion Tech Group's revolutionary solutions."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, healthcare AI, cybersecurity, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Star className="w-8 h-8 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Innovative AI Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of revolutionary AI services, micro SAAS solutions, and cutting-edge technology platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href={contactInfo.website}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-300 text-blue-300 font-semibold rounded-lg hover:bg-blue-300 hover:text-blue-900 transition-all duration-300"
              >
                Visit Website
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI-powered platforms and micro SAAS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10`}>
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-gray-500">/{service.period}</div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={service.href}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Get in touch with our team to discuss how our innovative AI services can revolutionize your operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contactInfo.website}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Visit Our Website
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=General Inquiry`}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-300 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Send Email
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
