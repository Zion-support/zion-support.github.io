import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, Database, Shield, Brain, Zap, Globe, Users, FileText, Video, Download, ArrowRight, ChevronRight, ChevronDown, ExternalLink, Github, Book, Lightbulb, AlertCircle, Info, CheckCircle, Clock, Star, Tag, Rocket, Settings, Key, Lock, Link, Webhook, Package, Container, GitBranch, Activity, MessageCircle, Eye, Type, TrendingUp, LifeBuoy } from 'lucide-react';

export default function Docs() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', difficulty: 'Beginner', time: '5 min', icon: Zap },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '10 min', icon: Download },
        { title: 'First Project', description: 'Create your first AI project', difficulty: 'Beginner', time: '15 min', icon: Code },
        { title: 'Configuration', description: 'Configure your development environment', difficulty: 'Beginner', time: '20 min', icon: Settings }
      ]
    },
    {
      id: 'ai-models',
      title: 'AI Models & APIs',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'Model Overview', description: 'Understanding our AI model architecture', difficulty: 'Intermediate', time: '20 min', icon: Brain },
        { title: 'API Reference', description: 'Complete API documentation', difficulty: 'Intermediate', time: '30 min', icon: Code },
        { title: 'Model Training', description: 'Train custom AI models', difficulty: 'Advanced', time: '45 min', icon: Brain },
        { title: 'Model Deployment', description: 'Deploy models to production', difficulty: 'Advanced', time: '60 min', icon: Rocket }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Security Overview', description: 'Security features and best practices', difficulty: 'Intermediate', time: '25 min', icon: Shield },
        { title: 'Authentication', description: 'User authentication and authorization', difficulty: 'Intermediate', time: '30 min', icon: Key },
        { title: 'Data Protection', description: 'Data encryption and privacy', difficulty: 'Intermediate', time: '35 min', icon: Lock },
        { title: 'Compliance', description: 'SOC2, GDPR, and HIPAA compliance', difficulty: 'Advanced', time: '40 min', icon: CheckCircle }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      articles: [
        { title: 'API Integrations', description: 'Connect with external services', difficulty: 'Intermediate', time: '25 min', icon: Link },
        { title: 'Webhook Setup', description: 'Configure webhooks for real-time updates', difficulty: 'Intermediate', time: '30 min', icon: Webhook },
        { title: 'SDK Libraries', description: 'Client libraries and SDKs', difficulty: 'Intermediate', time: '35 min', icon: Package },
        { title: 'Third-party Tools', description: 'Integration with popular tools', difficulty: 'Advanced', time: '45 min', icon: ExternalLink }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        { title: 'Deployment Guide', description: 'Deploy to various environments', difficulty: 'Intermediate', time: '30 min', icon: Rocket },
        { title: 'Docker Setup', description: 'Containerized deployment with Docker', difficulty: 'Intermediate', time: '40 min', icon: Container },
        { title: 'CI/CD Pipeline', description: 'Automated deployment pipelines', difficulty: 'Advanced', time: '60 min', icon: GitBranch },
        { title: 'Monitoring', description: 'Application monitoring and logging', difficulty: 'Advanced', time: '45 min', icon: Activity }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Examples',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Building a Chatbot', description: 'Create an AI-powered chatbot', difficulty: 'Beginner', time: '45 min', icon: MessageCircle },
        { title: 'Image Recognition', description: 'Implement computer vision features', difficulty: 'Intermediate', time: '60 min', icon: Eye },
        { title: 'Natural Language Processing', description: 'Text analysis and processing', difficulty: 'Intermediate', time: '75 min', icon: Type },
        { title: 'Recommendation Engine', description: 'Build a recommendation system', difficulty: 'Advanced', time: '90 min', icon: TrendingUp }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', icon: Code, link: '/docs/api', color: 'from-blue-500 to-cyan-500' },
    { title: 'SDK Downloads', icon: Download, link: '/docs/sdk', color: 'from-green-500 to-emerald-500' },
    { title: 'Video Tutorials', icon: Video, link: '/tutorials', color: 'from-purple-500 to-pink-500' },
    { title: 'Community Forum', icon: Users, link: '/community', color: 'from-orange-500 to-red-500' },
    { title: 'GitHub Repository', icon: Github, link: 'https://github.com/ziontechgroup', color: 'from-gray-500 to-gray-700' },
    { title: 'Support Center', icon: LifeBuoy, link: '/support', color: 'from-indigo-500 to-purple-500' }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Documentation</span> & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive documentation, tutorials, and guides to help you build powerful AI applications with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Start Building
            </button>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Support
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation, tutorials, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Quick Access
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.link}
                  target={link.link.startsWith('http') ? '_blank' : '_self'}
                  rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm">Access Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Documentation Sections
          </h2>
          <div className="max-w-6xl mx-auto">
            {filteredSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              
              return (
                <div key={section.id} className="mb-6">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {section.articles.length} articles available
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-4 ml-8 space-y-3">
                      {section.articles.map((article, index) => {
                        const ArticleIcon = article.icon;
                        return (
                          <div key={index} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <ArticleIcon className="w-4 h-4 text-blue-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-medium text-white mb-2">{article.title}</h4>
                                <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                                <div className="flex items-center gap-4 text-xs">
                                  <div className="flex items-center gap-1">
                                    <Tag className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400">{article.difficulty}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-gray-400">{article.time}</span>
                                  </div>
                                </div>
                              </div>
                              <button className="p-2 bg-white/10 text-gray-300 hover:bg-white/20 rounded-lg transition-colors">
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Follow our step-by-step guides to build your first AI application. Our documentation is designed to get you up and running quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Start with Quick Guide
                </button>
                <Link
                  to="/tutorials"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step video guides for visual learners
              </p>
              <Link
                to="/tutorials"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Watch Videos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300 text-sm mb-4">
                Connect with other developers and get help
              </p>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Join Community <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get help from our technical support team
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Get Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}