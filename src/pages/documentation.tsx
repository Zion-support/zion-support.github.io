import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Tag,
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen,
  Newspaper,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  Building2,
  Handshake,
  Target,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  Code,
  FileText,
  Download,
  Play,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'guides', name: 'Guides', icon: FileText },
    { id: 'tutorials', name: 'Tutorials', icon: Play },
    { id: 'reference', name: 'Reference', icon: Settings }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: Rocket,
      articles: [
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          readTime: '5 min read',
          difficulty: 'Beginner',
          lastUpdated: '2025-01-20'
        },
        {
          id: 'installation',
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          readTime: '10 min read',
          difficulty: 'Beginner',
          lastUpdated: '2025-01-18'
        },
        {
          id: 'configuration',
          title: 'Configuration',
          description: 'Configure your environment and settings',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-15'
        }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: Code,
      articles: [
        {
          id: 'authentication',
          title: 'Authentication',
          description: 'Learn how to authenticate with our APIs',
          readTime: '6 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-19'
        },
        {
          id: 'endpoints',
          title: 'API Endpoints',
          description: 'Complete list of available API endpoints',
          readTime: '15 min read',
          difficulty: 'Advanced',
          lastUpdated: '2025-01-17'
        },
        {
          id: 'rate-limiting',
          title: 'Rate Limiting',
          description: 'Understanding API rate limits and best practices',
          readTime: '4 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-14'
        }
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      description: 'Comprehensive guides for common tasks',
      icon: FileText,
      articles: [
        {
          id: 'ai-integration',
          title: 'AI Integration Guide',
          description: 'Integrate AI services into your applications',
          readTime: '12 min read',
          difficulty: 'Advanced',
          lastUpdated: '2025-01-16'
        },
        {
          id: 'security-best-practices',
          title: 'Security Best Practices',
          description: 'Secure your applications and data',
          readTime: '10 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-13'
        },
        {
          id: 'deployment',
          title: 'Deployment Guide',
          description: 'Deploy your applications to production',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-11'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      icon: Play,
      articles: [
        {
          id: 'building-ai-app',
          title: 'Building an AI-Powered App',
          description: 'Create your first AI-powered application',
          readTime: '20 min read',
          difficulty: 'Beginner',
          lastUpdated: '2025-01-12'
        },
        {
          id: 'cybersecurity-setup',
          title: 'Cybersecurity Setup',
          description: 'Set up comprehensive cybersecurity measures',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          lastUpdated: '2025-01-10'
        },
        {
          id: 'cloud-migration',
          title: 'Cloud Migration Tutorial',
          description: 'Migrate your infrastructure to the cloud',
          readTime: '25 min read',
          difficulty: 'Advanced',
          lastUpdated: '2025-01-08'
        }
      ]
    }
  ];

  const allArticles = documentationSections.flatMap(section => 
    section.articles.map(article => ({
      ...article,
      sectionId: section.id,
      sectionTitle: section.title
    }))
  );

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.sectionId === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and best practices to help you build amazing applications."
        keywords="documentation, API reference, guides, tutorials, Zion Tech Group docs"
      />

      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you build amazing applications with Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                    <span>SDK Downloads</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <HelpCircle className="w-4 h-4" />
                    <span>Support</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>API Playground</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Documentation Sections */}
              <div className="space-y-6">
                {documentationSections.map((section) => (
                  <div key={section.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 text-left hover:bg-slate-800/70 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <section.icon className="w-6 h-6 text-blue-400" />
                          <div>
                            <h2 className="text-xl font-bold text-white">{section.title}</h2>
                            <p className="text-gray-300 text-sm">{section.description}</p>
                          </div>
                        </div>
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedSections.includes(section.id) && (
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.articles.map((article) => (
                            <motion.div
                              key={article.id}
                              whileHover={{ y: -2 }}
                              className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300"
                            >
                              <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                              <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                              <div className="flex items-center justify-between text-xs text-gray-400">
                                <div className="flex items-center space-x-3">
                                  <span className="flex items-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.readTime}</span>
                                  </span>
                                  <span className={`px-2 py-1 rounded text-white ${getDifficultyColor(article.difficulty)}`}>
                                    {article.difficulty}
                                  </span>
                                </div>
                                <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Results */}
              {searchTerm && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
                  <div className="space-y-4">
                    {filteredArticles.map((article) => (
                      <motion.div
                        key={`${article.sectionId}-${article.id}`}
                        whileHover={{ y: -2 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                                {article.sectionTitle}
                              </span>
                              <span className={`px-2 py-1 text-white text-xs rounded ${getDifficultyColor(article.difficulty)}`}>
                                {article.difficulty}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
                            <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-400">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime}</span>
                              </span>
                              <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}