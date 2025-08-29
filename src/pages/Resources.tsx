import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  Code,
  Cpu,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Users,
  PenTool,
  Video,
  Download,
  ExternalLink,
  Search,
  Filter,
  Star,
  Clock,
  TrendingUp,
  Zap,
  Brain,
  Server,
  Rocket,
  Shield,
  Cloud,
  Atom,
  Sparkles,
  Building,
  ShoppingCart
export default function Resources() {
  const resourceCategories = [
    {
      title: 'Documentation',
      icon: FileText,
      description: 'Technical documentation and guides',
      color: 'from-blue-500 to-cyan-600',
      resources: [
        { name: 'API Documentation', href: '/api', description: 'Complete API reference and examples', icon: Code, badge: 'Popular' },
        { name: 'Developer Guide', href: '/documentation', description: 'Getting started and development tutorials', icon: Cpu, badge: 'New' },
        { name: 'Integration Guides', href: '/docs/integrations', description: 'Third-party integrations and APIs', icon: ExternalLink, badge: 'Updated' },
        { name: 'Best Practices', href: '/docs/best-practices', description: 'Development and deployment best practices', icon: Star, badge: 'Featured' },
        { name: 'Architecture Overview', href: '/docs/architecture', description: 'System architecture and design patterns', icon: Server, badge: 'Technical' },
        { name: 'Security Guidelines', href: '/docs/security', description: 'Security best practices and compliance', icon: Shield, badge: 'Critical' }
      ]
    },
    {
      title: 'Training & Education',
      icon: BookOpen,
      description: 'Learning resources and training programs',
      color: 'from-green-500 to-emerald-600',
      resources: [
        { name: 'Video Tutorials', href: '/training', description: 'Step-by-step video guides', icon: Video, badge: 'Popular' },
        { name: 'Webinars', href: '/webinars', description: 'Live and recorded webinars', icon: Users, badge: 'Live' },
        { name: 'Certification Programs', href: '/training/certification', description: 'Professional certification courses', icon: Star, badge: 'Premium' },
        { name: 'Workshops', href: '/training/workshops', description: 'Hands-on training sessions', icon: Cpu, badge: 'Interactive' },
        { name: 'Learning Paths', href: '/training/paths', description: 'Structured learning journeys', icon: TrendingUp, badge: 'Guided' },
        { name: 'Knowledge Base', href: '/help', description: 'Comprehensive help articles', icon: HelpCircle, badge: 'Self-Service' }
      ]
    },
    {
      title: 'AI & ML Resources',
      icon: Brain,
      description: 'Artificial intelligence and machine learning resources',
      color: 'from-purple-500 to-pink-600',
      resources: [
        { name: 'AI Model Library', href: '/resources/ai-models', description: 'Pre-trained AI models and datasets', icon: Brain, badge: 'New' },
        { name: 'ML Tutorials', href: '/resources/ml-tutorials', description: 'Machine learning fundamentals', icon: BookOpen, badge: 'Educational' },
        { name: 'AI Use Cases', href: '/resources/ai-use-cases', description: 'Real-world AI implementation examples', icon: Sparkles, badge: 'Practical' },
        { name: 'Model Training Guide', href: '/resources/model-training', description: 'Custom model training tutorials', icon: TrendingUp, badge: 'Advanced' },
        { name: 'AI Ethics & Governance', href: '/resources/ai-ethics', description: 'AI ethics and responsible AI practices', icon: Shield, badge: 'Important' },
        { name: 'AI Research Papers', href: '/resources/research', description: 'Latest AI research and publications', icon: FileText, badge: 'Academic' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: Cpu,
      description: 'Development tools and utilities',
      color: 'from-orange-500 to-red-600',
      resources: [
        { name: 'SDK Downloads', href: '/resources/sdk', description: 'Software development kits', icon: Download, badge: 'Free' },
        { name: 'Code Samples', href: '/resources/code-samples', description: 'Ready-to-use code examples', icon: Code, badge: 'Practical' },
        { name: 'Development Templates', href: '/resources/templates', description: 'Project templates and boilerplates', icon: Zap, badge: 'Time-Saving' },
        { name: 'Testing Tools', href: '/resources/testing', description: 'Testing and debugging utilities', icon: Shield, badge: 'Quality' },
        { name: 'Performance Tools', href: '/resources/performance', description: 'Performance monitoring and optimization', icon: TrendingUp, badge: 'Optimization' },
        { name: 'Deployment Guides', href: '/resources/deployment', description: 'Deployment and DevOps guides', icon: Rocket, badge: 'Operations' }
      ]
    },
    {
      title: 'Industry Resources',
      icon: Server,
      description: 'Industry-specific resources and insights',
      color: 'from-indigo-500 to-purple-600',
      resources: [
        { name: 'Healthcare Solutions', href: '/resources/healthcare', description: 'Healthcare industry resources', icon: Shield, badge: 'Industry' },
        { name: 'Financial Services', href: '/resources/financial', description: 'Financial industry insights', icon: TrendingUp, badge: 'Industry' },
        { name: 'Manufacturing', href: '/resources/manufacturing', description: 'Manufacturing industry guides', icon: Server, badge: 'Industry' },
        { name: 'Government', href: '/resources/government', description: 'Government sector resources', icon: Building, badge: 'Industry' },
        { name: 'Education', href: '/resources/education', description: 'Education sector solutions', icon: BookOpen, badge: 'Industry' },
        { name: 'Retail', href: '/resources/retail', description: 'Retail industry insights', icon: ShoppingCart, badge: 'Industry' }
      ]
    },
    {
      title: 'Support & Community',
      icon: HelpCircle,
      description: 'Support resources and community engagement',
      color: 'from-cyan-500 to-blue-600',
      resources: [
        { name: 'Help Center', href: '/help', description: 'Comprehensive help and support', icon: HelpCircle, badge: '24/7' },
        { name: 'Community Forum', href: '/community', description: 'User community discussions', icon: Users, badge: 'Community' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions', icon: MessageCircle, badge: 'Quick' },
        { name: 'Support Tickets', href: '/support', description: 'Submit support requests', icon: HelpCircle, badge: 'Direct' },
        { name: 'Live Chat', href: '/support/chat', description: 'Real-time support chat', icon: MessageCircle, badge: 'Live' },
        { name: 'Status Page', href: '/status', description: 'Service status and updates', icon: TrendingUp, badge: 'Real-time' }
      ]

  ];

  const featuredResources = [
    {
      name: 'Getting Started Guide',
      description: 'Complete beginner guide to Zion Tech Group services',
      href: '/docs/getting-started',
      icon: BookOpen,
      badge: 'Essential',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'API Quick Start',
      description: 'Get up and running with our APIs in minutes',
      href: '/api/quickstart',
      icon: Code,
      badge: 'Popular',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Implementation Guide',
      description: 'Step-by-step AI solution implementation',
      href: '/resources/ai-implementation',
      icon: Brain,
      badge: 'Featured',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Security Best Practices',
      description: 'Essential security guidelines for your applications',
      href: '/docs/security-best-practices',
      icon: Shield,
      badge: 'Critical',
      color: 'from-red-500 to-orange-600'

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-black/95 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"

            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Resources
                </h1>
                <p className="text-lg text-cyan-400 font-rajdhani tracking-wider">
                  Knowledge Hub
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive documentation, training materials, and support resources.
              Everything you need to succeed with Zion Tech Group's cutting-edge solutions.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, documentation, tutorials..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"

          <h2 className="text-3xl font-bold font-rajdhani text-cyan-400 text-center mb-8 uppercase tracking-wider">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}

                <Link
                  to={resource.href}
                  className="block p-6 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group h-full"

                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      resource.badge === 'Essential' ? 'bg-blue-500/20 text-blue-400' :
                      resource.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                      resource.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {resource.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"

              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + resourceIndex * 0.05 }}

                    <Link
                      to={resource.href}
                      className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"

                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <resource.icon className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                              {resource.name}
                            </h4>
                            <p className="text-sm text-gray-400 mt-1">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            resource.badge === 'Popular' ? 'bg-green-500/20 text-green-400' :
                            resource.badge === 'New' ? 'bg-blue-500/20 text-blue-400' :
                            resource.badge === 'Updated' ? 'bg-yellow-500/20 text-yellow-400' :
                            resource.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                            resource.badge === 'Technical' ? 'bg-gray-500/20 text-gray-400' :
                            resource.badge === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            resource.badge === 'Live' ? 'bg-red-500/20 text-red-400' :
                            resource.badge === 'Premium' ? 'bg-yellow-500/20 text-yellow-400' :
                            resource.badge === 'Interactive' ? 'bg-cyan-500/20 text-cyan-400' :
                            resource.badge === 'Guided' ? 'bg-blue-500/20 text-blue-400' :
                            resource.badge === 'Self-Service' ? 'bg-green-500/20 text-green-400' :
                            resource.badge === 'Practical' ? 'bg-emerald-500/20 text-emerald-400' :
                            resource.badge === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
                            resource.badge === 'Important' ? 'bg-orange-500/20 text-orange-400' :
                            resource.badge === 'Academic' ? 'bg-indigo-500/20 text-indigo-400' :
                            resource.badge === 'Free' ? 'bg-green-500/20 text-green-400' :
                            resource.badge === 'Time-Saving' ? 'bg-blue-500/20 text-blue-400' :
                            resource.badge === 'Quality' ? 'bg-emerald-500/20 text-emerald-400' :
                            resource.badge === 'Optimization' ? 'bg-purple-500/20 text-purple-400' :
                            resource.badge === 'Operations' ? 'bg-orange-500/20 text-orange-400' :
                            resource.badge === 'Industry' ? 'bg-indigo-500/20 text-indigo-400' :
                            resource.badge === '24/7' ? 'bg-green-500/20 text-green-400' :
                            resource.badge === 'Community' ? 'bg-blue-500/20 text-blue-400' :
                            resource.badge === 'Quick' ? 'bg-cyan-500/20 text-cyan-400' :
                            resource.badge === 'Direct' ? 'bg-purple-500/20 text-purple-400' :
                            resource.badge === 'Real-time' ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {resource.badge}
                          </span>
                          <ExternalLink className="w-3 h-3 text-cyan-500/50 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"

          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-4">
              Need More Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you get the most out of our resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"

                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"

                Visit Help Center
              </Link>
              <Link
                to="/training"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"

                Explore Training
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}}}}