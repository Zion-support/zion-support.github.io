import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Eye, CheckCircle, Clock, TrendingUp, Sparkles, Users, BarChart3, Globe, ArrowRight, FileText, Search, AlertTriangle } from 'lucide-react';

const AIDataGovernancePlatform: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Intelligent Data Classification',
      description: 'AI automatically identifies and classifies sensitive data across your organization'
    },
    {
      icon: Lock,
      title: 'Advanced Access Control',
      description: 'Dynamic permission management with AI-powered risk assessment'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of data access and usage patterns'
    },
    {
      icon: Database,
      title: 'Data Lineage Tracking',
      description: 'Complete audit trail of data movement and transformations'
    }
  ];

  const complianceFrameworks = [
    {
      title: 'GDPR Compliance',
      description: 'Automated data subject rights management and consent tracking',
      icon: '🇪🇺'
    },
    {
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act automation and reporting',
      icon: '🇺🇸'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security controls and compliance monitoring automation',
      icon: '🔒'
    },
    {
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection and privacy controls',
      icon: '🏥'
    }
  ];

  const benefits = [
    'Reduce compliance costs by 70%',
    'Automate 90% of data governance tasks',
    'Real-time compliance monitoring and alerts',
    'Eliminate manual data classification errors',
    'Improve data security posture by 85%',
    'Streamline audit preparation and reporting'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 399,
      period: 'month',
      features: [
        'Up to 1TB data management',
        'Basic AI classification',
        'GDPR & CCPA compliance',
        'Standard reporting',
        'Email support',
        'Basic audit trails'
      ]
    },
    {
      plan: 'Professional',
      price: 799,
      period: 'month',
      features: [
        'Up to 10TB data management',
        'Advanced AI classification',
        'Full compliance framework support',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'API access'
      ]
    },
    {
      plan: 'Enterprise',
      price: 1599,
      period: 'month',
      features: [
        'Unlimited data management',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support team',
        'Custom integrations',
        'Advanced security features',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Governance Platform - Zion Tech Group"
        description="Transform your data governance with AI-powered compliance automation. Ensure data privacy, security, and regulatory compliance across your organization."
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Data Governance Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data Governance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data governance with AI-powered compliance automation. 
              Ensure data privacy, security, and regulatory compliance across your entire organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Start Governing
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Schedule Demo
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
              Intelligent Governance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI to ensure comprehensive data protection and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Automated compliance with major regulatory frameworks worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{framework.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{framework.title}</h3>
                    <p className="text-gray-300">{framework.description}</p>
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
              Why Choose AI Data Governance Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your data governance with intelligent automation
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
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your data governance? Our AI compliance experts can help you 
                set up automated governance and ensure regulatory compliance.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Start Data Governance
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your compliance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.plan === 'Professional' 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                  plan.plan === 'Professional'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 shadow-lg shadow-green-500/20'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
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
              Ready to Govern Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your data governance with AI-powered compliance automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDataGovernancePlatform;