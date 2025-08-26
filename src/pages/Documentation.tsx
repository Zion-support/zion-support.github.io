import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, FileText, Code, Download, ArrowRight, ExternalLink, Users, Clock, Star } from 'lucide-react';

const Documentation: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for our platforms',
      icon: BookOpen,
      items: [
        'Installation Guide',
        'First Steps',
        'Configuration',
        'Quick Start Examples'
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and endpoints',
      icon: Code,
      items: [
        'Authentication',
        'Endpoints',
        'Request/Response Formats',
        'Error Handling'
      ]
    },
    {
      title: 'User Guides',
      description: 'Step-by-step tutorials and best practices',
      icon: Users,
      items: [
        'Basic Operations',
        'Advanced Features',
        'Troubleshooting',
        'Best Practices'
      ]
    },
    {
      title: 'Developer Resources',
      description: 'SDKs, libraries, and development tools',
      icon: Download,
      items: [
        'SDKs & Libraries',
        'Code Examples',
        'Integration Guides',
        'Development Tools'
      ]
    }
  ];

  const popularDocs = [
    {
      title: 'AI Platform Setup Guide',
      description: 'Complete setup and configuration for our AI platform',
      category: 'Getting Started',
      views: '2.5k',
      rating: 4.8
    },
    {
      title: 'API Authentication',
      description: 'How to authenticate and secure your API requests',
      category: 'API Reference',
      views: '1.8k',
      rating: 4.9
    },
    {
      title: 'Machine Learning Models',
      description: 'Guide to using pre-trained ML models and custom training',
      category: 'User Guides',
      views: '1.2k',
      rating: 4.7
    },
    {
      title: 'SDK Integration',
      description: 'Integrate our SDKs into your applications',
      category: 'Developer Resources',
      views: '950',
      rating: 4.6
    }
  ];

  const recentUpdates = [
    {
      title: 'New AI Model APIs',
      description: 'Added support for latest GPT-4 and Claude models',
      date: '2024-01-15',
      type: 'New Feature'
    },
    {
      title: 'Enhanced Security Documentation',
      description: 'Updated security best practices and compliance guidelines',
      date: '2024-01-10',
      type: 'Update'
    },
    {
      title: 'SDK v2.0 Release',
      description: 'Major update with improved performance and new features',
      date: '2024-01-05',
      type: 'Release'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation & Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Documentation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Everything you need to integrate, configure, and optimize our technology solutions. 
              From quick start guides to advanced API documentation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation, APIs, or guides..."
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-blue/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                View All Docs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Find the information you need across our comprehensive documentation sections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-zion-slate-light text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Documentation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Most viewed and highly-rated documentation resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-sm rounded-full">
                    {doc.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-zion-slate-light text-sm">{doc.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{doc.title}</h3>
                <p className="text-zion-slate-light mb-4">{doc.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{doc.views}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Updates
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Stay up to date with the latest documentation changes and new features
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 mb-4 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        update.type === 'New Feature' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : update.type === 'Release'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {update.type}
                      </span>
                      <span className="text-zion-slate-light text-sm">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{update.title}</h3>
                    <p className="text-zion-slate-light">{update.description}</p>
                  </div>
                  <button className="ml-4 px-4 py-2 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Extra tools and resources to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SDKs & Libraries</h3>
              <p className="text-zion-slate-light mb-4">Download our official SDKs and libraries for popular programming languages</p>
              <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Download SDKs
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Support</h3>
              <p className="text-zion-slate-light mb-4">Join our community forums and get help from other developers</p>
              <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Join Community
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">API Status</h3>
              <p className="text-zion-slate-light mb-4">Check the real-time status of our APIs and services</p>
              <button className="px-6 py-3 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Check Status
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Can't find what you're looking for? Our team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Request Feature
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;