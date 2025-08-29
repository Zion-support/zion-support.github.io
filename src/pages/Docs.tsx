import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Code, Video, Users, Search, Filter, ArrowRight } from 'lucide-react';

export default function Docs() {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min read' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', readTime: '10 min read' },
        { title: 'First Project Setup', description: 'Create your first project', readTime: '8 min read' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'Authentication', description: 'API authentication methods', readTime: '12 min read' },
        { title: 'Endpoints Reference', description: 'All available API endpoints', readTime: '15 min read' },
        { title: 'Rate Limiting', description: 'Understanding API rate limits', readTime: '6 min read' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      icon: Video,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Building Your First App', description: 'Complete tutorial from scratch', readTime: '25 min read' },
        { title: 'Advanced Features', description: 'Master advanced functionality', readTime: '20 min read' },
        { title: 'Best Practices', description: 'Recommended development patterns', readTime: '18 min read' }
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      articles: [
        { title: 'Common Issues', description: 'Solutions to frequent problems', readTime: '10 min read' },
        { title: 'Error Codes', description: 'Understanding error messages', readTime: '8 min read' },
        { title: 'Performance Tips', description: 'Optimize your applications', readTime: '12 min read' }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Business Intelligence',
      description: 'Learn how to implement AI-powered business intelligence in your organization.',
      category: 'Getting Started',
      readTime: '15 min read',
      views: '2.5k'
    },
    {
      title: 'Zero Trust Architecture Implementation',
      description: 'Complete guide to implementing zero trust security architecture.',
      category: 'Security',
      readTime: '20 min read',
      views: '1.8k'
    },
    {
      title: 'IoT Edge Computing Best Practices',
      description: 'Essential practices for building scalable IoT solutions.',
      category: 'IoT',
      readTime: '18 min read',
      views: '1.2k'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, tutorials, and API references for Zion Tech Group solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage your Zion Tech Group solutions. 
              From quick start guides to advanced tutorials.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Documentation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the information you need organized by category and topic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.articles.map((article, idx) => (
                    <div key={idx} className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{article.title}</h4>
                        <span className="text-slate-400 text-sm">{article.readTime}</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-3">{article.description}</p>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most viewed and helpful documentation articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">{article.views} views</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-slate-300 mb-4">{article.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{article.readTime}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Jump to the documentation section you need most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'API Reference', description: 'Complete API documentation', icon: Code, href: '#api' },
              { title: 'Tutorials', description: 'Step-by-step guides', icon: Video, href: '#tutorials' },
              { title: 'Examples', description: 'Code samples and demos', icon: FileText, href: '#examples' },
              { title: 'Support', description: 'Get help when you need it', icon: Users, href: '/support' }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Browse FAQ
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}