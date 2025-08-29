import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LifeBuoy, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Search,
  HelpCircle,
  FileText,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Globe,
  Zap,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  TrendingUp,
  Building2,
  HeartHandshake,
  Award,
  GraduationCap,
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
  AlertCircle,
  Info,
  Lightbulb
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      description: 'Get help with technical issues and implementation',
      articles: [
        {
          title: 'API Integration Guide',
          description: 'Step-by-step guide to integrate our APIs into your applications',
          href: '/support/api-integration-guide',
          readTime: '8 min read',
          popular: true
        },
        {
          title: 'Common Error Solutions',
          description: 'Solutions to frequently encountered technical problems',
          href: '/support/common-error-solutions',
          readTime: '5 min read',
          popular: true
        },
        {
          title: 'Performance Optimization',
          description: 'Tips and best practices for optimizing service performance',
          href: '/support/performance-optimization',
          readTime: '6 min read',
          popular: false
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      description: 'Help with billing, payments, and account management',
      articles: [
        {
          title: 'Payment Methods',
          description: 'Available payment options and security measures',
          href: '/support/payment-methods',
          readTime: '3 min read',
          popular: false
        },
        {
          title: 'Invoice Management',
          description: 'How to access and manage your invoices and receipts',
          href: '/support/invoice-management',
          readTime: '4 min read',
          popular: false
        },
        {
          title: 'Account Settings',
          description: 'Manage your account preferences and settings',
          href: '/support/account-settings',
          readTime: '5 min read',
          popular: false
        }
      ]
    },
    {
      id: 'services',
      title: 'Service Support',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Support for specific services and features',
      articles: [
        {
          title: 'AI Service Setup',
          description: 'Complete setup guide for AI-powered services',
          href: '/support/ai-service-setup',
          readTime: '10 min read',
          popular: true
        },
        {
          title: 'Micro SaaS Configuration',
          description: 'Configure and customize your Micro SaaS solutions',
          href: '/support/micro-saas-configuration',
          readTime: '7 min read',
          popular: true
        },
        {
          title: 'Service Updates',
          description: 'Latest updates and new features for our services',
          href: '/support/service-updates',
          readTime: '4 min read',
          popular: false
        }
      ]
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
      available: '24/7',
      priority: 'High'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      href: 'mailto:kleber@ziontechgroup.com',
      responseTime: '2-4 hours',
      available: '24/7',
      priority: 'Medium'
    },
    {
      title: 'Phone Support',
      description: 'Call us directly for urgent issues',
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      href: 'tel:+13024640950',
      responseTime: 'Immediate',
      available: '9 AM - 6 PM EST',
      priority: 'High'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      href: '/documentation',
      responseTime: 'Instant',
      available: '24/7',
      priority: 'Low'
    }
  ];

  const quickSolutions = [
    {
      title: 'Service Not Working',
      description: 'Troubleshoot common service issues',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-500',
      href: '/support/service-troubleshooting',
      steps: ['Check connection', 'Verify credentials', 'Restart service']
    },
    {
      title: 'Can\'t Access Account',
      description: 'Reset password and regain access',
      icon: Key,
      color: 'from-yellow-500 to-orange-500',
      href: '/support/account-access',
      steps: ['Reset password', 'Check email', 'Contact support']
    },
    {
      title: 'Billing Question',
      description: 'Understand charges and payment options',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      href: '/support/billing-help',
      steps: ['Review invoice', 'Check plan', 'Update payment']
    },
    {
      title: 'Need Training',
      description: 'Get help learning our services',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      href: '/training',
      steps: ['Browse courses', 'Watch tutorials', 'Join webinar']
    }
  ];

  const filteredCategories = supportCategories.filter(category =>
    selectedCategory === 'all' || category.id === selectedCategory
  );

  const allArticles = filteredCategories.flatMap(category => category.articles);

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, solutions, or topics..."
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
                to="/help"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Solutions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Common issues and their solutions to get you back on track quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={solution.href}
                  className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color} w-fit mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2">
                    {solution.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
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
                  
                  <div className="space-y-2 text-xs text-gray-500 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>Available: {channel.available}</span>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    channel.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                    channel.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    <span>{channel.priority} Priority</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Articles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions and learn how to use our services effectively
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {supportCategories.map(category => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
          </div>

          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles
                    .filter(article =>
                      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      article.description.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((article) => (
                    <Link
                      key={article.title}
                      to={article.href}
                      className="block p-6 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-700/50 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="px-2 py-1 bg-slate-600/50 text-cyan-400 text-xs rounded-full">
                          {category.title}
                        </span>
                        {article.popular && (
                          <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with our support team through multiple channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Phone Support</h3>
              <p className="text-gray-400 mb-4">Call us directly for urgent issues</p>
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                +1 302 464 0950
              </a>
              <p className="text-sm text-gray-500 mt-2">9 AM - 6 PM EST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
              <p className="text-gray-400 mb-4">Send us a detailed message</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 2-4 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Office Location</h3>
              <p className="text-gray-400 mb-4">Visit us in person</p>
              <p className="text-cyan-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-sm text-gray-500 mt-2">By appointment only</p>
            </motion.div>
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
