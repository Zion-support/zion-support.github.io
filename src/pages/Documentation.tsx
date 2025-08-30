import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
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

export default function Documentation() {
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
      title: 'Cloud Migration Best Practices',
      category: 'Cloud & DevOps',
      readTime: '60 min',
      difficulty: 'Advanced',
      views: '8.9k',
      rating: 4.8
    },
    {
      title: 'Security Compliance Checklist',
      category: 'Security & Compliance',
      readTime: '25 min',
      difficulty: 'Intermediate',
      views: '15.2k',
      rating: 4.9
    },
    {
      title: 'Performance Optimization Guide',
      category: 'Cloud & DevOps',
      readTime: '35 min',
      difficulty: 'Intermediate',
      views: '6.7k',
      rating: 4.7
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api': return <Api className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'reference': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories 
    : docCategories.filter(category => category.id === selectedCategory);

  const searchResults = searchQuery 
    ? docCategories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, API guides, and resources for Zion Tech Group services. Get started with our detailed guides and tutorials."
        keywords="documentation, API docs, user guides, tutorials, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Documentation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to get started with our services
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation, guides, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-gray-300">
                Found {searchResults.length} results
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {searchResults.map((result, index) => (
                <motion.div
                  key={`${result.id}-${result.article.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                          {result.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {result.article.readTime} • {result.article.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {result.article.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.articles.length} articles</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{article.title}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{article.difficulty}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  View All Articles
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              API Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API references, SDKs, and integration guides for developers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiDocs.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Api className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{api.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{api.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white">{api.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        api.status === 'Stable' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        api.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {api.status}
                      </span>
                    </div>
                    {api.endpoints && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Endpoints:</span>
                        <span className="text-white">{api.endpoints}</span>
                      </div>
                    )}
                    {api.languages && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Languages:</span>
                        <span className="text-white">{api.languages}</span>
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    View Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and highly rated documentation guides
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.category}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Read Time:</span>
                      <span className="text-white">{guide.readTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Difficulty:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Views:</span>
                      <span className="text-white">{guide.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{guide.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Read Guide
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="/ai-services-showcase"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
