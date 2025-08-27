import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone,
  Mail,
  Video,
  FileText,
  Users,
  Settings,
  CreditCard,
  Shield,
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (category) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'How to create your first account',
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/account-creation'
        },
        {
          title: 'Understanding the marketplace',
          description: 'Learn how our AI and tech marketplace works',
          url: '/help/marketplace-guide'
        },
        {
          title: 'First steps for new users',
          description: 'Essential information to get you started quickly',
          url: '/help/first-steps'
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: Users,
      articles: [
        {
          title: 'Updating your profile information',
          description: 'How to keep your profile current and accurate',
          url: '/help/profile-updates'
        },
        {
          title: 'Security settings and two-factor authentication',
          description: 'Protect your account with enhanced security features',
          url: '/help/security-settings'
        },
        {
          title: 'Managing notifications and preferences',
          description: 'Customize how and when you receive updates',
          url: '/help/notifications'
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Features',
      icon: Globe,
      articles: [
        {
          title: 'How to list your services',
          description: 'Create compelling service listings that attract clients',
          url: '/help/service-listings'
        },
        {
          title: 'Finding and hiring talent',
          description: 'Discover and connect with skilled professionals',
          url: '/help/hiring-talent'
        },
        {
          title: 'Payment and billing explained',
          description: 'Understanding our payment system and fees',
          url: '/help/payments'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Technology Services',
      icon: Settings,
      articles: [
        {
          title: 'Available AI solutions',
          description: 'Overview of our artificial intelligence services',
          url: '/help/ai-solutions'
        },
        {
          title: 'Cybersecurity services guide',
          description: 'Protect your business with our security solutions',
          url: '/help/cybersecurity'
        },
        {
          title: 'Cloud and infrastructure services',
          description: 'Scalable cloud solutions for your business needs',
          url: '/help/cloud-services'
        }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      icon: CreditCard,
      articles: [
        {
          title: 'Understanding your invoice',
          description: 'Break down of charges and payment terms',
          url: '/help/invoice-explanation'
        },
        {
          title: 'Payment methods and options',
          description: 'Accepted payment methods and processing times',
          url: '/help/payment-methods'
        },
        {
          title: 'Refund and cancellation policies',
          description: 'Our policies for refunds and service cancellations',
          url: '/help/refund-policy'
        }
      ]
    },
    {
      id: 'security-privacy',
      title: 'Security & Privacy',
      icon: Shield,
      articles: [
        {
          title: 'Data protection measures',
          description: 'How we protect your information and privacy',
          url: '/help/data-protection'
        },
        {
          title: 'Privacy settings and controls',
          description: 'Manage your privacy preferences and data sharing',
          url: '/help/privacy-controls'
        },
        {
          title: 'Reporting security issues',
          description: 'How to report security concerns or vulnerabilities',
          url: '/help/security-reporting'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to get started with AI services',
      description: 'Quick guide to implementing AI solutions for your business',
      category: 'AI & Technology Services',
      readTime: '5 min read'
    },
    {
      title: 'Marketplace best practices',
      description: 'Tips for success in our technology marketplace',
      category: 'Marketplace Features',
      readTime: '8 min read'
    },
    {
      title: 'Account security essentials',
      description: 'Protect your account with these security best practices',
      category: 'Security & Privacy',
      readTime: '6 min read'
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-zion-slate-light">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{article.description}</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse Help Topics
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-cyan/10 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-6 h-6 text-zion-cyan" />
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  {openCategories.includes(category.id) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {openCategories.includes(category.id) && (
                  <div className="px-6 pb-4 border-t border-zion-cyan/20">
                    <div className="space-y-3 pt-4">
                      {category.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="bg-zion-blue-dark/30 p-4 rounded-lg hover:bg-zion-cyan/10 transition-colors">
                          <h4 className="text-white font-medium mb-2">{article.title}</h4>
                          <p className="text-zion-slate-light text-sm mb-3">{article.description}</p>
                          <Link 
                            to={article.url}
                            className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {filteredCategories.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No help articles found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search terms or contact our support team directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden">
              <div className="aspect-video bg-zion-blue-dark/30 flex items-center justify-center">
                <Video className="w-16 h-16 text-zion-cyan" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Getting Started Guide</h3>
                <p className="text-zion-slate-light text-sm mb-4">Learn the basics of using Zion Tech Group in this comprehensive tutorial.</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                  Watch Video →
                </button>
              </div>
            </div>
            
            <div className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden">
              <div className="aspect-video bg-zion-blue-dark/30 flex items-center justify-center">
                <Video className="w-16 h-16 text-zion-cyan" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Marketplace Mastery</h3>
                <p className="text-zion-slate-light text-sm mb-4">Master the art of listing services and finding opportunities.</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                  Watch Video →
                </button>
              </div>
            </div>
            
            <div className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden">
              <div className="aspect-video bg-zion-blue-dark/30 flex items-center justify-center">
                <Video className="w-16 h-16 text-zion-cyan" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">AI Services Overview</h3>
                <p className="text-zion-slate-light text-sm mb-4">Discover how to leverage our AI and technology services.</p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                  Watch Video →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our support team is here to help you. Contact us through any of the channels below and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Call us directly for immediate assistance
              </p>
              <a 
                href="tel:+13024640950"
                className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Send us a detailed message
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-4 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan-light transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}