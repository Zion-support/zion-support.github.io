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
  DollarSign} from 'lucide-react.ts';

export default function Helpdesk(...args: any[]): any {
'
  const [searchQuery, setSearchQuery] = useState('');'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTicket, setExpandedTicket] = useState<any>(null);

  
  
  
  
  
  
  
    if (searchQuery.trim()) {
'
      // Implement search functionality''
      // console.log('Searching for:', searchQuery)}
  };

  '
      case 'medium':''
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';'
      case 'low':''
        return 'text-green-400 bg-green-400/20 border-green-400/30';'
      default:''
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30'}
  };

  '
      case 'investigating':''
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';'
      case 'open':''
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';'
      default:''
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30'}  };

  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      {/* Header */}""
      <div className="bg-slate-800/50 border-b border-slate-700/50">""
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.6 }}""
            className="text-center""
          >""
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">""
              <Headphones className="w-10 h-10 text-white"  />"
            </div>"            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Help Desk"
            </h1>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get technical support, find solutions to common issues, and access
              our comprehensive help resources
            </p>
          </motion.div>
        </div>
      </div>
"
      {/* Search Bar */}""
      <div className="container-responsive py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          transition={{ duration: 0.6, delay: 0.2 }}""
          className="max-w-2xl mx-auto""
        >""
          <form onSubmit={handleSearch} className="relative">""
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />"
            <input""
              type="text""              placeholder="Search for help articles, common issues, or solutions..."
              value={searchQuery}"
              onChange={e => setSearchQuery(e.target.value)}""
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />"
            <button""
              type="submit""
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Search
            </button>
          </form>
        </motion.div>
      </div>
"
      {/* Support Channels */}""
      <div className="container-responsive py-16">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>""
          <p className="text-gray-300 max-w-2xl mx-auto">
            Multiple ways to get in touch with our support team for personalized
            assistance
          </p>
        </div>"
""
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6, delay: index * 0.1 }}""
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300""
            >""
              <Link to={channel.href} className="block">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mb-4`}"
                >""
                  <channel.icon className="w-6 h-6 text-white" />"
                </div>""
                <h3 className="text-lg font-semibold text-white mb-2">
                  {channel.type}"
                </h3>""
                <p className="text-gray-400 text-sm mb-4">
                  {channel.description}
                </p>"
""
                <div className="space-y-2 mb-4 text-sm">""
                  <div className="flex items-center text-gray-400">""
                    <Clock className="w-4 h-4 mr-2"  />
                    {channel.availability}"
                  </div>""
                  <div className="flex items-center text-gray-400">""
                    <Zap className="w-4 h-4 mr-2"  />                    {channel.responseTime}
                  </div>
                </div>"
""
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Help
                </button>
              </Link>
            </motion.div>) ) }
        </div>
      </div>
"
      {/* Quick Solutions */}""
      <div className="container-responsive py-16">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">
            Quick Solutions"
          </h2>""
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions and learn how to use our products
            effectively
          </p>
        </div>"
""
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
          {quickSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6, delay: index * 0.1 }}""
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300""
            >""
              <Link to={solution.href} className="block">`
                <div``
                  className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mb-4`}"
                >""
                  <solution.icon className="w-6 h-6 text-white" />"
                </div>""
                <h3 className="text-lg font-semibold text-white mb-2">
                  {solution.title}"
                </h3>""
                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>"
""
                <div className="text-sm text-cyan-400 mb-4 font-medium">
                  {solution.articles}
                </div>"
""
                <button className="w-full px-4 py-2 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
                  Explore
                </button>
              </Link>
            </motion.div>) ) }
        </div>
      </div>
"
      {/* System Status */}""
      <div className="container-responsive py-16">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">System Status</h2>""
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check the current status of all our services and systems
          </p>
        </div>"
""
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6">
          {systemStatus.map((service, index) => (
            <motion.div
              key={service.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6, delay: index * 0.1 }}""
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6""
            >""
              <div className="flex items-center justify-between mb-4">""
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">""
                  <service.icon className="w-5 h-5 text-white" />"
                </div>""
                <div className="flex items-center gap-2">`
                  <div``
                    className={`w-3 h-3 bg-${service.color}-400 rounded-full`}
                  ></div>`
                  <span``
                    className={`text-sm text-${service.color}-400 font-medium capitalize`}
                  >
                    {service.status}
                  </span>
                </div>"
              </div>""
              <h3 className="text-lg font-semibold text-white">
                {service.service}"
              </h3>""
              <p className="text-sm text-gray-400 mt-2">
                All systems operational
              </p>
            </motion.div>
          ))}
        </div>
      </div>
"
      {/* Common Issues */}""
      <div className="container-responsive py-16">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">
            Common Issues & Solutions"
          </h2>""
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find quick answers to frequently asked questions and common problems
          </p>
        </div>
"
        {/* Category Filter */}""
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {supportCategories.map(category => (
            <button
              key={category.id}`
              onClick={() => setSelectedCategory(category.id)}``
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
'
                selectedCategory === category.id''
                  ? 'bg-slate-700/50 border-cyan-400/50 text-cyan-400'''`
                  : 'bg-slate-800/30 border-slate-700/30 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'``
              }`}"
            >""
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>) ) }
        </div>"
""
        <div className="space-y-4">
          {filteredIssues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6, delay: index * 0.1 }}""
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl overflow-hidden""
            >""
              <div className="p-6">""
                <div className="flex items-start justify-between mb-4">""
                  <div className="flex items-center gap-3">""
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">""
                      <issue.icon className="w-5 h-5 text-white" />
                    </div>"
                    <div>""
                      <h3 className="text-lg font-semibold text-white">
                        {issue.title}"
                      </h3>""
                      <div className="flex items-center gap-2 mt-1">`
                        <span``
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(issue.priority)}`}
                        >
                          {issue.priority} Priority
                        </span>`
                        <span``
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(issue.status)}`}
                        >
                          {issue.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedTicket()
                        expandedTicket === issue.id ? null : issue.id
                      )"
                    }""
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >"
                    {expandedTicket === issue.id ? (""
                      <ChevronUp className="w-5 h-5"  />"
                    ) : (""
                      <ChevronDown className="w-5 h-5"  />
                    )}                  </button>
                </div>"
""
                <p className="text-gray-300 mb-4">{issue.description}</p>

                {expandedTicket === issue.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}'
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}"
                    transition={{ duration: 0.3 }}""
                    className="border-t border-slate-700/30 pt-4""
                  >""
                    <div className="mb-4">""
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Solution:"
                      </h4>""
                      <p className="text-gray-300 text-sm">{issue.solution}</p>
                    </div>"
""
                    <div className="flex flex-wrap gap-2">
                      {issue.tags.map((tag, tagIndex) => (
                        <span"
                          key={tagIndex}""
                          className="inline-flex items-center px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                        >
                          {tag}
                        </span>) ) }
                    </div>
                  </motion.div>) }
              </div>
            </motion.div>) ) }
        </div>
      </div>
"
      {/* Contact Support Section */}""
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}"
          viewport={{ once: true }}""
          className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center""
        >""
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?"
          </h2>""
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">'
            Our support team is ready to assist you with any questions or''
            issues. Don't hesitate to reach out - we're here to help you
            succeed.
          </p>"
""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">""
            <div className="flex items-center justify-center gap-3 text-gray-300">""
              <Phone className="w-5 h-5 text-cyan-400"  />
              <span>+1 302 464 0950</span>"
            </div>""
            <div className="flex items-center justify-center gap-3 text-gray-300">""
              <Mail className="w-5 h-5 text-cyan-400"  />
              <span>kleber@ziontechgroup.com</span>"
            </div>""
            <div className="flex items-center justify-center gap-3 text-gray-300">""
              <Clock className="w-5 h-5 text-cyan-400"  />              <span>24/7 Support</span>
            </div>
          </div>"
""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link""
              to="/contact""
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >"
              Contact Support""
              <ArrowRight className="ml-2 h-5 w-5"  />            </Link>"
            <Link""
              to="/support/tickets""
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                Training Resources
              </h3>
              <p className="text-gray-300 text-sm">
                Access tutorials, documentation, and training materials
              </p>
            </Link>

            <Link
              to="/status"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                System Status
              </h3>
              <p className="text-gray-300 text-sm">
                Check real-time system status and service availability
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Support Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-700 bg-gray-800 hover:border-cyan-500/50'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Solutions</h2>
          <div className="space-y-6">
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold">{issue.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(issue.priority)}`}>
                        {issue.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{issue.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {issue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-cyan-400 mb-2">Solution:</h4>
                  <p className="text-gray-300">{issue.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Your Support Tickets</h2>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <Ticket className="w-4 h-4 mr-2" />
              New Ticket
            </Link>
          </div>
          
          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold">{ticket.title}</h3>
                    <span className="text-sm text-gray-400">#{ticket.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setExpandedTicket(expandedTicket === ticket.id ? null : ticket.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {expandedTicket === ticket.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
                  <div>
                    <span className="font-medium text-gray-300">Category:</span> {ticket.category}
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Priority:</span> {ticket.priority}
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Created:</span> {new Date(ticket.createdAt).toLocaleDateString()}
                  </div>
                </div>
                
                {expandedTicket === ticket.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 mb-4">{ticket.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Last updated: {new Date(ticket.lastUpdated).toLocaleDateString()}
                      </span>
                      <Link
                        to={`/contact?ticket=${ticket.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Update Ticket
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )}'"`
'"`'"`
