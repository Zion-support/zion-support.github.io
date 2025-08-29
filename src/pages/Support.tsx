import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, BookOpen, Phone, Mail, Clock, Users, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

export default function Support() {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Self-service documentation and guides',
      availability: '24/7',
      responseTime: 'Instant',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const commonIssues = [
    {
      category: 'Account & Access',
      issues: [
        'Password reset and account recovery',
        'Two-factor authentication setup',
        'User permissions and roles',
        'SSO integration issues'
      ]
    },
    {
      category: 'Technical Support',
      issues: [
        'API integration problems',
        'Performance optimization',
        'Error troubleshooting',
        'System configuration'
      ]
    },
    {
      category: 'Billing & Subscriptions',
      issues: [
        'Payment method updates',
        'Subscription changes',
        'Invoice and receipt requests',
        'Refund processing'
      ]
    },
    {
      category: 'Feature Requests',
      issues: [
        'New functionality suggestions',
        'Enhancement requests',
        'Custom development needs',
        'Integration requirements'
      ]
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Standard support for all customers',
      features: ['Email support', 'Knowledge base access', 'Community forums', 'Basic troubleshooting'],
      responseTime: '24 hours',
      icon: HelpCircle
    },
    {
      name: 'Premium Support',
      description: 'Enhanced support for business customers',
      features: ['Priority email support', 'Phone support', 'Live chat access', 'Advanced troubleshooting'],
      responseTime: '4 hours',
      icon: MessageCircle
    },
    {
      name: 'Enterprise Support',
      description: 'Dedicated support for enterprise clients',
      features: ['Dedicated support manager', '24/7 phone support', 'Custom SLAs', 'On-site assistance'],
      responseTime: '1 hour',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get the help you need with our comprehensive support services. 24/7 assistance, knowledge base, and dedicated support teams."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support services. 
              24/7 assistance, knowledge base, and dedicated support teams 
              are here to ensure your success.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Shield className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{channel.title}</h3>
                <p className="text-slate-300 mb-6 text-center">{channel.description}</p>
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center text-sm text-slate-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-cyan-400">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Issues
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quick solutions to frequently encountered problems and questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.issues.map((issue, idx) => (
                    <div key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Support Tiers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the level of support that best fits your needs and business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  tier.name === 'Premium Support' 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    tier.name === 'Premium Support' 
                      ? 'from-cyan-500 to-blue-500' 
                      : 'from-slate-600 to-slate-700'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 text-sm">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{tier.responseTime}</span>
                    <p className="text-slate-400 text-sm">Response Time</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.name === 'Basic Support' ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                }`}>
                  {tier.name === 'Basic Support' ? 'Included' : 'Contact Sales'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help 
              you get back on track quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Browse Knowledge Base
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
