import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Search, BookOpen, Video, FileText, Users, Zap, CheckCircle } from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Instant',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      icon: Mail,
      availability: 'Business hours',
      responseTime: '< 2 hours',
      color: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      title: 'Priority Support',
      description: 'Enterprise-level dedicated support',
      icon: Zap,
      availability: '24/7/365',
      responseTime: '< 15 minutes',
      color: 'from-orange-500 to-red-500',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', count: 124 },
    { id: 'getting-started', name: 'Getting Started', count: 28 },
    { id: 'api', name: 'API & Integration', count: 35 },
    { id: 'billing', name: 'Billing & Pricing', count: 18 },
    { id: 'technical', name: 'Technical Issues', count: 43 }
  ];

  const helpArticles = [
    {
      title: 'Getting Started with Zion Tech Group APIs',
      description: 'Complete guide to setting up your first API integration',
      category: 'getting-started',
      views: 15420,
      helpful: 94,
      featured: true
    },
    {
      title: 'API Authentication & Rate Limits',
      description: 'Understanding API keys, tokens, and usage limits',
      category: 'api',
      views: 8950,
      helpful: 88,
      featured: true
    },
    {
      title: 'Troubleshooting Common Integration Issues',
      description: 'Solutions to the most frequently encountered problems',
      category: 'technical',
      views: 6780,
      helpful: 92,
      featured: false
    },
    {
      title: 'Understanding Your Billing Dashboard',
      description: 'How to read invoices, usage metrics, and payment history',
      category: 'billing',
      views: 4320,
      helpful: 86,
      featured: false
    },
    {
      title: 'Setting Up Webhooks for Real-time Updates',
      description: 'Configure webhooks to receive instant notifications',
      category: 'api',
      views: 3890,
      helpful: 90,
      featured: false
    },
    {
      title: 'Upgrading Your Plan and Managing Limits',
      description: 'How to scale your usage and upgrade subscription plans',
      category: 'billing',
      views: 2140,
      helpful: 84,
      featured: false
    }
  ];

  const quickActions = [
    { name: 'Check System Status', icon: CheckCircle, color: 'text-green-400' },
    { name: 'View Documentation', icon: BookOpen, color: 'text-blue-400' },
    { name: 'Watch Tutorials', icon: Video, color: 'text-purple-400' },
    { name: 'Join Community', icon: Users, color: 'text-cyan-400' }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help with our AI-powered solutions. Access documentation, contact support, and find answers to common questions."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Support Center</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help you succeed. Find answers, get support, and learn how to make 
              the most of our AI-powered solutions.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="flex items-center justify-center mb-3">
                  {React.createElement(action.icon, { className: `w-8 h-8 ${action.color} group-hover:scale-110 transition-transform` })}
                </div>
                <h3 className="font-semibold text-white">{action.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  option.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}>
                  {React.createElement(option.icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <h3 className="font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="text-gray-300">{option.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="text-gray-300">{option.responseTime}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-transform">
                  {option.title === 'Live Chat' ? 'Start Chat' : 
                   option.title === 'Email Support' ? 'Send Email' :
                   option.title === 'Phone Support' ? 'Call Now' : 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Articles */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Help Articles</h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  article.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{article.title}</h3>
                  {article.featured && <CheckCircle className="w-5 h-5 text-cyan-400" />}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{article.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.views.toLocaleString()} views</span>
                  <span>{article.helpful}% helpful</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or browse all categories</p>
            </div>
          )}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-400/50 text-center">
            <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              For critical issues affecting production systems, contact our emergency hotline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +1 (302) 464-0950
              </a>
              <span className="text-gray-400">Available 24/7 for Enterprise customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
