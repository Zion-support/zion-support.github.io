import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Brain,
  Server,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Eye,
  Fingerprint,
  Key,
  Clock,
  Phone,
  Mail,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  Video,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  Clock,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarOff,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12
} from 'lucide-react';

const documentationCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and basic setup instructions',
    icon: Rocket,
    color: 'from-blue-400 to-cyan-500',
    articles: [
      { title: 'Welcome to Zion Tech Group', url: '/docs/welcome', difficulty: 'Beginner' },
      { title: 'Quick Start Guide', url: '/docs/quickstart', difficulty: 'Beginner' },
      { title: 'Installation Guide', url: '/docs/installation', difficulty: 'Beginner' },
      { title: 'First Steps', url: '/docs/first-steps', difficulty: 'Beginner' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Documentation for artificial intelligence and machine learning services',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    articles: [
      { title: 'AI Services Overview', url: '/docs/ai-services', difficulty: 'Intermediate' },
      { title: 'Machine Learning Models', url: '/docs/ml-models', difficulty: 'Advanced' },
      { title: 'AI Integration Guide', url: '/docs/ai-integration', difficulty: 'Intermediate' },
      { title: 'Best Practices', url: '/docs/ai-best-practices', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure and DevOps practices documentation',
    icon: Cloud,
    color: 'from-indigo-400 to-purple-500',
    articles: [
      { title: 'Cloud Architecture', url: '/docs/cloud-architecture', difficulty: 'Intermediate' },
      { title: 'DevOps Pipeline', url: '/docs/devops-pipeline', difficulty: 'Advanced' },
      { title: 'Container Orchestration', url: '/docs/containers', difficulty: 'Intermediate' },
      { title: 'Infrastructure as Code', url: '/docs/iac', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Security guidelines and compliance documentation',
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    articles: [
      { title: 'Security Overview', url: '/docs/security', difficulty: 'Intermediate' },
      { title: 'Compliance Frameworks', url: '/docs/compliance', difficulty: 'Advanced' },
      { title: 'Security Best Practices', url: '/docs/security-best-practices', difficulty: 'Intermediate' },
      { title: 'Incident Response', url: '/docs/incident-response', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and integration guides',
    icon: Code,
    color: 'from-green-400 to-emerald-500',
    articles: [
      { title: 'API Overview', url: '/docs/api-overview', difficulty: 'Intermediate' },
      { title: 'Authentication', url: '/docs/api-auth', difficulty: 'Intermediate' },
      { title: 'Endpoints Reference', url: '/docs/api-endpoints', difficulty: 'Advanced' },
      { title: 'SDKs & Libraries', url: '/docs/sdks', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Tutorials & Examples',
    description: 'Step-by-step tutorials and practical examples',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
    articles: [
      { title: 'Building Your First App', url: '/docs/first-app', difficulty: 'Beginner' },
      { title: 'Advanced Integrations', url: '/docs/advanced-integrations', difficulty: 'Advanced' },
      { title: 'Real-world Examples', url: '/docs/examples', difficulty: 'Intermediate' },
      { title: 'Troubleshooting Guide', url: '/docs/troubleshooting', difficulty: 'Intermediate' }
    ]
  }
];

const popularArticles = [
  {
    title: 'Getting Started with AI Services',
    description: 'Learn how to integrate AI capabilities into your applications',
    category: 'AI Services',
    readTime: '15 min',
    difficulty: 'Beginner',
    views: 1247,
    icon: Brain,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Cloud Migration Best Practices',
    description: 'Essential guidelines for successful cloud migration projects',
    category: 'Cloud & DevOps',
    readTime: '25 min',
    difficulty: 'Intermediate',
    views: 892,
    icon: Cloud,
    color: 'from-indigo-400 to-purple-500'
  },
  {
    title: 'API Authentication Guide',
    description: 'Complete guide to implementing secure API authentication',
    category: 'API Reference',
    readTime: '20 min',
    difficulty: 'Intermediate',
    views: 756,
    icon: Code,
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Security Compliance Checklist',
    description: 'Comprehensive checklist for meeting security compliance requirements',
    category: 'Security & Compliance',
    readTime: '30 min',
    difficulty: 'Advanced',
    views: 634,
    icon: Shield,
    color: 'from-red-400 to-pink-500'
  }
];

const searchSuggestions = [
  'API authentication',
  'Cloud migration',
  'AI integration',
  'Security compliance',
  'DevOps pipeline',
  'Machine learning',
  'Container deployment',
  'Data analytics'
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? documentationCategories 
    : documentationCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, guides, and resources for Zion Tech Group services. Find everything you need to get started and succeed."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Comprehensive guides, tutorials, and resources to help you succeed with Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              
              {/* Search Suggestions */}
              {searchQuery && (
                <div className="mt-2 text-left">
                  <p className="text-slate-400 text-sm mb-2">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(suggestion)}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded hover:bg-slate-600/50 transition-colors duration-300"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most viewed and helpful documentation articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <article.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {article.category}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        article.difficulty === 'Beginner' ? 'bg-green-400/10 text-green-400' :
                        article.difficulty === 'Intermediate' ? 'bg-yellow-400/10 text-yellow-400' :
                        'bg-red-400/10 text-red-400'
                      }`}>
                        {article.difficulty}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {article.title}
                    </h4>
                    <p className="text-slate-300 text-sm mb-3">{article.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div className="flex items-center space-x-4">
                        <span>{article.readTime}</span>
                        <span>{article.views} views</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the documentation you need organized by topic and difficulty level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{category.title}</h4>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-2 mb-4">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        {article.title}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        article.difficulty === 'Beginner' ? 'bg-green-400/10 text-green-400' :
                        article.difficulty === 'Intermediate' ? 'bg-yellow-400/10 text-yellow-400' :
                        'bg-red-400/10 text-red-400'
                      }`}>
                        {article.difficulty}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-sm font-medium">View All</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              More ways to learn and get help with our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Support Center</h4>
              <p className="text-slate-300 text-sm mb-4">Get help from our support team and community</p>
              <Link
                to="/help"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Visit Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Community Forum</h4>
              <p className="text-slate-300 text-sm mb-4">Connect with other developers and share knowledge</p>
              <Link
                to="/community"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Join Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Video Tutorials</h4>
              <p className="text-slate-300 text-sm mb-4">Watch step-by-step video guides and tutorials</p>
              <Link
                to="/tutorials"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                Watch Videos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our support team is here to help. Get in touch for personalized assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-400/25"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-colors duration-300"
              >
                Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
