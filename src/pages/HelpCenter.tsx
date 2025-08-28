import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, HelpCircle, MessageCircle, Phone, Mail, Book, Video, 
  ArrowRight, CheckCircle, Star, Users, Target, Zap, Shield, Cloud, Bot
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'All Help', icon: <HelpCircle className="w-6 h-6" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-6 h-6" /> },
    { id: 'account', name: 'Account & Billing', icon: <Users className="w-6 h-6" /> },
    { id: 'technical', name: 'Technical Issues', icon: <Shield className="w-6 h-6" /> },
    { id: 'services', name: 'Services', icon: <Cloud className="w-6 h-6" /> },
    { id: 'ai', name: 'AI & ML', icon: <Bot className="w-6 h-6" /> },
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your First AI Project',
      description: 'Step-by-step guide to creating your first AI-powered application',
      category: 'getting-started',
      views: '2.4k',
      rating: 4.8,
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: 'Understanding API Rate Limits',
      description: 'Learn about API usage limits and how to optimize your requests',
      category: 'technical',
      views: '1.8k',
      rating: 4.7,
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Essential tips for migrating your infrastructure to the cloud',
      category: 'services',
      views: '1.5k',
      rating: 4.6,
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: 'Managing Team Access & Permissions',
      description: 'Configure user roles and access controls for your team',
      category: 'account',
      views: '1.2k',
      rating: 4.5,
      icon: <Users className="w-8 h-8" />
    }
  ];

  const helpSections = [
    {
      title: 'Getting Started',
      description: 'New to Zion Tech Group? Start here',
      articles: [
        { name: 'Account Setup Guide', href: '#', description: 'Create and configure your account' },
        { name: 'First Project Tutorial', href: '#', description: 'Build your first AI application' },
        { name: 'Service Integration', href: '#', description: 'Connect your existing systems' }
      ]
    },
    {
      title: 'Account & Billing',
      description: 'Manage your account, billing, and subscriptions',
      articles: [
        { name: 'Update Payment Method', href: '#', description: 'Change your billing information' },
        { name: 'Subscription Management', href: '#', description: 'Upgrade, downgrade, or cancel plans' },
        { name: 'Invoice & Receipts', href: '#', description: 'Access your billing history' }
      ]
    },
    {
      title: 'Technical Support',
      description: 'Resolve technical issues and get troubleshooting help',
      articles: [
        { name: 'API Error Codes', href: '#', description: 'Common error messages and solutions' },
        { name: 'Performance Optimization', href: '#', description: 'Improve your application speed' },
        { name: 'Security Best Practices', href: '#', description: 'Keep your data and systems secure' }
      ]
    },
    {
      title: 'Service-Specific Help',
      description: 'Help for specific Zion Tech Group services',
      articles: [
        { name: 'AI Model Training', href: '#', description: 'Train custom AI models' },
        { name: 'Cloud Infrastructure', href: '#', description: 'Manage cloud resources' },
        { name: 'Cybersecurity Tools', href: '#', description: 'Security monitoring and alerts' }
      ]
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 2 min',
      href: '#'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with a technical expert',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: '#'
    },
    {
      name: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      icon: <Mail className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 4 hours',
      href: '#'
    },
    {
      name: 'Video Call',
      description: 'Screen share and get hands-on assistance',
      icon: <Video className="w-8 h-8" />,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Schedule within 24h',
      href: '#'
    }
  ];

  const additionalResources = [
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and guides',
      icon: <Book className="w-6 h-6" />,
      href: '#'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      icon: <Video className="w-6 h-6" />,
      href: '#'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: <Users className="w-6 h-6" />,
      href: '#'
    },
    {
      title: 'Developer Documentation',
      description: 'Technical API docs and integration guides',
      icon: <Shield className="w-6 h-6" />,
      href: '#'
    }
  ];

  const filteredArticles = popularArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers, tutorials, and connect with our support team."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to common questions, troubleshoot issues, and get expert support
              for all Zion Tech Group services.
            </p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 pl-14 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Help Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these frequently viewed articles to solve common issues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {article.icon}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                    {article.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{article.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{article.title}</h3>
                <p className="text-gray-400 mb-6">{article.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views} views
                  </span>
                </div>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center text-gray-400 text-lg py-10">
              No articles found for the selected criteria.
            </div>
          )}
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse help articles organized by topic to find what you need quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400 mb-6">{section.description}</p>

                <div className="space-y-4">
                  {section.articles.map((article) => (
                    <div key={article.name} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <div>
                        <h4 className="font-semibold text-white">{article.name}</h4>
                        <p className="text-sm text-gray-400">{article.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Direct Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need personalized help? Connect with our support team through multiple channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {channel.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{channel.name}</h3>
                <p className="text-gray-400 mb-6">{channel.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {channel.responseTime}
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore more ways to get help and learn about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                <p className="text-gray-400 mb-6">{resource.description}</p>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Support CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
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
