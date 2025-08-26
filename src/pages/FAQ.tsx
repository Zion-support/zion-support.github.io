import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Users2,
  HelpCircle
} from 'lucide-react';

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState(new Set([0]));
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      category: 'general',
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group provides comprehensive technology solutions including AI services, cybersecurity, cloud computing, digital transformation, and quantum technology solutions. We specialize in cutting-edge technologies that help businesses innovate and grow."
    },
    {
      category: 'general',
      question: "How can I get started with Zion Tech Group?",
      answer: "Getting started is easy! Simply contact us through our contact form, give us a call, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      category: 'pricing',
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including project-based pricing, subscription services, and custom enterprise solutions. Pricing depends on the scope of work, complexity, and duration. Contact us for a personalized quote."
    },
    {
      category: 'pricing',
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your business needs and discuss potential solutions. This helps us provide accurate recommendations and pricing for your specific requirements."
    },
    {
      category: 'technical',
      question: "What technologies do you specialize in?",
      answer: "We specialize in AI and machine learning, quantum computing, blockchain, cybersecurity, cloud infrastructure, IoT, and emerging technologies. Our team stays current with the latest technological advancements."
    },
    {
      category: 'technical',
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes monitoring, updates, troubleshooting, and technical support."
    },
    {
      category: 'security',
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure development practices, regular security audits, and compliance with industry standards like GDPR, SOC 2, and ISO 27001."
    },
    {
      category: 'security',
      question: "What compliance standards do you meet?",
      answer: "We maintain compliance with major standards including GDPR, SOC 2 Type II, ISO 27001, HIPAA, and PCI DSS. Our security practices are regularly audited and updated to meet evolving requirements."
    },
    {
      category: 'support',
      question: "What is your response time for support requests?",
      answer: "We provide different support tiers with response times ranging from 1 hour for critical issues to 24 hours for general inquiries. Premium support clients receive priority response times and dedicated support channels."
    },
    {
      category: 'support',
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs to help your team effectively use and maintain the solutions we implement. This includes initial training, ongoing education, and access to our knowledge base."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },
    { id: 'pricing', name: 'Pricing', count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'technical', name: 'Technical', count: faqData.filter(item => item.category === 'technical').length },
    { id: 'security', name: 'Security', count: faqData.filter(item => item.category === 'security').length },
    { id: 'support', name: 'Support', count: faqData.filter(item => item.category === 'support').length }
  ];

  const filteredFAQ = useMemo(() => {
    return faqData.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's services, pricing, and support. 
              Can't find what you're looking for? Contact our team directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 futuristic-input text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/80 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="futuristic-card overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-medium text-white">{item.question}</span>
                    {expandedItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                    )}
                  </button>
                  {expandedItems.has(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 border-t border-zion-slate-light/20"
                    >
                      <p className="text-zion-slate-light leading-relaxed mt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-zion-slate-light">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="futuristic-card bg-gradient-to-r from-zion-cyan to-zion-purple p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Still have questions?
              </h2>
              <p className="text-xl mb-8 text-zion-slate-lighter">
                Our expert team is here to help. Get in touch with us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-zion-cyan rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 bg-zion-cyan-dark text-white rounded-lg font-medium hover:bg-zion-cyan-darker transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
                Additional Resources
              </h2>
              <p className="futuristic-text text-lg max-w-2xl mx-auto">
                Explore our comprehensive resources to learn more about our services and solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
                <p className="text-zion-slate-light mb-4">
                  Access our comprehensive technical documentation and guides.
                </p>
                <Link
                  to="/docs"
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                >
                  View Documentation →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
                <p className="text-zion-slate-light mb-4">
                  Learn through our video tutorials and webinars.
                </p>
                <Link
                  to="/webinars"
                  className="text-zion-purple hover:text-zion-purple-light font-medium transition-colors"
                >
                  Watch Videos →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light mb-4">
                  Join our community forum for discussions and support.
                </p>
                <Link
                  to="/community"
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                >
                  Join Community →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
