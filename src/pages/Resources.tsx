import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Gauge,
  Award,
  Crown,
  Sparkles,
  Flame,
  Infinity,
  Eye,
  Server,
  Smartphone,
  Network,
  Clock,
  ShoppingCart,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  CheckCircle2,
  Play,
  Download,
  ExternalLink,
  Calendar,
  Clock as ClockIcon,
  User,
  Tag,
  TrendingUp,
  Lightbulb,
  Rocket,
  Heart,
  Leaf,
  Building2,
  Globe,
  Shield,
  Atom,
  PenTool,
  MessageCircle,
  BarChart3 as BarChart3Icon
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      icon: BookOpen,
      description: 'Latest industry trends, technology insights, and expert analysis',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      resources: [
        {
          title: 'The Future of AI in 2030',
          excerpt: 'Explore how artificial intelligence will transform business operations in the next decade',
          category: 'AI & Technology',
          readTime: '8 min read',
          date: '2025-01-15',
          featured: true
        },
        {
          title: 'Quantum Computing Breakthroughs',
          excerpt: 'Latest developments in quantum computing and their business applications',
          category: 'Emerging Tech',
          readTime: '12 min read',
          date: '2025-01-10',
          featured: false
        },
        {
          title: 'Cybersecurity Trends 2025',
          excerpt: 'Understanding the evolving threat landscape and protection strategies',
          category: 'Security',
          readTime: '6 min read',
          date: '2025-01-08',
          featured: false
        }
      ]
    },
    {
      title: 'Case Studies',
      icon: Target,
      description: 'Real-world success stories and implementation results',
      color: 'from-green-500 to-emerald-500',
      featured: true,
      resources: [
        {
          title: 'Healthcare AI Transformation',
          excerpt: 'How a major hospital system improved patient outcomes by 40% using AI diagnostics',
          category: 'Healthcare',
          results: '40% improvement',
          featured: true
        },
        {
          title: 'Manufacturing IoT Success',
          excerpt: 'Smart factory implementation reducing downtime by 35%',
          category: 'Manufacturing',
          results: '35% reduction',
          featured: false
        },
        {
          title: 'Financial Services Innovation',
          excerpt: 'Blockchain implementation reducing transaction costs by 60%',
          category: 'Financial Services',
          results: '60% cost reduction',
          featured: false
        }
      ]
    },
    {
      title: 'White Papers',
      icon: FileText,
      description: 'In-depth research and analysis on emerging technologies',
      color: 'from-purple-500 to-pink-500',
      featured: false,
      resources: [
        {
          title: 'AI Ethics in Business',
          excerpt: 'Comprehensive guide to implementing ethical AI practices in your organization',
          category: 'AI Ethics',
          pages: '45 pages',
          featured: false
        },
        {
          title: 'Quantum Security Framework',
          excerpt: 'Building quantum-resistant security infrastructure for the future',
          category: 'Cybersecurity',
          pages: '32 pages',
          featured: false
        },
        {
          title: 'Digital Transformation Roadmap',
          excerpt: 'Step-by-step guide to modernizing your business with technology',
          category: 'Digital Transformation',
          pages: '28 pages',
          featured: false
        }
      ]
    },
    {
      title: 'Webinars',
      icon: Users,
      description: 'Expert-led learning sessions and interactive workshops',
      color: 'from-orange-500 to-red-500',
      featured: false,
      resources: [
        {
          title: 'AI Implementation Masterclass',
          excerpt: 'Learn how to successfully implement AI solutions in your business',
          category: 'AI Implementation',
          duration: '90 minutes',
          featured: false
        },
        {
          title: 'Cybersecurity Best Practices',
          excerpt: 'Essential security practices for modern businesses',
          category: 'Security',
          duration: '60 minutes',
          featured: false
        },
        {
          title: 'Cloud Migration Strategies',
          excerpt: 'Planning and executing successful cloud migrations',
          category: 'Cloud Computing',
          duration: '75 minutes',
          featured: false
        }
      ]
    },
    {
      title: 'Documentation',
      icon: Code,
      description: 'Technical guides, APIs, and implementation documentation',
      color: 'from-cyan-500 to-blue-500',
      featured: false,
      resources: [
        {
          title: 'API Reference Guide',
          excerpt: 'Complete API documentation for all our services and platforms',
          category: 'API',
          featured: false
        },
        {
          title: 'Integration Guide',
          excerpt: 'Step-by-step integration instructions for our solutions',
          category: 'Integration',
          featured: false
        },
        {
          title: 'Best Practices Guide',
          excerpt: 'Recommended practices for optimal performance and security',
          category: 'Best Practices',
          featured: false
        }
      ]
    },
    {
      title: 'FAQ & Support',
      icon: HelpCircle,
      description: 'Get help and answers to common questions',
      color: 'from-gray-500 to-slate-500',
      featured: false,
      resources: [
        {
          title: 'Getting Started Guide',
          excerpt: 'Quick start guide for new users and customers',
          category: 'Getting Started',
          featured: false
        },
        {
          title: 'Troubleshooting Guide',
          excerpt: 'Common issues and their solutions',
          category: 'Troubleshooting',
          featured: false
        },
        {
          title: 'Contact Support',
          excerpt: 'Get in touch with our technical support team',
          category: 'Support',
          featured: false
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'The Complete AI Business Guide 2025',
      excerpt: 'Everything you need to know about implementing AI in your business, from strategy to execution.',
      category: 'AI & Business',
      type: 'White Paper',
      readTime: '45 min read',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity for Modern Enterprises',
      excerpt: 'Comprehensive security framework for protecting your business in the digital age.',
      category: 'Security',
      type: 'Guide',
      readTime: '30 min read',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of businesses that successfully transformed their operations.',
      category: 'Digital Transformation',
      type: 'Case Study',
      readTime: '25 min read',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Summit 2025',
      date: '2025-02-15',
      time: '10:00 AM EST',
      duration: '4 hours',
      type: 'Virtual Summit',
      description: 'Join industry leaders to explore the future of AI in healthcare',
      featured: true
    },
    {
      title: 'Cybersecurity Workshop Series',
      date: '2025-02-20',
      time: '2:00 PM EST',
      duration: '2 hours',
      type: 'Workshop',
      description: 'Hands-on cybersecurity training for IT professionals',
      featured: false
    },
    {
      title: 'Cloud Migration Webinar',
      date: '2025-02-25',
      time: '11:00 AM EST',
      duration: '1 hour',
      type: 'Webinar',
      description: 'Best practices for successful cloud migrations',
      featured: false
    }
  ];

  const quickActions = [
    {
      title: 'Download Resources',
      icon: Download,
      description: 'Access our latest white papers, guides, and case studies',
      action: 'Browse Library',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Register for Events',
      icon: Calendar,
      description: 'Join our upcoming webinars, workshops, and summits',
      action: 'View Events',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Get Support',
      icon: HelpCircle,
      description: 'Find answers to your questions and get technical support',
      action: 'Contact Support',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Developer Portal',
      icon: Code,
      description: 'Access APIs, SDKs, and technical documentation',
      action: 'Visit Portal',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources & Support - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, and technical documentation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Resources</span>
              <br />
              & Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of resources, insights, and support materials. 
              From technical documentation to industry insights, we've got everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore Resources
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                Get Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} w-fit mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {action.description}
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  {action.action}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and valuable resources to help you stay ahead in technology and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  resource.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} w-fit mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                    {resource.type}
                  </span>
                  <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {resource.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our organized collection of resources designed to help you succeed 
              in your technology journey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} w-fit`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                      {category.featured && (
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-600/50 bg-slate-700/20 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-600/50 text-gray-300 text-xs rounded-full">
                          {resource.category}
                        </span>
                        {resource.featured && (
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {resource.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                        {resource.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        {resource.readTime && <span>{resource.readTime}</span>}
                        {resource.results && <span className="text-green-400">{resource.results}</span>}
                        {resource.pages && <span>{resource.pages}</span>}
                        {resource.duration && <span>{resource.duration}</span>}
                        {resource.date && <span>{new Date(resource.date).toLocaleDateString()}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 mx-auto group-hover:gap-3 transition-all duration-300">
                    View All {category.title}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming webinars, workshops, and events to learn from industry experts 
              and stay ahead of the curve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  event.featured
                    ? 'border-purple-400/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-400">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-700/50 text-purple-400 text-xs rounded-full">
                    {event.type}
                  </span>
                  {event.featured && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span>{event.duration}</span>
                </div>

                <button className="w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 font-medium rounded-lg transition-all duration-300 border border-purple-400/30">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is here to help you succeed. Get in touch for personalized 
              support and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
