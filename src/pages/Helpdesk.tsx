import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
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
} from 'lucide-react';

const Helpdesk = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTicket, setExpandedTicket] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'low':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'investigating':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'open':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const supportChannels = [
    {
      type: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      href: '/support/chat',
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      href: '/support/phone',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      type: 'Email Support',
      icon: Mail,
      description: 'Send us a detailed message',
      href: '/support/email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      type: 'Video Call',
      icon: Video,
      description: 'Screen share for complex issues',
      href: '/support/video',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const helpCategories = [
    {
      name: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and tutorials',
      articles: 15
    },
    {
      name: 'Account Management',
      icon: Users,
      description: 'Manage your account and settings',
      articles: 12
    },
    {
      name: 'Technical Issues',
      icon: Cpu,
      description: 'Common technical problems and solutions',
      articles: 25
    },
    {
      name: 'Security & Privacy',
      icon: Shield,
      description: 'Security features and privacy settings',
      articles: 18
    },
    {
      name: 'API & Integration',
      icon: Code,
      description: 'Developer documentation and APIs',
      articles: 22
    },
    {
      name: 'Billing & Pricing',
      icon: DollarSign,
      description: 'Billing information and pricing plans',
      articles: 10
    }
  ];

  const recentTickets = [
    {
      id: 'TKT-001',
      title: 'Login authentication issue',
      description: 'Unable to log in with correct credentials',
      priority: 'high',
      status: 'open',
      category: 'Technical Issues',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 'TKT-002',
      title: 'API rate limiting questions',
      description: 'Need clarification on API usage limits',
      priority: 'medium',
      status: 'investigating',
      category: 'API & Integration',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-15'
    },
    {
      id: 'TKT-003',
      title: 'Feature request: Dark mode',
      description: 'Would like to see dark mode option added',
      priority: 'low',
      status: 'open',
      category: 'Feature Requests',
      createdAt: '2024-01-13',
      updatedAt: '2024-01-13'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Help Desk
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get technical support, find solutions to common issues, and access
              our comprehensive help resources
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Multiple ways to get in touch with our support team for personalized
            assistance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.type}
                className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Link to={channel.href} className="block">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {channel.type}
                  </h3>
                  <p className="text-gray-400 text-sm">{channel.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Help Categories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse our organized help articles by category to quickly find
            the information you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.articles} articles</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <Link
                  to={`/help/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Browse Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Support Tickets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Recent Support Tickets</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track the status of your recent support requests and get updates
            on ongoing issues
          </p>
        </div>
        <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden">
          {recentTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border-b border-slate-700/30 last:border-b-0 p-6 hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-mono text-gray-400">{ticket.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{ticket.updatedAt}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{ticket.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{ticket.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{ticket.category}</span>
                <Link
                  to={`/support/ticket/${ticket.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
            Our support team is here to help you succeed. Don't hesitate to reach out
            for personalized assistance with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/support/chat"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Live Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;