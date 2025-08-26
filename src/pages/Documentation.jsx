import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { BookOpen, Code, FileText, Download, Search, ExternalLink, Github, Globe, Database, Shield } from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentationCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      articles: 12,
      featured: true
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: Code,
      articles: 45,
      featured: true
    },
    {
      id: 'sdks',
      name: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for various platforms',
      icon: Download,
      articles: 8,
      featured: false
    },
    {
      id: 'tutorials',
      name: 'Tutorials',
      description: 'Step-by-step guides and walkthroughs',
      icon: FileText,
      articles: 23,
      featured: false
    },
    {
      id: 'examples',
      name: 'Code Examples',
      description: 'Practical examples and sample code',
      icon: Code,
      articles: 34,
      featured: false
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: Shield,
      articles: 18,
      featured: false
    }
  ];

  const popularArticles = [
    {
      title: "Quick Start Guide",
      description: "Get up and running with Zion Tech Group services in minutes",
      category: "Getting Started",
      readTime: "5 min read",
      views: 1247
    },
    {
      title: "Authentication & Authorization",
      description: "Learn how to implement secure authentication in your applications",
      category: "API Reference",
      readTime: "12 min read",
      views: 892
    },
    {
      title: "Webhook Integration",
      description: "Set up webhooks to receive real-time updates and notifications",
      category: "Tutorials",
      readTime: "8 min read",
      views: 734
    },
    {
      title: "Error Handling Best Practices",
      description: "Implement robust error handling for production applications",
      category: "Tutorials",
      readTime: "10 min read",
      views: 567
    }
  ];

  const sdkDownloads = [
    {
      name: "JavaScript/Node.js",
      version: "v2.1.0",
      downloads: "15.2k",
      icon: "📦",
      github: "https://github.com/ziontechgroup/js-sdk",
      npm: "https://npmjs.com/package/@ziontechgroup/sdk"
    },
    {
      name: "Python",
      version: "v1.8.2",
      downloads: "8.7k",
      icon: "🐍",
      github: "https://github.com/ziontechgroup/python-sdk",
      pypi: "https://pypi.org/project/ziontechgroup-sdk/"
    },
    {
      name: "Java",
      version: "v2.0.1",
      downloads: "6.3k",
      icon: "☕",
      github: "https://github.com/ziontechgroup/java-sdk",
      maven: "https://maven.org/repository/ziontechgroup-sdk/"
    },
    {
      name: "Go",
      version: "v1.5.0",
      downloads: "4.1k",
      icon: "🐹",
      github: "https://github.com/ziontechgroup/go-sdk",
      pkg: "https://pkg.go.dev/github.com/ziontechgroup/go-sdk"
    }
  ];

  const categories = ["all", "getting-started", "api-reference", "sdks", "tutorials", "examples", "troubleshooting"];

  const filteredCategories = selectedCategory === 'all' 
    ? documentationCategories 
    : documentationCategories.filter(cat => cat.id === selectedCategory);

  return (
    <>
      <SEO 
        title="Documentation - Zion Tech Group Developer Resources" 
        description="Comprehensive documentation, API references, SDKs, and developer resources for building with Zion Tech Group services." 
        canonical="/docs" 
        url="https://ziontechgroup.com/docs"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Everything you need to build amazing applications with Zion Tech Group. 
              From quick start guides to comprehensive API references.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation, APIs, or code examples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-blue-light'
                }`}
              >
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Documentation Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Browse Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div key={category.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {category.name}
                      </h3>
                      {category.featured && (
                        <span className="inline-block px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">
                      {category.articles} articles
                    </span>
                    <Link to={`/docs/${category.id}`} className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                      Browse →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {article.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">
                      {article.views} views
                    </span>
                    <Link to={`/docs/article/${index}`} className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SDK Downloads */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              SDKs & Libraries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdkDownloads.map((sdk, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center hover:border-zion-cyan transition-all duration-300">
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {sdk.name}
                  </h3>
                  <div className="text-zion-slate-light text-sm mb-4">
                    Version {sdk.version}
                  </div>
                  <div className="text-zion-cyan font-semibold mb-4">
                    {sdk.downloads} downloads
                  </div>
                  <div className="space-y-2">
                    <a
                      href={sdk.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-zion-blue-light/30 text-white py-2 px-4 rounded-lg hover:bg-zion-blue-light/50 transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      GitHub
                    </a>
                    {sdk.npm && (
                      <a
                        href={sdk.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-zion-cyan text-white py-2 px-4 rounded-lg hover:bg-zion-cyan-dark transition-all duration-300 text-sm font-medium"
                      >
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Developer Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Developer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Community & Support
                </h3>
                <div className="space-y-3">
                  <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Github className="w-5 h-5" />
                    <span>GitHub Organization</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  <a href="https://discord.gg/ziontechgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Globe className="w-5 h-5" />
                    <span>Discord Community</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  <a href="/support" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Shield className="w-5 h-5" />
                    <span>Developer Support</span>
                  </a>
                </div>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Additional Resources
                </h3>
                <div className="space-y-3">
                  <a href="/white-papers" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <FileText className="w-5 h-5" />
                    <span>Technical White Papers</span>
                  </a>
                  <a href="/webinars" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <BookOpen className="w-5 h-5" />
                    <span>Developer Webinars</span>
                  </a>
                  <a href="/training" className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <Code className="w-5 h-5" />
                    <span>Developer Training</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Need Help with Documentation?
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our developer support team is here to help. 
                Get in touch for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Contact Developer Support
                </Link>
                <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
