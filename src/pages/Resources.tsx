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
  CheckCircle,
  ExternalLink,
  Download,
  Play,
  Calendar,
  Search,
  TrendingUp,
  Lightbulb,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Leaf,
  Scale,
  Building2,
  Cpu,
  Cloud,
  Lock,
  Database,
  BarChart3
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      description: 'Latest industry trends, technology insights, and expert analysis',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      href: '/blog',
      items: [
        'AI & Machine Learning Trends',
        'Digital Transformation Insights',
        'Cybersecurity Best Practices',
        'Cloud Computing Strategies',
        'Industry Case Studies'
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementation results',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      href: '/case-studies',
      items: [
        'Enterprise Digital Transformation',
        'AI Implementation Success Stories',
        'Cybersecurity Incident Response',
        'Cloud Migration Results',
        'Startup Growth Acceleration'
      ]
    },
    {
      title: 'White Papers',
      description: 'In-depth research and technical analysis',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      featured: false,
      href: '/white-papers',
      items: [
        'AI Ethics & Governance',
        'Quantum Computing Applications',
        'Cybersecurity Threat Landscape',
        'Digital Twin Technology',
        'Sustainable Technology Solutions'
      ]
    },
    {
      title: 'Webinars',
      description: 'Expert-led learning sessions and live demonstrations',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      featured: false,
      href: '/webinars',
      items: [
        'AI Implementation Strategies',
        'Cybersecurity Best Practices',
        'Cloud Architecture Design',
        'Digital Transformation Roadmap',
        'Emerging Technology Trends'
      ]
    },
    {
      title: 'Documentation',
      description: 'Technical guides, APIs, and implementation resources',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      href: '/docs',
      items: [
        'API Reference Guides',
        'Integration Tutorials',
        'Best Practice Documentation',
        'Troubleshooting Guides',
        'Performance Optimization'
      ]
    },
    {
      title: 'FAQ & Support',
      description: 'Get help and answers to common questions',
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-500',
      featured: false,
      href: '/faq',
      items: [
        'Common Implementation Questions',
        'Technical Support Resources',
        'Service Level Agreements',
        'Training & Certification',
        'Contact Information'
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Transformation Guide 2025',
      description: 'Comprehensive guide to implementing AI in your business',
      type: 'White Paper',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/resources/ai-transformation-guide-2025'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures for modern businesses',
      type: 'Guide',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/resources/cybersecurity-best-practices'
    },
    {
      title: 'Cloud Migration Checklist',
      description: 'Step-by-step guide to successful cloud migration',
      type: 'Checklist',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/resources/cloud-migration-checklist'
    },
    {
      title: 'Digital Twin Implementation',
      description: 'How to leverage digital twin technology',
      type: 'Case Study',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      href: '/resources/digital-twin-implementation'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Webinar',
      date: 'March 15, 2025',
      time: '2:00 PM EST',
      type: 'Webinar',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Cybersecurity Summit 2025',
      date: 'April 20, 2025',
      time: '9:00 AM EST',
      type: 'Conference',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud Architecture Workshop',
      date: 'May 10, 2025',
      time: '1:00 PM EST',
      type: 'Workshop',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support materials."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of insights, guides, and resources to accelerate your technology journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Content
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our most popular and valuable resources to accelerate your learning and implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-slate-700/50 text-xs text-cyan-400 rounded-md mb-2">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our organized collection of resources designed to support your technology journey at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={category.href}
                  className={`block p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50 ${
                    category.featured 
                      ? 'border-cyan-400/50 hover:border-cyan-400/70' 
                      : 'border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    {category.featured && (
                      <Star className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.items.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore {category.title}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live events, webinars, and workshops to learn directly from our experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-slate-700/50 text-xs text-cyan-400 rounded-md">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 rounded-lg transition-colors text-sm font-medium">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Custom Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can't find what you're looking for? Our team can create custom resources tailored to your specific needs and industry requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Request Custom Content
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Browse All Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
