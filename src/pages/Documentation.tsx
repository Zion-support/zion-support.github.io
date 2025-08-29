import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  FileText, 
  Code, 
  Download, 
  ExternalLink, 
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  User,
  Tag,
  Bookmark,
  Share2,
  Filter,
  Grid,
  List,
  Zap,
  Brain,
  Cloud,
  Shield,
  Globe,
  Database,
  Cpu,
  Network,
  Lock,
  Settings,
  BarChart3,
  Palette,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const documentationCategories = [
    {
      id: 'all',
      name: 'All Documentation',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-600',
      count: '500+'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: '120+'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      count: '95+'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: '75+'
    },
    {
      id: 'quantum',
      name: 'Quantum Tech',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      count: '45+'
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge',
      icon: Network,
      color: 'from-yellow-600 to-orange-600',
      count: '65+'
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick setup guide for implementing AI solutions',
      category: 'AI Services',
      difficulty: 'Beginner',
      time: '15 min',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/docs/ai/getting-started'
    },
    {
      title: 'Cloud Migration Guide',
      description: 'Step-by-step cloud migration process',
      category: 'Cloud & DevOps',
      difficulty: 'Intermediate',
      time: '45 min',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/docs/cloud/migration'
    },
    {
      title: 'Zero Trust Implementation',
      description: 'Security framework implementation guide',
      category: 'Security',
      difficulty: 'Advanced',
      time: '60 min',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/docs/security/zero-trust'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts',
      category: 'Quantum Tech',
      difficulty: 'Beginner',
      time: '30 min',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      link: '/docs/quantum/basics'
    }
  ];

  const apiReferences = [
    {
      title: 'AI Services API',
      version: 'v2.1.0',
      endpoints: 45,
      category: 'AI Services',
      status: 'Stable',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/docs/api/ai-services'
    },
    {
      title: 'Cloud Management API',
      version: 'v1.8.2',
      endpoints: 32,
      category: 'Cloud & DevOps',
      status: 'Stable',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/docs/api/cloud-management'
    },
    {
      title: 'Security API',
      version: 'v1.5.1',
      endpoints: 28,
      category: 'Security',
      status: 'Beta',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/docs/api/security'
    },
    {
      title: 'IoT Edge API',
      version: 'v1.2.0',
      endpoints: 18,
      category: 'IoT & Edge',
      status: 'Alpha',
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      link: '/docs/api/iot-edge'
    }
  ];

  const tutorials = [
    {
      title: 'Building an AI-Powered Chatbot',
      description: 'Create a conversational AI chatbot using our platform',
      category: 'AI Services',
      duration: '2 hours',
      level: 'Intermediate',
      author: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 1250,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/docs/tutorials/ai-chatbot'
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement microservices with best practices',
      category: 'Cloud & DevOps',
      duration: '3 hours',
      level: 'Advanced',
      author: 'Mike Rodriguez',
      rating: 4.9,
      students: 890,
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/docs/tutorials/microservices'
    },
    {
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and remediation',
      category: 'Security',
      duration: '1.5 hours',
      level: 'Intermediate',
      author: 'Alex Thompson',
      rating: 4.7,
      students: 1100,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/docs/tutorials/cybersecurity'
    },
    {
      title: 'Edge Computing Setup',
      description: 'Deploy and manage edge computing infrastructure',
      category: 'IoT & Edge',
      duration: '2.5 hours',
      level: 'Advanced',
      author: 'Dr. Emily Watson',
      rating: 4.6,
      students: 750,
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      link: '/docs/tutorials/edge-computing'
    }
  ];

  const codeExamples = [
    {
      title: 'AI Model Training',
      language: 'Python',
      category: 'AI Services',
      description: 'Complete example of training an AI model',
      lines: 150,
      downloads: 2300,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/docs/examples/ai-training'
    },
    {
      title: 'Cloud Deployment',
      language: 'Terraform',
      category: 'Cloud & DevOps',
      description: 'Infrastructure as code deployment example',
      lines: 85,
      downloads: 1800,
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/docs/examples/cloud-deployment'
    },
    {
      title: 'Security Monitoring',
      language: 'JavaScript',
      category: 'Security',
      description: 'Real-time security monitoring implementation',
      lines: 120,
      downloads: 1600,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/docs/examples/security-monitoring'
    },
    {
      title: 'IoT Data Processing',
      language: 'Python',
      category: 'IoT & Edge',
      description: 'Edge device data processing pipeline',
      lines: 95,
      downloads: 1200,
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      link: '/docs/examples/iot-processing'
    }
  ];

  const documentationResources = [
    {
      title: 'API Playground',
      icon: Code,
      description: 'Interactive API testing environment',
      link: '/docs/playground'
    },
    {
      title: 'SDK Downloads',
      icon: Download,
      description: 'Client libraries and SDKs',
      link: '/docs/sdks'
    },
    {
      title: 'Release Notes',
      icon: FileText,
      description: 'Latest updates and changelog',
      link: '/docs/releases'
    },
    {
      title: 'Community Examples',
      icon: Users,
      description: 'User-contributed examples and solutions',
      link: '/docs/community'
    }
  ];

  const filteredContent = () => {
    let content = [...quickStartGuides, ...apiReferences, ...tutorials, ...codeExamples];
    
    if (selectedCategory !== 'all') {
      content = content.filter(item => item.category.toLowerCase().includes(selectedCategory));
    }
    
    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return content;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, tutorials, and code examples for Zion Tech Group services."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, tutorials, and code examples to help you implement and integrate our services effectively.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Documentation Categories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse documentation organized by service categories and technology areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {documentationCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-center p-4 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/20'
                    : 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{category.name}</div>
                <div className="text-xs text-slate-400">{category.count}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* View Mode Toggle */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <span className="text-slate-400">Showing </span>
              <span className="font-semibold">{filteredContent().length}</span>
              <span className="text-slate-400"> results</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-400 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-400 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guides</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get up and running quickly with our step-by-step guides for popular services.
            </p>
          </motion.div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={guide.link}>
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${
                    viewMode === 'list' ? 'flex items-center space-x-4' : ''
                  }`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''
                    }`}>
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">{guide.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-slate-400">
                          <span className="flex items-center space-x-1">
                            <Tag className="w-3 h-3" />
                            <span>{guide.category}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{guide.time}</span>
                          </span>
                        </div>
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API References */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">API References</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Comprehensive API documentation with examples, endpoints, and integration guides.
            </p>
          </motion.div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {apiReferences.map((api, index) => (
              <motion.div
                key={api.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={api.link}>
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${
                    viewMode === 'list' ? 'flex items-center space-x-4' : ''
                  }`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${api.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''
                    }`}>
                      <api.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {api.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Version:</span>
                          <span className="text-white font-mono">{api.version}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Endpoints:</span>
                          <span className="text-white">{api.endpoints}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Status:</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            api.status === 'Stable' ? 'bg-green-500/20 text-green-400' :
                            api.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {api.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">View API Docs</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Video Tutorials</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Learn through comprehensive video tutorials and hands-on exercises.
            </p>
          </motion.div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={tutorial.link}>
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${
                    viewMode === 'list' ? 'flex items-center space-x-4' : ''
                  }`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${tutorial.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''
                    }`}>
                      <tutorial.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">{tutorial.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Duration:</span>
                          <span className="text-white">{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Level:</span>
                          <span className="text-white">{tutorial.level}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Students:</span>
                          <span className="text-white">{tutorial.students}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{tutorial.rating}</span>
                          </div>
                          <span className="text-slate-400 text-sm">by {tutorial.author}</span>
                        </div>
                      </div>
                      
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Watch Tutorial</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Code Examples</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Ready-to-use code examples and implementation patterns for various use cases.
            </p>
          </motion.div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={example.link}>
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${
                    viewMode === 'list' ? 'flex items-center space-x-4' : ''
                  }`}>
                    <div className={`w-12 h-12 bg-gradient-to-br ${example.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''
                    }`}>
                      <example.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">{example.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Language:</span>
                          <span className="text-white font-mono">{example.language}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Lines:</span>
                          <span className="text-white">{example.lines}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Downloads:</span>
                          <span className="text-white">{example.downloads}</span>
                        </div>
                      </div>
                      
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">View Code</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Tools and resources to enhance your development experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentationResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={resource.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Access Resource</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Help with Documentation?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our support team is here to help you navigate our documentation and get the most out of our services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/community"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Ask Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
