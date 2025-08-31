import React, { useState } from 'react.ts';
import { motion             } from 'framer-motion.ts';
import { Link             } from 'react-router-dom.ts';
import { HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Zap, 
  Shield, 
  Settings, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Globe,
  Target,
  TrendingUp,
  Ticket,
  Headphones,
  Monitor,
  Smartphone,
  Server,
  Database,
  Network,
  Cpu,
  Atom,
  Leaf,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  DollarSign
            } from 'lucide-react.ts';

export default function Helpdesk(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTicket, setExpandedTicket] = useState<any>(null);

  const supportCategories = [
    { id: 'all', name: 'All Issues', icon: HelpCircle, color: 'from-blue-500 to-cyan-500' },
    { id: 'technical', name: 'Technical Issues', icon: Monitor, color: 'from-purple-500 to-pink-500' },
    { id: 'account', name: 'Account & Billing', icon: Settings, color: 'from-green-500 to-emerald-500' },
    { id: 'product', name: 'Product Support', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'integration', name: 'Integration Help', icon: Zap, color: 'from-indigo-500 to-purple-500' },
    { id: 'security', name: 'Security Issues', icon: Shield, color: 'from-red-500 to-orange-500' }
  ];

  const commonIssues = [
    {
      id: 'login-issue',
      title: 'Unable to log in to my account',
      category: 'account',
      priority: 'high',
      description: 'I\'m getting an error when trying to log in to my account. The system says my credentials are invalid.',
      solution: 'Try resetting your password using the "Forgot Password" link. If the issue persists, contact our support team.',
      tags: ['login', 'authentication', 'password'],
      status: 'resolved',
      icon: Lock
    },
    {
      id: 'api-error',
      title: 'API integration errors',
      category: 'integration',
      priority: 'medium',
      description: 'Our API calls are returning 500 errors and we can\'t figure out what\'s wrong.',
      solution: 'Check your API key and ensure you\'re using the correct endpoint. Verify your request format matches our documentation.',
      tags: ['api', 'integration', 'error'],
      status: 'open',
      icon: Code
    },
    {
      id: 'performance-slow',
      title: 'Application running very slow',
      category: 'technical',
      priority: 'medium',
      description: 'The application has become extremely slow and is affecting our productivity.',
      solution: 'Clear your browser cache and cookies. Check your internet connection. If the issue persists, it may be a system-wide issue.',
      tags: ['performance', 'speed', 'browser'],
      status: 'investigating',
      icon: Zap
    },
    {
      id: 'data-sync',
      title: 'Data not syncing between devices',
      category: 'technical',
      priority: 'low',
      description: 'Changes made on one device are not appearing on other devices.',
      solution: 'Ensure all devices are connected to the internet. Try refreshing the application. Check if you\'re logged into the same account.',
      tags: ['sync', 'data', 'devices'],
      status: 'resolved',
      icon: Database
    },
    {
      id: 'billing-question',
      title: 'Billing and subscription questions',
      category: 'account',
      priority: 'low',
      description: 'I have questions about my current billing plan and want to understand the charges.',
      solution: 'Review your billing history in your account settings. Contact our billing team for detailed explanations of charges.',
      tags: ['billing', 'subscription', 'charges'],
      status: 'resolved',
      icon: DollarSign
    },
    {
      id: 'security-concern',
      title: 'Security and privacy concerns',
      category: 'security',
      priority: 'high',
      description: 'I\'m concerned about the security of our data and want to understand our security measures.',
      solution: 'We implement enterprise-grade security including encryption, regular audits, and compliance with industry standards.',
      tags: ['security', 'privacy', 'compliance'],
      status: 'resolved',
      icon: Shield
    }
  ];

  const supportChannels = [
    {
      type: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      priority: 'high',
      href: '/support/chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      priority: 'high',
      href: '/support/phone',
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'Email Support',
      icon: Mail,
      description: 'Send us detailed questions',
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'medium',
      href: '/support/email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Support Tickets',
      icon: Ticket,
      description: 'Submit detailed support requests',
      availability: '24/7',
      responseTime: '< 24 hours',
      priority: 'medium',
      href: '/support/tickets',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickSolutions = [
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      articles: '500+ articles',
      href: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      articles: '100+ tutorials',
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      articles: '10,000+ members',
      href: '/community',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'FAQ',
      description: 'Frequently asked questions',
      articles: '200+ FAQs',
      href: '/faq',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const systemStatus = [
    { service: 'AI Services', status: 'operational', icon: Brain, color: 'green' },
    { service: 'Cloud Infrastructure', status: 'operational', icon: Cloud, color: 'green' },
    { service: 'Security Systems', status: 'operational', icon: Shield, color: 'green' },
    { service: 'Data Analytics', status: 'operational', icon: TrendingUp, color: 'green' },
    { service: 'API Services', status: 'operational', icon: Globe, color: 'green' },
    { service: 'Support Portal', status: 'operational', icon: HelpCircle, color: 'green' }
  ];

  const filteredIssues = selectedCategory === 'all' 
    ? commonIssues: anyanyanyanyanyanyanyanyanyanyanyanycommonIssues.filter(issue             => issue.category === selectedCategory);

  const handleSearch = (e: anyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)             => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const getPriorityColor = (priority: anyanyanyanyanyanyanyanyanyanyanyanystring)             => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusColor = (status: anyanyanyanyanyanyanyanyanyanyanyanystring)             => {
    switch (status) {
      case 'resolved': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'investigating': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'open': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Help Desk
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get technical support, find solutions to common issues, and access our comprehensive help resources
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container-responsive py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, common issues, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Search
            </button>
          </form>
        </motion.div>
      </div>

      {/* Support Channels */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Multiple ways to get in touch with our support team for personalized assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index)             => (
            <motion.div
              key={channel.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
            >
              <Link to={channel.href} className="block">
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.type}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Zap className="w-4 h-4 mr-2" />
                    {channel.responseTime}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Help
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Solutions */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Quick Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions and learn how to use our products effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
          {quickSolutions.map((solution, index)             => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
            >
              <Link to={solution.href} className="block">
                <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mb-4`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                
                <div className="text-sm text-cyan-400 mb-4 font-medium">
                  {solution.articles}
                </div>
                
                <button className="w-full px-4 py-2 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
                  Explore
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">System Status</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check the current status of all our services and systems
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
          {systemStatus.map((service, index)             => (
            <motion.div
              key={service.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 bg-${service.color}-400 rounded-full`}></div>
                  <span className={`text-sm text-${service.color}-400 font-medium capitalize`}>
                    {service.status}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{service.service}</h3>
              <p className="text-sm text-gray-400 mt-2">All systems operational</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Issues */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Common Issues & Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find quick answers to frequently asked questions and common problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {supportCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-slate-700/50 border-cyan-400/50 text-cyan-400'
                  : 'bg-slate-800/30 border-slate-700/30 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredIssues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <issue.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{issue.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(issue.priority)}`}>
                          {issue.priority} Priority
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(issue.status)}`}>
                          {issue.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedTicket(expandedTicket === issue.id ? null : issue.id)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {expandedTicket === issue.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-gray-300 mb-4">{issue.description}</p>

                {expandedTicket === issue.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/30 pt-4"
                  >
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{issue.solution}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {issue.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues. 
            Don't hesitate to reach out - we're here to help you succeed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/support/tickets"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Submit Ticket
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}