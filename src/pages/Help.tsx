import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  FileText, 
  Download, 
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Shield,
  Users,
  Star,
  Award,
  HelpCircle,
  Lightbulb,
  Clock,
  Calendar,
  MapPin,
  Globe
} from 'lucide-react';

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  articles: HelpArticle[];
}

interface HelpArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const helpCategories: HelpCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      articles: [
        {
          id: 'welcome-guide',
          title: 'Welcome to Zion Tech Group',
          description: 'Your complete guide to getting started with our platform and services',
          readTime: '5 min read',
          difficulty: 'Beginner',
          tags: ['onboarding', 'basics', 'welcome']
        },
        {
          id: 'first-project',
          title: 'Creating Your First Project',
          description: 'Step-by-step guide to setting up your first project with us',
          readTime: '8 min read',
          difficulty: 'Beginner',
          tags: ['projects', 'setup', 'tutorial']
        },
        {
          id: 'account-setup',
          title: 'Account Setup & Configuration',
          description: 'Complete your profile and configure your account settings',
          readTime: '6 min read',
          difficulty: 'Beginner',
          tags: ['account', 'profile', 'settings']
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Master our AI-powered solutions and tools',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      articles: [
        {
          id: 'ai-overview',
          title: 'AI Services Overview',
          description: 'Comprehensive overview of our AI and machine learning capabilities',
          readTime: '10 min read',
          difficulty: 'Intermediate',
          tags: ['AI', 'machine learning', 'overview']
        },
        {
          id: 'ai-integration',
          title: 'AI Integration Guide',
          description: 'How to integrate AI services into your existing workflows',
          readTime: '15 min read',
          difficulty: 'Advanced',
          tags: ['AI', 'integration', 'workflows']
        },
        {
          id: 'ai-best-practices',
          title: 'AI Best Practices',
          description: 'Industry best practices for implementing AI solutions',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['AI', 'best practices', 'implementation']
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Navigate our cloud infrastructure and DevOps solutions',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      articles: [
        {
          id: 'cloud-setup',
          title: 'Cloud Infrastructure Setup',
          description: 'Set up and configure your cloud infrastructure',
          readTime: '20 min read',
          difficulty: 'Intermediate',
          tags: ['cloud', 'infrastructure', 'setup']
        },
        {
          id: 'devops-pipeline',
          title: 'DevOps Pipeline Configuration',
          description: 'Configure CI/CD pipelines and deployment workflows',
          readTime: '25 min read',
          difficulty: 'Advanced',
          tags: ['devops', 'CI/CD', 'deployment']
        },
        {
          id: 'monitoring',
          title: 'Monitoring & Observability',
          description: 'Set up monitoring, logging, and alerting systems',
          readTime: '18 min read',
          difficulty: 'Intermediate',
          tags: ['monitoring', 'logging', 'alerting']
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Understand our security measures and compliance standards',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      articles: [
        {
          id: 'security-overview',
          title: 'Security Overview',
          description: 'Comprehensive guide to our security measures and protocols',
          readTime: '12 min read',
          difficulty: 'Intermediate',
          tags: ['security', 'protocols', 'overview']
        },
        {
          id: 'compliance-guide',
          title: 'Compliance & Certifications',
          description: 'Learn about our compliance standards and certifications',
          readTime: '15 min read',
          difficulty: 'Intermediate',
          tags: ['compliance', 'certifications', 'standards']
        },
        {
          id: 'security-best-practices',
          title: 'Security Best Practices',
          description: 'Best practices for maintaining security in your environment',
          readTime: '20 min read',
          difficulty: 'Advanced',
          tags: ['security', 'best practices', 'maintenance']
        }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      description: 'Get help with billing, pricing, and support requests',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      articles: [
        {
          id: 'billing-guide',
          title: 'Billing & Pricing Guide',
          description: 'Understand our pricing structure and billing processes',
          readTime: '8 min read',
          difficulty: 'Beginner',
          tags: ['billing', 'pricing', 'processes']
        },
        {
          id: 'support-request',
          title: 'Submitting Support Requests',
          description: 'How to submit and track support requests effectively',
          readTime: '5 min read',
          difficulty: 'Beginner',
          tags: ['support', 'requests', 'tracking']
        },
        {
          id: 'escalation',
          title: 'Escalation Procedures',
          description: 'When and how to escalate support issues',
          readTime: '6 min read',
          difficulty: 'Beginner',
          tags: ['support', 'escalation', 'procedures']
        }
      ]
    }
  ];

  const allTags = Array.from(new Set(helpCategories.flatMap(cat => cat.articles.flatMap(article => article.tags))));
  const allDifficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesDifficulty = selectedDifficulty === 'all' || article.difficulty === selectedDifficulty;
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(selectedTag => article.tags.includes(selectedTag));
      
      return matchesSearch && matchesDifficulty && matchesTags;
    })
  })).filter(category => category.articles.length > 0);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedTags([]);
  };

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      action: 'Start Chat',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Call',
      description: 'Schedule a screen sharing session for complex issues',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const quickResources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation',
      description: 'Comprehensive technical documentation',
      link: '/documentation',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Downloads',
      description: 'SDKs, APIs, and tools',
      link: '/downloads',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Join our developer community',
      link: '/community',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Training',
      description: 'Free training and certification',
      link: '/training',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Find answers to your questions, learn best practices, and get the support you need 
            to succeed with Zion Tech Group's technology solutions.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles, tutorials, and guides..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h3 className="text-lg font-semibold text-white">Filters:</h3>
              
              {/* Difficulty Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-300 text-sm">Difficulty:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-2 bg-white/10 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Levels</option>
                  {allDifficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>

              {/* Tags Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-300 text-sm">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 8).map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedTags.includes(tag)
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedDifficulty !== 'all' || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchQuery || selectedDifficulty !== 'all' || selectedTags.length > 0) && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-300 text-sm">Active filters:</span>
                {searchQuery && (
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                    Search: "{searchQuery}"
                  </span>
                )}
                {selectedDifficulty !== 'all' && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                    Difficulty: {selectedDifficulty}
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6 mb-16"
        >
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white/5 border border-slate-600/30 rounded-2xl backdrop-blur-md overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                      <p className="text-slate-300">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">
                      {category.articles.length} article{category.articles.length !== 1 ? 's' : ''}
                    </span>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Category Articles */}
              {expandedCategory === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-600/30"
                >
                  <div className="p-6 space-y-4">
                    {category.articles.map((article, articleIndex) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                        className="p-4 bg-white/5 rounded-lg border border-slate-600/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-white mb-2">{article.title}</h4>
                            <p className="text-slate-300 mb-3">{article.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-slate-400 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                'bg-red-500/20 text-red-400 border border-red-500/30'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {article.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="ml-4 p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Get Direct Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 mb-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Response: {channel.responseTime}
                  </div>
                </div>
                <button className={`w-full py-2 bg-gradient-to-r ${channel.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-medium`}>
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Quick Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                <Link
                  to={resource.link}
                  className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${resource.color} bg-clip-text text-transparent hover:opacity-80 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out 
              if you can't find what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 bg-white/10 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Request Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;