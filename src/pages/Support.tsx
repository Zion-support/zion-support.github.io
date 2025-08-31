import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  BookOpen,
  Video,
  FileText,
  Users,
  Zap,
  Shield,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
export default function Support() {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');
  const supportCategories = [
    {
      id: 'help',
      name: 'Help Center',
      icon: HelpCircle,
      description: 'Find answers to common questions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'contact',
      name: 'Contact Support',
      icon: MessageCircle,
      description: 'Get in touch with our team',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: BookOpen,
      description: 'Documentation and guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'status',
      name: 'System Status',
      icon: Zap,
      description: 'Check service status',
      color: 'from-orange-500 to-red-500'
    }
  ];
  const helpTopics = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      responseTime: '< 2 minutes',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500',
      href: '#'
    },
    {
      category: 'AI Services',
      icon: Brain,
      topics: [
        { title: 'AI Business Intelligence setup', href: '/docs/ai-business-intelligence' },
        { title: 'AI Healthcare Analytics configuration', href: '/docs/ai-healthcare' },
        { title: 'AI Legal Document Analysis', href: '/docs/ai-legal' },
        { title: 'AI Supply Chain Optimization', href: '/docs/ai-supply-chain' }
      ]
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      topics: [
        { title: 'Cloud DevOps setup', href: '/docs/cloud-devops' },
        { title: 'IT Infrastructure configuration', href: '/docs/it-infrastructure' },
        { title: 'Digital Twin implementation', href: '/docs/digital-twin' },
        { title: 'IoT Edge Computing setup', href: '/docs/iot-edge' }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      topics: [
        { title: 'Security best practices', href: '/docs/security' },
        { title: 'Compliance requirements', href: '/docs/compliance' },
        { title: 'Data protection guidelines', href: '/docs/data-protection' },
        { title: 'Access control setup', href: '/docs/access-control' }
      ]
    }
  ];
  const contactMethods = [
    {
      type: 'Phone Support',
      icon: Phone,
      responseTime: '< 5 minutes',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'from-blue-500 to-cyan-500',
      href: 'tel:+1-800-ZION-TECH'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      responseTime: '< 4 hours',
      availability: '24/7',
      color: 'from-purple-500 to-pink-500',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive help articles',
      icon: BookOpen,
      responseTime: 'Instant',
      availability: '24/7',
      color: 'from-orange-500 to-red-500',
      href: '/docs'
    }
  ];
  const supportResources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: BookOpen,
      href: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      href: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API Playground',
      description: 'Test our APIs interactively',
      icon: Zap,
      href: '/api',
      color: 'from-orange-500 to-red-500'
    }
  ];
  const faqItems = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We prioritize support based on urgency. Emergency issues get immediate attention, while general inquiries are typically resolved within 2-4 hours during business hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 emergency support for critical issues. Our team is always available to handle urgent system problems and outages.'
    },
    {
      question: 'What types of training do you offer?',
      answer: 'We offer comprehensive training programs including technical training, user adoption programs, and ongoing support to ensure your team gets the most out of our solutions.'
    },
    {
      question: 'How do you handle data security and compliance?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures and maintain compliance with industry standards including SOC 2, GDPR, and HIPAA where applicable.'
    }
  ];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="container-responsive py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Search
            </button>
          </form>
        </motion.div>
      </div>
      {/* Support Categories */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(category.id)}
              className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                activeTab === category.id
                  ? 'bg-slate-700/50 border-cyan-400/50'
                  : 'bg-slate-800/30 border-slate-700/30 hover:border-cyan-400/30'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="container-responsive pb-16">
        {/* Help Center Tab */}
        {activeTab === 'help' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Help Center</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions and learn how to use our services effectively
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {helpTopics.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        to={topic.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {topic.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* FAQ Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{resource.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{resource.description}</p>
                  </motion.a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-gray-300 mb-6">
                  Our support team is ready to help you with any questions or issues you may have.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <MessageSquare className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          )}

          {/* Contact Support Tab */}
          {activeTab === 'contact' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Support</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">Live Chat</h4>
                          <p className="text-gray-400">Available 24/7</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Start a conversation with our support team for immediate assistance.
                      </p>
                      <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                        Start Chat
                      </button>
                    </div>

                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">Phone Support</h4>
                          <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Call us directly for complex technical issues or urgent matters.
                      </p>
                      <a
                        href="tel:+1-800-ZION-TECH"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        +1 (800) ZION-TECH
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">Email Support</h4>
                          <p className="text-gray-400">Response within 4 hours</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Send us a detailed message for non-urgent inquiries or documentation requests.
                      </p>
                      <a
                        href="mailto:support@ziontechgroup.com"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        support@ziontechgroup.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Support Request Form</h3>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Subject</label>
                        <select className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Billing Question</option>
                          <option>Feature Request</option>
                          <option>Bug Report</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="Describe your issue or question..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto">
                {filteredFaqs.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="mb-8"
                  >
                    <button
                      onClick={() => toggleFaq(category.id)}
                      className="w-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                            <category.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>
                        {expandedFaq.has(category.id) ? (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedFaq.has(category.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        {category.questions.map((faq, faqIndex) => (
                          <motion.div
                            key={faqIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: faqIndex * 0.1 }}
                            className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                          >
                            <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                            <p className="text-gray-300">{faq.answer}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {/* Contact Support Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Multiple ways to get in touch with our support team for personalized assistance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.type}</h3>
                  <p className="text-lg text-cyan-400 mb-2">{method.details}</p>
                  <p className="text-gray-300 mb-3">{method.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{method.response}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Documentation
                <BookOpen className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}
        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Support Resources</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access comprehensive documentation, tutorials, and learning resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Link to={resource.href} className="block">
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <div className="flex items-center text-cyan-400 font-medium group">
                      <span>Access Resource</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* System Status Tab */}
        {activeTab === 'status' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">System Status</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Check the current status of all our services and systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AI Services', status: 'operational', icon: Brain },
                { name: 'Cloud Infrastructure', status: 'operational', icon: Cloud },
                { name: 'Security Systems', status: 'operational', icon: Shield },
                { name: 'Data Analytics', status: 'operational', icon: TrendingUp },
                { name: 'API Services', status: 'operational', icon: Globe },
                { name: 'Support Portal', status: 'operational', icon: HelpCircle }
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400 font-medium">Operational</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  <p className="text-sm text-gray-400 mt-2">All systems operational</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/status"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Detailed Status
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Support;