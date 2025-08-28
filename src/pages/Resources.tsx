import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  ArrowRight,
  Star,
  Download,
  Play,
  Calendar,
  Clock,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Shield,
  Database,
  Network,
  Rocket,
  Heart,
  Leaf,
  Atom,
  Globe,
  Lock,
  Cpu,
  Settings,
  BarChart3,
  Eye,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Bookmark,
  Share2,
  MessageCircle,
  ThumbsUp,
  Eye as EyeIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Latest industry trends, technology insights, and expert analysis',
      resources: [
        {
          title: 'AI in 2025: The Future of Business Technology',
          type: 'Article',
          readTime: '8 min read',
          date: '2025-01-15',
          featured: true,
          href: '/blog/ai-future-2025'
        },
        {
          title: 'Cybersecurity Best Practices for Modern Enterprises',
          type: 'Guide',
          readTime: '12 min read',
          date: '2025-01-10',
          featured: true,
          href: '/blog/cybersecurity-best-practices'
        },
        {
          title: 'Digital Transformation: A Complete Roadmap',
          type: 'Article',
          readTime: '15 min read',
          date: '2025-01-05',
          featured: false,
          href: '/blog/digital-transformation-roadmap'
        }
      ]
    },
    {
      title: 'Case Studies',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      description: 'Real-world success stories and implementation results',
      resources: [
        {
          title: 'Healthcare Provider Achieves 40% Cost Reduction',
          type: 'Case Study',
          readTime: '10 min read',
          date: '2025-01-12',
          featured: true,
          href: '/case-studies/healthcare-cost-reduction'
        },
        {
          title: 'Manufacturing Company Boosts Efficiency 3x',
          type: 'Case Study',
          readTime: '12 min read',
          date: '2025-01-08',
          featured: true,
          href: '/case-studies/manufacturing-efficiency'
        },
        {
          title: 'Financial Services Digital Transformation',
          type: 'Case Study',
          readTime: '14 min read',
          date: '2025-01-03',
          featured: false,
          href: '/case-studies/financial-transformation'
        }
      ]
    },
    {
      title: 'White Papers',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      description: 'In-depth research and technical analysis reports',
      resources: [
        {
          title: 'AI-Powered Cybersecurity: A Comprehensive Guide',
          type: 'White Paper',
          readTime: '25 min read',
          date: '2025-01-14',
          featured: true,
          href: '/white-papers/ai-cybersecurity-guide'
        },
        {
          title: 'Quantum Computing in Enterprise Applications',
          type: 'White Paper',
          readTime: '30 min read',
          date: '2025-01-09',
          featured: true,
          href: '/white-papers/quantum-computing-enterprise'
        },
        {
          title: 'Edge Computing: The Future of IoT',
          type: 'White Paper',
          readTime: '20 min read',
          date: '2025-01-04',
          featured: false,
          href: '/white-papers/edge-computing-iot'
        }
      ]
    },
    {
      title: 'Webinars',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Expert-led learning sessions and interactive workshops',
      resources: [
        {
          title: 'AI Strategy for Enterprise Leaders',
          type: 'Webinar',
          duration: '60 min',
          date: '2025-01-20',
          featured: true,
          href: '/webinars/ai-strategy-enterprise'
        },
        {
          title: 'Cybersecurity Threat Landscape 2025',
          type: 'Webinar',
          duration: '45 min',
          date: '2025-01-17',
          featured: true,
          href: '/webinars/cybersecurity-threats-2025'
        },
        {
          title: 'Digital Transformation Best Practices',
          type: 'Webinar',
          duration: '75 min',
          date: '2025-01-13',
          featured: false,
          href: '/webinars/digital-transformation-practices'
        }
      ]
    },
    {
      title: 'Documentation',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      description: 'Technical guides, API references, and implementation docs',
      resources: [
        {
          title: 'API Reference Guide v2.1',
          type: 'Documentation',
          readTime: '45 min read',
          date: '2025-01-16',
          featured: true,
          href: '/docs/api-reference'
        },
        {
          title: 'Integration Guide for Developers',
          type: 'Documentation',
          readTime: '35 min read',
          date: '2025-01-11',
          featured: true,
          href: '/docs/integration-guide'
        },
        {
          title: 'Deployment Best Practices',
          type: 'Documentation',
          readTime: '25 min read',
          date: '2025-01-06',
          featured: false,
          href: '/docs/deployment-practices'
        }
      ]
    },
    {
      title: 'FAQ & Support',
      icon: HelpCircle,
      color: 'from-yellow-500 to-orange-500',
      description: 'Common questions, troubleshooting guides, and support resources',
      resources: [
        {
          title: 'Getting Started with Zion Tech Solutions',
          type: 'FAQ',
          readTime: '5 min read',
          date: '2025-01-15',
          featured: true,
          href: '/faq/getting-started'
        },
        {
          title: 'Troubleshooting Common Issues',
          type: 'FAQ',
          readTime: '8 min read',
          date: '2025-01-10',
          featured: true,
          href: '/faq/troubleshooting'
        },
        {
          title: 'Support and Contact Information',
          type: 'FAQ',
          readTime: '3 min read',
          date: '2025-01-05',
          featured: false,
          href: '/faq/support-contact'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Business Intelligence: Complete Implementation Guide',
      category: 'White Paper',
      description: 'Comprehensive guide to implementing AI-powered business intelligence solutions in your organization.',
      readTime: '30 min read',
      downloads: '2.5k',
      rating: 4.9,
      href: '/white-papers/ai-business-intelligence-guide',
      featured: true
    },
    {
      title: 'Cybersecurity Framework 2025',
      category: 'Guide',
      description: 'Updated cybersecurity framework incorporating the latest AI-powered threat detection and response strategies.',
      readTime: '25 min read',
      downloads: '1.8k',
      rating: 4.8,
      href: '/guides/cybersecurity-framework-2025',
      featured: true
    },
    {
      title: 'Digital Transformation Success Stories',
      category: 'Case Studies',
      description: 'Collection of successful digital transformation projects across various industries and company sizes.',
      readTime: '20 min read',
      downloads: '3.2k',
      rating: 4.9,
      href: '/case-studies/digital-transformation-success',
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Strategy Workshop for Enterprise Leaders',
      date: '2025-01-25',
      time: '2:00 PM EST',
      duration: '90 min',
      type: 'Workshop',
      spots: '25 remaining',
      href: '/events/ai-strategy-workshop'
    },
    {
      title: 'Cybersecurity Threat Intelligence Briefing',
      date: '2025-01-28',
      time: '1:00 PM EST',
      duration: '60 min',
      type: 'Briefing',
      spots: '50 remaining',
      href: '/events/cybersecurity-briefing'
    },
    {
      title: 'Digital Transformation Roundtable',
      date: '2025-02-01',
      time: '3:00 PM EST',
      duration: '120 min',
      type: 'Roundtable',
      spots: '15 remaining',
      href: '/events/digital-transformation-roundtable'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, and technical documentation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge Hub &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Learning Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of resources, insights, and expertise to help you 
              stay ahead in the rapidly evolving world of technology and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full md:w-96 pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and valuable resources, carefully curated to help you succeed 
              in your technology journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                    {resource.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {resource.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloads}
                    </span>
                  </div>
                </div>

                <Link
                  to={resource.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:translate-x-1"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our resources organized by category to find exactly what you need 
              for your specific interests and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 rounded-2xl border border-slate-600/50 p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.resources.slice(0, 3).map((resource, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white mb-1">{resource.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>

                <Link
                  to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  View All {category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming Events & Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live sessions and workshops to learn from industry experts 
              and connect with like-minded professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-400">{event.spots}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    {event.time} • {event.duration}
                  </div>
                </div>

                <Link
                  to={event.href}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about new resources, upcoming events, and industry insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
