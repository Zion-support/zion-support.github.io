import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search,
  FileText,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5" />,
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '10 min' },
        { title: 'Configuration', description: 'Configure your environment and settings', difficulty: 'Beginner', time: '15 min' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      articles: [
        { title: 'Authentication', description: 'Learn about API authentication methods', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Endpoints', description: 'Complete API endpoint documentation', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Rate Limiting', description: 'Understanding API rate limits and quotas', difficulty: 'Intermediate', time: '15 min' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: <Database className="w-5 h-5" />,
      articles: [
        { title: 'Third-party Services', description: 'Connect with popular platforms and services', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Webhooks', description: 'Set up and manage webhook integrations', difficulty: 'Intermediate', time: '20 min' },
        { title: 'SDKs & Libraries', description: 'Official SDKs and client libraries', difficulty: 'Intermediate', time: '30 min' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <Cloud className="w-5 h-5" />,
      articles: [
        { title: 'Cloud Deployment', description: 'Deploy to major cloud platforms', difficulty: 'Advanced', time: '45 min' },
        { title: 'Docker & Containers', description: 'Containerized deployment strategies', difficulty: 'Advanced', time: '40 min' },
        { title: 'CI/CD Pipelines', description: 'Set up automated deployment workflows', difficulty: 'Advanced', time: '60 min' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield className="w-5 h-5" />,
      articles: [
        { title: 'Security Best Practices', description: 'Follow security guidelines and recommendations', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Authentication & Authorization', description: 'Implement secure access controls', difficulty: 'Advanced', time: '35 min' },
        { title: 'Data Protection', description: 'Protect sensitive data and ensure compliance', difficulty: 'Advanced', time: '30 min' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <AlertCircle className="w-5 h-5" />,
      articles: [
        { title: 'Common Issues', description: 'Solutions to frequently encountered problems', difficulty: 'Beginner', time: '20 min' },
        { title: 'Debugging Guide', description: 'Tools and techniques for debugging', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Performance Optimization', description: 'Optimize performance and resolve bottlenecks', difficulty: 'Advanced', time: '45 min' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', description: 'Check system status and uptime', icon: <CheckCircle className="w-5 h-5" />, href: '#' },
    { title: 'Support Portal', description: 'Get help from our support team', icon: <Info className="w-5 h-5" />, href: '#' },
    { title: 'Community Forum', description: 'Connect with other developers', icon: <Lightbulb className="w-5 h-5" />, href: '#' },
    { title: 'Release Notes', description: 'Latest updates and changelog', icon: <FileText className="w-5 h-5" />, href: '#' }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Documentation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive guides, tutorials, and reference materials to help you build with Zion Tech Group
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
            <p className="text-gray-300">Essential resources to get you started quickly</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-cyan-400 mb-4">{link.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{link.description}</p>
                <a
                  href={link.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Documentation</h2>
            <p className="text-gray-300">Organized by topic and difficulty level</p>
          </motion.div>

          <div className="space-y-6">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-cyan-400">{section.icon}</div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      <p className="text-gray-300 text-sm">
                        {section.articles.length} articles available
                      </p>
                    </div>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700"
                  >
                    <div className="p-6 space-y-4">
                      {section.articles.map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                        >
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-1">{article.title}</h4>
                            <p className="text-gray-300 text-sm">{article.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {article.difficulty}
                              </span>
                              <span className="text-gray-400 text-xs">{article.time}</span>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Code Examples</h2>
            <p className="text-gray-300">Ready-to-use code snippets and examples</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Quick Start Example</h3>
                <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// Initialize Zion Tech Group SDK
import { ZionTech } from '@ziontech/sdk';

const client = new ZionTech({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Make your first API call
const response = await client.services.list();
console.log(response);`}</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Authentication Example</h3>
                <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// JWT Authentication
const token = await client.auth.authenticate({
  username: 'user@example.com',
  password: 'secure-password'
});

// Use token for authenticated requests
client.setAuthToken(token);

// Make authenticated API call
const userProfile = await client.user.getProfile();`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Downloads & Resources</h2>
            <p className="text-gray-300">Get SDKs, libraries, and additional resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'JavaScript SDK', version: 'v2.1.0', description: 'Official JavaScript/Node.js SDK', icon: <Code className="w-8 h-8" /> },
              { title: 'Python SDK', version: 'v1.8.2', description: 'Official Python SDK with full API support', icon: <Code className="w-8 h-8" /> },
              { title: 'Postman Collection', version: 'v1.0.0', description: 'API testing and development collection', icon: <FileText className="w-8 h-8" /> }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                <div className="text-cyan-400 text-sm font-medium mb-4">{resource.version}</div>
                <button className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;