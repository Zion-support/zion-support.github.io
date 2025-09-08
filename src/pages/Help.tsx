import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  FileText, 
  Video,
  Download,
  Star,
  Zap,
  Shield,
  Brain,
  Cloud,
  Rocket
} from 'lucide-react';

const Help: React.FC = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Quick Start Guide', href: '/help/quick-start', description: 'Get up and running in minutes' },
        { name: 'Account Setup', href: '/help/account-setup', description: 'Configure your account and preferences' },
        { name: 'First Project', href: '/help/first-project', description: 'Create your first project with Zion Tech' },
        { name: 'API Documentation', href: '/docs', description: 'Technical API reference and examples' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      items: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Intelligent Process Automation' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'AI-Powered Data Protection' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', description: 'Proactive Customer Engagement' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Cloud Migration', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'FinOps Optimization', href: '/services/cloud-finops-optimizer', description: 'Cost optimization strategies' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', description: 'Scalable software solutions' },
        { name: 'DevOps Best Practices', href: '/help/devops-best-practices', description: 'Industry best practices' }
      ]
    },
    {
      title: 'Support & Contact',
      icon: MessageCircle,
      color: 'from-orange-600 to-red-600',
      items: [
        { name: 'Contact Support', href: '/contact', description: 'Get in touch with our team' },
        { name: 'Live Chat', href: '/chat', description: 'Real-time assistance' },
        { name: 'Phone Support', href: 'tel:+1-800-ZION-TECH', description: 'Call us directly' },
        { name: 'Emergency Support', href: '/support/emergency', description: '24/7 critical issue support' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Search Knowledge Base', icon: Search, href: '/help/search', color: 'bg-blue-500' },
    { name: 'Download Resources', icon: Download, href: '/help/resources', color: 'bg-green-500' },
    { name: 'Watch Tutorials', icon: Video, href: '/help/tutorials', color: 'bg-purple-500' },
    { name: 'Request Feature', icon: Star, href: '/help/feature-request', color: 'bg-orange-500' }
  ];

  const popularTopics = [
    { name: 'How to integrate AI services?', href: '/help/ai-integration', views: '2.3k' },
    { name: 'Setting up cloud infrastructure', href: '/help/cloud-setup', views: '1.8k' },
    { name: 'Troubleshooting common issues', href: '/help/troubleshooting', views: '1.5k' },
    { name: 'Best practices for data security', href: '/help/security-best-practices', views: '1.2k' },
    { name: 'Scaling your micro SaaS', href: '/help/scaling-micro-saas', views: '980' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Help Center</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, tutorials, and support for all Zion Tech Group services. 
              We're here to help you succeed with AI, cloud, and digital transformation.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or contact support..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {quickActions.map((action, index) => (
            <Link
              key={action.name}
              to={action.href}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${action.color} text-white mb-4`}>
                <action.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {action.name}
              </h3>
            </Link>
          ))}
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {helpCategories.map((category, index) => (
            <div key={category.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-6 w-6 text-yellow-500 mr-3" />
            Popular Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic) => (
              <Link
                key={topic.name}
                to={topic.href}
                className="p-4 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {topic.views} views
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert team is ready to assist you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="tel:+1-800-ZION-TECH"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <p>Available Monday - Friday, 9 AM - 6 PM EST</p>
              <p>Emergency support available 24/7 for critical issues</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
