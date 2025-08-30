import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Cpu,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Atom,
  Code,
  BarChart3,
  Workflow,
  Target,
  Lock,
  Eye,
  Search,
  Filter,
  ExternalLink,
  Server
} from 'lucide-react';
import { innovativeServices2029, serviceCategories, pricingTiers, Service } from '../data/innovativeServices2029';

export default function ComprehensiveServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    'all': { name: 'All Services', icon: <Rocket className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
    'ai-ml': { name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    'quantum': { name: 'Quantum Computing', icon: <Atom className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' },
    'devops': { name: 'DevOps & Automation', icon: <Workflow className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    'cybersecurity': { name: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
    'analytics': { name: 'Analytics & BI', icon: <BarChart3 className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    'cloud': { name: 'Cloud & Infrastructure', icon: <Cloud className="w-6 h-6" />, color: 'from-sky-500 to-blue-500' },
    'micro-saas': { name: 'Micro SAAS', icon: <Code className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' }
  };

  const services = [
    // AI & Machine Learning
    {
      id: 'ai-quantum-hybrid',
      title: 'AI Quantum Hybrid Platform',
      description: 'Revolutionary AI-Quantum hybrid platform combining artificial intelligence with quantum computing for unprecedented computational power.',
      category: 'quantum',
      price: '$49,999 - $199,999',
      features: ['Quantum-AI Integration', 'Hybrid Processing', 'Advanced ML', 'Real-time Optimization'],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-quantum-hybrid-platform',
      featured: true
    },
    {
      id: 'ai-devops-automation',
      title: 'AI DevOps Automation Platform',
      description: 'AI-powered DevOps automation platform that transforms software development, deployment, and operations with intelligent automation.',
      category: 'devops',
      price: '$29,999 - $119,999',
      features: ['AI Code Review', 'Smart CI/CD', 'Predictive Monitoring', 'Auto-scaling'],
      icon: <Workflow className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-devops-automation-platform',
      featured: true
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Analytics',
      description: 'Revolutionary AI-powered business intelligence and analytics platform that transforms data into actionable insights.',
      category: 'analytics',
      price: '$19,999 - $79,999',
      features: ['Predictive Analytics', 'Real-time Insights', 'AI-powered Reports', 'Custom Dashboards'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-business-intelligence-analytics',
      featured: true
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation platform that orchestrates complex business processes with AI-driven decision making.',
      category: 'ai-ml',
      price: '$24,999 - $99,999',
      features: ['Process Automation', 'AI Decision Making', 'Workflow Optimization', 'Real-time Monitoring'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/services/ai-workflow-orchestrator',
      featured: false
    },
    {
      id: 'ai-data-governance',
      title: 'AI Data Governance Platform',
      description: 'Comprehensive AI-powered data governance platform ensuring data quality, compliance, and security.',
      category: 'ai-ml',
      price: '$34,999 - $129,999',
      features: ['Data Quality', 'Compliance Management', 'AI Monitoring', 'Security Controls'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-data-governance-platform',
      featured: false
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience Analytics',
      description: 'Advanced AI-powered customer experience analytics platform for deep customer insights and optimization.',
      category: 'analytics',
      price: '$22,999 - $89,999',
      features: ['Customer Insights', 'Behavior Analysis', 'Predictive Modeling', 'Experience Optimization'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-customer-experience-analytics',
      featured: false
    },
    {
      id: 'ai-financial-risk',
      title: 'AI Financial Risk Management',
      description: 'Intelligent financial risk management platform using AI to predict and mitigate financial risks.',
      category: 'ai-ml',
      price: '$39,999 - $149,999',
      features: ['Risk Assessment', 'Predictive Modeling', 'Real-time Monitoring', 'Compliance Reporting'],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-financial-risk-management',
      featured: false
    },
    {
      id: 'ai-code-review-security',
      title: 'AI Code Review Security Scanner',
      description: 'Advanced AI-powered code review and security scanning platform for automated vulnerability detection.',
      category: 'cybersecurity',
      price: '$27,999 - $109,999',
      features: ['Code Analysis', 'Security Scanning', 'Vulnerability Detection', 'Automated Reviews'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      link: '/services/ai-code-review-security-scanner',
      featured: false
    },
    {
      id: 'zero-trust-network',
      title: 'Zero Trust Network Access',
      description: 'Modern zero-trust security architecture providing secure access to network resources.',
      category: 'cybersecurity',
      price: '$32,999 - $119,999',
      features: ['Zero Trust', 'Identity Management', 'Secure Access', 'Network Security'],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/services/zero-trust-network-access',
      featured: false
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Solutions',
      description: 'Comprehensive cloud DevOps solutions for modern application development and deployment.',
      category: 'cloud',
      price: '$18,999 - $79,999',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-sky-500 to-blue-500',
      link: '/services/cloud-devops',
      featured: false
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Solutions',
      description: 'Enterprise-grade IT infrastructure solutions for modern business operations.',
      category: 'cloud',
      price: '$25,999 - $99,999',
      features: ['Infrastructure Design', 'Network Solutions', 'Security Implementation', '24/7 Support'],
      icon: <Server className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      link: '/services/it-infrastructure',
      featured: false
    },
    {
      id: 'micro-crm',
      title: 'Micro CRM Platform',
      description: 'Lightweight, scalable CRM solution designed for growing businesses and startups.',
      category: 'micro-saas',
      price: '$9,999 - $39,999',
      features: ['Customer Management', 'Sales Tracking', 'Automation', 'Analytics'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/micro-crm',
      featured: false
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <SEO 
        title="Comprehensive Services Showcase 2029 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group, 2029 services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-8 border border-cyan-400/30">
              <Rocket className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Showcase 2029
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary AI-powered, quantum-secure, 
              and autonomous business solutions designed to transform industries and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 text-gray-300 hover:bg-white/10 hover:border-cyan-400/40'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive portfolio of cutting-edge services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${
                  service.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <Link to={service.link}>
                  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 h-full hover-lift">
                    {service.featured && (
                      <div className="text-center mb-4">
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                <Search className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn how our innovative solutions can drive growth and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008, Middletown DE 19709</p>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                View on Map
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;