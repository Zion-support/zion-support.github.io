import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'New to Zion Tech Group? Start here',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how to get started',
          path: '/help/getting-started/welcome',
          type: 'guide'
        },
        {
          title: 'Account Setup Guide',
          description: 'Step-by-step instructions for setting up your account',
          path: '/help/getting-started/account-setup',
          type: 'guide'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          path: '/help/getting-started/first-project',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: BookOpen,
      description: 'Help with AI and autonomous systems',
      articles: [
        {
          title: 'AI Autonomous Systems Guide',
          description: 'Understanding and using our AI autonomous systems',
          path: '/help/ai-services/autonomous-systems',
          type: 'guide'
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Working with quantum neural network platforms',
          path: '/help/ai-services/quantum-neural-networks',
          type: 'guide'
        },
        {
          title: 'AI Research Assistant',
          description: 'Using AI-powered research automation tools',
          path: '/help/ai-services/research-assistant',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: BookOpen,
      description: 'Security and compliance assistance',
      articles: [
        {
          title: 'SOC2 Compliance Guide',
          description: 'Understanding and implementing SOC2 compliance',
          path: '/help/cybersecurity/soc2-compliance',
          type: 'guide'
        },
        {
          title: 'Security Best Practices',
          description: 'Essential security practices for your organization',
          path: '/help/cybersecurity/security-best-practices',
          type: 'guide'
        },
        {
          title: 'Threat Detection Setup',
          description: 'Configuring threat detection and monitoring',
          path: '/help/cybersecurity/threat-detection',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: BookOpen,
      description: 'Infrastructure and cloud services help',
      articles: [
        {
          title: '5G Enterprise Solutions',
          description: 'Setting up and optimizing 5G enterprise networks',
          path: '/help/infrastructure/5g-solutions',
          type: 'guide'
        },
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          path: '/help/infrastructure/cloud-migration',
          type: 'guide'
        },
        {
          title: 'IT Asset Management',
          description: 'Managing IT assets with AI-powered tools',
          path: '/help/infrastructure/asset-management',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      icon: BookOpen,
      description: 'Billing, pricing, and support information',
      articles: [
        {
          title: 'Pricing Plans Explained',
          description: 'Understanding our pricing structure and plans',
          path: '/help/billing/pricing-plans',
          type: 'guide'
        },
        {
          title: 'Billing & Invoicing',
          description: 'Managing your billing and invoices',
          path: '/help/billing/billing-invoicing',
          type: 'guide'
        },
        {
          title: 'Support Ticket System',
          description: 'How to create and track support tickets',
          path: '/help/billing/support-tickets',
          type: 'tutorial'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up AI Autonomous Systems',
      description: 'Complete guide to configuring AI autonomous systems for your business',
      path: '/help/ai-services/autonomous-systems-setup',
      views: '2.5k'
    },
    {
      title: 'SOC2 Compliance Checklist',
      description: 'Essential checklist for achieving SOC2 compliance',
      path: '/help/cybersecurity/soc2-checklist',
      views: '1.8k'
    },
    {
      title: '5G Network Optimization',
      description: 'Best practices for optimizing 5G enterprise networks',
      path: '/help/infrastructure/5g-optimization',
      views: '1.2k'
    },
    {
      title: 'Quantum Neural Network Tutorial',
      description: 'Step-by-step tutorial for quantum neural networks',
      path: '/help/ai-services/quantum-tutorial',
      views: '950'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      path: '/support/chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      path: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      path: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive documentation',
      icon: FileText,
      action: 'View Docs',
      path: '/docs'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn how to use our services, and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get Help Fast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <channel.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <Link
                  to={channel.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  {channel.action}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article) => (
              <div key={article.title} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-cyan-400">{article.title}</h3>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                    {article.views} views
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                <Link
                  to={article.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                >
                  Read Article
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <category.icon className="w-8 h-8 text-cyan-400" />
                      <div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-6 space-y-4">
                      {category.articles.map((article) => (
                        <div key={article.title} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                          <div className="flex-shrink-0 mt-1">
                            {article.type === 'guide' && <BookOpen className="w-5 h-5 text-cyan-400" />}
                            {article.type === 'tutorial' && <Video className="w-5 h-5 text-purple-400" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-cyan-400 mb-1">{article.title}</h4>
                            <p className="text-gray-300 text-sm mb-2">{article.description}</p>
                            <Link
                              to={article.path}
                              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <HelpCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our expert support team is here to help you succeed with Zion Tech Group services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/support/chat"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Start Live Chat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
