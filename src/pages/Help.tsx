import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Building, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  TrendingUp,
  Settings,
  Download,
  Play,
  Calendar,
  MapPin
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const helpCategories = [
    {
      id: 'general',
      name: 'General Help',
      description: 'Basic questions about our services and company',
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-600',
      articleCount: 45
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Help with AI and machine learning solutions',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      articleCount: 67
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps support',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      articleCount: 52
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Cybersecurity and regulatory compliance help',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      articleCount: 38
    },
    {
      id: 'edge-iot',
      name: 'Edge & IoT',
      description: 'Edge computing and IoT solutions support',
      icon: Zap,
      color: 'from-teal-500 to-green-600',
      articleCount: 29
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      description: 'Quantum computing and emerging tech support',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-600',
      articleCount: 23
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form, call us at +1 302 464 0950, or email us at info@ziontechgroup.com. Our experts will schedule a consultation to understand your needs and recommend the best solutions.',
      category: 'general',
      tags: ['getting-started', 'consultation', 'contact']
    },
    {
      id: 2,
      question: 'What AI services do you offer for enterprises?',
      answer: 'We offer a comprehensive suite of AI services including AI Business Intelligence, AI Workflow Orchestrator, AI Data Governance, AI Customer Success Platform, AI Sales Copilot, AI Compliance Assistant, AI Auto Email Responder, and LLM Content Studio. Each solution is designed to address specific enterprise challenges.',
      category: 'ai-services',
      tags: ['AI', 'enterprise', 'solutions']
    },
    {
      id: 3,
      question: 'How secure are your cloud and DevOps solutions?',
      answer: 'Security is our top priority. We implement industry-leading security practices including zero-trust architecture, end-to-end encryption, regular security audits, and compliance with major regulatory frameworks like SOC 2, ISO 27001, and GDPR.',
      category: 'cloud-devops',
      tags: ['security', 'compliance', 'cloud']
    },
    {
      id: 4,
      question: 'Do you provide 24/7 support for critical systems?',
      answer: 'Yes, we offer 24/7 support for critical systems through our premium support plans. This includes round-the-clock monitoring, immediate response to critical issues, and dedicated support engineers for enterprise clients.',
      category: 'general',
      tags: ['support', '24/7', 'enterprise']
    },
    {
      id: 5,
      question: 'What is the typical implementation timeline for AI solutions?',
      answer: 'Implementation timelines vary based on complexity and scope. Simple AI integrations can take 4-6 weeks, while comprehensive enterprise AI transformations typically take 3-6 months. We provide detailed project timelines during the planning phase.',
      category: 'ai-services',
      tags: ['implementation', 'timeline', 'AI']
    },
    {
      id: 6,
      question: 'How do you handle data privacy and compliance?',
      answer: 'We follow strict data privacy protocols and maintain compliance with major regulations including GDPR, CCPA, HIPAA, and SOX. All data is encrypted in transit and at rest, and we provide detailed compliance reports for our clients.',
      category: 'security',
      tags: ['privacy', 'compliance', 'GDPR']
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-600',
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-purple-500 to-pink-600',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      name: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      icon: Mail,
      color: 'from-indigo-500 to-purple-600',
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      name: 'Knowledge Base',
      description: 'Browse our extensive documentation and guides',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      availability: '24/7',
      responseTime: 'Instant',
      action: 'Browse Articles'
    }
  ];

  const quickActions = [
    {
      name: 'Download Documentation',
      description: 'Access our latest technical documentation and guides',
      icon: Download,
      color: 'from-blue-500 to-cyan-600',
      action: 'Download'
    },
    {
      name: 'Watch Tutorials',
      description: 'Learn through our video tutorials and webinars',
      icon: Play,
      color: 'from-purple-500 to-pink-600',
      action: 'Watch'
    },
    {
      name: 'Schedule Training',
      description: 'Book personalized training sessions for your team',
      icon: Calendar,
      color: 'from-indigo-500 to-purple-600',
      action: 'Schedule'
    },
    {
      name: 'Request Onsite Support',
      description: 'Get on-site technical support and consultation',
      icon: MapPin,
      color: 'from-teal-500 to-green-600',
      action: 'Request'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'support@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    emergency: '+1 302 464 0951'
  };

  const handleFAQToggle = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const filteredSearchResults = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to FAQs, access documentation, and connect with our support team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, access helpful resources, and get the support you need 
              to make the most of our technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && filteredSearchResults.length > 0 && (
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Search Results for "{searchQuery}"
              </h2>
              <div className="space-y-4">
                {filteredSearchResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                    onClick={() => handleFAQToggle(result.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {result.question}
                      </h3>
                      {expandedFAQ === result.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    {expandedFAQ === result.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-gray-300 mb-3">{result.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {result.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Help by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find help articles and resources organized by service category for easy navigation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id 
                    ? 'border-cyan-400/50 bg-slate-700/50' 
                    : 'border-slate-700/50 hover:border-cyan-400/50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm">{category.articleCount} articles</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to the most common questions about our services and solutions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  onClick={() => handleFAQToggle(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-slate-700/50"
                  >
                    <p className="text-gray-300 mt-4 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${channel.color} rounded-full flex items-center justify-center`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{channel.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div>Available: {channel.availability}</div>
                  <div>Response: {channel.responseTime}</div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access helpful resources and tools to get you started quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{action.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{action.description}</p>
                <button className="w-full py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors">
                  {action.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for personalized support and assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
              <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">{contactInfo.email}</p>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Office Location</h3>
              <p className="text-gray-300 mb-4 text-sm">{contactInfo.address}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View on Map
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Our support team is here to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}