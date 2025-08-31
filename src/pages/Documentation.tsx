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
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Archive,
  Tag,
  Hash
} from 'lucide-react';

const Documentation: React.FC = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
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
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Step-by-step Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Code Examples</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
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
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
              <button className="flex-1 px-4 py-3 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
              <button className="flex-1 px-4 py-3 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center justify-center">
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
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-700/30 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="ml-auto text-xs text-slate-400">{category.count}</span>
                    </div>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Additional Resources</h4>
                <div className="space-y-2">
                  <Link
                    to="/blog"
                    className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Blog & Updates</span>
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Support Center</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contact Us</span>
                  </Link>
                </div>
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
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{section.title}</h3>
                          <p className="text-slate-400">{section.description}</p>
                        </div>
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-slate-400" />
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
                      className="border-t border-slate-700/50"
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
                                className="block p-4 border border-slate-600 rounded-lg hover:border-cyan-500/30 hover:bg-slate-700/30 transition-all duration-300"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                    {article.title}
                                  </h4>
                                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                                  {article.description}
                                </p>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-slate-500">{article.readTime}</span>
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
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-slate-800/30 border-t border-slate-700/50">
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
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Follow our quick start guide to have your first application running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs/getting-started/quick-start"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Quick Start Guide
              </Link>
              <Link
                to="/docs/getting-started/first-project"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Build Your First App
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Help & Support Section */}
      <div className="bg-slate-800/30 border-t border-slate-700/50">
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
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                <p className="text-slate-400 text-sm mb-4">Browse our comprehensive guides and tutorials</p>
                <Link
                  to="/docs"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Explore Docs
                </Link>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                <p className="text-slate-400 text-sm mb-4">Join our community forum for discussions</p>
                <Link
                  to="/community"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Join Community
                </Link>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                <p className="text-slate-400 text-sm mb-4">Get direct help from our support team</p>
                <Link
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
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
};

export default Documentation;