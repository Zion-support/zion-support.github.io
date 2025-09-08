import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, 
  Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, 
  Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, 
  Globe, Phone, Mail, MapPin, Palette, Camera, Video, Music,
  Gamepad2, Car, Plane, Ship, Leaf, Sun, Wind, Smartphone,
  Watch, Headphones, Printer, Wifi, Bluetooth, Satellite,
  Calculator, BookOpen, GraduationCap, DollarSign, CreditCard, 
  ShoppingCart, Truck, Warehouse, Factory, Building2, Home, Store, 
  FileText, Calendar, Clock, Timer, Thermometer, Gauge, Compass, 
  Map, Search, Filter, SortAsc, SortDesc, ChevronDown, ChevronUp, 
  ExternalLink, Download, Upload, Share, Bookmark, MessageCircle, 
  PhoneCall, MailOpen, Send, Plus, Minus
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: string;
  benefits: string[];
  icon: any;
  color: string;
  featured: boolean;
  cta: string;
  ctaLink: string;
  marketPrice: string;
  savings: string;
}

const ComprehensiveServices2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, count: 0 },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, count: 0 },
    { id: 'fintech', name: 'FinTech Solutions', icon: DollarSign, count: 0 },
    { id: 'healthtech', name: 'HealthTech', icon: Heart, count: 0 },
    { id: 'edutech', name: 'EduTech', icon: GraduationCap, count: 0 }
  ];

  const services: Service[] = [
    // AI & Machine Learning Services
    {
      id: 'ai-business-intelligence-elite',
      title: 'AI Business Intelligence Elite',
      description: 'Advanced AI-powered analytics platform with real-time insights, predictive analytics, and automated reporting.',
      category: 'ai-ml',
      features: [
        'GPT-4 & Claude 3.5 Integration',
        'Real-time BI Dashboards',
        'Predictive Analytics Engine',
        'Natural Language Query Interface',
        'Automated Report Generation',
        'Multi-source Data Integration',
        'Advanced ML Model Training',
        'Enterprise Security & Compliance'
      ],
      pricing: '$2,500 - $12,000/month',
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 45%',
        'Real-time insights across all departments'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      cta: 'Get Demo',
      ctaLink: '/contact',
      marketPrice: '$5,000 - $25,000/month',
      savings: 'Up to 52% savings'
    },
    {
      id: 'ai-cybersecurity-elite',
      title: 'AI Cybersecurity Elite',
      description: 'Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.',
      category: 'cybersecurity',
      features: [
        'AI Threat Detection & Prevention',
        'Zero-Day Attack Protection',
        'Automated Incident Response',
        'Behavioral Analytics',
        'Threat Intelligence Platform',
        'Compliance Automation',
        '24/7 Security Monitoring',
        'Advanced Forensics Tools'
      ],
      pricing: '$3,500 - $18,000/month',
      benefits: [
        'Reduce security incidents by 95%',
        'Automate 90% of security tasks',
        'Comply with SOC2, GDPR, HIPAA',
        'Real-time threat intelligence'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: true,
      cta: 'Security Assessment',
      ctaLink: '/contact',
      marketPrice: '$7,000 - $35,000/month',
      savings: 'Up to 50% savings'
    },
    {
      id: 'quantum-computing-elite',
      title: 'Quantum Computing Elite',
      description: 'Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.',
      category: 'quantum',
      features: [
        '1000+ Qubit Access',
        'AI-Quantum Hybrid Systems',
        'Quantum-Safe Cryptography',
        'Global Quantum Network',
        'Custom Quantum Algorithms',
        'Real-time Optimization',
        'Quantum Machine Learning',
        'Expert Quantum Consulting'
      ],
      pricing: '$8,500 - $45,000/month',
      benefits: [
        'Solve previously impossible problems',
        'Exponential speed improvements',
        'Future-proof cryptography',
        'Competitive advantage in research'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      cta: 'Quantum Assessment',
      ctaLink: '/contact',
      marketPrice: '$15,000 - $75,000/month',
      savings: 'Up to 43% savings'
    },
    {
      id: 'micro-saas-platform-elite',
      title: 'Micro-SaaS Platform Elite',
      description: 'Complete platform to launch and scale your micro-SaaS business with proven templates and automation.',
      category: 'micro-saas',
      features: [
        'Rapid MVP Development',
        'Built-in Payment Processing',
        'AI-Powered Automation',
        'Multi-tenant Architecture',
        'Scalable Infrastructure',
        'Analytics & Insights',
        'Customer Success Tools',
        'Go-to-Market Templates'
      ],
      pricing: '$2,500 - $12,000/month',
      benefits: [
        'Launch in 30 days vs 6 months',
        'Reduce development costs by 70%',
        'Built-in scalability & security',
        'Proven business models'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      cta: 'Start Building',
      ctaLink: '/contact',
      marketPrice: '$5,000 - $20,000/month',
      savings: 'Up to 50% savings'
    },
    {
      id: 'ai-powered-it-asset-management',
      title: 'AI-Powered IT Asset Management',
      description: 'Intelligent IT asset tracking, lifecycle management, and optimization using AI and machine learning.',
      category: 'ai-ml',
      features: [
        'Automated Asset Discovery',
        'Predictive Maintenance',
        'Cost Optimization',
        'License Management',
        'Security Compliance',
        'Performance Analytics',
        'Integration APIs',
        'Mobile App Access'
      ],
      pricing: '$1,200 - $6,000/month',
      benefits: [
        'Reduce IT costs by 25-40%',
        'Improve asset utilization by 35%',
        'Automate compliance reporting',
        'Prevent security breaches'
      ],
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      cta: 'Asset Audit',
      ctaLink: '/contact',
      marketPrice: '$2,500 - $10,000/month',
      savings: 'Up to 52% savings'
    },
    {
      id: 'advanced-cybersecurity-suite',
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solution including endpoint protection, network security, and threat intelligence.',
      category: 'cybersecurity',
      features: [
        'Next-Gen Antivirus',
        'Network Traffic Analysis',
        'Endpoint Detection & Response',
        'Vulnerability Management',
        'Security Awareness Training',
        'Incident Response Automation',
        'Compliance Reporting',
        '24/7 Security Operations'
      ],
      pricing: '$2,800 - $15,000/month',
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 90%',
        'Meet all compliance requirements',
        'Lower insurance premiums'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      featured: false,
      cta: 'Security Review',
      ctaLink: '/contact',
      marketPrice: '$5,000 - $25,000/month',
      savings: 'Up to 44% savings'
    },
    {
      id: 'cloud-migration-elite',
      title: 'Cloud Migration Elite',
      description: 'End-to-end cloud migration services with cost optimization, security, and performance tuning.',
      category: 'cloud-devops',
      features: [
        'Migration Strategy & Planning',
        'Lift & Shift Migration',
        'Application Modernization',
        'Cost Optimization',
        'Security & Compliance',
        'Performance Tuning',
        'Disaster Recovery',
        'Ongoing Support'
      ],
      pricing: '$15,000 - $250,000',
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Improve performance by 40%',
        'Enhanced security & compliance',
        'Scalable & flexible infrastructure'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      featured: false,
      cta: 'Migration Plan',
      ctaLink: '/contact',
      marketPrice: '$25,000 - $400,000',
      savings: 'Up to 40% savings'
    },
    {
      id: 'data-engineering-elite',
      title: 'Data Engineering Elite',
      description: 'Complete data engineering solutions including ETL/ELT, data lakes, warehouses, and analytics platforms.',
      category: 'data-analytics',
      features: [
        'Data Pipeline Development',
        'ETL/ELT Automation',
        'Data Lake & Warehouse Design',
        'Real-time Streaming',
        'Data Quality Management',
        'BI Dashboard Development',
        'Machine Learning Pipelines',
        'Data Governance'
      ],
      pricing: '$7,500 - $140,000',
      benefits: [
        'Unlock data-driven insights',
        'Automate data processes',
        'Improve decision making',
        'Reduce manual data work by 80%'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-blue-500',
      featured: false,
      cta: 'Data Assessment',
      ctaLink: '/contact',
      marketPrice: '$12,000 - $200,000',
      savings: 'Up to 46% savings'
    },
    {
      id: 'iot-edge-platform',
      title: 'IoT & Edge Computing Platform',
      description: 'Comprehensive IoT solution with edge computing, device management, and real-time analytics.',
      category: 'iot-edge',
      features: [
        'Device Onboarding & Management',
        'Edge Computing Nodes',
        'Real-time Analytics',
        'Over-the-Air Updates',
        'Security & Encryption',
        'Scalable Infrastructure',
        'Integration APIs',
        'Custom Dashboards'
      ],
      pricing: '$12,000 - $180,000',
      benefits: [
        'Real-time operational insights',
        'Reduce latency by 90%',
        'Lower bandwidth costs',
        'Enhanced security & privacy'
      ],
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      featured: false,
      cta: 'IoT Strategy',
      ctaLink: '/contact',
      marketPrice: '$20,000 - $300,000',
      savings: 'Up to 40% savings'
    },
    {
      id: 'blockchain-web3-solutions',
      title: 'Blockchain & Web3 Solutions',
      description: 'Enterprise blockchain development, DeFi platforms, and Web3 infrastructure solutions.',
      category: 'blockchain',
      features: [
        'Smart Contract Development',
        'DeFi Platform Building',
        'NFT Marketplace Creation',
        'Blockchain Integration',
        'Token Economics Design',
        'Security Auditing',
        'Regulatory Compliance',
        'Cross-chain Solutions'
      ],
      pricing: '$25,000 - $500,000',
      benefits: [
        'Transparent & immutable systems',
        'Reduce intermediaries & costs',
        'Enhanced security & trust',
        'New business model opportunities'
      ],
      icon: Network,
      color: 'from-purple-500 to-indigo-500',
      featured: false,
      cta: 'Blockchain Strategy',
      ctaLink: '/contact',
      marketPrice: '$40,000 - $800,000',
      savings: 'Up to 37% savings'
    },
    {
      id: 'fintech-solutions-elite',
      title: 'FinTech Solutions Elite',
      description: 'Innovative financial technology solutions including payment processing, lending platforms, and risk management.',
      category: 'fintech',
      features: [
        'Payment Gateway Integration',
        'Lending Platform Development',
        'Risk Management Systems',
        'Regulatory Compliance',
        'Fraud Detection',
        'Financial Analytics',
        'Mobile Banking Apps',
        'API Development'
      ],
      pricing: '$30,000 - $600,000',
      benefits: [
        'Reduce transaction costs by 60%',
        'Improve customer experience',
        'Enhanced security & compliance',
        'Faster time to market'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      cta: 'FinTech Consultation',
      ctaLink: '/contact',
      marketPrice: '$50,000 - $1,000,000',
      savings: 'Up to 40% savings'
    },
    {
      id: 'healthtech-platform',
      title: 'HealthTech Platform',
      description: 'Comprehensive healthcare technology solutions including telemedicine, patient management, and AI diagnostics.',
      category: 'healthtech',
      features: [
        'Telemedicine Platform',
        'Patient Management System',
        'AI Diagnostic Tools',
        'Electronic Health Records',
        'Appointment Scheduling',
        'Billing & Insurance',
        'HIPAA Compliance',
        'Mobile Apps'
      ],
      pricing: '$40,000 - $800,000',
      benefits: [
        'Improve patient outcomes by 30%',
        'Reduce administrative costs by 40%',
        'Enhanced patient engagement',
        'Better care coordination'
      ],
      icon: Heart,
      color: 'from-blue-500 to-green-500',
      featured: false,
      cta: 'HealthTech Demo',
      ctaLink: '/contact',
      marketPrice: '$60,000 - $1,200,000',
      savings: 'Up to 33% savings'
    }
  ];

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = services.filter(service => 
      cat.id === 'all' || service.category === cat.id
    ).length;
  });

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Services 2029
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of AI, IT, and micro SAAS solutions designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
              <a
                href="/comprehensive-pricing-guide-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Pricing Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  service.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8" />
                    {service.featured && (
                      <Star className="w-6 h-6 text-yellow-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.pricing}
                      </span>
                      {service.savings && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {service.savings}
                        </span>
                      )}
                    </div>
                    {service.marketPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        Market: {service.marketPrice}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-blue-600 dark:text-blue-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={service.ctaLink}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="tel:+13024640950" className="hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </p>
            </div>
            <div>
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServices2029;