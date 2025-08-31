import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  BookOpen,
  Code,
  FileText,
  Video,
  Download,
  Search,
  ChevronRight,
  ExternalLink,
  Star,
  Clock,
  Users,
  Bookmark,
  Filter,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Database,
  Globe,
  Lock,
  BarChart3,
  Server,
  Network,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  items: DocItem[];
}

interface DocItem {
  title: string;
  description: string;
  href: string;
  type: 'api' | 'guide' | 'tutorial' | 'reference';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: string;
}

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentationSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          href: '/docs/quick-start',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '5 min'
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          href: '/docs/installation',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '10 min'
        },
        {
          title: 'First Project Tutorial',
          description: 'Build your first AI-powered application',
          href: '/docs/first-project',
          type: 'tutorial',
          difficulty: 'beginner',
          readTime: '15 min'
        },
        {
          title: 'Environment Setup',
          description: 'Configure your development environment',
          href: '/docs/environment-setup',
          type: 'guide',
          difficulty: 'beginner',
          readTime: '8 min'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Documentation for our AI and machine learning services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI API Reference',
          description: 'Complete API documentation for AI services',
          href: '/docs/ai-api',
          type: 'api',
          difficulty: 'intermediate',
          readTime: '20 min'
        },
        {
          title: 'Machine Learning Models',
          description: 'Guide to using our pre-trained ML models',
          href: '/docs/ml-models',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '25 min'
        },
        {
          title: 'Custom Model Training',
          description: 'Train and deploy your own AI models',
          href: '/docs/custom-training',
          type: 'tutorial',
          difficulty: 'advanced',
          readTime: '45 min'
        },
        {
          title: 'AI Best Practices',
          description: 'Best practices for AI implementation',
          href: '/docs/ai-best-practices',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '30 min'
        }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment guides',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Cloud Deployment',
          description: 'Deploy applications to our cloud platform',
          href: '/docs/cloud-deployment',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '20 min'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Manage infrastructure with Terraform and CloudFormation',
          href: '/docs/iac',
          type: 'tutorial',
          difficulty: 'advanced',
          readTime: '40 min'
        },
        {
          title: 'Container Orchestration',
          description: 'Deploy with Docker and Kubernetes',
          href: '/docs/containers',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '25 min'
        },
        {
          title: 'Serverless Functions',
          description: 'Build and deploy serverless applications',
          href: '/docs/serverless',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '30 min'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Security features and best practices',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        {
          title: 'Authentication & Authorization',
          description: 'Implement secure user authentication',
          href: '/docs/auth',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '25 min'
        },
        {
          title: 'API Security',
          description: 'Secure your APIs with best practices',
          href: '/docs/api-security',
          type: 'guide',
          difficulty: 'intermediate',
          readTime: '20 min'
        },
        {
          title: 'Data Encryption',
          description: 'Encrypt sensitive data in transit and at rest',
          href: '/docs/encryption',
          type: 'guide',
          difficulty: 'advanced',
          readTime: '35 min'
        },
        {
          title: 'Security Compliance',
          description: 'Meet industry security standards',
          href: '/docs/compliance',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '30 min'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'REST API Reference',
          description: 'Complete REST API documentation',
          href: '/docs/rest-api',
          type: 'api',
          difficulty: 'intermediate',
          readTime: '60 min'
        },
        {
          title: 'GraphQL API',
          description: 'GraphQL API documentation and examples',
          href: '/docs/graphql',
          type: 'api',
          difficulty: 'intermediate',
          readTime: '45 min'
        },
        {
          title: 'WebSocket API',
          description: 'Real-time communication with WebSockets',
          href: '/docs/websocket',
          type: 'api',
          difficulty: 'advanced',
          readTime: '30 min'
        },
        {
          title: 'SDK Documentation',
          description: 'Client libraries and SDKs',
          href: '/docs/sdk',
          type: 'reference',
          difficulty: 'intermediate',
          readTime: '40 min'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      icon: Video,
      color: 'from-yellow-500 to-orange-500',
      items: [
        {
          title: 'Building a Chatbot',
          description: 'Create an AI-powered chatbot from scratch',
          href: '/docs/chatbot-tutorial',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '50 min'
        },
        {
          title: 'Data Analytics Dashboard',
          description: 'Build a real-time analytics dashboard',
          href: '/docs/analytics-tutorial',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '60 min'
        },
        {
          title: 'E-commerce Integration',
          description: 'Integrate AI services into an e-commerce platform',
          href: '/docs/ecommerce-tutorial',
          type: 'tutorial',
          difficulty: 'advanced',
          readTime: '75 min'
        },
        {
          title: 'Mobile App Integration',
          description: 'Add AI features to mobile applications',
          href: '/docs/mobile-tutorial',
          type: 'tutorial',
          difficulty: 'intermediate',
          readTime: '45 min'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documentation', count: documentationSections.reduce((acc, section) => acc + section.items.length, 0) },
    { id: 'getting-started', name: 'Getting Started', count: documentationSections.find(s => s.id === 'getting-started')?.items.length || 0 },
    { id: 'ai-services', name: 'AI Services', count: documentationSections.find(s => s.id === 'ai-services')?.items.length || 0 },
    { id: 'cloud-services', name: 'Cloud Services', count: documentationSections.find(s => s.id === 'cloud-services')?.items.length || 0 },
    { id: 'security', name: 'Security', count: documentationSections.find(s => s.id === 'security')?.items.length || 0 },
    { id: 'api-reference', name: 'API Reference', count: documentationSections.find(s => s.id === 'api-reference')?.items.length || 0 },
    { id: 'tutorials', name: 'Tutorials', count: documentationSections.find(s => s.id === 'tutorials')?.items.length || 0 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-400/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'api': return 'text-blue-400 bg-blue-400/20';
      case 'guide': return 'text-purple-400 bg-purple-400/20';
      case 'tutorial': return 'text-orange-400 bg-orange-400/20';
      case 'reference': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory !== 'all' && section.id !== selectedCategory) {
      return false;
    }
    
    if (searchQuery) {
      const hasMatchingItems = section.items.some(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return hasMatchingItems;
    }
    
    return true;
  });

  const filteredItems = filteredSections.flatMap(section => 
    section.items.filter(item => {
      if (searchQuery) {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               item.description.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group's AI services, cloud solutions, and development tools. Get started with tutorials, API references, and best practices."
        keywords="documentation, API reference, tutorials, guides, Zion Tech Group, AI documentation, cloud documentation"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build amazing applications with our AI services, 
              cloud solutions, and development tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Documentation</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for guides, tutorials, API docs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {section.items
                  .filter(item => {
                    if (searchQuery) {
                      return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchQuery.toLowerCase());
                    }
                    return true;
                  })
                  .map((item, itemIndex) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + sectionIndex * 0.1 + itemIndex * 0.05 }}
                      className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No documentation found matching your search.</p>
              <p className="text-gray-400 text-sm">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Popular documentation and resources to get you started quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SDK Downloads</h3>
              <p className="text-gray-300 text-sm mb-4">Download our SDKs for popular programming languages</p>
              <a
                href="/docs/sdk"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Downloads
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-300 text-sm mb-4">Watch step-by-step video tutorials</p>
              <a
                href="/tutorials"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Watch Videos
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm mb-4">Join our developer community for support</p>
              <a
                href="/community"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Join Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com?subject=Documentation Question"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Ask a Question
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
