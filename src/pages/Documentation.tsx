import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BookOpen, Search, FileText, Code, Database, Cloud, Shield, Zap, Users, Download, ExternalLink } from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: FileText, count: 156 },
    { id: 'api', name: 'API Reference', icon: Code, count: 42 },
    { id: 'guides', name: 'User Guides', icon: BookOpen, count: 38 },
    { id: 'tutorials', name: 'Tutorials', icon: Users, count: 25 },
    { id: 'deployment', name: 'Deployment', icon: Cloud, count: 18 },
    { id: 'security', name: 'Security', icon: Shield, count: 15 },
    { id: 'performance', name: 'Performance', icon: Zap, count: 12 },
    { id: 'database', name: 'Database', icon: Database, count: 6 }
  ];

  const documentationItems = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Platform',
      category: 'guides',
      description: 'Complete beginner guide to set up and start using our AI-powered platform',
      difficulty: 'Beginner',
      timeToRead: '15 min',
      lastUpdated: '2024-01-15',
      downloads: 1247,
      rating: 4.8
    },
    {
      id: 2,
      title: 'API Authentication & Authorization',
      category: 'api',
      description: 'Learn how to authenticate and authorize API requests with JWT tokens',
      difficulty: 'Intermediate',
      timeToRead: '20 min',
      lastUpdated: '2024-01-10',
      downloads: 892,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Building Your First AI Model',
      category: 'tutorials',
      description: 'Step-by-step tutorial to create and deploy your first machine learning model',
      difficulty: 'Intermediate',
      timeToRead: '45 min',
      lastUpdated: '2024-01-08',
      downloads: 567,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Deployment Best Practices',
      category: 'deployment',
      description: 'Industry best practices for deploying AI models in production environments',
      difficulty: 'Advanced',
      timeToRead: '30 min',
      lastUpdated: '2024-01-05',
      downloads: 423,
      rating: 4.7
    },
    {
      id: 5,
      title: 'Security Implementation Guide',
      category: 'security',
      description: 'Comprehensive security measures for protecting your AI applications',
      difficulty: 'Advanced',
      timeToRead: '40 min',
      lastUpdated: '2024-01-03',
      downloads: 345,
      rating: 4.8
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      category: 'performance',
      description: 'Advanced techniques to optimize AI model performance and reduce latency',
      difficulty: 'Advanced',
      timeToRead: '35 min',
      lastUpdated: '2024-01-01',
      downloads: 298,
      rating: 4.6
    }
  ];

  const filteredItems = documentationItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, user guides, and tutorials for our AI-powered platform."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Documentation Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale with our AI-powered platform. 
              From quick start guides to advanced API references.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            );
          })}
        </div>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {item.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">{item.timeToRead}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-xs">★</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Updated {item.lastUpdated}</span>
                <span>{item.downloads.toLocaleString()} downloads</span>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Read Now
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need More Help?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              <Users className="w-5 h-5" />
              Join Developer Community
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              <ExternalLink className="w-5 h-5" />
              API Reference
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              <BookOpen className="w-5 h-5" />
              Video Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
