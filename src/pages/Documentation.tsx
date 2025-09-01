import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Star, 
  Users, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket 
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const docCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and basic setup',
      articles: [
        { title: 'Welcome to Zion Tech Group', readTime: '5 min', difficulty: 'Beginner' },
        { title: 'Account Setup Guide', readTime: '10 min', difficulty: 'Beginner' },
        { title: 'First Project Setup', readTime: '15 min', difficulty: 'Beginner' },
        { title: 'Dashboard Overview', readTime: '8 min', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning documentation',
      articles: [
        { title: 'AI Business Intelligence Setup', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Machine Learning Model Training', readTime: '30 min', difficulty: 'Advanced' },
        { title: 'AI Compliance Assistant', readTime: '15 min', difficulty: 'Intermediate' },
        { title: 'LLM Content Studio Guide', readTime: '25 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps guides',
      articles: [
        { title: 'Cloud Migration Guide', readTime: '45 min', difficulty: 'Advanced' },
        { title: 'DevOps Pipeline Setup', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Container Orchestration', readTime: '25 min', difficulty: 'Advanced' },
        { title: 'Performance Optimization', readTime: '20 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security best practices and compliance',
      articles: [
        { title: 'Zero Trust Implementation', readTime: '35 min', difficulty: 'Advanced' },
        { title: 'Security Audit Process', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Compliance Requirements', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Incident Response Guide', readTime: '30 min', difficulty: 'Advanced' }
      ]
    }
  ];

  const apiDocs = [
    {
      name: 'REST API',
      description: 'Complete REST API reference for all services',
      version: 'v2.1.0',
      status: 'Stable',
      endpoints: 45
    },
    {
      name: 'GraphQL API',
      description: 'Flexible GraphQL API for complex queries',
      version: 'v1.8.0',
      status: 'Beta',
      endpoints: 32
    },
    {
      name: 'Webhooks',
      description: 'Real-time event notifications and integrations',
      version: 'v1.5.0',
      status: 'Stable',
      endpoints: 18
    },
    {
      name: 'SDKs & Libraries',
      description: 'Client libraries for popular programming languages',
      version: 'v2.0.0',
      status: 'Stable',
      languages: 8
    }
  ];

  const popularGuides = [
    {
      title: 'Complete AI Implementation Guide',
      category: 'AI Services',
      readTime: '45 min',
      difficulty: 'Advanced',
      views: '12.5k',
      rating: 4.9
    },
    {
      title: 'Zero Trust Security Framework',
      category: 'Security',
      readTime: '35 min',
      difficulty: 'Advanced',
      views: '8.9k',
      rating: 4.8
    },
    {
      title: 'Cloud Migration Best Practices',
      category: 'Cloud & DevOps',
      readTime: '40 min',
      difficulty: 'Intermediate',
      views: '6.7k',
      rating: 4.7
    },
    {
      title: 'Getting Started with Our Platform',
      category: 'Getting Started',
      readTime: '15 min',
      difficulty: 'Beginner',
      views: '15.2k',
      rating: 4.9
    }
  ];

  const filteredCategories = docCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const filteredArticles = filteredCategories.flatMap(category => 
    category.articles.map(article => ({
      ...article,
      category: category.name,
      categoryId: category.id
    }))
  );

  const searchResults = searchQuery ? filteredArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) : filteredArticles;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Stable': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beta': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Alpha': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, guides, and API references for all Zion Tech Group services and platforms."
        keywords="documentation, API docs, user guides, tutorials, technical documentation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Documentation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Guides</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive documentation, tutorials, and API references to help you 
                get the most out of our services and platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {docCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation sections to help you find the information you need quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {docCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-center">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{category.description}</p>
                  <div className="space-y-2">
                    {category.articles.slice(0, 3).map((article, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 truncate flex-1">{article.title}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                      </div>
                    ))}
                    {category.articles.length > 3 && (
                      <div className="text-center">
                        <span className="text-blue-400 text-xs">+{category.articles.length - 3} more articles</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">API Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API references, SDKs, and integration guides for developers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiDocs.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{api.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(api.status)}`}>
                      {api.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{api.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Version: {api.version}</span>
                    <span className="text-gray-400">
                      {api.endpoints ? `${api.endpoints} endpoints` : `${api.languages} languages`}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      <Code className="w-4 h-4 mr-2 inline" />
                      View Docs
                    </button>
                    <button className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-colors">
                      <Download className="w-4 h-4 mr-2 inline" />
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Guides</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most viewed and highly-rated documentation guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{guide.title}</h3>
                      <p className="text-gray-400 text-sm">{guide.category}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{guide.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {guide.readTime}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {guide.views}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    <BookOpen className="w-4 h-4 mr-2 inline" />
                    Read Guide
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  {searchResults.length} articles found
                </p>
              </div>

              <div className="space-y-4">
                {searchResults.map((article, index) => (
                  <motion.div
                    key={`${article.categoryId}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                        <p className="text-gray-400 mb-3">{article.category}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-gray-300">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2 inline" />
                        Read Article
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help 
                you get the most out of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Support Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Documentation;