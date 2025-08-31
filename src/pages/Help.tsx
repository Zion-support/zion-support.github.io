import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  BookOpen,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Cloud,
  Cpu
} from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Help', icon: HelpCircle, count: 89 },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, count: 23 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 18 },
    { id: 'technical', name: 'Technical Issues', icon: Cpu, count: 15 },
    { id: 'billing', name: 'Billing & Account', icon: Shield, count: 12 },
    { id: 'integrations', name: 'Integrations', icon: Cloud, count: 11 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Zap, count: 10 }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Group Services',
      category: 'getting-started',
      description: 'Complete guide to setting up and using our AI-powered services for the first time.',
      readTime: '8 min read',
      difficulty: 'Beginner',
      rating: 4.9,
      views: 1247,
      featured: true,
      tags: ['Setup', 'First Time', 'Guide', 'AI Services']
    },
    {
      id: 2,
      title: 'AI Model Training Best Practices',
      category: 'ai-services',
      description: 'Learn the best practices for training and fine-tuning AI models with our platform.',
      readTime: '12 min read',
      difficulty: 'Advanced',
      rating: 4.8,
      views: 892,
      featured: true,
      tags: ['AI Training', 'Best Practices', 'Models', 'Advanced']
    },
    {
      id: 3,
      title: 'Troubleshooting Common API Errors',
      category: 'troubleshooting',
      description: 'Common API error codes and how to resolve them quickly and efficiently.',
      readTime: '6 min read',
      difficulty: 'Intermediate',
      rating: 4.7,
      views: 1567,
      featured: false,
      tags: ['API', 'Errors', 'Troubleshooting', 'Quick Fix']
    },
    {
      id: 4,
      title: 'Setting Up Webhook Integrations',
      category: 'integrations',
      description: 'Step-by-step guide to configuring webhooks for real-time data synchronization.',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      rating: 4.6,
      views: 734,
      featured: false,
      tags: ['Webhooks', 'Integrations', 'Real-time', 'Setup']
    },
    {
      id: 5,
      title: 'Understanding Your Bill and Usage',
      category: 'billing',
      description: 'How to read your bill, understand usage metrics, and optimize costs.',
      readTime: '5 min read',
      difficulty: 'Beginner',
      rating: 4.8,
      views: 1023,
      featured: false,
      tags: ['Billing', 'Usage', 'Costs', 'Metrics']
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      category: 'technical',
      description: 'Advanced techniques to optimize the performance of your AI applications.',
      readTime: '15 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      views: 567,
      featured: true,
      tags: ['Performance', 'Optimization', 'Advanced', 'AI']
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our step-by-step setup guide. Our team is also available for onboarding assistance.',
      category: 'getting-started'
    },
    {
      question: 'What AI models do you support?',
      answer: 'We support a wide range of AI models including GPT, BERT, custom transformers, and specialized models for healthcare, finance, and manufacturing. Contact us for specific requirements.',
      category: 'ai-services'
    },
    {
      question: 'How is billing calculated?',
      answer: 'Billing is based on usage metrics including API calls, compute time, storage, and data processing. We offer flexible plans starting from pay-as-you-go to enterprise packages.',
      category: 'billing'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! We provide comprehensive APIs, SDKs, and integration guides for popular platforms. Our team can also help with custom integrations for your specific needs.',
      category: 'integrations'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer 24/7 support through multiple channels: live chat, email, phone, and our comprehensive help center. Enterprise customers get dedicated support managers.',
      category: 'support'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 2 min',
      href: '/support/chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      href: 'mailto:support@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Help Center',
      description: 'Browse our comprehensive knowledge base',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Instant',
      href: '/help',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : HelpCircle;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'getting-started': 'from-green-500 to-emerald-500',
      'ai-services': 'from-purple-500 to-pink-500',
      technical: 'from-blue-500 to-cyan-500',
      billing: 'from-yellow-500 to-orange-500',
      integrations: 'from-indigo-500 to-purple-500',
      troubleshooting: 'from-red-500 to-pink-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, get step-by-step guides, and connect with our support team. 
              We're here to help you succeed with our AI-powered solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Support When You Need It
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get help, from instant chat to detailed email support
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 text-xs text-gray-400 mb-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-3 h-3 mr-1" />
                    {channel.responseTime}
                  </div>
                </div>
                
                <Link
                  to={channel.href}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm group-hover:scale-105"
                >
                  Get Help <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Articles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Help Articles & Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides and tutorials to help you get the most out of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group ${
                  article.featured ? 'ring-2 ring-cyan-500/30' : ''
                }`}
              >
                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(article.category)} rounded-lg flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(article.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">{article.difficulty}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.views} views
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {article.rating}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium group-hover:scale-105">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Article</span>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No help articles found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to assist you with any questions or technical issues
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Contact Support
              </Link>
              <Link
                to="/support/chat"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Start Live Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;
