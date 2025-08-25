import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  PlayCircle,
  Users,
  Settings,
  Shield,
  Brain,
  Cloud,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Learn the basics and get up and running quickly'
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Everything about our AI and autonomous systems'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'Security, compliance, and threat protection'
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500',
      description: 'Cloud, networking, and infrastructure management'
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      icon: Settings,
      color: 'from-red-500 to-pink-500',
      description: 'Account management and billing information'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      description: 'Technical issues and troubleshooting'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI services?",
      answer: "Getting started is simple! Schedule a consultation with our team, discuss your needs, and we'll create a customized implementation plan. We offer free initial assessments and pilot programs to ensure the right fit for your organization.",
      category: 'getting-started'
    },
    {
      id: 2,
      question: "What makes your AI autonomous systems different from traditional automation?",
      answer: "Our AI autonomous systems go beyond simple automation by learning, adapting, and making intelligent decisions. They continuously improve performance, handle complex scenarios, and operate independently while maintaining human oversight and control.",
      category: 'ai-services'
    },
    {
      id: 3,
      question: "How secure are your quantum neural network platforms?",
      answer: "Our quantum neural networks implement multiple layers of security including quantum-resistant encryption, real-time threat detection, and comprehensive audit trails. We maintain SOC2 compliance and follow industry best practices for data protection.",
      category: 'cybersecurity'
    },
    {
      id: 4,
      question: "What kind of support do you provide after implementation?",
      answer: "We provide 24/7 technical support, regular maintenance updates, performance monitoring, and dedicated account managers. Our support includes training, documentation, and ongoing optimization to ensure maximum ROI.",
      category: 'technical-support'
    },
    {
      id: 5,
      question: "Can your solutions integrate with our existing systems?",
      answer: "Yes! Our solutions are designed with open architecture and can integrate with virtually any existing system. We provide APIs, connectors, and custom integration services to ensure seamless operation with your current infrastructure.",
      category: 'infrastructure'
    },
    {
      id: 6,
      question: "What is the typical ROI timeline for your services?",
      answer: "Most clients see measurable ROI within 3-6 months, with full ROI typically achieved within 12-18 months. Our AI solutions often deliver 200-400% ROI through efficiency gains, cost savings, and revenue optimization.",
      category: 'getting-started'
    },
    {
      id: 7,
      question: "Do you offer training for our team?",
      answer: "Absolutely! We provide comprehensive training programs including hands-on workshops, certification courses, and ongoing education. Our training covers system operation, best practices, and advanced features to maximize your team's capabilities.",
      category: 'technical-support'
    },
    {
      id: 8,
      question: "What compliance standards do you support?",
      answer: "We support major compliance standards including SOC2, HIPAA, GDPR, PCI-DSS, and industry-specific regulations. Our compliance automation tools help maintain continuous compliance with minimal manual effort.",
      category: 'cybersecurity'
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Autonomous Systems",
      duration: "15 min",
      type: "Video",
      category: "ai-services",
      icon: PlayCircle
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices",
      duration: "20 min",
      type: "Guide",
      category: "cybersecurity",
      icon: FileText
    },
    {
      id: 3,
      title: "Cloud Infrastructure Setup",
      duration: "25 min",
      type: "Video",
      category: "infrastructure",
      icon: PlayCircle
    },
    {
      id: 4,
      title: "Account Management Guide",
      duration: "10 min",
      type: "Guide",
      category: "account-billing",
      icon: FileText
    }
  ];

  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory 
      ? faqs.filter(faq => faq.category === activeCategory)
      : faqs;

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      color: "from-blue-500 to-cyan-500",
      available: true
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      action: "+1 302 464 0950",
      color: "from-green-500 to-emerald-500",
      available: true
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "kleber@ziontechgroup.com",
      color: "from-purple-500 to-pink-500",
      available: true
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session",
      icon: Video,
      action: "Schedule Call",
      color: "from-orange-500 to-yellow-500",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Help You?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group's solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">500+</span> Help Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">24/7</span> Support Available
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="text-cyan-400 font-semibold">99%</span> Satisfaction Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the help you need organized by topic and service area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id ? 'border-cyan-400/50 bg-cyan-500/10' : ''
                }`}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                  {activeCategory === category.id ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions about our services and solutions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learn & Explore
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Step-by-step guides and video tutorials to help you master our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <tutorial.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <span className="text-sm text-gray-400">{tutorial.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tutorial.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{tutorial.duration}</p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200">
                  Start Learning →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive library of resources to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive technical documentation, API references, and implementation guides.
              </p>
              <Link
                to="/documentation"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Browse Documentation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">
                Connect with other users, share experiences, and get help from the community.
              </p>
              <Link
                to="/community"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Join Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <Video className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Video Library</h3>
              <p className="text-gray-300 mb-6">
                Watch tutorials, webinars, and product demos to master our solutions.
              </p>
              <Link
                to="/videos"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Watch Videos
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
