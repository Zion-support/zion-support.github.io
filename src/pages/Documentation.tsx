import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  Download, 
  Search, 
  ChevronRight, 
  ExternalLink, 
  Star, 
  Clock, 
  Users, 
  Bookmark, 
  Filter,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Globe,
  Database,
  Network,
  Smartphone,
  Settings,
  HelpCircle,
  Info,
  AlertCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Award,
  ChevronDown,
  ChevronUp,
  Eye,
  Heart,
  Share2,
  Copy,
  Printer,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  Tag,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  Image,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info as InfoIcon,
  QuestionMark,
  Tool,
  Wrench,
  Hammer,
  Scissors,
  Palette,
  Brush,
  PenTool,
  MousePointer,
  MousePointer2,
  Hand,
  HandMetal,
  HandHeart,
  Handshake,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Heart as HeartIcon,
  HeartOff,
  MessageSquare,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertCircle as AlertCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon2,
  HelpCircle as HelpCircleIcon,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  SpeakerOff,
  Play as PlayIcon,
  Pause as PauseIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon3,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
} from 'lucide-react';

interface DocCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  articles: DocArticle[];
}

interface DocArticle {
  title: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  url?: string;
  tags?: string[];
}

interface ApiDoc {
  name: string;
  description: string;
  version: string;
  status: 'Stable' | 'Beta' | 'Alpha' | 'Deprecated';
  endpoints: number;
  url?: string;
}

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const docCategories: DocCategory[] = [
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
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: Database,
      description: 'Data processing and analytics documentation',
      articles: [
        { title: 'Data Pipeline Setup', readTime: '25 min', difficulty: 'Intermediate' },
        { title: 'Business Intelligence Dashboard', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Data Visualization Guide', readTime: '15 min', difficulty: 'Beginner' },
        { title: 'Advanced Analytics', readTime: '35 min', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      icon: Smartphone,
      description: 'Mobile app development guides',
      articles: [
        { title: 'Mobile App Setup', readTime: '20 min', difficulty: 'Intermediate' },
        { title: 'Cross-Platform Development', readTime: '30 min', difficulty: 'Intermediate' },
        { title: 'Mobile Testing Guide', readTime: '15 min', difficulty: 'Beginner' },
        { title: 'App Store Deployment', readTime: '25 min', difficulty: 'Intermediate' }
      ]
    }
  ];

  const apiDocs: ApiDoc[] = [
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
      name: 'SDK Libraries',
      description: 'Client libraries for popular programming languages',
      version: 'v2.0.0',
      status: 'Stable',
      endpoints: 12
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? docCategories 
    : docCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = filteredCategories.flatMap(cat => 
    cat.articles.filter(article => 
      !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.difficulty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Advanced':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Stable':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Beta':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Alpha':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Deprecated':
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group services, APIs, and development guides. Get started quickly with our detailed tutorials and references."
        keywords="documentation, API docs, tutorials, guides, Zion Tech Group, development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Everything you need to get started with Zion Tech Group services. 
                From quick start guides to advanced API documentation.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation, APIs, or guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by category. 
                Find guides, tutorials, and references for all our services.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                All Categories
              </button>
              {docCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      {category.articles.slice(0, 3).map((article, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{article.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-400">{article.readTime}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                {article.difficulty}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {expandedCategory === category.id ? 'Show Less' : 'View All Articles'}
                      {expandedCategory === category.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3"
                      >
                        {category.articles.slice(3).map((article, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">{article.title}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-400">{article.readTime}</span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                  {article.difficulty}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API references, SDKs, and integration guides for developers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiDocs.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{api.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{api.description}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white font-mono">{api.version}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(api.status)}`}>
                        {api.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Endpoints:</span>
                      <span className="text-white">{api.endpoints}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    View Docs
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides and tutorials.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: '5-Minute Setup',
                  description: 'Get your first project running in under 5 minutes',
                  time: '5 min',
                  difficulty: 'Beginner',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Brain,
                  title: 'AI Service Integration',
                  description: 'Integrate AI services into your existing applications',
                  time: '15 min',
                  difficulty: 'Intermediate',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Deployment',
                  description: 'Deploy your applications to the cloud with ease',
                  time: '20 min',
                  difficulty: 'Intermediate',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Shield,
                  title: 'Security Setup',
                  description: 'Configure security and compliance for your projects',
                  time: '25 min',
                  difficulty: 'Advanced',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  icon: Database,
                  title: 'Data Pipeline',
                  description: 'Set up data processing and analytics pipelines',
                  time: '30 min',
                  difficulty: 'Advanced',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile App',
                  description: 'Build and deploy your first mobile application',
                  time: '45 min',
                  difficulty: 'Intermediate',
                  color: 'from-yellow-500 to-orange-500'
                }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${guide.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <guide.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                  <p className="text-gray-300 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{guide.time}</span>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <a
                    href="#"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Start Guide
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help 
                with any documentation questions or technical issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}