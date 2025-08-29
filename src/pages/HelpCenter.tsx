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
      title: 'Setting up secure cloud deployment',
      description: 'Complete guide to deploying your applications securely on our cloud infrastructure',
      category: 'Cloud Services',
      views: 19870,
      rating: 4.8,
      readTime: '12 min read'
    },
    {
      title: 'Understanding our pricing structure',
      description: 'Detailed breakdown of our pricing plans and how to choose the right one for your needs',
      category: 'Billing & Pricing',
      views: 18760,
      rating: 4.7,
      readTime: '6 min read'
    },
    {
      title: 'Troubleshooting common API errors',
      description: 'Solutions to the most common API integration issues and error messages',
      category: 'Troubleshooting',
      views: 16540,
      rating: 4.8,
      readTime: '10 min read'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply create an account, choose your plan, and follow our step-by-step setup guides. We provide comprehensive documentation and support to help you get up and running quickly.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely and you can manage your billing information through your dashboard.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all new users. No credit card required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.'
    },
    {
      question: 'How do I get technical support?',
      answer: 'We provide 24/7 technical support through multiple channels: live chat, email, phone, and our comprehensive help center. Enterprise customers also get dedicated support managers.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Absolutely! You can cancel your subscription at any time through your dashboard. There are no long-term contracts or cancellation fees. You\'ll continue to have access until the end of your current billing period.'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      availability: '24/7',
      responseTime: '< 2 min'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      availability: '24/7',
      responseTime: '< 4 hours'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      availability: 'Business Hours',
      responseTime: '< 1 hour'
    },
    {
      name: 'Video Call',
      description: 'Screen sharing and face-to-face assistance',
      icon: Video,
      color: 'from-orange-500 to-red-500',
      availability: 'Business Hours',
      responseTime: '< 2 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help, find answers, and access support for all Zion Tech Group services and features"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help & Support
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get step-by-step guides, and access 
              expert support for all Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>500+ Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="w-5 h-5" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {channel.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {channel.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
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
                    <div key={articleIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-sm text-white font-medium mb-1">{article.title}</h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Users className="w-3 h-3 mr-1" />
                          {article.views.toLocaleString()} views
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 text-xs">{article.rating}</span>
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

      {/* FAQs */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get in touch with us 
              and we'll get back to you as soon as possible.
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
