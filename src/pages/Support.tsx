import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Headphones,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  Plus,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Download,
  FileText,
  Video,
  BookOpen,
  Users,
  Globe,
  MapPin,
  Calendar,
  User,
  Building,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  ArrowRight,
  Ticket,
  Settings,
  HelpCircle,
  MessageSquare,
  VideoIcon,
  FileCode,
  Terminal,
  Database,
  Shield as ShieldIcon,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Clock3,
  Eye,
  MessageCircle as MessageCircleIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Support() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['general']);

  const supportCategories = [
    { id: 'all', name: 'All Support', count: 28, color: 'from-cyan-500 to-blue-600' },
    { id: 'general', name: 'General Support', count: 8, color: 'from-blue-500 to-cyan-600' },
    { id: 'technical', name: 'Technical Issues', count: 12, color: 'from-purple-500 to-pink-600' },
    { id: 'billing', name: 'Billing & Account', count: 4, color: 'from-green-500 to-emerald-600' },
    { id: 'api', name: 'API Support', count: 4, color: 'from-orange-500 to-red-600' }
  ];

  const supportChannels = [
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Get instant help from our support team via live chat',
      availability: '24/7',
      responseTime: '< 2 minutes',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      status: 'online',
      agents: 12
    },
    {
      id: 'phone-support',
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri, 8AM-8PM PST',
      responseTime: 'Immediate',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      featured: false,
      status: 'online',
      agents: 8
    },
    {
      id: 'email-support',
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      availability: '24/7',
      responseTime: '< 4 hours',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      featured: false,
      status: 'online',
      agents: 15
    },
    {
      id: 'video-call',
      title: 'Video Call Support',
      description: 'Screen sharing and face-to-face technical assistance',
      availability: 'Mon-Fri, 9AM-6PM PST',
      responseTime: '< 1 hour',
      icon: VideoIcon,
      color: 'from-orange-500 to-red-600',
      featured: false,
      status: 'online',
      agents: 6
    },
    {
      id: 'community-forum',
      title: 'Community Forum',
      description: 'Get help from our community of experts and users',
      availability: '24/7',
      responseTime: 'Varies',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      status: 'online',
      agents: 'Community'
    },
    {
      id: 'onsite-support',
      title: 'Onsite Support',
      description: 'Dedicated support engineers at your location',
      availability: 'By appointment',
      responseTime: '24-48 hours',
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      featured: false,
      status: 'available',
      agents: 4
    }
  ];

  const helpResources = {
    'general': [
      {
        title: 'Getting Started Guide',
        description: 'Complete setup and configuration guide for new users',
        type: 'guide',
        difficulty: 'Beginner',
        timeToRead: '15 min',
        lastUpdated: '2 days ago',
        icon: BookOpen,
        color: 'from-blue-500 to-cyan-600',
        featured: true
      },
      {
        title: 'Account Management',
        description: 'Learn how to manage your account settings and preferences',
        type: 'guide',
        difficulty: 'Beginner',
        timeToRead: '8 min',
        lastUpdated: '1 week ago',
        icon: User,
        color: 'from-green-500 to-emerald-600'
      },
      {
        title: 'Security Best Practices',
        description: 'Essential security practices to protect your account and data',
        type: 'guide',
        difficulty: 'Intermediate',
        timeToRead: '12 min',
        lastUpdated: '3 days ago',
        icon: Shield,
        color: 'from-red-500 to-orange-600'
      }
    ],
    'technical': [
      {
        title: 'Troubleshooting Common Issues',
        description: 'Step-by-step solutions for frequently encountered problems',
        type: 'troubleshooting',
        difficulty: 'Intermediate',
        timeToRead: '20 min',
        lastUpdated: '1 day ago',
        icon: Settings,
        color: 'from-purple-500 to-pink-600',
        featured: true
      },
      {
        title: 'Performance Optimization',
        description: 'Tips and techniques to improve system performance',
        type: 'guide',
        difficulty: 'Advanced',
        timeToRead: '25 min',
        lastUpdated: '2 days ago',
        icon: Zap,
        color: 'from-yellow-500 to-orange-600'
      },
      {
        title: 'Integration Guide',
        description: 'How to integrate Zion Tech Group services with your existing systems',
        type: 'guide',
        difficulty: 'Intermediate',
        timeToRead: '18 min',
        lastUpdated: '4 days ago',
        icon: Database,
        color: 'from-indigo-500 to-purple-600'
      }
    ],
    'billing': [
      {
        title: 'Billing & Payment FAQ',
        description: 'Answers to common billing and payment questions',
        type: 'faq',
        difficulty: 'Beginner',
        timeToRead: '10 min',
        lastUpdated: '1 week ago',
        icon: FileText,
        color: 'from-green-500 to-emerald-600'
      },
      {
        title: 'Subscription Management',
        description: 'How to manage your subscriptions and billing cycles',
        type: 'guide',
        difficulty: 'Beginner',
        timeToRead: '12 min',
        lastUpdated: '5 days ago',
        icon: Settings,
        color: 'from-blue-500 to-cyan-600'
      }
    ],
    'api': [
      {
        title: 'API Documentation',
        description: 'Complete API reference and integration guides',
        type: 'documentation',
        difficulty: 'Advanced',
        timeToRead: '45 min',
        lastUpdated: '1 day ago',
        icon: FileCode,
        color: 'from-purple-500 to-pink-600',
        featured: true
      },
      {
        title: 'API Error Codes',
        description: 'Reference guide for all API error codes and solutions',
        type: 'reference',
        difficulty: 'Intermediate',
        timeToRead: '15 min',
        lastUpdated: '3 days ago',
        icon: AlertCircle,
        color: 'from-red-500 to-orange-600'
      }
    ]
  };

  const recentTickets = [
    {
      id: 'TKT-2024-001',
      title: 'API Authentication Issue',
      status: 'open',
      priority: 'high',
      category: 'API Support',
      submitted: '2 hours ago',
      lastUpdate: '1 hour ago',
      assignee: 'Mike Rodriguez'
    },
    {
      id: 'TKT-2024-002',
      title: 'Dashboard Performance Slow',
      status: 'in-progress',
      priority: 'medium',
      category: 'Technical Issues',
      submitted: '4 hours ago',
      lastUpdate: '2 hours ago',
      assignee: 'Sarah Chen'
    },
    {
      id: 'TKT-2024-003',
      title: 'Billing Statement Request',
      status: 'resolved',
      priority: 'low',
      category: 'Billing & Account',
      submitted: '1 day ago',
      lastUpdate: '6 hours ago',
      assignee: 'Lisa Wang'
    },
    {
      id: 'TKT-2024-004',
      title: 'Feature Request: Enhanced Analytics',
      status: 'open',
      priority: 'medium',
      category: 'General Support',
      submitted: '2 days ago',
      lastUpdate: '1 day ago',
      assignee: 'David Kim'
    }
  ];

  const quickActions = [
    {
      title: 'Create Support Ticket',
      description: 'Submit a new support request',
      icon: Plus,
      color: 'from-blue-500 to-cyan-600',
      action: 'create-ticket'
    },
    {
      title: 'Check Ticket Status',
      description: 'Track your existing support tickets',
      icon: Eye,
      color: 'from-green-500 to-emerald-600',
      action: 'check-status'
    },
    {
      title: 'Download Resources',
      description: 'Access documentation and guides',
      icon: Download,
      color: 'from-purple-500 to-pink-600',
      action: 'download'
    },
    {
      title: 'Schedule Call',
      description: 'Book a technical consultation',
      icon: Calendar,
      color: 'from-orange-500 to-red-600',
      action: 'schedule'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online': return 'text-green-400 bg-green-400/10';
      case 'available': return 'text-blue-400 bg-blue-400/10';
      case 'offline': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return <AlertCircle className="w-4 h-4 text-orange-400" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'closed': return <CheckCircle className="w-4 h-4 text-slate-400" />;
      default: return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get expert support for Zion Tech Group services. 24/7 live chat, phone support, email support, and comprehensive help resources."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support &
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Get expert help and support for all Zion Tech Group services. We're here to help you succeed
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">< 2min</div>
                <div className="text-slate-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">45+</div>
                <div className="text-slate-400 text-sm">Support Agents</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={action.action}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-slate-400 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={channel.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  channel.featured 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {channel.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 text-sm font-medium">Recommended</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                    <p className="text-slate-400 text-sm">{channel.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Response Time:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(channel.status)}`}>
                      {channel.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Agents:</span>
                    <span className="text-white">{channel.agents}</span>
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                  Get Help Now
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Help Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Help Resources</h2>
              <p className="text-slate-400">Find answers and solutions in our comprehensive help library</p>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {supportCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
          
          {Object.entries(helpResources).map(([sectionId, resources]) => (
            <div key={sectionId} className="mb-12">
              <button
                onClick={() => toggleSection(sectionId)}
                className="flex items-center gap-3 mb-6 w-full text-left"
              >
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedSections.includes(sectionId) ? 'rotate-180' : ''
                  }`}
                />
                <h3 className="text-2xl font-bold text-white">
                  {supportCategories.find(c => c.id === sectionId)?.name}
                </h3>
                <span className="text-slate-400 text-sm">({resources.length})</span>
              </button>
              
              {expandedSections.includes(sectionId) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                        resource.featured 
                          ? 'border-green-500/50 shadow-lg shadow-green-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {resource.featured && (
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-medium">Featured</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center`}>
                          <resource.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{resource.title}</h4>
                          <p className="text-slate-400 text-sm">{resource.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 text-sm">
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
                          {resource.type}
                        </span>
                        <span className="text-slate-400">{resource.difficulty}</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.timeToRead}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Updated {resource.lastUpdated}</span>
                        <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Recent Support Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Recent Support Tickets</h2>
              <p className="text-slate-400">Track the status of your support requests</p>
            </div>
            <Link
              to="/support/tickets"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              View All Tickets
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recentTickets.map((ticket, index) => (
                  <div
                    key={ticket.id}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-white">{ticket.id}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(ticket.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-medium mb-2">{ticket.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-400 mb-3">
                      <div>
                        <span className="block text-xs text-slate-500">Category</span>
                        {ticket.category}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Assignee</span>
                        {ticket.assignee}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Submitted</span>
                        {ticket.submitted}
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500">Last Update</span>
                        {ticket.lastUpdate}
                      </div>
                    </div>
                    
                    <button className="w-full py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-green-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our support team is ready to help you resolve any issues and get the most out of our services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
              Schedule Call
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-400 text-sm">Instant support 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-slate-400 text-sm">Speak with experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-400 text-sm">Detailed assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
