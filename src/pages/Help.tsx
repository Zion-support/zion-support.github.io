import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  Video,
  Download,
  Star,
  CheckCircle
} from 'lucide-react';

const helpCategories = [
  {
    name: 'Getting Started',
    icon: Rocket,
    color: 'from-blue-400 to-cyan-500',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Learn the basics of our platform and services',
        href: '/help/getting-started',
        type: 'Guide',
        readTime: '5 min read'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step account setup and configuration',
        href: '/help/account-setup',
        type: 'Tutorial',
        readTime: '8 min read'
      },
      {
        title: 'First Project Setup',
        description: 'Create your first project with our platform',
        href: '/help/first-project',
        type: 'Tutorial',
        readTime: '12 min read'
      }
    ]
  },
  {
    name: 'AI Services',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    articles: [
      {
        title: 'AI Business Intelligence Setup',
        description: 'Configure and use AI-powered analytics',
        href: '/help/ai-bi-setup',
        type: 'Guide',
        readTime: '15 min read'
      },
      {
        title: 'AI Sales Copilot Configuration',
        description: 'Set up automated sales assistance',
        href: '/help/ai-sales-setup',
        type: 'Tutorial',
        readTime: '10 min read'
      },
      {
        title: 'LLM Content Studio Guide',
        description: 'Create AI-generated content for your brand',
        href: '/help/llm-content-guide',
        type: 'Guide',
        readTime: '20 min read'
      }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-green-400 to-emerald-500',
    articles: [
      {
        title: 'Cloud Migration Guide',
        description: 'Migrate your infrastructure to the cloud',
        href: '/help/cloud-migration',
        type: 'Guide',
        readTime: '25 min read'
      },
      {
        title: 'DevOps Pipeline Setup',
        description: 'Configure CI/CD pipelines for your projects',
        href: '/help/devops-pipeline',
        type: 'Tutorial',
        readTime: '18 min read'
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Optimize your cloud spending with FinOps',
        href: '/help/cloud-optimization',
        type: 'Guide',
        readTime: '12 min read'
      }
    ]
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    articles: [
      {
        title: 'Security Best Practices',
        description: 'Implement enterprise-grade security measures',
        href: '/help/security-practices',
        type: 'Guide',
        readTime: '15 min read'
      },
      {
        title: 'Compliance Setup Guide',
        description: 'Configure compliance monitoring and reporting',
        href: '/help/compliance-setup',
        type: 'Guide',
        readTime: '20 min read'
      },
      {
        title: 'Zero Trust Implementation',
        description: 'Deploy zero trust security architecture',
        href: '/help/zero-trust',
        type: 'Tutorial',
        readTime: '30 min read'
      }
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with Zion Tech Group services?',
    answer: 'Getting started is easy! Simply contact our team for a free consultation, where we\'ll assess your needs and create a customized implementation plan. We\'ll guide you through every step of the process.'
  },
  {
    question: 'What support options are available?',
    answer: 'We offer 24/7 technical support, dedicated account management, comprehensive documentation, video tutorials, and regular training sessions. Our support team is always ready to help you succeed.'
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies depending on the service and complexity. Simple solutions can be deployed in days, while complex enterprise implementations may take 4-8 weeks. We\'ll provide a detailed timeline during planning.'
  },
  {
    question: 'What security measures do you have in place?',
    answer: 'We implement enterprise-grade security including ISO 27001 certification, SOC 2 Type II compliance, end-to-end encryption, regular security audits, and 24/7 threat monitoring to protect your data and systems.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely! We specialize in seamless integration with existing enterprise systems. Our team will assess your current infrastructure and create integration solutions that work with your existing tools and workflows.'
  },
  {
    question: 'What happens after implementation?',
    answer: 'Post-implementation, we provide ongoing support, monitoring, optimization, and regular updates. We\'ll work with you to ensure continued success and help you scale as your business grows.'
  }
];

const supportChannels = [
  {
    name: '24/7 Technical Support',
    description: 'Round-the-clock technical assistance',
    icon: Phone,
    color: 'from-green-400 to-emerald-500',
    contact: '+1 302 464 0950',
    response: '< 15 minutes'
  },
  {
    name: 'Email Support',
    description: 'Detailed technical inquiries and documentation',
    icon: Mail,
    color: 'from-blue-400 to-cyan-500',
    contact: 'support@ziontechgroup.com',
    response: '< 4 hours'
  },
  {
    name: 'Live Chat',
    description: 'Real-time assistance during business hours',
    icon: MessageCircle,
    color: 'from-purple-400 to-pink-500',
    contact: 'Available on website',
    response: '< 2 minutes'
  },
  {
    name: 'Dedicated Account Manager',
    description: 'Personalized support for enterprise clients',
    icon: Users,
    color: 'from-orange-400 to-red-500',
    contact: 'Assigned upon contract',
    response: '< 1 hour'
  }
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help with Zion Tech Group services. Find documentation, tutorials, FAQs, and contact our support team for assistance."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Find answers, tutorials, and support for all Zion Tech Group services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400 font-medium">{channel.contact}</div>
                  <div className="text-slate-400">Response: {channel.response}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Articles & Tutorials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive guides and tutorials organized by category
            </p>
          </motion.div>

          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + articleIndex * 0.05 }}
                      className="group"
                    >
                      <Link
                        to={article.href}
                        className="block bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 h-full"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            article.type === 'Guide' ? 'bg-blue-400/20 text-blue-400' :
                            article.type === 'Tutorial' ? 'bg-green-400/20 text-green-400' :
                            'bg-purple-400/20 text-purple-400'
                          }`}>
                            {article.type}
                          </span>
                          <span className="text-xs text-slate-400">{article.readTime}</span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {article.title}
                        </h4>
                        
                        <p className="text-slate-300 text-sm mb-4">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Read Article</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              More ways to learn and get the most out of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Documentation',
                description: 'Comprehensive technical documentation and API references',
                icon: FileText,
                color: 'from-blue-400 to-cyan-500',
                href: '/docs',
                features: ['API Reference', 'Integration Guides', 'Best Practices', 'Code Examples']
              },
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for all major features',
                icon: Video,
                color: 'from-purple-400 to-pink-500',
                href: '/tutorials',
                features: ['Getting Started', 'Advanced Features', 'Troubleshooting', 'Best Practices']
              },
              {
                title: 'Training Programs',
                description: 'Structured learning paths and certification programs',
                icon: Star,
                color: 'from-yellow-400 to-orange-500',
                href: '/training',
                features: ['Online Courses', 'Live Workshops', 'Certification', 'Custom Training']
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {resource.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="font-medium">Explore Resources</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our support team is here to help you succeed
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Support
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}