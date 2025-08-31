import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, FileText, Code, Database, 
  Cloud, Shield, Brain, Globe, Building, 
  ArrowRight, ExternalLink, Download, Play,
  ChevronDown, ChevronRight, Star, Clock,
  Users, Tag, Filter, Bookmark, Share2,
  Activity, HelpCircle, MessageCircle, Mail
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationCategories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, color: 'from-blue-500 to-purple-500' },
    { id: 'api', name: 'API Reference', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'guides', name: 'User Guides', icon: FileText, color: 'from-yellow-500 to-orange-500' },
    { id: 'tutorials', name: 'Tutorials', icon: Play, color: 'from-purple-500 to-pink-500' },
    { id: 'architecture', name: 'Architecture', icon: Building, color: 'from-cyan-500 to-blue-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '5 min',
          lastUpdated: '2024-01-15',
          featured: true
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '10 min',
          lastUpdated: '2024-01-10'
        },
        {
          title: 'First Project Setup',
          description: 'Create your first project and configure basic settings',
          type: 'tutorial',
          difficulty: 'beginner',
          readTime: '15 min',
          lastUpdated: '2024-01-12'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our APIs using various methods',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '8 min',
          lastUpdated: '2024-01-14',
          featured: true
        },
        {
          title: 'Core API Endpoints',
          description: 'Reference for all available API endpoints and parameters',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '20 min',
          lastUpdated: '2024-01-13'
        },
        {
          title: 'Rate Limiting',
          description: 'Understanding API rate limits and best practices',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '6 min',
          lastUpdated: '2024-01-11'
        },
        {
          title: 'Error Handling',
          description: 'Common error codes and how to handle them properly',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '12 min',
          lastUpdated: '2024-01-09'
        }
      ]
    },
    {
      id: 'user-guides',
      title: 'User Guides',
      description: 'Comprehensive guides for using our platform and services',
      icon: FileText,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        {
          title: 'Dashboard Overview',
          description: 'Navigate and understand your main dashboard interface',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '12 min',
          lastUpdated: '2024-01-15',
          featured: true
        },
        {
          title: 'Project Management',
          description: 'Create, organize, and manage your projects effectively',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '18 min',
          lastUpdated: '2024-01-14'
        },
        {
          title: 'Team Collaboration',
          description: 'Work together with your team using built-in collaboration tools',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '15 min',
          lastUpdated: '2024-01-13'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Understand your data with comprehensive analytics tools',
          type: 'guide',
          difficulty: 'advanced',
          readTime: '25 min',
          lastUpdated: '2024-01-12'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step tutorials for common tasks and workflows',
      icon: Play,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'Building Your First AI Model',
          description: 'Complete tutorial on creating and training AI models',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '45 min',
          lastUpdated: '2024-01-15',
          featured: true
        },
        {
          title: 'Cloud Migration Guide',
          description: 'Migrate your existing infrastructure to our cloud platform',
          type: 'tutorial',
          difficulty: 'advanced',
          readTime: '60 min',
          lastUpdated: '2024-01-14'
        },
        {
          title: 'Security Best Practices',
          description: 'Implement security best practices in your applications',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '30 min',
          lastUpdated: '2024-01-13'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimize your applications for better performance',
          type: 'tutorial',
          difficulty: 'advanced',
          readTime: '40 min',
          lastUpdated: '2024-01-12'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture',
      description: 'System architecture, design patterns, and best practices',
      icon: Building,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        {
          title: 'System Architecture Overview',
          description: 'High-level overview of our platform architecture',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '20 min',
          lastUpdated: '2024-01-15',
          featured: true
        },
        {
          title: 'Microservices Design',
          description: 'Design patterns for building scalable microservices',
          type: 'reference',
          difficulty: 'advanced',
          readTime: '35 min',
          lastUpdated: '2024-01-14'
        },
        {
          title: 'Data Architecture',
          description: 'Understanding our data storage and processing architecture',
          type: 'reference',
          difficulty: 'advanced',
          readTime: '25 min',
          lastUpdated: '2024-01-13'
        },
        {
          title: 'Scalability Patterns',
          description: 'Patterns and strategies for building scalable systems',
          type: 'reference',
          difficulty: 'advanced',
          readTime: '30 min',
          lastUpdated: '2024-01-12'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Security documentation, compliance, and best practices',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        {
          title: 'Security Overview',
          description: 'Comprehensive overview of our security measures and policies',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '15 min',
          lastUpdated: '2024-01-15',
          featured: true
        },
        {
          title: 'Compliance & Certifications',
          description: 'Industry compliance standards and certifications we maintain',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '12 min',
          lastUpdated: '2024-01-14'
        },
        {
          title: 'Data Protection',
          description: 'How we protect your data and ensure privacy',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '18 min',
          lastUpdated: '2024-01-13'
        },
        {
          title: 'Security Best Practices',
          description: 'Security best practices for developers and administrators',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '25 min',
          lastUpdated: '2024-01-12'
        }
      ]
    }
  ];

  const featuredArticles = [
    {
      title: 'Complete API Reference',
      description: 'Comprehensive documentation for all our APIs with examples',
      category: 'API Reference',
      readTime: '45 min',
      difficulty: 'intermediate',
      featured: true
    },
    {
      title: 'AI Solutions Guide',
      description: 'Complete guide to implementing AI solutions with our platform',
      category: 'User Guides',
      readTime: '60 min',
      difficulty: 'intermediate',
      featured: true
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security practices for enterprise applications',
      category: 'Security',
      readTime: '30 min',
      difficulty: 'intermediate',
      featured: true
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', icon: Activity },
    { title: 'Support Center', href: '/support', icon: HelpCircle },
    { title: 'Community Forum', href: '/community', icon: Users },
    { title: 'Video Tutorials', href: '/tutorials', icon: Play },
    { title: 'Download SDKs', href: '/downloads', icon: Download },
    { title: 'Release Notes', href: '/releases', icon: FileText }
  ];

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory === 'all') return true;
    return section.id === selectedCategory;
  });

  const filteredArticles = filteredSections.flatMap(section => 
    section.articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'advanced':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return FileText;
      case 'tutorial':
        return Play;
      case 'reference':
        return Code;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, tutorials, and reference materials to help you succeed with Zion Tech Group
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <BookOpen className="w-5 h-5" />
              <span>Developer Guides</span>
              <span>•</span>
              <Code className="w-5 h-5" />
              <span>API Reference</span>
              <span>•</span>
              <Play className="w-5 h-5" />
              <span>Video Tutorials</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {documentationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Articles</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Start here with our most popular and essential documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Quick Links</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Access common resources and tools quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                  {link.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Documentation Sections</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Organized documentation by category and topic
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{section.title}</h3>
                      <p className="text-gray-400">{section.description}</p>
                    </div>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 p-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.articles.map((article, articleIndex) => {
                        const TypeIcon = getTypeIcon(article.type);
                        return (
                          <div
                            key={articleIndex}
                            className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <TypeIcon className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-gray-400 uppercase">{article.type}</span>
                              </div>
                              {article.featured && (
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              )}
                            </div>
                            
                            <h4 className="text-sm font-semibold text-white mb-2">{article.title}</h4>
                            <p className="text-gray-400 text-xs mb-3">{article.description}</p>
                            
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center space-x-3">
                                <span className={`px-2 py-1 rounded-full border ${getDifficultyColor(article.difficulty)}`}>
                                  {article.difficulty}
                                </span>
                                <span className="text-gray-400">{article.readTime}</span>
                              </div>
                              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-xl text-gray-300 text-center">
                Found {filteredArticles.length} articles
              </p>
            </motion.div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => {
                  const TypeIcon = getTypeIcon(article.type);
                  return (
                    <motion.div
                      key={`${article.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-xs text-gray-400 uppercase">{article.type}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3 text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.lastUpdated}</span>
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}