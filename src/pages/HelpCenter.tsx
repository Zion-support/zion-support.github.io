import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
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

<<<<<<< HEAD
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
=======
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  articleCount: number;
  path: string;
}

interface SupportOption {
  title: string;
  description: string;
  icon: any;
  color: string;
  action: string;
  path: string;
}

const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of using Zion Tech Group services',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    articleCount: 12,
    path: '/help/getting-started'
  },
  {
    id: 'services',
    title: 'Services Guide',
    description: 'Detailed information about our technology services',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    articleCount: 25,
    path: '/help/services'
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'How to use our marketplace for talent and equipment',
    icon: Building,
    color: 'from-green-500 to-teal-500',
    articleCount: 18,
    path: '/help/marketplace'
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    description: 'Payment methods, invoices, and billing questions',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
    articleCount: 8,
    path: '/help/billing'
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Information about data protection and security measures',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    articleCount: 15,
    path: '/help/security'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: Lightbulb,
    color: 'from-indigo-500 to-purple-500',
    articleCount: 22,
    path: '/help/troubleshooting'
  }
];

const supportOptions: SupportOption[] = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600',
    action: 'Start Chat',
    path: '/chat'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    color: 'from-blue-500 to-cyan-600',
    action: 'Call Now',
    path: 'tel:+13024640950'
  },
  {
    title: 'Email Support',
    description: 'Send detailed inquiries and get comprehensive responses',
    icon: Mail,
    color: 'from-purple-500 to-pink-600',
    action: 'Send Email',
    path: 'mailto:support@ziontechgroup.com'
  },
  {
    title: 'Video Call',
    description: 'Schedule a screen sharing session with our team',
    icon: Video,
    color: 'from-orange-500 to-red-600',
    action: 'Schedule Call',
    path: '/support/video-call'
  }
];

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team through any of our support channels, and we\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.',
    category: 'getting-started',
    tags: ['onboarding', 'consultation', 'setup']
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our encrypted payment system.',
    category: 'billing',
    tags: ['payments', 'billing', 'security']
  },
  {
    id: '3',
    question: 'How quickly can you deploy AI services?',
    answer: 'Deployment time varies based on complexity, but our standard AI services can be deployed within 2-4 weeks. Custom solutions may take 6-12 weeks depending on requirements.',
    category: 'services',
    tags: ['ai', 'deployment', 'timeline']
  },
  {
    id: '4',
    question: 'Do you provide 24/7 support?',
    answer: 'Yes! We offer 24/7 support for all our services. Our team is available around the clock to ensure your systems run smoothly and any issues are resolved quickly.',
    category: 'support',
    tags: ['support', '24-7', 'availability']
  },
  {
    id: '5',
    question: 'What security measures do you have in place?',
    answer: 'We implement enterprise-grade security including SOC2 compliance, end-to-end encryption, regular security audits, and follow industry best practices for data protection.',
    category: 'security',
    tags: ['security', 'compliance', 'encryption']
  },
  {
    id: '6',
    question: 'Can you work with existing IT infrastructure?',
    answer: 'Absolutely! We specialize in integrating with existing systems and can work with your current IT infrastructure to enhance and optimize it without disrupting operations.',
    category: 'services',
    tags: ['integration', 'infrastructure', 'compatibility']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is handled by the filter
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-gradient-x"
              variants={itemVariants}
            >
              How Can We Help?
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Find answers to common questions, explore our knowledge base, and get the support you need to succeed with Zion Tech Group.
            </motion.p>

            {/* Search Bar */}
            <motion.form 
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </motion.form>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-center"
              variants={itemVariants}
            >
              <div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-slate-light">Help Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Browse Help Topics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive help categories to find the information you need quickly and easily.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="p-6 rounded-2xl bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-cyan">{category.articleCount} articles</span>
                  <ChevronRight className="h-5 w-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-blue bg-clip-text text-transparent">
              Get Support
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Multiple ways to get the help you need. Choose the option that works best for you.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="p-6 rounded-2xl bg-zion-slate-dark/30 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{option.description}</p>
                <a
                  href={option.path}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 font-medium group-hover:scale-105"
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-blue to-zion-cyan bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Quick answers to the most common questions about our services and platform.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-zion-cyan transition-transform duration-300 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-zion-slate-light leading-relaxed mb-4">{faq.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredFAQs.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <HelpCircle className="h-16 w-16 text-zion-cyan/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or browse our help categories above.
              </p>
              <button
                onClick={() => setShowContactForm(true)}
                className="btn-primary group"
              >
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary group">
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                Schedule a Call
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
      </section>
    </div>
  );
}
