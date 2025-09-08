import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Github,
  BookOpen,
  Download,
  ExternalLink,
  Terminal,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  MessageCircle,
  Star,
  Eye,
  GitBranch,
  Package,
  Play,
  Settings,
  FileText,
  Globe,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle,
  Clock,
  Tag,
  TrendingUp,
  Rocket,
  Lightbulb,
  Building2,
  Mail,
  Phone
} from 'lucide-react';

const Developer: React.FC = () => {
  const apis = [
    {
      name: 'AI Services API',
      description: 'Access our AI-powered services including machine learning, natural language processing, and computer vision.',
      version: 'v2.1.0',
      status: 'Production',
      endpoints: 45,
      documentation: 'Comprehensive',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Real-time Processing'
      ]
    },
    {
      name: 'Cybersecurity API',
      description: 'Integrate advanced security features including threat detection, vulnerability scanning, and incident response.',
      version: 'v1.8.2',
      status: 'Production',
      endpoints: 32,
      documentation: 'Comprehensive',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Incident Response',
        'Security Analytics',
        'Compliance Reporting'
      ]
    },
    {
      name: 'Cloud Infrastructure API',
      description: 'Manage cloud resources, containers, and infrastructure as code through our comprehensive API.',
      version: 'v2.0.1',
      status: 'Production',
      endpoints: 67,
      documentation: 'Comprehensive',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Resource Management',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Auto-scaling'
      ]
    }
  ];

  const sdks = [
    {
      name: 'JavaScript/Node.js SDK',
      description: 'Official SDK for JavaScript and Node.js applications with TypeScript support.',
      language: 'JavaScript/TypeScript',
      version: 'v3.2.1',
      downloads: '15.2k/month',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Full API coverage',
        'TypeScript definitions',
        'Promise-based API',
        'Error handling',
        'Request/response interceptors'
      ]
    },
    {
      name: 'Python SDK',
      description: 'Python SDK with async support and comprehensive error handling.',
      language: 'Python',
      version: 'v2.8.3',
      downloads: '8.7k/month',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Async/await support',
        'Comprehensive error handling',
        'Type hints',
        'Request validation',
        'Rate limiting'
      ]
    },
    {
      name: 'Java SDK',
      description: 'Enterprise-grade Java SDK with Spring Boot integration support.',
      language: 'Java',
      version: 'v2.5.0',
      downloads: '5.3k/month',
      icon: Code,
      color: 'from-red-500 to-pink-500',
      features: [
        'Spring Boot integration',
        'Enterprise features',
        'Comprehensive logging',
        'Connection pooling',
        'Retry mechanisms'
      ]
    }
  ];

  const tools = [
    {
      name: 'CLI Tool',
      description: 'Command-line interface for managing Zion Tech Group services and resources.',
      type: 'Command Line',
      version: 'v1.4.2',
      downloads: '2.1k/month',
      icon: Terminal,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Service management',
        'Resource deployment',
        'Configuration management',
        'Monitoring tools',
        'Debug utilities'
      ]
    },
    {
      name: 'VS Code Extension',
      description: 'Visual Studio Code extension for enhanced development experience.',
      type: 'IDE Extension',
      version: 'v1.2.0',
      downloads: '3.8k/month',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      features: [
        'IntelliSense support',
        'Code snippets',
        'Debugging tools',
        'API testing',
        'Resource management'
      ]
    },
    {
      name: 'Postman Collection',
      description: 'Comprehensive Postman collection for testing all our APIs.',
      type: 'API Testing',
      version: 'v2.1.0',
      downloads: '1.9k/month',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      features: [
        'All API endpoints',
        'Environment variables',
        'Pre-request scripts',
        'Test scripts',
        'Documentation'
      ]
    }
  ];

  const resources = [
    {
      name: 'API Documentation',
      description: 'Comprehensive API reference with examples and best practices.',
      type: 'Documentation',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      url: '/docs/api'
    },
    {
      name: 'Code Examples',
      description: 'Ready-to-use code examples in multiple programming languages.',
      type: 'Code Samples',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      url: '/docs/examples'
    },
    {
      name: 'Tutorials',
      description: 'Step-by-step tutorials for common integration scenarios.',
      type: 'Learning',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      url: '/docs/tutorials'
    },
    {
      name: 'SDK Documentation',
      description: 'Detailed documentation for all our SDKs and libraries.',
      type: 'Documentation',
      icon: FileText,
      color: 'from-yellow-500 to-orange-500',
      url: '/docs/sdks'
    }
  ];

  const community = [
    {
      name: 'Developer Forum',
      description: 'Connect with other developers, ask questions, and share solutions.',
      members: '2.5k+',
      posts: '15k+',
      icon: MessageCircle,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'GitHub Discussions',
      description: 'Open discussions about our open-source projects and tools.',
      participants: '1.8k+',
      topics: '8k+',
      icon: Github,
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Stack Overflow',
      description: 'Find answers to common questions and help other developers.',
      questions: '5k+',
      answers: '12k+',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {' '}Portal
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build amazing applications with our comprehensive APIs, SDKs, and developer tools. 
              Get started quickly with detailed documentation, code examples, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'API Endpoints', icon: Globe, color: 'from-blue-500 to-cyan-500' },
              { number: '15+', label: 'SDKs & Libraries', icon: Package, color: 'from-green-500 to-emerald-500' },
              { number: '25k+', label: 'Monthly Downloads', icon: Download, color: 'from-purple-500 to-pink-500' },
              { number: '5k+', label: 'Active Developers', icon: Users, color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APIs */}
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
              APIs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful, RESTful APIs designed for developers. Build scalable applications with our comprehensive API suite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {apis.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${api.color} rounded-xl flex items-center justify-center`}>
                      <api.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        {api.status}
                      </span>
                      <div className="text-sm text-gray-400 mt-1">v{api.version}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{api.name}</h3>
                  <p className="text-gray-300 mb-4">{api.description}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>{api.endpoints} endpoints</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{api.documentation}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {api.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={`/docs/api/${api.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center space-x-1"
                    >
                      <span>View Docs</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                      Try API
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
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
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official SDKs and libraries for popular programming languages. Get started quickly with our developer-friendly tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${sdk.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <sdk.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {sdk.name}
                </h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {sdk.description}
                </p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>{sdk.language}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span>v{sdk.version}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>{sdk.downloads}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {sdk.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    Install
                  </button>
                  <button className="px-4 py-2 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                    Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
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
              Developer Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Essential tools to streamline your development workflow and boost productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {tool.name}
                </h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {tool.description}
                </p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{tool.type}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span>v{tool.version}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>{tool.downloads}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              Developer Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build amazing applications with our platform.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{resource.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                
                <a
                  href={resource.url}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 w-full block text-center"
                >
                  Access Resource
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
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
              Developer Community
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with fellow developers, get help, and share your knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {community.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  {Object.entries(item).filter(([key]) => !['name', 'description', 'icon', 'color'].includes(key)).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-center space-x-2">
                      <span className="capitalize">{key}:</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Join Community
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with our APIs and SDKs today. Get your API keys and begin integrating in minutes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Get API Keys</h3>
                <p className="text-gray-300 mb-4">Sign up and get your API keys to start building.</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Sign Up
                </button>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">Quick Start Guide</h3>
                <p className="text-gray-300 mb-4">Follow our quick start guide to get up and running in minutes.</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  View Guide
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                Our developer support team is here to help you succeed. Contact us for technical assistance, 
                integration support, or any questions about our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:dev-support@ziontechgroup.com"
                  className="px-6 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Developer;