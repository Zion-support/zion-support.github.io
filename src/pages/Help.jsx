import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle, 
  FileText, 
  Video,
  Users,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Learn the basics of using Zion Tech Group',
      articles: [
        { title: 'How to create an account', url: '/help/account-creation' },
        { title: 'First steps after registration', url: '/help/first-steps' },
        { title: 'Understanding the marketplace', url: '/help/marketplace-guide' },
        { title: 'Profile setup guide', url: '/help/profile-setup' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: Globe,
      description: 'Everything about buying and selling on our platform',
      articles: [
        { title: 'How to list a service', url: '/help/list-service' },
        { title: 'Finding the right talent', url: '/help/find-talent' },
        { title: 'Payment and billing', url: '/help/payments' },
        { title: 'Dispute resolution', url: '/help/disputes' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Brain,
      description: 'Information about our AI and tech services',
      articles: [
        { title: 'AI Services overview', url: '/help/ai-services' },
        { title: 'Cybersecurity solutions', url: '/help/cybersecurity' },
        { title: 'Cloud infrastructure', url: '/help/cloud-services' },
        { title: 'Quantum computing', url: '/help/quantum-computing' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Security',
      icon: Shield,
      description: 'Manage your account and security settings',
      articles: [
        { title: 'Password management', url: '/help/password-management' },
        { title: 'Two-factor authentication', url: '/help/2fa' },
        { title: 'Privacy settings', url: '/help/privacy-settings' },
        { title: 'Account verification', url: '/help/verification' }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Cloud,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'Browser compatibility', url: '/help/browser-support' },
        { title: 'API documentation', url: '/help/api-docs' },
        { title: 'Performance optimization', url: '/help/performance' },
        { title: 'Error codes explained', url: '/help/error-codes' }
      ]
    }
  ];

  const popularArticles = [
    'How to get started with AI services',
    'Understanding our pricing structure',
    'Best practices for service listings',
    'Security and privacy measures',
    'Integration with existing systems'
  ];

  const filteredCategories = helpCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to common questions, learn how to use our platform, and get the support you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-zion-cyan text-white'
                : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50'
            }`}
          >
            All Categories
          </button>
          {helpCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-white'
                  : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCategories.map(category => (
            <div key={category.id} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article, index) => (
                  <li key={index}>
                    <Link 
                      to={article.url}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-zion-cyan" />
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={`/help/article-${index + 1}`}
                className="flex items-center p-4 bg-zinc-700/30 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-zion-cyan/30 transition-colors">
                  <HelpCircle className="w-4 h-4 text-zion-cyan" />
                </div>
                <span className="text-white group-hover:text-zion-cyan transition-colors">{article}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-zion-blue rounded-lg font-medium hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <a
              href="mailto:support@ziontechgroup.com"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
            <p className="text-zion-slate-light">Watch step-by-step guides and tutorials</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
            <p className="text-zion-slate-light">Connect with other users and experts</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
            <p className="text-zion-slate-light">Comprehensive technical documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}