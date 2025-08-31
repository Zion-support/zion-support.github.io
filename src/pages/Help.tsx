import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  BarChart3,
  Shield,
  Lock,
  Eye,
  Key,
  Server,
  Network,
  Brain,
  Cloud,
  Database,
  Code,
  Target,
  Rocket,
  Lightbulb,
  Car,
  GraduationCap,
  Factory,
  ShoppingCart,
  Camera,
  Gamepad2,
  Microscope
} from 'lucide-react';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and basic setup',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'account-management',
      name: 'Account Management',
      icon: Users,
      description: 'User accounts, profiles, and settings',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'billing-support',
      name: 'Billing & Payments',
      icon: CreditCard,
      description: 'Billing, invoices, and payment methods',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      icon: Code,
      description: 'Technical issues and troubleshooting',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const helpResources = [
    {
      title: 'User Guide',
      description: 'Comprehensive user manual with step-by-step instructions',
      type: 'Documentation',
      icon: BookOpen,
      lastUpdated: '2024-01-15',
      url: '/help/user-guide'
    },
    {
      title: 'Video Tutorials',
      description: 'Video guides for common tasks and features',
      type: 'Video',
      icon: Video,
      lastUpdated: '2024-01-20',
      url: '/help/tutorials'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      type: 'Technical',
      icon: Code,
      lastUpdated: '2024-01-10',
      url: '/help/api'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      type: 'Articles',
      icon: FileText,
      lastUpdated: '2024-01-25',
      url: '/help/knowledge-base'
    }
  ];

  const faqs = [
    {
      id: 'account-setup',
      question: 'How do I set up my account?',
      answer: 'Setting up your account is simple. After signing up, you\'ll receive a welcome email with setup instructions. You can also follow our Getting Started Guide for step-by-step instructions.',
      category: 'getting-started',
      tags: ['account', 'setup', 'beginner']
    },
    {
      id: 'password-reset',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email. You can also contact our support team for assistance.',
      category: 'account-management',
      tags: ['password', 'security', 'account']
    },
    {
      id: 'billing-questions',
      question: 'How do I update my billing information?',
      answer: 'You can update your billing information in your account settings. Go to Account Settings > Billing to update payment methods, billing address, and other billing-related information.',
      category: 'billing-support',
      tags: ['billing', 'payment', 'account']
    },
    {
      id: 'technical-issues',
      question: 'What should I do if I encounter technical issues?',
      answer: 'If you encounter technical issues, first check our troubleshooting guide. If the issue persists, contact our technical support team with details about the problem, your system information, and any error messages.',
      category: 'technical-support',
      tags: ['technical', 'troubleshooting', 'support']
    },
    {
      id: 'data-security',
      question: 'How secure is my data?',
      answer: 'We implement enterprise-grade security measures including encryption, multi-factor authentication, and regular security audits. Your data is protected by industry-standard security protocols and compliance certifications.',
      category: 'getting-started',
      tags: ['security', 'data', 'privacy']
    },
    {
      id: 'feature-requests',
      question: 'How can I request new features?',
      answer: 'We welcome feature requests from our users. You can submit feature requests through our feedback form, community forum, or by contacting our product team directly. We review all requests and prioritize them based on user needs.',
      category: 'technical-support',
      tags: ['features', 'feedback', 'product']
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '2-4 hours',
      icon: Mail,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our support specialists',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      icon: Phone,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Community Forum',
      description: 'Connect with other users and share solutions',
      availability: '24/7',
      responseTime: 'Varies',
      icon: Users,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const quickActions = [
    {
      title: 'Report a Bug',
      description: 'Report technical issues or bugs',
      icon: AlertTriangle,
      action: 'Report Bug',
      url: '/help/report-bug'
    },
    {
      title: 'Request Feature',
      description: 'Suggest new features or improvements',
      icon: Lightbulb,
      action: 'Request Feature',
      url: '/help/request-feature'
    },
    {
      title: 'Schedule Demo',
      description: 'Book a personalized product demo',
      icon: Video,
      action: 'Schedule Demo',
      url: '/help/schedule-demo'
    },
    {
      title: 'Contact Sales',
      description: 'Get in touch with our sales team',
      icon: Users,
      action: 'Contact Sales',
      url: '/help/contact-sales'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help & Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and connect with our support team."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Help & Support</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions, access helpful resources, and get the support you need 
            to make the most of our services.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Help Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Help Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {helpResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Updated: {resource.lastUpdated}</span>
                  <a
                    href={resource.url}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                <a
                  href={action.url}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  {action.action}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl border border-slate-600/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-slate-600/30"
                  >
                    <p className="text-gray-300 pt-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs border border-slate-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="bg-slate-700/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600/50 transition-all duration-300 border border-slate-600/50"
              >
                View Support Options
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
