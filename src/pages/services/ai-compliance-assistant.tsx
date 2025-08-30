import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, AlertTriangle, CheckCircle2, ArrowRight, Brain, Zap, Globe, Server, Target, PieChart, Lock } from 'lucide-react';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: 'Automated Compliance Monitoring',
      description: 'AI-powered systems continuously monitor regulatory requirements and compliance status.'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Intelligent document processing and compliance verification with automated workflows.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'AI-driven risk analysis identifies potential compliance issues before they become problems.'
    },
    {
      icon: CheckCircle2,
      title: 'Audit Preparation',
      description: 'Automated preparation of compliance reports and audit documentation.'
    },
    {
      icon: Target,
      title: 'Policy Enforcement',
      description: 'Smart policy enforcement with real-time monitoring and automated alerts.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced data protection and privacy compliance for GDPR, CCPA, and other regulations.'
    }
  ];

  const benefits = [
    'Reduce compliance costs by 60%',
    'Automate 80% of compliance tasks',
    'Real-time compliance monitoring',
    'Automated risk assessment',
    'Seamless audit preparation',
    '24/7 compliance oversight'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Compliance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Compliance Assistant
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Streamline compliance management with AI-powered automation, real-time monitoring, and intelligent risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-400 hover:text-red-400 transition-all duration-300">
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
              Intelligent Compliance Management
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI compliance platform provides comprehensive automation with intelligent monitoring and risk assessment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
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
                Why Choose AI Compliance?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your compliance management with intelligent automation, real-time monitoring, and proactive risk assessment.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
                    <div className="text-slate-300 text-sm">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">80%</div>
                    <div className="text-slate-300 text-sm">Task Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">Real-time</div>
                    <div className="text-slate-300 text-sm">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-slate-300 text-sm">Oversight</div>
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
              Ready to Simplify Compliance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that use AI to streamline compliance management and reduce regulatory risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-400 hover:text-red-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}