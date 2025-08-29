import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  Video, 
  FileText, 
  Users, 
  Settings,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Help() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { title: 'Welcome Guide', description: 'New to Zion Tech Group? Start here', href: '/help/getting-started' },
        { title: 'Account Setup', description: 'Set up your account and preferences', href: '/help/account-setup' },
        { title: 'First Steps', description: 'Quick start guide for new users', href: '/help/first-steps' }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      items: [
        { title: 'AI Services Guide', description: 'Learn about our AI solutions', href: '/help/ai-services' },
        { title: 'Cloud & DevOps', description: 'Cloud infrastructure and deployment', href: '/help/cloud-devops' },
        { title: 'Cybersecurity', description: 'Security and compliance solutions', href: '/help/cybersecurity' }
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      items: [
        { title: 'Troubleshooting', description: 'Common issues and solutions', href: '/help/troubleshooting' },
        { title: 'API Documentation', description: 'Developer resources and APIs', href: '/help/api-docs' },
        { title: 'System Requirements', description: 'Hardware and software requirements', href: '/help/system-requirements' }
      ]
    },
    {
      title: 'Account & Billing',
      icon: Users,
      color: 'from-orange-600 to-red-600',
      items: [
        { title: 'Account Management', description: 'Manage your account settings', href: '/help/account-management' },
        { title: 'Billing & Payments', description: 'Payment methods and billing info', href: '/help/billing' },
        { title: 'Subscription Plans', description: 'Choose the right plan for you', href: '/help/subscriptions' }
      ]
    }
  ];

  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, href: '/contact', color: 'from-blue-500 to-cyan-500' },
    { title: 'Live Chat', icon: MessageCircle, href: '/chat', color: 'from-green-500 to-emerald-500' },
    { title: 'Phone Support', icon: Phone, href: 'tel:+13024640950', color: 'from-purple-500 to-pink-500' },
    { title: 'Email Support', icon: Mail, href: 'mailto:kleber@ziontechgroup.com', color: 'from-orange-500 to-red-500' }
  ];

  const popularTopics = [
    { title: 'How to get started with AI services?', href: '/help/ai-getting-started' },
    { title: 'Setting up cloud infrastructure', href: '/help/cloud-setup' },
    { title: 'Cybersecurity best practices', href: '/help/cybersecurity-best-practices' },
    { title: 'Understanding pricing plans', href: '/help/pricing-explained' },
    { title: 'API integration guide', href: '/help/api-integration' },
    { title: 'Troubleshooting common issues', href: '/help/common-issues' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, guides, and contact information."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find answers to your questions, learn about our services, and get the support you need.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              to={action.href}
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {action.title}
              </h3>
            </Link>
          ))}
        </motion.div>

        {/* Help Categories */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Browse Help Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Popular Topics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Link
                  to={topic.href}
                  className="block p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-400/50 hover:bg-slate-700/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white hover:text-cyan-400 transition-colors">
                      {topic.title}
                    </span>
                    <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Still need help?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or issues. 
            We're available 24/7 to ensure you get the assistance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}