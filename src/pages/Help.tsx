import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  FileText,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Globe,
  TrendingUp,
  Building2,
  HeartHandshake,
  Award,
  GraduationCap,
  LifeBuoy,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      description: 'Essential information to get you started with our services',
      articles: [
        {
          title: 'How to Choose the Right Service',
          description: 'A comprehensive guide to selecting the best service for your needs',
          href: '/blog/how-to-choose-service',
          readTime: '5 min read',
          popular: true
        },
        {
          title: 'First Steps After Purchase',
          description: 'What to expect and how to proceed after purchasing a service',
          href: '/blog/first-steps-after-purchase',
          readTime: '3 min read',
          popular: false
        },
        {
          title: 'Account Setup Guide',
          description: 'Complete guide to setting up your account and profile',
          href: '/blog/account-setup-guide',
          readTime: '4 min read',
          popular: false
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Detailed information about our services and how to use them',
      articles: [
        {
          title: 'AI Business Intelligence Setup',
          description: 'Complete setup guide for AI Business Intelligence services',
          href: '/services/ai-business-intelligence',
          readTime: '8 min read',
          popular: true
        },
        {
          title: 'Micro SaaS Implementation',
          description: 'Step-by-step implementation guide for Micro SaaS solutions',
          href: '/services/micro-saas',
          readTime: '10 min read',
          popular: true
        },
        {
          title: 'Digital Twin Configuration',
          description: 'How to configure and optimize Digital Twin solutions',
          href: '/services/digital-twin',
          readTime: '6 min read',
          popular: false
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      description: 'Information about pricing, billing, and payment options',
      articles: [
        {
          title: 'Understanding Our Pricing Structure',
          description: 'Detailed breakdown of our pricing models and what\'s included',
          href: '/pricing',
          readTime: '7 min read',
          popular: true
        },
        {
          title: 'Payment Methods & Security',
          description: 'Available payment methods and security measures',
          href: '/blog/payment-methods',
          readTime: '4 min read',
          popular: false
        },
        {
          title: 'Invoice & Receipt Management',
          description: 'How to access and manage your invoices and receipts',
          href: '/blog/invoice-management',
          readTime: '3 min read',
          popular: false
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      description: 'Technical documentation and troubleshooting guides',
      articles: [
        {
          title: 'API Documentation',
          description: 'Complete API reference and integration guides',
          href: '/documentation',
          readTime: '15 min read',
          popular: true
        },
        {
          title: 'Common Issues & Solutions',
          description: 'Solutions to frequently encountered technical problems',
          href: '/blog/common-issues',
          readTime: '6 min read',
          popular: true
        },
        {
          title: 'Performance Optimization',
          description: 'Tips and best practices for optimizing service performance',
          href: '/blog/performance-optimization',
          readTime: '8 min read',
          popular: false
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Choose the Right Service',
      description: 'A comprehensive guide to selecting the best service for your needs',
      href: '/blog/how-to-choose-service',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.5k'
    },
    {
      title: 'AI Business Intelligence Setup',
      description: 'Complete setup guide for AI Business Intelligence services',
      href: '/services/ai-business-intelligence',
      category: 'Services',
      readTime: '8 min read',
      views: '1.8k'
    },
    {
      title: 'Understanding Our Pricing Structure',
      description: 'Detailed breakdown of our pricing models and what\'s included',
      href: '/pricing',
      category: 'Billing',
      readTime: '7 min read',
      views: '1.6k'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      href: '/documentation',
      category: 'Technical',
      readTime: '15 min read',
      views: '1.4k'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      href: '/contact',
      responseTime: 'Instant',
      available: '24/7'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      href: 'mailto:kleber@ziontechgroup.com',
      responseTime: '2-4 hours',
      available: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Call us directly for urgent issues',
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      href: 'tel:+13024640950',
      responseTime: 'Immediate',
      available: '9 AM - 6 PM EST'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      href: '/documentation',
      responseTime: 'Instant',
      available: '24/7'
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

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get support, and learn how to make the most of our services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={channel.href}
                  className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full text-center"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.color} w-fit mx-auto mb-4`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>Available: {channel.available}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most viewed and helpful articles to get you started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={article.href}
                  className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organized help content to find answers quickly
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6 space-y-4">
                      {category.articles.map((article) => (
                        <Link
                          key={article.title}
                          to={article.href}
                          className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {article.title}
                              </h4>
                              {article.popular && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                                  <Star className="w-3 h-3" />
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400">{article.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Support Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}