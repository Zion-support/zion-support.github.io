import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
=======
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Search, 
  BookOpen, 
  Video, 
  Users, 
  Zap, 
  Shield, 
  Settings, 
  FileText, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  Star,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Database,
  Workflow,
  Target,
  Rocket,
  TrendingUp,
  BarChart3,
  Atom,
  Network,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Lightbulb,
  Star as StarIcon,
  HelpCircle,
  BarChart as BarChartIcon,
  ShoppingCart,
  ArrowRight,
  User,
  Building2,
  Globe,
  Eye
} from 'lucide-react';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { title: 'Welcome to Zion Tech Group', readTime: '3 min read' },
        { title: 'Setting up your first project', readTime: '5 min read' },
        { title: 'Understanding our platform', readTime: '4 min read' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      description: 'Everything you need to know about our AI solutions',
      articles: [
        { title: 'AI Platform Overview', readTime: '6 min read' },
        { title: 'Training Custom AI Models', readTime: '8 min read' },
        { title: 'AI Integration Guide', readTime: '7 min read' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Cloud deployment and infrastructure management',
      articles: [
        { title: 'Cloud Migration Guide', readTime: '10 min read' },
        { title: 'Infrastructure Scaling', readTime: '6 min read' },
        { title: 'Security Best Practices', readTime: '8 min read' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security features and best practices',
      articles: [
        { title: 'Security Overview', readTime: '5 min read' },
        { title: 'Compliance Guidelines', readTime: '7 min read' },
        { title: 'Threat Detection Setup', readTime: '6 min read' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: ShoppingCart,
      description: 'Manage your account and billing information',
      articles: [
        { title: 'Billing Overview', readTime: '4 min read' },
        { title: 'Payment Methods', readTime: '3 min read' },
        { title: 'Invoice Management', readTime: '5 min read' }
      ]
    },
    {
      id: 'api-integration',
      title: 'API & Integration',
      icon: Network,
      description: 'Integrate with our APIs and services',
      articles: [
        { title: 'API Documentation', readTime: '12 min read' },
        { title: 'Authentication Guide', readTime: '6 min read' },
        { title: 'Webhook Setup', readTime: '8 min read' }
      ]
    }
  ];
<<<<<<< HEAD

  const popularArticles = [
=======
  const helpTopics = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      title: 'How to get started with AI services',
      category: 'ai-services',
      readTime: '5 min read',
      views: 12450
    },
    {
      title: 'Cloud migration step-by-step guide',
      category: 'cloud-infrastructure',
      readTime: '10 min read',
      views: 9870
    },
    {
      title: 'Understanding our pricing structure',
      category: 'billing',
      readTime: '4 min read',
      views: 15620
    },
    {
      title: 'Security best practices for enterprises',
      category: 'cybersecurity',
      readTime: '8 min read',
      views: 11230
    }
  ];
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
<<<<<<< HEAD
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: 'Call Now',
=======
      details: '+1 302 464 0950',
      description: 'Available 24/7 for urgent issues',
      response: 'Immediate response',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Email Support',
      icon: Mail,
      details: 'kleber@ziontechgroup.com',
      description: 'General inquiries and non-urgent issues',
      response: 'Response within 2 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Emergency Support',
      icon: AlertCircle,
      details: '+1 302 464 0950',
      description: 'Critical system issues and outages',
      response: 'Immediate response',
      color: 'from-red-500 to-orange-500'
    },
    {
      type: 'Business Hours',
      icon: Clock,
      details: 'Monday - Friday, 9AM - 6PM EST',
      description: 'Standard business hours support',
      response: 'Response within 4 hours',
      color: 'from-green-500 to-teal-500'
    }
  ];
  const supportResources = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      href: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all services',
      icon: Video,
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
      href: '/community',
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    }
  ];
<<<<<<< HEAD

  const filteredCategories = supportCategories.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
=======
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              Support Center
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Get help with our AI, cloud, and technology solutions. Find answers to common questions, 
              learn best practices, and connect with our expert support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Quick Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
=======
      {/* Search Bar */}
      <div className="container-responsive py-8">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
<<<<<<< HEAD
          </div>
        </motion.div>
      </div>

      {/* Quick Help Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            How can we help you?
          </h2>
          <p className="text-zinc-300 text-center max-w-2xl mx-auto">
            Browse our support categories to find the information you need quickly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <p className="text-zinc-300 text-sm mb-6">
                {category.description}
              </p>

              <div className="space-y-3 mb-6">
                {category.articles.map((article, articleIndex) => (
                  <div key={articleIndex} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{article.title}</span>
                    <span className="text-zinc-500">{article.readTime}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                View All Articles
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
=======
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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{item.question}</h4>
                    <p className="text-gray-300">{item.answer}</p>
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
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
        {/* Resources Tab */}
        {activeTab === 'resources' && (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Popular Help Articles
            </h2>
            <p className="text-zinc-300 text-center max-w-2xl mx-auto">
              Most viewed and helpful articles from our support library
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                    {supportCategories.find(c => c.id === article.category)?.title}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views.toLocaleString()} views
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Still need help?
          </h2>
          <p className="text-zinc-300 text-center max-w-2xl mx-auto">
            Our expert support team is here to help you succeed. Choose your preferred contact method.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {method.title}
              </h3>
              
              <p className="text-zinc-300 text-sm mb-6">
                {method.description}
              </p>
              
              <button className={`w-full bg-gradient-to-r ${method.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Support Options */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              More Support Resources
            </h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Explore additional resources to help you get the most out of our platform
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: FileText, title: 'Documentation', description: 'Comprehensive guides and API docs' },
                { icon: Video, title: 'Video Tutorials', description: 'Step-by-step video guides' },
                { icon: User, title: 'Community Forum', description: 'Connect with other users' },
                { icon: GraduationCap, title: 'Training', description: 'Professional training programs' }
              ].map((resource, index) => (
=======
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Support Resources</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access comprehensive documentation, tutorials, and learning resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportResources.map((resource, index) => (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <resource.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-zinc-400 text-sm">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
<<<<<<< HEAD
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
=======
        )}
        {/* System Status Tab */}
        {activeTab === 'status' && (
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center"
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Explore our services and see how Zion Tech Group can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
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
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              <Link
                to="/services"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
