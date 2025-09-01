import { Link } from 'react - router - dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle, Phone, Mail, MapPin, ArrowRight, Star, Shield, Brain, Cloud, Zap, Users, CheckCircle, ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(['general']);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const faqData = {
    general: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "Zion Tech Group offers comprehensive AI-powered solutions including AI Business Intelligence, Healthcare Analytics, Cybersecurity, IoT Edge Computing, Cloud DevOps, Digital Twin platforms, and innovative Micro SaaS services. We specialize in cutting-edge technology solutions for modern businesses."
      },
      {
        question: "How can I get started with Zion Tech Group services?",
        answer: "Getting started is easy! You can request a quote through our website, schedule a demo to see our solutions in action, or contact our team directly. We'll assess your needs and recommend the best approach for your organization."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, government, and more. Our AI solutions are designed to be adaptable across different sectors and business models."
      },
      {
        question: "Do you offer support and training?",
        answer: "Yes, we provide comprehensive support including 24/7 technical assistance, training programs for your team, documentation, and ongoing consultation to ensure successful implementation and adoption of our solutions."
      }
    ],
    ai: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and autonomous AI systems. Our platforms include AI Business Intelligence, Healthcare Analytics, and AI-powered cybersecurity solutions."
      },
      {
        question: "How do you ensure AI model accuracy and reliability?",
        answer: "We implement rigorous testing protocols, continuous monitoring, and validation processes. Our AI models undergo extensive training with diverse datasets and are regularly updated to maintain high accuracy and reliability standards."
      },
      {
        question: "Can you customize AI solutions for specific business needs?",
        answer: "Absolutely! We specialize in custom AI solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and develop AI systems that integrate seamlessly with your existing workflows."
      }
    ],
    pricing: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise solutions. Our pricing is transparent and designed to provide value while fitting your budget requirements."
      },
      {
        question: "Do you offer free trials or demos?",
        answer: "Yes, we offer free demos of our solutions and can arrange proof-of-concept trials for qualified organizations. This allows you to experience our technology firsthand before making a commitment."
      },
      {
        question: "Are there hidden costs or fees?",
        answer: "No hidden costs! We believe in complete transparency. All pricing is clearly communicated upfront, and we'll work with you to ensure there are no surprises throughout our partnership."
      }
    ],
    technical: [
      {
        question: "What technical requirements are needed for your solutions?",
        answer: "Our solutions are designed to be flexible and can work with your existing infrastructure. We'll assess your current setup and recommend any necessary upgrades or integrations to ensure optimal performance."
      },
      {
        question: "How do you handle data security and privacy?",
        answer: "Security is our top priority. We implement enterprise-grade security measures, comply with industry standards (SOC 2, GDPR, HIPAA), and ensure all data is encrypted and protected throughout our systems."
      },
      {
        question: "What is your deployment timeline?",
        answer: "Deployment timelines vary based on solution complexity and customization requirements. Simple implementations can be completed in weeks, while complex enterprise solutions may take several months. We'll provide a detailed timeline during our initial assessment."
      }
    ]
  };

  const filteredFAQ = Object.entries(faqData).reduce((acc, [category, questions]) => {
    if (searchQuery === '') {
      acc[category] = questions;
    } else {
      const filtered = questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
    }
    return acc;
  }, {} as typeof faqData);

  const categories = [
    { key: 'general', name: 'General Questions', icon: MessageCircle, color: 'from-blue-500 to-cyan-500' },
    { key: 'ai', name: 'AI & Technology', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { key: 'pricing', name: 'Pricing & Plans', icon: Star, color: 'from-green-500 to-emerald-500' },
    { key: 'technical', name: 'Technical Support', icon: Shield, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                How Can We
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}Help You?
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Find answers to common questions about our AI-powered solutions, services, 
                and how we can help transform your business with cutting-edge technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {categories.map((category) => {
              if (!filteredFAQ[category.key]) return null;
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.key)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                    </div>
                    {openCategories.includes(category.key) ? (
                      <Minus className="w-6 h-6 text-gray-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  
                  {openCategories.includes(category.key) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {filteredFAQ[category.key].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-600/30 rounded-xl p-6"
                          >
                            <h3 className="text-lg font-semibold text-white mb-3">
                              {item.question}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* No Results */}
            {Object.keys(filteredFAQ).length === 0 && searchQuery !== '' && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No FAQ items found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your search terms or browse our help categories
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our support team is here to help.
                  Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Contact Our Team
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/help"
                    className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-colors font-medium"
                  >
                    Browse Help Center
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
