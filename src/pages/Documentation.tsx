import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
  Github,
  Globe,
  Users,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cloud,
  Cpu,
  Database,
  Lock,
  BarChart3,
  PenTool,
  MessageCircle,
  Calendar,
  Award,
  Atom,
  Satellite,
  Leaf,
  Eye,
  Clock,
  BarChart,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Documentation: React.FC = () => {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set(['getting-started']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', href: '#', difficulty: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '#', difficulty: 'Beginner' },
        { title: 'First Project Setup', description: 'Create your first project', href: '#', difficulty: 'Beginner' },
        { title: 'Configuration Basics', description: 'Essential configuration options', href: '#', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'AI Business Intelligence', description: 'Machine learning and data science', href: '#', difficulty: 'Intermediate' },
        { title: 'AI Content Creation', description: 'Content generation and optimization', href: '#', difficulty: 'Intermediate' },
        { title: 'AI Cybersecurity', description: 'Threat detection and prevention', href: '#', difficulty: 'Advanced' },
        { title: 'AI Healthcare Analytics', description: 'Medical AI and diagnostics', href: '#', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        { title: 'Quantum AI Platform', description: 'Next-generation quantum computing', href: '#', difficulty: 'Advanced' },
        { title: 'Quantum Algorithms', description: 'Understanding quantum algorithms', href: '#', difficulty: 'Advanced' },
        { title: 'Quantum Security', description: 'Quantum-safe cryptography', href: '#', difficulty: 'Expert' }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Space Technology', description: 'Satellite and space solutions', href: '#', difficulty: 'Advanced' },
        { title: 'Neuromorphic Computing', description: 'Brain-inspired computing', href: '#', difficulty: 'Expert' },
        { title: 'Synthetic Biology', description: 'Bio-computing solutions', href: '#', difficulty: 'Expert' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      articles: [
        { title: 'REST API Overview', description: 'Complete API documentation', href: '#', difficulty: 'Intermediate' },
        { title: 'Authentication', description: 'API authentication methods', href: '#', difficulty: 'Intermediate' },
        { title: 'Rate Limiting', description: 'API usage limits and quotas', href: '#', difficulty: 'Intermediate' },
        { title: 'Error Handling', description: 'Common errors and solutions', href: '#', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Building Your First AI Model', description: 'Step-by-step AI model creation', href: '#', difficulty: 'Beginner' },
        { title: 'Data Pipeline Setup', description: 'Create efficient data workflows', href: '#', difficulty: 'Intermediate' },
        { title: 'Deployment Strategies', description: 'Production deployment guide', href: '#', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Playground', description: 'Test our APIs interactively', href: '/api-playground', icon: Code },
    { title: 'GitHub Repository', description: 'Open source code and examples', href: 'https://github.com/ziontechgroup', icon: Github },
    { title: 'Community Forum', description: 'Connect with other developers', href: '/community', icon: Users },
    { title: 'Support Center', description: 'Get help and support', href: '/support', icon: MessageCircle }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive technical documentation, API references, SDKs, and integration guides for Zion Tech Group services."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Developer Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive guides, tutorials, and API references to help you build with Zion Tech Group's cutting-edge services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View API Reference
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by technology and skill level
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-400 text-sm">{section.articles.length} articles</p>
                    </div>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6 space-y-4">
                      {section.articles.map((article, idx) => (
                        <motion.a
                          key={idx}
                          href={article.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                                {article.title}
                              </h4>
                              <p className="text-gray-300 text-sm">{article.description}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                {article.difficulty}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
