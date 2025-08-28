import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen, Users, Star, Clock, ChevronRight, ExternalLink, Brain, Rocket, Shield, Cloud, Database, Zap } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'New user guides and setup instructions',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'How to create your first account', views: 12450, rating: 4.9 },
        { title: 'Setting up your first project', views: 9870, rating: 4.8 },
        { title: 'Understanding the dashboard', views: 7650, rating: 4.7 }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Help with AI and machine learning services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'Configuring AI content generation', views: 8920, rating: 4.8 },
        { title: 'Training custom AI models', views: 6540, rating: 4.6 },
        { title: 'AI service integration guide', views: 5430, rating: 4.7 }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Cloud infrastructure and deployment help',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        { title: 'Deploying to cloud platforms', views: 11230, rating: 4.8 },
        { title: 'Setting up CI/CD pipelines', views: 8760, rating: 4.7 },
        { title: 'Cloud cost optimization', views: 6540, rating: 4.6 }
      ]
    },
    {
      id: 'security',
      name: 'Security',
      description: 'Security configuration and best practices',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Setting up authentication', views: 9870, rating: 4.9 },
        { title: 'Data encryption guide', views: 7650, rating: 4.8 },
        { title: 'Security compliance checklist', views: 5430, rating: 4.7 }
      ]
    },
    {
      id: 'billing',
      name: 'Billing & Pricing',
      description: 'Payment, pricing, and account management',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Understanding pricing plans', views: 15420, rating: 4.8 },
        { title: 'Managing billing information', views: 8760, rating: 4.7 },
        { title: 'Upgrading your plan', views: 6540, rating: 4.6 }
      ]
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Common error messages', views: 18760, rating: 4.7 },
        { title: 'Performance optimization', views: 12340, rating: 4.8 },
        { title: 'API connection issues', views: 9870, rating: 4.6 }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to integrate AI services into your application',
      description: 'Step-by-step guide to integrating Zion Tech Group AI services into your existing applications',
      category: 'AI Services',
      views: 23450,
      rating: 4.9,
      readTime: '8 min read'
    },
    {
      title: 'Setting up secure authentication for your users',
      description: 'Complete guide to implementing secure user authentication and authorization',
      category: 'Security',
      views: 19870,
      rating: 4.8,
      readTime: '12 min read'
    },
    {
      title: 'Optimizing cloud deployment costs',
      description: 'Best practices for reducing cloud infrastructure costs while maintaining performance',
      category: 'Cloud Services',
      views: 17650,
      rating: 4.7,
      readTime: '10 min read'
    },
    {
      title: 'Troubleshooting common API errors',
      description: 'Solutions for the most frequently encountered API integration issues',
      category: 'Troubleshooting',
      views: 15430,
      rating: 4.8,
      readTime: '6 min read'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      responseTime: 'Usually responds in 2 minutes',
      available: true
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      responseTime: 'Usually responds within 4 hours',
      available: true
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      responseTime: 'Available during business hours',
      available: true
    },
    {
      name: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      responseTime: 'Community-driven responses',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, troubleshooting guides, and contact our support team."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions, troubleshoot issues, and get expert support 
              for all Zion Tech Group services and platforms.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or solutions..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <HelpCircle className="w-5 h-5 mr-2" />
                <span>Comprehensive Help</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2" />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Popular Help Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{article.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views.toLocaleString()} views
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Article
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Browse Help by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {category.articles.slice(0, 2).map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white line-clamp-1">{article.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                          <span>{article.views.toLocaleString()} views</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 fill-current text-yellow-400" />
                            <span className="ml-1">{article.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-slate-700/50 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center group">
                  View All Articles
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Get Support
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {channel.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  {channel.description}
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  {channel.responseTime}
                </div>
                
                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  channel.available
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700 text-gray-400 cursor-not-allowed'
                }`}>
                  {channel.available ? 'Get Help' : 'Unavailable'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Additional Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive technical documentation, API references, and implementation guides.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Browse Docs
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
              <p className="text-gray-400 mb-6">
                Step-by-step video guides and tutorials for all our services and features.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Watch Videos
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with other users, share solutions, and get help from the community.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                Join Community
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert support team is here to help 
              you succeed with Zion Tech Group services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-600">
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
