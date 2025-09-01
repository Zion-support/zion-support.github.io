import { Link } from 'react - router - dom';
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
  Globe} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {

  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType < any>;
}

}
;
const faqData: FAQItem[] = [
  {

    id: 'ai-services',
    question: 'What AI services does Zion Tech Group offer?',
    answer:'
      'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI-powered cybersecurity, and custom AI solution development for businesses.',
    category: 'AI Services',
    icon: Brain},
  {

    id: 'cybersecurity',
    question: 'How does Zion Tech Group ensure cybersecurity?',
    answer:'
      'We implement enterprise-grade security measures including zero-trust architecture, AI-powered threat detection, regular security audits, compliance with industry standards, and 24/7 monitoring.',
    category: 'Security',
    icon: Shield},
  {

    id: 'cloud-solutions',
    question: 'What cloud solutions are available?',
    answer:'
      'Our cloud services include cloud migration, infrastructure as code, container orchestration, serverless computing, multi-cloud strategy, and cloud security implementation.',
    category: 'Cloud',
    icon: Cloud},
  {

    id: 'pricing',
    question: 'How is pricing structured for your services?',
    answer:'
      'We offer flexible pricing models including project-based pricing, subscription plans, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',
    category: 'General',
    icon: Zap},
  {

    id: 'support',
    question: 'What kind of support do you provide?',
    answer:'
      'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, training programs, and ongoing maintenance and updates.',
    category: 'Support',
    icon: HelpCircle},
  {

    id: 'implementation',
    question: 'How long does it take to implement your solutions?',
    answer:'
      'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We provide detailed project timelines during planning.',
    category: 'General',
    icon: Zap},
  {

    id: 'customization',
    question: 'Can you customize solutions for our specific needs?',
    answer:'
      'Absolutely! We specialize in custom development and can tailor any solution to meet your unique business requirements, industry standards, and compliance needs.',
    category: 'General',
    icon: Zap},
  {

    id: 'maintenance',
    question: 'Do you provide ongoing maintenance and updates?',
    answer:'
      'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',
    category: 'Support',
    icon: HelpCircle},
  {

    id: 'quantum-computing',
    question: 'What quantum computing services do you offer?',
    answer:'
      'Our quantum computing services include quantum algorithm development, quantum machine learning, quantum cryptography, quantum simulation, and quantum optimization solutions for complex problems.',
    category: 'AI Services',
    icon: Brain},
  {

    id: 'compliance',
    question: 'How do you handle compliance and regulatory requirements?',
    answer:'
      'We ensure compliance with industry standards including HIPAA, SOC 2, GDPR, and other regulatory frameworks. Our solutions are built with compliance in mind from the ground up.',
    category: 'Security',
    icon: Shield},
  {

    id: 'scalability',
    question: 'How scalable are your solutions?',
    answer:'
      'All our solutions are designed with scalability in mind. We use cloud-native architectures, microservices, and containerization to ensure your systems can grow with your business needs.',
    category: 'Cloud',
    icon: Cloud},
];

const categories = ['
  'All',AI Services',Security',Cloud',Support',General',
];

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq => {

    const matchesCategory ='
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) ;

  const toggleItem = (id: string) => {

    setActiveItem(activeItem === id ? null : id);
  };

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">"
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}"
          className="text-center text-white mb-16"
        >"
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>"
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Find answers to common questions about our services, technology
            solutions, and how we can help transform your business.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}"
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}"
          <div className="relative mb-8">"
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input"
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}"
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}"
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${

                  selectedCategory === category'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg''
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'`
                }`}
              >
                {category}
              </button>) ) }
          </div>
        </div>
      </section>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}"
          className="max-w-4xl mx-auto space-y-4"
        >
          <AnimatePresence>
            {filteredFAQs.map ( (faq, index) => (<motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}"
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}"
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >"
                  <div className="flex items-center space-x-4">"
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">"
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>"
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {faq.question}
                      </h3>"
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  {activeItem === faq.id ? ("
                    <ChevronUp className="w-6 h-6 text-cyan-400" />
                  ) : ("
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {activeItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}"
                      className="overflow-hidden"
                    >"
                      <div className="px-6 pb-6">"
                        <div className="border-t border-white/20 pt-4">"
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>) }
                </AnimatePresence>
              </motion.div>) ) }
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}"
          className="mt-20 text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to
              help. Get in touch with us for personalized assistance.
            </p>
"
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">"
              <div className="flex items-center justify-center space-x-3 text-gray-300">"
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center justify-center space-x-3 text-gray-300">"
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center justify-center space-x-3 text-gray-300">"
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>24/7 Support</span>
              </div>
            </div>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link"
                to="/services"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'"`