import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<Set<string>>(new Set(['general']));
  const [activeTab, setActiveTab] = useState('help');

  const toggleFaq = (faqId: string) => {
    const newExpanded = new Set(expandedFaq);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedFaq(newExpanded);
  };

  const supportChannels = [
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
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
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

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer a comprehensive range of services including AI solutions, IT services, cloud solutions, digital transformation, and custom software development. Our services are designed to help businesses leverage cutting-edge technology to achieve their goals.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! You can contact us through our website, call us directly, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable and can be customized for any industry-specific requirements.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Zap,
      questions: [
        {
          question: 'How do I integrate your APIs into my application?',
          answer: 'We provide comprehensive API documentation, SDKs for multiple programming languages, and integration guides. Our technical team can also assist with custom integrations and provide hands-on support during implementation.'
        },
        {
          question: 'What security measures do you have in place?',
          answer: 'We implement enterprise-grade security including OAuth 2.0, JWT tokens, rate limiting, and comprehensive monitoring. All data is encrypted in transit and at rest, and we maintain SOC 2 compliance.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we offer comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: Shield,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. Invoices are sent monthly or as per your agreement.'
        },
        {
          question: 'Can I cancel my subscription at any time?',
          answer: 'Yes, you can cancel your subscription at any time. We offer flexible terms and will work with you to ensure a smooth transition. Some services may have minimum commitment periods.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day satisfaction guarantee for most services. If you\'re not satisfied with our service, we\'ll work to resolve the issue or provide a refund as appropriate.'
        }
      ]
    }
  ];

  const helpResources = [
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

  const filteredFaqs = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const tabs = [
    { id: 'help', label: 'Help & Resources', icon: HelpCircle },
    { id: 'contact', label: 'Contact Support', icon: MessageSquare },
    { id: 'faq', label: 'FAQ', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help you succeed. Get the support you need through multiple channels, 
            comprehensive resources, and expert assistance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </motion.div>

      {/* Support Channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.a
                key={channel.title}
                href={channel.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/50"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300">Response: {channel.responseTime}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300">Available: {channel.availability}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Help & Resources Tab */}
          {activeTab === 'help' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Help Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {helpResources.map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href={resource.href}
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
          )}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our support team is committed to ensuring your success with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <MessageSquare className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                View Documentation
                <BookOpen className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;