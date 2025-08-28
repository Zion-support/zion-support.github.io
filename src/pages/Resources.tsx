import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Lock,
  Globe,
  Cpu,
  Atom,
  TrendingUp,
  Calendar,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      icon: BookOpen,
      description: 'Latest industry trends, technology insights, and thought leadership content',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      resources: [
        { name: 'AI Industry Trends 2024', type: 'Article', date: '2024-01-15', featured: true },
        { name: 'Quantum Computing Breakthroughs', type: 'Research', date: '2024-01-10', featured: false },
        { name: 'Cybersecurity Best Practices', type: 'Guide', date: '2024-01-05', featured: false },
        { name: 'Digital Transformation Strategies', type: 'Whitepaper', date: '2023-12-20', featured: true }
      ],
      href: '/blog'
    },
    {
      title: 'Case Studies',
      icon: Target,
      description: 'Real-world success stories and implementation results from our clients',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      resources: [
        { name: 'Enterprise AI Transformation', type: 'Case Study', date: '2024-01-12', featured: true },
        { name: 'Healthcare AI Implementation', type: 'Case Study', date: '2024-01-08', featured: false },
        { name: 'Financial Services Modernization', type: 'Case Study', date: '2023-12-28', featured: false },
        { name: 'Manufacturing IoT Success', type: 'Case Study', date: '2023-12-15', featured: true }
      ],
      href: '/case-studies'
    },
    {
      title: 'White Papers',
      icon: FileText,
      description: 'In-depth research, analysis, and technical documentation',
      color: 'from-green-500 to-emerald-500',
      featured: false,
      resources: [
        { name: 'AI Ethics & Governance', type: 'White Paper', date: '2024-01-10', featured: true },
        { name: 'Quantum AI Applications', type: 'White Paper', date: '2024-01-05', featured: false },
        { name: 'Cloud Security Framework', type: 'White Paper', date: '2023-12-25', featured: false },
        { name: 'Digital Twin Technology', type: 'White Paper', date: '2023-12-18', featured: true }
      ],
      href: '/white-papers'
    },
    {
      title: 'Webinars',
      icon: Users,
      description: 'Expert-led learning sessions and interactive presentations',
      color: 'from-orange-500 to-red-500',
      featured: false,
      resources: [
        { name: 'AI Strategy Planning', type: 'Webinar', date: '2024-01-20', featured: true },
        { name: 'Quantum Computing Basics', type: 'Webinar', date: '2024-01-18', featured: false },
        { name: 'Cybersecurity Trends', type: 'Webinar', date: '2024-01-15', featured: false },
        { name: 'Digital Transformation', type: 'Webinar', date: '2024-01-12', featured: true }
      ],
      href: '/webinars'
    },
    {
      title: 'Documentation',
      icon: Code,
      description: 'Technical guides, APIs, and development resources',
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      resources: [
        { name: 'API Reference Guide', type: 'Documentation', date: '2024-01-15', featured: true },
        { name: 'Developer Quick Start', type: 'Guide', date: '2024-01-10', featured: false },
        { name: 'Integration Tutorials', type: 'Tutorial', date: '2024-01-05', featured: false },
        { name: 'Best Practices Guide', type: 'Guide', date: '2023-12-30', featured: true }
      ],
      href: '/docs'
    },
    {
      title: 'FAQ & Support',
      icon: HelpCircle,
      description: 'Get help, answers, and support for common questions',
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      resources: [
        { name: 'Getting Started FAQ', type: 'FAQ', date: '2024-01-15', featured: true },
        { name: 'Troubleshooting Guide', type: 'Guide', date: '2024-01-10', featured: false },
        { name: 'Support Contact Info', type: 'Support', date: '2024-01-05', featured: false },
        { name: 'Common Issues', type: 'FAQ', date: '2023-12-28', featured: true }
      ],
      href: '/faq'
    }
  ];

  const featuredResources = [
    {
      title: 'AI Strategy Roadmap 2024',
      type: 'Whitepaper',
      description: 'Comprehensive guide to developing and implementing AI strategies for enterprise organizations',
      category: 'Strategy',
      downloadCount: '2.5k',
      featured: true,
      href: '/resources/ai-strategy-roadmap-2024'
    },
    {
      title: 'Quantum Computing Implementation Guide',
      type: 'Technical Guide',
      description: 'Step-by-step guide to implementing quantum computing solutions in your organization',
      category: 'Technology',
      downloadCount: '1.8k',
      featured: true,
      href: '/resources/quantum-computing-guide'
    },
    {
      title: 'Cybersecurity Framework 2024',
      type: 'Framework',
      description: 'Updated cybersecurity framework incorporating AI and machine learning capabilities',
      category: 'Security',
      downloadCount: '3.2k',
      featured: true,
      href: '/resources/cybersecurity-framework-2024'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2024',
      date: '2024-02-15',
      time: '10:00 AM EST',
      type: 'Virtual Conference',
      description: 'Join industry leaders for insights on AI innovation and implementation',
      registration: true
    },
    {
      title: 'Quantum Computing Workshop',
      date: '2024-02-20',
      time: '2:00 PM EST',
      type: 'Interactive Workshop',
      description: 'Hands-on workshop on quantum computing fundamentals and applications',
      registration: true
    },
    {
      title: 'Digital Transformation Webinar',
      date: '2024-02-25',
      time: '11:00 AM EST',
      type: 'Webinar',
      description: 'Learn about digital transformation strategies and best practices',
      registration: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including case studies, white papers, webinars, documentation, and expert insights on AI, quantum computing, and emerging technologies."
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Resources
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of insights, case studies, technical guides, and expert knowledge 
              to accelerate your technology journey and stay ahead of industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/ai-strategy-roadmap-2024"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Download Latest Resources
                <Download className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/webinars"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Join Upcoming Webinars
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and valuable resources, carefully curated to help you succeed 
              in your technology initiatives.
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
                className="group"
              >
                <Link to={resource.href}>
                  <div className="p-8 rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        {resource.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-500">{resource.category}</span>
                      <span className="text-sm text-gray-500">{resource.downloadCount} downloads</span>
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Download Now</span>
                      <Download className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by category to find 
              exactly what you need for your technology journey.
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
                <Link to={category.href}>
                  <div className={`p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                    category.featured
                      ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                      : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                  }`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      {category.featured && (
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {category.resources.slice(0, 3).map((resource, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300 truncate">{resource.name}</span>
                          <span className="text-gray-500 text-xs">{resource.date}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore {category.title}</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live events, webinars, and workshops to learn from industry experts 
              and stay updated with the latest technology trends.
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
                className="group"
              >
                <div className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">
                      <div>{event.date}</div>
                      <div>{event.time}</div>
                    </div>
                    {event.registration && (
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                        Registration Open
                      </span>
                    )}
                  </div>
                  
                  {event.registration ? (
                    <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  ) : (
                    <button className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-slate-600 text-gray-400 font-medium rounded-lg cursor-not-allowed">
                      Registration Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get access to our latest insights, case studies, and technical resources. 
              Subscribe to stay informed about industry trends and technology breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/ai-strategy-roadmap-2024"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Access All Resources
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
