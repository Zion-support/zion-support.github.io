import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  ArrowRight,
  Calendar,
  Clock,
  Star,
  Download,
  Play,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  Lightbulb,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Latest industry trends, technology insights, and thought leadership',
      featured: true,
      items: [
        {
          title: 'The Future of AI in Healthcare',
          excerpt: 'Exploring how artificial intelligence is revolutionizing patient care and medical diagnostics.',
          date: '2025-01-15',
          readTime: '5 min read',
          category: 'AI & Healthcare',
          featured: true
        },
        {
          title: 'Quantum Computing Breakthroughs 2025',
          excerpt: 'Latest developments in quantum computing and their implications for business.',
          date: '2025-01-10',
          readTime: '8 min read',
          category: 'Quantum Computing',
          featured: true
        },
        {
          title: 'Cybersecurity Trends for 2025',
          excerpt: 'Emerging threats and innovative security solutions for the digital age.',
          date: '2025-01-05',
          readTime: '6 min read',
          category: 'Cybersecurity',
          featured: false
        }
      ]
    },
    {
      title: 'Case Studies',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      description: 'Real-world success stories and implementation results',
      featured: true,
      items: [
        {
          title: 'Healthcare Provider Transformation',
          excerpt: 'How we helped a major hospital system implement AI-powered diagnostics.',
          results: '40% faster diagnosis, 25% cost reduction',
          industry: 'Healthcare',
          featured: true
        },
        {
          title: 'Financial Services Innovation',
          excerpt: 'AI-driven risk management system for a Fortune 500 bank.',
          results: '60% faster risk assessment, 30% improved accuracy',
          industry: 'Financial Services',
          featured: true
        },
        {
          title: 'Manufacturing Efficiency',
          excerpt: 'IoT and AI optimization for a global manufacturing company.',
          results: '35% reduced downtime, 20% increased productivity',
          industry: 'Manufacturing',
          featured: false
        }
      ]
    },
    {
      title: 'White Papers',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      description: 'In-depth research and analysis on emerging technologies',
      featured: true,
      items: [
        {
          title: 'AI Ethics in Business Applications',
          excerpt: 'Comprehensive guide to implementing ethical AI practices in enterprise environments.',
          pages: '45 pages',
          category: 'AI Ethics',
          featured: true
        },
        {
          title: 'Quantum Computing Business Impact',
          excerpt: 'Analysis of quantum computing\'s potential impact on various industries.',
          pages: '32 pages',
          category: 'Quantum Computing',
          featured: true
        },
        {
          title: 'Cybersecurity in the Age of AI',
          excerpt: 'How AI is both enhancing and challenging cybersecurity practices.',
          pages: '38 pages',
          category: 'Cybersecurity',
          featured: false
        }
      ]
    },
    {
      title: 'Webinars',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Expert-led learning sessions and interactive workshops',
      featured: false,
      items: [
        {
          title: 'AI Implementation Best Practices',
          excerpt: 'Learn from industry experts about successful AI deployment strategies.',
          duration: '60 minutes',
          date: '2025-01-20',
          speakers: ['Dr. Sarah Chen', 'Mark Johnson'],
          featured: true
        },
        {
          title: 'Quantum Computing for Business',
          excerpt: 'Understanding quantum computing applications in business contexts.',
          duration: '45 minutes',
          date: '2025-01-25',
          speakers: ['Dr. Michael Rodriguez'],
          featured: false
        }
      ]
    },
    {
      title: 'Documentation',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      description: 'Technical guides, APIs, and implementation resources',
      featured: false,
      items: [
        {
          title: 'API Reference Guide',
          excerpt: 'Complete API documentation for all Zion Tech Group services.',
          version: 'v2.1',
          updated: '2025-01-12',
          featured: true
        },
        {
          title: 'Implementation Guide',
          excerpt: 'Step-by-step guide to implementing our solutions.',
          version: 'v1.8',
          updated: '2025-01-08',
          featured: false
        }
      ]
    },
    {
      title: 'FAQ & Support',
      icon: HelpCircle,
      color: 'from-slate-500 to-gray-500',
      description: 'Get help and answers to common questions',
      featured: false,
      items: [
        {
          title: 'Getting Started Guide',
          excerpt: 'Quick start guide for new customers.',
          category: 'Onboarding',
          featured: true
        },
        {
          title: 'Troubleshooting Common Issues',
          excerpt: 'Solutions to frequently encountered problems.',
          category: 'Support',
          featured: false
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Manufacturing Summit',
      date: '2025-02-15',
      time: '10:00 AM EST',
      type: 'Virtual Conference',
      description: 'Join industry leaders discussing AI transformation in manufacturing.',
      registration: 'Open'
    },
    {
      title: 'Quantum Computing Workshop',
      date: '2025-02-20',
      time: '2:00 PM EST',
      type: 'Interactive Workshop',
      description: 'Hands-on workshop exploring quantum computing applications.',
      registration: 'Limited Spots'
    },
    {
      title: 'Cybersecurity Roundtable',
      date: '2025-02-25',
      time: '11:00 AM EST',
      type: 'Panel Discussion',
      description: 'Expert panel on emerging cybersecurity challenges and solutions.',
      registration: 'Open'
    }
  ];

  const featuredResources = [
    {
      title: '2025 Technology Trends Report',
      type: 'Research Report',
      description: 'Comprehensive analysis of emerging technologies and their business impact.',
      downloadCount: '2,847',
      rating: 4.8,
      featured: true
    },
    {
      title: 'AI Implementation Roadmap',
      type: 'Guide',
      description: 'Step-by-step roadmap for successful AI implementation in your organization.',
      downloadCount: '1,923',
      rating: 4.9,
      featured: true
    },
    {
      title: 'Cybersecurity Best Practices',
      type: 'White Paper',
      description: 'Essential cybersecurity practices for modern businesses.',
      downloadCount: '3,156',
      rating: 4.7,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources & Support - Zion Tech Group"
        description="Access our comprehensive library of resources including blog insights, case studies, white papers, webinars, documentation, and support materials."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of knowledge resources, expert insights, 
              and support materials to accelerate your technology journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, guides, and insights..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Support
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Browse Blog
              </a>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and highly-rated resources to help you stay ahead of the curve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-purple-400/50 p-8 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">
                    {resource.downloadCount} downloads
                  </span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Download Resource
                  <Download className="w-4 h-4 ml-2" />
                </a>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by category.
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
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                  category.featured ? 'border-purple-400/50' : 'border-slate-700/50'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Featured Items</h4>
                  <ul className="space-y-2">
                    {category.items.filter(item => item.featured).slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Explore {category.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our upcoming webinars, workshops, and events to learn from industry experts.
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
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    event.registration === 'Open' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {event.registration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Register Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-400/30 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you find the right resources and get the most 
              out of our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Support
              </a>
              <a
                href="/faq"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                View FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
