import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Book, Search, Code, FileText, Video, Database, Cloud, Bot, Shield, 
  ArrowRight, CheckCircle, Star, TrendingUp, Users, Target, Zap
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const documentationCategories = [
    { id: 'all', name: 'All Documentation', icon: <Book className="w-6 h-6" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-6 h-6" /> },
    { id: 'api', name: 'API Reference', icon: <Code className="w-6 h-6" /> },
    { id: 'guides', name: 'User Guides', icon: <FileText className="w-6 h-6" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-6 h-6" /> },
    { id: 'integrations', name: 'Integrations', icon: <Database className="w-6 h-6" /> },
  ];

  const popularGuides = [
    {
      title: 'Getting Started with Zion AI',
      description: 'Learn the basics of integrating AI services into your applications',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '15 min',
      rating: 4.8,
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: 'API Authentication Guide',
      description: 'Complete guide to securing your API calls with authentication tokens',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '20 min',
      rating: 4.9,
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      category: 'guides',
      difficulty: 'Advanced',
      readTime: '45 min',
      rating: 4.7,
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive security setup and configuration guide',
      category: 'guides',
      difficulty: 'Intermediate',
      readTime: '30 min',
      rating: 4.6,
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      guides: [
        { name: 'Installation Guide', href: '#', description: 'Set up Zion Tech Group services in minutes' },
        { name: 'First Project', href: '#', description: 'Create your first AI-powered application' },
        { name: 'Configuration', href: '#', description: 'Configure services for your environment' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      guides: [
        { name: 'Authentication', href: '#', description: 'API key management and authentication' },
        { name: 'Endpoints', href: '#', description: 'All available API endpoints and parameters' },
        { name: 'Rate Limits', href: '#', description: 'Understanding API usage limits' }
      ]
    },
    {
      title: 'User Guides',
      description: 'Step-by-step instructions for common tasks',
      guides: [
        { name: 'Dashboard Setup', href: '#', description: 'Configure your admin dashboard' },
        { name: 'User Management', href: '#', description: 'Manage team access and permissions' },
        { name: 'Analytics', href: '#', description: 'Track usage and performance metrics' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Hands-on tutorials and examples',
      guides: [
        { name: 'AI Chatbot Integration', href: '#', description: 'Build a customer service chatbot' },
        { name: 'Data Processing Pipeline', href: '#', description: 'Create automated data workflows' },
        { name: 'Security Monitoring', href: '#', description: 'Set up real-time security alerts' }
      ]
    }
  ];

  const recentUpdates = [
    { title: 'New AI Model Documentation', date: '2024-01-15', type: 'New Feature' },
    { title: 'Updated API Rate Limits', date: '2024-01-10', type: 'Update' },
    { title: 'Enhanced Security Guide', date: '2024-01-05', type: 'Improvement' },
    { title: 'Cloud Migration Tutorial', date: '2024-01-01', type: 'New Tutorial' }
  ];

  const filteredGuides = popularGuides.filter(guide => {
    const matchesCategory = activeCategory === 'all' || guide.category === activeCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, and guides for Zion Tech Group services. Get started quickly with our detailed tutorials and examples."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Book className="w-4 h-4 mr-2" />
              Technical Documentation
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Everything you need to integrate and use Zion Tech Group's cutting-edge services.
              From quick start guides to advanced API references.
            </p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 pl-14 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {documentationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these essential guides to get up and running quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {guide.icon}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {guide.difficulty}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{guide.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{guide.title}</h3>
                <p className="text-gray-400 mb-6">{guide.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Book className="w-4 h-4 mr-1" />
                    {guide.readTime}
                  </span>
                  <span className="capitalize">{guide.category.replace('-', ' ')}</span>
                </div>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center text-gray-400 text-lg py-10">
              No guides found for the selected criteria.
            </div>
          )}
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by topic and complexity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400 mb-6">{section.description}</p>

                <div className="space-y-4">
                  {section.guides.map((guide) => (
                    <div key={guide.name} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <div>
                        <h4 className="font-semibold text-white">{guide.name}</h4>
                        <p className="text-sm text-gray-400">{guide.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Recent Updates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up to date with the latest documentation changes and new features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    update.type === 'New Feature' ? 'bg-green-500/20 text-green-400' :
                    update.type === 'Update' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {update.type}
                  </span>
                  <span className="text-sm text-gray-400">{update.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{update.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-300">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
