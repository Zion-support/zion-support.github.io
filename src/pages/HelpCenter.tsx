import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

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

  const faqs = [
    {
      id: '1',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply create an account, browse our service catalog, and select the solutions that best fit your needs. Our team will guide you through the onboarding process.',
      tags: ['Getting Started', 'Account Setup', 'Services']
    },
    {
      id: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely through our platform.',
      tags: ['Billing', 'Payments', 'Security']
    },
    {
      id: '3',
      question: 'How quickly can you deploy a new service?',
      answer: 'Deployment times vary by service complexity. Simple services can be deployed within 24-48 hours, while complex enterprise solutions typically take 1-2 weeks. We\'ll provide a detailed timeline during consultation.',
      tags: ['Deployment', 'Timeline', 'Services']
    },
    {
      id: '4',
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes! All our services include ongoing support and maintenance. We offer 24/7 monitoring, regular updates, and dedicated support teams to ensure your solutions continue performing optimally.',
      tags: ['Support', 'Maintenance', 'Monitoring']
    },
    {
      id: '5',
      question: 'Can I customize services to fit my specific needs?',
      answer: 'Absolutely! We specialize in customizing our services to meet your unique requirements. Our team will work closely with you to understand your needs and tailor solutions accordingly.',
      tags: ['Customization', 'Tailored Solutions', 'Consultation']
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-zion-cyan">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                      <p className="text-zion-slate-light text-sm">
                        {category.articles.length} articles available
                      </p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-zion-cyan transition-transform duration-300 ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-zion-cyan/20">
                        <div className="pt-4 space-y-3">
                          {category.articles.map((article, articleIndex) => (
                            <Link
                              key={articleIndex}
                              to={article.url}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                            >
                              <span className="text-zion-slate-light group-hover:text-white transition-colors">
                                {article.title}
                              </span>
                              <ArrowRight className="h-4 w-4 text-zion-cyan opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Start with these frequently accessed help resources to get up and running quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                    {article}
                  </h3>
                </div>
                <p className="text-zion-slate-light text-sm mb-4">
                  Learn more about this topic and find detailed guidance to help you succeed.
                </p>
                <div className="flex items-center text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-zion-slate-light mb-4">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Quick answers to common questions about our services and platform.
            </p>
          </motion.div>

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
      </section>
    </div>
  );
}
