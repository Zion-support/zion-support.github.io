import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Users, Globe, Settings, CreditCard, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
          title: 'Data protection and privacy',
          description: 'How we protect your data and maintain privacy',
          url: '/help/data-protection'
        },
        {
          title: 'Security best practices',
          description: 'Tips to keep your account and data secure',
          url: '/help/security-best-practices'
        },
        {
          title: 'Compliance and certifications',
          description: 'Our security certifications and compliance standards',
          url: '/help/compliance'
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const popularArticles = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick start guide for new AI service users',
      url: '/help/ai-getting-started',
      views: '2.5k'
    },
    {
      title: 'Understanding Pricing Plans',
      description: 'Complete guide to our pricing structure',
      url: '/help/pricing-guide',
      views: '1.8k'
    },
    {
      title: 'API Integration Guide',
      description: 'How to integrate our services with your applications',
      url: '/help/api-integration',
      views: '1.2k'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
            >
              Help Center
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Find answers to your questions and learn how to make the most of our AI and technology services
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Popular Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.views} views</span>
                  <a
                    href={article.url}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Help Categories
          </motion.h2>
          
          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.articles.length} articles</p>
                    </div>
                  </div>
                  {openCategories.includes(category.id) ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {openCategories.includes(category.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700 p-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.articles.map((article) => (
                        <a
                          key={article.title}
                          href={article.url}
                          className="block p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                        >
                          <h4 className="font-semibold text-white mb-2">{article.title}</h4>
                          <p className="text-gray-300 text-sm">{article.description}</p>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Still Need Help?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Can't find what you're looking for? Our support team is here to help
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;
