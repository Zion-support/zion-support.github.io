import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BookOpen, MessageCircle, Phone, Mail, 
  Video, FileText, Users, Globe, Zap, Brain, Shield,
  Cloud, Code, ArrowRight, CheckCircle, Clock, Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min' },
        { title: 'Account Setup', description: 'Create and configure your account', readTime: '3 min' },
        { title: 'First Project', description: 'Create your first AI project', readTime: '7 min' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'AI Model Training', description: 'Train custom AI models', readTime: '10 min' },
        { title: 'API Integration', description: 'Integrate AI services into your apps', readTime: '8 min' },
        { title: 'Model Deployment', description: 'Deploy models to production', readTime: '12 min' }
      ]
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        { title: 'Infrastructure Setup', description: 'Set up cloud infrastructure', readTime: '15 min' },
        { title: 'Scaling Resources', description: 'Scale your applications', readTime: '6 min' },
        { title: 'Monitoring & Alerts', description: 'Monitor system performance', readTime: '8 min' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Security Best Practices', description: 'Secure your applications', readTime: '12 min' },
        { title: 'Compliance Guidelines', description: 'Meet regulatory requirements', readTime: '10 min' },
        { title: 'Access Control', description: 'Manage user permissions', readTime: '6 min' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Plans',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Pricing Plans', description: 'Choose the right plan for you', readTime: '4 min' },
        { title: 'Billing Management', description: 'Manage your billing account', readTime: '5 min' },
        { title: 'Usage Analytics', description: 'Track your resource usage', readTime: '3 min' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Common Issues', description: 'Solutions to frequent problems', readTime: '8 min' },
        { title: 'Error Codes', description: 'Understand error messages', readTime: '6 min' },
        { title: 'Performance Issues', description: 'Optimize your applications', readTime: '10 min' }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Train Your First AI Model',
      description: 'Step-by-step guide to training AI models with our platform',
      category: 'AI Services',
      readTime: '10 min read',
      views: '2.5k'
    },
    {
      title: 'Setting Up Cloud Infrastructure',
      description: 'Complete guide to setting up scalable cloud infrastructure',
      category: 'Cloud Platform',
      readTime: '15 min read',
      views: '1.8k'
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security practices for your applications',
      category: 'Security',
      readTime: '12 min read',
      views: '1.2k'
    },
    {
      title: 'API Integration Guide',
      description: 'Integrate our AI services into your applications',
      category: 'AI Services',
      readTime: '8 min read',
      views: '980'
    }
  ];

  const supportChannels = [
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and API references',
      href: '/documentation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides',
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with other developers',
      href: '/community',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our team',
      href: '/chat',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredCategories = helpCategories.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.id === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group's AI, cloud, and technology services. Find answers, documentation, and contact our support team."
        keywords="help center, support, documentation, tutorials, FAQ, customer service"
        canonicalUrl="https://ziontechgroup.com/help"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How Can We
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Help You?
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Find answers to your questions, explore our documentation, and get the support you need 
            to make the most of Zion Tech Group's innovative solutions.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the help and support you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <a
                  href={channel.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most viewed help articles and guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views} views
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Read Article
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse help articles organized by topic and category.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{article.title}</h4>
                        <p className="text-gray-400 text-sm">{article.description}</p>
                      </div>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/documentation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;
