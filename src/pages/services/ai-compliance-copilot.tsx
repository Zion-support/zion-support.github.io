import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, AlertTriangle, CheckCircle2, ArrowRight, Brain, Zap, Globe, Server, Target, PieChart, Lock, Bot } from 'lucide-react';

export default function AIComplianceCopilot() {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Compliance Assistant',
      description: 'Intelligent AI copilot that guides you through complex compliance requirements and automates routine tasks.'
    },
    {
      icon: Shield,
      title: 'Real-time Compliance Monitoring',
      description: 'Continuous monitoring of regulatory changes and automatic compliance status updates.'
    },
    {
      icon: FileText,
      title: 'Smart Document Processing',
      description: 'AI-powered document analysis and compliance verification with automated workflows.'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Risk Assessment',
      description: 'Advanced AI algorithms predict potential compliance risks before they materialize.'
    },
    {
      icon: CheckCircle2,
      title: 'Automated Audit Support',
      description: 'Intelligent preparation of compliance reports and audit documentation with AI assistance.'
    },
    {
      icon: Lock,
      title: 'Intelligent Policy Management',
      description: 'AI-driven policy enforcement with real-time monitoring and automated compliance alerts.'
    }
  ];

  const benefits = [
    'Reduce compliance workload by 70%',
    'Automate 85% of compliance tasks',
    'Real-time regulatory updates',
    'AI-powered risk prediction',
    'Seamless audit preparation',
    '24/7 intelligent compliance support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <Bot className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 text-sm font-medium">AI Copilot</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Compliance Copilot
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your intelligent AI companion for compliance management, automating complex tasks and providing real-time guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300">
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
              Your AI Compliance Partner
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI copilot provides intelligent assistance, automates complex compliance tasks, and guides you through regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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
                Why Choose AI Compliance Copilot?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your compliance management with intelligent AI assistance, predictive insights, and comprehensive automation.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">70%</div>
                    <div className="text-slate-300 text-sm">Workload Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                    <div className="text-slate-300 text-sm">Task Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">Real-time</div>
                    <div className="text-slate-300 text-sm">Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-slate-300 text-sm">AI Support</div>
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
              Ready to Meet Your AI Compliance Partner?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that use AI copilots to streamline compliance management and reduce regulatory risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}