import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, Phone, Mail, Video, FileText, HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our team through our contact form or schedule a consultation. We\'ll assess your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer a comprehensive range of technology services including AI solutions, cybersecurity, cloud computing, digital transformation, and custom software development.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months.'
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: HelpCircle,
      color: 'from-green-500 to-emerald-500',
      faqs: [
        {
          question: 'What support options are available?',
          answer: 'We offer 24/7 technical support through multiple channels including email, phone, live chat, and our support portal. Enterprise clients receive dedicated support managers.'
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'You can report technical issues through our support portal, email support@ziontechgroup.com, or call our technical support hotline. We prioritize issues based on severity.'
        },
        {
          question: 'What is your response time for support requests?',
          answer: 'We aim to respond to all support requests within 2 hours during business hours. Critical issues receive immediate attention with our 24/7 support team.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      faqs: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise solutions. Contact us for a personalized quote.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer free trials for most of our services. Contact our sales team to discuss trial options and get started with a proof of concept.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements. All payments are processed securely.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      action: 'Call Now',
      available: true,
      contact: '+1 (555) 123-4567'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      icon: Mail,
      action: 'Send Email',
      available: true,
      contact: 'support@ziontechgroup.com'
    },
    {
      title: 'Video Consultation',
      description: 'Schedule a one-on-one session with our experts',
      icon: Video,
      action: 'Schedule Call',
      available: true
    }
  ];

  const filteredFAQs = faqCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-lg"
            />
          </div>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{option.description}</p>
              {option.contact && (
                <p className="text-blue-400 text-sm mb-4">{option.contact}</p>
              )}
              <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                {option.action}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            All Categories
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 + categoryIndex * 0.1 + faqIndex * 0.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 mx-auto">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;