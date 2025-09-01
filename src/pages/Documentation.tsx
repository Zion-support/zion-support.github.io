import React, { useState } from 'react';
export default Documentation;
import {
import { motion } from 'framer - motion';
import { SEO } from '../components / SEO';


  BookOpen,
  Search,
  Filter,
  Star,
  Clock,
  Eye,
  ExternalLink,
  Code,
  FileText,
  Video,
  Users,
  Globe,
  Zap,
  Shield,
  Database,
  Cloud,
  Brain,
  TrendingUp,
} from 'lucide - react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState ('') ;
  const [activeCategory, setActiveCategory] = useState ('all') ;

  const categories = [
    { id: 'all', name: 'All Documentation', count: 0 },
    { id: 'getting - started', name: 'Getting Started', count: 0 },
    { id: 'api', name: 'API Reference', count: 0 },
    { id: 'tutorials', name: 'Tutorials', count: 0 },
    { id: 'examples', name: 'Examples', count: 0 },
    { id: 'guides', name: 'Guides', count: 0 },
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Quick Start Guide',
      description:
        'Get up and running with Zion Tech Group services in minutes',
      category: 'getting - started',
      type: 'guide',
      difficulty: 'beginner',
      readTime: '10 min',
      lastUpdated: '2025 - 01 - 15',
      views: 15420,
      rating: 4.8,
      featured: true,
      tags: ['quick - start', 'setup', 'beginner'],
    },
    {
      id: 2,
      title: 'API Authentication',
      description: 'Learn how to authenticate and authorize API requests',
      category: 'api',
      type: 'reference',
      difficulty: 'intermediate',
      readTime: '15 min',
      lastUpdated: '2025 - 01 - 12',
      views: 12340,
      rating: 4.7,
      featured: true,
      tags: ['authentication', 'api', 'security'],
    },
    {
      id: 3,
      title: 'Building Your First AI Model',
      description: 'Step - by - step tutorial for creating and deploying AI models',
      category: 'tutorials',
      type: 'tutorial',
      difficulty: 'intermediate',
      readTime: '45 min',
      lastUpdated: '2025 - 01 - 10',
      views: 9870,
      rating: 4.6,
      featured: true,
      tags: ['ai', 'machine - learning', 'tutorial'],
    },
    {
      id: 4,
      title: 'Cloud Deployment Guide',
      description: 'Deploy your applications to cloud infrastructure',
      category: 'guides',
      type: 'guide',
      difficulty: 'advanced',
      readTime: '60 min',
      lastUpdated: '2025 - 01 - 08',
      views: 7890,
      rating: 4.6,
      featured: false,
      tags: ['cloud', 'deployment', 'infrastructure'],
    },
    {
      id: 5,
      title: 'Micro - SaaS Platform Setup',
      description: 'Complete guide to setting up a micro - SaaS platform',
      category: 'examples',
      type: 'example',
      difficulty: 'advanced',
      readTime: '90 min',
      lastUpdated: '2025 - 01 - 10',
      views: 5670,
      rating: 4.5,
      featured: false,
      tags: ['micro - saas', 'platform', 'setup'],
    },
    {
      id: 6,
      title: 'Python SDK Examples',
      description: 'Code examples and best practices for using our Python SDK',
      category: 'examples',
      type: 'examples',
      difficulty: 'intermediate',
      readTime: '30 min',
      lastUpdated: '2025 - 01 - 08',
      views: 5670,
      rating: 4.5,
      featured: false,
      tags: ['python', 'sdk', 'examples'],
    },
  ];

  const featuredResources = [
    {
      title: 'Zion Tech Group Developer Portal',
      description: 'Access our comprehensive developer resources and tools',
      type: 'portal',
      link: 'https://developers.ziontechgroup.com',
      featured: true,
    },
    {
      title: 'API Playground',
      description: 'Interactive API testing and exploration environment',
      type: 'tool',
      link: '/api - playground',
      featured: true,
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      type: 'community',
      link: '/community',
      featured: false,
    },
  ];

  const getDifficultyColor = (...args: unknown[]): unknown => {
    switch (difficulty) {
      case 'beginner':
        return 'bg - green - 500';
      case 'intermediate':
        return 'bg - yellow - 500';
      case 'advanced':
        return 'bg - red - 500';
      default:
        return 'bg - gray - 500';
    }
  };

  const getDifficultyText = (...args: unknown[]): unknown => {
    switch (difficulty) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return 'Unknown';
    }
  };

  const filteredItems = documentationItems.filter (item => {
    const matchesSearch = item.title.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
      item.description.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
      item.tags.some (tag =>
        tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ;

    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  }) ;

  // Update counts
  categories.forEach (cat => {
    if (cat.id === 'all') {
      cat.count = documentationItems.length;
    } else {
      cat.count = documentationItems.filter (item => item.category === cat.id) .length;
    }
  }) ;

  return (<>
      <SEO
        title="Documentation & Resources - Zion Tech Group"
        description="Comprehensive documentation, tutorials, and resources to help you succeed with Zion Tech Group's innovative solutions."
        keywords="documentation, tutorials, API reference, guides, examples, developer resources, Zion Tech Group"
      />

      <div role="button" className="min - h-screen bg - gradient - to - br from - blue - 900 via - purple - 900 to - indigo - 900">
        {/* Header */}
        <section className="pt - 32 pb - 16 px - 4">
          <div role="button" className="max - w-7xl mx - auto text - center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div role="button" className="flex items - center justify - center space - x-3 mb - 6">
                <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center">
                  <BookOpen className="w - 8 h - 8 text - white" />
                </div>
              </div>
              <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 400 bg - clip - text text - transparent mb - 6">
                Documentation & Resources
              </h1>
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
                Comprehensive documentation, tutorials, and resources to help
                you succeed with Zion Tech Group's innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py - 8 px - 4">
          <div role="button" className="max - w-7xl mx - auto">
            <div role="button" className="bg - slate - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - slate - 700 / 50">
              {/* Search Bar */}
              <div role="button" className="relative mb - 6">
                <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={e => setSearchQuery (e.target.value) }
                  className="w - full pl - 10 pr - 4 py - 3 bg - slate - 700 / 50 border border - slate - 600 / 50 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"
                />
              </div>

              {/* Category Filters */}
              <div>
                <h3 className="text - white font - semibold mb - 3">Categories</h3>
                <div role="button" className="flex flex - wrap gap - 2">
                  {categories.map (category => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id}
                      onClick={ () => setActiveCategory (category.id) }
                      className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - colors ${
                        activeCategory === category.id
                          ? 'bg - blue - 500 text - white'
                          : 'bg - slate - 700 / 50 text - gray - 300 hover:bg - slate - 600 / 50'
                      }`}
                    >
                      {category.name}
                      <span className="text - xs opacity - 75 ml - 1"> ({category.count}) </span>
                    </button>) ) }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py - 16 px - 4">
          <div role="button" className="max - w-7xl mx - auto">
            <div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">
              {filteredItems.map ( (item, index) => (<motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - slate - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - slate - 700 / 50 hover:border - blue - 500 / 50 transition - all duration - 300"
                >
                  <div role="button" className="flex items - start justify - between mb - 4">
                    <div role="button" className="flex items - center gap - 2">
                      <span
                        className={`px - 2 py - 1 rounded - full text - xs font - medium ${getDifficultyColor (item.difficulty) }`}
                      >
                        {getDifficultyText (item.difficulty) }
                      </span>
                      {item.featured && (<span className="px - 2 py - 1 bg - yellow - 500 / 20 text - yellow - 400 rounded - full text - xs font - medium">
                          Featured
                        </span>) }
                    </div>
                    <div role="button" className="flex items - center gap - 2 text - gray - 400 text - sm">
                      <Eye className="w - 4 h - 4" />
                      {item.views.toLocaleString () }
                    </div>
                  </div>

                  <h3 className="text - white font - semibold text - lg mb - 2">
                    {item.title}
                  </h3>
                  <p className="text - gray - 300 text - sm mb - 4">
                    {item.description}
                  </p>

                  <div role="button" className="flex items - center gap - 4 mb - 4 text - sm text - gray - 400">
                    <div role="button" className="flex items - center gap - 1">
                      <Clock className="w - 4 h - 4" />
                      {item.readTime}
                    </div>
                    <div role="button" className="flex items - center gap - 1">
                      <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />
                      {item.rating}
                    </div>
                  </div>

                  <div role="button" className="flex flex - wrap gap - 1 mb - 4">
                    {item.tags.slice (0, 3) .map ( (tag, idx) => (<span
                        key={idx}
                        className="px - 2 py - 1 bg - slate - 700 / 50 text - gray - 300 text - xs rounded"
                      >
                        {tag}
                      </span>) ) }
                  </div>

                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full bg - gradient - to - r from - blue - 500 to - purple - 500 text - white py - 2 px - 4 rounded - lg font - medium hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 300 flex items - center justify - center gap - 2">
                    <FileText className="w - 4 h - 4" />
                    Read More
                  </button>
                </motion.div>) ) }
            </div>

            {filteredItems.length === 0 && (<div role="button" className="text - center py - 12">
                <Search className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4" />
                <h3 className="text - white text - xl font - semibold mb - 2">
                  No documentation found
                </h3>
                <p className="text - gray - 400">
                  Try adjusting your search criteria or filters.
                </p>
              </div>) }
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py - 16 px - 4">
          <div role="button" className="max - w-7xl mx - auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text - 3xl font - bold text - white mb - 12 text - center"
            >
              Featured Resources
            </motion.h2>

            <div role="button" className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">
              {featuredResources.map ( (resource, index) => (<motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - slate - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - slate - 700 / 50 hover:border - blue - 500 / 50 transition - all duration - 300"
                >
                  <div role="button" className="flex items - center gap - 3 mb - 4">
                    <div role="button" className="w - 10 h - 10 bg - gradient - to - r from - green - 500 to - blue - 500 rounded - lg flex items - center justify - center">
                      <Globe className="w - 5 h - 5 text - white" />
                    </div>
                    <h3 className="text - white font - semibold">
                      {resource.title}
                    </h3>
                  </div>

                  <p className="text - gray - 300 text - sm mb - 4">
                    {resource.description}
                  </p>

                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full bg - gradient - to - r from - green - 500 to - blue - 500 text - white py - 2 px - 4 rounded - lg font - medium hover:from - green - 600 hover:to - blue - 600 transition - all duration - 300 flex items - center justify - center gap - 2">
                    <ExternalLink className="w - 4 h - 4" />
                    Visit Resource
                  </button>
                </motion.div>) ) }
            </div>
          </div>
        </section>
      </div>
    </>) ;
};

