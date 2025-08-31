import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Cloud, Shield, Zap, Rocket, Atom, Globe, Cpu, 
  Database, Lock, Smartphone, BarChart3, Code, Server, 
  Chip, Wifi, Bot, GitFork, Eye, Sparkles, Star, 
  TrendingUp, Award, Users, Target, ArrowRight, CheckCircle,
  Phone, Mail, MapPin, MessageSquare, FileText, Search,
  Clock, Calendar, DollarSign, ShieldCheck, Network,
  Satellite, Truck, Building, PenTool, Eye, Server
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  priceRange: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technology: string[];
  icon: React.ComponentType<any>;
  color: string;
  featured: boolean;
  ctaText: string;
  ctaLink: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

const InnovativeServicesShowcase2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const innovativeServices: Service[] = [
    // AI-Powered Business Solutions
    {
      id: 'ai-autonomous-business-manager',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from decision-making to execution.',
      category: 'ai-autonomous',
      priceRange: '$15,000 - $75,000/month',
      features: [
        'Autonomous decision-making engine',
        'Real-time business intelligence',
        'Predictive analytics and forecasting',
        'Automated resource allocation',
        'Multi-channel communication management',
        'Performance optimization algorithms'
      ],
      benefits: [
        '24/7 autonomous operation',
        'Data-driven decision making',
        'Cost reduction through automation',
        'Scalable business growth',
        'Risk mitigation and compliance',
        'Competitive advantage'
      ],
      useCases: [
        'Enterprise business management',
        'Multi-location operations',
        'E-commerce optimization',
        'Service industry automation',
        'Financial services management'
      ],
      technology: [
        'GPT-4 Turbo with 128K context',
        'Claude 3.5 Sonnet',
        'Custom fine-tuned models',
        'Real-time data processing',
        'Advanced NLP and computer vision',
        'Quantum-inspired algorithms'
      ],
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: true,
      ctaText: 'Schedule Demo',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $50,000 - $200,000/month',
      contactInfo
    },

    // Quantum AI Hybrid Platform
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with advanced AI for solving previously impossible problems.',
      category: 'quantum-ai',
      priceRange: '$25,000 - $150,000/month',
      features: [
        '1000+ qubit quantum access',
        'AI-quantum hybrid algorithms',
        'Quantum machine learning',
        'Cryptographic security',
        'Real-time quantum simulation',
        'Hybrid classical-quantum workflows'
      ],
      benefits: [
        'Exponential computational power',
        'Unprecedented problem-solving capability',
        'Future-proof technology investment',
        'Competitive advantage in research',
        'Breakthrough innovation potential'
      ],
      useCases: [
        'Drug discovery and molecular modeling',
        'Financial portfolio optimization',
        'Climate change modeling',
        'Cryptography and cybersecurity',
        'Artificial intelligence training'
      ],
      technology: [
        'IBM Quantum Experience',
        'Google Quantum AI',
        'Microsoft Azure Quantum',
        'Custom quantum algorithms',
        'Hybrid classical-quantum systems'
      ],
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      featured: true,
      ctaText: 'Quantum Consultation',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $100,000 - $500,000/month',
      contactInfo
    },

    // Autonomous Vehicle AI Platform
    {
      id: 'autonomous-vehicle-ai-platform',
      title: 'Autonomous Vehicle AI Platform',
      description: 'Complete AI platform for autonomous vehicle development, testing, and deployment with safety-first approach.',
      category: 'autonomous-vehicles',
      priceRange: '$50,000 - $300,000/month',
      features: [
        'Multi-sensor fusion AI',
        'Real-time decision making',
        'Safety validation systems',
        'Simulation and testing environment',
        'Regulatory compliance framework',
        'Fleet management integration'
      ],
      benefits: [
        'Accelerated autonomous development',
        'Reduced testing costs and time',
        'Enhanced safety and reliability',
        'Regulatory compliance assurance',
        'Scalable deployment platform'
      ],
      useCases: [
        'Automotive manufacturers',
        'Transportation companies',
        'Logistics and delivery',
        'Public transportation',
        'Agricultural automation'
      ],
      technology: [
        'Computer vision AI',
        'Lidar and radar processing',
        'Sensor fusion algorithms',
        'Real-time operating systems',
        'Edge computing optimization'
      ],
      icon: Truck,
      color: 'from-green-600 to-emerald-600',
      featured: true,
      ctaText: 'Vehicle AI Demo',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $200,000 - $1,000,000/month',
      contactInfo
    },

    // Smart City Infrastructure AI
    {
      id: 'smart-city-infrastructure-ai',
      title: 'Smart City Infrastructure AI',
      description: 'Comprehensive AI platform for managing and optimizing entire city infrastructure systems.',
      category: 'smart-cities',
      priceRange: '$75,000 - $400,000/month',
      features: [
        'IoT sensor network management',
        'Traffic flow optimization',
        'Energy consumption optimization',
        'Public safety monitoring',
        'Environmental monitoring',
        'Citizen engagement platform'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved citizen quality of life',
        'Environmental sustainability',
        'Enhanced public safety',
        'Data-driven urban planning'
      ],
      useCases: [
        'Municipal governments',
        'Urban development agencies',
        'Transportation authorities',
        'Utility companies',
        'Public safety departments'
      ],
      technology: [
        'IoT platform integration',
        'Real-time data analytics',
        'Predictive maintenance AI',
        'Geospatial analysis',
        '5G network optimization'
      ],
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      featured: true,
      ctaText: 'City AI Consultation',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $300,000 - $1,500,000/month',
      contactInfo
    },

    // AI-Powered Cybersecurity Elite
    {
      id: 'ai-cybersecurity-elite',
      title: 'AI-Powered Cybersecurity Elite',
      description: 'Next-generation cybersecurity platform using AI to predict, detect, and respond to threats in real-time.',
      category: 'cybersecurity',
      priceRange: '$20,000 - $100,000/month',
      features: [
        'AI threat prediction',
        'Zero-day attack detection',
        'Automated incident response',
        'Behavioral analysis',
        'Threat intelligence fusion',
        'Compliance automation'
      ],
      benefits: [
        'Proactive threat prevention',
        'Reduced false positives',
        '24/7 security monitoring',
        'Compliance assurance',
        'Cost-effective security'
      ],
      useCases: [
        'Financial institutions',
        'Healthcare organizations',
        'Government agencies',
        'Enterprise corporations',
        'Critical infrastructure'
      ],
      technology: [
        'Machine learning algorithms',
        'Natural language processing',
        'Behavioral analytics',
        'Threat intelligence feeds',
        'Zero-trust architecture'
      ],
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      featured: true,
      ctaText: 'Security Assessment',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $80,000 - $300,000/month',
      contactInfo
    },

    // Micro-SaaS Launch Platform
    {
      id: 'micro-saas-launch-platform',
      title: 'Micro-SaaS Launch Platform',
      description: 'Complete platform for launching, scaling, and managing micro-SaaS businesses with proven templates.',
      category: 'micro-saas',
      priceRange: '$5,000 - $25,000/month',
      features: [
        'Pre-built SaaS templates',
        'Payment processing integration',
        'User management system',
        'Analytics and reporting',
        'Multi-tenant architecture',
        'API management platform'
      ],
      benefits: [
        'Rapid time to market',
        'Proven business models',
        'Scalable architecture',
        'Reduced development costs',
        'Built-in monetization'
      ],
      useCases: [
        'Startup entrepreneurs',
        'Small business owners',
        'Digital agencies',
        'Enterprise innovation teams',
        'SaaS developers'
      ],
      technology: [
        'React/Next.js frontend',
        'Node.js/Python backend',
        'PostgreSQL database',
        'Stripe payment processing',
        'AWS/Azure cloud hosting'
      ],
      icon: Rocket,
      color: 'from-yellow-600 to-orange-600',
      featured: true,
      ctaText: 'Launch Your SaaS',
      ctaLink: '/contact',
      marketPrice: 'Market Value: $20,000 - $100,000/month',
      contactInfo
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom },
    { id: 'autonomous-vehicles', name: 'Autonomous Vehicles', icon: Truck },
    { id: 'smart-cities', name: 'Smart Cities', icon: Building },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

  const filteredServices = activeCategory === 'all' 
    ? innovativeServices 
    : innovativeServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2028</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI, quantum computing, 
              and autonomous systems solutions that are reshaping industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer ${
                  service.featured ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-gray-800 rounded-2xl p-6 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-700">
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price Range */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {service.priceRange}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.marketPrice}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    {service.ctaText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Target className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.technology.map((tech, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Code className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {selectedService.priceRange}
                    </div>
                    <p className="text-gray-300 mb-4">{selectedService.marketPrice}</p>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      {selectedService.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovativeServicesShowcase2028;
