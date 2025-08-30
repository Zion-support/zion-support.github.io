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
      case 'api': return <Code className="w-4 h-4" />;
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
        canonical="https://ziontechgroup.com/documentation"
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
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-slate-300">
                Found {searchResults.length} articles matching your search
              </p>
            </motion.div>
            
            {searchResults.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-4">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={`${result.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {result.article.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2">
                          {result.name} • {result.article.readTime} • {result.article.difficulty}
                        </p>
                      </div>
                      <a 
                        href={`#${result.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400">
                <p>No articles found matching your search.</p>
                <p>Try different keywords or browse our categories below.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the documentation you need organized by topic and difficulty level
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="space-y-16">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50"
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-slate-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: articleIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700/70">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-400">{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API Documentation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive API references, SDKs, and integration guides for developers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiDocs.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{api.name}</h3>
                  <p className="text-slate-300 mb-4">{api.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Version:</span>
                      <span className="text-white font-medium">{api.version}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        api.status === 'Stable' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {api.status}
                      </span>
                    </div>
                    {api.endpoints && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Endpoints:</span>
                        <span className="text-white font-medium">{api.endpoints}</span>
                      </div>
                    )}
                    {api.languages && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Languages:</span>
                        <span className="text-white font-medium">{api.languages}</span>
                      </div>
                    )}
                  </div>
                  
                  <a 
                    href={`/api/${api.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Guides
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most viewed and highly rated documentation articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{guide.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{guide.category}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Read Time:</span>
                      <span className="text-white font-medium">{guide.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Difficulty:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Views:</span>
                      <span className="text-white font-medium">{guide.views}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium ml-1">{guide.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Videos, code examples, and downloadable resources to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for all our services',
                icon: Video,
                count: '50+ videos',
                href: '/tutorials'
              },
              {
                title: 'Code Examples',
                description: 'Ready-to-use code snippets and examples',
                icon: Code,
                count: '200+ examples',
                href: '/examples'
              },
              {
                title: 'Download Center',
                description: 'SDKs, tools, and resources for developers',
                icon: Download,
                count: '25+ downloads',
                href: '/downloads'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-slate-300 mb-4">{resource.description}</p>
                  <div className="text-cyan-400 text-sm font-medium mb-6">{resource.count}</div>
                  
                  <a 
                    href={resource.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore {resource.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Need More Help?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Can't find what you're looking for? Our support team is here to help
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/help" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Support
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
