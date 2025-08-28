import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Globe,
  Database,
  Server,
  Shield,
  Brain,
  Cloud,
  Cpu,
  Zap,
  Users,
  Calendar,
  Star,
  Bookmark,
  Share2,
  Copy,
  CheckCircle,
  Clock,
  Tag
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Getting Started', 'APIs', 'SDKs', 'Deployment', 'Security', 'Best Practices', 'Troubleshooting'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      guides: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          difficulty: 'Beginner',
          readTime: '10 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['Quick Start', 'Setup', 'Configuration']
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions for all platforms',
          difficulty: 'Beginner',
          readTime: '15 min',
          lastUpdated: '2024-11-28',
          featured: false,
          tags: ['Installation', 'Setup', 'Platforms']
        },
        {
          title: 'First Project Tutorial',
          description: 'Build your first AI-powered application',
          difficulty: 'Beginner',
          readTime: '25 min',
          lastUpdated: '2024-11-25',
          featured: true,
          tags: ['Tutorial', 'First Project', 'AI']
        }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      guides: [
        {
          title: 'REST API Reference',
          description: 'Complete REST API documentation with examples',
          difficulty: 'Intermediate',
          readTime: '45 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['API', 'REST', 'Reference']
        },
        {
          title: 'GraphQL API Guide',
          description: 'GraphQL API documentation and query examples',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-30',
          featured: false,
          tags: ['API', 'GraphQL', 'Queries']
        },
        {
          title: 'Webhook Integration',
          description: 'Set up webhooks for real-time notifications',
          difficulty: 'Intermediate',
          readTime: '20 min',
          lastUpdated: '2024-11-28',
          featured: false,
          tags: ['Webhooks', 'Integration', 'Real-time']
        }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for popular languages',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      guides: [
        {
          title: 'Python SDK',
          description: 'Python client library with examples',
          difficulty: 'Intermediate',
          readTime: '35 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['SDK', 'Python', 'Client Library']
        },
        {
          title: 'JavaScript SDK',
          description: 'Node.js and browser JavaScript SDK',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-11-29',
          featured: true,
          tags: ['SDK', 'JavaScript', 'Node.js']
        },
        {
          title: 'Java SDK',
          description: 'Java client library for enterprise applications',
          difficulty: 'Intermediate',
          readTime: '40 min',
          lastUpdated: '2024-11-27',
          featured: false,
          tags: ['SDK', 'Java', 'Enterprise']
        }
      ]
    },
    {
      title: 'Deployment & DevOps',
      description: 'Deployment guides and infrastructure setup',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      featured: false,
      guides: [
        {
          title: 'Docker Deployment',
          description: 'Deploy using Docker containers',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-26',
          featured: false,
          tags: ['Docker', 'Deployment', 'Containers']
        },
        {
          title: 'Kubernetes Setup',
          description: 'Deploy on Kubernetes clusters',
          difficulty: 'Advanced',
          readTime: '50 min',
          lastUpdated: '2024-11-24',
          featured: false,
          tags: ['Kubernetes', 'Deployment', 'Orchestration']
        },
        {
          title: 'CI/CD Pipeline',
          description: 'Set up continuous integration and deployment',
          difficulty: 'Advanced',
          readTime: '40 min',
          lastUpdated: '2024-11-22',
          featured: false,
          tags: ['CI/CD', 'Pipeline', 'Automation']
        }
      ]
    },
    {
      title: 'Security & Authentication',
      description: 'Security best practices and authentication setup',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      featured: true,
      guides: [
        {
          title: 'Authentication Guide',
          description: 'Set up secure authentication for your applications',
          difficulty: 'Intermediate',
          readTime: '30 min',
          lastUpdated: '2024-12-01',
          featured: true,
          tags: ['Authentication', 'Security', 'OAuth']
        },
        {
          title: 'API Security Best Practices',
          description: 'Secure your APIs with industry best practices',
          difficulty: 'Intermediate',
          readTime: '35 min',
          lastUpdated: '2024-11-29',
          featured: true,
          tags: ['Security', 'API', 'Best Practices']
        },
        {
          title: 'Data Encryption',
          description: 'Implement end-to-end encryption for sensitive data',
          difficulty: 'Advanced',
          readTime: '45 min',
          lastUpdated: '2024-11-25',
          featured: false,
          tags: ['Encryption', 'Security', 'Data Protection']
        }
      ]
    },
    {
      title: 'Best Practices',
      description: 'Recommended patterns and optimization tips',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      guides: [
        {
          title: 'Performance Optimization',
          description: 'Optimize your applications for better performance',
          difficulty: 'Advanced',
          readTime: '40 min',
          lastUpdated: '2024-11-23',
          featured: false,
          tags: ['Performance', 'Optimization', 'Best Practices']
        },
        {
          title: 'Error Handling',
          description: 'Implement robust error handling patterns',
          difficulty: 'Intermediate',
          readTime: '25 min',
          lastUpdated: '2024-11-21',
          featured: false,
          tags: ['Error Handling', 'Best Practices', 'Reliability']
        },
        {
          title: 'Monitoring & Logging',
          description: 'Set up comprehensive monitoring and logging',
          difficulty: 'Advanced',
          readTime: '35 min',
          lastUpdated: '2024-11-19',
          featured: false,
          tags: ['Monitoring', 'Logging', 'Observability']
        }
      ]
    }
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    guides: section.guides.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || section.title === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || guide.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    })
  })).filter(section => section.guides.length > 0);

  const handleCopyLink = (title: string) => {
    const url = `${window.location.origin}/docs#${title.toLowerCase().replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(url);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, SDK guides, and developer resources for Zion Tech Group services and platforms."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technical guides, API references, and developer resources. 
              Everything you need to build, deploy, and scale with Zion Tech Group services.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">SDKs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Code Examples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="container-responsive">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="mb-16"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color}`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    {section.title}
                    {section.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </h2>
                  <p className="text-gray-300 mt-2">{section.description}</p>
                </div>
              </div>

              {/* Guides Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.guides.map((guide, guideIndex) => (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (guideIndex * 0.05) }}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {guide.difficulty}
                          </span>
                          {guide.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyLink(guide.title)}
                            className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                            title="Copy link"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors" title="Bookmark">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {guide.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {guide.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {guide.lastUpdated}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Read Guide
                        </button>
                        <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {filteredSections.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                No documentation found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help with Documentation?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our developer support team is here to help. 
              Get personalized assistance and code reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Contact Support
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Request New Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
