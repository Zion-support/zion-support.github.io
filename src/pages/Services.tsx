import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Search, 
  Star, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Truck,
  Building,
  Scale,
  Leaf,
  Factory,
  Car,
  Home,
  City,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'New 2026 AI Services',
      icon: Brain,
      description: 'Cutting-edge AI-powered solutions for 2026 and beyond',
      color: 'from-purple-600 to-pink-600',
      featured: true,
      services: [
        {
          name: 'AI Cybersecurity Threat Intelligence',
          description: 'Advanced threat detection and intelligence platform with real-time monitoring',
          features: ['Real-time Threat Detection', 'AI-Powered Analysis', 'Intelligence Sharing', 'Automated Response'],
          href: '/comprehensive-services-showcase-2026#ai-cybersecurity-threat-intelligence',
          price: 'From $12,000',
          rating: 5.0,
          reviewCount: 89,
          featured: true
        },
        {
          name: 'AI Financial Trading Risk Management',
          description: 'Intelligent risk assessment and trading optimization platform',
          features: ['Risk Assessment', 'Trading Optimization', 'Portfolio Management', 'Compliance Monitoring'],
          href: '/comprehensive-services-showcase-2026#ai-financial-trading-risk-management',
          price: 'From $18,000',
          rating: 5.0,
          reviewCount: 67,
          featured: true
        },
        {
          name: 'AI Healthcare Predictive Analytics',
          description: 'Predictive healthcare insights and patient care optimization',
          features: ['Predictive Diagnostics', 'Patient Care Optimization', 'Clinical Research', 'Healthcare Operations'],
          href: '/comprehensive-services-showcase-2026#ai-healthcare-predictive-analytics',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 134,
          featured: true
        },
        {
          name: 'AI Legal Document Automation',
          description: 'Automated legal document processing and analysis platform',
          features: ['Document Processing', 'Legal Analysis', 'Compliance Checking', 'Automated Workflows'],
          href: '/comprehensive-services-showcase-2026#ai-legal-document-automation',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 98,
          featured: true
        }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'AI-powered workflow automation and process optimization',
          features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          price: 'From $7,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Customer Success Platform',
          description: 'AI-driven customer engagement and retention platform',
          features: ['Customer Insights', 'Engagement Automation', 'Retention Analytics', 'Success Tracking'],
          href: '/services/ai-customer-success-platform',
          price: 'From $6,000',
          rating: 4.9,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automated deployment solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'Edge Computing Platform',
          description: 'Ultra-low latency edge computing and IoT platform solutions',
          features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Distributed Computing'],
          href: '/services/edge-computing-platform',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 167
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security solutions and compliance management',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and automated incident response',
          features: ['AI Threat Detection', 'Zero-Trust Architecture', 'Automated Response', 'Compliance Automation'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Next-generation network security with zero-trust principles',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Prevention'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'IoT Services',
          description: 'Comprehensive IoT solutions and edge computing platforms',
          features: ['Device Management', 'Data Collection', 'Edge Processing', 'Analytics Dashboard'],
          href: '/services/iot-services',
          price: 'From $10,000',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing solutions for complex problems',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization Problems', 'Research Support'],
          href: '/services/quantum-computing',
          price: 'From $25,000',
          rating: 5.0,
          reviewCount: 45
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Specialized software-as-a-service solutions for specific business needs',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'Micro SaaS Platform',
          description: 'Custom micro SaaS solutions tailored to your business requirements',
          features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Analytics Dashboard'],
          href: '/services/micro-saas',
          price: 'From $3,000',
          rating: 4.8,
          reviewCount: 89
        }
      ]
    }
  ];

  const filteredCategories = serviceCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.services.some(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const allServices = filteredCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.name,
      categoryColor: category.color
    }))
  );

  return (
    <>
      <EnhancedSEO 
        title="Our Services - Zion Tech Group"
        description="Discover our comprehensive range of AI, cloud, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology solutions."
        canonical="/services"
        url="https://ziontechgroup.com/services"
        type="website"
        tags={['AI Services', 'Cloud Services', 'Cybersecurity', 'Digital Transformation', 'Technology Solutions']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our comprehensive range of AI, cloud, cybersecurity, and digital transformation services designed to transform your business
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filteredCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {category.name}
                  {category.featured && (
                    <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-1 rounded-full">New</span>
                  )}
                </button>
              ))}
            </div>

            {/* Active Category Services */}
            <div className="mb-16">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  {filteredCategories[activeCategory]?.name}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {filteredCategories[activeCategory]?.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories[activeCategory]?.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={service.href} className="block">
                      <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 ${
                        service.featured ? 'ring-2 ring-purple-500/30' : ''
                      }`}>
                        {service.featured && (
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                              New 2026
                            </span>
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </div>
                        )}
                        
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                              />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                          </div>
                          <div className="text-lg font-bold text-cyan-400">
                            {service.price}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="mr-2">Learn More</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">All Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of technology solutions and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={`${service.category}-${service.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.href} className="block">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        {service.featured && (
                          <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                            New 2026
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-cyan-400 font-semibold">
                          {service.price}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your technology needs and discover how we can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>View 2026 Services</span>
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}