import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Cloud, Shield, Database, Globe, Building, Rocket,
  ArrowRight, ExternalLink, Download, Play, FileText, Search,
  CheckCircle, AlertCircle, Info, Clock, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, TrendingUp,
  Cpu, Network, BarChart3, Zap, Users, Target, Heart,
  Palette, TestTube, Bug, Lightbulb, Crown, Star, Code
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Building, count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 4 },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud, count: 3 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 2 }
  ];

  const services = [
    {
      id: 1,
      name: 'AI-Powered Analytics',
      category: 'ai',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Custom AI models',
        'Interactive dashboards',
        'Automated reporting'
      ],
      benefits: [
        'Increase operational efficiency by 40%',
        'Reduce decision-making time by 60%',
        'Identify new business opportunities',
        'Optimize resource allocation'
      ],
      icon: Brain,
      featured: true,
      price: 'From $299/month'
    },
    {
      id: 2,
      name: 'Cloud Infrastructure',
      category: 'cloud',
      description: 'Scalable, secure, and high-performance cloud solutions for modern businesses',
      features: [
        'Multi-cloud management',
        'Auto-scaling infrastructure',
        'Load balancing',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 30%',
        'Improve performance by 50%',
        'Enhanced security and compliance',
        'Global availability'
      ],
      icon: Cloud,
      featured: true,
      price: 'From $199/month'
    },
    {
      id: 3,
      name: 'Cybersecurity Platform',
      category: 'security',
      description: 'Comprehensive security solutions to protect your digital assets and data',
      features: [
        'Threat detection & response',
        'Vulnerability assessment',
        'Identity & access management',
        'Compliance monitoring',
        'Security training'
      ],
      benefits: [
        'Prevent 99.9% of cyber threats',
        'Meet industry compliance standards',
        'Reduce security incidents by 80%',
        'Protect customer trust'
      ],
      icon: Shield,
      featured: true,
      price: 'From $399/month'
    },
    {
      id: 4,
      name: 'Data Engineering',
      category: 'data',
      description: 'Build robust data pipelines and infrastructure for modern data-driven organizations',
      features: [
        'ETL/ELT pipelines',
        'Data warehousing',
        'Real-time streaming',
        'Data quality management',
        'API development'
      ],
      benefits: [
        'Accelerate data processing by 10x',
        'Improve data quality by 95%',
        'Enable real-time decision making',
        'Reduce data engineering costs'
      ],
      icon: Database,
      featured: false,
      price: 'From $499/month'
    },
    {
      id: 5,
      name: 'Machine Learning Operations',
      category: 'ai',
      description: 'Streamline ML model development, deployment, and monitoring at scale',
      features: [
        'Model versioning',
        'Automated training pipelines',
        'A/B testing framework',
        'Performance monitoring',
        'Model governance'
      ],
      benefits: [
        'Deploy models 5x faster',
        'Reduce ML infrastructure costs',
        'Improve model accuracy',
        'Ensure compliance & auditability'
      ],
      icon: Cpu,
      featured: false,
      price: 'From $599/month'
    },
    {
      id: 6,
      name: 'DevOps Automation',
      category: 'cloud',
      description: 'Automate your development and operations workflows for faster delivery',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Automated testing',
        'Deployment strategies',
        'Monitoring & alerting'
      ],
      benefits: [
        'Deploy 10x more frequently',
        'Reduce deployment failures by 80%',
        'Improve team productivity',
        'Faster time to market'
      ],
      icon: Rocket,
      featured: false,
      price: 'From $299/month'
    },
    {
      id: 7,
      name: 'API Management',
      category: 'data',
      description: 'Design, develop, and manage APIs that power your digital ecosystem',
      features: [
        'API design & development',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'Analytics & monitoring',
        'Developer portal'
      ],
      benefits: [
        'Reduce API development time by 60%',
        'Improve API performance by 40%',
        'Enhanced developer experience',
        'Better API security'
      ],
      icon: Code,
      featured: false,
      price: 'From $199/month'
    },
    {
      id: 8,
      name: 'Identity & Access Management',
      category: 'security',
      description: 'Secure user authentication and authorization across all your applications',
      features: [
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Role-based access control',
        'Identity federation',
        'Audit logging'
      ],
      benefits: [
        'Improve security posture',
        'Reduce password-related incidents',
        'Streamline user management',
        'Meet compliance requirements'
      ],
      icon: Key,
      featured: false,
      price: 'From $249/month'
    },
    {
      id: 9,
      name: 'Edge Computing',
      category: 'cloud',
      description: 'Deploy applications closer to users for improved performance and reduced latency',
      features: [
        'Global edge locations',
        'Content delivery optimization',
        'Real-time processing',
        'IoT integration',
        'Low-latency networking'
      ],
      benefits: [
        'Reduce latency by 80%',
        'Improve user experience',
        'Reduce bandwidth costs',
        'Enable real-time applications'
      ],
      icon: Globe,
      featured: false,
      price: 'From $399/month'
    },
    {
      id: 10,
      name: 'Natural Language Processing',
      category: 'ai',
      description: 'Build intelligent applications that understand and process human language',
      features: [
        'Text analysis & classification',
        'Sentiment analysis',
        'Language translation',
        'Chatbot development',
        'Document processing'
      ],
      benefits: [
        'Automate customer support',
        'Extract insights from text data',
        'Improve user engagement',
        'Reduce manual processing'
      ],
      icon: MessageCircle,
      featured: false,
      price: 'From $349/month'
    },
    {
      id: 11,
      name: 'Blockchain Solutions',
      category: 'security',
      description: 'Secure, transparent, and decentralized solutions for modern business needs',
      features: [
        'Smart contract development',
        'DeFi applications',
        'Supply chain tracking',
        'Digital identity',
        'Asset tokenization'
      ],
      benefits: [
        'Enhanced transparency',
        'Reduced fraud risk',
        'Lower transaction costs',
        'Improved traceability'
      ],
      icon: Network,
      featured: false,
      price: 'From $799/month'
    },
    {
      id: 12,
      name: 'IoT Platform',
      category: 'data',
      description: 'Connect, monitor, and manage IoT devices at scale with our comprehensive platform',
      features: [
        'Device management',
        'Data collection & storage',
        'Real-time analytics',
        'Alerting & notifications',
        'Integration APIs'
      ],
      benefits: [
        'Monitor thousands of devices',
        'Real-time operational insights',
        'Predictive maintenance',
        'Reduce operational costs'
      ],
      icon: Wifi,
      featured: false,
      price: 'From $449/month'
    }
  ];

  const servicePackages = [
    {
      name: 'Starter Package',
      description: 'Perfect for small businesses getting started with technology transformation',
      price: 'From $2,500',
      duration: '4-6 weeks',
      services: ['AI Analytics Setup', 'Cloud Migration', 'Basic Security Audit'],
      icon: Star
    },
    {
      name: 'Professional Package',
      description: 'Comprehensive solution for growing businesses with complex requirements',
      price: 'From $8,000',
      duration: '8-12 weeks',
      services: ['Full AI Implementation', 'Advanced Cloud Setup', 'Comprehensive Security', 'Data Engineering'],
      icon: Crown
    },
    {
      name: 'Enterprise Package',
      description: 'End-to-end transformation for large organizations',
      price: 'From $25,000',
      duration: '16-24 weeks',
      services: ['Custom AI Solutions', 'Multi-Cloud Strategy', 'Advanced Security', 'Full Data Platform', 'Training & Support'],
      icon: Building
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredServices = filteredServices.filter(service => service.featured);
  const regularServices = filteredServices.filter(service => !service.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'bg-purple-100 text-purple-800',
      cloud: 'bg-blue-100 text-blue-800',
      security: 'bg-red-100 text-red-800',
      data: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI, cloud, security, and technology solutions designed to transform your business and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center text-gray-400">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(service.category)}`}>
                          {serviceCategories.find(c => c.id === service.category)?.name}
                        </span>
                        <div className="text-2xl font-bold text-white mt-2">{service.price}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                        {serviceCategories.find(c => c.id === service.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium">{service.price}</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Packages</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose from our pre-configured service packages or work with us to create a custom solution
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                    <div className="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                    <div className="text-gray-400 text-sm">{pkg.duration}</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Get Quote
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'AI Expertise',
                  description: 'Deep expertise in artificial intelligence and machine learning technologies'
                },
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'Enterprise-grade security and compliance across all our solutions'
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Experienced professionals with proven track records in technology'
                },
                {
                  icon: Heart,
                  title: 'Customer Success',
                  description: 'Dedicated support and success teams to ensure your success'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our experts help you choose the right services and create a customized solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Request Demo
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Star className="w-5 h-5 mr-2" />
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

