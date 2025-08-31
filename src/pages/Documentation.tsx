import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Download, 
  Search, 
  Filter,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Terminal,
  Database,
  Shield,
  Zap,
  Users,
  Globe,
  Lock,
  Settings,
  Play,
  Bookmark,
  Star,
  Mail
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'api', name: 'API Reference', count: 15 },
    { id: 'guides', name: 'Guides & Tutorials', count: 12 },
    { id: 'sdks', name: 'SDKs & Libraries', count: 6 },
    { id: 'examples', name: 'Code Examples', count: 4 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: Play,
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group in 5 minutes',
          difficulty: 'Beginner',
          time: '5 min read',
          url: '#'
        },
        {
          title: 'Installation & Setup',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          time: '10 min read',
          url: '#'
        },
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our services',
          difficulty: 'Beginner',
          time: '8 min read',
          url: '#'
        },
        {
          title: 'First Project',
          description: 'Build your first project with Zion Tech Group',
          difficulty: 'Beginner',
          time: '15 min read',
          url: '#'
        }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: Code,
      articles: [
        {
          title: 'REST API Overview',
          description: 'Complete REST API reference with examples',
          difficulty: 'Intermediate',
          time: '20 min read',
          url: '#'
        },
        {
          title: 'GraphQL API',
          description: 'GraphQL schema and query examples',
          difficulty: 'Intermediate',
          time: '25 min read',
          url: '#'
        },
        {
          title: 'WebSocket API',
          description: 'Real-time communication with WebSocket',
          difficulty: 'Advanced',
          time: '18 min read',
          url: '#'
        },
        {
          title: 'Rate Limiting',
          description: 'Understanding API rate limits and quotas',
          difficulty: 'Intermediate',
          time: '12 min read',
          url: '#'
        }
      ]
    },
    {
      id: 'guides',
      title: 'Guides & Tutorials',
      description: 'In-depth guides and best practices',
      icon: BookOpen,
      articles: [
        {
          title: 'AI Model Integration',
          description: 'Integrate AI models into your applications',
          difficulty: 'Intermediate',
          time: '30 min read',
          url: '#'
        },
        {
          title: 'Data Processing',
          description: 'Process and analyze data with our tools',
          difficulty: 'Intermediate',
          time: '25 min read',
          url: '#'
        },
        {
          title: 'Security Best Practices',
          description: 'Secure your applications and data',
          difficulty: 'Advanced',
          time: '35 min read',
          url: '#'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimize your applications for better performance',
          difficulty: 'Advanced',
          time: '28 min read',
          url: '#'
        }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      description: 'Official SDKs and client libraries',
      icon: Download,
      articles: [
        {
          title: 'JavaScript/Node.js SDK',
          description: 'Official JavaScript SDK for Node.js and browsers',
          difficulty: 'Beginner',
          time: '15 min read',
          url: '#'
        },
        {
          title: 'Python SDK',
          description: 'Python client library with examples',
          difficulty: 'Beginner',
          time: '12 min read',
          url: '#'
        },
        {
          title: 'Java SDK',
          description: 'Java client library for enterprise applications',
          difficulty: 'Intermediate',
          time: '18 min read',
          url: '#'
        },
        {
          title: 'Mobile SDKs',
          description: 'iOS and Android SDKs for mobile development',
          difficulty: 'Intermediate',
          time: '20 min read',
          url: '#'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'API Playground',
      description: 'Test our APIs directly in your browser',
      icon: Terminal,
      color: 'from-blue-500 to-cyan-500',
      url: '/api-playground'
    },
    {
      title: 'Download SDKs',
      description: 'Get the latest SDKs and libraries',
      icon: Download,
      color: 'from-green-500 to-emerald-500',
      url: '#'
    },
    {
      title: 'Code Examples',
      description: 'Browse working code examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      url: '#'
    },
    {
      title: 'Support Forum',
      description: 'Get help from our community',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      url: '#'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory !== 'all' && section.id !== selectedCategory) return false;
    if (searchQuery) {
      const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           section.articles.some(article => 
                             article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             article.description.toLowerCase().includes(searchQuery.toLowerCase())
                           );
      return matchesSearch;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build amazing applications with Zion Tech Group. 
              From quick start guides to advanced API references.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with these essential resources and tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={action.url}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${action.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                  <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Browse Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by topic and difficulty level.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <section.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.articles.map((article, articleIndex) => (
                        <motion.div
                          key={articleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                          className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-medium text-gray-900">{article.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {article.difficulty}
                              </span>
                              <span className="text-xs text-gray-500">{article.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                          <a
                            href={article.url}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
                          >
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              API Reference Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a taste of our comprehensive API documentation with this quick example.
            </p>
          </motion.div>

          <div className="bg-gray-900 rounded-xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">api.ziontechgroup.com</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono text-sm">POST</span>
                <span className="text-blue-400 font-mono text-sm">/v1/ai/analyze</span>
                <span className="text-gray-400 text-sm">Analyze data with AI</span>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-300 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Request Body</div>
                  <div>{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-400">"data"</span>: <span className="text-green-400">"your_data_here"</span>,</div>
                    <div><span className="text-blue-400">"model"</span>: <span className="text-green-400">"gpt-4"</span>,</div>
                    <div><span className="text-blue-400">"options"</span>: {'{'}</div>
                    <div className="ml-4">
                      <div><span className="text-blue-400">"max_tokens"</span>: <span className="text-yellow-400">1000</span></div>
                    </div>
                    <div>{'}'}</div>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="/api-playground"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Try in API Playground
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community and get support from developers and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Developer Forum',
                description: 'Ask questions and share knowledge with other developers',
                icon: Users,
                color: 'from-blue-500 to-cyan-500',
                url: '#'
              },
              {
                title: 'GitHub Discussions',
                description: 'Open source discussions and issue tracking',
                icon: Code,
                color: 'from-gray-700 to-gray-900',
                url: '#'
              },
              {
                title: 'Email Support',
                description: 'Get help directly from our technical team',
                icon: Mail,
                color: 'from-green-500 to-emerald-500',
                url: 'mailto:support@ziontechgroup.com'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <a
                  href={resource.url}
                  className="block group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building amazing applications with Zion Tech Group today. 
              Our comprehensive documentation and tools are here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/api-playground"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Try API Playground
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}