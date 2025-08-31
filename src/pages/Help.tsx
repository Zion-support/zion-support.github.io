import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Users, 
  Globe, 
  Settings, 
  CreditCard, 
  Shield, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  FileText,
  Video,
  Star,
  Brain,
  Cloud,
  Zap,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create your first account',
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/account-creation'
        },
        {
          title: 'Understanding the marketplace',
          description: 'Learn how our AI and tech marketplace works',
          url: '/help/marketplace-guide'
        },
        {
          title: 'First steps for new users',
          description: 'Essential information to get you started quickly',
          url: '/help/first-steps'
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: Users,
      articles: [
        {
          title: 'Updating your profile information',
          description: 'Learn how to keep your account information current',
          url: '/help/profile-update'
        },
        {
          title: 'Managing team members',
          description: 'Add, remove, and manage team member access',
          url: '/help/team-management'
        },
        {
          title: 'Account security settings',
          description: 'Configure two-factor authentication and security preferences',
          url: '/help/security-settings'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: Brain,
      articles: [
        {
          title: 'How to browse and select services',
          description: 'Navigate our service catalog and choose the right solutions',
          url: '/help/service-selection'
        },
        {
          title: 'Understanding service pricing',
          description: 'Learn about our pricing models and payment options',
          url: '/help/pricing-guide'
        },
        {
          title: 'Service implementation process',
          description: 'What to expect during service deployment',
          url: '/help/implementation'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        {
          title: 'Understanding your invoice',
          description: 'Break down of charges and billing details',
          url: '/help/invoice-guide'
        },
        {
          title: 'Payment methods and options',
          description: 'Available payment methods and how to update them',
          url: '/help/payment-methods'
        },
        {
          title: 'Billing disputes and refunds',
          description: 'How to handle billing issues and request refunds',
          url: '/help/billing-disputes'
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      articles: [
        {
          title: 'Common troubleshooting steps',
          description: 'Basic troubleshooting for common issues',
          url: '/help/troubleshooting'
        },
        {
          title: 'API documentation and integration',
          description: 'Technical guides for developers and integrators',
          url: '/help/api-docs'
        },
        {
          title: 'Performance optimization',
          description: 'Tips for optimizing service performance',
          url: '/help/performance'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      articles: [
        {
          title: 'Data protection and privacy',
          description: 'How we protect your data and ensure privacy',
          url: '/help/data-protection'
        },
        {
          title: 'Security best practices',
          description: 'Recommended security practices for your organization',
          url: '/help/security-best-practices'
        },
        {
          title: 'Compliance and certifications',
          description: 'Our security certifications and compliance standards',
          url: '/help/compliance'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick start guide for implementing AI solutions',
      url: '/help/ai-quickstart',
      views: 15420
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Essential tips for successful cloud migration',
      url: '/help/cloud-migration',
      views: 12850
    },
    {
      title: 'Cybersecurity Implementation Guide',
      description: 'Step-by-step security implementation',
      url: '/help/cybersecurity-guide',
      views: 11230
    },
    {
      title: 'Data Analytics Setup',
      description: 'Configure your data analytics platform',
      url: '/help/data-analytics-setup',
      views: 9870
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Consultation',
      description: 'Schedule a video call with our team',
      icon: Video,
      action: 'Book Session',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, guides, and contact our support team."
        keywords="help, support, documentation, FAQ, customer service, Zion Tech Group"
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
              Find answers to your questions, learn how to use our services, 
              and get the support you need to succeed.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse our organized help categories to find the information you need quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                      <Link
                        to={article.url}
                        className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {article.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => toggleCategory(category.id)}
                  className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  {openCategories.includes(category.id) ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Most viewed help articles and guides from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Link
                      to={article.url}
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {article.title}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.views.toLocaleString()} views
                  </div>
                </div>
                <Link
                  to={article.url}
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

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our support team is here to help. Choose the best way to get in touch with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {option.description}
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How do I get started with Zion Tech Group services?',
                answer: 'Getting started is easy! Simply create an account, browse our service catalog, and schedule a consultation with our team. We\'ll help you choose the right solutions and guide you through the implementation process.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our encrypted payment system.'
              },
              {
                question: 'Do you provide 24/7 support?',
                answer: 'Yes! Our technical support team is available 24/7 to help you with any issues or questions. You can reach us through live chat, phone, email, or our support portal.'
              },
              {
                question: 'Can I customize the services to fit my specific needs?',
                answer: 'Absolutely! All our services are designed to be customizable. Our team works closely with you to understand your requirements and tailor solutions that perfectly fit your business needs.'
              },
              {
                question: 'What security measures do you have in place?',
                answer: 'We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            If you can't find what you're looking for, our support team is here to help. 
            Get in touch and we'll get back to you within 24 hours.
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
              to="/documentation"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Documentation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}