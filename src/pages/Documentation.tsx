import React from 'react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const docCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Quick start guides and basic setup',
      items: [
        { title: 'Installation Guide', path: '/docs/installation', difficulty: 'Beginner' },
        { title: 'First Steps', path: '/docs/first-steps', difficulty: 'Beginner' },
        { title: 'Configuration', path: '/docs/configuration', difficulty: 'Beginner' },
        { title: 'Hello World Example', path: '/docs/hello-world', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      description: 'Understanding the fundamentals',
      items: [
        { title: 'Architecture Overview', path: '/docs/architecture', difficulty: 'Intermediate' },
        { title: 'Data Models', path: '/docs/data-models', difficulty: 'Intermediate' },
        { title: 'Authentication & Security', path: '/docs/authentication', difficulty: 'Intermediate' },
        { title: 'Error Handling', path: '/docs/error-handling', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'API Reference',
      icon: '🔌',
      description: 'Complete API documentation',
      items: [
        { title: 'REST API', path: '/docs/api/rest', difficulty: 'Advanced' },
        { title: 'GraphQL API', path: '/docs/api/graphql', difficulty: 'Advanced' },
        { title: 'WebSocket API', path: '/docs/api/websocket', difficulty: 'Advanced' },
        { title: 'Rate Limiting', path: '/docs/api/rate-limiting', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '📚',
      description: 'Client libraries and tools',
      items: [
        { title: 'JavaScript SDK', path: '/docs/sdks/javascript', difficulty: 'Intermediate' },
        { title: 'Python SDK', path: '/docs/sdks/python', difficulty: 'Intermediate' },
        { title: 'React Components', path: '/docs/sdks/react', difficulty: 'Intermediate' },
        { title: 'CLI Tools', path: '/docs/sdks/cli', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '📖',
      description: 'Step-by-step learning paths',
      items: [
        { title: 'Building a Chat App', path: '/docs/tutorials/chat-app', difficulty: 'Intermediate' },
        { title: 'AI Integration', path: '/docs/tutorials/ai-integration', difficulty: 'Advanced' },
        { title: 'Real-time Features', path: '/docs/tutorials/realtime', difficulty: 'Advanced' },
        { title: 'Deployment Guide', path: '/docs/tutorials/deployment', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Best Practices',
      icon: '⭐',
      description: 'Production-ready guidelines',
      items: [
        { title: 'Performance Optimization', path: '/docs/best-practices/performance', difficulty: 'Advanced' },
        { title: 'Security Guidelines', path: '/docs/best-practices/security', difficulty: 'Advanced' },
        { title: 'Testing Strategies', path: '/docs/best-practices/testing', difficulty: 'Intermediate' },
        { title: 'Monitoring & Logging', path: '/docs/best-practices/monitoring', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', path: '/status', icon: '📊' },
    { title: 'Changelog', path: '/docs/changelog', icon: '📝' },
    { title: 'Migration Guide', path: '/docs/migration', icon: '🔄' },
    { title: 'FAQ', path: '/docs/faq', icon: '❓' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and tutorials to help you build amazing applications with Zion Tech Group.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation, APIs, and tutorials..."
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Links</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <div className="text-sm font-medium text-cyan-400">{link.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Documentation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <div key={category.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.title} className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex-1"
                      >
                        {item.title}
                      </Link>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Help Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our developer support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Help Center
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}