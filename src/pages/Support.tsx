import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  FileText,
  Video,
  Star,
  Users,
  Globe,
  Settings,
  CreditCard,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Building,
  Smartphone,
  Database,
  Network,
  Cpu,
  Lock,
  Server,
  BarChart3,
  Code,
  Wifi,
  Atom,
  Dna,
  Handshake,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Eye,
  Ear
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const supportChannels = [
    {
      id: 'live-chat',
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      available: true,
      responseTime: '< 2 minutes',
      hours: '24/7',
      action: 'Start Chat',
      href: '/support/chat'
    },
    {
      id: 'phone',
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      available: true,
      responseTime: 'Immediate',
      hours: 'Mon-Fri 8AM-8PM EST',
      action: 'Call Now',
      href: 'tel:+1-800-ZION-TECH'
    },
    {
      id: 'email',
      name: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      available: true,
      responseTime: '< 4 hours',
      hours: '24/7',
      action: 'Send Email',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      id: 'video-call',
      name: 'Video Consultation',
      description: 'Schedule a face-to-face technical consultation',
      icon: Video,
      available: true,
      responseTime: 'Schedule within 24h',
      hours: 'Mon-Fri 9AM-6PM EST',
      action: 'Schedule Call',
      href: '/support/video-consultation'
    }
  ];

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'New to Zion Tech Group? Start here',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      articles: [
        'Welcome to Zion Tech Group',
        'Setting up your account',
        'First steps with our platform',
        'Quick start guide'
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      description: 'Manage your account settings and preferences',
      icon: Settings,
      color: 'from-green-500 to-green-600',
      articles: [
        'Updating profile information',
        'Changing password',
        'Two-factor authentication',
        'Account security settings'
      ]
    },
    {
      id: 'services-solutions',
      title: 'Services & Solutions',
      description: 'Learn how to use our products effectively',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      articles: [
        'AI Services overview',
        'Cybersecurity solutions',
        'Cloud infrastructure setup',
        'API documentation'
      ]
    },
    {
      id: 'billing-payments',
      title: 'Billing & Payments',
      description: 'Payment methods, invoices, and billing questions',
      icon: CreditCard,
      color: 'from-orange-500 to-orange-600',
      articles: [
        'Payment methods accepted',
        'Understanding your invoice',
        'Upgrading your plan',
        'Refund policy'
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      icon: Cpu,
      color: 'from-red-500 to-red-600',
      articles: [
        'Common error messages',
        'Performance optimization',
        'Integration troubleshooting',
        'API rate limits'
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Security features and compliance information',
      icon: Shield,
      color: 'from-indigo-500 to-indigo-600',
      articles: [
        'Data encryption standards',
        'GDPR compliance',
        'SOC 2 certification',
        'Security best practices'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to set up two-factor authentication',
      description: 'Secure your account with 2FA for enhanced protection',
      category: 'Account Management',
      readTime: '3 min read',
      href: '/help/2fa-setup'
    },
    {
      title: 'Understanding API rate limits',
      description: 'Learn about our API usage policies and limits',
      category: 'Technical Support',
      readTime: '5 min read',
      href: '/help/api-rate-limits'
    },
    {
      title: 'Cloud infrastructure best practices',
      description: 'Optimize your cloud deployment for performance and cost',
      category: 'Services & Solutions',
      readTime: '8 min read',
      href: '/help/cloud-best-practices'
    },
    {
      title: 'Cybersecurity incident response',
      description: 'What to do when you suspect a security breach',
      category: 'Security & Compliance',
      readTime: '6 min read',
      href: '/help/incident-response'
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support through our live chat and email channels. Phone support is available Monday through Friday, 8 AM to 8 PM EST. Video consultations can be scheduled Monday through Friday, 9 AM to 6 PM EST.',
      category: 'general'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'Live chat responses typically come within 2 minutes, phone support is immediate, email responses within 4 hours, and video consultations can be scheduled within 24 hours of your request.',
      category: 'general'
    },
    {
      question: 'Do you offer training for your services?',
      answer: 'Yes! We provide comprehensive training programs, webinars, and documentation to help you get the most out of our services. Visit our Training and Webinars sections for more information.',
      category: 'services'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. Enterprise customers can also arrange for invoicing with net 30 payment terms.',
      category: 'billing'
    },
    {
      question: 'Is my data secure with Zion Tech Group?',
      answer: 'Absolutely. We use enterprise-grade encryption, maintain SOC 2 Type II compliance, and follow industry best practices for data security. Your data is protected with multiple layers of security.',
      category: 'security'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time through your account dashboard. There are no long-term contracts or cancellation fees. You\'ll continue to have access until the end of your current billing period.',
      category: 'billing'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM EST', available: true },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Holidays', hours: 'Limited support available', available: false }
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO
        title="Support Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Live chat, phone support, email, and video consultations available 24/7."
        keywords="support, help, customer service, technical support, live chat, phone support, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How Can We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our support team is here to help you succeed with Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or support topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${channel.color} text-white rounded-2xl mb-4`}>
                    <channel.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {channel.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {channel.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Response:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{channel.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Hours:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{channel.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Status:</span>
                      <span className={`flex items-center ${channel.available ? 'text-green-600' : 'text-orange-600'}`}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {channel.available ? 'Available' : 'Limited'}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    to={channel.href}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    {channel.action}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers organized by topic and get help faster
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-xl mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center justify-between w-full text-left text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    <span>View Articles</span>
                    {openCategories.includes(category.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {openCategories.includes(category.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex}>
                            <Link
                              to={`/help/${category.id}/${article.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center"
                            >
                              <ArrowRight className="h-3 w-3 mr-2" />
                              {article}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Most frequently accessed help content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={article.href}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200 mt-4">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {filteredFAQs.length === 0 && searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No FAQs found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or contact our support team
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Support Hours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're here to help when you need us
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {supportHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 ${
                    index !== supportHours.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className={`h-5 w-5 ${schedule.available ? 'text-green-500' : 'text-orange-500'}`} />
                    <span className="text-gray-900 dark:text-white font-medium">{schedule.day}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm ${schedule.available ? 'text-gray-600 dark:text-gray-300' : 'text-orange-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is ready to assist you with any questions or issues
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Support
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="/support/chat"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Start Live Chat
                <MessageCircle className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
