import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search, Zap, Shield, Cloud, Brain } from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const faqData: FAQItem[] = [
  {
    id: 'ai-services',
    question: 'What AI services does Zion Tech Group offer?',
    answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI-powered cybersecurity, and custom AI solution development for businesses.',
    category: 'AI Services',
    icon: Brain
  },
  {
    id: 'cybersecurity',
    question: 'How does Zion Tech Group ensure cybersecurity?',
    answer: 'We implement enterprise-grade security measures including zero-trust architecture, AI-powered threat detection, regular security audits, compliance with industry standards, and 24/7 monitoring.',
    category: 'Security',
    icon: Shield
  },
  {
    id: 'cloud-solutions',
    question: 'What cloud solutions are available?',
    answer: 'Our cloud services include cloud migration, infrastructure as code, container orchestration, serverless computing, multi-cloud strategy, and cloud security implementation.',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'pricing',
    question: 'How is pricing structured for your services?',
    answer: 'We offer flexible pricing models including project-based pricing, subscription plans, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'support',
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, training programs, and ongoing maintenance and updates.',
    category: 'Support',
    icon: HelpCircle
  },
  {
    id: 'implementation',
    question: 'How long does it take to implement your solutions?',
    answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We provide detailed project timelines during planning.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'customization',
    question: 'Can you customize solutions for our specific needs?',
    answer: 'Absolutely! We specialize in custom development and can tailor any solution to meet your unique business requirements, industry standards, and compliance needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'maintenance',
    question: 'Do you provide ongoing maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',
    category: 'Support',
    icon: HelpCircle
  }
];

const categories = ['All', 'AI Services', 'Security', 'Cloud', 'Support', 'General'];

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI, cybersecurity, and cloud services. Get answers to common questions about Zion Tech Group solutions."
      />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our AI-powered solutions, cybersecurity services, and cloud infrastructure.
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50"
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                {activeItem === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {activeItem === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Get Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
