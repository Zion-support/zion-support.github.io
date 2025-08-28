import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Filter, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Copy, 
  CheckCircle,
  Clock,
  User,
  Star,
  Bookmark,
  Share2,
  ChevronRight,
  ChevronDown,
  Terminal,
  Database,
  Code2,
  Cpu,
  Shield,
  Cloud,
  Brain,
  Zap,
  Globe,
  Settings,
  Play,
  GitBranch,
  Package,
  Server,
  Lock,
  Key,
  Database as DatabaseIcon,
  Network,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All', count: 0, active: true },
    { id: 'getting-started', name: 'Getting Started', count: 8, active: false },
    { id: 'api', name: 'API Reference', count: 12, active: false },
    { id: 'sdks', name: 'SDKs & Libraries', count: 6, active: false },
    { id: 'tutorials', name: 'Tutorials', count: 15, active: false },
    { id: 'examples', count: 10, active: false },
    { id: 'deployment', name: 'Deployment', count: 8, active: false },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 5, active: false }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in under 10 minutes',
          difficulty: 'Beginner',
          readTime: '5 min',
          featured: true,
          path: '/docs/getting-started/quick-start'
        },
        {
          title: 'Installation & Setup',
          description: 'Complete installation guide for all platforms and environments',
          difficulty: 'Beginner',
          readTime: '15 min',
          featured: false,
          path: '/docs/getting-started/installation'
        },
        {
          title: 'First Project',
          description: 'Create your first AI-powered application step by step',
          difficulty: 'Beginner',
          readTime: '20 min',
          featured: true,
          path: '/docs/getting-started/first-project'
        },
        {
          title: 'Authentication',
          description: 'Set up secure authentication for your applications',
          difficulty: 'Intermediate',
          readTime: '12 min',
          featured: false,
          path: '/docs/getting-started/authentication'
        }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        {
          title: 'REST API Overview',
          description: 'Complete REST API reference with examples and best practices',
          difficulty: 'Intermediate',
          readTime: '20 min',
          featured: true,
          path: '/docs/api/rest-overview'
        },
        {
          title: 'Authentication & Authorization',
          description: 'Learn about API keys, OAuth, and security best practices',
          difficulty: 'Intermediate',
          readTime: '15 min',
          featured: false,
          path: '/docs/api/authentication'
        },
        {
          title: 'Rate Limiting',
          description: 'Understanding API rate limits and optimization strategies',
          difficulty: 'Advanced',
          readTime: '10 min',
          featured: false,
          path: '/docs/api/rate-limiting'
        }
      ]
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'JavaScript/Node.js SDK',
          description: 'Complete guide to using our JavaScript SDK',
          difficulty: 'Intermediate',
          readTime: '25 min',
          featured: true,
          path: '/docs/sdks/javascript'
        },
        {
          title: 'Python SDK',
          description: 'Python SDK installation and usage examples',
          difficulty: 'Intermediate',
          readTime: '20 min',
          featured: false,
          path: '/docs/sdks/python'
        },
        {
          title: 'Mobile SDKs',
          description: 'iOS and Android SDK integration guides',
          difficulty: 'Advanced',
          readTime: '30 min',
          featured: false,
          path: '/docs/sdks/mobile'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      articles: [
        {
          title: 'Building Your First AI App',
          description: 'Step-by-step tutorial for creating an AI-powered application',
          difficulty: 'Beginner',
          readTime: '45 min',
          featured: true,
          path: '/docs/tutorials/first-ai-app'
        },
        {
          title: 'Real-time Data Processing',
          description: 'Learn to process streaming data with our services',
          difficulty: 'Advanced',
          readTime: '60 min',
          featured: false,
          path: '/docs/tutorials/real-time-processing'
        },
        {
          title: 'Deploying to Production',
          description: 'Production deployment strategies and best practices',
          difficulty: 'Advanced',
          readTime: '40 min',
          featured: false,
          path: '/docs/tutorials/production-deployment'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        {
          title: 'Docker Deployment',
          description: 'Containerized deployment with Docker',
          difficulty: 'Intermediate',
          readTime: '25 min',
          featured: true,
          path: '/docs/deployment/docker'
        },
        {
          title: 'Kubernetes Setup',
          description: 'Scalable deployment with Kubernetes',
          difficulty: 'Advanced',
          readTime: '50 min',
          featured: false,
          path: '/docs/deployment/kubernetes'
        },
        {
          title: 'CI/CD Pipeline',
          description: 'Automated deployment with GitHub Actions',
          difficulty: 'Advanced',
          readTime: '35 min',
          featured: false,
          path: '/docs/deployment/ci-cd'
        }
      ]
    }
  ];

  const allArticles = documentationSections.flatMap(section => section.articles);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredArticles = searchQuery 
    ? allArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allArticles;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, API references, tutorials, and guides for Zion Tech Group services and APIs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Developer Resources
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Developer Guides
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, integrate, and deploy with Zion Tech Group services. 
              From quick start guides to advanced API references.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>{allArticles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-5 h-5" />
                <span>Multiple Languages</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Always Updated</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-400/20 border-blue-400/40 text-blue-400'
                      : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50 hover:border-blue-400/30'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="container-responsive">
          {searchQuery ? (
            // Search Results
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  Found {filteredArticles.length} articles
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <motion.div
                    key={article.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-blue-400 text-xs font-medium rounded-full">
                            {article.difficulty}
                          </span>
                          <span className="text-sm text-gray-500">
                            {article.readTime}
                          </span>
                          {article.featured && (
                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-400/30">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition-all duration-200">
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            // Documentation Sections
            <div className="space-y-8">
              {documentationSections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-slate-700/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {section.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {section.articles.length} articles
                          </p>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          expandedSections.includes(section.id) ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-700/30"
                    >
                      <div className="p-6 space-y-4">
                        {section.articles.map((article) => (
                          <div
                            key={article.path}
                            className="flex items-center justify-between p-4 bg-slate-700/20 rounded-lg hover:bg-slate-700/30 transition-all duration-200"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block px-2 py-1 bg-slate-600/50 text-blue-400 text-xs font-medium rounded">
                                  {article.difficulty}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {article.readTime}
                                </span>
                                {article.featured && (
                                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded border border-blue-400/30">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              <h4 className="text-lg font-medium text-white mb-1">
                                {article.title}
                              </h4>
                              
                              <p className="text-gray-400 text-sm">
                                {article.description}
                              </p>
                            </div>
                            
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition-all duration-200">
                              <span>Read</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Developer Support Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you succeed. 
              Get expert guidance, code reviews, and implementation support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Developer Support
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                Join Developer Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
