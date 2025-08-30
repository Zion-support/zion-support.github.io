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
  Clock
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
    id: 'maintenance',
    question: 'Do you provide ongoing maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',
    category: 'Support',
    icon: HelpCircle
  }
];

const categories = ['All', 'AI Services', 'Security', 'Cloud', 'Support', 'General'];

const FAQ: React.FC = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our services, solutions, and how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-20">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No questions found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQ.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.question}</h3>
                        <p className="text-sm text-zion-cyan">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {activeItem === item.id ? (
                        <ChevronUp className="w-6 h-6 text-zion-cyan" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-white/20">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-6 w-6 text-zion-cyan" />
                <span className="text-white">24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-200 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
