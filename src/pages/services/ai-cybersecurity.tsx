import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Brain, Lock, Eye, AlertTriangle, Zap, Users, Globe, Database, Network, Code, Key, Target, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const AICybersecurity: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect threats in real-time'
    },
    {
      icon: Shield,
      title: 'Zero-Day Attack Prevention',
      description: 'Identify and block unknown threats before they can cause damage'
    },
    {
      icon: Lock,
      title: 'Intelligent Access Control',
      description: 'AI-driven authentication and authorization systems'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor and analyze user behavior for suspicious activity'
    }
  ];

  const services = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence and analysis',
      icon: '🔍'
    },
    {
      title: 'Incident Response',
      description: 'Automated incident detection and response',
      icon: '🚨'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'AI-powered vulnerability scanning and assessment',
      icon: '🛡️'
    },
    {
      title: 'Security Automation',
      description: 'Automate security operations and responses',
      icon: '⚡'
    }
  ];

  const benefits = [
    'Real-time threat detection and response',
    'Reduced false positives with AI accuracy',
    '24/7 automated security monitoring',
    'Predictive threat intelligence',
    'Cost-effective security operations',
    'Compliance and regulatory support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Services - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions for threat detection, prevention, and response. Protect your business with intelligent security systems."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 mb-6">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-medium">AI Cybersecurity</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400">
                Cybersecurity
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with intelligent cybersecurity that learns, adapts, and evolves. 
              Our AI-powered security solutions detect and prevent threats before they can cause harm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-400 hover:to-orange-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/20">
                Secure Your Business
              </button>
              <button className="px-8 py-4 border border-red-400/30 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience next-generation cybersecurity powered by artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-400/30 transition-all duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end cybersecurity protection for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay ahead of evolving threats with intelligent security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Protected Today</h3>
              <p className="text-gray-300 mb-6">
                Don't wait for a security breach. Our AI cybersecurity experts can assess your current 
                security posture and implement advanced protection measures.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-400 hover:to-orange-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/20">
                Security Assessment
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your digital assets with AI-powered cybersecurity that never sleeps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-400 hover:to-orange-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/20">
                Start Security Assessment
              </button>
              <button className="px-8 py-4 border border-red-400/30 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurity;