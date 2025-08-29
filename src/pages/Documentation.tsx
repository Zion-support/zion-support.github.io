import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search,
  BookOpen,
  FileText,
  Code,
  Database,
  Shield,
  Cloud,
  Brain,
  Zap,
  Users,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  Star,
  Clock,
  Eye,
  MessageCircle,
  Bookmark,
  Share2,
  Filter,
  Grid,
  List,
  ArrowRight,
  Play,
  FileCode,
  Terminal,
  Globe,
  Lock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['getting-started']);

  const documentationCategories = [
    { id: 'all', name: 'All Documentation', count: 156, color: 'from-cyan-500 to-blue-600' },
    { id: 'getting-started', name: 'Getting Started', count: 12, color: 'from-green-500 to-emerald-600' },
    { id: 'api', name: 'API Reference', count: 45, color: 'from-blue-500 to-cyan-600' },
    { id: 'guides', name: 'User Guides', count: 34, color: 'from-purple-500 to-pink-600' },
    { id: 'tutorials', name: 'Tutorials', count: 28, color: 'from-orange-500 to-red-600' },
    { id: 'examples', name: 'Code Examples', count: 37, color: 'from-indigo-500 to-purple-600' }
  ];

  const documentationSections = {
    'getting-started': [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running with Zion Tech Group services in minutes',
        difficulty: 'Beginner',
        timeToRead: '5 min',
        lastUpdated: '2 days ago',
        icon: Play,
        color: 'from-green-500 to-emerald-600',
        featured: true
      },
      {
        title: 'Installation Guide',
        description: 'Step-by-step installation instructions for all platforms',
        difficulty: 'Beginner',
        timeToRead: '10 min',
        lastUpdated: '1 week ago',
        icon: Download,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'Configuration',
        description: 'Learn how to configure your Zion Tech Group environment',
        difficulty: 'Intermediate',
        timeToRead: '15 min',
        lastUpdated: '3 days ago',
        icon: Settings,
        color: 'from-purple-500 to-pink-600'
      },
      {
        title: 'First Project',
        description: 'Create your first project with our step-by-step tutorial',
        difficulty: 'Beginner',
        timeToRead: '20 min',
        lastUpdated: '5 days ago',
        icon: Code,
        color: 'from-orange-500 to-red-600'
      }
    ],
    'api': [
      {
        title: 'Authentication',
        description: 'Learn about API authentication methods and security',
        difficulty: 'Intermediate',
        timeToRead: '12 min',
        lastUpdated: '1 day ago',
        icon: Lock,
        color: 'from-red-500 to-pink-600',
        featured: true
      },
      {
        title: 'Core API Endpoints',
        description: 'Complete reference for all core API endpoints',
        difficulty: 'Advanced',
        timeToRead: '25 min',
        lastUpdated: '2 days ago',
        icon: FileCode,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'Error Handling',
        description: 'Understanding and handling API errors effectively',
        difficulty: 'Intermediate',
        timeToRead: '8 min',
        lastUpdated: '4 days ago',
        icon: AlertCircle,
        color: 'from-yellow-500 to-orange-600'
      },
      {
        title: 'Rate Limiting',
        description: 'API rate limiting policies and best practices',
        difficulty: 'Intermediate',
        timeToRead: '6 min',
        lastUpdated: '1 week ago',
        icon: Clock,
        color: 'from-slate-500 to-gray-600'
      }
    ],
    'guides': [
      {
        title: 'User Management',
        description: 'Complete guide to managing users and permissions',
        difficulty: 'Intermediate',
        timeToRead: '18 min',
        lastUpdated: '3 days ago',
        icon: Users,
        color: 'from-purple-500 to-pink-600'
      },
      {
        title: 'Security Best Practices',
        description: 'Essential security practices for production environments',
        difficulty: 'Advanced',
        timeToRead: '22 min',
        lastUpdated: '1 day ago',
        icon: Shield,
        color: 'from-red-500 to-orange-600',
        featured: true
      },
      {
        title: 'Performance Optimization',
        description: 'Tips and techniques for optimizing your applications',
        difficulty: 'Advanced',
        timeToRead: '20 min',
        lastUpdated: '2 days ago',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-600'
      },
      {
        title: 'Monitoring & Logging',
        description: 'Set up comprehensive monitoring and logging for your services',
        difficulty: 'Intermediate',
        timeToRead: '16 min',
        lastUpdated: '5 days ago',
        icon: Eye,
        color: 'from-blue-500 to-cyan-600'
      }
    ],
    'tutorials': [
      {
        title: 'Building AI-Powered Applications',
        description: 'Step-by-step tutorial for creating AI applications',
        difficulty: 'Advanced',
        timeToRead: '45 min',
        lastUpdated: '1 week ago',
        icon: Brain,
        color: 'from-purple-500 to-pink-600',
        featured: true
      },
      {
        title: 'Cloud Migration Strategy',
        description: 'Comprehensive guide to migrating to the cloud',
        difficulty: 'Advanced',
        timeToRead: '35 min',
        lastUpdated: '3 days ago',
        icon: Cloud,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'DevOps Pipeline Setup',
        description: 'Set up a complete CI/CD pipeline from scratch',
        difficulty: 'Intermediate',
        timeToRead: '30 min',
        lastUpdated: '2 days ago',
        icon: Zap,
        color: 'from-orange-500 to-red-600'
      },
      {
        title: 'Database Design Patterns',
        description: 'Learn database design patterns for scalable applications',
        difficulty: 'Intermediate',
        timeToRead: '25 min',
        lastUpdated: '4 days ago',
        icon: Database,
        color: 'from-indigo-500 to-purple-600'
      }
    ],
    'examples': [
      {
        title: 'React Integration',
        description: 'Complete React application examples and code snippets',
        difficulty: 'Intermediate',
        timeToRead: '15 min',
        lastUpdated: '1 day ago',
        icon: Code,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'Python SDK Examples',
        description: 'Python code examples for common use cases',
        difficulty: 'Intermediate',
        timeToRead: '12 min',
        lastUpdated: '2 days ago',
        icon: FileCode,
        color: 'from-green-500 to-emerald-600'
      },
      {
        title: 'Node.js Implementation',
        description: 'Node.js examples and best practices',
        difficulty: 'Intermediate',
        timeToRead: '18 min',
        lastUpdated: '3 days ago',
        icon: Terminal,
        color: 'from-yellow-500 to-orange-600'
      },
      {
        title: 'Mobile App Integration',
        description: 'iOS and Android integration examples',
        difficulty: 'Advanced',
        timeToRead: '20 min',
        lastUpdated: '1 week ago',
        icon: Globe,
        color: 'from-purple-500 to-pink-600'
      }
    ]
  };

  const popularDocs = [
    {
      title: 'Getting Started with AI Services',
      views: 15420,
      rating: 4.9,
      category: 'Getting Started',
      lastUpdated: '1 day ago'
    },
    {
      title: 'API Authentication Guide',
      views: 12850,
      rating: 4.8,
      category: 'API Reference',
      lastUpdated: '2 days ago'
    },
    {
      title: 'Security Best Practices',
      views: 11230,
      rating: 4.9,
      category: 'User Guides',
      lastUpdated: '1 day ago'
    },
    {
      title: 'Cloud Migration Tutorial',
      views: 9870,
      rating: 4.7,
      category: 'Tutorials',
      lastUpdated: '3 days ago'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredDocs = Object.entries(documentationSections)
    .filter(([sectionId]) => selectedCategory === 'all' || sectionId === selectedCategory)
    .flatMap(([sectionId, docs]) => 
      docs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-400/10';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, guides, tutorials, and API references for Zion Tech Group services. Get started quickly with our detailed documentation."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, tutorials, and API references to help you build amazing applications with Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">156</div>
                <div className="text-slate-400 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45</div>
                <div className="text-slate-400 text-sm">API Endpoints</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">28</div>
                <div className="text-slate-400 text-sm">Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">37</div>
                <div className="text-slate-400 text-sm">Examples</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Browse by Category</h2>
              <p className="text-slate-400">Find the documentation you need organized by topic</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {documentationCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {documentationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                }`}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3`}>
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{category.name}</div>
                <div className="text-xs text-slate-400">{category.count} articles</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          {Object.entries(documentationSections).map(([sectionId, docs]) => (
            <div key={sectionId} className="mb-12">
              <button
                onClick={() => toggleSection(sectionId)}
                className="flex items-center gap-3 mb-6 w-full text-left"
              >
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedSections.includes(sectionId) ? 'rotate-180' : ''
                  }`}
                />
                <h3 className="text-2xl font-bold text-white">
                  {documentationCategories.find(c => c.id === sectionId)?.name}
                </h3>
                <span className="text-slate-400 text-sm">({docs.length})</span>
              </button>
              
              {expandedSections.includes(sectionId) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {docs.map((doc, index) => (
                    <div
                      key={index}
                      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                        doc.featured 
                          ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {doc.featured && (
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-medium">Featured</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center`}>
                          <doc.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{doc.title}</h4>
                          <p className="text-slate-400 text-sm">{doc.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 text-sm">
                        <span className={`px-2 py-1 rounded-full ${getDifficultyColor(doc.difficulty)}`}>
                          {doc.difficulty}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {doc.timeToRead}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Updated {doc.lastUpdated}</span>
                        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Popular Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Popular Documentation</h2>
              <p className="text-slate-400">Most viewed and highly rated articles</p>
            </div>
            <Link
              to="/documentation/popular"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All Popular
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {doc.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {doc.rating}
                      </span>
                      <span>{doc.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Updated {doc.lastUpdated}</span>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/documentation/getting-started"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Started</h3>
              <p className="text-slate-400 text-sm">Quick start guide for new users</p>
            </Link>
            
            <Link
              to="/documentation/api"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
              <p className="text-slate-400 text-sm">Complete API documentation</p>
            </Link>
            
            <Link
              to="/documentation/tutorials"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
              <p className="text-slate-400 text-sm">Step-by-step learning guides</p>
            </Link>
            
            <Link
              to="/documentation/examples"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
              <p className="text-slate-400 text-sm">Ready-to-use code samples</p>
            </Link>
          </div>
        </motion.div>

        {/* Help & Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you get the most out of our documentation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/help"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Help
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-400 text-sm">Get instant help from our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
              <p className="text-slate-400 text-sm">Find answers to common questions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-slate-400 text-sm">Ask questions in our community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
