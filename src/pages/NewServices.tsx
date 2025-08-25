<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ADVANCED_INNOVATIVE_SERVICES } from '../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';

// Create a union type for all services
type ServiceType = typeof COMPREHENSIVE_SERVICES[0] | typeof ADVANCED_INNOVATIVE_SERVICES[0] | typeof EMERGING_TECH_SERVICES[0];

// Helper functions to safely access service properties
const getServiceProperty = (service: ServiceType, property: string, defaultValue: string): string => {
  if (property in service) {
    const value = (service as any)[property];
    if (value !== undefined && value !== null) {
      return String(value);
    }
  }
  return defaultValue;
};

const getServiceTags = (service: ServiceType): string[] => {
  if ('tags' in service && service.tags) {
    return service.tags;
  }
  return [];
};

const getServicePrice = (service: ServiceType): { price: number; currency: string; pricingModel: string } => {
  if ('price' in service && typeof service.price === 'object') {
    // EmergingTechService has a price object
    const priceObj = service.price as any;
    return {
      price: priceObj.monthly || priceObj.yearly || priceObj.oneTime || 0,
      currency: priceObj.currency || '$',
      pricingModel: priceObj.pricingModel || 'custom'
    };
  } else if ('price' in service && typeof service.price === 'number') {
    // ComprehensiveService has a direct price number
    return {
      price: service.price,
      currency: (service as any).currency || '$',
      pricingModel: (service as any).pricingModel || 'monthly'
    };
  }
  return { price: 0, currency: '$', pricingModel: 'custom' };
};

export function NewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  // Combine all services
<<<<<<< HEAD
  const allServices: ServiceType[] = [
=======
<<<<<<< HEAD
  const allServices: any[] = [
=======
  const allServices: ServiceType[] = [
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    ...COMPREHENSIVE_SERVICES,
    ...ADVANCED_INNOVATIVE_SERVICES,
    ...EMERGING_TECH_SERVICES
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in service && service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
<<<<<<< HEAD
=======
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Cpu, 
  Database, 
=======
  Brain, 
  Cpu, 
  Zap, 
  Target, 
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
  ArrowRight,
  Star,
<<<<<<< HEAD
  CheckCircle,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Rocket,
  Atom,
  Bot
=======
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart,
  HelpCircle,
  MessageCircle,
  FileText,
  Video,
  Book,
  Mail as MailIcon,
  CreditCard,
  Bot,
  CircuitBoard,
  Atom,
  Satellite
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

<<<<<<< HEAD
const NewServices = () => {
  const newServices = [
    {
      title: "AI Autonomous Research Assistant",
      description: "Revolutionary AI-powered research platform that works independently to discover insights and patterns across multiple data sources.",
      features: [
        "Autonomous research capabilities",
        "Multi-source data integration",
        "Real-time analysis and insights",
        "Advanced knowledge synthesis"
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      path: "/ai-autonomous-research-assistant",
      status: "New"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Cutting-edge platform combining quantum computing with neural networks to solve previously impossible computational problems.",
      features: [
        "Quantum processing power",
        "Exponential speed improvements",
        "Hybrid quantum-classical architecture",
        "Advanced simulation capabilities"
      ],
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      path: "/quantum-neural-network-platform",
      status: "New"
    },
    {
      title: "Autonomous Business Operations Platform",
      description: "AI-powered platform that handles complex business processes independently, optimizing efficiency and driving growth.",
      features: [
        "24/7 autonomous operation",
        "Intelligent process automation",
        "Real-time decision making",
        "Predictive business analytics"
      ],
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      path: "/autonomous-business-operations-platform",
      status: "New"
    },
    {
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset management platform that provides complete visibility and optimization of your IT infrastructure.",
      features: [
        "Automated asset discovery",
        "Predictive maintenance",
        "Real-time monitoring",
        "Comprehensive analytics"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      path: "/ai-powered-it-asset-management",
      status: "New"
    },
    {
      title: "SOC2 Compliance Automation",
      description: "Streamlined SOC2 compliance with AI-powered automation that reduces manual effort and ensures continuous compliance.",
      features: [
        "Automated compliance monitoring",
        "Real-time violation detection",
        "Automated evidence collection",
        "Audit preparation tools"
      ],
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      path: "/soc2-compliance-automation",
      status: "New"
    },
    {
      title: "5G Enterprise Solutions",
      description: "Transform your enterprise with cutting-edge 5G technology for ultra-fast connectivity and ultra-low latency.",
      features: [
        "Ultra-fast 5G networks",
        "Enterprise security protocols",
        "Private network solutions",
        "Real-time analytics"
      ],
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
      path: "/5g-enterprise-solutions",
      status: "New"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

<<<<<<< HEAD
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
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Revolutionary Tech Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum, and blockchain solutions. 
            Transform your business with services that were once science fiction.
          </p>
          
          {/* Service Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Technology Categories</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📱</div>
                <p className="font-semibold">Mobile</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                <p className="font-semibold">Website</p>
                <p className="text-zion-slate-light">ziontechgroup.com</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-zion-cyan">
            Featured Revolutionary Services
          </h2>
          
          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${getServicePrice(service).price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/{getServicePrice(service).pricingModel}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {getServiceProperty(service, 'estimatedDelivery', 'N/A')}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {getServiceProperty(service, 'supportLevel', 'N/A')} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {getServiceProperty(service, 'marketPrice', 'N/A')}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {getServiceTags(service).slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-zion-cyan">
            Complete Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                      {service.category}
                    </span>
                    <span className="text-zion-cyan font-bold text-lg">
                      ${getServicePrice(service).price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/{getServicePrice(service).pricingModel}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-zion-slate-light text-sm text-center">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">
                      Delivery: {getServiceProperty(service, 'estimatedDelivery', 'N/A')}
                    </span>
                    <span className="text-zion-cyan font-medium">
                      {getServiceProperty(service, 'supportLevel', 'N/A')} support
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-zion-slate-light text-sm">
                      Market Price: {getServiceProperty(service, 'marketPrice', 'N/A')}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {getServiceTags(service).slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-zion-slate-light text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Service Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-zion-slate-light"
        >
          <p className="text-lg">
            Showing {filteredServices.length} of {allServices.length} revolutionary services
          </p>
          <p className="text-sm mt-2">
            Contact us to learn more about any service or request a custom solution
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our revolutionary technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
<<<<<<< HEAD
=======
=======
  const upcomingServices = [
    {
      title: "AI-Powered Voice Cloning",
      description: "Advanced voice synthesis technology for personalized AI interactions and content creation.",
      eta: "Q2 2024",
      icon: Mic,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain infrastructure for secure, transparent business operations.",
      eta: "Q3 2024",
      icon: LinkIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "IoT Data Analytics Platform",
      description: "Comprehensive IoT data management and analytics for smart city and industrial applications.",
      eta: "Q3 2024",
      icon: Wifi,
      color: "from-green-500 to-teal-500"
    }
  ];

  const benefits = [
    "Early access to cutting-edge technology",
    "Competitive advantage in your industry",
    "Reduced implementation costs",
    "Priority support and consultation",
    "Customization and integration support",
    "Exclusive training and resources"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                New Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our latest AI-powered services and cutting-edge technology solutions. 
              Be among the first to experience the future of business technology.
=======
const NewServices: React.FC = () => {
  const newServices = [
    {
      title: "AI Autonomous Business Manager",
      description: "Revolutionary AI system that autonomously manages your entire business operations with intelligent decision-making and predictive analytics",
      icon: Bot,
      category: "AI & Automation",
      features: ["24/7 business monitoring", "Autonomous decision making", "Predictive analytics", "Cost optimization"],
      benefits: ["40% efficiency increase", "Real-time insights", "Automated workflows", "Scalable operations"],
      status: "Now Available",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Next-generation quantum computing platform that combines quantum algorithms with neural networks for unprecedented computational power",
      icon: CircuitBoard,
      category: "Quantum Computing",
      features: ["Quantum-classical hybrid", "Neural network optimization", "Real-time simulation", "Enterprise security"],
      benefits: ["100x faster processing", "Quantum advantage", "Advanced AI training", "Research acceleration"],
      status: "Now Available",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "5G Enterprise Network Solutions",
      description: "Cutting-edge 5G infrastructure with network slicing, edge computing, and AI-powered optimization for enterprise applications",
      icon: Signal,
      category: "Network Infrastructure",
      features: ["Ultra-fast connectivity", "Network slicing", "Edge computing", "AI optimization"],
      benefits: ["10x faster speeds", "1ms latency", "Massive IoT support", "Real-time analytics"],
      status: "Now Available",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "AI-Powered IT Asset Management",
      description: "Intelligent platform that automatically discovers, monitors, and optimizes your entire IT infrastructure with predictive maintenance",
      icon: Monitor,
      category: "IT Management",
      features: ["Auto-discovery", "Predictive maintenance", "Lifecycle management", "Security monitoring"],
      benefits: ["45% cost reduction", "99.9% uptime", "Automated compliance", "Real-time insights"],
      status: "Now Available",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "SOC2 Compliance Automation",
      description: "AI-driven platform that automates your entire SOC2 compliance process with continuous monitoring and automated reporting",
      icon: Shield,
      category: "Security & Compliance",
      features: ["Automated monitoring", "Risk assessment", "Evidence collection", "Compliance dashboard"],
      benefits: ["95% compliance rate", "Automated audits", "Real-time monitoring", "Zero violations"],
      status: "Now Available",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "AI Autonomous Research Assistant",
      description: "Intelligent research platform that automates literature review, data analysis, and hypothesis generation for accelerated discoveries",
      icon: Microscope,
      category: "Research & Development",
      features: ["Literature automation", "Data analysis", "Hypothesis generation", "Collaboration tools"],
      benefits: ["85% efficiency gain", "Faster discoveries", "Accurate insights", "Team collaboration"],
      status: "Now Available",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const upcomingServices = [
    {
      title: "Quantum Financial Trading Platform",
      description: "Revolutionary quantum-powered trading platform with AI-driven market analysis and predictive modeling",
      icon: BarChart3,
      category: "Financial Technology",
      expectedDate: "Q1 2025",
      features: ["Quantum algorithms", "AI market analysis", "Real-time trading", "Risk management"]
    },
    {
      title: "AI Consciousness Evolution Platform",
      description: "Groundbreaking platform for studying and simulating consciousness evolution using advanced AI and neuroscience",
      icon: Brain,
      category: "AI Research",
      expectedDate: "Q2 2025",
      features: ["Consciousness simulation", "Neural mapping", "Evolution modeling", "Research tools"]
    },
    {
      title: "Autonomous Vehicle AI Platform",
      description: "Next-generation AI platform for autonomous vehicles with quantum-enhanced decision making and safety systems",
      icon: Car,
      category: "Transportation",
      expectedDate: "Q3 2025",
      features: ["Quantum AI", "Safety systems", "Real-time processing", "Fleet management"]
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Early Adopters", description: "Already using new services" },
    { icon: TrendingUp, value: "60%", label: "Performance Boost", description: "Average improvement across services" },
    { icon: Award, value: "15+", label: "Industry Awards", description: "Recognition for innovation" },
    { icon: Globe, value: "30+", label: "Countries", description: "Global service deployment" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "New Services - Zion Tech Group",
          description: "Discover our latest revolutionary AI-powered services and upcoming innovations. Stay ahead with cutting-edge technology solutions that transform your business.",
          keywords: ["new services", "AI services", "quantum computing", "5G solutions", "IT management", "compliance automation", "research assistant", "innovation"],
          type: "website",
          url: "https://ziontechgroup.com/new-services"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                New Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Discover our latest revolutionary AI-powered services and upcoming innovations. Stay ahead with cutting-edge technology that transforms your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Now Available
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest revolutionary services are ready to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <service.icon className="h-12 w-12 text-cyan-400" />
                      </div>
                      <div className="ml-4">
                        <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {service.category}
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {service.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="h-4 w-4 text-yellow-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a sneak peek at our upcoming revolutionary services and be among the first to experience the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <service.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                      Expected: {service.expectedDate}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Planned Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Lightbulb className="h-4 w-4 text-yellow-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      Join Waitlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to access our revolutionary new services and transform your business with cutting-edge technology.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-zion-slate-light hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Service Details</h3>
                <p className="text-zion-slate-light mb-4">{selectedService.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-zion-cyan font-medium">Category:</span>
                    <span className="text-white ml-2">{selectedService.category}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Subcategory:</span>
                    <span className="text-white ml-2">{getServiceProperty(selectedService, 'subcategory', 'N/A')}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Price:</span>
                    <span className="text-white ml-2">${getServicePrice(selectedService).price.toLocaleString()}/{getServicePrice(selectedService).pricingModel}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Delivery:</span>
                    <span className="text-white ml-2">{getServiceProperty(selectedService, 'estimatedDelivery', 'N/A')}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-medium">Support:</span>
                    <span className="text-white ml-2">{getServiceProperty(selectedService, 'supportLevel', 'N/A')}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Features & Benefits</h3>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {selectedService.useCases.map((useCase, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <span className="text-zion-cyan mr-2">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-zion-blue-light/20 rounded-lg border border-zion-cyan/30">
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Get Started Today</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">📱</div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-zion-cyan text-2xl mb-2">🌐</div>
                  <p className="font-semibold text-white">Visit Website</p>
                  <p className="text-zion-slate-light">ziontechgroup.com</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-zion-slate-light text-sm">
                  Market Price: {getServiceProperty(selectedService, 'marketPrice', 'N/A')} | 
                  Estimated Delivery: {getServiceProperty(selectedService, 'estimatedDelivery', 'N/A')}
                </p>
              </div>
            </div>
<<<<<<< HEAD
          </motion.div>
        </div>
      )}
    </div>
=======
          </div>
        </div>
<<<<<<< HEAD
      )}
=======
      </section>

      {/* New Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our newest AI-powered services that are revolutionizing industries 
              and transforming business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-medium">
                    {service.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a sneak peek at the revolutionary services we're developing for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.eta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our New Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be among the first to experience cutting-edge technology and gain a competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to transform your business with our latest AI-powered services. 
            Contact us today to get early access and priority implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
}

export default NewServices;