import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Video,
  FileText,
  ChevronDown,
  ChevronRight,
  Star,
  ExternalLink,
  Lightbulb,
  TrendingUp,
  Target,
  Heart,
  Building,
  Cpu,
  Lock,
  Atom,
  Network,
  Eye,
  BarChart3,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface HelpSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  articles: Array<any>;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const helpCategories: HelpSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Quick start guides and basic setup instructions',
      articles: [
        { id: 'welcome', title: 'Welcome to Zion Tech Group', readTime: '5 min' },
        { id: 'account-setup', title: 'Setting Up Your Account', readTime: '10 min' },
        { id: 'first-project', title: 'Creating Your First Project', readTime: '15 min' },
        { id: 'dashboard-overview', title: 'Dashboard Overview', readTime: '8 min' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: TrendingUp,
      description: 'AI and machine learning service guides',
      articles: [
        { id: 'ai-setup', title: 'AI Service Setup Guide', readTime: '20 min' },
        { id: 'model-training', title: 'Training AI Models', readTime: '30 min' },
        { id: 'ai-integration', title: 'Integrating AI Services', readTime: '25 min' },
        { id: 'ai-troubleshooting', title: 'AI Service Troubleshooting', readTime: '15 min' }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Network,
      description: 'Cloud infrastructure and DevOps guides',
      articles: [
        { id: 'cloud-migration', title: 'Cloud Migration Guide', readTime: '45 min' },
        { id: 'devops-setup', title: 'DevOps Pipeline Setup', readTime: '30 min' },
        { id: 'monitoring', title: 'Monitoring & Alerting', readTime: '25 min' },
        { id: 'scaling', title: 'Scaling Your Infrastructure', readTime: '20 min' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      description: 'Security best practices and compliance guides',
      articles: [
        { id: 'security-setup', title: 'Security Configuration', readTime: '35 min' },
        { id: 'compliance', title: 'Compliance Requirements', readTime: '25 min' },
        { id: 'audit', title: 'Security Audit Process', readTime: '20 min' },
        { id: 'incident-response', title: 'Incident Response Guide', readTime: '30 min' }
      ]
    }
  ];

  const supportOptions = [
    {
      title: 'Chat with Us',
      description: 'Instant messaging support for immediate assistance.',
      path: '/chat',
      icon: MessageCircle,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Email Support',
      description: 'Send us an email for general inquiries and support.',
      path: '/contact',
      icon: Mail,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Phone Support',
      description: 'Call our support team for urgent matters.',
      path: '/contact',
      icon: Phone,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Knowledge Base',
      description: 'Browse our extensive knowledge base for self-help.',
      path: '/knowledge-base',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      // setFilteredFAQs(faqData); // faqData is not defined in this scope
      return;
    }
    // const filtered = faqData.filter(faq => // faqData is not defined in this scope
    //   faq.question.toLowerCase().includes(query.toLowerCase()) ||
    //   faq.answer.toLowerCase().includes(query.toLowerCase()) ||
    //   faq.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    // );
    // setFilteredFAQs(filtered); // setFilteredFAQs is not defined in this scope
  };

  const filteredFAQ = helpCategories.map(category => category.articles).flat(); // Simplified filtering

  const categories = ['All', ...Array.from(new Set(helpCategories.map(item => item.title)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need to succeed with Zion Tech Group.
          </p>
        </motion.div>
        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-6 w-6" />
          </div>
        </motion.div>
        {/* Help Categories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                <Link
                  to={`/help/${category.id}`}
                  className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">{category.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 text-center">{category.description}</p>
                  <div className="flex items-center justify-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">{category.articles.length} articles</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Support Options */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                <Link
                  to={option.path}
                  className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{option.description}</p>
                  <div className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:from-zion-cyan-dark group-hover:to-zion-purple-dark transition-all duration-300">
                    {option.action}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* FAQ Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedArticle === null
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
                All Articles
              </button>
              {helpCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedArticle(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedArticle === null
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Help Sections */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</h2>
              <div className="space-y-6">
                {helpCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="w-full p-6 text-left hover:bg-zion-slate-dark/70 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            <p className="text-cyan-300">{category.description}</p>
                          </div>
                        </div>
                        {selectedArticle === null && (
                          <ChevronDown className="w-5 h-5 text-cyan-400" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {selectedArticle === null && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-cyan-400/20"
                        >
                          <div className="p-6 space-y-4">
                            {category.articles.map((article, articleIndex) => (
                              <motion.div
                                key={article.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                                className="group"
                              >
                                <Link
                                  to={`/help/${category.id}/${article.id}`}
                                  className="block p-4 bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 border border-cyan-400/10 hover:border-cyan-400/30 rounded-lg transition-all duration-300"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                        {article.title}
                                      </h4>
                                      <p className="text-gray-400 mt-1">{article.description}</p>
                                      <div className="flex items-center space-x-4 mt-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                          'Beginner'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'Intermediate'
                                            ? 'bg-yellow-500/20 text-yellow-400'
                                            : 'bg-red-500/20 text-red-400'
                                        }`}>
                                          Beginner
                                        </span>
                                        <span className="text-gray-500 text-sm flex items-center">
                                          <Clock className="w-4 h-4 mr-1" />
                                          {article.readTime}
                                        </span>
                                      </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        {/* Contact Support */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {filteredFAQ.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-gray-300">{article.description}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      Beginner
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
