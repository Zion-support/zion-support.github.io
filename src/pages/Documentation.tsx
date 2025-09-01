import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Code, FileText, Video, Download, ExternalLink, ArrowRight, Star, Shield, Brain, Cloud, Zap, Users, CheckCircle, ChevronDown, ChevronUp, Github, Globe, Database, Lock, Server, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(['getting-started']);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const docCategories = [
    {
      key: 'getting-started',
      name: 'Getting Started',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with our platform in minutes',
          type: 'guide',
          link: '/docs/quick-start',
          difficulty: 'Beginner'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions',
          type: 'guide',
          link: '/docs/installation',
          difficulty: 'Beginner'
        },
        {
          title: 'First Project',
          description: 'Create your first AI project',
          type: 'tutorial',
          link: '/docs/first-project',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      key: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Model Training',
          description: 'Train and deploy AI models',
          type: 'guide',
          link: '/docs/ai-training',
          difficulty: 'Intermediate'
        },
        {
          title: 'Data Preparation',
          description: 'Prepare data for AI analysis',
          type: 'guide',
          link: '/docs/data-prep',
          difficulty: 'Intermediate'
        },
        {
          title: 'Model Deployment',
          description: 'Deploy models to production',
          type: 'tutorial',
          link: '/docs/model-deployment',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      key: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Infrastructure Setup',
          description: 'Set up cloud infrastructure',
          type: 'guide',
          link: '/docs/infrastructure',
          difficulty: 'Intermediate'
        },
        {
          title: 'CI/CD Pipelines',
          description: 'Configure CI/CD workflows',
          type: 'tutorial',
          link: '/docs/cicd',
          difficulty: 'Advanced'
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Set up monitoring systems',
          type: 'guide',
          link: '/docs/monitoring',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      key: 'api-reference',
      name: 'API Reference',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'REST API',
          description: 'Complete API documentation',
          type: 'reference',
          link: '/docs/api/rest',
          difficulty: 'Intermediate'
        },
        {
          title: 'SDK Downloads',
          description: 'Client libraries and SDKs',
          type: 'download',
          link: '/docs/sdk',
          difficulty: 'Beginner'
        },
        {
          title: 'Authentication',
          description: 'API authentication methods',
          type: 'guide',
          link: '/docs/auth',
          difficulty: 'Intermediate'
        }
      ]
    }
  ];

  const documentationResources = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      color: 'from-blue-500 to-cyan-500',
      link: '/tutorials'
    },
    {
      icon: Github,
      title: 'GitHub Repositories',
      description: 'Open source examples and templates',
      color: 'from-gray-600 to-slate-600',
      link: 'https://github.com/ziontechgroup'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other developers',
      color: 'from-purple-500 to-pink-500',
      link: '/community'
    },
    {
      icon: Download,
      title: 'Sample Projects',
      description: 'Downloadable project templates',
      color: 'from-green-500 to-emerald-500',
      link: '/samples'
    }
  ];

  const filteredCategories = docCategories.filter(category =>
    searchQuery === '' || 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.some(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Documentation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Developer
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and API references to help you build 
              powerful AI-powered applications with our platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, and APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find comprehensive guides, tutorials, and references organized by category. 
              Everything you need to build with our AI platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.key)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-600/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  {openCategories.includes(category.key) ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {openCategories.includes(category.key) && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-slate-600/30 rounded-xl p-4 hover:bg-slate-600/50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-slate-500/50 rounded-lg flex items-center justify-center flex-shrink-0">
                              {item.type === 'guide' && <FileText className="w-4 h-4 text-blue-400" />}
                              {item.type === 'tutorial' && <Video className="w-4 h-4 text-green-400" />}
                              {item.type === 'reference' && <Code className="w-4 h-4 text-purple-400" />}
                              {item.type === 'download' && <Download className="w-4 h-4 text-orange-400" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                  item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-red-500/20 text-red-400'
                                }`}>
                                  {item.difficulty}
                                </span>
                              </div>
                              <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                              <Link
                                to={item.link}
                                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                              >
                                Learn More
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beyond documentation, we offer additional resources to help you succeed 
              with our platform and connect with the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <Link
                  to={resource.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-3xl p-12 text-center border border-blue-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get started and succeed with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
