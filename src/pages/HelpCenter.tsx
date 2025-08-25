import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  FileText, 
  Video, 
  Headphones, 
  Mail, 
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Users,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articleCount: 12
    },
    {
      id: 'ai-workflows',
      name: 'AI Workflows',
      description: 'Create and manage automated workflows',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articleCount: 18
    },
    {
      id: 'integrations',
      name: 'Integrations',
      description: 'Connect with your favorite tools and services',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      articleCount: 25
    },
    {
      id: 'billing',
      name: 'Billing & Plans',
      description: 'Manage your subscription and billing',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      articleCount: 8
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      description: 'Learn about our security measures',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      articleCount: 15
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      color: 'from-yellow-500 to-orange-500',
      articleCount: 22
    }
  ];

  const popularArticles = [
    {
      id: 'getting-started-1',
      title: 'How to Create Your First AI Workflow',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%',
      excerpt: 'Step-by-step guide to creating your first automated workflow using our AI-powered platform.'
    },
    {
      id: 'ai-workflows-1',
      title: 'Understanding AI Decision Trees',
      category: 'AI Workflows',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%',
      excerpt: 'Learn how our AI makes decisions and how to optimize your workflows for better results.'
    },
    {
      id: 'integrations-1',
      title: 'Connecting to Salesforce',
      category: 'Integrations',
      readTime: '6 min read',
      views: '1.6k',
      helpful: '92%',
      excerpt: 'Complete guide to integrating your workflows with Salesforce CRM for seamless data flow.'
    },
    {
      id: 'troubleshooting-1',
      title: 'Workflow Not Triggering? Here\'s Why',
      category: 'Troubleshooting',
      readTime: '4 min read',
      views: '1.9k',
      helpful: '96%',
      excerpt: 'Common reasons why workflows might not trigger and how to fix them quickly.'
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a secure link to reset your password. The link expires in 1 hour for security reasons.',
      category: 'account'
    },
    {
      id: 'faq-2',
      question: 'Can I export my workflow data?',
      answer: 'Yes, you can export your workflow data in multiple formats including CSV, JSON, and Excel. Go to your workflow dashboard, select the workflow, and click the export button. You can choose the date range and format for your export.',
      category: 'data'
    },
    {
      id: 'faq-3',
      question: 'How do I add team members to my account?',
      answer: 'To add team members, go to Settings > Team Management. Click "Invite Member" and enter their email address. They\'ll receive an invitation email with a secure link to join your team. You can assign different permission levels to each member.',
      category: 'team'
    },
    {
      id: 'faq-4',
      question: 'What happens if I exceed my monthly workflow limit?',
      answer: 'If you exceed your monthly workflow limit, you\'ll receive a notification. You can either upgrade your plan for more workflows or wait until the next billing cycle. Existing workflows continue to run normally.',
      category: 'billing'
    },
    {
      id: 'faq-5',
      question: 'How secure is my data?',
      answer: 'Your data is protected with enterprise-grade security including AES-256 encryption, SOC2 compliance, and regular security audits. We never share your data with third parties and all data transmission is encrypted using TLS 1.3.',
      category: 'security'
    },
    {
      id: 'faq-6',
      question: 'Can I schedule workflows to run at specific times?',
      answer: 'Yes, you can schedule workflows to run at specific times, on specific days, or based on custom intervals. Use the scheduling feature in the workflow editor to set up recurring or one-time schedules.',
      category: 'workflows'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Usually within 2 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '9 AM - 6 PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      availability: '24/7',
      responseTime: 'Varies',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const toggleFaq = (faqId: string) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedFaqs(newExpanded);
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = popularArticles.filter(article => 
    selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions, learn how to use our platform, 
              and get support when you need it most.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Browse by Category</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the help you need organized by topic and category
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 border-cyan-500 text-white'
                : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Browse Articles
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Popular Help Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and helpful articles from our knowledge base
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400 font-medium">{article.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {article.views}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {article.helpful} found this helpful
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Quick answers to the most common questions
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                {expandedFaqs.has(faq.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedFaqs.has(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Support Channels */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get help when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="font-medium">Availability:</span> {channel.availability}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium">Response:</span> {channel.responseTime}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200">
                    Get Help
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore more ways to learn and get the most out of our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
            <p className="text-gray-400 mb-6">Step-by-step video guides for all major features</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Watch Videos
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">API Documentation</h3>
            <p className="text-gray-400 mb-6">Complete API reference and integration guides</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              View Docs
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
            <p className="text-gray-400 mb-6">Connect with other users and share solutions</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Join Community
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help 
            you get the most out of our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
              Contact Support
              <MessageCircle className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// CreditCard icon component since it's not in lucide-react
function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
