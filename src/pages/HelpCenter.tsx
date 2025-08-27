import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  MessageCircle, 
  Mail, 
  Phone,
  Clock,
  Users,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Star,
  TrendingUp,
  HelpCircle,
  Settings,
  Database,
  Network,
  Lock,
  Globe
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Play,
      description: 'Quick start guides and onboarding resources',
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Welcome to Zion Tech Group', type: 'guide', readTime: '5 min' },
        { title: 'Setting Up Your Account', type: 'tutorial', readTime: '10 min' },
        { title: 'First Project Setup', type: 'guide', readTime: '15 min' },
        { title: 'Platform Overview', type: 'guide', readTime: '8 min' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'Documentation for AI and machine learning services',
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'AI Workflow Orchestrator Guide', type: 'guide', readTime: '20 min' },
        { title: 'Setting Up AI Models', type: 'tutorial', readTime: '25 min' },
        { title: 'AI Service Integration', type: 'guide', readTime: '15 min' },
        { title: 'AI Performance Optimization', type: 'guide', readTime: '18 min' }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps resources',
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Cloud Migration Guide', type: 'guide', readTime: '30 min' },
        { title: 'DevOps Best Practices', type: 'guide', readTime: '25 min' },
        { title: 'Cost Optimization Strategies', type: 'guide', readTime: '20 min' },
        { title: 'Security Configuration', type: 'guide', readTime: '22 min' }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security features and compliance documentation',
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Security Best Practices', type: 'guide', readTime: '20 min' },
        { title: 'Compliance Requirements', type: 'guide', readTime: '25 min' },
        { title: 'Access Control Setup', type: 'tutorial', readTime: '15 min' },
        { title: 'Audit Trail Management', type: 'guide', readTime: '18 min' }
      ]
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: Network,
      description: 'Third-party integrations and API documentation',
      color: 'from-indigo-500 to-purple-500',
      articles: [
        { title: 'API Reference Guide', type: 'reference', readTime: '40 min' },
        { title: 'Webhook Setup', type: 'tutorial', readTime: '20 min' },
        { title: 'Third-party Integrations', type: 'guide', readTime: '25 min' },
        { title: 'Custom Connectors', type: 'guide', readTime: '30 min' }
      ]
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: HelpCircle,
      description: 'Common issues and solutions',
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Common Error Codes', type: 'reference', readTime: '15 min' },
        { title: 'Performance Issues', type: 'guide', readTime: '20 min' },
        { title: 'Connection Problems', type: 'guide', readTime: '18 min' },
        { title: 'Data Sync Issues', type: 'guide', readTime: '22 min' }
      ]
    }
  ];

  const videoTutorials = [
    {
      title: 'Getting Started with Zion Tech Platform',
      duration: '15:30',
      thumbnail: '/api/placeholder/300/200',
      views: '2.4k',
      rating: 4.8
    },
    {
      title: 'AI Service Configuration Walkthrough',
      duration: '22:15',
      thumbnail: '/api/placeholder/300/200',
      views: '1.8k',
      rating: 4.9
    },
    {
      title: 'Advanced Security Setup',
      duration: '18:45',
      thumbnail: '/api/placeholder/300/200',
      views: '1.2k',
      rating: 4.7
    },
    {
      title: 'Cloud Migration Best Practices',
      duration: '28:20',
      thumbnail: '/api/placeholder/300/200',
      views: '3.1k',
      rating: 4.8
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      availability: '24/7',
      responseTime: 'Varies',
      action: 'Visit Forum'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = filteredCategories.flatMap(cat => cat.articles);

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group services. Access documentation, tutorials, video guides, and support resources." />
        <meta name="keywords" content="help center, support, documentation, tutorials, Zion Tech Group, user guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Help Center
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Find answers, learn best practices, and get the most out of Zion Tech Group services with our comprehensive help resources.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Support Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Need Help Right Now?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{option.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{option.description}</p>
                    <div className="text-xs text-slate-500 mb-4">
                      <p>Available: {option.availability}</p>
                      <p>Response: {option.responseTime}</p>
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      {option.action}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Categories
                </button>
                {helpCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                          <p className="text-slate-600 text-sm">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {category.articles.slice(0, 3).map((article, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              {article.type === 'guide' && <BookOpen className="w-4 h-4 text-blue-600" />}
                              {article.type === 'tutorial' && <Video className="w-4 h-4 text-green-600" />}
                              {article.type === 'reference' && <FileText className="w-4 h-4 text-purple-600" />}
                              <span className="text-sm font-medium text-slate-900">{article.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">{article.readTime}</span>
                              <ArrowRight className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-4 py-2 px-4 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                        View All {category.name} Articles
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Video Tutorials
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoTutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                      <Play className="w-12 h-12 text-slate-400" />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                        {tutorial.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>{tutorial.views} views</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{tutorial.rating}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-3 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Watch Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our support team is here to help. Contact us for personalized assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpCenter;
