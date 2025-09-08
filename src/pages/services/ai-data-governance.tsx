import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Eye, BarChart3, Users, CheckCircle, ArrowRight, Brain, Zap, Globe, Server } from 'lucide-react';

export default function AIDataGovernance() {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Data Protection',
      description: 'Advanced machine learning algorithms detect and prevent data breaches in real-time.'
    },
    {
      icon: Database,
      title: 'Intelligent Data Classification',
      description: 'Automatically categorize and tag sensitive data using AI for better compliance.'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Data Access',
      description: 'Implement granular access controls with AI-driven risk assessment.'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of data access patterns and anomalies.'
    },
    {
      icon: BarChart3,
      title: 'Compliance Automation',
      description: 'Automated compliance reporting for GDPR, CCPA, SOC2, and HIPAA.'
    },
    {
      icon: Users,
      title: 'User Behavior Analytics',
      description: 'AI-powered user behavior analysis to detect insider threats.'
    }
  ];

  const benefits = [
    'Reduce data breach risk by 95%',
    'Automate 80% of compliance tasks',
    'Real-time threat detection and response',
    'Seamless integration with existing systems',
    'Scalable across enterprise environments',
    '24/7 AI-powered monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data Governance
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protect your most valuable asset with intelligent, automated data governance powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Data Protection
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive data governance with intelligent automation and real-time protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Data Governance?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your data security posture with intelligent automation and proactive threat prevention.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                    <div className="text-slate-300 text-sm">Risk Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                    <div className="text-slate-300 text-sm">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-slate-300 text-sm">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-slate-300 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading enterprises that trust our AI-powered data governance platform to protect their most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}