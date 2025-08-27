import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Video, MessageCircle, Phone, Mail, FileText, Users2, Settings, Shield, Cloud, Brain, Zap, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HelpArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
}
interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  articleCount: number;
}
const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const helpCategories: HelpCategory[] = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: BookOpen,
      color: 'bg-blue-500',
      articleCount: 8
    },
    {
      id: 'services',
      name: 'Services',
      description: 'Understand our services and how to use them',
      icon: Settings,
      color: 'bg-green-500',
      articleCount: 12
    },
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      description: 'AI and machine learning service guides',
      icon: Brain,
      color: 'bg-purple-500',
      articleCount: 15
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security services and best practices',
      icon: Shield,
      color: 'bg-red-500',
      articleCount: 10
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps services',
      icon: Cloud,
      color: 'bg-indigo-500',
      articleCount: 14
    },
    {
      id: 'support',
      name: 'Technical Support',
      description: 'Get help with technical issues',
      icon: HelpCircle,
      color: 'bg-orange-500',
      articleCount: 20
    }
  ];
  const helpArticles: HelpArticle[] = [
    // Getting Started Articles
    {
      id: 'welcome-to-zion',
      title: 'Welcome to Zion Tech Group',
      description: 'Get started with Zion Tech Group and learn about our platform',
      category: 'getting-started',
      tags: ['welcome', 'introduction', 'platform'],
      content: 'Welcome to Zion Tech Group! This guide will help you get started with our platform...'
    },
    {
      id: 'create-account',
      title: 'Creating Your Account',
      description: 'Step-by-step guide to creating your Zion Tech Group account',
      category: 'getting-started',
      tags: ['account', 'registration', 'setup'],
      content: 'Follow these steps to create your Zion Tech Group account...'
    },
    {
      id: 'first-project',
      title: 'Starting Your First Project',
      description: 'Learn how to start your first project on our platform',
      category: 'getting-started',
      tags: ['project', 'first-time', 'setup'],
      content: 'Ready to start your first project? Here\'s how to get going...'
    },
    // Services Articles
    {
      id: 'ai-services-overview',
      title: 'AI Services Overview',
      description: 'Comprehensive guide to our AI services and capabilities',
      category: 'services',
      tags: ['AI', 'services', 'overview'],
      content: 'Our AI services include machine learning, natural language processing...'
    },
    {
      id: 'cybersecurity-services',
      title: 'Cybersecurity Services Guide',
      description: 'Understanding our cybersecurity offerings and implementation',
      category: 'services',
      tags: ['cybersecurity', 'security', 'services'],
      content: 'Our cybersecurity services are designed to protect your organization...'
    },
    // AI Solutions Articles
    {
      id: 'ml-implementation',
      title: 'Machine Learning Implementation',
      description: 'Best practices for implementing ML solutions',
      category: 'ai-solutions',
      tags: ['machine learning', 'implementation', 'best practices'],
      content: 'Implementing machine learning solutions requires careful planning...'
    },
    {
      id: 'nlp-services',
      title: 'Natural Language Processing Services',
      description: 'Guide to our NLP capabilities and use cases',
      category: 'ai-solutions',
      tags: ['NLP', 'language', 'AI'],
      content: 'Natural Language Processing enables computers to understand human language...'
    },
    // Cybersecurity Articles
    {
      id: 'security-audit',
      title: 'Security Audit Process',
      description: 'Understanding our security audit methodology',
      category: 'cybersecurity',
      tags: ['security audit', 'assessment', 'cybersecurity'],
      content: 'Our security audit process follows industry best practices...'
    },
    {
      id: 'incident-response',
      title: 'Incident Response Guide',
      description: 'What to do during a security incident',
      category: 'cybersecurity',
      tags: ['incident response', 'security', 'emergency'],
      content: 'In the event of a security incident, follow these steps...'
    },
    // Cloud & DevOps Articles
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Guide',
      description: 'Step-by-step cloud migration process',
      category: 'cloud-devops',
      tags: ['cloud migration', 'AWS', 'Azure', 'Google Cloud'],
      content: 'Cloud migration is a complex process that requires careful planning...'
    },
    {
      id: 'devops-practices',
      title: 'DevOps Best Practices',
      description: 'Implementing DevOps in your organization',
      category: 'cloud-devops',
      tags: ['DevOps', 'CI/CD', 'automation'],
      content: 'DevOps practices help organizations deliver software faster...'
    },
    // Technical Support Articles
    {
      id: 'troubleshooting',
      title: 'Common Issues & Troubleshooting',
      description: 'Solutions to frequently encountered problems',
      category: 'support',
      tags: ['troubleshooting', 'common issues', 'support'],
      content: 'This guide covers common issues and their solutions...'
    },
    {
      id: 'contact-support',
      title: 'Contacting Technical Support',
      description: 'How to get help from our technical support team',
      category: 'support',
      tags: ['support', 'contact', 'help'],
      content: 'Our technical support team is available to help you...'
    }
  ];
  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const getCategoryColor = (categoryId: string) => {
    const category = helpCategories.find(cat => cat.id === categoryId);
    return category?.color || 'bg-gray-500';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, tutorials, and support resources to help you get the most out of Zion Tech Group's services.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, and guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-zion-cyan focus:border-transparent shadow-sm"
            />
          </div>
        </motion.div>
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600">Get help from our team</p>
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+1 (302) 464-0950</p>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600">info@ziontechgroup.com</p>
            </a>
            <Link
              to="/faq"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <HelpCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
              <p className="text-sm text-gray-600">Common questions</p>
            </Link>
          </div>
        </motion.div>
        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`text-left p-6 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    selectedCategory === category.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
        {/* Help Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Articles' : `${helpCategories.find(cat => cat.id === selectedCategory)?.name} Articles`}
            </h2>
            <span className="text-gray-500">{filteredArticles.length} articles found</span>
          </div>
          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(article.category)}`}>
                          {helpCategories.find(cat => cat.id === article.category)?.name}
                        </span>
                        <span className="text-sm text-gray-500">{article.tags.join(', ')}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                      <div className="flex items-center gap-4">
                        <button className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm">
                          Read Article →
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm">
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.div>
        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Our expert support team is available to help you with any questions or issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Start Chat
                </button>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Call us directly for immediate assistance
                </p>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Send us a detailed message
                </p>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* External Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/docs"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <FileText className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Technical guides and API docs</p>
            </Link>
            <Link
              to="/webinars"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Video className="w-8 h-8 text-zion-purple mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600">Learn through video content</p>
            </Link>
            <Link
              to="/community"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Users2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600">Join user discussions</p>
            </Link>
            <Link
              to="/training"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-sm text-gray-600">Professional training programs</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Help;