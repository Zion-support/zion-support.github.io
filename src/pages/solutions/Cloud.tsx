import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  Lock,
  Cpu,
  Network,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  MessageCircle,
  FileText,
  BarChart3,
  Workflow,
  Users,
  Building2,
  Leaf,
  Wifi,
  Activity,
  Layers
} from 'lucide-react';

export default function CloudSolutions() {
  const solutions = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure',
      icon: Cloud,
      features: [
        'Legacy system migration',
        'Data migration strategies',
        'Application modernization',
        'Performance optimization',
        'Cost analysis and planning'
      ],
      href: '/services/cloud-migration'
    },
    {
      title: 'Kubernetes Orchestration',
      description: 'Container orchestration and management',
      icon: Server,
      features: [
        'Container deployment',
        'Auto-scaling',
        'Load balancing',
        'Service mesh',
        'Monitoring and logging'
      ],
      href: '/services/kubernetes-orchestration'
    },
    {
      title: 'Serverless Architecture',
      description: 'Event-driven, scalable cloud solutions',
      icon: Zap,
      features: [
        'Function-as-a-Service',
        'Event processing',
        'Auto-scaling',
        'Pay-per-use pricing',
        'API management'
      ],
      href: '/services/serverless-architecture'
    },
    {
      title: 'Multi-Cloud Management',
      description: 'Unified management across cloud providers',
      icon: Globe,
      features: [
        'Cross-cloud deployment',
        'Unified monitoring',
        'Cost optimization',
        'Disaster recovery',
        'Compliance management'
      ],
      href: '/services/multi-cloud-management'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security and compliance',
      icon: Shield,
      features: [
        'Identity and access management',
        'Data encryption',
        'Network security',
        'Compliance monitoring',
        'Threat detection'
      ],
      href: '/services/cloud-security'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamlined development and deployment',
      icon: Workflow,
      features: [
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Performance monitoring'
      ],
      href: '/services/devops-automation'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale resources up or down as needed',
      icon: TrendingUp
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use',
      icon: DollarSign
    },
    {
      title: 'Reliability',
      description: 'High availability and disaster recovery',
      icon: Shield
    },
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      icon: Zap
    }
  ];

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'IBM Cloud',
    'Oracle Cloud',
    'DigitalOcean'
  ];

  const useCases = [
    'Web Applications',
    'Mobile Apps',
    'Data Analytics',
    'Machine Learning',
    'IoT Platforms',
    'E-commerce Systems',
    'Content Management',
    'Business Intelligence'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cloud
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with scalable, secure, and cost-effective cloud solutions. 
            From migration to optimization, we help you leverage the full power of the cloud.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2"
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

      {/* Solutions Grid */}
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
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial cloud adoption to advanced optimization, we provide end-to-end 
              cloud solutions that drive business transformation and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              Why Choose Cloud Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cloud computing offers unprecedented opportunities for businesses to innovate, 
              scale, and compete in the digital economy.
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
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
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best options for your 
              specific needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Cloud className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {provider}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Cloud Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how cloud solutions can transform your business operations and 
              enable new capabilities across various domains.
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
                <Server className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how cloud solutions can transform your business, 
              improve efficiency, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2"
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