import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Code, Database, Api, Download, ExternalLink, ChevronRight, FileText, Users, Globe, Shield, Zap, Brain, Cloud, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: unknown;
  color: string;
  items: DocItem[];
}

interface DocItem {
  title: string;
  description: string;
  href: string;
  type: 'api' | 'guide' | 'tutorial' | 'reference';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const documentationSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          href: '/docs/quick-start',
          type: 'guide',
          difficulty: 'beginner'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          href: '/docs/installation',
          type: 'guide',
          difficulty: 'beginner'
        },
        {
          title: 'First Project Tutorial',
          description: 'Build your first AI-powered application',
          href: '/docs/first-project',
          type: 'tutorial',
          difficulty: 'beginner'
        },
        {
          title: 'Environment Setup',
          description: 'Configure your development environment',
          href: '/docs/environment-setup',
          type: 'guide',
          difficulty: 'beginner'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Comprehensive guides for AI and machine learning services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Business Intelligence API',
          description: 'Integrate AI-powered business analytics into your applications',
          href: '/docs/ai-business-intelligence',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'AI Content Creation Guide',
          description: 'Generate high-quality content using our AI platform',
          href: '/docs/ai-content-creation',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'AI Cybersecurity Integration',
          description: 'Implement AI-powered security solutions',
          href: '/docs/ai-cybersecurity',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Machine Learning Models',
          description: 'Access and customize pre-trained ML models',
          href: '/docs/ml-models',
          type: 'reference',
          difficulty: 'advanced'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Cloud deployment and infrastructure management',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      items: [
        {
          title: 'Cloud DevOps Guide',
          description: 'Deploy and manage applications in the cloud',
          href: '/docs/cloud-devops',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'Digital Twin API',
          description: 'Create and manage digital twin simulations',
          href: '/docs/digital-twin',
          type: 'api',
          difficulty: 'advanced'
        },
        {
          title: 'IoT Edge Computing',
          description: 'Deploy applications to edge devices',
          href: '/docs/iot-edge',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Data Analytics Platform',
          description: 'Integrate with our data analytics services',
          href: '/docs/data-analytics',
          type: 'api',
          difficulty: 'intermediate'
        }
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guidelines',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        {
          title: 'Zero Trust Architecture',
          description: 'Implement zero trust security principles',
          href: '/docs/zero-trust',
          type: 'guide',
          difficulty: 'advanced'
        },
        {
          title: 'Security Headers & CSP',
          description: 'Configure security headers and content security policies',
          href: '/docs/security-headers',
          type: 'guide',
          difficulty: 'intermediate'
        },
        {
          title: 'DSR Portal Integration',
          description: 'Implement data subject rights compliance',
          href: '/docs/dsr-portal',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Compliance Automation',
          description: 'Automate compliance monitoring and reporting',
          href: '/docs/compliance-automation',
          type: 'guide',
          difficulty: 'advanced'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Integration guides for our micro SaaS products',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      items: [
        {
          title: 'Micro CRM API',
          description: 'Integrate customer relationship management features',
          href: '/docs/micro-crm',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Helpdesk Platform',
          description: 'Add customer support capabilities to your app',
          href: '/docs/helpdesk',
          type: 'api',
          difficulty: 'intermediate'
        },
        {
          title: 'Website Analytics',
          description: 'Track and analyze website performance',
          href: '/docs/website-analytics',
          type: 'api',
          difficulty: 'beginner'
        },
        {
          title: 'Affiliate Tracking',
          description: 'Implement affiliate marketing tracking',
          href: '/docs/affiliate-tracking',
          type: 'api',
          difficulty: 'intermediate'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and reference',
      icon: Api,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'REST API Reference',
          description: 'Complete REST API endpoint documentation',
          href: '/docs/api/rest',
          type: 'reference',
          difficulty: 'intermediate'
        },
        {
          title: 'GraphQL API',
          description: 'GraphQL schema and query documentation',
          href: '/docs/api/graphql',
          type: 'reference',
          difficulty: 'advanced'
        },
        {
          title: 'WebSocket API',
          description: 'Real-time communication API documentation',
          href: '/docs/api/websocket',
          type: 'reference',
          difficulty: 'advanced'
        },
        {
          title: 'SDK Downloads',
          description: 'Download SDKs for various programming languages',
          href: '/docs/sdks',
          type: 'reference',
          difficulty: 'beginner'
        }
      ]
    }
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    items: section.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || section.id === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(section => section.items.length > 0);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'ai-services', name: 'AI Services' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure' },
    { id: 'security-compliance', name: 'Security & Compliance' },
    { id: 'micro-saas', name: 'Micro SaaS Solutions' },
    { id: 'api-reference', name: 'API Reference' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-300';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api': return <Api className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'reference': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you integrate 
              Zion Tech Group services into your applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                    className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(item.type)}
                        <span className="text-sm text-gray-400 capitalize">{item.type}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    <Link
                      to={item.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSections.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Additional Resources Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Developer Community</h3>
              <p className="text-gray-300 mb-4">Join our developer community for support and collaboration</p>
              <Link
                to="/community"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Join Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">SDK Downloads</h3>
              <p className="text-gray-300 mb-4">Download SDKs and libraries for your preferred language</p>
              <Link
                to="/docs/sdks"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Download SDKs
                <Download className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">API Status</h3>
              <p className="text-gray-300 mb-4">Check the status of our APIs and services</p>
              <Link
                to="/status"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Check Status
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Documentation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical support team is here to help you with any questions about 
            our documentation, APIs, or integration process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Code className="w-5 h-5 mr-2" />
              Schedule Technical Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
