import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Play,
  ExternalLink,
  Star,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Zap,
  Brain,
  Cloud,
  Shield,
  Atom,
  Network,
  Users as UsersIcon,
  Building,
  Globe,
  Server,
  Database,
  Lock,
  Heart,
  ShoppingCart,
  TrendingUp,
  Award,
  Rocket,
  Leaf,
  Satellite,
  Cpu,
  Truck,
  BarChart3,
  Calendar,
  MapPin
} from 'lucide-react';

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 0 },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, count: 0 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 0 },
    { id: 'billing', name: 'Billing & Account', icon: DollarSign, count: 0 },
    { id: 'technical', name: 'Technical Support', icon: Cpu, count: 0 }
  ];

  const helpArticles = [
    // Getting Started
    {
      id: 'getting-started-1',
      title: 'How to Get Started with Zion Tech Group',
      content: 'Complete guide to setting up your account, choosing services, and beginning your digital transformation journey.',
      category: 'getting-started',
      tags: ['onboarding', 'setup', 'first-steps'],
      difficulty: 'Beginner',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'getting-started-2',
      title: 'Account Setup and Verification',
      content: 'Step-by-step instructions for creating your account, verifying your identity, and setting up security measures.',
      category: 'getting-started',
      tags: ['account', 'verification', 'security'],
      difficulty: 'Beginner',
      readTime: '3 min read',
      featured: false
    },

    // AI Services
    {
      id: 'ai-services-1',
      title: 'Understanding AI Business Intelligence',
      content: 'Learn how our AI-powered BI platform works, what data it analyzes, and how to interpret the insights.',
      category: 'ai-services',
      tags: ['AI', 'business intelligence', 'analytics'],
      difficulty: 'Intermediate',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 'ai-services-2',
      title: 'AI Model Training and Customization',
      content: 'Guide to training custom AI models, fine-tuning parameters, and adapting solutions to your specific needs.',
      category: 'ai-services',
      tags: ['AI training', 'customization', 'models'],
      difficulty: 'Advanced',
      readTime: '12 min read',
      featured: false
    },

    // Cloud & Infrastructure
    {
      id: 'cloud-1',
      title: 'Cloud Migration Best Practices',
      content: 'Comprehensive guide to migrating your infrastructure to the cloud, including planning, execution, and optimization.',
      category: 'cloud-infrastructure',
      tags: ['cloud migration', 'best practices', 'planning'],
      difficulty: 'Intermediate',
      readTime: '10 min read',
      featured: true
    },
    {
      id: 'cloud-2',
      title: 'DevOps Pipeline Configuration',
      content: 'Set up automated CI/CD pipelines, testing frameworks, and deployment strategies for your applications.',
      category: 'cloud-infrastructure',
      tags: ['DevOps', 'CI/CD', 'automation'],
      difficulty: 'Advanced',
      readTime: '15 min read',
      featured: false
    },

    // Security
    {
      id: 'security-1',
      title: 'Implementing Zero Trust Security',
      content: 'Complete guide to implementing zero-trust security architecture for your organization.',
      category: 'security',
      tags: ['zero trust', 'security', 'architecture'],
      difficulty: 'Advanced',
      readTime: '20 min read',
      featured: true
    },
    {
      id: 'security-2',
      title: 'Security Compliance Guidelines',
      content: 'Navigate SOC 2, ISO 27001, and other compliance requirements with our comprehensive security framework.',
      category: 'security',
      tags: ['compliance', 'SOC 2', 'ISO 27001'],
      difficulty: 'Intermediate',
      readTime: '12 min read',
      featured: false
    },

    // Billing
    {
      id: 'billing-1',
      title: 'Understanding Your Bill',
      content: 'Break down your monthly invoice, understand charges, and learn how to optimize costs.',
      category: 'billing',
      tags: ['billing', 'costs', 'optimization'],
      difficulty: 'Beginner',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 'billing-2',
      title: 'Payment Methods and Billing Cycles',
      content: 'Set up payment methods, understand billing cycles, and manage your account billing preferences.',
      category: 'billing',
      tags: ['payment', 'billing cycles', 'preferences'],
      difficulty: 'Beginner',
      readTime: '3 min read',
      featured: false
    },

    // Technical Support
    {
      id: 'technical-1',
      title: 'API Documentation and Integration',
      content: 'Comprehensive API documentation, integration guides, and code examples for developers.',
      category: 'technical',
      tags: ['API', 'documentation', 'integration'],
      difficulty: 'Advanced',
      readTime: '25 min read',
      featured: false
    },
    {
      id: 'technical-2',
      title: 'Troubleshooting Common Issues',
      content: 'Quick solutions to common technical problems, error codes, and performance issues.',
      category: 'technical',
      tags: ['troubleshooting', 'errors', 'performance'],
      difficulty: 'Intermediate',
      readTime: '8 min read',
      featured: false
    }
  ];

  const videoTutorials = [
    {
      id: 'video-1',
      title: 'Getting Started with Zion Tech Group',
      duration: '15:30',
      category: 'getting-started',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'video-2',
      title: 'AI Services Overview and Demo',
      duration: '22:15',
      category: 'ai-services',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'video-3',
      title: 'Cloud Infrastructure Setup',
      duration: '18:45',
      category: 'cloud-infrastructure',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  // Calculate category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = helpArticles.length;
    } else {
      category.count = helpArticles.filter(article => article.category === category.id).length;
    }
  });

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <HelpCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to your questions, learn how to use our services, and get the support you need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat Support</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Call Now
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {filteredArticles.filter(article => article.featured).length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Articles</h2>
                <div className="space-y-4">
                  {filteredArticles.filter(article => article.featured).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                              Featured
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {article.difficulty}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                          <p className="text-gray-600 mb-3">{article.content}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {article.readTime}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              Popular
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={`/help/${article.id}`}
                          className="ml-4 p-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {selectedCategory === 'all' ? 'All Help Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              <div className="space-y-4">
                {filteredArticles.filter(article => !article.featured).map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {article.difficulty}
                          </span>
                          <span className="text-sm text-gray-500">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{article.content}</p>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={`/help/${article.id}`}
                        className="ml-4 p-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              )}
            </div>

            {/* Video Tutorials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Video Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoTutorials.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                        <Play className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <span className="text-sm text-gray-500">
                        {categories.find(c => c.id === video.category)?.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/faq"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
