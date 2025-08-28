import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HelpCircle, ChevronDown, ChevronRight, Brain, Shield, Cloud, ShoppingCart, Star, Zap, Users, DollarSign, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'general-1',
    question: 'What services does Zion Tech Group offer?',
    answer: 'We offer comprehensive technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, emerging technologies like quantum computing, and micro SaaS platforms. Our services are designed to help businesses of all sizes leverage cutting-edge technology.',
    category: 'General',
    tags: ['services', 'overview', 'technology']
  },
  {
    id: 'general-2',
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Begin by exploring our service overviews, then contact our team for a consultation. We\'ll assess your needs and recommend the best solutions for your business. We also offer comprehensive onboarding and training.',
    category: 'General',
    tags: ['onboarding', 'consultation', 'getting-started']
  },
  {
    id: 'general-3',
    question: 'Are your services suitable for small businesses?',
    answer: 'Absolutely! We design our services to be scalable and accessible to businesses of all sizes. Our micro SaaS solutions are particularly well-suited for small businesses, offering enterprise-grade technology at accessible price points.',
    category: 'General',
    tags: ['small-business', 'scalability', 'enterprise']
  },

  // AI Services
  {
    id: 'ai-1',
    question: 'How do I get started with your AI services?',
    answer: 'Start by exploring our AI services overview page, then contact our team for a consultation. We\'ll assess your needs and recommend the best AI solutions for your business. We also offer comprehensive onboarding and training.',
    category: 'AI Services',
    tags: ['ai', 'machine-learning', 'onboarding']
  },
  {
    id: 'ai-2',
    question: 'How quickly can you deploy AI solutions?',
    answer: 'Deployment timelines vary based on complexity. Simple AI integrations can be deployed in 2-4 weeks, while complex enterprise solutions typically take 8-12 weeks. We\'ll provide a detailed timeline during consultation.',
    category: 'AI Services',
    tags: ['deployment', 'timeline', 'ai-integration']
  },
  {
    id: 'ai-3',
    question: 'Do you provide ongoing support after AI deployment?',
    answer: 'Yes! We offer comprehensive post-deployment support including 24/7 monitoring, regular maintenance, updates, and technical support. Our support packages are customizable to your needs.',
    category: 'AI Services',
    tags: ['support', 'maintenance', 'monitoring']
  },

  // Pricing & Billing
  {
    id: 'pricing-1',
    question: 'What is your pricing structure?',
    answer: 'Our pricing varies based on the service and your specific requirements. We offer flexible plans including pay-as-you-go, subscription models, and enterprise custom pricing. Contact us for a detailed quote tailored to your needs.',
    category: 'Pricing',
    tags: ['pricing', 'plans', 'billing']
  },
  {
    id: 'pricing-2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our encrypted payment system.',
    category: 'Pricing',
    tags: ['payment', 'billing', 'security']
  },
  {
    id: 'pricing-3',
    question: 'Do you offer refunds if I\'m not satisfied?',
    answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely satisfied, we\'ll work to fix the issue or provide a full refund. Your success is our success.',
    category: 'Pricing',
    tags: ['refund', 'guarantee', 'satisfaction']
  },

  // Security & Compliance
  {
    id: 'security-1',
    question: 'How do you ensure data security and compliance?',
    answer: 'Security is our top priority. We implement industry-leading security measures including encryption, regular security audits, and compliance with GDPR, CCPA, and other regulations. Our AI-powered security platforms provide real-time threat detection and response.',
    category: 'Security',
    tags: ['security', 'compliance', 'gdpr', 'encryption']
  },
  {
    id: 'security-2',
    question: 'What security certifications do you have?',
    answer: 'We maintain SOC2 Type II compliance, ISO 27001 certification, and regularly undergo third-party security audits. Our security practices meet or exceed industry standards for enterprise-grade security.',
    category: 'Security',
    tags: ['certifications', 'soc2', 'iso27001', 'audits']
  },

  // Support & Training
  {
    id: 'support-1',
    question: 'Do you provide support and training?',
    answer: 'Yes! We provide comprehensive support including 24/7 technical assistance, detailed documentation, video tutorials, and personalized training sessions. Our team is committed to ensuring your success with our solutions.',
    category: 'Support',
    tags: ['support', 'training', 'documentation']
  },
  {
    id: 'support-2',
    question: 'What are your support response times?',
    answer: 'We provide tiered support with critical issues addressed within 1 hour, high priority issues within 4 hours, and standard issues within 24 hours. Enterprise clients receive priority support with dedicated account managers.',
    category: 'Support',
    tags: ['response-time', 'priority', 'enterprise']
  },

  // Technical
  {
    id: 'technical-1',
    question: 'Can you work with existing IT infrastructure?',
    answer: 'Absolutely! We specialize in integrating with existing systems. Our team will assess your current infrastructure and design solutions that work seamlessly with what you already have.',
    category: 'Technical',
    tags: ['integration', 'infrastructure', 'compatibility']
  },
  {
    id: 'technical-2',
    question: 'What if I need custom development?',
    answer: 'We offer custom development services for unique requirements. Our team can build custom solutions, integrate with existing systems, or modify our standard offerings to meet your specific needs.',
    category: 'Technical',
    tags: ['custom-development', 'integration', 'modifications']
  }
];

const categories = ['All', 'General', 'AI Services', 'Pricing', 'Security', 'Support', 'Technical'];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const filteredFAQ = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(category => category.items.length > 0);

  const allCategories = [
    { value: 'all', label: 'All Categories', icon: <Globe className="w-4 h-4" /> },
    { value: 'general', label: 'General', icon: <Globe className="w-4 h-4" /> },
    { value: 'ai', label: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { value: 'cloud', label: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
    { value: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { value: 'saas', label: 'Micro SaaS', icon: <ShoppingCart className="w-4 h-4" /> },
    { value: 'pricing', label: 'Pricing', icon: <DollarSign className="w-4 h-4" /> },
    { value: 'support', label: 'Support', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI, cybersecurity, and cloud services. Get answers to common questions about Zion Tech Group solutions."
      />
      {/* Header */}
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, pricing, and support
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'text-gray-400 hover:text-white hover:bg-zion-slate-dark/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === 'All' ? 'All Questions' : `${selectedCategory} Questions`}
                </h2>
                <span className="text-cyan-300 text-sm">
                  {filteredFAQ.length} question{filteredFAQ.length !== 1 ? 's' : ''}
                </span>
              </div>

              {filteredFAQ.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                  <p className="text-gray-400 mb-4">
                    Try adjusting your search terms or browse all categories
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQ.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-left hover:bg-zion-slate-dark/70 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          {expandedFAQ === faq.id ? (
                            <ChevronDown className="w-5 h-5 text-cyan-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-cyan-400" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedFAQ === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-cyan-400/20"
                          >
                            <div className="p-6">
                              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                              <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-cyan-400 font-medium">
                                  {faq.category}
                                </span>
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                  <span className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                                    Helpful
                                  </span>
                                  <span className="flex items-center">
                                    <Info className="w-4 h-4 mr-1 text-blue-400" />
                                    More Info
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
