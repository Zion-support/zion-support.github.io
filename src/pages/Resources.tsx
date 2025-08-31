import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  Users,
  MessageCircle,
  HelpCircle,
  SystemStatus,
  Api,
  Code,
  Globe,
  Lock,
  Cpu,
  Server,
  Network,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Smartphone,
  CreditCard,
  ShoppingCart,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Leaf,
  Zap as ZapIcon,
  Play,
  Calendar,
  Video,
  Headphones,
  GraduationCap,
  BookMarked,
  FileCode,
  Database,
  Shield,
  Cloud,
  BarChart3,
  Workflow
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog',
      description: 'Latest insights, industry trends, and technology updates',
      icon: BookOpen,
      href: '/blog',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Technology insights',
        'Industry analysis',
        'Best practices',
        'Case studies',
        'Expert opinions',
        'Trending topics'
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementation results',
      icon: FileText,
      href: '/case-studies',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Success stories',
        'Implementation details',
        'ROI analysis',
        'Technical solutions',
        'Client testimonials',
        'Results metrics'
      ]
    },
    {
      title: 'White Papers',
      description: 'In-depth technical documentation and research',
      icon: BookMarked,
      href: '/white-papers',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Technical research',
        'Industry analysis',
        'Best practices',
        'Implementation guides',
        'Technology deep-dives',
        'Expert insights'
      ]
    },
    {
      title: 'Documentation',
      description: 'Technical guides, APIs, and development resources',
      icon: FileCode,
      href: '/documentation',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'API documentation',
        'Integration guides',
        'Technical specs',
        'Code examples',
        'Troubleshooting',
        'Developer resources'
      ]
    },
    {
      title: 'Webinars',
      description: 'Educational sessions and interactive training',
      icon: Video,
      href: '/webinars',
      color: 'from-orange-500 to-red-600',
      features: [
        'Live sessions',
        'Recorded content',
        'Expert presentations',
        'Q&A sessions',
        'Interactive demos',
        'Certification tracks'
      ]
    },
    {
      title: 'Training',
      description: 'Comprehensive learning programs and skill development',
      icon: GraduationCap,
      href: '/training',
      color: 'from-teal-500 to-green-600',
      features: [
        'Skill development',
        'Certification programs',
        'Hands-on workshops',
        'Online courses',
        'Mentorship programs',
        'Assessment tools'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Expert Knowledge',
      description: 'Insights from industry experts and thought leaders',
      icon: Award
    },
    {
      title: 'Practical Value',
      description: 'Actionable insights and real-world applications',
      icon: Target
    },
    {
      title: 'Stay Updated',
      description: 'Keep pace with latest technology trends',
      icon: TrendingUp
    },
    {
      title: 'Skill Development',
      description: 'Enhance your technical and business skills',
      icon: Rocket
    }
  ];

  const featuredResources = [
    {
      title: 'AI in Enterprise: A Complete Guide',
      type: 'White Paper',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments',
      icon: Brain,
      href: '/white-papers/ai-enterprise-guide'
    },
    {
      title: 'Cloud Migration Best Practices',
      type: 'Case Study',
      description: 'Real-world cloud migration success story with detailed implementation steps',
      icon: Cloud,
      href: '/case-studies/cloud-migration-success'
    },
    {
      title: 'Cybersecurity Trends 2025',
      type: 'Blog Post',
      description: 'Latest cybersecurity threats and protection strategies for modern businesses',
      icon: Shield,
      href: '/blog/cybersecurity-trends-2025'
    },
    {
      title: 'API Integration Fundamentals',
      type: 'Documentation',
      description: 'Complete guide to API integration and best practices',
      icon: Api,
      href: '/documentation/api-integration-guide'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Solutions Workshop',
      date: 'March 15, 2025',
      time: '2:00 PM EST',
      type: 'Workshop',
      icon: Brain
    },
    {
      title: 'Cloud Security Webinar',
      date: 'March 22, 2025',
      time: '1:00 PM EST',
      type: 'Webinar',
      icon: Shield
    },
    {
      title: 'DevOps Best Practices',
      date: 'March 29, 2025',
      time: '3:00 PM EST',
      type: 'Training',
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Knowledge
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"> Resources</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access comprehensive resources to stay ahead in technology. From expert insights to 
            practical guides, we provide the knowledge you need to succeed.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/blog"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Resources</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/webinars"
              className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Join Webinars
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources designed to help you stay informed, 
              develop skills, and make informed technology decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={category.href}
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and valuable resources that provide actionable insights 
              and practical knowledge for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <Link
                      to={resource.href}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming webinars, workshops, and training sessions to enhance your 
              knowledge and skills in cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300">{event.date}</p>
                    <p className="text-gray-300">{event.time}</p>
                    <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Access Our Resources?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our resources provide valuable insights, practical knowledge, and expert guidance 
              to help you stay competitive in the rapidly evolving technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Expand Your Knowledge?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start exploring our comprehensive resources today and take your technology 
              expertise to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Start Reading</span>
              </Link>
              <Link
                to="/webinars"
                className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                <Video className="w-5 h-5" />
                <span>Join Webinars</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
