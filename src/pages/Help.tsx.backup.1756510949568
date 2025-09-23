import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Users,
  Globe,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Essential information to begin your journey with Zion Tech Group',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how we can help your business',
          url: '/help/getting-started/welcome',
          type: 'guide'
        },
        {
          title: 'Account Setup Guide',
          description: 'Step-by-step instructions to set up your account',
          url: '/help/getting-started/account-setup',
          type: 'guide'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          url: '/help/getting-started/first-project',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Zap,
      description: 'Comprehensive guides for all our technology services',
      articles: [
        {
          title: 'AI Services Overview',
          description: 'Understanding our AI-powered solutions and capabilities',
          url: '/help/services/ai-overview',
          type: 'guide'
        },
        {
          title: 'Cloud & DevOps Setup',
          description: 'Setting up cloud infrastructure and DevOps pipelines',
          url: '/help/services/cloud-devops-setup',
          type: 'tutorial'
        },
        {
          title: 'Cybersecurity Best Practices',
          description: 'Security guidelines and best practices for your business',
          url: '/help/services/cybersecurity-guide',
          type: 'guide'
        },
        {
          title: 'Micro SaaS Solutions',
          description: 'How to implement and use our Micro SaaS products',
          url: '/help/services/micro-saas-guide',
          type: 'guide'
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical documentation and troubleshooting guides',
      articles: [
        {
          title: 'API Documentation',
          description: 'Complete API reference and integration guides',
          url: '/help/technical/api-docs',
          type: 'documentation'
        },
        {
          title: 'Troubleshooting Common Issues',
          description: 'Solutions for frequently encountered problems',
          url: '/help/technical/troubleshooting',
          type: 'guide'
        },
        {
          title: 'Performance Optimization',
          description: 'Tips and tricks to optimize your system performance',
          url: '/help/technical/performance',
          type: 'guide'
        },
        {
          title: 'Security Configuration',
          description: 'Security settings and configuration options',
          url: '/help/technical/security-config',
          type: 'guide'
        }
      ]
    },
    {
      id: 'billing-account',
      title: 'Billing & Account',
      icon: Users,
      description: 'Account management and billing information',
      articles: [
        {
          title: 'Billing Overview',
          description: 'Understanding your billing structure and charges',
          url: '/help/billing/overview',
          type: 'guide'
        },
        {
          title: 'Payment Methods',
          description: 'Adding and managing payment methods',
          url: '/help/billing/payment-methods',
          type: 'guide'
        },
        {
          title: 'Invoice Management',
          description: 'Accessing and managing your invoices',
          url: '/help/billing/invoices',
          type: 'guide'
        },
        {
          title: 'Account Settings',
          description: 'Managing your account preferences and settings',
          url: '/help/billing/account-settings',
          type: 'guide'
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'Contact Support',
      description: 'Get in touch with our support team',
      icon: MessageCircle,
      url: '/contact',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support agents in real-time',
      icon: MessageCircle,
      url: '/help/live-chat',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      icon: Phone,
      url: 'tel:+13024640950',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries',
      icon: Mail,
      url: 'mailto:support@ziontechgroup.com',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency Support Only', available: false }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help & Support - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find documentation, tutorials, and contact our support team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Help You?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn about our services, and get the support you need 
              to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Support Links */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Support</h2>
            <p className="text-gray-300">Get immediate assistance through our support channels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
            <p className="text-gray-300">We're here to help when you need us</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
              {supportHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    index !== supportHours.length - 1 ? 'border-b border-slate-700/50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className={`w-5 h-5 ${schedule.available ? 'text-green-400' : 'text-orange-400'}`} />
                    <span className="text-white font-medium">{schedule.day}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm ${schedule.available ? 'text-gray-300' : 'text-orange-400'}`}>
                      {schedule.hours}
                    </span>
                    {!schedule.available && (
                      <span className="block text-xs text-orange-400">24/7 Emergency Support Available</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Help Categories</h2>
            <p className="text-gray-300">Browse our organized help content by category</p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-6 text-left hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.articles.map((article, articleIndex) => (
                          <a
                            key={articleIndex}
                            href={article.url}
                            className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 border border-slate-600/30 hover:border-cyan-400/50"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium">{article.title}</h4>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                article.type === 'guide' ? 'bg-blue-500/20 text-blue-400' :
                                article.type === 'tutorial' ? 'bg-green-500/20 text-green-400' :
                                'bg-purple-500/20 text-purple-400'
                              }`}>
                                {article.type}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{article.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-gray-300">Explore more helpful resources and materials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Comprehensive technical documentation and API references',
                url: '/help/documentation',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Video,
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for common tasks',
                url: '/help/videos',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Download,
                title: 'Downloads',
                description: 'Software, tools, and resources for your projects',
                url: '/help/downloads',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}