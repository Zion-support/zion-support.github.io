import React from 'react';
import { SEO } from '../components/SEO';

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-24">
      <SEO title="Help Center - Zion Tech Group" description="Support resources and FAQs for Zion Tech Group." />
      <div className="text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-lg text-gray-300">Find answers to common questions and resources to get help.</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  FileText,
  HelpCircle,
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Your first steps with our platform and services',
          href: '/help/getting-started/welcome',
          readTime: '3 min read'
        },
        {
          title: 'Setting Up Your Account',
          description: 'Complete guide to account creation and configuration',
          href: '/help/getting-started/account-setup',
          readTime: '5 min read'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          href: '/help/getting-started/first-project',
          readTime: '7 min read'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Everything you need to know about our AI solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'AI Model Training Guide',
          description: 'Step-by-step guide to training custom AI models',
          href: '/help/ai-services/model-training',
          readTime: '10 min read'
        },
        {
          title: 'AI Integration Best Practices',
          description: 'Best practices for integrating AI into your workflows',
          href: '/help/ai-services/integration',
          readTime: '8 min read'
        },
        {
          title: 'AI Performance Optimization',
          description: 'Tips for optimizing AI model performance',
          href: '/help/ai-services/optimization',
          readTime: '6 min read'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Cloud setup, management, and optimization guides',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Complete guide to migrating to the cloud',
          href: '/help/cloud/migration',
          readTime: '15 min read'
        },
        {
          title: 'DevOps Pipeline Setup',
          description: 'Setting up CI/CD pipelines and automation',
          href: '/help/cloud/devops',
          readTime: '12 min read'
        },
        {
          title: 'Cost Optimization Strategies',
          description: 'Reduce cloud costs while maintaining performance',
          href: '/help/cloud/cost-optimization',
          readTime: '8 min read'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guidance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      articles: [
        {
          title: 'Security Best Practices',
          description: 'Essential security measures for your systems',
          href: '/help/security/best-practices',
          readTime: '10 min read'
        },
        {
          title: 'Compliance Frameworks',
          description: 'Understanding SOC2, ISO, and other standards',
          href: '/help/security/compliance',
          readTime: '12 min read'
        },
        {
          title: 'Incident Response Guide',
          description: 'What to do when security incidents occur',
          href: '/help/security/incident-response',
          readTime: '8 min read'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      color: 'from-orange-500 to-red-500',
      articles: [
        {
          title: 'Common Error Messages',
          description: 'Understanding and resolving common errors',
          href: '/help/troubleshooting/errors',
          readTime: '6 min read'
        },
        {
          title: 'Performance Issues',
          description: 'Diagnosing and fixing performance problems',
          href: '/help/troubleshooting/performance',
          readTime: '8 min read'
        },
        {
          title: 'Integration Problems',
          description: 'Solving integration and connectivity issues',
          href: '/help/troubleshooting/integration',
          readTime: '7 min read'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running in 10 minutes',
      href: '/help/quick-start',
      category: 'Getting Started',
      readTime: '10 min read'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      href: '/help/api-docs',
      category: 'Technical',
      readTime: '15 min read'
    },
    {
      title: 'Billing & Pricing FAQ',
      description: 'Answers to common billing questions',
      href: '/help/billing-faq',
      category: 'Billing',
      readTime: '5 min read'
    },
    {
      title: 'Security Checklist',
      description: 'Essential security measures checklist',
      href: '/help/security-checklist',
      category: 'Security',
      readTime: '8 min read'
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      href: '#',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      href: 'tel:+13024640950',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      href: 'mailto:support@ziontechgroup.com',
      available: true
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      action: 'Watch Videos',
      href: '/help/videos',
      available: true
    }
  ];

  const filteredCategories = helpCategories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    if (searchQuery) {
      return category.articles.some(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help with Zion Tech Group's services. Find documentation, tutorials, and support options."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, learn how to use our services, and get the support 
              you need to succeed with Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-400 text-white border-cyan-400'
                  : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-white border-cyan-400'
                    : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-300">Most frequently accessed help content</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={article.href}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 mt-4">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mr-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-xl text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.articles.map((article, articleIndex) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (articleIndex * 0.05) }}
                    className="group"
                  >
                    <Link to={article.href}>
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Need More Help?</h2>
            <p className="text-xl text-gray-300">
              Our support team is here to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl mb-4">
                    <option.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <a
                    href={option.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      option.available
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 hover:scale-105'
                        : 'bg-slate-700/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {option.action}
                    {option.href.startsWith('http') && <ExternalLink className="w-4 h-4 ml-2" />}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert support team is ready to help 
              you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}