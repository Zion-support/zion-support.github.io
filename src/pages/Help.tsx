import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Users, 
  Globe, 
  Settings, 
  CreditCard, 
  Shield, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Introduction to our platform and services',
          url: '/help/welcome'
        },
        {
          title: 'Creating your first project',
          description: 'Step-by-step guide to start your journey',
          url: '/help/first-project'
        },
        {
          title: 'Platform overview',
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
          description: 'How to keep your profile current and accurate',
          url: '/help/profile-updates'
        },
        {
          title: 'Security settings and two-factor authentication',
          description: 'Protect your account with enhanced security features',
          url: '/help/security-settings'
        },
        {
          title: 'Managing notifications and preferences',
          description: 'Customize how and when you receive updates',
          url: '/help/notifications'
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Features',
      icon: Globe,
      articles: [
        {
          title: 'How to list your services',
          description: 'Create compelling service listings that attract clients',
          url: '/help/service-listings'
        },
        {
          title: 'Finding and hiring talent',
          description: 'Discover and connect with skilled professionals',
          url: '/help/hiring-talent'
        },
        {
          title: 'Payment and billing explained',
          description: 'Understanding our payment system and fees',
          url: '/help/payments'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Technology Services',
      icon: Settings,
      articles: [
        {
          title: 'Available AI solutions',
          description: 'Overview of our artificial intelligence services',
          url: '/help/ai-solutions'
        },
        {
          title: 'Cybersecurity services guide',
          description: 'Protect your business with our security solutions',
          url: '/help/cybersecurity'
        },
        {
          title: 'Cloud and infrastructure services',
          description: 'Understanding our cloud computing offerings',
          url: '/help/cloud-services'
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
          description: 'Breakdown of charges and payment terms',
          url: '/help/invoice-guide'
        },
        {
          title: 'Payment methods accepted',
          description: 'All the ways you can pay for our services',
          url: '/help/payment-methods'
        },
        {
          title: 'Billing disputes and refunds',
          description: 'How to resolve billing issues',
          url: '/help/billing-disputes'
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
          description: 'How we protect your information',
          url: '/help/data-protection'
        },
        {
          title: 'Security best practices',
          description: 'Tips to keep your account secure',
          url: '/help/security-best-practices'
        },
        {
          title: 'Reporting security issues',
          description: 'What to do if you find a security problem',
          url: '/help/report-security'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Getting started is easy! Simply create an account, browse our services, and contact us for a consultation. Our team will guide you through the process and help you choose the right solutions for your needs.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI development. Our solutions are tailored to your specific business requirements.'
    },
    {
      question: 'How quickly can you deliver a project?',
      answer: 'Project timelines vary depending on complexity and scope. Simple implementations can be completed in weeks, while complex enterprise solutions may take several months. We always provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including 24/7 monitoring, regular updates, maintenance, and technical support. Our support packages are designed to ensure your solutions continue performing optimally.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across all industries including healthcare, finance, manufacturing, retail, education, and government. Our AI solutions are adaptable to any sector and can be customized for specific industry requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      available: true,
      responseTime: 'Immediate'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      available: true,
      responseTime: 'Within 2 hours'
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: 'Help Center',
      description: 'Browse our comprehensive knowledge base',
      available: true,
      responseTime: '24/7'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = filteredCategories.flatMap(cat => cat.articles);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}help you?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get 
              the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${channel.available ? 'bg-green-400' : 'bg-red-400'}`}></span>
                  <span className="text-sm text-gray-400">
                    {channel.available ? 'Available' : 'Unavailable'} • {channel.responseTime}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find organized help content by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <a
                      key={articleIndex}
                      href={article.url}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <h4 className="text-white font-medium mb-1">{article.title}</h4>
                      <p className="text-gray-400 text-sm">{article.description}</p>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}