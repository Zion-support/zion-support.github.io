import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  BarChart3,
  Code,
  Server,
  Chip,
  Atom,
  Rocket,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Satellite,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi,
  DollarSign,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2,
  Eye,
  Leaf,
  Factory,
  Car,
  Truck,
  Ship,
  Plane,
  Train
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-quantum-hybrid',
      title: 'AI-Powered Quantum Computing Platform',
      description: 'Revolutionary quantum computing enhanced with artificial intelligence for unprecedented computational capabilities',
      category: 'quantum',
      icon: Atom,
      price: '$2,500 - $25,000/month',
      features: ['Quantum AI Hybrid Processing', 'Post-Quantum Cryptography', 'Quantum Data Storage', 'AI-Enhanced Algorithms'],
      link: '/services/ai-quantum-computing-platform',
      color: 'from-indigo-500 to-purple-600',
      popular: true
    },
    {
      id: 'ai-space-tech',
      title: 'AI-Powered Space Technology Platform',
      description: 'Cutting-edge space technology solutions with AI-powered satellite systems and space exploration',
      category: 'space',
      icon: Rocket,
      price: '$3,500 - $45,000/month',
      features: ['Advanced Satellite Technology', 'Precision Navigation Systems', 'Space Observation & Analytics', 'Planetary Exploration AI'],
      link: '/services/ai-space-technology-platform',
      color: 'from-purple-500 to-indigo-600',
      popular: false
    },
    {
      id: 'ai-fintech',
      title: 'AI-Powered Financial Technology Platform',
      description: 'Next-generation fintech solutions with AI-powered trading, fraud detection, and risk management',
      category: 'fintech',
      icon: DollarSign,
      price: '$1,500 - $18,000/month',
      features: ['AI-Powered Trading', 'Fraud Detection', 'Risk Management', 'Predictive Analytics'],
      link: '/services/ai-financial-technology-platform',
      color: 'from-green-500 to-blue-600',
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced cybersecurity solutions with AI-powered threat detection and automated response',
      category: 'cybersecurity',
      icon: Shield,
      price: '$2,000 - $20,000/month',
      features: ['AI Threat Detection', 'Automated Response', 'Behavioral Analytics', 'Zero-Trust Security'],
      link: '/services/ai-cybersecurity-suite',
      color: 'from-red-500 to-orange-600',
      popular: false
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio Pro',
      description: 'Professional content creation platform powered by advanced AI algorithms',
      category: 'ai',
      icon: MessageSquare,
      price: '$500 - $5,000/month',
      features: ['AI Writing Assistant', 'Content Optimization', 'Multi-format Support', 'SEO Integration'],
      link: '/services/ai-content-creation-studio-pro',
      color: 'from-blue-500 to-purple-600',
      popular: false
    },
    {
      id: 'ai-trading-platform',
      title: 'Quantum AI Trading Platform',
      description: 'Revolutionary trading platform combining quantum computing and AI for optimal market performance',
      category: 'fintech',
      icon: TrendingUp,
      price: '$5,000 - $50,000/month',
      features: ['Quantum Algorithms', 'AI Market Analysis', 'Real-time Trading', 'Risk Management'],
      link: '/services/quantum-ai-trading-platform',
      color: 'from-purple-500 to-blue-600',
      popular: false
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics powered by AI for improved patient outcomes',
      category: 'ai',
      icon: Users,
      price: '$3,000 - $30,000/month',
      features: ['Patient Data Analysis', 'Predictive Diagnostics', 'Treatment Optimization', 'Clinical Decision Support'],
      link: '/services/ai-healthcare-analytics-platform',
      color: 'from-green-500 to-blue-600',
      popular: false
    },
    {
      id: 'ai-iot-edge',
      title: 'AI IoT Edge Computing Platform',
      description: 'Intelligent IoT solutions with edge computing and AI for real-time data processing',
      category: 'ai',
      icon: Chip,
      price: '$2,500 - $25,000/month',
      features: ['Edge AI Processing', 'Real-time Analytics', 'IoT Device Management', 'Predictive Maintenance'],
      link: '/services/ai-iot-edge-computing-platform',
      color: 'from-blue-500 to-green-600',
      popular: false
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered optimization and forecasting',
      category: 'ai',
      icon: Network,
      price: '$4,000 - $40,000/month',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Supplier Analytics'],
      link: '/services/ai-supply-chain-optimization',
      color: 'from-orange-500 to-red-600',
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Platform',
      description: 'Intelligent workflow automation with AI-powered process optimization',
      category: 'ai',
      icon: Workflow,
      price: '$1,500 - $15,000/month',
      features: ['Process Automation', 'Intelligent Routing', 'Performance Analytics', 'Custom Workflows'],
      link: '/services/ai-workflow-automation',
      color: 'from-purple-500 to-pink-600',
      popular: false
    }
  ];

  const Workflow = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of cutting-edge AI, quantum computing, space technology, 
                and financial technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </button>
                <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Get Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeCategory === 'all' ? 'All Services' : `${serviceCategories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeCategory === 'all' 
                ? 'Explore our complete portfolio of innovative solutions'
                : `Discover our cutting-edge ${serviceCategories.find(c => c.id === activeCategory)?.name.toLowerCase()} solutions`
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  service.popular ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    service.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600'
                      : `bg-gradient-to-r ${service.color} text-white hover:opacity-90`
                  }`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose from our comprehensive portfolio of cutting-edge solutions and start your transformation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your technology needs? Contact our experts today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-blue-600 font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600 font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-blue-600 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
