import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, AlertTriangle, CheckCircle, 
  Brain, Zap, BarChart3, Globe, Server, 
  Users, Database, Network, Cpu, ArrowRight,
  Play, Download, BookOpen, MessageCircle, Phone
} from 'lucide-react';

const AICybersecurityPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to threats in real-time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Comprehensive identity verification and access control for all network resources',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Continuous monitoring of user and system behavior to detect anomalies',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant threat containment and remediation without human intervention',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const capabilities = [
    'Real-time threat intelligence',
    'Advanced malware detection',
    'Network traffic analysis',
    'Endpoint protection',
    'Cloud security monitoring',
    'Compliance automation',
    'Incident response orchestration',
    'Security analytics dashboard'
  ];

  const benefits = [
    {
      title: 'Reduced Response Time',
      value: '90%',
      description: 'Faster threat detection and response'
    },
    {
      title: 'False Positive Reduction',
      value: '85%',
      description: 'More accurate threat identification'
    },
    {
      title: 'Cost Savings',
      value: '60%',
      description: 'Lower security operation costs'
    },
    {
      title: 'Compliance Coverage',
      value: '100%',
      description: 'Meet all regulatory requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Next-generation cybersecurity powered by artificial intelligence. 
              Protect your organization with intelligent threat detection, automated response, 
              and comprehensive security monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-lg hover:from-red-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-300">Powered by cutting-edge AI and machine learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Capabilities</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI cybersecurity platform provides end-to-end protection across all attack vectors, 
                from network-level threats to sophisticated social engineering attempts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">{benefit.value}</div>
                      <div className="text-sm text-gray-300">{benefit.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations that trust our AI-powered cybersecurity platform 
              to protect their digital assets and maintain compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-lg hover:from-red-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-300">Complete setup guides</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Expert assistance</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Demo</h3>
                <p className="text-gray-300">See it in action</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;