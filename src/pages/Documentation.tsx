<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Code, 
  Download, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Play,
  FileCode,
  Database,
  Shield,
  Cpu,
  Brain,
  Globe,
  Zap,
  Users,
  Building
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'ai-autonomous-systems',
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Complete guide to AI autonomous systems',
      color: 'from-cyan-500 to-blue-500',
      articles: [
        {
          title: 'Getting Started with AI Autonomous Systems',
          description: 'Setup and configuration guide',
          path: '/docs/ai-autonomous-systems/getting-started',
          type: 'guide',
          difficulty: 'Beginner'
        },
        {
          title: 'AI Autonomous Systems API Reference',
          description: 'Complete API documentation',
          path: '/docs/ai-autonomous-systems/api-reference',
          type: 'reference',
          difficulty: 'Advanced'
        },
        {
          title: 'AI Autonomous Systems Best Practices',
          description: 'Performance optimization and best practices',
          path: '/docs/ai-autonomous-systems/best-practices',
          type: 'guide',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      icon: Brain,
      description: 'Quantum computing and neural networks',
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'Quantum Neural Networks Overview',
          description: 'Introduction to quantum neural networks',
          path: '/docs/quantum-neural-networks/overview',
          type: 'guide',
          difficulty: 'Beginner'
        },
        {
          title: 'Quantum Neural Networks Implementation',
          description: 'Step-by-step implementation guide',
          path: '/docs/quantum-neural-networks/implementation',
          type: 'tutorial',
          difficulty: 'Intermediate'
        },
        {
          title: 'Quantum Neural Networks API',
          description: 'API reference and examples',
          path: '/docs/quantum-neural-networks/api',
          type: 'reference',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Security and compliance documentation',
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'SOC2 Compliance Guide',
          description: 'Complete SOC2 compliance documentation',
          path: '/docs/cybersecurity/soc2-compliance',
          type: 'guide',
          difficulty: 'Intermediate'
        },
        {
          title: 'Security Best Practices',
          description: 'Security implementation guidelines',
          path: '/docs/cybersecurity/security-best-practices',
          type: 'guide',
          difficulty: 'Intermediate'
        },
        {
          title: 'Threat Detection API',
          description: 'Threat detection system API reference',
          path: '/docs/cybersecurity/threat-detection-api',
          type: 'reference',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: '5g-enterprise',
      title: '5G Enterprise Solutions',
      icon: Zap,
      description: '5G network and enterprise solutions',
      color: 'from-blue-500 to-indigo-500',
      articles: [
        {
          title: '5G Enterprise Setup Guide',
          description: '5G network setup and configuration',
          path: '/docs/5g-enterprise/setup-guide',
          type: 'guide',
          difficulty: 'Intermediate'
        },
        {
          title: '5G Network Optimization',
          description: 'Performance optimization techniques',
          path: '/docs/5g-enterprise/optimization',
          type: 'guide',
          difficulty: 'Advanced'
        },
        {
          title: '5G Enterprise API Reference',
          description: 'Complete API documentation',
          path: '/docs/5g-enterprise/api-reference',
          type: 'reference',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Cpu,
      description: 'Infrastructure and cloud services',
      color: 'from-orange-500 to-red-500',
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          path: '/docs/it-infrastructure/cloud-migration',
          type: 'guide',
          difficulty: 'Intermediate'
        },
        {
          title: 'IT Asset Management',
          description: 'AI-powered asset management guide',
          path: '/docs/it-infrastructure/asset-management',
          type: 'guide',
          difficulty: 'Beginner'
        },
        {
          title: 'Infrastructure API Reference',
          description: 'Infrastructure management APIs',
          path: '/docs/it-infrastructure/api-reference',
          type: 'reference',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      icon: Building,
      description: 'Micro SAAS development and deployment',
      color: 'from-yellow-500 to-orange-500',
      articles: [
        {
          title: 'Micro SAAS Development Guide',
          description: 'Building and deploying micro SAAS solutions',
          path: '/docs/micro-saas/development-guide',
          type: 'guide',
          difficulty: 'Intermediate'
        },
        {
          title: 'Micro SAAS Architecture',
          description: 'Architecture patterns and best practices',
          path: '/docs/micro-saas/architecture',
          type: 'guide',
          difficulty: 'Advanced'
        },
        {
          title: 'Micro SAAS Deployment',
          description: 'Deployment and scaling strategies',
          path: '/docs/micro-saas/deployment',
          type: 'tutorial',
          difficulty: 'Intermediate'
        }
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
      ]
    }
  ];

<<<<<<< HEAD
  const quickStartGuides = [
    {
      title: 'AI Autonomous Systems Quick Start',
      description: 'Get up and running with AI autonomous systems in 15 minutes',
      path: '/docs/quick-start/ai-autonomous-systems',
      icon: Brain,
      time: '15 min'
    },
    {
      title: 'Quantum Neural Networks Setup',
      description: 'Set up your first quantum neural network project',
      path: '/docs/quick-start/quantum-neural-networks',
      icon: Brain,
      time: '30 min'
    },
    {
      title: 'SOC2 Compliance Setup',
      description: 'Begin your SOC2 compliance journey',
      path: '/docs/quick-start/soc2-compliance',
      icon: Shield,
      time: '45 min'
    },
    {
      title: '5G Enterprise Network',
      description: 'Deploy your first 5G enterprise network',
      path: '/docs/quick-start/5g-enterprise',
      icon: Zap,
      time: '60 min'
    }
  ];

  const apiReferences = [
    {
      title: 'AI Autonomous Systems API',
      description: 'Complete API reference for AI autonomous systems',
      path: '/docs/api/ai-autonomous-systems',
      icon: Code,
      version: 'v2.1.0'
    },
    {
      title: 'Quantum Neural Networks API',
      description: 'API reference for quantum neural networks',
      path: '/docs/api/quantum-neural-networks',
      icon: Code,
      version: 'v1.5.0'
    },
    {
      title: 'Cybersecurity API',
      description: 'Security and compliance API reference',
      path: '/docs/api/cybersecurity',
      icon: Code,
      version: 'v3.0.0'
    },
    {
      title: '5G Enterprise API',
      description: '5G enterprise solutions API reference',
      path: '/docs/api/5g-enterprise',
      icon: Code,
      version: 'v2.0.0'
    }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, tutorials, and API references for all Zion Tech Group services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation, guides, and APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide) => (
              <div key={guide.title} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <guide.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                    {guide.time}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{guide.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                <Link
                  to={guide.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                >
                  Get Started
                  <Play className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API References */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">API References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiReferences.map((api) => (
              <div key={api.title} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <api.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded-full">
                    {api.version}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{api.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{api.description}</p>
                <Link
                  to={api.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                >
                  View API Reference
                  <FileCode className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Documentation Sections</h2>
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                        <p className="text-gray-400">{section.description}</p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-6 space-y-4">
                      {section.articles.map((article) => (
                        <div key={article.title} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <div className="flex-shrink-0 mt-1">
                            {article.type === 'guide' && <BookOpen className="w-5 h-5 text-cyan-400" />}
                            {article.type === 'tutorial' && <Play className="w-5 h-5 text-purple-400" />}
                            {article.type === 'reference' && <FileCode className="w-5 h-5 text-green-400" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-cyan-400">{article.title}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{article.description}</p>
                            <Link
                              to={article.path}
                              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Visit Help Center
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>
=======
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
    </div>
  );
}