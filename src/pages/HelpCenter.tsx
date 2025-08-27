import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageSquare, Phone, Mail, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(['getting-started']);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'How to create your first account', href: '/help/create-account' },
        { title: 'Complete profile setup guide', href: '/help/profile-setup' },
        { title: 'Understanding the marketplace', href: '/help/marketplace-guide' },
        { title: 'First steps for new users', href: '/help/first-steps' }
      ]
    },
    'marketplace': {
      title: 'Marketplace',
      icon: BookOpen,
      articles: [
        { title: 'How to list products and services', href: '/help/list-products' },
        { title: 'Managing your listings', href: '/help/manage-listings' },
        { title: 'Understanding pricing and fees', href: '/help/pricing-fees' },
        { title: 'Marketplace policies and guidelines', href: '/help/marketplace-policies' }
      ]
    },
    'talent': {
      title: 'Talent & Hiring',
      icon: BookOpen,
      articles: [
        { title: 'Creating a talent profile', href: '/help/talent-profile' },
        { title: 'Finding and hiring talent', href: '/help/hire-talent' },
        { title: 'Managing projects and contracts', href: '/help/manage-projects' },
        { title: 'Payment and escrow system', href: '/help/payment-system' }
      ]
    },
    'technical': {
      title: 'Technical Support',
      icon: BookOpen,
      articles: [
        { title: 'Common technical issues', href: '/help/technical-issues' },
        { title: 'Browser compatibility', href: '/help/browser-compatibility' },
        { title: 'Mobile app troubleshooting', href: '/help/mobile-troubleshooting' },
        { title: 'API and integration support', href: '/help/api-support' }
      ]
    },
    'billing': {
      title: 'Billing & Payments',
      icon: BookOpen,
      articles: [
        { title: 'Understanding your invoice', href: '/help/invoice-guide' },
        { title: 'Payment methods and security', href: '/help/payment-methods' },
        { title: 'Refund and cancellation policy', href: '/help/refund-policy' },
        { title: 'Tax information and reporting', href: '/help/tax-information' }
      ]
    },
    'account': {
      title: 'Account & Security',
      icon: BookOpen,
      articles: [
        { title: 'Account security best practices', href: '/help/account-security' },
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        { title: 'Password reset and recovery', href: '/help/password-recovery' },
        { title: 'Privacy settings and data control', href: '/help/privacy-settings' }
      ]
    }
  };

  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's platform. Find answers to common questions, tutorials, and contact information." />
        <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-blue-light/30 rounded-xl text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-zion-blue-light/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                  <Link
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      articles: [
        { title: 'Welcome to Zion Tech Group', url: '/help/welcome' },
        { title: 'Creating Your Account', url: '/help/create-account' },
        { title: 'First Steps Guide', url: '/help/first-steps' },
        { title: 'Platform Overview', url: '/help/platform-overview' }
      ]
    },
    {
      id: 'services',
      title: 'Services & Solutions',
      icon: <FileText className="w-6 h-6" />,
      articles: [
        { title: 'Understanding Our Services', url: '/help/services-overview' },
        { title: 'Service Selection Guide', url: '/help/service-selection' },
        { title: 'Pricing Information', url: '/help/pricing' },
        { title: 'Service Customization', url: '/help/customization' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: <Users className="w-6 h-6" />,
      articles: [
        { title: 'Navigating the Marketplace', url: '/help/marketplace-guide' },
        { title: 'Finding Talent & Services', url: '/help/finding-services' },
        { title: 'Making Purchases', url: '/help/purchases' },
        { title: 'Reviews & Ratings', url: '/help/reviews' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: <FileText className="w-6 h-6" />,
      articles: [
        { title: 'Account Settings', url: '/help/account-settings' },
        { title: 'Billing & Payments', url: '/help/billing' },
        { title: 'Security & Privacy', url: '/help/security' },
        { title: 'Data Management', url: '/help/data-management' }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: <FileText className="w-6 h-6" />,
      articles: [
        { title: 'Common Issues', url: '/help/common-issues' },
        { title: 'Troubleshooting Guide', url: '/help/troubleshooting' },
        { title: 'API Documentation', url: '/help/api-docs' },
        { title: 'Integration Guides', url: '/help/integrations' }
      ]
    }
  ];

  const popularArticles = [
    'How to get started with AI services',
    'Understanding our pricing structure',
    'Finding the right talent for your project',
    'Security best practices',
    'API integration guide',
    'Troubleshooting common issues'
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Get help via email',
      action: 'support@ziontechgroup.com',
      link: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak with our team',
      action: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with support',
      action: 'Start Chat',
      link: '#'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-8">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Find answers to your questions, learn how to use our platform, and get the support you need 
              to make the most of Zion Tech Group's services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-blue rounded-full"></div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Browse Help Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find organized help content covering all aspects of our platform and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-zion-slate-dark/70 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-zion-cyan">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-zion-cyan/20"
                  >
<<<<<<< HEAD
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <a
                          key={articleIndex}
                          href={article.url}
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-zion-cyan/10"
                        >
                          {article.title}
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

      {/* Popular Articles */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Help Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get started with these frequently accessed help articles and guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-6 h-6 text-zion-cyan" />
                  <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
=======
                    View All →
                  </Link>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {article}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  Learn more about this topic and find detailed solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our support team is here to help you with any questions or issues you may have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-6">
                  <div className="text-white">{method.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-zion-slate-light mb-4">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let us know what you need help with, and we'll create the resources to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center"
              >
                Request Help Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
