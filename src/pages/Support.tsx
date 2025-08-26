import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

export default function Support() {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our AI and technology solutions are designed to be industry-agnostic and can be customized for any sector.'
      },
      {
        question: 'Do you offer remote support?',
        answer: 'Yes, we provide comprehensive remote support for all our services. Our team can assist you from anywhere in the world, ensuring you get the help you need regardless of your location.'
      }
    ],
    technical: [
      {
        question: 'What AI technologies do you use?',
        answer: 'We utilize cutting-edge AI technologies including machine learning, natural language processing, computer vision, and autonomous systems. Our solutions are built on the latest frameworks and are continuously updated with the newest advancements.'
      },
      {
        question: 'How secure are your solutions?',
        answer: 'Security is our top priority. All our solutions include enterprise-grade security features, SOC2 compliance, and regular security audits. We follow industry best practices and maintain multiple security certifications.'
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team will assess your current infrastructure and ensure our solutions work perfectly with your existing technology stack.'
      }
    ],
    billing: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with our services within the first 30 days, we\'ll work to resolve any issues or provide a full refund.'
      },
      {
        question: 'Can I change my plan mid-contract?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll prorate any billing adjustments and ensure a smooth transition between plans.'
      }
    ],
    compliance: [
      {
        question: 'What compliance standards do you meet?',
        answer: 'We maintain SOC2 Type II, ISO 27001, and GDPR compliance. Our solutions are designed to meet the highest security and privacy standards required by regulated industries.'
      },
      {
        question: 'Do you provide compliance documentation?',
        answer: 'Yes, we provide comprehensive compliance documentation including audit reports, security assessments, and compliance certificates. This documentation can be shared with your auditors and stakeholders.'
      },
      {
        question: 'How do you handle data privacy?',
        answer: 'We follow strict data privacy protocols and are fully GDPR compliant. All data is encrypted, access is strictly controlled, and we never share your data with third parties without explicit consent.'
      }
    ]
  };

  const supportChannels = [
    {
      name: '24/7 Email Support',
      description: 'Get help anytime via email',
      icon: '📧',
      response: 'Within 2 hours',
      link: '/contact'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: '📞',
      response: 'Within 15 minutes',
      link: '/contact'
    },
    {
      name: 'Live Chat',
      description: 'Real-time assistance',
      icon: '💬',
      response: 'Instant',
      link: '/contact'
    },
    {
      name: 'Knowledge Base',
      description: 'Self-service resources',
      icon: '📚',
      response: 'Always available',
      link: '/docs'
    }
  ];

  const supportChannels = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to implementing our solutions',
      icon: '🚀',
      link: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: '🔌',
      link: '/docs/api'
    },
    {
      title: 'Best Practices',
      description: 'Industry best practices and recommendations',
      icon: '⭐',
      link: '/docs/best-practices'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual guides and walkthroughs',
      icon: '🎥',
      link: '/tutorials'
    },
    {
      title: 'Case Studies',
      description: 'Real-world implementation examples',
      icon: '📊',
      link: '/case-studies'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: '👥',
      link: '/community'
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    }
  };

<<<<<<< HEAD
  const helpResources = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to get you up and running quickly.',
      type: 'guide',
      category: 'onboarding',
      downloads: 2500,
      rating: 4.8,
      icon: BookOpen
    },
    {
      id: 2,
      title: 'API Documentation',
      description: 'Comprehensive API reference and examples.',
      type: 'documentation',
      category: 'technical',
      downloads: 1800,
      rating: 4.7,
      icon: Code
    },
    {
      id: 3,
      title: 'Video Tutorials',
      description: 'Step-by-step video tutorials for common tasks.',
      type: 'video',
      category: 'training',
      views: 12000,
      rating: 4.6,
      icon: Video
    },
    {
      id: 4,
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions.',
      type: 'guide',
      category: 'technical',
      downloads: 3200,
      rating: 4.5,
      icon: HelpCircle
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
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

  const filteredIssues = commonIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || issue.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Easy';
      case 'medium': return 'Medium';
      case 'hard': return 'Hard';
      default: return 'Unknown';
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
            Support Center
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We're Here to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Help
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get the support you need to succeed with our AI and technology solutions. 
            Our expert team is available 24/7 to help you maximize the value of our services.
          </p>
        </section>

        {/* Support Channels */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get the support you need, when you need it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="text-blue-400 text-sm font-medium mb-4">Response: {channel.response}</div>
                <Link
                  to={channel.link}
                  className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-600/30 transition-all duration-300"
                >
                  Get Help
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and solutions
            </p>
          </div>
          
          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* FAQ Content */}
          <div className="space-y-6">
            {faqCategories[activeCategory as keyof typeof faqCategories].map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive library of guides, documentation, and learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <Link
                  to={resource.link}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Access Resource
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-xl border border-blue-400/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or issues. 
                Don't hesitate to reach out - we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Call Now: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours & Response Times */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Support Availability</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Know when to expect a response and plan your support requests accordingly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Response Times</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Critical Issues: 1 hour</li>
                <li>High Priority: 4 hours</li>
                <li>Normal Priority: 24 hours</li>
                <li>Low Priority: 48 hours</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Support</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>24/7 Email Support</li>
                <li>Phone: 9 AM - 6 PM EST</li>
                <li>Live Chat: 24/7</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-3">Contact Methods</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Email: support@ziontechgroup.com</li>
                <li>Phone: (302) 464-0950</li>
                <li>Live Chat: Available on site</li>
                <li>Emergency: +1 (302) 464-0950</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Submit Support Ticket
              </Link>
              <Link
                to="/docs"
                className="border-2 border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Browse Documentation
              </Link>
              <Link
                to="/tutorials"
                className="border-2 border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Watch Tutorials
              </Link>
              <Link
                to="/community"
                className="border-2 border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Join Community
              </Link>
            </div>
          </div>
        </section>
      </div>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
    </div>
  );
};

export default Support;