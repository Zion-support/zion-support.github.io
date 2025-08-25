import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Book, MessageCircle, Phone, Mail, FileText, Video, Download, ChevronDown, ChevronRight, Star, Clock, Users, HelpCircle, Zap, Shield, Settings, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { title: 'Account Setup Guide', views: '2.3k', time: '5 min read' },
        { title: 'First Steps with AI Solutions', views: '1.8k', time: '8 min read' },
        { title: 'Understanding Our Services', views: '3.1k', time: '6 min read' },
        { title: 'Initial Consultation Process', views: '1.5k', time: '4 min read' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Globe,
      description: 'Everything about our AI and machine learning services',
      articles: [
        { title: 'AI Implementation Best Practices', views: '2.8k', time: '12 min read' },
        { title: 'Machine Learning Model Training', views: '1.9k', time: '15 min read' },
        { title: 'Data Preparation Guidelines', views: '2.2k', time: '10 min read' },
        { title: 'AI Ethics and Compliance', views: '1.4k', time: '8 min read' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security protocols, compliance, and protection measures',
      articles: [
        { title: 'Security Assessment Process', views: '3.5k', time: '9 min read' },
        { title: 'Compliance Framework Setup', views: '2.1k', time: '11 min read' },
        { title: 'Incident Response Procedures', views: '1.7k', time: '7 min read' },
        { title: 'Zero Trust Architecture Guide', views: '2.9k', time: '14 min read' }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical assistance and troubleshooting guides',
      articles: [
        { title: 'Common Integration Issues', views: '4.2k', time: '6 min read' },
        { title: 'API Documentation', views: '3.8k', time: '20 min read' },
        { title: 'System Requirements', views: '2.6k', time: '5 min read' },
        { title: 'Performance Optimization', views: '1.8k', time: '13 min read' }
      ]
    }
  ];

  const quickHelp = [
    {
      title: 'Contact Support',
      description: 'Get direct help from our technical team',
      icon: MessageCircle,
      action: 'Chat Now',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a free consultation with our experts',
      icon: Phone,
      action: 'Book Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Documentation',
      description: 'Access comprehensive technical docs',
      icon: Book,
      action: 'Browse Docs',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: 'Watch Now',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI integrations typically take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What cybersecurity frameworks do you support?',
      answer: 'We support major frameworks including NIST, ISO 27001, SOC 2, HIPAA, GDPR, and industry-specific compliance requirements. Our team will assess your needs and recommend the most appropriate framework.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and dedicated account management. Support levels can be customized based on your requirements.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure. We conduct thorough compatibility assessments and create custom integration strategies for your environment.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve diverse industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are customized to meet industry-specific requirements and compliance standards.'
    }
  ];

  const resources = [
    {
      title: 'Implementation Checklist',
      type: 'PDF',
      size: '2.3 MB',
      downloads: '1.2k'
    },
    {
      title: 'Security Best Practices Guide',
      type: 'PDF',
      size: '1.8 MB',
      downloads: '956'
    },
    {
      title: 'API Integration Templates',
      type: 'ZIP',
      size: '4.1 MB',
      downloads: '743'
    },
    {
      title: 'Compliance Assessment Tool',
      type: 'XLSX',
      size: '892 KB',
      downloads: '621'
    }
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <SEO 
        title="Help Center | Support & Documentation - Zion Tech Group"
        description="Find answers, guides, and support for Zion Tech Group services. Access documentation, tutorials, FAQs, and contact our expert support team."
        keywords="help center, support, documentation, tutorials, FAQ, technical support, customer service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Support & Documentation
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Help
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Center
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Find answers, access documentation, and get the support you need to succeed with our technology solutions.
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto relative"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Help Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Help
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Get immediate assistance with common tasks and questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickHelp.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group cursor-pointer"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                      {item.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Knowledge Base Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Knowledge Base
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Browse our comprehensive collection of guides and documentation
              </p>
            </motion.div>

            <div className="space-y-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <button
                      onClick={() => handleCategoryToggle(category.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                          <p className="text-gray-300">{category.description}</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.articles.map((article, idx) => (
                            <Link
                              key={idx}
                              to="#"
                              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div>
                                <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                                  {article.title}
                                </h4>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                  <Users className="w-3 h-3 mr-1" />
                                  {article.views}
                                  <Clock className="w-3 h-3 ml-3 mr-1" />
                                  {article.time}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download Resources
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Access templates, guides, and tools to help you succeed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {resource.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{resource.size}</span>
                    <span className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloads}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our expert support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Support
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Call
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm">24/7 Support</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm">&lt; 2 hour response</div>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm">Business hours</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpCenter;