import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  Clock,
  CheckCircle,
  Search,
  BookOpen,
  Headphones,
  Zap,
  Shield,
  Globe,
  ArrowRight
import { SEO } from '../components/SEO';

interface SupportChannel {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  responseTime: string;
  availability: string;
  priority: 'high' | 'medium' | 'low';
  action: string;
  actionLink: string;

interface FAQCategory {
  title: string;
  icon: React.ComponentType<any>;
  questions: {
    question: string;
    answer: string;
  }[];

const supportChannels: SupportChannel[] = [
  {
    id: 'live-chat',
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    responseTime: '< 2 minutes',
    availability: '24/7',
    priority: 'high',
    action: 'Start Chat',
    actionLink: '#chat'
  },
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    responseTime: '< 5 minutes',
    availability: 'Mon-Fri 9AM-6PM EST',
    priority: 'high',
    action: 'Call Now',
    actionLink: 'tel:+1-800-ZION-TECH'
  },
  {
    id: 'email',
    title: 'Email Support',
    description: 'Send detailed inquiries and get comprehensive responses',
    icon: Mail,
    responseTime: '< 4 hours',
    availability: '24/7',
    priority: 'medium',
    action: 'Send Email',
    actionLink: 'mailto:support@ziontechgroup.com'
  },
  {
    id: 'ticket',
    title: 'Support Ticket',
    description: 'Create and track support requests',
    icon: FileText,
    responseTime: '< 8 hours',
    availability: '24/7',
    priority: 'medium',
    action: 'Create Ticket',
    actionLink: '/support/ticket'
  },
  {
    id: 'video-call',
    title: 'Video Call',
    description: 'Screen sharing and visual troubleshooting',
    icon: Video,
    responseTime: '< 30 minutes',
    availability: 'Mon-Fri 9AM-6PM EST',
    priority: 'high',
    action: 'Schedule Call',
    actionLink: '/support/schedule'
  },
  {
    id: 'community',
    title: 'Community Forum',
    description: 'Connect with other users and share solutions',
    icon: Users,
    responseTime: 'Varies',
    availability: '24/7',
    priority: 'low',
    action: 'Join Forum',
    actionLink: '/community'

];

const faqCategories: FAQCategory[] = [
  {
    title: 'Getting Started',
    icon: Zap,
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Visit our signup page and provide your basic information. You\'ll receive a verification email to activate your account.'
      },
      {
        question: 'What services are included in my plan?',
        answer: 'Your plan details are available in your dashboard under "Subscription". You can also contact our sales team for a detailed breakdown.'
      },
      {
        question: 'How do I access my dashboard?',
        answer: 'Log in to your account and click on "Dashboard" in the top navigation. All your tools and services will be available there.'

    ]
  },
  {
    title: 'Technical Issues',
    icon: Shield,
    questions: [
      {
        question: 'My service is not working properly',
        answer: 'First, check our system status page. If the issue persists, try clearing your browser cache or contact our technical support team.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page. You\'ll receive an email with a secure link to reset your password.'
      },
      {
        question: 'I\'m experiencing slow performance',
        answer: 'Check your internet connection and try refreshing the page. If the issue continues, our support team can help diagnose the problem.'

    ]
  },
  {
    title: 'Billing & Account',
    icon: BookOpen,
    questions: [
      {
        question: 'How do I update my billing information?',
        answer: 'Go to your account settings and select "Billing". You can update payment methods and billing addresses there.'
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel anytime from your account settings. Your service will remain active until the end of your current billing period.'
      },
      {
        question: 'How do I get an invoice?',
        answer: 'All invoices are available in your billing section. You can download them as PDF or have them emailed to you automatically.'

    ]

];
=======
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Search, 
  BookOpen, 
  Video, 
  Users, 
  Zap, 
  Shield, 
  Settings, 
  FileText, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Globe,
  Target,
  TrendingUp
} from 'lucide-react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function Support() {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      id: 'help',
      name: 'Help Center',
      icon: HelpCircle,
      description: 'Find answers to common questions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'contact',
      name: 'Contact Support',
      icon: MessageCircle,
      description: 'Get in touch with our team',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: BookOpen,
      description: 'Documentation and guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'status',
      name: 'System Status',
      icon: Zap,
      description: 'Check service status',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const helpTopics = [
    {
      category: 'Getting Started',
      icon: Rocket,
      topics: [
        { title: 'How to get started with our services', href: '/docs/getting-started' },
        { title: 'Setting up your account', href: '/docs/account-setup' },
        { title: 'First project configuration', href: '/docs/first-project' },
        { title: 'Integration guide', href: '/docs/integration' }
      ]
    },
    {
      category: 'AI Services',
      icon: Brain,
      topics: [
        { title: 'AI Business Intelligence setup', href: '/docs/ai-business-intelligence' },
        { title: 'AI Healthcare Analytics configuration', href: '/docs/ai-healthcare' },
        { title: 'AI Legal Document Analysis', href: '/docs/ai-legal' },
        { title: 'AI Supply Chain Optimization', href: '/docs/ai-supply-chain' }
      ]
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      topics: [
        { title: 'Cloud DevOps setup', href: '/docs/cloud-devops' },
        { title: 'IT Infrastructure configuration', href: '/docs/it-infrastructure' },
        { title: 'Digital Twin implementation', href: '/docs/digital-twin' },
        { title: 'IoT Edge Computing setup', href: '/docs/iot-edge' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      topics: [
        { title: 'Security best practices', href: '/docs/security' },
        { title: 'Compliance requirements', href: '/docs/compliance' },
        { title: 'Data protection guidelines', href: '/docs/data-protection' },
        { title: 'Access control setup', href: '/docs/access-control' }
      ]
    }
  ];

  const contactMethods = [
    {
      type: 'Phone Support',
      icon: Phone,
      details: '+1 302 464 0950',
      description: 'Available 24/7 for urgent issues',
      response: 'Immediate response',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Email Support',
      icon: Mail,
      details: 'kleber@ziontechgroup.com',
      description: 'General inquiries and non-urgent issues',
      response: 'Response within 2 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Emergency Support',
      icon: AlertCircle,
      details: '+1 302 464 0950',
      description: 'Critical system issues and outages',
      response: 'Immediate response',
      color: 'from-red-500 to-orange-500'
    },
    {
      type: 'Business Hours',
      icon: Clock,
      details: 'Monday - Friday, 9AM - 6PM EST',
      description: 'Standard business hours support',
      response: 'Response within 4 hours',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const supportResources = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      href: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all services',
      icon: Video,
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
      href: '/community',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Training Programs',
      description: 'Professional training and certification courses',
      icon: Star,
      href: '/training',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We prioritize support based on urgency. Emergency issues get immediate attention, while general inquiries are typically resolved within 2-4 hours during business hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 emergency support for critical issues. Our team is always available to handle urgent system problems and outages.'
    },
    {
      question: 'What types of training do you offer?',
      answer: 'We offer comprehensive training programs including technical training, user adoption programs, and ongoing support to ensure your team gets the most out of our solutions.'
    },
    {
      question: 'How do you handle data security and compliance?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures and maintain compliance with industry standards including SOC 2, GDPR, and HIPAA where applicable.'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
      <SEO
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Multiple support channels including live chat, phone, email, and comprehensive knowledge base."
      />

      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
=======
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
            className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium mb-6 border border-slate-700/50"

            <Headphones className="w-4 h-4 mr-2 text-cyan-400" />
            Support Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"

            How Can We Help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"

            Our support team is here to help you succeed with Zion Tech Group services.
            Choose the support channel that works best for you.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
=======
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources, documentation, and expert assistance
            </p>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"

          <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
          <p className="text-gray-400">Choose the best way to get help</p>
=======
      {/* Search Bar */}
      <div className="container-responsive py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, documentation, or support topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Search
            </button>
          </form>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </motion.div>
      </div>

      {/* Support Categories */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200"

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <channel.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
                  <p className="text-sm text-gray-400">{channel.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-white font-medium">{channel.responseTime}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-white font-medium">{channel.availability}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Priority:</span>
                  <span className={`font-medium ${
                    channel.priority === 'high' ? 'text-red-400' :
                    channel.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {channel.priority.charAt(0).toUpperCase() + channel.priority.slice(1)}
                  </span>
                </div>
              </div>

              <a
                href={channel.actionLink}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"

                {channel.action}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mb-12"

          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Quick answers to common questions</p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === null
                ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/25'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
            }`}

            All Categories
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.title
                  ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/25'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}

              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Results */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50"

              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(category.id)}
              className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                activeTab === category.id
                  ? 'bg-slate-700/50 border-cyan-400/50'
                  : 'bg-slate-800/30 border-slate-700/30 hover:border-cyan-400/30'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </motion.div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
        {filteredFAQs.length === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center py-12"

            <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-gray-400 mb-6">
              Try different keywords or contact our support team for help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"

              Contact Support
            </Link>
=======
      {/* Tab Content */}
      <div className="container-responsive pb-16">
        {/* Help Center Tab */}
        {activeTab === 'help' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Help Center</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions and learn how to use our services effectively
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {helpTopics.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        to={topic.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {topic.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{item.question}</h4>
                    <p className="text-gray-300">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </motion.div>
        )}

<<<<<<< HEAD
      {/* Additional Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"

          {/* Knowledge Base */}
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Knowledge Base</h3>
                <p className="text-gray-400">Self-service help articles</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Browse our comprehensive knowledge base with step-by-step guides, tutorials, and troubleshooting articles.
            </p>
            <Link
              to="/help"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200"

              Browse Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
=======
        {/* Contact Support Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Multiple ways to get in touch with our support team for personalized assistance
              </p>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.type}</h3>
                  <p className="text-lg text-cyan-400 mb-2">{method.details}</p>
                  <p className="text-gray-300 mb-3">{method.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{method.response}</span>
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
            <p className="text-gray-300 mb-6">
              Check the current status of our services and get notified about any ongoing issues or maintenance.
            </p>
            <Link
              to="/status"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200"

              Check Status
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-center"

          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"

                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+1-800-ZION-TECH"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"

                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </a>
=======

            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Support Resources</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access comprehensive documentation, tutorials, and learning resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Link to={resource.href} className="block">
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex items-center text-cyan-400 font-medium group">
                      <span>Access Resource</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* System Status Tab */}
        {activeTab === 'status' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">System Status</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Check the current status of all our services and systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AI Services', status: 'operational', icon: Brain },
                { name: 'Cloud Infrastructure', status: 'operational', icon: Cloud },
                { name: 'Security Systems', status: 'operational', icon: Shield },
                { name: 'Data Analytics', status: 'operational', icon: TrendingUp },
                { name: 'API Services', status: 'operational', icon: Globe },
                { name: 'Support Portal', status: 'operational', icon: HelpCircle }
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400 font-medium">Operational</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  <p className="text-sm text-gray-400 mt-2">All systems operational</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/status"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Detailed Status
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}}}}}}}}}