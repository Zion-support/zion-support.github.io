import React, { useState } from 'react';
import { motion   } from 'framer-motion';
import { SEO   } from '@/components/SEO';
import { Search, 
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

export default function Documentation(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: <BookOpen className="w-5 h-5" />, count: 0 },
    { id: 'getting-started', name: 'Getting Started', icon: <BookOpen className="w-5 h-5" />, count: 12 },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" />, count: 28 },
    { id: 'guides', name: 'User Guides', icon: <FileText className="w-5 h-5" />, count: 45 },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-5 h-5" />, count: 23 },
    { id: 'examples', name: 'Code Examples', icon: <Code className="w-5 h-5" />, count: 67 },
    { id: 'reference', name: 'Reference', icon: <FileText className="w-5 h-5" />, count: 34 }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'recently-updated', label: 'Recently Updated' }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and first project',
      category: 'getting-started',
      type: 'guide',
      difficulty: 'beginner',
      readTime: '15 min',
      lastUpdated: '2025-01-20',
      views: 15420,
      rating: 4.9,
      featured: true,
      tags: ['onboarding', 'setup', 'first-steps']
    },
    {
      id: 2,
      title: 'API Authentication Guide',
      description: 'Step-by-step guide to API key management and authentication',
      category: 'api',
      type: 'guide',
      difficulty: 'intermediate',
      readTime: '25 min',
      lastUpdated: '2025-01-18',
      views: 8920,
      rating: 4.8,
      featured: true,
      tags: ['api', 'authentication', 'security']
    },
    {
      id: 3,
      title: 'AI Services Integration Tutorial',
      description: 'Learn how to integrate our AI services into your applications',
      category: 'tutorials',
      type: 'tutorial',
      difficulty: 'advanced',
      readTime: '45 min',
      lastUpdated: '2025-01-15',
      views: 6540,
      rating: 4.7,
      featured: false,
      tags: ['ai', 'integration', 'tutorial']
    },
    {
      id: 4,
      title: 'REST API Reference',
      description: 'Complete API reference with endpoints, parameters, and examples',
      category: 'api',
      type: 'reference',
      difficulty: 'intermediate',
      readTime: '60 min',
      lastUpdated: '2025-01-12',
      views: 12340,
      rating: 4.9,
      featured: true,
      tags: ['api', 'reference', 'endpoints']
    },
    {
      id: 5,
      title: 'Micro SaaS Platform Setup',
      description: 'Comprehensive guide to setting up your micro SaaS platform',
      category: 'guides',
      type: 'guide',
      difficulty: 'intermediate',
      readTime: '35 min',
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
      readTime: '30 min',
      lastUpdated: '2025-01-08',
      views: 5670,
      rating: 4.5,
      featured: false,
      tags: ['python', 'sdk', 'examples']
    }
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
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      type: 'community',
      link: '/community',
      featured: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  ];

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return 'Unknown';
    }
  };

  const filteredItems = documentationItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Update counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = documentationItems.length;
    } else {
      cat.count = documentationItems.filter(item => item.category === cat.id).length;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories: anydocCategories.filter(category   => category.id === selectedCategory);

  const searchResults = searchQuery 
    ? docCategories.flatMap(category => 
        category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(article => ({ ...category, article }))
  {/* Removed stray closing parenthesis */}
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <BookOpen className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Documentation coming soon. We're building comprehensive guides and references.
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
            
            <div className="grid md: anygrid-cols-2 gap-8">
              {filteredCategories.map((category, index)   => (
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
          
          <div className="grid md: anygrid-cols-2 gap-8">
            {apiDocs.map((api, index)   => (
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
          </div>
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
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md: anygrid-cols-2 gap-8">
              {popularGuides.map((guide, index)   => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {guide.title}
                        </h3>
                        <p className="text-cyan-400 text-sm">{guide.category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-white text-sm font-medium">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-slate-400 text-sm">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </span>
                        <span>{guide.difficulty}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{guide.views} views</span>
                    </div>
                    
                    <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                      Read Guide
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Documentation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical support team is here to help you with  questions about 
            our documentation, APIs, or integration process.
          </p>
          
          <div className="grid md: anygrid-cols-3 gap-8">
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
            ].map((resource, index)   => (
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
      </div>
    </>);
};
export default Documentation;
