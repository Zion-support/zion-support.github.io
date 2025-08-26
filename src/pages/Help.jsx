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
  Lock,
  Settings,
  CreditCard,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
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
      icon: Zap,
      description: 'Learn the basics of using Zion Tech Group',
      articles: [
        { 
          title: 'How to create an account', 
          description: 'Step-by-step guide to setting up your Zion Tech Group account',
          url: '/help/account-creation' 
        },
        { 
          title: 'First steps after registration', 
          description: 'Essential information to get you started quickly',
          url: '/help/first-steps' 
        },
        { 
          title: 'Understanding the marketplace', 
          description: 'Learn how our AI and tech marketplace works',
          url: '/help/marketplace-guide' 
        },
        { 
          title: 'Profile setup guide', 
          description: 'Complete guide to setting up your professional profile',
          url: '/help/profile-setup' 
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: Users,
      description: 'Manage your account settings and preferences',
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
          description: 'Customize your notification settings and preferences',
          url: '/help/notifications'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: Settings,
      description: 'Learn about our technology services',
      articles: [
        { 
          title: 'AI & Machine Learning Services', 
          description: 'Understanding our AI solutions and capabilities',
          url: '/help/ai-services' 
        },
        { 
          title: 'Cybersecurity Solutions', 
          description: 'Learn about our security offerings',
          url: '/help/cybersecurity' 
        },
        { 
          title: 'Cloud Infrastructure', 
          description: 'Cloud computing and infrastructure services',
          url: '/help/cloud-services' 
        },
        { 
          title: '2029 Advanced Services', 
          description: 'Explore our cutting-edge 2029 service offerings',
          url: '/help/2029-services' 
        }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: Globe,
      description: 'Navigate our AI and tech marketplace',
      articles: [
        { 
          title: 'How to browse products', 
          description: 'Find and explore technology solutions',
          url: '/help/browse-products' 
        },
        { 
          title: 'Finding talent and services', 
          description: 'Connect with skilled professionals',
          url: '/help/find-talent' 
        },
        { 
          title: 'Making purchases', 
          description: 'Complete transactions safely and securely',
          url: '/help/making-purchases' 
        },
        { 
          title: 'Selling your solutions', 
          description: 'List and sell your technology services',
          url: '/help/selling-solutions' 
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: CreditCard,
      description: 'Payment and billing information',
      articles: [
        { 
          title: 'Payment methods', 
          description: 'Accepted payment options and methods',
          url: '/help/payment-methods' 
        },
        { 
          title: 'Billing cycles', 
          description: 'Understanding your billing schedule',
          url: '/help/billing-cycles' 
        },
        { 
          title: 'Invoices and receipts', 
          description: 'Access and manage your billing documents',
          url: '/help/invoices' 
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      description: 'Security features and privacy protection',
      articles: [
        { 
          title: 'Data protection', 
          description: 'How we protect your information',
          url: '/help/data-protection' 
        },
        { 
          title: 'Privacy settings', 
          description: 'Control your privacy and data sharing',
          url: '/help/privacy-settings' 
        },
        { 
          title: 'Security best practices', 
          description: 'Tips for keeping your account secure',
          url: '/help/security-best-practices' 
        }
      ]
    },
    {
      id: 'support',
      title: 'Getting Help',
      icon: HelpCircle,
      description: 'Additional support options',
      articles: [
        { 
          title: 'Contact support team', 
          description: 'Get help from our support specialists',
          url: '/help/contact-support' 
        },
        { 
          title: 'Live chat support', 
          description: 'Real-time assistance via chat',
          url: '/help/live-chat' 
        },
        { 
          title: 'Video tutorials', 
          description: 'Visual guides and tutorials',
          url: '/help/video-tutorials' 
        },
        { 
          title: 'Community forum', 
          description: 'Connect with other users',
          url: '/help/community' 
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-zion-cyan text-white'
                : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50'
            }`}
          >
            All Categories
          </button>
          {helpCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.articles.map((article, index) => (
                  <div key={index} className="group">
                    <Link 
                      to={article.url}
                      className="block text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                    >
                      {article.title}
                    </Link>
                    <p className="text-zion-slate-light text-sm group-hover:text-zion-slate-light/80 transition-colors">
                      {article.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light">
              Can't find what you're looking for? Contact our support team directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-zion-cyan">{contactInfo.phone}</p>
              <p className="text-zion-slate-light text-sm mt-2">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-cyan">{contactInfo.email}</p>
              <p className="text-zion-slate-light text-sm mt-2">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-cyan">Available Now</p>
              <p className="text-zion-slate-light text-sm mt-2">Instant support</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Contact Support Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-zion-slate-light">
              Explore more helpful resources and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link 
              to="/blog"
              className="p-6 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <span className="text-white font-medium">Blog & Articles</span>
            </Link>
            
            <Link 
              to="/video-tutorials"
              className="p-6 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <Video className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <span className="text-white font-medium">Video Tutorials</span>
            </Link>
            
            <Link 
              to="/documentation"
              className="p-6 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <span className="text-white font-medium">Documentation</span>
            </Link>
            
            <Link 
              to="/community"
              className="p-6 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-center hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <Users className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <span className="text-white font-medium">Community</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}