import React from 'react';
import { SEO } from '../components/SEO';
import { BookOpen, Code, Download, ExternalLink, Search, Star } from 'lucide-react';

export default function Documentation() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and basic concepts',
      items: [
        { name: 'API Overview', description: 'Introduction to our APIs', featured: true },
        { name: 'Authentication', description: 'API key setup and usage', featured: true },
        { name: 'Rate Limiting', description: 'API usage limits and best practices', featured: false },
        { name: 'Error Handling', description: 'Common errors and solutions', featured: false }
      ]
    },
    {
      title: 'AI Services',
      description: 'AI and machine learning APIs',
      items: [
        { name: 'Content Generation API', description: 'Generate AI-powered content', featured: true },
        { name: 'Business Intelligence API', description: 'Data analytics and insights', featured: true },
        { name: 'Customer Support API', description: 'Intelligent support automation', featured: true },
        { name: 'Predictive Analytics API', description: 'Forecast and predictions', featured: false }
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Infrastructure and DevOps APIs',
      items: [
        { name: 'Infrastructure API', description: 'Manage cloud resources', featured: true },
        { name: 'Deployment API', description: 'Automated deployments', featured: false },
        { name: 'Monitoring API', description: 'System monitoring and alerts', featured: false },
        { name: 'Security API', description: 'Security scanning and compliance', featured: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group APIs, guides, and technical resources."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Documentation</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to integrate with our APIs and services. Comprehensive guides, 
              examples, and reference materials.
            </p>
            
            {/* Search */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-gray-400">{section.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                      item.featured 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/50 hover:border-cyan-400' 
                        : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                          {item.name}
                          {item.featured && <Star className="w-4 h-4 text-cyan-400" />}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Code className="w-4 h-4" />
                          View Documentation
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/50">
            <h3 className="font-bold text-white mb-3">SDK Downloads</h3>
            <p className="text-gray-400 mb-4">Official SDKs for popular programming languages</p>
            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Download className="w-4 h-4" />
              Download SDKs
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/50">
            <h3 className="font-bold text-white mb-3">API Reference</h3>
            <p className="text-gray-400 mb-4">Complete API endpoint documentation</p>
            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <ExternalLink className="w-4 h-4" />
              View Reference
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-400/50">
            <h3 className="font-bold text-white mb-3">Community</h3>
            <p className="text-gray-400 mb-4">Get help from our developer community</p>
            <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <ExternalLink className="w-4 h-4" />
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
