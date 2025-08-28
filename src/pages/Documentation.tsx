import React from 'react';
import { SEO } from '../components/SEO';
import { Code, BookOpen, Download, Search, Filter, ArrowRight, Star, Eye, Tag, ExternalLink, GitBranch, Zap, Database, Server, Lock, Globe, Cpu, FileText, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const documentation = [
    {
      title: 'API Reference Guide',
      description: 'Complete API documentation for all Zion Tech Group services and platforms. Includes authentication, endpoints, request/response formats, and code examples.',
      category: 'API Documentation',
      version: 'v2.1.0',
      lastUpdated: '2024-01-20',
      author: 'Development Team',
      tags: ['API', 'Documentation', 'Technical', 'Reference'],
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      sections: ['Authentication', 'Endpoints', 'Examples', 'SDKs'],
      downloadUrl: '/docs/api-reference-v2.1.0.pdf'
    },
    {
      title: 'Integration Best Practices',
      description: 'Guidelines for integrating our services with your existing systems and workflows. Learn about best practices, common patterns, and troubleshooting.',
      category: 'Integration Guides',
      version: 'v1.5.0',
      lastUpdated: '2024-01-15',
      author: 'Solutions Architecture Team',
      tags: ['Integration', 'Best Practices', 'Technical', 'Guide'],
      featured: true,
      color: 'from-green-500 to-emerald-500',
      sections: ['Architecture', 'Patterns', 'Troubleshooting', 'Examples'],
      downloadUrl: '/docs/integration-best-practices-v1.5.0.pdf'
    },
    {
      title: 'AI Services Developer Guide',
      description: 'Comprehensive guide to implementing and customizing our AI services. Includes model training, deployment, and optimization strategies.',
      category: 'AI & Machine Learning',
      version: 'v3.0.0',
      lastUpdated: '2024-01-18',
      author: 'AI Research Team',
      tags: ['AI', 'Machine Learning', 'Developer', 'Guide'],
      featured: true,
      color: 'from-purple-500 to-pink-500',
      sections: ['Models', 'Training', 'Deployment', 'Optimization'],
      downloadUrl: '/docs/ai-services-developer-guide-v3.0.0.pdf'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up and configuring cloud infrastructure for our services. Covers AWS, Azure, and GCP deployment.',
      category: 'Infrastructure',
      version: 'v2.0.0',
      lastUpdated: '2024-01-12',
      author: 'Cloud Architecture Team',
      tags: ['Cloud', 'Infrastructure', 'Setup', 'Deployment'],
      featured: false,
      color: 'from-orange-500 to-red-500',
      sections: ['AWS Setup', 'Azure Setup', 'GCP Setup', 'Configuration'],
      downloadUrl: '/docs/cloud-infrastructure-setup-v2.0.0.pdf'
    },
    {
      title: 'Security Implementation Guide',
      description: 'Security best practices and implementation guidelines for our services. Learn about authentication, authorization, and data protection.',
      category: 'Security',
      version: 'v1.8.0',
      lastUpdated: '2024-01-10',
      author: 'Security Team',
      tags: ['Security', 'Authentication', 'Authorization', 'Best Practices'],
      featured: false,
      color: 'from-red-500 to-pink-500',
      sections: ['Authentication', 'Authorization', 'Data Protection', 'Compliance'],
      downloadUrl: '/docs/security-implementation-guide-v1.8.0.pdf'
    },
    {
      title: 'Performance Optimization Guide',
      description: 'Techniques and strategies for optimizing the performance of our services. Includes monitoring, profiling, and optimization best practices.',
      category: 'Performance',
      version: 'v1.3.0',
      lastUpdated: '2024-01-08',
      author: 'Performance Engineering Team',
      tags: ['Performance', 'Optimization', 'Monitoring', 'Best Practices'],
      featured: false,
      color: 'from-emerald-500 to-green-500',
      sections: ['Monitoring', 'Profiling', 'Optimization', 'Best Practices'],
      downloadUrl: '/docs/performance-optimization-guide-v1.3.0.pdf'
    }
  ];

  const categories = [
    { name: 'All', count: documentation.length, active: true },
    { name: 'API Documentation', count: documentation.filter(d => d.category === 'API Documentation').length, active: false },
    { name: 'Integration Guides', count: documentation.filter(d => d.category === 'Integration Guides').length, active: false },
    { name: 'AI & Machine Learning', count: documentation.filter(d => d.category === 'AI & Machine Learning').length, active: false },
    { name: 'Infrastructure', count: documentation.filter(d => d.category === 'Infrastructure').length, active: false },
    { name: 'Security', count: documentation.filter(d => d.category === 'Security').length, active: false },
    { name: 'Performance', count: documentation.filter(d => d.category === 'Performance').length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredDocumentation = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Access comprehensive technical documentation, API guides, integration resources, and developer tools to help you implement our solutions effectively."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access comprehensive technical guides, API documentation, integration resources, 
              and developer tools to help you implement our solutions effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Docs
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 border border-slate-600'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documentation */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most essential and comprehensive technical guides and references
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDocumentation.filter(doc => doc.featured).map((doc, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{doc.title}</h3>
                <p className="text-gray-300 mb-6">{doc.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-2" />
                    {doc.version}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {doc.lastUpdated}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {doc.author}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-indigo-400 mb-2">Sections:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doc.sections.map((section, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        {section}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {doc.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-indigo-400 font-semibold">{doc.category}</p>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Documentation */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of technical guides and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocumentation.map((doc, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${doc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{doc.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center">
                    <GitBranch className="w-3 h-3 mr-1" />
                    {doc.version}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {doc.lastUpdated}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <p className="text-indigo-400 font-semibold">{doc.category}</p>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    className="flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm"
                  >
                    Download
                    <Download className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Developer Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional tools and resources to help developers succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SDKs & Libraries',
                description: 'Official SDKs and client libraries for popular programming languages',
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
                link: '/sdk'
              },
              {
                title: 'Code Examples',
                description: 'Ready-to-use code examples and sample implementations',
                icon: FileText,
                color: 'from-green-500 to-emerald-500',
                link: '/examples'
              },
              {
                title: 'API Playground',
                description: 'Interactive API testing and exploration environment',
                icon: Server,
                color: 'from-purple-500 to-pink-500',
                link: '/playground'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers and get support',
                icon: Users,
                color: 'from-orange-500 to-red-500',
                link: '/community'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                
                <Link
                  to={resource.link}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Docs
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and get notified about new documentation, 
              API updates, and technical resources delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our technical writing team can create custom documentation, tutorials, 
              and guides tailored to your specific implementation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                Request Custom Docs
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
