import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp,
  Truck,
  GitFork,
  Award,
  Code,
  Settings,
  Key,
  FileText,
  PenTool,
  Target as TargetIcon,
  BarChart3 as BarChart3Icon,
  ShoppingCart as ShoppingCartIcon,
  MessageCircle as MessageCircleIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Key as KeyIcon,
  Leaf as LeafIcon,
  Scale as ScaleIcon,
  Building2,
  Car as CarIcon,
  Factory as FactoryIcon,
  City,
  Eye as EyeIcon,
  Server as ServerIcon,
  Monitor as MonitorIcon,
  Code as CodeIcon,
  Gauge as GaugeIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Award as AwardIcon,
  Truck as TruckIcon,
  Home,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  href: string;
  color: string;
  category: string;
  featured: boolean;
}

const services: Service[] = [
  {
    id: 'ai-legal-document-analysis',
    name: 'AI Legal Document Analysis',
    description: 'Advanced AI-powered legal document review, contract analysis, and compliance checking with 99.9% accuracy.',
    icon: Scale,
    features: [
      'Contract clause analysis and risk assessment',
      'Regulatory compliance checking',
      'Legal precedent research automation',
      'Document comparison and version control',
      'Multi-language legal document support',
      'Real-time compliance alerts'
    ],
    benefits: [
      'Reduce legal review time by 80%',
      'Minimize compliance risks',
      'Cost-effective legal operations',
      '24/7 document processing'
    ],
    useCases: [
      'Law firms and legal departments',
      'Corporate compliance teams',
      'Contract management',
      'Regulatory reporting'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/ai-legal-document-analysis',
    color: 'from-blue-600 to-indigo-700',
    category: 'AI & Legal Tech',
    featured: true
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics, demand forecasting, and real-time optimization.',
    icon: Truck,
    features: [
      'Predictive demand forecasting',
      'Real-time inventory optimization',
      'Route optimization and logistics',
      'Supplier performance analytics',
      'Risk assessment and mitigation',
      'Sustainability tracking'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Enhanced supplier relationships',
      'Real-time visibility and control'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail and e-commerce',
      'Logistics providers',
      'Distribution networks'
    ],
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/ai-supply-chain-optimization',
    color: 'from-green-600 to-emerald-700',
    category: 'AI & Operations',
    featured: true
  },
  {
    id: 'ai-healthcare-analytics',
    name: 'AI Healthcare Analytics Platform',
    description: 'Comprehensive healthcare analytics with patient insights, predictive diagnostics, and operational optimization.',
    icon: Heart,
    features: [
      'Patient outcome prediction',
      'Diagnostic accuracy improvement',
      'Operational efficiency analytics',
      'Population health insights',
      'Clinical trial optimization',
      'Healthcare cost analysis'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce healthcare costs by 20%',
      'Enhanced patient outcomes',
      'Compliance with healthcare regulations'
    ],
    useCases: [
      'Hospitals and clinics',
      'Healthcare systems',
      'Medical research institutions',
      'Health insurance companies'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,499/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/ai-healthcare-analytics',
    color: 'from-red-600 to-pink-700',
    category: 'AI & Healthcare',
    featured: true
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    description: 'Advanced algorithmic trading with machine learning, risk management, and real-time market analysis.',
    icon: TrendingUp,
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Risk management and compliance',
      'Portfolio optimization',
      'Sentiment analysis',
      'Backtesting and simulation'
    ],
    benefits: [
      'Increase trading efficiency by 60%',
      'Reduce risk exposure',
      '24/7 market monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Individual traders',
      'Financial institutions'
    ],
    pricing: {
      starter: '$999/month',
      professional: '$2,999/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/ai-financial-trading',
    color: 'from-yellow-600 to-orange-700',
    category: 'AI & Fintech',
    featured: true
  },
  {
    id: 'quantum-ai-trading',
    name: 'Quantum AI Trading Platform',
    description: 'Next-generation quantum computing-powered trading with unprecedented speed and accuracy.',
    icon: Atom,
    features: [
      'Quantum algorithm optimization',
      'Ultra-fast market analysis',
      'Quantum risk assessment',
      'Portfolio quantum optimization',
      'Real-time quantum simulations',
      'Quantum machine learning models'
    ],
    benefits: [
      '1000x faster processing speed',
      'Quantum advantage in complex calculations',
      'Enhanced prediction accuracy',
      'Future-proof technology'
    ],
    useCases: [
      'High-frequency trading',
      'Complex financial modeling',
      'Risk assessment',
      'Portfolio optimization'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/quantum-ai-trading-platform',
    color: 'from-purple-600 to-pink-700',
    category: 'Quantum Computing',
    featured: true
  },
  {
    id: 'ai-workflow-orchestrator',
    name: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation with AI-powered decision making and process optimization.',
    icon: GitFork,
    features: [
      'Intelligent process automation',
      'AI decision making',
      'Workflow optimization',
      'Integration management',
      'Performance analytics',
      'Custom workflow builder'
    ],
    benefits: [
      'Increase productivity by 50%',
      'Reduce manual errors',
      'Streamlined operations',
      'Real-time process insights'
    ],
    useCases: [
      'Business process automation',
      'Customer service operations',
      'Marketing automation',
      'HR process management'
    ],
    pricing: {
      starter: '$399/month',
      professional: '$999/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/ai-workflow-orchestrator',
    color: 'from-indigo-600 to-blue-700',
    category: 'AI & Automation',
    featured: true
  },
  {
    id: 'cybersecurity-platform',
    name: 'AI-Powered Cybersecurity Platform',
    description: 'Advanced threat detection and prevention with machine learning and behavioral analysis.',
    icon: Shield,
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Vulnerability assessment',
      'Compliance monitoring',
      'Security analytics dashboard'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      '24/7 security monitoring',
      'Compliance automation'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,299/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/cybersecurity',
    color: 'from-green-600 to-teal-700',
    category: 'Cybersecurity',
    featured: true
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    description: 'Create virtual replicas of physical assets for monitoring, simulation, and predictive maintenance.',
    icon: Globe,
    features: [
      '3D asset modeling',
      'Real-time monitoring',
      'Predictive maintenance',
      'Simulation capabilities',
      'IoT integration',
      'Performance analytics'
    ],
    benefits: [
      'Reduce downtime by 40%',
      'Optimize asset performance',
      'Predictive maintenance savings',
      'Enhanced operational visibility'
    ],
    useCases: [
      'Manufacturing facilities',
      'Smart cities',
      'Energy infrastructure',
      'Transportation systems'
    ],
    pricing: {
      starter: '$799/month',
      professional: '$1,999/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/digital-twin',
    color: 'from-teal-600 to-cyan-700',
    category: 'IoT & Digital Twins',
    featured: true
  },
  {
    id: 'micro-crm',
    name: 'AI-Powered Micro CRM',
    description: 'Intelligent customer relationship management with AI insights and automation.',
    icon: Users,
    features: [
      'AI customer insights',
      'Automated lead scoring',
      'Smart email campaigns',
      'Customer behavior analysis',
      'Sales forecasting',
      'Integration capabilities'
    ],
    benefits: [
      'Increase sales by 35%',
      'Improve customer retention',
      'Automated lead nurturing',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Sales teams',
      'Marketing agencies',
      'Startups'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/micro-crm',
    color: 'from-blue-600 to-purple-700',
    category: 'CRM & Sales',
    featured: true
  },
  {
    id: 'space-tech-platform',
    name: 'Space Technology Platform',
    description: 'Advanced space technology solutions including satellite management and space debris tracking.',
    icon: Rocket,
    features: [
      'Satellite constellation management',
      'Space debris tracking',
      'Orbital optimization',
      'Space weather monitoring',
      'Launch vehicle optimization',
      'Space mission planning'
    ],
    benefits: [
      'Optimize satellite operations',
      'Reduce collision risks',
      'Enhanced mission success',
      'Cost-effective space operations'
    ],
    useCases: [
      'Satellite operators',
      'Space agencies',
      'Aerospace companies',
      'Research institutions'
    ],
    pricing: {
      starter: '$1,499/month',
      professional: '$3,999/month',
      enterprise: 'Custom pricing'
    },
    href: '/services/space-tech',
    color: 'from-indigo-600 to-purple-700',
    category: 'Space Technology',
    featured: true
  }
];

const categories = [
  { name: 'AI & Machine Learning', count: 6, color: 'from-purple-500 to-pink-500' },
  { name: 'Cybersecurity', count: 2, color: 'from-green-500 to-blue-500' },
  { name: 'Quantum Computing', count: 1, color: 'from-purple-500 to-indigo-500' },
  { name: 'IoT & Digital Twins', count: 2, color: 'from-teal-500 to-cyan-500' },
  { name: 'Space Technology', count: 1, color: 'from-indigo-500 to-purple-500' },
  { name: 'CRM & Sales', count: 1, color: 'from-blue-500 to-purple-500' }
];

export default function ComprehensiveServicesLanding2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2027 | Zion Tech Group"
        description="Transform your business with our comprehensive suite of innovative AI, cybersecurity, quantum computing, and micro SAAS services. Expert solutions for the digital age."
        keywords="AI services, cybersecurity, quantum computing, micro SAAS, digital transformation, IT services, Zion Tech Group, comprehensive solutions"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive Services Landing 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of innovative AI, cybersecurity, quantum computing, 
              and micro SAAS services. Expert solutions designed for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/comprehensive-pricing-guide-2027"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Us for Expert Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                All Categories ({services.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{service.name}</h2>
                  <p className="text-lg text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-purple-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Pricing:</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-gray-400">Starter</div>
                      <div className="text-white font-semibold">{service.pricing.starter}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">Professional</div>
                      <div className="text-white font-semibold">{service.pricing.professional}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400">Enterprise</div>
                      <div className="text-white font-semibold">{service.pricing.enterprise}</div>
                    </div>
                  </div>
                </div>

                {/* Benefits and Use Cases */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <Zap className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.slice(0, 2).map((useCase, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <Target className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={service.href}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss how our comprehensive services can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}