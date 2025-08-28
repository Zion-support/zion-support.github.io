import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Globe,
  Database,
  Server,
  Shield,
  Brain,
  Cloud,
  Cpu,
  Zap,
  Users,
  Calendar,
  Star,
  Bookmark,
  Share2,
  Copy,
  CheckCircle,
  Clock,
  Tag,
  ChevronRight,
  ChevronDown,
  Terminal,
  Code2,
  Settings,
  Play,
  GitBranch,
  Package,
  Lock,
  Key,
  Database as DatabaseIcon,
  Network,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Getting Started']));

  const categories = ['All', 'Getting Started', 'APIs', 'SDKs', 'Deployment', 'Security', 'Best Practices', 'Troubleshooting'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          difficulty: 'Beginner',
          readTime: '10 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['Quick Start', 'Setup', 'Configuration'],
          path: '/docs/getting-started/quick-start'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          readTime: '15 min',
          lastUpdated: '2024-11-28',
          featured: false,
          tags: ['Installation', 'Setup', 'Platforms'],
          path: '/docs/getting-started/installation'
        },
        {
          title: 'First Project Tutorial',
          description: 'Build your first AI-powered application',
          difficulty: 'Beginner',
          readTime: '25 min',
          lastUpdated: '2024-11-25',
          featured: true,
          tags: ['Tutorial', 'First Project', 'AI'],
          path: '/docs/getting-started/first-project'
        }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      articles: [
        {
          title: 'REST API Overview',
          description: 'Complete REST API reference with examples and best practices',
          difficulty: 'Intermediate',
          readTime: '20 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['API', 'REST', 'Reference'],
          path: '/docs/api/rest-overview'
        },
        {
          title: 'GraphQL API Guide',
          description: 'GraphQL API documentation and query examples',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-30',
          featured: false,
          tags: ['API', 'GraphQL', 'Queries'],
          path: '/docs/api/graphql'
        },
        {
          title: 'Authentication & Authorization',
          description: 'Learn about API keys, OAuth, and security best practices',
          difficulty: 'Intermediate',
          readTime: '15 min',
          lastUpdated: '2024-11-29',
          featured: false,
          tags: ['Security', 'OAuth', 'API Keys'],
          path: '/docs/api/authentication'
        },
        {
          title: 'Rate Limiting',
          description: 'Understanding API rate limits and optimization strategies',
          difficulty: 'Advanced',
          readTime: '10 min',
          lastUpdated: '2024-11-28',
          featured: false,
          tags: ['API', 'Rate Limiting', 'Performance'],
          path: '/docs/api/rate-limiting'
        },
        {
          title: 'Webhook Integration',
          description: 'Set up webhooks for real-time notifications',
          difficulty: 'Intermediate',
          readTime: '20 min',
          lastUpdated: '2024-11-27',
          featured: false,
          tags: ['Webhooks', 'Integration', 'Real-time'],
          path: '/docs/api/webhooks'
        }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for popular languages',
      icon: Package,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      articles: [
        {
          title: 'Python SDK',
          description: 'Python client library with examples and tutorials',
          difficulty: 'Intermediate',
          readTime: '35 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['SDK', 'Python', 'Client Library'],
          path: '/docs/sdks/python'
        },
        {
          title: 'JavaScript SDK',
          description: 'Node.js and browser JavaScript SDK documentation',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-29',
          featured: true,
          tags: ['SDK', 'JavaScript', 'Node.js'],
          path: '/docs/sdks/javascript'
        },
        {
          title: 'Java SDK',
          description: 'Java client library for enterprise applications',
          difficulty: 'Intermediate',
          readTime: '40 min',
          lastUpdated: '2024-11-27',
          featured: false,
          tags: ['SDK', 'Java', 'Enterprise'],
          path: '/docs/sdks/java'
        },
        {
          title: 'Go SDK',
          description: 'Go client library for high-performance applications',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-26',
          featured: false,
          tags: ['SDK', 'Go', 'Performance'],
          path: '/docs/sdks/go'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      description: 'Deployment guides and DevOps best practices',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      featured: false,
      articles: [
        {
          title: 'Docker Deployment',
          description: 'Containerize and deploy your applications with Docker',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-25',
          featured: false,
          tags: ['Docker', 'Containers', 'Deployment'],
          path: '/docs/deployment/docker'
        },
        {
          title: 'Kubernetes Orchestration',
          description: 'Deploy and manage applications with Kubernetes',
          difficulty: 'Advanced',
          readTime: '45 min',
          lastUpdated: '2024-11-24',
          featured: false,
          tags: ['Kubernetes', 'Orchestration', 'Scalability'],
          path: '/docs/deployment/kubernetes'
        },
        {
          title: 'CI/CD Pipeline Setup',
          description: 'Set up continuous integration and deployment pipelines',
          difficulty: 'Intermediate',
          readTime: '35 min',
          lastUpdated: '2024-11-23',
          featured: false,
          tags: ['CI/CD', 'DevOps', 'Automation'],
          path: '/docs/deployment/cicd'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guidelines',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      featured: true,
      articles: [
        {
          title: 'Security Best Practices',
          description: 'Comprehensive security guidelines for your applications',
          difficulty: 'Intermediate',
          readTime: '40 min',
          lastUpdated: '2024-11-22',
          featured: true,
          tags: ['Security', 'Best Practices', 'Guidelines'],
          path: '/docs/security/best-practices'
        },
        {
          title: 'Data Privacy & GDPR',
          description: 'Ensure compliance with data privacy regulations',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-21',
          featured: false,
          tags: ['Privacy', 'GDPR', 'Compliance'],
          path: '/docs/security/privacy'
        },
        {
          title: 'API Security',
          description: 'Secure your APIs against common vulnerabilities',
          difficulty: 'Advanced',
          readTime: '30 min',
          lastUpdated: '2024-11-20',
          featured: false,
          tags: ['API Security', 'Vulnerabilities', 'Protection'],
          path: '/docs/security/api-security'
        }
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      description: 'Industry best practices and design patterns',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      articles: [
        {
          title: 'Code Organization',
          description: 'Best practices for organizing and structuring your code',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-19',
          featured: false,
          tags: ['Code Organization', 'Architecture', 'Structure'],
          path: '/docs/best-practices/code-organization'
        },
        {
          title: 'Performance Optimization',
          description: 'Techniques for optimizing application performance',
          difficulty: 'Advanced',
          readTime: '35 min',
          lastUpdated: '2024-11-18',
          featured: false,
          tags: ['Performance', 'Optimization', 'Efficiency'],
          path: '/docs/best-practices/performance'
        },
        {
          title: 'Testing Strategies',
          description: 'Comprehensive testing approaches for reliable applications',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-17',
          featured: false,
          tags: ['Testing', 'Quality Assurance', 'Reliability'],
          path: '/docs/best-practices/testing'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: Terminal,
      color: 'from-gray-500 to-slate-500',
      featured: false,
      articles: [
        {
          title: 'Common Error Codes',
          description: 'Understanding and resolving common error messages',
          difficulty: 'Beginner',
          readTime: '20 min',
          lastUpdated: '2024-11-16',
          featured: false,
          tags: ['Errors', 'Troubleshooting', 'Debugging'],
          path: '/docs/troubleshooting/error-codes'
        },
        {
          title: 'Performance Issues',
          description: 'Diagnose and fix performance problems',
          difficulty: 'Advanced',
          readTime: '30 min',
          lastUpdated: '2024-11-15',
          featured: false,
          tags: ['Performance', 'Diagnostics', 'Optimization'],
          path: '/docs/troubleshooting/performance'
        },
        {
          title: 'Integration Problems',
          description: 'Resolve common integration and connectivity issues',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-14',
          featured: false,
          tags: ['Integration', 'Connectivity', 'Issues'],
          path: '/docs/troubleshooting/integration'
        }
      ]
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.articles.some(article => 
                           article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                         );
    
    const matchesCategory = selectedCategory === 'All' || section.title === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleDownload = (articlePath: string) => {
    console.log(`Downloading documentation: ${articlePath}`);
    // In a real implementation, this would trigger a download
  };

  const handleShare = (articlePath: string) => {
    console.log(`Sharing documentation: ${articlePath}`);
    // In a real implementation, this would open share options
  };

  const handleBookmark = (articlePath: string) => {
    console.log(`Bookmarking documentation: ${articlePath}`);
    // In a real implementation, this would save to bookmarks
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real implementation, show a toast notification
  };

  return (
    <>
      <SEO 
        title="Documentation - Zion Tech Group | API Docs, SDKs, Guides & Tutorials"
        description="Comprehensive documentation for Zion Tech Group services including API references, SDK guides, deployment tutorials, and best practices for developers."
        keywords="documentation, API docs, SDK guides, tutorials, deployment, security, best practices, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative container mx-auto px-4 py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <BookOpen className="w-20 h-20 mx-auto text-zion-cyan mb-4" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Documentation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-300"
            >
              Comprehensive guides, API references, and tutorials to help you build amazing applications 
              with Zion Tech Group services. From quick start guides to advanced deployment strategies.
            </motion.p>
            
            {/* Search and Filter Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-8">
            {filteredSections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                {/* Section Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-slate-700/30 transition-colors duration-200"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                        <p className="text-gray-300">{section.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {section.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          expandedSections.has(section.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6">
                      <div className="grid gap-6">
                        {section.articles.map((article, articleIndex) => (
                          <motion.div
                            key={article.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: articleIndex * 0.1 }}
                            className="bg-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                                  {article.featured && (
                                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-300 mb-4">{article.description}</p>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {article.readTime}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {article.lastUpdated}
                                  </span>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                                    article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-red-500/20 text-red-300'
                                  }`}>
                                    {article.difficulty}
                                  </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                  {article.tags.map((tag, tagIndex) => (
                                    <span 
                                      key={tagIndex}
                                      className="px-3 py-1 bg-slate-600/50 rounded-full text-xs text-gray-300"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleDownload(article.path)}
                                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Download className="w-4 h-4" />
                                Download
                              </button>
                              <button
                                onClick={() => handleShare(article.path)}
                                className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Share2 className="w-4 h-4" />
                                Share
                              </button>
                              <button
                                onClick={() => handleBookmark(article.path)}
                                className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Bookmark className="w-4 h-4" />
                                Bookmark
                              </button>
                              <button
                                onClick={() => copyToClipboard(article.path)}
                                className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Copy className="w-4 h-4" />
                                Copy Link
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No documentation found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help? Get Support
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Can't find what you're looking for? Our technical support team is here to help. 
              Get personalized assistance for your specific use case.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
              >
                ✉️ Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
