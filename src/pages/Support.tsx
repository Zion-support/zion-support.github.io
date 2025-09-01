import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, MessageCircle, Phone, Mail, MapPin, ArrowRight, Star, Shield, Brain, Cloud, Zap, Users, CheckCircle, Clock, FileText, Video, BookOpen, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Support() {
  const [openCategories, setOpenCategories] = useState<string[]>(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const supportCategories = [
    {
      key: 'getting-started',
      name: 'Getting Started',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with our platform in minutes',
          type: 'guide',
          link: '/docs/quick-start'
        },
        {
          title: 'First Steps',
          description: 'Essential setup and configuration steps',
          type: 'tutorial',
          link: '/docs/first-steps'
        },
        {
          title: 'Account Setup',
          description: 'Complete your account configuration',
          type: 'guide',
          link: '/docs/account-setup'
        }
      ]
    },
    {
      key: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Model Training',
          description: 'Learn how to train and deploy AI models',
          type: 'tutorial',
          link: '/docs/ai-training'
        },
        {
          title: 'Data Preparation',
          description: 'Prepare your data for AI analysis',
          type: 'guide',
          link: '/docs/data-prep'
        },
        {
          title: 'Model Deployment',
          description: 'Deploy AI models to production',
          type: 'tutorial',
          link: '/docs/model-deployment'
        }
      ]
    },
    {
      key: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Infrastructure Setup',
          description: 'Set up cloud infrastructure and services',
          type: 'guide',
          link: '/docs/infrastructure'
        },
        {
          title: 'CI/CD Pipelines',
          description: 'Configure continuous integration and deployment',
          type: 'tutorial',
          link: '/docs/cicd'
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Set up monitoring and alerting systems',
          type: 'guide',
          link: '/docs/monitoring'
        }
      ]
    },
    {
      key: 'troubleshooting',
      name: 'Troubleshooting',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'Common Issues',
          description: 'Solutions to frequently encountered problems',
          type: 'guide',
          link: '/docs/common-issues'
        },
        {
          title: 'Error Codes',
          description: 'Understanding error messages and codes',
          type: 'reference',
          link: '/docs/error-codes'
        },
        {
          title: 'Performance Issues',
          description: 'Resolve performance and optimization problems',
          type: 'guide',
          link: '/docs/performance'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      responseTime: '2-5 minutes',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500',
      action: 'Start Chat',
      link: '/chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      responseTime: 'Immediate',
      availability: 'Business Hours',
      color: 'from-green-500 to-emerald-500',
      action: 'Call Now',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      responseTime: '4-8 hours',
      availability: '24/7',
      color: 'from-purple-500 to-pink-500',
      action: 'Send Email',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      responseTime: 'Instant',
      availability: '24/7',
      color: 'from-orange-500 to-red-500',
      action: 'Browse Docs',
      link: '/documentation'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  const filteredCategories = supportCategories.filter(category =>
    searchQuery === '' || 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.some(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
              <LifeBuoy className="w-4 h-4" />
              Support Center
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {' '}Help
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need to succeed with our AI-powered solutions. 
              From documentation to live assistance, we're here to help you every step of the way.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the support channel that works best for you. 
              We offer multiple ways to get the help you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Response: {channel.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Available: {channel.availability}</span>
                  </div>
                </div>

                <Link
                  to={channel.link}
                  className={`inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r ${channel.color} text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25`}
                >
                  {channel.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Help & Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find comprehensive guides, tutorials, and solutions organized by category. 
              Everything you need to succeed with our platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredCategories.map((category) => (
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
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  {openCategories.includes(category.key) ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {openCategories.includes(category.key) && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-slate-600/30 rounded-xl p-4 hover:bg-slate-600/50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-slate-500/50 rounded-lg flex items-center justify-center flex-shrink-0">
                              {item.type === 'guide' && <FileText className="w-4 h-4 text-blue-400" />}
                              {item.type === 'tutorial' && <Video className="w-4 h-4 text-green-400" />}
                              {item.type === 'reference' && <BookOpen className="w-4 h-4 text-purple-400" />}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                              <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                              <Link
                                to={item.link}
                                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                              >
                                Learn More
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Business Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Need personalized assistance? Our support team is here to help you 
              succeed with our AI-powered solutions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Support Hours</h4>
                      <p className="text-gray-400 text-sm">Eastern Standard Time</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{contactInfo.businessHours}</p>
                  <p className="text-sm text-gray-400">
                    For urgent issues outside business hours, please use our emergency support line 
                    or submit a ticket through our support portal.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
