import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Server,
  Network,
  Shield,
  Database,
  Cloud,
  Zap,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  FileText,
  Workflow,
  Building2,
  Globe,
  Activity,
  BarChart3,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Code,
  Layers,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Router,
  Switch,
  Firewall,
  Backup,
  Recovery,
  Maintenance,
  Support,
  Consulting,
  Training,
  Documentation
} from 'lucide-react';

export default function ITServices() {
  const services = [
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive management of your IT infrastructure and systems',
      icon: Server,
      features: [
        'Server administration',
        'Network management',
        'Storage solutions',
        'Backup & recovery',
        'Performance monitoring'
      ],
      benefits: [
        'Improved reliability',
        'Better performance',
        'Reduced downtime',
        'Cost optimization'
      ]
    },
    {
      title: 'Network Security',
      description: 'Protect your network with advanced security solutions',
      icon: Shield,
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'VPN setup',
        'Security audits',
        'Threat monitoring'
      ],
      benefits: [
        'Enhanced security',
        'Compliance adherence',
        'Risk mitigation',
        'Peace of mind'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Migrate and manage your infrastructure in the cloud',
      icon: Cloud,
      features: [
        'Cloud migration',
        'Multi-cloud management',
        'Cost optimization',
        'Security configuration',
        'Performance tuning'
      ],
      benefits: [
        'Scalability',
        'Cost savings',
        'Flexibility',
        'Disaster recovery'
      ]
    },
    {
      title: 'Data Management',
      description: 'Comprehensive data storage, backup, and recovery solutions',
      icon: Database,
      features: [
        'Data backup strategies',
        'Recovery planning',
        'Storage optimization',
        'Data archiving',
        'Compliance management'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Regulatory compliance',
        'Reduced risk'
      ]
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services',
      icon: Support,
      features: [
        'Helpdesk support',
        'Remote assistance',
        'On-site support',
        'Training & documentation',
        'Knowledge base'
      ],
      benefits: [
        'Quick resolution',
        'User productivity',
        'Reduced downtime',
        'Knowledge transfer'
      ]
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps',
      icon: Settings,
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor selection',
        'Implementation guidance',
        'ROI optimization'
      ],
      benefits: [
        'Clear direction',
        'Cost optimization',
        'Risk reduction',
        'Better outcomes'
      ]
    }
  ];

  const technologies = [
    'VMware',
    'Microsoft Azure',
    'AWS',
    'Google Cloud',
    'Cisco',
    'Juniper',
    'Fortinet',
    'Palo Alto',
    'VMware vSphere',
    'Hyper-V',
    'Docker',
    'Kubernetes'
  ];

  const benefits = [
    {
      title: 'Reliability',
      description: 'Ensure your systems run smoothly 24/7',
      icon: Shield
    },
    {
      title: 'Security',
      description: 'Protect your data and systems from threats',
      icon: Lock
    },
    {
      title: 'Efficiency',
      description: 'Optimize operations and reduce costs',
      icon: Zap
    },
    {
      title: 'Growth',
      description: 'Scale your infrastructure as you grow',
      icon: TrendingUp
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Energy',
    'Transportation',
    'Education'
  ];

  const useCases = [
    'Infrastructure Modernization',
    'Security Hardening',
    'Cloud Migration',
    'Disaster Recovery',
    'Performance Optimization',
    'Compliance Management',
    'Cost Optimization',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            IT
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive IT services to keep your business running smoothly. From infrastructure 
            management to cloud solutions, we ensure your technology works for you.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/comprehensive-pricing-guide-2025"
              className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From infrastructure to security, we provide end-to-end IT solutions 
              that keep your business running efficiently and securely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage industry-leading technologies to deliver 
              reliable and scalable IT solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Server className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">
                  {technology}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              IT Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our IT services can transform your business operations 
              and provide the foundation for digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Settings className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services provide the foundation for business success, 
              ensuring your technology infrastructure supports your growth and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience providing IT services across various industries 
              to meet unique business requirements and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can improve your infrastructure, 
              enhance security, and support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>View Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}