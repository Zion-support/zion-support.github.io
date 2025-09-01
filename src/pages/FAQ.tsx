import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  Brain,
  Shield,
  Cloud,
  Code,
  Zap,
  Building,
  DollarSign,
  Users
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

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
      answer: 'We implement multi-layered security approaches including advanced threat detection, zero-trust architecture, penetration testing, compliance auditing, and 24/7 monitoring to protect your digital assets.',
      category: 'Security',
      icon: Shield
    },
    {
      id: 'cloud-migration',
      question: 'Can you help with cloud migration?',
      answer: 'Yes, we provide complete cloud migration services including assessment, planning, implementation, and optimization for AWS, Azure, and Google Cloud platforms with minimal downtime.',
      category: 'Cloud Services',
      icon: Cloud
    },
    {
      id: 'quantum-computing',
      question: 'Do you offer quantum computing solutions?',
      answer: 'We provide quantum computing consulting, algorithm development, and hybrid classical-quantum solutions for complex optimization problems, cryptography, and scientific simulations.',
      category: 'Quantum',
      icon: Zap
    },
    {
      id: 'pricing-model',
      question: 'How does your pricing work?',
      answer: 'We offer flexible pricing models including project-based, monthly subscriptions, and enterprise contracts. Pricing varies based on service complexity, duration, and support level required.',
      category: 'Pricing',
      icon: DollarSign
    },
    {
      id: 'support-availability',
      question: 'What support do you provide?',
      answer: 'We provide 24/7 support for enterprise clients, business hours support for standard plans, and comprehensive documentation, training, and maintenance services.',
      category: 'Support',
      icon: Users
    },
    {
      id: 'custom-development',
      question: 'Do you build custom software solutions?',
      answer: 'Yes, we develop custom software solutions tailored to your specific business needs using modern technologies and best practices for scalability, security, and performance.',
      category: 'Development',
      icon: Code
    },
    {
      id: 'blockchain-services',
      question: 'What blockchain services do you provide?',
      answer: 'We offer blockchain development, smart contract creation, DeFi solutions, NFT platforms, supply chain transparency systems, and cryptocurrency integration services.',
      category: 'Blockchain',
      icon: Building
    },
    {
      id: 'project-timeline',
      question: 'How long do projects typically take?',
      answer: 'Project timelines vary based on complexity. Simple integrations take 2-4 weeks, medium projects 2-6 months, and complex enterprise solutions 6-18 months. We provide detailed timelines during consultation.',
      category: 'General',
      icon: HelpCircle
    },
    {
      id: 'data-privacy',
      question: 'How do you handle data privacy and compliance?',
      answer: 'We adhere to strict data privacy standards including GDPR, CCPA, HIPAA, and SOC 2 compliance. All data is encrypted, access is logged, and we follow industry best practices for data protection.',
      category: 'Security',
      icon: Shield
    },
    {
      id: 'getting-started',
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Start with a free consultation where we assess your needs, discuss solutions, and provide a detailed proposal. Contact us via phone, email, or our website contact form.',
      category: 'General',
      icon: MessageCircle
    },
    {
      id: 'team-expertise',
      question: 'What expertise does your team have?',
      answer: 'Our team includes PhD-level researchers, certified cloud architects, cybersecurity experts, AI specialists, and senior developers with expertise in cutting-edge technologies and industry best practices.',
      category: 'Company',
      icon: Users
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and how we can help transform your business
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/20"
                  >
                    <div className="p-6 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                No questions found
              </h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert team is here to help. 
              Get in touch for personalized answers and solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}?subject=Question about Services`}
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Form</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;