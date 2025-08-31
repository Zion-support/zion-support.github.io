import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Cloud, Shield, Brain, Globe, Building,
  ArrowRight, ExternalLink, Download, Play, FileText,
  Search, Filter, CheckCircle, AlertCircle, Info, Clock,
  Users, Zap, Rocket, TrendingUp, Star, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, GitBranch,
  Cpu, Network, BarChart3, Database, Layers, Workflow,
  Palette, TestTube, Bug, Lightbulb, Target, Heart
} from 'lucide-react';

export default function DeveloperPortal() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const developerCategories = [
    { id: 'all', name: 'All Tools', icon: Code, count: 25 },
    { id: 'development', name: 'Development', icon: GitBranch, count: 8 },
    { id: 'testing', name: 'Testing & QA', icon: TestTube, count: 6 },
    { id: 'deployment', name: 'Deployment', icon: Rocket, count: 5 },
    { id: 'monitoring', name: 'Monitoring', icon: Activity, count: 4 },
    { id: 'design', name: 'Design', icon: Palette, count: 2 }
  ];

  const developerTools = [
    {
      id: 1,
      name: 'Code Editor',
      category: 'development',
      description: 'Advanced web-based code editor with syntax highlighting, autocomplete, and real-time collaboration',
      features: ['Syntax highlighting', 'Auto-complete', 'Real-time collaboration', 'Git integration'],
      status: 'live',
      users: 15420,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: 'API Testing Suite',
      category: 'testing',
      description: 'Comprehensive API testing tool with automated testing, performance monitoring, and detailed reporting',
      features: ['Automated testing', 'Performance monitoring', 'Detailed reporting', 'CI/CD integration'],
      status: 'live',
      users: 12850,
      rating: 4.9,
      featured: true
    },
    {
      id: 3,
      name: 'Database Manager',
      category: 'development',
      description: 'Visual database management tool supporting multiple database types with query builder and schema designer',
      features: ['Multiple DB support', 'Query builder', 'Schema designer', 'Data visualization'],
      status: 'live',
      users: 9870,
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      name: 'Deployment Pipeline',
      category: 'deployment',
      description: 'Automated deployment pipeline with blue-green deployments, rollback capabilities, and environment management',
      features: ['Blue-green deployment', 'Rollback support', 'Environment management', 'Multi-cloud support'],
      status: 'live',
      users: 7560,
      rating: 4.8,
      featured: false
    },
    {
      id: 5,
      name: 'Performance Monitor',
      category: 'monitoring',
      description: 'Real-time application performance monitoring with alerting, metrics, and optimization recommendations',
      features: ['Real-time monitoring', 'Alerting system', 'Performance metrics', 'Optimization tips'],
      status: 'live',
      users: 11200,
      rating: 4.6,
      featured: false
    },
    {
      id: 6,
      name: 'Design System',
      category: 'design',
      description: 'Comprehensive design system with reusable components, design tokens, and documentation',
      features: ['Reusable components', 'Design tokens', 'Documentation', 'Figma integration'],
      status: 'live',
      users: 8930,
      rating: 4.9,
      featured: false
    }
  ];

  const learningResources = [
    {
      id: 1,
      title: 'Getting Started Guide',
      type: 'tutorial',
      difficulty: 'beginner',
      duration: '30 min',
      description: 'Complete guide to get started with Zion Tech Group developer tools and APIs',
      tags: ['Beginner', 'Tutorial', 'Setup'],
      featured: true
    },
    {
      id: 2,
      title: 'API Best Practices',
      type: 'guide',
      difficulty: 'intermediate',
      duration: '45 min',
      description: 'Learn best practices for building robust and scalable APIs',
      tags: ['Intermediate', 'Best Practices', 'API Design'],
      featured: true
    },
    {
      id: 3,
      title: 'Advanced Testing Strategies',
      type: 'workshop',
      difficulty: 'advanced',
      duration: '2 hours',
      description: 'Deep dive into advanced testing strategies and automation',
      tags: ['Advanced', 'Testing', 'Automation'],
      featured: false
    },
    {
      id: 4,
      title: 'Performance Optimization',
      type: 'guide',
      difficulty: 'intermediate',
      duration: '1 hour',
      description: 'Techniques for optimizing application performance and scalability',
      tags: ['Intermediate', 'Performance', 'Optimization'],
      featured: false
    }
  ];

  const communityFeatures = [
    {
      id: 1,
      name: 'Developer Forums',
      description: 'Connect with other developers, ask questions, and share knowledge',
      icon: MessageCircle,
      users: 15420,
      active: true
    },
    {
      id: 2,
      name: 'Code Reviews',
      description: 'Submit code for review and get feedback from experienced developers',
      icon: Eye,
      users: 8930,
      active: true
    },
    {
      id: 3,
      name: 'Hackathons',
      description: 'Participate in regular hackathons and coding challenges',
      icon: Trophy,
      users: 5670,
      active: true
    },
    {
      id: 4,
      name: 'Mentorship Program',
      description: 'Get mentored by senior developers or mentor others',
      icon: Users,
      users: 3240,
      active: false
    }
  ];

  const filteredTools = developerTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tutorial': return Play;
      case 'guide': return BookOpen;
      case 'workshop': return Users;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, test, deploy, and scale applications with Zion Tech Group's developer tools and platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tools"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                Explore Tools
              </a>
              <a
                href="#resources"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learning Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Developer Tools</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Learning Resources</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search developer tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {developerCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Developer Tools</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredTools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {tool.status}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-300">{tool.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
                    <p className="text-gray-300 mb-4">{tool.description}</p>
                    <div className="space-y-2 mb-4">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{tool.users.toLocaleString()} users</span>
                      <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Launch Tool
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Developer Tools */}
      <section id="tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Developer Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tool.status}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-300">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{tool.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{tool.description}</p>
                  <div className="space-y-2 mb-4">
                    {tool.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{tool.users.toLocaleString()} users</span>
                    <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Launch Tool
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources */}
      <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Resources</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Master our developer tools and platform with comprehensive tutorials, guides, and workshops
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {resource.duration}
                      </span>
                      <span className="text-blue-400">{resource.type}</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Start Learning
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Developer Community</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Connect with fellow developers, share knowledge, and grow your skills in our vibrant community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{feature.users.toLocaleString()} members</span>
                      <span className={`px-2 py-1 rounded text-xs ${feature.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {feature.active ? 'Active' : 'Coming Soon'}
                      </span>
                    </div>
                    <button className={`w-full px-4 py-2 font-medium rounded-lg transition-colors ${
                      feature.active 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    }`}>
                      {feature.active ? 'Join Community' : 'Coming Soon'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of developers building the future with Zion Tech Group's developer tools and platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Developer Portal
              </a>
              <a
                href="/documentation"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}