import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  User,
  Settings,
  Tool,
  Wrench,
  Cog,
  Key,
  Unlock,
  Eye,
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
  Download,
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

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'All Help', icon: HelpCircle, count: 156 },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, count: 23 },
    { id: 'account', name: 'Account & Billing', icon: User, count: 18 },
    { id: 'technical', name: 'Technical Issues', icon: Wrench, count: 45 },
    { id: 'api', name: 'API & Integration', icon: Cog, count: 32 },
    { id: 'security', name: 'Security & Privacy', icon: Key, count: 15 },
    { id: 'billing', name: 'Billing & Plans', icon: CreditCard, count: 12 },
    { id: 'general', name: 'General Questions', icon: HelpCircle, count: 11 }
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'How to Get Started with Zion Tech Group Services',
      description: 'Complete guide to setting up your account and using our core services.',
      category: 'getting-started',
      readTime: '8 min',
      helpful: 234,
      tags: ['Setup', 'Getting Started', 'Account']
    },
    {
      id: 2,
      title: 'Troubleshooting Common API Errors',
      description: 'Solutions for the most frequently encountered API integration issues.',
      category: 'api',
      readTime: '12 min',
      helpful: 189,
      tags: ['API', 'Integration', 'Troubleshooting']
    },
    {
      id: 3,
      title: 'Understanding Your Billing and Usage',
      description: 'Learn how to read your invoices and understand your service usage.',
      category: 'billing',
      readTime: '6 min',
      helpful: 156,
      tags: ['Billing', 'Usage', 'Invoices']
    },
    {
      id: 4,
      title: 'Security Best Practices for Your Account',
      description: 'Essential security measures to protect your account and data.',
      category: 'security',
      readTime: '10 min',
      helpful: 142,
      tags: ['Security', 'Best Practices', 'Account']
    }
  ];

  const contactOptions = [
    {
      id: 'email',
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      responseTime: '24 hours',
      bestFor: 'Non-urgent issues, detailed questions',
      action: 'Send Email'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: Phone,
      responseTime: 'Immediate',
      bestFor: 'Urgent issues, complex problems',
      action: 'Call Now'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Real-time chat with support agents',
      icon: MessageSquare,
      responseTime: '5 minutes',
      bestFor: 'Quick questions, real-time help',
      action: 'Start Chat'
    }
  ];

  const filteredArticles = popularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleContact = (method: string) => {
    switch (method) {
      case 'email':
        window.location.href = 'mailto:support@ziontechgroup.com';
        break;
      case 'phone':
        window.location.href = 'tel:+1-800-ZION-TECH';
        break;
      case 'chat':
        // In a real app, this would open a chat widget
        console.log('Opening chat...');
        break;
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
              Support Center
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Get help with Zion Tech Group services, find answers to common questions, 
              and connect with our support team when you need assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Help</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Multiple Channels</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Quick Help Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">How Can We Help?</h2>
          <p className="text-zinc-300 text-center">Choose a category to find relevant help articles</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-zinc-400 text-sm">{category.count} articles</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popular Help Articles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Popular Help Articles</h2>
          <p className="text-zinc-300 text-center">Most helpful articles based on user feedback</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                  {helpCategories.find(c => c.id === article.category)?.name}
                </span>
                <div className="flex items-center space-x-1 text-zinc-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {article.title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-4">
                {article.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-zinc-500">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{article.helpful} found helpful</span>
                  </span>
                </div>
                <Link
                  to={`/docs/${article.category}/${article.id}`}
                  className="text-zion-cyan hover:text-zion-cyan-light font-medium text-sm flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Need More Help?</h2>
            <p className="text-zinc-300 text-center">Choose the best way to get in touch with our support team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-zinc-400 mb-4">{option.description}</p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="text-zinc-300">
                      <span className="font-medium">Response Time:</span> {option.responseTime}
                    </div>
                    <div className="text-zinc-300">
                      <span className="font-medium">Best For:</span> {option.bestFor}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleContact(option.id)}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    {option.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Additional Resources</h2>
          <p className="text-zinc-300 text-center">Explore more ways to get help and learn</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Documentation</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Comprehensive guides, API references, and technical documentation
            </p>
            <Link
              to="/documentation"
              className="text-zion-cyan hover:text-zion-cyan-light font-medium text-sm flex items-center space-x-1"
            >
              <span>Browse Docs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-zion-purple" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Video Tutorials</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Step-by-step video guides and tutorials for common tasks
            </p>
            <Link
              to="/tutorials"
              className="text-zion-purple hover:text-zion-purple-light font-medium text-sm flex items-center space-x-1"
            >
              <span>Watch Videos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-zion-blue/20 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-zion-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Community Forum</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Connect with other users and get help from the community
            </p>
            <Link
              to="/community"
              className="text-zion-blue hover:text-zion-blue-light font-medium text-sm flex items-center space-x-1"
            >
              <span>Join Community</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out 
              for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/documentation"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Browse Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}