import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, Search, BookOpen, MessageCircle, Phone, 
  Mail, FileText, Video, Users, Lightbulb, ArrowRight,
  ChevronDown, ChevronRight, CheckCircle, AlertCircle,
  Info, ExternalLink, Download, Play, Star, Clock, Cloud, Shield
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      color: 'from-blue-500 to-indigo-500',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          readTime: '5 min read',
          difficulty: 'Beginner',
          tags: ['Setup', 'First Steps', 'Quick Start']
        },
        {
          title: 'Account Setup & Configuration',
          description: 'Complete guide to setting up your account and initial configuration',
          readTime: '10 min read',
          difficulty: 'Beginner',
          tags: ['Account', 'Configuration', 'Setup']
        },
        {
          title: 'First Project Creation',
          description: 'Learn how to create your first AI project or service deployment',
          readTime: '8 min read',
          difficulty: 'Beginner',
          tags: ['Projects', 'Creation', 'First Steps']
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Lightbulb,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'AI Business Intelligence Setup',
          description: 'Configure and deploy AI-powered business intelligence solutions',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['AI', 'Business Intelligence', 'Analytics']
        },
        {
          title: 'Machine Learning Model Training',
          description: 'Train and deploy custom machine learning models',
          readTime: '20 min read',
          difficulty: 'Advanced',
          tags: ['Machine Learning', 'Training', 'Models']
        },
        {
          title: 'AI Content Generation',
          description: 'Use AI tools for content creation and marketing automation',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['Content Generation', 'Marketing', 'Automation']
        }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        {
          title: 'Cloud Deployment Guide',
          description: 'Deploy applications to cloud infrastructure with best practices',
          readTime: '18 min read',
          difficulty: 'Intermediate',
          tags: ['Cloud', 'Deployment', 'Infrastructure']
        },
        {
          title: 'DevOps Pipeline Setup',
          description: 'Configure CI/CD pipelines for automated deployment',
          readTime: '25 min read',
          difficulty: 'Advanced',
          tags: ['DevOps', 'CI/CD', 'Automation']
        },
        {
          title: 'Cost Optimization Strategies',
          description: 'Optimize cloud costs and implement FinOps best practices',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['Cost Optimization', 'FinOps', 'Best Practices']
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        {
          title: 'Security Best Practices',
          description: 'Implement security measures to protect your data and applications',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['Security', 'Best Practices', 'Data Protection']
        },
        {
          title: 'Compliance Framework Setup',
          description: 'Configure compliance frameworks for your industry requirements',
          readTime: '20 min read',
          difficulty: 'Advanced',
          tags: ['Compliance', 'Frameworks', 'Regulations']
        },
        {
          title: 'Access Control & Permissions',
          description: 'Manage user access and implement role-based permissions',
          readTime: '10 min read',
          difficulty: 'Intermediate',
          tags: ['Access Control', 'Permissions', 'User Management']
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        {
          title: 'Common Issues & Solutions',
          description: 'Quick fixes for frequently encountered problems',
          readTime: '8 min read',
          difficulty: 'Beginner',
          tags: ['Troubleshooting', 'Common Issues', 'Solutions']
        },
        {
          title: 'Performance Optimization',
          description: 'Identify and resolve performance bottlenecks',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['Performance', 'Optimization', 'Bottlenecks']
        },
        {
          title: 'Error Code Reference',
          description: 'Comprehensive guide to error codes and their meanings',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['Error Codes', 'Reference', 'Debugging']
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply create an account, choose your service plan, and follow our step-by-step setup guide. Our team is also available to help with onboarding and configuration.',
      category: 'Getting Started'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive suite of AI services including business intelligence, content generation, machine learning model training, natural language processing, and computer vision solutions.',
      category: 'AI Services'
    },
    {
      question: 'Is my data secure with Zion Tech Group?',
      answer: 'Absolutely. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'Security'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, we offer 24/7 technical support through multiple channels including live chat, email, phone, and our comprehensive help center. Premium support plans are also available.',
      category: 'Support'
    },
    {
      question: 'Can I integrate Zion Tech Group services with my existing systems?',
      answer: 'Yes, our services are designed for easy integration with existing systems through APIs, SDKs, and standard protocols. We also offer custom integration services.',
      category: 'Integration'
    },
    {
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. Our solutions are designed to be platform-agnostic.',
      category: 'Cloud Services'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-purple-500',
      availability: '24/7',
      responseTime: 'Instant',
      href: '/chat'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-yellow-500 to-orange-500',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: 'tel:+1-555-123-4567'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      availability: '24/7',
      responseTime: 'Varies',
      href: '/community'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of Zion Tech Group's powerful AI and technology solutions
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <HelpCircle className="w-5 h-5" />
              <span>24/7 Support</span>
              <span>•</span>
              <BookOpen className="w-5 h-5" />
              <span>Comprehensive Guides</span>
              <span>•</span>
              <Users className="w-5 h-5" />
              <span>Expert Help</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our organized help resources by category to find exactly what you need
            </p>
          </motion.div>

          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === category.id ? null : category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.articles.length} articles</p>
                    </div>
                  </div>
                  {expandedSection === category.id ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSection === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.articles.map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                              {article.title}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                          </div>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {article.readTime}
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded">
                              {article.difficulty}
                            </span>
                          </div>
                        </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get help when you need it most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-xs text-gray-400 mb-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span>{channel.responseTime}</span>
                  </div>
                </div>
                <a
                  href={channel.href}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Help
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about our services and platform
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === `faq-${index}` ? null : `faq-${index}`)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <span className="text-sm text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                  {expandedSection === `faq-${index}` ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSection === `faq-${index}` && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore more learning materials and support options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 text-center">Documentation</h3>
              <p className="text-gray-300 text-sm text-center mb-4">
                Comprehensive technical documentation and API references
              </p>
              <a
                href="/documentation"
                className="block text-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Browse Docs →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 text-center">Video Tutorials</h3>
              <p className="text-gray-300 text-sm text-center mb-4">
                Step-by-step video guides and tutorials
              </p>
              <a
                href="/tutorials"
                className="block text-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Watch Videos →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 text-center">Community</h3>
              <p className="text-gray-300 text-sm text-center mb-4">
                Connect with other users and share solutions
              </p>
              <a
                href="/community"
                className="block text-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="/chat"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
