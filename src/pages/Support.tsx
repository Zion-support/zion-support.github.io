import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
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

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const popularArticles = [
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
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: 'Call Now',
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
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

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Explore our services and see how Zion Tech Group can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
