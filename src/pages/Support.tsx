import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ticket, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users, 
  Search,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Filter,
  Calendar
} from 'lucide-react';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const supportTickets = [
    {
      id: "TICKET-001",
      title: "API Integration Issue",
      status: "open",
      priority: "high",
      category: "Technical",
      assignedTo: "Support Team",
      createdAt: "2025-01-20T10:30:00Z",
      lastUpdated: "2025-01-20T15:45:00Z",
      description: "Experiencing authentication errors when integrating with the REST API"
    },
    {
      id: "TICKET-002",
      title: "Billing Question",
      status: "in-progress",
      priority: "medium",
      category: "Billing",
      assignedTo: "Billing Team",
      createdAt: "2025-01-19T14:20:00Z",
      lastUpdated: "2025-01-20T09:15:00Z",
      description: "Need clarification on monthly subscription charges"
    },
    {
      id: "TICKET-003",
      title: "Feature Request",
      status: "closed",
      priority: "low",
      category: "Feature Request",
      assignedTo: "Product Team",
      createdAt: "2025-01-15T11:00:00Z",
      lastUpdated: "2025-01-18T16:30:00Z",
      description: "Request for additional export formats in the dashboard"
    }
  ];

  const knowledgeBase = [
    {
      title: "Getting Started Guide",
      category: "Onboarding",
      description: "Complete guide to setting up your account and first project",
      readTime: "5 min read",
      tags: ["beginner", "setup", "onboarding"]
    },
    {
      title: "API Authentication",
      category: "Technical",
      description: "Step-by-step guide to API key management and authentication",
      readTime: "8 min read",
      tags: ["api", "authentication", "security"]
    },
    {
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      description: "Solutions to frequently encountered problems and errors",
      readTime: "12 min read",
      tags: ["troubleshooting", "errors", "solutions"]
    },
    {
      title: "Best Practices",
      category: "Guidelines",
      description: "Recommended practices for optimal performance and security",
      readTime: "10 min read",
      tags: ["best-practices", "performance", "security"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'closed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'closed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredTickets = supportTickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Portal
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources, ticket system, and expert assistance.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Ticket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Create Ticket</h3>
              <p className="text-gray-300 text-sm mb-4">Submit a new support request</p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                <Plus className="w-4 h-4 inline mr-2" />
                New Ticket
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Search className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
              <p className="text-gray-300 text-sm mb-4">Find answers to common questions</p>
              <Link to="/help" className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium">
                Browse Articles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-300 text-sm mb-4">Speak with our experts</p>
              <a href="tel:+13024640950" className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-300 text-sm mb-4">Send us a detailed message</p>
              <a href="mailto:support@ziontechgroup.com" className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium">
                support@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b border-white/20">
              {[
                { id: 'overview', label: 'Overview', icon: FileText },
                { id: 'tickets', label: 'My Tickets', icon: Ticket },
                { id: 'knowledge', label: 'Knowledge Base', icon: FileText },
                { id: 'community', label: 'Community', icon: Users }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white border-b-2 border-blue-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Support Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{supportTickets.length}</div>
                  <div className="text-gray-400">Total Tickets</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {supportTickets.filter(t => t.status === 'open').length}
                  </div>
                  <div className="text-gray-400">Open Tickets</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {supportTickets.filter(t => t.status === 'closed').length}
                  </div>
                  <div className="text-gray-400">Resolved</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="space-y-4">
                    {supportTickets.slice(0, 3).map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          {getStatusIcon(ticket.status)}
                          <div>
                            <div className="font-medium">{ticket.title}</div>
                            <div className="text-sm text-gray-400">{ticket.category}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{formatDate(ticket.createdAt)}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tickets' && (
            <div>
              {/* Search and Filter */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    <Plus className="w-4 h-4 inline mr-2" />
                    New Ticket
                  </button>
                </div>
              </div>

              {/* Tickets List */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Ticket</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Priority</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Category</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Assigned To</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Last Updated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {filteredTickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-white">{ticket.title}</div>
                              <div className="text-sm text-gray-400">{ticket.id}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">{ticket.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{ticket.assignedTo}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{formatDate(ticket.lastUpdated)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'knowledge' && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Knowledge Base</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {knowledgeBase.map((article, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-400">{article.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                    <p className="text-gray-300 mb-4">{article.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to="/help" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm">
                      Read Article
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Community Support</h3>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">Join Our Community</h4>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Connect with other users, share experiences, and get help from the community. Our community forum is a great place to find solutions and best practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://community.ziontechgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Visit Community Forum
                  </a>
                  <a
                    href="mailto:community@ziontechgroup.com"
                    className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
                  >
                    Contact Community Team
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Support;