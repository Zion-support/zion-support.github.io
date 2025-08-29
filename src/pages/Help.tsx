import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen, 
  Video, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cloud,
  Cpu,
  Globe,
  Heart,
  Target,
  Lightbulb,
  Code,
  Database,
  Lock,
  BarChart3,
  PenTool,
  Calendar,
  Award,
  Atom,
  Satellite,
  Leaf,
  Eye,
  BarChart,
  ChevronDown,
  ChevronRight,
  FileText,
  Github,
  ExternalLink
} from 'lucide-react';

const Help: React.FC = () => {
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

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'How to get started with Zion Tech Group services', href: '#', difficulty: 'Beginner' },
        { title: 'Setting up your first project', href: '#', difficulty: 'Beginner' },
        { title: 'Understanding our service offerings', href: '#', difficulty: 'Beginner' },
        { title: 'Account setup and configuration', href: '#', difficulty: 'Beginner' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        { title: 'How to use AI Business Intelligence', href: '#', difficulty: 'Intermediate' },
        { title: 'Setting up AI Content Creation', href: '#', difficulty: 'Intermediate' },
        { title: 'Configuring AI Cybersecurity', href: '#', difficulty: 'Advanced' },
        { title: 'AI Healthcare Analytics setup', href: '#', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Understanding our pricing structure', href: '#', difficulty: 'Beginner' },
        { title: 'How to upgrade your plan', href: '#', difficulty: 'Beginner' },
        { title: 'Billing cycle and payment methods', href: '#', difficulty: 'Beginner' },
        { title: 'Requesting custom quotes', href: '#', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      articles: [
        { title: 'Common technical issues and solutions', href: '#', difficulty: 'Intermediate' },
        { title: 'API integration troubleshooting', href: '#', difficulty: 'Advanced' },
        { title: 'Performance optimization tips', href: '#', difficulty: 'Advanced' },
        { title: 'Security best practices', href: '#', difficulty: 'Advanced' }
      ]
    }
  ];

  const quickActions = [
    { title: 'Contact Support', description: 'Get help from our team', href: '/contact', icon: MessageCircle, color: 'from-blue-500 to-purple-500' },
    { title: 'Documentation', description: 'Browse our technical docs', href: '/docs', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
    { title: 'Community Forum', description: 'Connect with other users', href: '/community', icon: Users, color: 'from-purple-500 to-pink-500' },
    { title: 'Video Tutorials', description: 'Watch step-by-step guides', href: '/tutorials', icon: Video, color: 'from-orange-500 to-red-500' }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      availability: '24/7',
      responseTime: 'Instant'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-500',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions',
      icon: Mail,
      color: 'from-purple-500 to-pink-500',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Find answers to your questions, get technical support, and learn how to make the most of our services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and solutions..."
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
                Browse Help Articles
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-300 text-sm">{action.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers organized by topic and difficulty level
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.articles.length} articles</p>
                    </div>
                  </div>
                  {expandedSections.has(category.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSections.has(category.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6 space-y-4">
                      {category.articles.map((article, idx) => (
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

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our support team for personalized assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-gray-300 mb-6">{method.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Response: {method.responseTime}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Help
                </motion.button>
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
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert support team is ready to assist you with any questions or technical challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Support Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;