import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Code, Database, Shield, Cloud, Brain, Zap, FileText, Download, ExternalLink, ChevronRight, ChevronDown, Copy, Check, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  articles: DocArticle[];
}

interface DocArticle {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  content: string;
}

const Docs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started']));
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and basic concepts',
      icon: BookOpen,
      color: 'bg-blue-500',
      articles: [
        {
          id: 'introduction',
          title: 'Introduction to Zion Tech Group',
          description: 'Overview of our platform and services',
          difficulty: 'beginner',
          tags: ['introduction', 'overview', 'platform'],
          content: 'Welcome to Zion Tech Group documentation...'
        },
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Get up and running in minutes',
          difficulty: 'beginner',
          tags: ['quick start', 'setup', 'tutorial'],
          content: 'Follow this guide to get started quickly...'
        },
        {
          id: 'authentication',
          title: 'Authentication & Authorization',
          description: 'Learn about our security model',
          difficulty: 'beginner',
          tags: ['auth', 'security', 'login'],
          content: 'Our authentication system provides secure access...'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'bg-green-500',
      articles: [
        {
          id: 'api-overview',
          title: 'API Overview',
          description: 'Understanding our REST API',
          difficulty: 'intermediate',
          tags: ['API', 'REST', 'overview'],
          content: 'Our REST API provides programmatic access...'
        },
        {
          id: 'authentication-api',
          title: 'Authentication API',
          description: 'API endpoints for authentication',
          difficulty: 'intermediate',
          tags: ['API', 'auth', 'endpoints'],
          content: 'Use these endpoints to authenticate users...'
        },
        {
          id: 'services-api',
          title: 'Services API',
          description: 'Manage and monitor services',
          difficulty: 'advanced',
          tags: ['API', 'services', 'management'],
          content: 'The Services API allows you to manage...'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Machine learning and AI implementation guides',
      icon: Brain,
      color: 'bg-purple-500',
      articles: [
        {
          id: 'ml-basics',
          title: 'Machine Learning Basics',
          description: 'Fundamental concepts and terminology',
          difficulty: 'beginner',
          tags: ['ML', 'AI', 'basics'],
          content: 'Machine learning is a subset of artificial intelligence...'
        },
        {
          id: 'model-deployment',
          title: 'Model Deployment',
          description: 'Deploy ML models to production',
          difficulty: 'advanced',
          tags: ['ML', 'deployment', 'production'],
          content: 'Deploying machine learning models requires...'
        },
        {
          id: 'nlp-guide',
          title: 'Natural Language Processing',
          description: 'NLP services and implementation',
          difficulty: 'intermediate',
          tags: ['NLP', 'language', 'AI'],
          content: 'Natural Language Processing enables computers...'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Security best practices and implementation',
      icon: Shield,
      color: 'bg-red-500',
      articles: [
        {
          id: 'security-basics',
          title: 'Security Fundamentals',
          description: 'Core security concepts and principles',
          difficulty: 'beginner',
          tags: ['security', 'basics', 'fundamentals'],
          content: 'Security is fundamental to any system...'
        },
        {
          id: 'penetration-testing',
          title: 'Penetration Testing',
          description: 'Security testing methodologies',
          difficulty: 'advanced',
          tags: ['security', 'penetration testing', 'testing'],
          content: 'Penetration testing is a systematic approach...'
        },
        {
          id: 'compliance',
          title: 'Compliance & Regulations',
          description: 'SOC 2, GDPR, and other standards',
          difficulty: 'intermediate',
          tags: ['compliance', 'SOC 2', 'GDPR'],
          content: 'Compliance with industry standards...'
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Infrastructure and deployment guides',
      icon: Cloud,
      color: 'bg-indigo-500',
      articles: [
        {
          id: 'cloud-basics',
          title: 'Cloud Computing Basics',
          description: 'Understanding cloud infrastructure',
          difficulty: 'beginner',
          tags: ['cloud', 'infrastructure', 'basics'],
          content: 'Cloud computing provides on-demand access...'
        },
        {
          id: 'devops-pipeline',
          title: 'DevOps Pipeline',
          description: 'CI/CD and automation workflows',
          difficulty: 'intermediate',
          tags: ['DevOps', 'CI/CD', 'automation'],
          content: 'DevOps pipelines automate the software delivery...'
        },
        {
          id: 'kubernetes',
          title: 'Kubernetes Deployment',
          description: 'Container orchestration with K8s',
          difficulty: 'advanced',
          tags: ['Kubernetes', 'containers', 'orchestration'],
          content: 'Kubernetes is a container orchestration platform...'
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Third-party service integrations',
      icon: Zap,
      color: 'bg-orange-500',
      articles: [
        {
          id: 'webhook-setup',
          title: 'Webhook Setup',
          description: 'Configure webhooks for real-time updates',
          difficulty: 'intermediate',
          tags: ['webhooks', 'integrations', 'real-time'],
          content: 'Webhooks allow external services to receive...'
        },
        {
          id: 'oauth-integration',
          title: 'OAuth Integration',
          description: 'Implement OAuth 2.0 authentication',
          difficulty: 'advanced',
          tags: ['OAuth', 'authentication', 'integration'],
          content: 'OAuth 2.0 is an authorization framework...'
        }
      ]
    }
  ];

  const filteredSections = docSections.filter(section => {
    if (selectedSection !== 'all' && section.id !== selectedSection) return false;
    
    if (searchTerm) {
      const hasMatchingArticles = section.articles.some(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return hasMatchingArticles;
    }
    
    return true;
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

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, API references, and technical documentation for Zion Tech Group's services and platform.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>

          {/* Section Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedSection('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSection === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Sections
            </button>
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSection === section.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Section Content */}
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.articles.map((article) => (
                          <div
                            key={article.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-zion-cyan transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                {article.difficulty}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {article.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button className="text-zion-cyan hover:text-zion-cyan-dark text-sm font-medium">
                              Read Article →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No documentation found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or section filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSection('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Quick Start Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Authentication Example */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">JavaScript</span>
                  <button
                    onClick={() => copyCode(`const response = await fetch('https://api.ziontechgroup.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.access_token;`)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="text-gray-300 text-sm overflow-x-auto">
                  <code>{`const response = await fetch('https://api.ziontechgroup.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.access_token;`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                Use this code to authenticate with our API and get an access token.
              </p>
            </div>

            {/* API Call Example */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">API Call</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Python</span>
                  <button
                    onClick={() => copyCode(`import requests

headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/services',
    headers=headers
)

services = response.json()`)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'api' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="text-gray-300 text-sm overflow-x-auto">
                  <code>{`import requests

headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/services',
    headers=headers
)

services = response.json()`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                Make authenticated API calls to retrieve services and data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Download and Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Download & Resources
            </h2>
            <p className="text-xl mb-8 text-zion-cyan-light">
              Get additional resources, SDKs, and tools to help you integrate with our platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">SDKs & Libraries</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Official SDKs for popular programming languages
                </p>
                <button className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Download SDKs
                </button>
              </div>

              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">PDF Documentation</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Downloadable PDF versions of our docs
                </p>
                <button className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Download PDFs
                </button>
              </div>

              <div className="text-center">
                <ExternalLink className="w-12 h-12 mx-auto mb-4 text-zion-cyan-light" />
                <h3 className="text-lg font-semibold mb-2">API Explorer</h3>
                <p className="text-sm text-zion-cyan-light mb-4">
                  Interactive API testing and exploration
                </p>
                <button className="bg-white text-zion-cyan px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Open Explorer
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/help"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <BookOpen className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-sm text-gray-600">Get help and support</p>
            </Link>

            <Link
              to="/webinars"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <FileText className="w-8 h-8 text-zion-purple mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-600">Learn through video content</p>
            </Link>

            <Link
              to="/community"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Code className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Developer Community</h3>
              <p className="text-sm text-gray-600">Connect with developers</p>
            </Link>

            <Link
              to="/training"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
            >
              <Brain className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Training Programs</h3>
              <p className="text-sm text-gray-600">Professional development</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Docs;