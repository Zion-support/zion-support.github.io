import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  QuestionMarkCircleIcon, 
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpenIcon },
    { id: 'getting-started', name: 'Getting Started', icon: QuestionMarkCircleIcon },
    { id: 'ai-services', name: 'AI Services', icon: ChatBubbleLeftRightIcon },
    { id: 'technical', name: 'Technical Support', icon: DocumentTextIcon },
    { id: 'billing', name: 'Billing & Pricing', icon: DocumentTextIcon },
    { id: 'account', name: 'Account Management', icon: QuestionMarkCircleIcon }
  ];

  const helpCategories = [
    {
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us at +1 (302) 464-0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      category: 'getting-started',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our AI and technology solutions are adaptable to any sector looking to modernize and optimize their operations.'
    },
    {
      category: 'ai-services',
      question: 'How does your AI Autonomous Business Manager work?',
      answer: 'Our AI Autonomous Business Manager uses advanced machine learning algorithms to analyze your business processes, identify optimization opportunities, and automatically implement improvements. It continuously learns and adapts to your business needs.'
    },
    {
      category: 'ai-services',
      question: 'What quantum computing services do you offer?',
      answer: 'We offer quantum neural network platforms, quantum financial trading solutions, and quantum cloud infrastructure services. These cutting-edge technologies provide unprecedented computational power for complex problem-solving.'
    },
    {
      category: 'technical',
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes, we provide round-the-clock technical support for all our enterprise clients. Our dedicated support team is available via phone, email, and our support portal to ensure your systems run smoothly.'
    },
    {
      category: 'technical',
      question: 'What cybersecurity measures do you implement?',
      answer: 'We implement enterprise-grade cybersecurity including SOC2 compliance automation, advanced threat detection, AI-powered security monitoring, and comprehensive security audits to protect your data and systems.'
    },
    {
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. Contact our sales team for a customized quote based on your specific needs and requirements.'
    },
    {
      category: 'account',
      question: 'How do I manage my account and services?',
      answer: 'You can manage your account through our client portal where you can view service status, access documentation, submit support tickets, and manage billing. Our team will provide you with access credentials upon service activation.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      contact: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: EnvelopeIcon,
      contact: 'support@ziontechgroup.com',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help from our AI assistant',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available 24/7',
      href: '#'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: DocumentTextIcon,
      href: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: VideoCameraIcon,
      href: '/webinars'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and solutions',
      icon: BookOpenIcon,
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, access our knowledge base, and get the support you need to succeed with Zion Tech Group.
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
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  {method.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.href}
                  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  Access Resource
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
