import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpenIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI Solutions', icon: CpuChipIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon, color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud Services', icon: CloudIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'general', name: 'General', icon: QuestionMarkCircleIcon, color: 'from-gray-500 to-slate-500' }
  ];

  const faqs = [
    {
      id: 1,
      question: "What AI solutions does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions including machine learning platforms, natural language processing, computer vision, predictive analytics, and autonomous systems. Our AI solutions are tailored for enterprise needs and can be customized for specific industry requirements.",
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Enterprise']
    },
    {
      id: 2,
      question: "How secure are your cloud services?",
      answer: "Our cloud services implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC2, ISO 27001, and GDPR. We also provide 24/7 security monitoring.",
      category: 'security',
      tags: ['Security', 'Cloud', 'Compliance']
    },
    {
      id: 3,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Small projects typically take 4-8 weeks, medium projects 8-16 weeks, and large enterprise solutions 16-32 weeks. We provide detailed project plans and regular updates throughout the process.",
      category: 'general',
      tags: ['Project Management', 'Timeline', 'Planning']
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, training, and 24/7 technical support. We also provide monitoring, performance optimization, and continuous improvement services to ensure your solution remains effective.",
      category: 'general',
      tags: ['Support', 'Maintenance', 'Training']
    },
    {
      id: 5,
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing enterprise systems. Our solutions are designed with open APIs and can integrate with popular platforms like Salesforce, SAP, Microsoft Dynamics, and custom legacy systems.",
      category: 'general',
      tags: ['Integration', 'APIs', 'Legacy Systems']
    },
    {
      id: 6,
      question: "What quantum computing services do you offer?",
      answer: "Our quantum computing services include quantum algorithm development, quantum-safe cryptography, quantum simulation platforms, and hybrid quantum-classical computing solutions. We work with leading quantum hardware providers to deliver cutting-edge solutions.",
      category: 'ai',
      tags: ['Quantum Computing', 'Algorithms', 'Cryptography']
    },
    {
      id: 7,
      question: "How do you ensure data privacy and compliance?",
      answer: "We implement comprehensive data protection measures including data encryption, access controls, audit logging, and compliance frameworks. Our solutions are designed to meet regulatory requirements across industries and jurisdictions.",
      category: 'security',
      tags: ['Data Privacy', 'Compliance', 'Encryption']
    },
    {
      id: 8,
      question: "What cloud deployment options are available?",
      answer: "We offer flexible cloud deployment options including public cloud (AWS, Azure, GCP), private cloud, hybrid cloud, and multi-cloud strategies. We can also deploy on-premises or in edge computing environments based on your requirements.",
      category: 'cloud',
      tags: ['Cloud Deployment', 'Multi-cloud', 'Edge Computing']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <QuestionMarkCircleIcon className="w-4 h-4 mr-2" />
              Support Center
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions, explore our documentation, and get the support you need
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Documentation",
                description: "Browse our comprehensive guides and API references",
                icon: DocumentTextIcon,
                color: "from-blue-500 to-indigo-600",
                action: "View Docs"
              },
              {
                title: "Video Tutorials",
                description: "Learn through step-by-step video guides",
                icon: VideoCameraIcon,
                color: "from-purple-500 to-pink-600",
                action: "Watch Videos"
              },
              {
                title: "Training",
                description: "Access our training programs and certifications",
                icon: AcademicCapIcon,
                color: "from-green-500 to-emerald-600",
                action: "Start Learning"
              },
              {
                title: "Contact Support",
                description: "Get in touch with our technical experts",
                icon: ChatBubbleLeftRightIcon,
                color: "from-cyan-500 to-blue-600",
                action: "Contact Us"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <button className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}>
                    {item.action}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${
                    expandedFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 mb-4">{faq.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is here to help you succeed. Get in touch with us today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <PhoneIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Phone Support</h3>
                <p className="text-gray-400 text-sm">+1 (302) 464-0950</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <EnvelopeIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Email Support</h3>
                <p className="text-gray-400 text-sm">support@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                <p className="text-gray-400 text-sm">Available 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
