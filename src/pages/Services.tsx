import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  MessageCircle,
  Truck
} from 'lucide-react';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...SPECIALIZED_IT_SERVICES
  ];

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        {
          name: 'AI Autonomous Systems',
          path: '/services/ai-autonomous-systems',
          description: 'Advanced autonomous AI systems that operate independently',
          icon: Brain,
          features: ['Self-learning algorithms', 'Predictive analytics', 'Automated decision making'],
          pricing: 'Starting from $5,000/month'
        },
        {
          name: 'AI Research Assistant',
          path: '/ai-autonomous-research-assistant',
          description: 'AI-powered research automation and insights',
          icon: Brain,
          features: ['Data analysis', 'Literature review', 'Trend identification'],
          pricing: 'Starting from $3,000/month'
        },
        {
          name: 'AI Business Intelligence',
          path: '/services/ai-business-intelligence',
          description: 'Advanced analytics and business insights',
          icon: BarChart3,
          features: ['Real-time dashboards', 'Predictive modeling', 'Performance tracking'],
          pricing: 'Starting from $4,000/month'
        },
        {
          name: 'AI Marketing Automation',
          path: '/services/ai-marketing-automation',
          description: 'Smart marketing optimization and automation',
          icon: Target,
          features: ['Customer segmentation', 'Campaign optimization', 'ROI tracking'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: 'AI Legal Document Automation',
          path: '/services/ai-legal-document-automation',
          description: 'AI-powered legal document generation and compliance',
          icon: FileText,
          features: ['Smart document generation', 'Compliance monitoring', 'Legal research automation'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Analytics',
          path: '/services/ai-healthcare-analytics',
          description: 'AI-powered healthcare diagnostics and patient monitoring',
          icon: Heart,
          features: ['Predictive diagnostics', 'Real-time monitoring', 'Population health analytics'],
          pricing: 'Starting from $799/month'
        },
        {
          name: 'AI Financial Trading',
          path: '/services/ai-financial-trading',
          description: 'AI-powered trading algorithms and portfolio optimization',
          icon: TrendingUp,
          features: ['AI trading algorithms', 'Risk management', 'High-frequency trading'],
          pricing: 'Starting from $99/month'
        },
        {
          name: 'AI Supply Chain Optimization',
          path: '/services/ai-supply-chain-optimization',
          description: 'AI-powered supply chain management and optimization',
          icon: Truck,
          features: ['Demand forecasting', 'Route optimization', 'Inventory management'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Customer Service Automation',
          path: '/services/ai-customer-service-automation',
          description: 'AI-powered customer support and service automation',
          icon: MessageCircle,
          features: ['AI chatbots', 'Multi-channel support', 'Smart routing'],
          pricing: 'Starting from $199/month'
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum computing solutions',
      services: [
        {
          name: 'Quantum Neural Networks',
          path: '/quantum-neural-network-platform',
          description: 'Quantum-powered neural networks for complex problems',
          icon: Brain,
          features: ['Quantum algorithms', 'Superior performance', 'Future-proof technology'],
          pricing: 'Starting from $15,000/month'
        },
        {
          name: 'Quantum Computing',
          path: '/services/quantum-technology',
          description: 'Quantum computing platforms and solutions',
          icon: Cpu,
          features: ['Quantum supremacy', 'Complex simulations', 'Cryptography'],
          pricing: 'Starting from $20,000/month'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'Cybersecurity Services',
          path: '/services/cybersecurity',
          description: 'Complete security solutions for your business',
          icon: Shield,
          features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: 'SOC2 Compliance Automation',
          path: '/soc2-compliance-automation',
          description: 'Automated compliance management and monitoring',
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],
          pricing: 'Starting from $4,500/month'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        {
          name: 'Cloud DevOps',
          path: '/cloud-devops',
          description: 'Cloud development and operations automation',
          icon: Cloud,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
          pricing: 'Starting from $3,000/month'
        },
        {
          name: 'IT Infrastructure',
          path: '/services/it-infrastructure',
          description: 'Complete IT infrastructure solutions',
          icon: Network,
          features: ['Network design', 'Hardware management', 'Performance optimization'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: '5G Enterprise Solutions',
          path: '/5g-enterprise-solutions',
          description: 'High-speed 5G connectivity solutions',
          icon: Network,
          features: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth'],
          pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamlined business process automation',
      services: [
        {
          name: 'Autonomous Business Platform',
          path: '/autonomous-business-operations-platform',
          description: 'Self-operating business systems and automation',
          icon: Building,
          features: ['Process automation', 'Workflow optimization', 'Performance analytics'],
          pricing: 'Starting from $6,000/month'
        },
        {
          name: 'AI Asset Management',
          path: '/ai-powered-it-asset-management',
          description: 'Intelligent IT asset management and tracking',
          icon: Database,
          features: ['Asset tracking', 'Lifecycle management', 'Cost optimization'],
          pricing: 'Starting from $2,000/month'
        }
      ]
    },
    {
      id: 'industry',
      title: 'Industry Solutions',
      icon: Target,
      color: 'from-orange-500 to-yellow-500',
      description: 'Tailored solutions for specific industries',
      services: [
        {
          name: 'Healthcare Technology',
          path: '/solutions/healthcare',
          description: 'Technology solutions for healthcare industry',
          icon: Heart,
          features: ['Patient management', 'Medical analytics', 'Compliance'],
          pricing: 'Starting from $8,000/month'
        },
        {
          name: 'Financial Services',
          path: '/services/financial-services',
          description: 'Fintech solutions and financial technology',
          icon: DollarSign,
          features: ['Risk management', 'Fraud detection', 'Compliance'],
          pricing: 'Starting from $7,000/month'
        },
        {
          name: 'Manufacturing Intelligence',
          path: '/services/manufacturing-intelligence',
          description: 'Smart manufacturing and Industry 4.0 solutions',
          icon: Cpu,
          features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],
          pricing: 'Starting from $6,500/month'
        }
      ]
    }

  ];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Next-Gen Services CTA */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 border border-zion-purple/30 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">🚀 Explore Next-Gen Services 2025</h3>
                  <p className="text-zion-slate-light">
                    Discover revolutionary AI, quantum computing, neural interfaces, and sustainable technology solutions
                  </p>
                </div>
                <Link
                  to="/next-gen-services"
                  className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-zion-purple/25 transition-all duration-300 flex items-center gap-2 group hover:scale-105"
                >
                  View Next-Gen Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">
                  {service.category === 'ai-ml' ? '🤖' : 
                   service.category === 'cybersecurity' ? '🔒' :
                   service.category === 'cloud-devops' ? '☁️' :
                   service.category === 'web-development' ? '🌐' :
                   service.category === 'data-analytics' ? '📊' : '🚀'}
                </span>
              </div>
              
              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to={`/services/${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
