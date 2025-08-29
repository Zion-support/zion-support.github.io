import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
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
}

interface FAQCategory {
  title: string;
  icon: React.ComponentType<any>;
  questions: {
    question: string;
    answer: string;
  }[];
}

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
  }
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
      }
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
      }
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
      }
    ]
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = faqCategories.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Multiple support channels including live chat, phone, email, and comprehensive knowledge base."
      />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium mb-6 border border-slate-700/50"
          >
            <Headphones className="w-4 h-4 mr-2 text-cyan-400" />
            Support Center
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How Can We Help?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Our support team is here to help you succeed with Zion Tech Group services. 
            Choose the support channel that works best for you.
          </motion.p>

          {/* Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
          <p className="text-gray-400">Choose the best way to get help</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200"
            >
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
              >
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
        >
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
          >
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
            >
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
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && searchQuery && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-gray-400 mb-6">
              Try different keywords or contact our support team for help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
            >
              Contact Support
            </Link>
          </motion.div>
        )}
      </div>

      {/* Additional Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
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
            >
              Browse Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* System Status */}
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">System Status</h3>
                <p className="text-gray-400">Real-time service status</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Check the current status of our services and get notified about any ongoing issues or maintenance.
            </p>
            <Link
              to="/status"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200"
            >
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
        >
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
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+1-800-ZION-TECH"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
