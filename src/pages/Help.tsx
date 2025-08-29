import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  AlertCircle,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Help() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-600',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how to get started',
          href: '/help/getting-started/welcome',
          difficulty: 'Beginner',
          readTime: '5 min'
        },
        {
          title: 'Setting Up Your Account',
          description: 'Step-by-step guide to create and configure your account',
          href: '/help/getting-started/setup-account',
          difficulty: 'Beginner',
          readTime: '10 min'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          href: '/help/getting-started/first-project',
          difficulty: 'Beginner',
          readTime: '15 min'
        }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: BookOpen,
      color: 'from-purple-600 to-pink-600',
      articles: [
        {
          title: 'AI Business Intelligence Guide',
          description: 'Understanding and using AI-powered analytics',
          href: '/help/ai-services/business-intelligence',
          difficulty: 'Intermediate',
          readTime: '20 min'
        },
        {
          title: 'AI Sales Copilot Setup',
          description: 'Configure and optimize your AI sales assistant',
          href: '/help/ai-services/sales-copilot',
          difficulty: 'Intermediate',
          readTime: '25 min'
        },
        {
          title: 'AI Compliance Assistant',
          description: 'Setting up automated compliance monitoring',
          href: '/help/ai-services/compliance-assistant',
          difficulty: 'Advanced',
          readTime: '30 min'
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          href: '/help/cloud-devops/migration',
          difficulty: 'Advanced',
          readTime: '45 min'
        },
        {
          title: 'DevOps Pipeline Setup',
          description: 'Building automated CI/CD pipelines',
          href: '/help/cloud-devops/pipeline-setup',
          difficulty: 'Advanced',
          readTime: '40 min'
        },
        {
          title: 'Cost Optimization',
          description: 'Strategies for cloud cost management',
          href: '/help/cloud-devops/cost-optimization',
          difficulty: 'Intermediate',
          readTime: '25 min'
        }
      ]
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: BookOpen,
      color: 'from-red-600 to-orange-600',
      articles: [
        {
          title: 'Common Issues & Solutions',
          description: 'Quick fixes for frequently encountered problems',
          href: '/help/troubleshooting/common-issues',
          difficulty: 'Beginner',
          readTime: '15 min'
        },
        {
          title: 'Performance Optimization',
          description: 'Improve system performance and efficiency',
          href: '/help/troubleshooting/performance',
          difficulty: 'Intermediate',
          readTime: '30 min'
        },
        {
          title: 'Error Code Reference',
          description: 'Complete list of error codes and solutions',
          href: '/help/troubleshooting/error-codes',
          difficulty: 'All Levels',
          readTime: '10 min'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Services',
      description: 'Complete beginner guide to our AI solutions',
      href: '/help/getting-started/ai-services',
      views: 1247,
      category: 'Getting Started'
    },
    {
      title: 'Cloud Cost Optimization Strategies',
      description: 'Save money on your cloud infrastructure',
      href: '/help/cloud-devops/cost-optimization',
      views: 892,
      category: 'Cloud & DevOps'
    },
    {
      title: 'Troubleshooting Common AI Issues',
      description: 'Quick fixes for AI service problems',
      href: '/help/troubleshooting/ai-issues',
      views: 756,
      category: 'Troubleshooting'
    }
  ];

  const supportChannels = [
    {
      name: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      color: 'from-blue-600 to-cyan-600',
      href: 'mailto:support@ziontechgroup.com',
      responseTime: '24 hours'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: Phone,
      color: 'from-green-600 to-emerald-600',
      href: 'tel:+15551234567',
      responseTime: 'Immediate'
    },
    {
      name: 'Live Chat',
      description: 'Real-time chat support during business hours',
      icon: MessageCircle,
      color: 'from-purple-600 to-pink-600',
      href: '/contact',
      responseTime: '5 minutes'
    },
    {
      name: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      icon: FileText,
      color: 'from-orange-600 to-red-600',
      href: '/docs',
      responseTime: 'Instant'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers, tutorials, and contact our support team."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Help
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn how to use our services, and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Popular Articles</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most viewed help articles and tutorials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={article.href}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {article.views} views
                    </span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Help Categories</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Browse help articles organized by topic and difficulty level
          </p>
        </motion.div>

        <div className="space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-400">{category.articles.length} articles</p>
                  </div>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="border-t border-slate-700 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.articles.map((article, articleIndex) => (
                      <Link
                        key={article.title}
                        to={article.href}
                        className="group"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: articleIndex * 0.05 }}
                          className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                              article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {article.difficulty}
                            </span>
                            <span className="text-slate-400 text-xs flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-slate-400 text-sm mb-4">
                            {article.description}
                          </p>
                          <div className="flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get Support</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Multiple ways to get help and support for our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : '_self'} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {channel.description}
                  </p>
                  <div className="text-cyan-400 text-sm font-medium">
                    Response: {channel.responseTime}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Quick Actions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Common tasks and quick access to frequently needed resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <Link to="/docs">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Documentation
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Comprehensive guides and API references
                </p>
                <div className="text-cyan-400 text-sm font-medium">
                  View Docs
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <Link to="/tutorials">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Video Tutorials
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Step-by-step video guides
                </p>
                <div className="text-cyan-400 text-sm font-medium">
                  Watch Videos
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link to="/downloads">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Downloads
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  SDKs, tools, and resources
                </p>
                <div className="text-cyan-400 text-sm font-medium">
                  Download Files
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our support team is here to help you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
            <a
              href="tel:+15551234567"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}