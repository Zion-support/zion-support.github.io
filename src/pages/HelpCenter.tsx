import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search,
  BookOpen,
  Video,
  Download,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  ShoppingCart,
  HelpCircle,
  FileText,
  CheckCircle,
  ExternalLink,
  Globe,
  Target,
  BarChart3,
  Cpu,
  Lock,
  Heart,
  Atom,
  Network,
  Eye,
  Leaf,
  Satellite,
  Database,
  Server,
  Smartphone,
  Gauge,
  DollarSign,
  Calendar,
  Truck,
  Rocket,
  Code
} from 'lucide-react';

interface HelpSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  items: Array<{
    title: string;
    description: string;
    link: string;
    external?: boolean;
    featured?: boolean;
  }>;
}

const helpSections: HelpSection[] = [
  {
    title: 'Getting Started',
    icon: <Rocket className="w-8 h-8" />,
    description: 'Essential guides to get you up and running quickly',
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'Quick Start Guide',
        description: 'Step-by-step guide to get started with our services',
        link: '/docs/quick-start',
        featured: true
      },
      {
        title: 'Account Setup',
        description: 'How to create and configure your account',
        link: '/docs/account-setup'
      },
      {
        title: 'First Project',
        description: 'Create your first project in minutes',
        link: '/docs/first-project'
      },
      {
        title: 'Best Practices',
        description: 'Recommended practices for optimal results',
        link: '/docs/best-practices'
      }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    description: 'Comprehensive guides for AI and ML services',
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'AI Workflow Orchestrator',
        description: 'Complete guide to setting up AI workflows',
        link: '/docs/ai-workflow-orchestrator',
        featured: true
      },
      {
        title: 'AI Compliance Assistant',
        description: 'Setting up compliance automation',
        link: '/docs/ai-compliance-assistant'
      },
      {
        title: 'AI Content Creation',
        description: 'Using AI for content generation',
        link: '/docs/ai-content-creation'
      },
      {
        title: 'AI Model Training',
        description: 'Training custom AI models',
        link: '/docs/ai-model-training'
      },
      {
        title: 'AI Integration Guide',
        description: 'Integrating AI with existing systems',
        link: '/docs/ai-integration'
      }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Cloud deployment and infrastructure management',
    color: 'from-cyan-500 to-blue-500',
    items: [
      {
        title: 'Cloud Migration',
        description: 'Migrating to cloud infrastructure',
        link: '/docs/cloud-migration',
        featured: true
      },
      {
        title: 'DevOps Automation',
        description: 'Setting up CI/CD pipelines',
        link: '/docs/devops-automation'
      },
      {
        title: 'FinOps Optimization',
        description: 'Optimizing cloud costs',
        link: '/docs/finops-optimization'
      },
      {
        title: 'Security Configuration',
        description: 'Configuring cloud security',
        link: '/docs/cloud-security'
      }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: <Shield className="w-8 h-8" />,
    description: 'Security setup and compliance guides',
    color: 'from-red-500 to-orange-500',
    items: [
      {
        title: 'Zero Trust Setup',
        description: 'Implementing zero trust architecture',
        link: '/docs/zero-trust-setup',
        featured: true
      },
      {
        title: 'Security Headers',
        description: 'Configuring security headers and CSP',
        link: '/docs/security-headers'
      },
      {
        title: 'GDPR Compliance',
        description: 'Setting up data privacy compliance',
        link: '/docs/gdpr-compliance'
      },
      {
        title: 'Incident Response',
        description: 'Security incident response procedures',
        link: '/docs/incident-response'
      }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Getting started with Micro SaaS tools',
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'Micro CRM Setup',
        description: 'Setting up customer relationship management',
        link: '/docs/micro-crm-setup',
        featured: true
      },
      {
        title: 'Helpdesk Platform',
        description: 'Configuring support ticketing system',
        link: '/docs/helpdesk-setup'
      },
      {
        title: 'Website Analytics',
        description: 'Privacy-first analytics implementation',
        link: '/docs/website-analytics'
      },
      {
        title: 'Email Automation',
        description: 'Setting up email sequences',
        link: '/docs/email-automation'
      }
    ]
  },
  {
    title: 'API & Development',
    icon: <Code className="w-8 h-8" />,
    description: 'Developer resources and API documentation',
    color: 'from-indigo-500 to-purple-500',
    items: [
      {
        title: 'API Reference',
        description: 'Complete API documentation',
        link: '/api',
        featured: true
      },
      {
        title: 'SDK Downloads',
        description: 'Client libraries and SDKs',
        link: '/docs/sdk-downloads'
      },
      {
        title: 'Webhook Setup',
        description: 'Configuring webhooks and integrations',
        link: '/docs/webhook-setup'
      },
      {
        title: 'Authentication',
        description: 'API authentication methods',
        link: '/docs/api-authentication'
      }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: <HelpCircle className="w-8 h-8" />,
    description: 'Common issues and their solutions',
    color: 'from-yellow-500 to-orange-500',
    items: [
      {
        title: 'Common Issues',
        description: 'Frequently encountered problems',
        link: '/docs/common-issues'
      },
      {
        title: 'Error Codes',
        description: 'Understanding error messages',
        link: '/docs/error-codes'
      },
      {
        title: 'Performance Issues',
        description: 'Optimizing performance',
        link: '/docs/performance-issues'
      },
      {
        title: 'Integration Problems',
        description: 'Resolving integration issues',
        link: '/docs/integration-problems'
      }
    ]
  },
  {
    title: 'Training & Resources',
    icon: <BookOpen className="w-8 h-8" />,
    description: 'Educational content and training materials',
    color: 'from-teal-500 to-green-500',
    items: [
      {
        title: 'Video Tutorials',
        description: 'Step-by-step video guides',
        link: '/tutorials',
        featured: true
      },
      {
        title: 'Webinars',
        description: 'Live and recorded webinars',
        link: '/webinars'
      },
      {
        title: 'White Papers',
        description: 'In-depth technical documents',
        link: '/white-papers'
      },
      {
        title: 'Case Studies',
        description: 'Real-world implementation examples',
        link: '/case-studies'
      }
    ]
  }
];

const supportOptions = [
  {
    title: 'Email Support',
    description: 'Get help via email with detailed responses',
    icon: <Mail className="w-6 h-6" />,
    contact: 'kleber@ziontechgroup.com',
    response: 'Within 4 hours',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: <Phone className="w-6 h-6" />,
    contact: '+1 302 464 0950',
    response: 'Immediate response',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Live Chat',
    description: 'Real-time chat support during business hours',
    icon: <MessageCircle className="w-6 h-6" />,
    contact: 'Available on website',
    response: 'Real-time support',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Emergency Support',
    description: '24/7 support for critical issues',
    icon: <Clock className="w-6 h-6" />,
    contact: 'Emergency hotline',
    response: '15 minutes',
    color: 'from-red-500 to-orange-500'
  }
];

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSections = helpSections.map(section => ({
    ...section,
    items: section.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || section.title.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
  })).filter(section => section.items.length > 0);

  const allCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'getting started', label: 'Getting Started' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'cloud', label: 'Cloud & Infrastructure' },
    { value: 'security', label: 'Cybersecurity' },
    { value: 'saas', label: 'Micro SaaS' },
    { value: 'api', label: 'API & Development' },
    { value: 'troubleshooting', label: 'Troubleshooting' },
    { value: 'training', label: 'Training & Resources' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="bg-zion-slate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Help Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find comprehensive guides, tutorials, and support resources to help you succeed with Zion Tech Group's services. Can't find what you need? Our support team is here to help.
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-cyan-400/30 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-cyan-400/30 rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {allCategories.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-cyan-400">
            Showing {filteredSections.reduce((total, section) => total + section.items.length, 0)} help articles
          </div>
        </div>
      </div>

      {/* Help Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                  >
                    {item.external ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-3 rounded-lg transition-all duration-200 ${
                          item.featured 
                            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className={`font-medium ${
                                item.featured ? 'text-cyan-400' : 'text-gray-300'
                              } group-hover:text-white transition-colors duration-200`}>
                                {item.title}
                              </span>
                              {item.featured && (
                                <span className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-500" />
                        </div>
                      </a>
                    ) : (
                      <Link
                        to={item.link}
                        className={`block p-3 rounded-lg transition-all duration-200 ${
                          item.featured 
                            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className={`font-medium ${
                                item.featured ? 'text-cyan-400' : 'text-gray-300'
                              } group-hover:text-white transition-colors duration-200`}>
                                {item.title}
                              </span>
                              {item.featured && (
                                <span className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSections.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              No help articles found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </motion.div>
        )}
      </div>

      {/* Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-xl text-gray-300">
            Our support team is available through multiple channels to assist you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.1) }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">{option.title}</h3>
              <p className="text-gray-400 text-sm text-center mb-4">{option.description}</p>
              <div className="text-center">
                <div className="text-white font-medium mb-1">{option.contact}</div>
                <div className="text-cyan-400 text-sm">{option.response}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Actions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/faq"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                View FAQ
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Contact Support
              </Link>
              <Link
                to="/sitemap"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Site Map
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
