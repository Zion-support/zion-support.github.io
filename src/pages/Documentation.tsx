import React from 'react';
import { SEO } from '../components/SEO';
import { Code, BookOpen, FileText, Download, Search, Filter, ChevronRight, ExternalLink, Github, Globe, Database, Shield, Cloud, Brain, Zap } from 'lucide-react';

export default function Documentation() {
  const categories = [
    {
      name: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      guides: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '15 min' },
        { title: 'Configuration Basics', description: 'Essential configuration options', difficulty: 'Beginner', time: '20 min' }
      ]
    },
    {
      name: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      guides: [
        { title: 'Authentication', description: 'API authentication and security', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Endpoints Reference', description: 'Complete API endpoint documentation', difficulty: 'Advanced', time: '45 min' },
        { title: 'Rate Limiting', description: 'Understanding API rate limits', difficulty: 'Intermediate', time: '20 min' }
      ]
    },
    {
      name: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      guides: [
        { title: 'React Integration', description: 'Integrate with React applications', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Node.js Backend', description: 'Server-side integration examples', difficulty: 'Advanced', time: '60 min' },
        { title: 'Mobile SDKs', description: 'iOS and Android integration', difficulty: 'Intermediate', time: '50 min' }
      ]
    },
    {
      name: 'Security & Compliance',
      description: 'Security best practices and compliance guidelines',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      guides: [
        { title: 'Security Best Practices', description: 'Implementing security measures', difficulty: 'Advanced', time: '45 min' },
        { title: 'GDPR Compliance', description: 'Data protection and privacy', difficulty: 'Intermediate', time: '35 min' },
        { title: 'SOC 2 Guidelines', description: 'Security compliance framework', difficulty: 'Advanced', time: '50 min' }
      ]
    },
    {
      name: 'Deployment & DevOps',
      description: 'Deployment strategies and infrastructure setup',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      guides: [
        { title: 'Docker Deployment', description: 'Containerized deployment guide', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Kubernetes Setup', description: 'Orchestration and scaling', difficulty: 'Advanced', time: '90 min' },
        { title: 'CI/CD Pipeline', description: 'Automated deployment workflows', difficulty: 'Advanced', time: '60 min' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'AI model integration and ML workflows',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      guides: [
        { title: 'Model Training', description: 'Training custom AI models', difficulty: 'Advanced', time: '120 min' },
        { title: 'Inference API', description: 'Real-time AI predictions', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Model Optimization', description: 'Performance and efficiency tuning', difficulty: 'Advanced', time: '75 min' }
      ]
    }
  ];

  const popularGuides = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with Zion Tech Group services in under 5 minutes',
      category: 'Getting Started',
      views: 15420,
      rating: 4.9,
      icon: BookOpen
    },
    {
      title: 'API Authentication',
      description: 'Learn how to securely authenticate with our APIs using various methods',
      category: 'API Reference',
      views: 12850,
      rating: 4.8,
      icon: Shield
    },
    {
      title: 'React Integration',
      description: 'Step-by-step guide to integrating our services with React applications',
      category: 'Integration Guides',
      views: 11230,
      rating: 4.7,
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, integration guides, and developer resources for Zion Tech Group services."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"></div>
        <div className="relative container-responsive py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Developer Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technical guides, API references, and integration tutorials to help you 
              build powerful applications with Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>100+ Guides</span>
              </div>
              <div className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                <span>Complete APIs</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                <span>SDKs & Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Guides */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {popularGuides.map((guide, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <guide.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-blue-400 text-sm rounded-full mb-3">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">⭐</span>
                    {guide.rating}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👁️</span>
                    {guide.views.toLocaleString()}
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group-hover:scale-105">
                  Read Guide
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Categories */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="bg-slate-700/30 rounded-xl p-4 hover:bg-slate-700/50 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-2">{guide.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">⏱️</span>
                        {guide.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Resources */}
      <div className="container-responsive py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Developer Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">GitHub Repositories</h3>
            <p className="text-gray-400 text-sm mb-4">
              Access our open-source SDKs, sample applications, and code examples
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-lg transition-colors">
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">API Playground</h3>
            <p className="text-gray-400 text-sm mb-4">
              Test our APIs interactively with our online playground and sandbox
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-lg transition-colors">
              Try APIs
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Developer Support</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get help from our developer support team and community forums
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded-lg transition-colors">
              Get Support
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help with Integration?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our developer support team is here to help you integrate our services successfully. 
            Get personalized assistance and best practices guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Contact Developer Support
            </button>
            <button className="px-6 py-3 bg-slate-700/50 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-300">
              Join Developer Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
