import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Database,
  Bot,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
} from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      title: 'AI Quantum Financial Trading',
      description:
        'Revolutionary quantum-powered trading algorithms for unprecedented market analysis',
      path: '/services/AIQuantumFinancialTrading',
      icon: TrendingUp,
      featured: true,
      tags: ['Quantum Computing', 'Financial AI', 'Trading'],
    },
    {
      title: 'AI Business Intelligence',
      description:
        'Transform data into actionable insights with advanced AI analytics',
      path: '/services/ai-business-intelligence',
      icon: Database,
      tags: ['Analytics', 'Business Intelligence', 'Data Science'],
    },
    {
      title: 'AI Content Generation',
      description:
        'Automated content creation and optimization for marketing and communications',
      path: '/services/ai-content-generator',
      icon: Bot,
      tags: ['Content AI', 'Marketing', 'Automation'],
    },
    {
      title: 'AI Cybersecurity Suite',
      description:
        'Advanced threat detection and response using machine learning',
      path: '/services/ai-cybersecurity',
      icon: Shield,
      tags: ['Security', 'Threat Detection', 'ML'],
    },
    {
      title: 'AI Healthcare Analytics',
      description:
        'Predictive analytics and diagnostic assistance for healthcare providers',
      path: '/services/ai-healthcare-predictive-analytics',
      icon: Award,
      tags: ['Healthcare', 'Predictive Analytics', 'Medical AI'],
    },
    {
      title: 'AI Workflow Automation',
      description:
        'Intelligent process automation to streamline business operations',
      path: '/services/ai-workflow-automation',
      icon: Zap,
      tags: ['Automation', 'Workflow', 'Process Optimization'],
    },
  ];

  const benefits = [
    { metric: '300%', label: 'ROI Improvement' },
    { metric: '85%', label: 'Process Automation' },
    { metric: '99.9%', label: 'Accuracy Rate' },
    { metric: '24/7', label: 'AI Monitoring' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-12 h-12 text-cyan-400" />
              <h1 className="text-5xl md:text-6xl font-bold">
                AI & Machine Learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {' '}
                  Services
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your
              business operations, gain competitive advantages, and unlock new
              opportunities for growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to address your specific
              business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 relative ${
                  service.featured ? 'ring-2 ring-cyan-400/30' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                <service.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities and implement
              solutions that will revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Schedule AI Consultation
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;
