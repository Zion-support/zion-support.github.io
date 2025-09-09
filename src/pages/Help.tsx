import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  Clock,
  Users
} from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { title: 'Welcome to Zion Tech Group', url: '/help/welcome' },
        { title: 'Creating Your First Account', url: '/help/create-account' },
        { title: 'Navigating the Platform', url: '/help/navigation' },
        { title: 'Setting Up Your Profile', url: '/help/profile-setup' }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: HelpCircle,
      description: 'Understanding our AI and technology services',
      articles: [
        { title: 'AI Services Overview', url: '/help/ai-services' },
        { title: 'Quantum Computing Solutions', url: '/help/quantum-computing' },
        { title: 'Cybersecurity Services', url: '/help/cybersecurity' },
        { title: 'Cloud & DevOps Solutions', url: '/help/cloud-devops' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: FileText,
      description: 'Information about pricing, billing, and payments',
      articles: [
        { title: 'Understanding Our Pricing', url: '/help/pricing' },
        { title: 'Payment Methods', url: '/help/payment-methods' },
        { title: 'Billing Cycles', url: '/help/billing-cycles' },
        { title: 'Invoice Management', url: '/help/invoices' }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: MessageCircle,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'Common Technical Issues', url: '/help/technical-issues' },
        { title: 'API Documentation', url: '/help/api-docs' },
        { title: 'Integration Guides', url: '/help/integrations' },
        { title: 'Performance Optimization', url: '/help/performance' }
      ]
    },
    {
      id: 'training',
      title: 'Training & Resources',
      icon: Video,
      description: 'Video tutorials and learning resources',
      articles: [
        { title: 'Video Tutorial Library', url: '/help/video-tutorials' },
        { title: 'Webinar Schedule', url: '/help/webinars' },
        { title: 'Best Practices Guides', url: '/help/best-practices' },
        { title: 'Case Studies', url: '/help/case-studies' }
      ]
    }
  ];

  const popularArticles = [
    'How to Get Started with AI Services',
    'Understanding Quantum Computing Benefits',
    'Cybersecurity Best Practices',
    'Setting Up Cloud Infrastructure',
    'AI Model Training Guide',
    'API Integration Tutorial'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send Email',
      url: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our experts directly',
      action: 'Call Now',
      url: 'tel:+13024640950'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with support in real-time',
      action: 'Start Chat',
      url: '/contact'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = helpCategories.flatMap(cat => cat.articles)
    .filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <HelpCircle className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Contact */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <method.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <a
                  href={method.url}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  {method.action}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Help Categories */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Help Categories</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                All
              </button>
              {helpCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a
                        href={article.url}
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Articles */}
        {searchQuery && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Search Results</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              {filteredArticles.length > 0 ? (
                <div className="space-y-3">
                  {filteredArticles.map((article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <FileText className="h-5 w-5 text-blue-400 mr-3" />
                      <span className="text-gray-300 hover:text-white">{article.title}</span>
                      <ChevronRight className="h-4 w-4 text-gray-500 ml-auto" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <HelpCircle className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No articles found for "{searchQuery}"</p>
                  <p className="text-gray-500">Try different keywords or browse our categories above.</p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Popular Articles */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm text-blue-400">Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                <a
                  href={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Read Article
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Still Need Help CTA */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Support
              </a>
              <a
                href="/faq"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                View FAQ
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Help;