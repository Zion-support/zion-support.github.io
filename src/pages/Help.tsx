import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  Users, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  Zap,
  Shield,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and tutorials',
      articles: [
        { title: 'Welcome to Zion Tech Group', readTime: '3 min read', difficulty: 'Beginner' },
        { title: 'Setting Up Your Account', readTime: '5 min read', difficulty: 'Beginner' },
        { title: 'First Steps with Our Services', readTime: '7 min read', difficulty: 'Beginner' },
        { title: 'Understanding Your Dashboard', readTime: '4 min read', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Shield,
      description: 'AI and machine learning services',
      articles: [
        { title: 'AI Consciousness Simulator Guide', readTime: '8 min read', difficulty: 'Intermediate' },
        { title: 'Quantum Emotion Processor Setup', readTime: '10 min read', difficulty: 'Advanced' },
        { title: 'Neural Network Architect Tutorial', readTime: '12 min read', difficulty: 'Advanced' },
        { title: 'AI Ethics Framework Overview', readTime: '6 min read', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: Globe,
      description: 'Software as a Service solutions',
      articles: [
        { title: 'AI Business Intelligence Setup', readTime: '6 min read', difficulty: 'Intermediate' },
        { title: 'Customer Experience Hub Guide', readTime: '8 min read', difficulty: 'Intermediate' },
        { title: 'Supply Chain Optimizer Tutorial', readTime: '10 min read', difficulty: 'Advanced' },
        { title: 'HR Management Suite Walkthrough', readTime: '7 min read', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Clock,
      description: 'IT infrastructure and support',
      articles: [
        { title: 'Infrastructure Management Guide', readTime: '9 min read', difficulty: 'Intermediate' },
        { title: 'Digital Transformation Process', readTime: '11 min read', difficulty: 'Advanced' },
        { title: 'Onsite Support Procedures', readTime: '5 min read', difficulty: 'Beginner' },
        { title: 'Green IT Solutions Overview', readTime: '6 min read', difficulty: 'Intermediate' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply create an account, choose your service package, and our team will guide you through the onboarding process. We offer personalized setup assistance to ensure a smooth transition.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support through multiple channels including live chat, email, phone, and video calls. Our expert team is always ready to help with technical issues, questions, or guidance.'
    },
    {
      question: 'Are your services scalable for growing businesses?',
      answer: 'Absolutely! Our services are designed to scale with your business. Whether you\'re a startup or enterprise, we can adjust our solutions to meet your evolving needs and growth requirements.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC 2 Type II compliance, ISO 27001 certification, end-to-end encryption, and regular security audits. Your data security is our top priority.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions or requests',
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and visual assistance',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      action: 'Schedule Call'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {channel.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {channel.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-zion-slate-light">
                    <span className="font-medium">Available:</span> {channel.availability}
                  </div>
                  <div className="text-xs text-zion-slate-light">
                    <span className="font-medium">Response:</span> {channel.responseTime}
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-sm font-medium">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Help Articles & Tutorials
          </h2>
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-zion-cyan/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-zion-slate-light">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-zion-slate-light" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zion-cyan/10 bg-zion-slate-dark/30"
                    >
                      <div className="p-6 space-y-4">
                        {category.articles.map((article, articleIndex) => (
                          <div
                            key={articleIndex}
                            className="flex items-center justify-between p-4 bg-zion-slate-dark/50 rounded-lg hover:bg-zion-cyan/5 transition-all duration-300"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-white mb-1">
                                {article.title}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{article.readTime}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Lightbulb className="w-3 h-3" />
                                  <span>{article.difficulty}</span>
                                </span>
                              </div>
                            </div>
                            <button className="px-4 py-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 text-sm font-medium">
                              Read Article
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-zion-cyan" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out 
              for personalized assistance with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 font-semibold">
                Contact Support Team
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 font-semibold">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;