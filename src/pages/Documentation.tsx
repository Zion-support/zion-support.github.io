<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  BookOpen,
  FileText,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Brain,
  Zap,
  Target,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  Play,
  Lightbulb,
  AlertCircle,
  Info,
  HelpCircle,
  MessageSquare,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Users,
  Building2,
  Settings,
  Tool,
  Wrench,
  Cog,
  Key,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Copy,
  Check,
  X,
  Plus,
  Minus,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Bookmark,
  Share2,
  Heart,
  Download as DownloadIcon,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Archive,
  Tag,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';

export default function Documentation() {
=======
import React, { useState } from 'react.ts';
<<<<<<< HEAD
import { BookOpen, Code, FileText, Video, Download, Search, ChevronRight, ExternalLink, Star, Clock, Users, Bookmark, Filter export default function Documentation(...args: any[]): any {
=======
import { motion              } from 'framer-motion.ts';
import { SEO              } from '@/components/SEO';
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
             } from 'lucide-react.ts';

export default function Documentation(...args: any[]): any {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 245 },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, count: 18 },
    { id: 'api', name: 'API Reference', icon: Code, count: 67 },
    { id: 'sdks', name: 'SDKs & Libraries', icon: Database, count: 23 },
    { id: 'tutorials', name: 'Tutorials', icon: Play, count: 45 },
    { id: 'guides', name: 'User Guides', icon: FileText, count: 52 },
    { id: 'examples', name: 'Code Examples', icon: Code, count: 38 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Wrench, count: 22 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and setup instructions',
      articles: [
        { id: 'quick-start', title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min', difficulty: 'Beginner' },
        { id: 'installation', title: 'Installation Guide', description: 'Step-by-step installation instructions', readTime: '10 min', difficulty: 'Beginner' },
        { id: 'configuration', title: 'Configuration', description: 'Configure your environment and settings', readTime: '15 min', difficulty: 'Intermediate' },
        { id: 'first-project', title: 'Your First Project', description: 'Build your first application', readTime: '20 min', difficulty: 'Beginner' },
        { id: 'authentication', title: 'Authentication Setup', description: 'Set up user authentication and security', readTime: '25 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and endpoints',
      articles: [
        { id: 'api-overview', title: 'API Overview', description: 'Understanding the API structure and concepts', readTime: '15 min', difficulty: 'Intermediate' },
        { id: 'authentication', title: 'Authentication', description: 'API authentication methods and tokens', readTime: '20 min', difficulty: 'Intermediate' },
        { id: 'endpoints', title: 'API Endpoints', description: 'Complete list of available endpoints', readTime: '30 min', difficulty: 'Advanced' },
        { id: 'rate-limiting', title: 'Rate Limiting', description: 'Understanding API rate limits and quotas', readTime: '10 min', difficulty: 'Intermediate' },
        { id: 'error-codes', title: 'Error Codes', description: 'Common error codes and troubleshooting', readTime: '15 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: Database,
      description: 'Client libraries and SDKs for various platforms',
      articles: [
        { id: 'javascript-sdk', title: 'JavaScript SDK', description: 'Node.js and browser JavaScript SDK', readTime: '25 min', difficulty: 'Intermediate' },
        { id: 'python-sdk', title: 'Python SDK', description: 'Python client library and examples', readTime: '25 min', difficulty: 'Intermediate' },
        { id: 'java-sdk', title: 'Java SDK', description: 'Java client library and integration', readTime: '30 min', difficulty: 'Advanced' },
        { id: 'dotnet-sdk', title: '.NET SDK', description: 'C# and .NET client library', readTime: '25 min', difficulty: 'Intermediate' },
        { id: 'mobile-sdks', title: 'Mobile SDKs', description: 'iOS and Android SDKs', readTime: '35 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: Play,
      description: 'Step-by-step tutorials and walkthroughs',
      articles: [
        { id: 'ai-integration', title: 'AI Integration Tutorial', description: 'Integrate AI services into your application', readTime: '45 min', difficulty: 'Advanced' },
        { id: 'cloud-deployment', title: 'Cloud Deployment', description: 'Deploy your application to the cloud', readTime: '40 min', difficulty: 'Intermediate' },
        { id: 'security-implementation', title: 'Security Implementation', description: 'Implement security best practices', readTime: '50 min', difficulty: 'Advanced' },
        { id: 'data-analytics', title: 'Data Analytics Setup', description: 'Set up data collection and analytics', readTime: '35 min', difficulty: 'Intermediate' },
        { id: 'microservices', title: 'Microservices Architecture', description: 'Build scalable microservices', readTime: '60 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'guides',
      title: 'User Guides',
      icon: FileText,
      description: 'Comprehensive guides for specific features',
      articles: [
        { id: 'user-management', title: 'User Management', description: 'Manage users, roles, and permissions', readTime: '30 min', difficulty: 'Intermediate' },
        { id: 'data-management', title: 'Data Management', description: 'Handle data storage and retrieval', readTime: '25 min', difficulty: 'Intermediate' },
        { id: 'monitoring', title: 'Monitoring & Logging', description: 'Set up monitoring and logging systems', readTime: '35 min', difficulty: 'Advanced' },
        { id: 'backup-restore', title: 'Backup & Restore', description: 'Data backup and recovery procedures', readTime: '20 min', difficulty: 'Intermediate' },
        { id: 'performance-tuning', title: 'Performance Tuning', description: 'Optimize your application performance', readTime: '40 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'examples',
      title: 'Code Examples',
      icon: Code,
      description: 'Practical code examples and snippets',
      articles: [
        { id: 'basic-examples', title: 'Basic Examples', description: 'Simple examples to get you started', readTime: '20 min', difficulty: 'Beginner' },
        { id: 'advanced-examples', title: 'Advanced Examples', description: 'Complex examples for advanced users', readTime: '45 min', difficulty: 'Advanced' },
        { id: 'integration-examples', title: 'Integration Examples', description: 'Examples of third-party integrations', readTime: '35 min', difficulty: 'Intermediate' },
        { id: 'best-practices', title: 'Best Practices', description: 'Code examples following best practices', readTime: '30 min', difficulty: 'Intermediate' },
        { id: 'common-patterns', title: 'Common Patterns', description: 'Reusable patterns and solutions', readTime: '25 min', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: Wrench,
      description: 'Common issues and their solutions',
      articles: [
        { id: 'common-issues', title: 'Common Issues', description: 'Frequently encountered problems and solutions', readTime: '20 min', difficulty: 'Beginner' },
        { id: 'debugging', title: 'Debugging Guide', description: 'Tools and techniques for debugging', readTime: '30 min', difficulty: 'Intermediate' },
        { id: 'performance-issues', title: 'Performance Issues', description: 'Identify and fix performance problems', readTime: '35 min', difficulty: 'Advanced' },
        { id: 'security-issues', title: 'Security Issues', description: 'Common security vulnerabilities and fixes', readTime: '25 min', difficulty: 'Intermediate' },
        { id: 'support-contacts', title: 'Getting Help', description: 'When and how to contact support', readTime: '10 min', difficulty: 'Beginner' }
      ]
    }
  ];

<<<<<<< HEAD
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = documentationSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.articles.some(article => 
                           article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'all' || section.id === selectedCategory;
=======
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

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories: anyanyanyanyanyanyanyanyanyanyanyanyanydocCategories.filter(category              => category.id === selectedCategory);

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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
      readTime: '30 min',
      lastUpdated: '2025-01-08',
      views: 5670,
      rating: 4.5,
      featured: false,
      tags: ['python', 'sdk', 'examples']

=======
      readTime: '30 min',;
      lastUpdated: '2025-01-08',;
      views: 5670,;
      rating: 4.5,;
      featured: false,;
      tags: ['python', 'sdk', 'examples'];
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      type: 'community',
      link: '/community',
      featured: false

=======
    {;
      title: 'Community Forum',;
      description: 'Connect with other developers and get help',;
      type: 'community',;
      link: '/community',;
      featured: false;
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const getDifficultyColor = (difficulty: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (difficulty) {;
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';

  };

  const getDifficultyText = (difficulty: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
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

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-zinc-500/20 text-zinc-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, tutorials, and API references to help you build amazing applications 
              with Zion Tech Group's cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Step-by-step Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Code Examples</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>API References</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-3 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
              <button className="flex-1 px-4 py-3 bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-lg hover:bg-zion-purple/30 transition-colors flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Documentation Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 sticky top-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                        : 'text-zinc-300 hover:bg-zinc-700/30 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="ml-auto text-xs text-zinc-400">{category.count}</span>
                    </div>
                  </button>
                ))}
              </nav>

<<<<<<< HEAD
              <div className="mt-8 pt-6 border-t border-zinc-700/50">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3">Additional Resources</h4>
                <div className="space-y-2">
                  <Link
                    to="/blog"
                    className="flex items-center space-x-2 text-zinc-400 hover:text-zion-cyan transition-colors text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Blog & Updates</span>
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center space-x-2 text-zinc-400 hover:text-zion-cyan transition-colors text-sm"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Support Center</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 text-zinc-400 hover:text-zion-cyan transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contact Us</span>
                  </Link>
                </div>
=======
              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"

                  {sortOptions.map((option)              => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              {filteredSections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-zinc-700/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-zion-cyan" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{section.title}</h3>
                          <p className="text-zinc-400">{section.description}</p>
                        </div>
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-6 h-6 text-zinc-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-zinc-400" />
                      )}
                    </div>
                  </button>

                  {/* Section Content */}
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zinc-700/50"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.articles.map((article, articleIndex) => (
                            <motion.div
                              key={article.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * articleIndex }}
                              className="group"
                            >
                              <Link
                                to={`/docs/${section.id}/${article.id}`}
                                className="block p-4 border border-zinc-600 rounded-lg hover:border-zion-cyan/30 hover:bg-zinc-700/30 transition-all duration-300"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                    {article.title}
                                  </h4>
                                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zion-cyan transition-colors" />
                                </div>
                                <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                                  {article.description}
                                </p>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-zinc-500">{article.readTime}</span>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                    {article.difficulty}
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
<<<<<<< HEAD
=======
            
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {filteredCategories.map((category, index)              => (
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Quick Start Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Follow our quick start guide to have your first application running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs/getting-started/quick-start"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Quick Start Guide
              </Link>
              <Link
                to="/docs/getting-started/first-project"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Build Your First App
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
=======
      {/* API Documentation */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredResources.map((resource, index)              => (
              <div
                key={index}
                className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

      {/* Help & Support Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                <p className="text-zinc-400 text-sm mb-4">Browse our comprehensive guides and tutorials</p>
                <Link
                  to="/docs"
                  className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                >
                  Explore Docs
                </Link>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                <p className="text-zinc-400 text-sm mb-4">Join our community forum for discussions</p>
                <Link
                  to="/community"
                  className="text-zion-purple hover:text-zion-purple-light text-sm font-medium"
                >
                  Join Community
                </Link>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-blue" />
=======
            ))}
          </div>
        </div>
      </div>
=======
          <motion.div 
            className="text-center mb-16"
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 30 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

      {/* Documentation Items */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Documentation Library
          </h2>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6 max-w-6xl mx-auto">
              {filteredItems.map((item)              => (
                <div
                  key={item.id}
                  className={`bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    item.featured ? 'ring-2 ring-zion-cyan' : ''
                  }`}
<<<<<<< HEAD

=======
                >
=======
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
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {apiDocs.map((api, index)              => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
>>>>>>> origin/cursor/fix-project-errors-and-automate-future-fixes-3a8c
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD

                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zion-slate-light mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"

                        {tag}
                      </span>
                    ))}
=======
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-sm">Version: {api.version}</span>
                    <span className="text-slate-400 text-sm">
                      {api.endpoints ? `${api.endpoints} endpoints` : `${api.languages} languages`}
                    </span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
      </section>

      {/* Popular Guides */}
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
              Popular Guides
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most frequently accessed documentation and tutorials
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {popularGuides.map((guide, index)              => (
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
      </section>

      {/* Additional Resources */}
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
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              More ways to learn and get support
            </p>
          </motion.div>
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
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
            ].map((resource, index)              => (
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                <p className="text-zinc-400 text-sm mb-4">Get direct help from our support team</p>
                <Link
                  to="/contact"
                  className="text-zion-blue hover:text-zion-blue-light text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}