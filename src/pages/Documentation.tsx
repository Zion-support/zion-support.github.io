import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Code, Database, Download, ExternalLink, ChevronRight, FileText, Users, Globe, Shield, Zap, Brain, Cloud, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  items: DocItem[];
}

interface DocItem {
  title: string;
  description: string;
  href: string;
  type: 'api' | 'guide' | 'tutorial' | 'reference';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const documentationSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          href: '/docs/quick-start',
          type: 'guide',
          difficulty: 'beginner'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          href: '/docs/installation',
          type: 'guide',
          difficulty: 'beginner'
        },
        {
          title: 'First Project Tutorial',
          description: 'Build your first AI-powered application',
          href: '/docs/first-project',
          type: 'tutorial',
          difficulty: 'beginner'
        },
        {
          title: 'Environment Setup',
          description: 'Configure your development environment',
          href: '/docs/environment-setup',
          type: 'guide',
          difficulty: 'beginner'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Comprehensive guides for AI and machine learning services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Business Intelligence API',
          description: 'Integrate AI-powered business analytics into your applications',
          href: '/docs/ai-business-intelligence',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'AI Content Creation Guide',
          description: 'Generate high-quality content using our AI platform',
          href: '/docs/ai-content-creation',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'AI Cybersecurity Integration',
          description: 'Implement AI-powered security solutions',
          href: '/docs/ai-cybersecurity',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Machine Learning Models',
          description: 'Access and customize pre-trained ML models',
          href: '/docs/ml-models',
          type: 'reference',
          difficulty: 'advanced'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Cloud deployment and infrastructure management',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      items: [
        {
          title: 'Cloud DevOps Guide',
          description: 'Deploy and manage applications in the cloud',
          href: '/docs/cloud-devops',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'Digital Twin API',
          description: 'Create and manage digital twin simulations',
          href: '/docs/digital-twin',
          type: 'api',
          difficulty: 'advanced'
        },
        {
          title: 'IoT Edge Computing',
          description: 'Deploy applications to edge devices',
          href: '/docs/iot-edge',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Data Analytics Platform',
          description: 'Integrate with our data analytics services',
          href: '/docs/data-analytics',
          type: 'api',
          difficulty: 'intermediate'
        }
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guidelines',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        {
          title: 'Zero Trust Architecture',
          description: 'Implement zero trust security principles',
          href: '/docs/zero-trust',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Security Headers & CSP',
          description: 'Configure security headers and content security policies',
          href: '/docs/security-headers',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'DSR Portal Integration',
          description: 'Implement data subject rights compliance',
          href: '/docs/dsr-portal',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Compliance Automation',
          description: 'Automate compliance monitoring and reporting',
          href: '/docs/compliance-automation',
          type: 'guide',
          difficulty: 'advanced'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Integration guides for our micro SaaS products',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      items: [
        {
          title: 'Micro CRM API',
          description: 'Integrate customer relationship management features',
          href: '/docs/micro-crm',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Helpdesk Platform',
          description: 'Add customer support capabilities to your app',
          href: '/docs/helpdesk',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Website Analytics',
          description: 'Track and analyze website performance',
          href: '/docs/website-analytics',
          type: 'api',
          difficulty: 'beginner'
        },
        {
          title: 'Affiliate Tracking',
          description: 'Implement affiliate marketing tracking',
          href: '/docs/affiliate-tracking',
          type: 'api',
          difficulty: 'intermediate'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and reference',
      icon: Code, // Changed from Api to Code as Api was removed
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'REST API Reference',
          description: 'Complete REST API endpoint documentation',
          href: '/docs/api/rest',
          type: 'reference',
          difficulty: 'intermediate'
        },
        {
          title: 'GraphQL API',
          description: 'GraphQL schema and query documentation',
          href: '/docs/api/graphql',
          type: 'reference',
          difficulty: 'advanced'
        },
        {
          title: 'WebSocket API',
          description: 'Real-time communication API documentation',
          href: '/docs/api/websocket',
          type: 'reference',
          difficulty: 'advanced'
        },
        {
          title: 'SDK Downloads',
          description: 'Download SDKs for various programming languages',
          href: '/docs/sdks',
          type: 'reference',
          difficulty: 'beginner'
        }
      ]
    }
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    items: section.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || section.id === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(section => section.items.length > 0);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'ai-services', name: 'AI Services' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure' },
    { id: 'security-compliance', name: 'Security & Compliance' },
    { id: 'micro-saas', name: 'Micro SaaS Solutions' },
    { id: 'api-reference', name: 'API Reference' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-300';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api': return <Code className="w-4 h-4" />; // Changed from Api to Code
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'reference': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(category => category.id === selectedCategory);

  const searchResults = searchQuery 
    ? categories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
      )
    : [];

  return (
      lastUpdated: '2025-01-10',
      views: 7890,
      rating: 4.6,
      featured: false,
      tags: ['micro-saas', 'platform', 'setup']
    },
    {
      id: 6,
      title: 'Python SDK Examples',
      description: 'Code examples and best practices for using our Python SDK',
      category: 'examples',
      type: 'examples',
      difficulty: 'intermediate',
      readTime: '30 min',;
      lastUpdated: '2025-01-08',;
      views: 5670,;
      rating: 4.5,;
      featured: false,;
      tags: ['python', 'sdk', 'examples'];
    };
  ];

  const featuredResources = [
    {
      title: 'Zion Tech Group Developer Portal',
      description: 'Access our comprehensive developer resources and tools',
      type: 'portal',
      link: 'https://developers.ziontechgroup.com',
      featured: true
    },
    {
      title: 'API Playground',
      description: 'Interactive API testing and exploration environment',
      type: 'tool',
      link: '/api-playground',
      featured: true
    },
    {;
      title: 'Community Forum',;
      description: 'Connect with other developers and get help',;
      type: 'community',;
      link: '/community',;
      featured: false;
    };
  ];

  const getDifficultyColor = (difficulty: string) => {;
    switch (difficulty) {;
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';

  };

  const getDifficultyText = (difficulty: string) => {;
    switch (difficulty) {;
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return 'Unknown';

  };

  const filteredItems = documentationItems.filter(item => {;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Update counts
  categories.forEach(cat = > {;
    if (cat.id === 'all') {;
      cat.count = documentationItems.length;
    } else {
      cat.count = documentationItems.filter(item => item.category === cat.id).length;

  });

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <BookOpen className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Documentation & Resources
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive documentation, tutorials, and resources to help you succeed with Zion Tech Group's innovative solutions.
          </p>
        </div>
      </div>

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
                        <p className="text-slate-300 text-sm">
                          Category: {result.name}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                <p className="text-slate-300 mb-6">Try adjusting your search terms or browse our categories below</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Documentation Categories */}
      {!searchQuery && (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Browse our organized documentation by service category
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Available Guides:</h4>
                      <div className="space-y-3">
                        {category.articles.map((article, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                            <div>
                              <h5 className="text-white font-medium text-sm">{article.title}</h5>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-slate-400 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="text-slate-400 text-xs">{article.difficulty}</span>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                      View All {category.name} Docs
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* API Documentation */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
                >
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              API Documentation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrate with our services using our comprehensive APIs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiDocs.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{api.name}</h3>
                      <p className="text-slate-300 text-sm mb-3">{api.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      api.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {api.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-sm">Version: {api.version}</span>
                    <span className="text-slate-400 text-sm">
                      {api.endpoints ? `${api.endpoints} endpoints` : `${api.languages} languages`}
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors duration-300">
                      View Docs
                    </button>
                    <button className="flex-1 bg-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors duration-300">
                      Try API
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you integrate 
              Zion Tech Group services into your applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                    className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(item.type)}
                        <span className="text-sm text-gray-400 capitalize">{item.type}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    <Link
                      to={item.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSections.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Additional Resources Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Developer Community</h3>
              <p className="text-gray-300 mb-4">Join our developer community for support and collaboration</p>
              <Link
                to="/community"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Join Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">SDK Downloads</h3>
              <p className="text-gray-300 mb-4">Download SDKs and libraries for your preferred language</p>
              <Link
                to="/docs/sdks"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Download SDKs
                <Download className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">API Status</h3>
              <p className="text-gray-300 mb-4">Check the status of our APIs and services</p>
              <Link
                to="/status"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Check Status
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
              <p className="text-zion-slate-light">
                Try adjusting your search terms or browse all categories
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"

              Contact Support
            </a>
            <a
              href="/help"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors"
      {/* Contact Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Documentation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical support team is here to help you with any questions about 
            our documentation, APIs, or integration process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Code className="w-5 h-5 mr-2" />
              Schedule Technical Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
            >;
              Help Center;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}}}}}}}
  );
};

export default Documentation;
