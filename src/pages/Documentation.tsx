import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { BookOpen, Code, FileText, Search, Download, ExternalLink, ChevronRight, Globe, Brain, Rocket, Shield, Cloud, Database, Zap, Users, Star, Clock, Tag } from 'lucide-react';

const Documentation: React.FC = () => {
  const documentationCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      guides: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', time: '5 min read', level: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read', level: 'Beginner' },
        { title: 'First Project Setup', description: 'Create your first project with Zion Tech', time: '15 min read', level: 'Beginner' }
      ]
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      guides: [
        { title: 'Authentication', description: 'Learn how to authenticate your requests', time: '8 min read', level: 'Intermediate' },
        { title: 'Core API Endpoints', description: 'Reference for all available endpoints', time: '20 min read', level: 'Intermediate' },
        { title: 'Rate Limiting', description: 'Understanding API rate limits and quotas', time: '5 min read', level: 'Intermediate' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Documentation for AI and machine learning services',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      guides: [
        { title: 'AI Content Generation', description: 'Generate content using our AI models', time: '12 min read', level: 'Intermediate' },
        { title: 'Machine Learning APIs', description: 'Access pre-trained ML models', time: '18 min read', level: 'Advanced' },
        { title: 'Natural Language Processing', description: 'Text analysis and processing capabilities', time: '15 min read', level: 'Intermediate' }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Cloud infrastructure and DevOps documentation',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      guides: [
        { title: 'Cloud Deployment', description: 'Deploy applications to the cloud', time: '25 min read', level: 'Intermediate' },
        { title: 'DevOps Pipeline', description: 'Set up CI/CD pipelines', time: '30 min read', level: 'Advanced' },
        { title: 'Infrastructure as Code', description: 'Manage infrastructure with code', time: '20 min read', level: 'Advanced' }
      ]
    },
    {
      id: 'security',
      name: 'Security',
      description: 'Security best practices and implementation guides',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      guides: [
        { title: 'Security Best Practices', description: 'Secure your applications and data', time: '15 min read', level: 'Intermediate' },
        { title: 'Authentication & Authorization', description: 'Implement secure user management', time: '20 min read', level: 'Intermediate' },
        { title: 'Data Protection', description: 'Protect sensitive data and ensure compliance', time: '18 min read', level: 'Advanced' }
      ]
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Data processing and analytics tools documentation',
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      guides: [
        { title: 'Data Ingestion', description: 'Import and process data from various sources', time: '22 min read', level: 'Intermediate' },
        { title: 'Analytics Dashboard', description: 'Create and customize analytics dashboards', time: '28 min read', level: 'Advanced' },
        { title: 'Data Export & APIs', description: 'Export data and integrate with external systems', time: '12 min read', level: 'Intermediate' }
      ]
    }
  ];

  const popularGuides = [
    {
      title: 'Building Your First AI Application',
      description: 'A comprehensive guide to creating AI-powered applications using Zion Tech Group services',
      category: 'AI Services',
      views: 15420,
      rating: 4.9,
      time: '25 min read',
      level: 'Beginner'
    },
    {
      title: 'API Integration Best Practices',
      description: 'Learn the best practices for integrating with our APIs efficiently and securely',
      category: 'API Reference',
      views: 12850,
      rating: 4.8,
      time: '18 min read',
      level: 'Intermediate'
    },
    {
      title: 'Cloud Migration Strategy',
      description: 'Strategic approach to migrating your applications to the cloud with minimal downtime',
      category: 'Cloud Services',
      views: 11230,
      rating: 4.7,
      time: '35 min read',
      level: 'Advanced'
    },
    {
      title: 'Security Implementation Guide',
      description: 'Step-by-step guide to implementing enterprise-grade security in your applications',
      category: 'Security',
      views: 9870,
      rating: 4.9,
      time: '30 min read',
      level: 'Advanced'
    }
  ];

  const recentUpdates = [
    {
      title: 'New AI Content Generation API',
      description: 'Added support for advanced content generation with customizable parameters',
      date: 'January 15, 2025',
      version: 'v2.1.0'
    },
    {
      title: 'Enhanced Security Features',
      description: 'New authentication methods and improved security protocols',
      date: 'January 10, 2025',
      version: 'v1.8.2'
    },
    {
      title: 'Cloud Service Updates',
      description: 'Performance improvements and new deployment options for cloud services',
      date: 'January 5, 2025',
      version: 'v3.0.1'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, and implementation guides for Zion Tech Group services and platforms."
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
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive guides, API references, and implementation examples to help you 
              build amazing applications with Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Comprehensive Guides</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Code className="w-5 h-5 mr-2" />
                <span>API References</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>Community Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Popular Guides
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{guide.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {guide.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {guide.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {guide.views.toLocaleString()} views
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    guide.level === 'Beginner' ? 'bg-green-400/10 text-green-400' :
                    guide.level === 'Intermediate' ? 'bg-yellow-400/10 text-yellow-400' :
                    'bg-red-400/10 text-red-400'
                  }`}>
                    {guide.level}
                  </span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => (
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
                  {category.guides.slice(0, 2).map((guide, guideIndex) => (
                    <div key={guideIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{guide.title}</h4>
                        <p className="text-xs text-gray-400">{guide.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{guide.time}</span>
                        <span className={`px-2 py-1 rounded ${
                          guide.level === 'Beginner' ? 'bg-green-400/10 text-green-400' :
                          guide.level === 'Intermediate' ? 'bg-yellow-400/10 text-yellow-400' :
                          'bg-red-400/10 text-red-400'
                        }`}>
                          {guide.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-slate-700/50 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center group">
                  View All Guides
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Recent Updates
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {update.title}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {update.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{update.date}</span>
                      <span className="text-cyan-400 font-medium">{update.version}</span>
                    </div>
                  </div>
                  <button className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors duration-200 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
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
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our technical team is here to help you 
              implement Zion Tech Group services successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-600">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
