import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: unknown;
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
  };

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
  });

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
    </>);
};
export default Documentation;
