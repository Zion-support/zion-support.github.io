import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  Shield,
  Cloud,
  Database,
  Network,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Lock,
  RefreshCw,
  Globe,
  Cpu,
  TrendingUp
} from 'lucide-react';

export default function EnterpriseSolutionsPage() {
  const enterpriseSolutions = [
    {
      title: 'Enterprise AI Platform',
      description: 'Scalable AI solutions for large organizations',
      icon: Brain,
      href: '/solutions/ai-business-intelligence',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security for enterprise environments',
      icon: Shield,
      href: '/solutions/zero-trust-security',
      features: ['Zero Trust Architecture', 'Identity Management', 'Threat Detection', 'Compliance'],
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Enterprise-grade cloud solutions',
      icon: Cloud,
      href: '/services/cloud-devops',
      features: ['Multi-cloud Strategy', 'Hybrid Cloud', 'Cloud Migration', 'DevOps Automation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Data Management',
      description: 'Enterprise data governance and analytics',
      icon: Database,
      href: '/services/data-analytics',
      features: ['Data Governance', 'Business Intelligence', 'Data Warehousing', 'Real-time Analytics'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation',
      icon: RefreshCw,
      href: '/services/digital-transformation',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Digital Strategy'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Enterprise IoT',
      description: 'Industrial IoT and edge computing',
      icon: Zap,
      href: '/services/iot-edge-computing',
      features: ['Industrial IoT', 'Edge Computing', 'Smart Manufacturing', 'Predictive Maintenance'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const enterpriseCapabilities = [
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business',
      icon: TrendingUp,
      features: ['Horizontal Scaling', 'Vertical Scaling', 'Auto-scaling', 'Load Balancing']
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: Lock,
      features: ['SOC 2 Compliance', 'GDPR Compliance', 'HIPAA Compliance', 'ISO 27001']
    },
    {
      title: 'Integration',
      description: 'Seamless integration with existing systems',
      icon: Network,
      features: ['API Integration', 'Legacy Systems', 'Third-party Tools', 'Custom Connectors']
    },
    {
      title: 'Support',
      description: '24/7 enterprise support and maintenance',
      icon: Users,
      features: ['Dedicated Support', 'SLA Guarantees', 'Training Programs', 'Documentation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your enterprise with scalable, secure, and innovative technology solutions designed for large organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the unique challenges of enterprise organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enterprise Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built-in capabilities that ensure enterprise-grade reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our enterprise solutions can drive your organization's digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                Explore Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}