import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  FileText, 
  Video, 
  BookOpen, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  Server, 
  Smartphone, 
  Database, 
  BarChart3, 
  Code, 
  Network, 
  Cpu, 
  Smartphone as Mobile,
  Monitor,
  Printer,
  Router,
  HardDrive,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Power,
  Settings,
  Tool,
  Wrench,
  AlertTriangle,
  Info,
  QuestionMark,
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Clock3
} from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle },
    { id: 'technical', name: 'Technical Issues', icon: Tool },
    { id: 'account', name: 'Account & Billing', icon: Users },
    { id: 'services', name: 'Services & Solutions', icon: Zap },
    { id: 'security', name: 'Security & Privacy', icon: Shield },
    { id: 'training', name: 'Training & Support', icon: BookOpen }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. You\'ll receive an email with a secure link to create a new password.',
      category: 'account',
      tags: ['password', 'login', 'account'],
      helpful: 45,
      notHelpful: 2
    },
    {
      id: 2,
      question: 'What are the system requirements for your software?',
      answer: 'Our software requires Windows 10/11, macOS 10.15+, or Linux Ubuntu 18.04+. Minimum 8GB RAM, 2GB free disk space, and a modern web browser for web-based features.',
      category: 'technical',
      tags: ['system requirements', 'software', 'installation'],
      helpful: 38,
      notHelpful: 1
    },
    {
      id: 3,
      question: 'How do I contact customer support?',
      answer: 'You can reach our support team through live chat, phone at 1-800-ZION-TECH, email at support@ziontechgroup.com, or by submitting a ticket through our support portal.',
      category: 'services',
      tags: ['contact', 'support', 'help'],
      helpful: 52,
      notHelpful: 0
    },
    {
      id: 4,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, SOC 2 compliance, and 24/7 threat monitoring.',
      category: 'security',
      tags: ['security', 'encryption', 'compliance'],
      helpful: 41,
      notHelpful: 1
    },
    {
      id: 5,
      question: 'How do I schedule a training session?',
      answer: 'Training sessions can be scheduled through our training portal, by contacting our training coordinator at training@ziontechgroup.com, or by calling our main office.',
      category: 'training',
      tags: ['training', 'scheduling', 'education'],
      helpful: 29,
      notHelpful: 2
    },
    {
      id: 6,
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied within the first 30 days, we\'ll provide a full refund. Contact our billing team to process your request.',
      category: 'account',
      tags: ['refund', 'billing', 'money-back'],
      helpful: 33,
      notHelpful: 3
    }
  ];

  const supportChannels = [
    {
      id: 1,
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 minutes',
      priority: 'high',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 8AM-8PM EST',
      responseTime: 'Immediate',
      priority: 'high',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      name: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'medium',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      name: 'Video Consultation',
      description: 'Schedule a screen-sharing session with our experts',
      icon: Video,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      priority: 'medium',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'New user guides and setup instructions',
      icon: BookOpen,
      articles: 12,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'account-management',
      name: 'Account Management',
      description: 'Manage your profile, settings, and preferences',
      icon: Users,
      articles: 8,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'services-solutions',
      name: 'Services & Solutions',
      description: 'Learn about our products and how to use them',
      icon: Zap,
      articles: 15,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'billing-payments',
      name: 'Billing & Payments',
      description: 'Payment methods, invoices, and subscription management',
      icon: FileText,
      articles: 6,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      description: 'Troubleshooting guides and technical documentation',
      icon: Tool,
      articles: 20,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'security-compliance',
      name: 'Security & Compliance',
      description: 'Security best practices and compliance information',
      icon: Shield,
      articles: 10,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'Complete Setup Guide for New Users',
      description: 'Step-by-step instructions to get started with our platform',
      category: 'getting-started',
      views: 15420,
      lastUpdated: '2024-08-15',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Troubleshooting Common Login Issues',
      description: 'Solutions for the most frequent authentication problems',
      category: 'technical-support',
      views: 12850,
      lastUpdated: '2024-08-10',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Understanding Your Monthly Bill',
      description: 'Breakdown of charges and how to manage your subscription',
      category: 'billing-payments',
      views: 9870,
      lastUpdated: '2024-08-05',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Security Best Practices Guide',
      description: 'Essential security measures to protect your account',
      category: 'security-compliance',
      views: 8760,
      lastUpdated: '2024-07-28',
      readTime: '10 min read'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Support & Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, contact support, and access comprehensive documentation."
        keywords="support, help, customer service, technical support, documentation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              How Can We
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Help?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Find answers to your questions, get technical support, and access comprehensive documentation. 
              Our support team is here to help you succeed.
            </motion.p>
            
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or support topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {channel.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-sm">
                  {channel.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Availability:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Response:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{channel.responseTime}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${channel.color} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300`}
                  >
                    Get Help
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse organized help articles and guides by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-sm">
                  {category.description}
                </p>
                
                <div className="text-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.articles} articles available
                  </span>
                </div>
                
                <div className="mt-4">
                  <Link
                    to={`/help/${category.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    Browse Articles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Most viewed and helpful articles from our knowledge base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {helpCategories.find(c => c.id === article.category)?.name}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Updated: {new Date(article.lastUpdated).toLocaleDateString()}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <Link
                  to={`/help/article/${article.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for?
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {faq.answer}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{faq.helpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{faq.notHelpful}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Still Need Help?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Our support team is ready to help you with any questions or technical issues. 
            Don't hesitate to reach out!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Help Center
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
