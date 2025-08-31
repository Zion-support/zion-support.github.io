import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, Code, FileText, Download, 
  ExternalLink, ArrowRight, Users, Star, Clock,
  Tag, ChevronRight, ChevronDown, Play, Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationCategories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'api', name: 'API Reference', count: 12 },
    { id: 'guides', name: 'User Guides', count: 15 },
    { id: 'tutorials', name: 'Tutorials', count: 8 },
    { id: 'examples', name: 'Code Examples', count: 6 },
    { id: 'reference', name: 'Reference Docs', count: 4 }
  ];

  const quickStartGuides = [
    {
      id: 1,
      title: 'Getting Started with Zion AI Platform',
      description: 'Complete setup guide for new users to get up and running with our AI platform in minutes.',
      category: 'guides',
      difficulty: 'Beginner',
      timeToComplete: '15 min',
      rating: 4.9,
      featured: true,
      icon: '🚀',
      steps: [
        'Account Setup and Authentication',
        'Platform Navigation and Interface',
        'First AI Model Deployment',
        'Basic Configuration and Testing'
      ]
    },
    {
      id: 2,
      title: 'API Integration Quick Start',
      description: 'Learn how to integrate Zion Tech Group APIs into your applications with practical examples.',
      category: 'api',
      difficulty: 'Intermediate',
      timeToComplete: '25 min',
      rating: 4.7,
      featured: true,
      icon: '🔌',
      steps: [
        'API Key Generation and Security',
        'Authentication and Rate Limiting',
        'Basic API Calls and Responses',
        'Error Handling and Best Practices'
      ]
    },
    {
      id: 3,
      title: 'AI Model Training Fundamentals',
      description: 'Essential concepts and practical steps for training AI models on our platform.',
      category: 'tutorials',
      difficulty: 'Advanced',
      timeToComplete: '45 min',
      rating: 4.8,
      featured: true,
      icon: '🧠',
      steps: [
        'Data Preparation and Validation',
        'Model Architecture Selection',
        'Training Configuration and Monitoring',
        'Model Evaluation and Deployment'
      ]
    }
  ];

  const apiDocumentation = [
    {
      id: 1,
      title: 'Authentication API',
      description: 'Complete reference for authentication endpoints, including OAuth 2.0 and API key management.',
      category: 'api',
      version: 'v2.1',
      lastUpdated: '2024-01-15',
      endpoints: 8,
      examples: 12,
      downloads: 3456
    },
    {
      id: 2,
      title: 'AI Model Management API',
      description: 'Comprehensive API for creating, training, deploying, and managing AI models on our platform.',
      category: 'api',
      version: 'v2.0',
      lastUpdated: '2024-01-10',
      endpoints: 15,
      examples: 24,
      downloads: 2897
    },
    {
      id: 3,
      title: 'Data Processing API',
      description: 'API endpoints for data ingestion, preprocessing, validation, and transformation operations.',
      category: 'api',
      version: 'v1.8',
      lastUpdated: '2024-01-08',
      endpoints: 12,
      examples: 18,
      downloads: 2156
    },
    {
      id: 4,
      title: 'Analytics and Reporting API',
      description: 'Real-time analytics, performance metrics, and comprehensive reporting capabilities.',
      category: 'api',
      version: 'v1.9',
      lastUpdated: '2024-01-05',
      endpoints: 10,
      examples: 16,
      downloads: 1876
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Building Your First AI Chatbot',
      description: 'Step-by-step tutorial to create an intelligent chatbot using our natural language processing APIs.',
      category: 'tutorials',
      difficulty: 'Beginner',
      duration: '30 min',
      tags: ['Chatbot', 'NLP', 'AI', 'Beginner'],
      videoUrl: '/tutorials/ai-chatbot-tutorial.mp4',
      codeRepository: 'https://github.com/ziontechgroup/ai-chatbot-example'
    },
    {
      id: 2,
      title: 'Image Recognition with Deep Learning',
      description: 'Learn to build and deploy image recognition models using convolutional neural networks.',
      category: 'tutorials',
      difficulty: 'Intermediate',
      duration: '45 min',
      tags: ['Computer Vision', 'Deep Learning', 'CNN', 'Image Recognition'],
      videoUrl: '/tutorials/image-recognition-tutorial.mp4',
      codeRepository: 'https://github.com/ziontechgroup/image-recognition-example'
    },
    {
      id: 3,
      title: 'Real-time Data Streaming with AI',
      description: 'Implement real-time data processing and AI inference using our streaming APIs.',
      category: 'tutorials',
      difficulty: 'Advanced',
      duration: '60 min',
      tags: ['Real-time', 'Streaming', 'Data Processing', 'AI Inference'],
      videoUrl: '/tutorials/real-time-streaming-tutorial.mp4',
      codeRepository: 'https://github.com/ziontechgroup/streaming-ai-example'
    }
  ];

  const codeExamples = [
    {
      id: 1,
      title: 'Python SDK Examples',
      description: 'Comprehensive collection of Python code examples for all major platform features.',
      language: 'Python',
      examples: 25,
      downloads: 5678,
      lastUpdated: '2024-01-12',
      repository: 'https://github.com/ziontechgroup/python-sdk-examples'
    },
    {
      id: 2,
      title: 'JavaScript/Node.js Examples',
      description: 'Web and Node.js integration examples for building AI-powered applications.',
      language: 'JavaScript',
      examples: 18,
      downloads: 4321,
      lastUpdated: '2024-01-10',
      repository: 'https://github.com/ziontechgroup/javascript-examples'
    },
    {
      id: 3,
      title: 'Java SDK Examples',
      description: 'Enterprise Java applications and microservices integration examples.',
      language: 'Java',
      examples: 15,
      downloads: 2987,
      lastUpdated: '2024-01-08',
      repository: 'https://github.com/ziontechgroup/java-sdk-examples'
    },
    {
      id: 4,
      title: 'REST API Examples',
      description: 'HTTP client examples in multiple languages for direct API integration.',
      language: 'Multiple',
      examples: 32,
      downloads: 6543,
      lastUpdated: '2024-01-15',
      repository: 'https://github.com/ziontechgroup/rest-api-examples'
    }
  ];

  const filteredContent = [...quickStartGuides, ...apiDocumentation, ...tutorials, ...codeExamples].filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, tutorials, and code examples for Zion Tech Group's AI platform and services."
        keywords="documentation, API reference, tutorials, code examples, technical guides, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/documentation"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, tutorials, and code examples to help you build powerful AI applications with Zion Tech Group's platform.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {documentationCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get up and running quickly with our step-by-step guides for common use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      {guide.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                      {guide.timeToComplete}
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    {guide.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {guide.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {guide.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-gray-400 text-sm font-semibold">What you'll learn:</p>
                  <ul className="space-y-1">
                    {guide.steps.map((step, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ChevronRight className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              API Reference
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete API documentation with endpoints, parameters, response formats, and code examples.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiDocumentation.map((api, index) => (
              <motion.div
                key={api.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    {api.version}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {formatDate(api.lastUpdated)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {api.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {api.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">{api.endpoints}</div>
                    <div className="text-gray-400 text-sm">Endpoints</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">{api.examples}</div>
                    <div className="text-gray-400 text-sm">Examples</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{api.downloads.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Downloads</div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <FileText className="w-4 h-4 mr-2" />
                    View Docs
                  </button>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn through video tutorials with practical examples and real-world applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-gray-400 text-sm">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {tutorial.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {tutorial.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tutorial.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </button>
                  <a
                    href={tutorial.codeRepository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center"
                  >
                    <Code className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready-to-use code examples in multiple programming languages for common integration scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {example.language}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {formatDate(example.lastUpdated)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {example.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {example.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">{example.examples}</div>
                    <div className="text-gray-400 text-sm">Examples</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{example.downloads.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Downloads</div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={example.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Examples
                  </a>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Documentation Browser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation Browser
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete documentation library organized by topic and difficulty level.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="space-y-4">
              {[
                {
                  title: 'Getting Started',
                  description: 'Essential guides for new users',
                  items: ['Platform Overview', 'Account Setup', 'First Project', 'Basic Concepts']
                },
                {
                  title: 'Core Features',
                  description: 'In-depth guides for platform features',
                  items: ['AI Model Management', 'Data Processing', 'API Integration', 'Deployment']
                },
                {
                  title: 'Advanced Topics',
                  description: 'Complex scenarios and advanced techniques',
                  items: ['Custom Model Training', 'Performance Optimization', 'Security Best Practices', 'Scaling Applications']
                },
                {
                  title: 'Reference Materials',
                  description: 'API references, SDK documentation, and examples',
                  items: ['API Reference', 'SDK Documentation', 'Code Examples', 'Troubleshooting']
                }
              ].map((section, index) => (
                <div key={section.title} className="border border-white/10 rounded-lg">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                      <p className="text-gray-400 text-sm">{section.description}</p>
                    </div>
                    {expandedSection === section.title ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSection === section.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4 border-t border-white/10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {section.items.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <ArrowRight className="w-4 h-4 text-blue-400 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about new documentation, API updates, and platform features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}