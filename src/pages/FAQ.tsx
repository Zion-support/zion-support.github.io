import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Zap,
  Shield,
  Cloud,
  Brain,
  MessageCircle,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

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
    id: 'quantum-computing',
    question: 'Do you offer quantum computing solutions?',
    answer: 'Yes, we provide quantum computing integration services, including quantum algorithm development, quantum machine learning, and hybrid classical-quantum computing solutions for financial and scientific applications.',
    category: 'AI Services',
    icon: Brain
  },
  {
    id: 'compliance',
    question: 'What compliance standards do you support?',
    answer: 'We support various compliance standards including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regulations. Our solutions are designed with compliance in mind from the start.',
    category: 'Security',
    icon: Shield
  },
  {
    id: 'scalability',
    question: 'How scalable are your solutions?',
    answer: 'Our solutions are built with scalability in mind, supporting both horizontal and vertical scaling. We design systems that can grow with your business needs, from startup to enterprise level.',
    category: 'Cloud',
    icon: Cloud
  }
];

const categories = ['All', 'AI Services', 'Security', 'Cloud', 'General', 'Support'];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, solutions, and how we can help transform your business
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {filteredFAQ.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <p className="text-sm text-cyan-400">{item.category}</p>
                    </div>
                  </div>
                  {openItems.has(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openItems.has(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No questions found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="tel:+13024640950"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
