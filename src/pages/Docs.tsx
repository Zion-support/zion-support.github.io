import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search,
  Filter,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  Eye,
  FileText,
  Code,
  Video,
  Globe,
  Package,
  Terminal,
  Database,
  Shield,
  Cloud,
  Cpu,
  Zap,
  Lightbulb,
  Rocket,
  Building2,
  Mail,
  Phone,
  Bookmark,
  Tag,
  TrendingUp,
  Award
} from 'lucide-react';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      name: 'Getting Started',
      description: 'Quick start guides and basic setup instructions for new users.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: 12,
      readTime: '15 min',
      featured: true,
      topics: [
        'Quick Start Guide',
        'Installation',
        'First Steps',
        'Basic Configuration'
      ]
    },
    {
      name: 'API Reference',
      description: 'Comprehensive API documentation with examples and endpoints.',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      articles: 45,
      readTime: '2 hours',
      featured: true,
      topics: [
        'Authentication',
        'Endpoints',
        'Request/Response',
        'Error Handling'
      ]
    },
    {
      name: 'SDKs & Libraries',
      description: 'Documentation for all supported programming languages and frameworks.',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      articles: 28,
      readTime: '1.5 hours',
      featured: false,
      topics: [
        'JavaScript/Node.js',
        'Python',
        'Java',
        'Go'
      ]
    },
    {
      name: 'Tutorials',
      description: 'Step-by-step guides for common use cases and integrations.',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      articles: 35,
      readTime: '3 hours',
      featured: false,
      topics: [
        'User Authentication',
        'Data Processing',
        'Webhook Integration',
        'Deployment'
      ]
    },
    {
      name: 'Best Practices',
      description: 'Recommended patterns and guidelines for optimal performance.',
      icon: Lightbulb,
      color: 'from-indigo-500 to-purple-500',
      articles: 22,
      readTime: '1 hour',
      featured: false,
      topics: [
        'Security Guidelines',
        'Performance Tips',
        'Error Handling',
        'Monitoring'
      ]
    },
    {
      name: 'Troubleshooting',
      description: 'Common issues, solutions, and debugging techniques.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      articles: 18,
      readTime: '45 min',
      featured: false,
      topics: [
        'Common Errors',
        'Debug Tools',
        'Support Resources',
        'FAQ'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with Zion Tech Group APIs',
      description: 'Learn how to set up your development environment and make your first API call.',
      category: 'Getting Started',
      readTime: '10 min',
      views: 12500,
      rating: 4.9,
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Authentication & Security Best Practices',
      description: 'Implement secure authentication and follow security best practices for your applications.',
      category: 'Best Practices',
      readTime: '15 min',
      views: 8900,
      rating: 4.8,
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Building Your First AI-Powered Application',
      description: 'Step-by-step tutorial for creating an AI application using our machine learning APIs.',
      category: 'Tutorials',
      readTime: '25 min',
      views: 7200,
      rating: 4.9,
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Rate Limiting and Optimization',
      description: 'Understand rate limits and optimize your API usage for better performance.',
      category: 'Best Practices',
      readTime: '12 min',
      views: 6100,
      rating: 4.7,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const resources = [
    {
      name: 'API Playground',
      description: 'Interactive environment to test APIs and explore endpoints.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      url: '/playground',
      type: 'Interactive'
    },
    {
      name: 'Code Examples',
      description: 'Ready-to-use code snippets in multiple programming languages.',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      url: '/examples',
      type: 'Code'
    },
    {
      name: 'Video Tutorials',
      description: 'Visual learning resources and walkthrough videos.',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      url: '/videos',
      type: 'Video'
    },
    {
      name: 'Community Forum',
      description: 'Connect with other developers and get help from the community.',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      url: '/community',
      type: 'Community'
    }
  ];

  const downloads = [
    {
      name: 'API Reference PDF',
      description: 'Complete API documentation in PDF format for offline reference.',
      size: '2.8 MB',
      format: 'PDF',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'SDK Documentation',
      description: 'Comprehensive SDK guides for all supported languages.',
      size: '5.2 MB',
      format: 'ZIP',
      icon: Package,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Postman Collection',
      description: 'Import our Postman collection for easy API testing.',
      size: '156 KB',
      format: 'JSON',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Code Samples',
      description: 'Complete code examples and project templates.',
      size: '8.7 MB',
      format: 'ZIP',
      icon: Code,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, tutorials, and reference materials to help you build amazing applications 
              with Zion Tech Group's platform. Find everything you need to get started and succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                View All Docs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive documentation organized by topic and skill level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 ${
                  category.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {category.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{category.readTime}</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{category.articles} articles</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {category.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Explore Category
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Most viewed and highly rated documentation articles to help you get started quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center`}>
                    <article.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-slate-700 text-blue-400 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{article.rating}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Read Article
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our interactive tools, code examples, and community resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{resource.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                
                <div className="mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-blue-400 text-xs font-medium rounded-full">
                    {resource.type}
                  </span>
                </div>

                <a
                  href={resource.url}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 w-full block text-center"
                >
                  Access Resource
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download documentation and resources for offline use and reference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span>{item.format}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>{item.size}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our documentation team and community are here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Documentation Support</h3>
                <p className="text-gray-300 mb-4">Get help with documentation issues and suggestions.</p>
                <a
                  href="mailto:docs@ziontechgroup.com"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 block text-center"
                >
                  Contact Docs Team
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
                <p className="text-gray-300 mb-4">Get technical assistance for implementation issues.</p>
                <a
                  href="/support"
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 block text-center"
                >
                  Get Support
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Community & Resources</h3>
              <p className="text-gray-300 mb-4">
                Join our developer community, participate in discussions, and access additional learning resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/community"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Join Community
                </a>
                <a
                  href="/developer"
                  className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Developer Portal
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Docs;