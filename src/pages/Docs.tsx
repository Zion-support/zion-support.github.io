<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Code, Video, Users, Search, ArrowRight, Download, ExternalLink } from 'lucide-react';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-500',
      items: [
        { name: 'Quick Start Guide', path: '/docs/quick-start', description: 'Get up and running in 5 minutes' },
        { name: 'Installation Guide', path: '/docs/installation', description: 'Step-by-step installation instructions' },
        { name: 'First Project', path: '/docs/first-project', description: 'Create your first project with our platform' },
        { name: 'Configuration', path: '/docs/configuration', description: 'Configure your environment and settings' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Authentication', path: '/docs/api/auth', description: 'Learn about API authentication methods' },
        { name: 'Endpoints', path: '/docs/api/endpoints', description: 'Complete list of available API endpoints' },
        { name: 'Rate Limits', path: '/docs/api/rate-limits', description: 'Understanding API rate limits and quotas' },
        { name: 'Error Codes', path: '/docs/api/errors', description: 'Common error codes and troubleshooting' }
      ]
    },
    {
      title: 'User Guides',
      description: 'Detailed guides for specific features and workflows',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'AI Models', path: '/docs/ai-models', description: 'Working with AI models and training' },
        { name: 'Data Management', path: '/docs/data-management', description: 'Managing and organizing your data' },
        { name: 'Deployment', path: '/docs/deployment', description: 'Deploying your applications and models' },
        { name: 'Monitoring', path: '/docs/monitoring', description: 'Monitoring and analytics tools' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      icon: Video,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Platform Overview', path: '/docs/videos/overview', description: 'Complete platform walkthrough' },
        { name: 'AI Development', path: '/docs/videos/ai-development', description: 'Building AI applications' },
        { name: 'Advanced Features', path: '/docs/videos/advanced', description: 'Advanced platform capabilities' },
        { name: 'Best Practices', path: '/docs/videos/best-practices', description: 'Industry best practices' }
      ]
    },
    {
      title: 'Community',
      description: 'Connect with other developers and get help',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { name: 'Forums', path: '/docs/community/forums', description: 'Community discussion forums' },
        { name: 'Discord Server', path: '/docs/community/discord', description: 'Join our Discord community' },
        { name: 'GitHub', path: '/docs/community/github', description: 'Open source projects and examples' },
        { name: 'Events', path: '/docs/community/events', description: 'Upcoming events and meetups' }
      ]
    }
  ];

  const popularDocs = [
    { name: 'AI Model Training Guide', path: '/docs/ai-training', views: '12.5K' },
    { name: 'API Integration Tutorial', path: '/docs/api-integration', views: '8.9K' },
    { name: 'Deployment Best Practices', path: '/docs/deployment-best-practices', views: '7.2K' },
    { name: 'Troubleshooting Common Issues', path: '/docs/troubleshooting', views: '6.8K' },
    { name: 'Performance Optimization', path: '/docs/performance', views: '5.4K' }
  ];

  const resources = [
    { name: 'SDK Downloads', icon: Download, path: '/docs/sdk', description: 'Download SDKs for various platforms' },
    { name: 'Code Examples', icon: Code, path: '/docs/examples', description: 'Ready-to-use code examples' },
    { name: 'API Playground', icon: ExternalLink, path: '/docs/playground', description: 'Interactive API testing tool' },
    { name: 'Changelog', icon: FileText, path: '/docs/changelog', description: 'Latest updates and changes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Developer Resources
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and scale with our AI platform. 
              From quick start guides to advanced API references.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the information you need to succeed with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white group-hover/item:text-cyan-400 transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Most Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these frequently accessed documentation pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={doc.name}
                to={doc.path}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">#{index + 1}</span>
                  <span className="text-sm text-gray-400">{doc.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {doc.name}
                </h3>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Read Guide
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tools and resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                to={resource.path}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-400">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs/community/forums"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Community Forums
              </Link>
            </div>
          </div>
        </div>
      </section>
=======
import React, { useState } from 'react';
import { BookOpen, Search, FileText, Code, Database, Server, Shield, Globe, Users, Zap, ArrowRight, Download, ExternalLink } from 'lucide-react';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentationCategories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 45 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Zap, count: 12 },
    { id: 'api', name: 'API Reference', icon: Code, count: 8 },
    { id: 'deployment', name: 'Deployment', icon: Server, count: 6 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 5 },
    { id: 'integration', name: 'Integrations', icon: Globe, count: 7 },
    { id: 'user-guides', name: 'User Guides', icon: Users, count: 4 },
    { id: 'database', name: 'Database', icon: Database, count: 3 }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with Zion AI Platform',
      category: 'ai',
      description: 'Complete guide to setting up and using the Zion AI platform for your business needs.',
      difficulty: 'Beginner',
      timeToRead: '15 min',
      lastUpdated: '2025-01-15',
      tags: ['AI', 'Setup', 'Beginner']
    },
    {
      id: 2,
      title: 'API Authentication & Security',
      category: 'api',
      description: 'Learn how to securely authenticate and authorize API requests to Zion services.',
      difficulty: 'Intermediate',
      timeToRead: '20 min',
      lastUpdated: '2025-01-14',
      tags: ['API', 'Security', 'Authentication']
    },
    {
      id: 3,
      title: 'Deploying Zion Solutions on AWS',
      category: 'deployment',
      description: 'Step-by-step guide to deploying Zion solutions on Amazon Web Services infrastructure.',
      difficulty: 'Advanced',
      timeToRead: '45 min',
      lastUpdated: '2025-01-13',
      tags: ['AWS', 'Deployment', 'Cloud']
    },
    {
      id: 4,
      title: 'SOC2 Compliance Implementation',
      category: 'security',
      description: 'Comprehensive guide to implementing SOC2 compliance measures with Zion security tools.',
      difficulty: 'Advanced',
      timeToRead: '60 min',
      lastUpdated: '2025-01-12',
      tags: ['SOC2', 'Compliance', 'Security']
    },
    {
      id: 5,
      title: 'Integrating with Salesforce CRM',
      category: 'integration',
      description: 'Learn how to integrate Zion AI solutions with your existing Salesforce CRM system.',
      difficulty: 'Intermediate',
      timeToRead: '30 min',
      lastUpdated: '2025-01-11',
      tags: ['Salesforce', 'CRM', 'Integration']
    },
    {
      id: 6,
      title: 'Quantum Neural Network Setup',
      category: 'ai',
      description: 'Advanced guide to setting up and configuring quantum neural networks for research.',
      difficulty: 'Expert',
      timeToRead: '90 min',
      lastUpdated: '2025-01-10',
      tags: ['Quantum', 'Neural Networks', 'Research']
    },
    {
      id: 7,
      title: 'Database Schema Design',
      category: 'database',
      description: 'Best practices for designing database schemas for Zion AI applications.',
      difficulty: 'Intermediate',
      timeToRead: '25 min',
      lastUpdated: '2025-01-09',
      tags: ['Database', 'Schema', 'Design']
    },
    {
      id: 8,
      title: 'User Management & Permissions',
      category: 'user-guides',
      description: 'Complete guide to managing users, roles, and permissions in Zion platforms.',
      difficulty: 'Beginner',
      timeToRead: '20 min',
      lastUpdated: '2025-01-08',
      tags: ['Users', 'Permissions', 'Management']
    }
  ];

  const filteredDocs = documentationItems.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'advanced':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'expert':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides, tutorials, and reference materials for Zion Tech Group solutions
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {documentationCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30 text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Documentation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-6 hover:border-gray-500 transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {doc.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {doc.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Information */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(doc.difficulty)}`}>
                    {doc.difficulty}
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{doc.timeToRead}</span>
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(doc.lastUpdated).toLocaleDateString()}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No documentation found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
          </div>
        )}
      </div>

      {/* Quick Start Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Quick Start Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">First Steps</h3>
              <p className="text-gray-300 mb-4">Get up and running with Zion AI in under 10 minutes</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2">
                <span>Start Here</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">API Quick Start</h3>
              <p className="text-gray-300 mb-4">Make your first API call in 5 minutes</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center space-x-2">
                <span>API Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl border border-green-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Deployment</h3>
              <p className="text-gray-300 mb-4">Deploy your first Zion solution to production</p>
              <button className="text-green-400 hover:text-green-300 font-medium flex items-center space-x-2">
                <span>Deploy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Video Tutorials</h3>
              <p className="text-gray-300 mb-4">Watch step-by-step video guides for complex topics</p>
              <a href="/tutorials" className="text-blue-400 hover:text-blue-300 font-medium">
                Watch Videos →
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Community Forum</h3>
              <p className="text-gray-300 mb-4">Connect with other developers and get help</p>
              <a href="/community" className="text-orange-400 hover:text-orange-300 font-medium">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center text-gray-400">
          <p>Can't find what you're looking for?</p>
          <p className="text-sm mt-2">
            Contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
              support@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
    </div>
  );
};

export default Docs;