import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  Users,
  Globe,
  Building,
  Rocket,
  Brain,
  Shield,
  Cpu,
  Star,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Zap,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server,
  CreditCard
} from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Support', icon: HelpCircle, count: 45 },
    { id: 'technical', name: 'Technical Issues', icon: Cpu, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: CreditCard, count: 8 },
    { id: 'integration', name: 'Integration Help', icon: Network, count: 12 },
    { id: 'training', name: 'Training & Onboarding', icon: Users, count: 7 }
  ];

  const commonIssues = [
    {
      id: 1,
      title: 'How to reset my password?',
      description: 'Step-by-step guide to reset your account password.',
      category: 'account',
      difficulty: 'easy',
      views: 1250,
      helpful: 89,
      tags: ['Password', 'Account', 'Security']
    },
    {
      id: 2,
      title: 'API integration troubleshooting',
      description: 'Common API integration issues and their solutions.',
      category: 'technical',
      difficulty: 'medium',
      views: 890,
      helpful: 67,
      tags: ['API', 'Integration', 'Technical']
    },
    {
      id: 3,
      title: 'Setting up two-factor authentication',
      description: 'Complete guide to enable 2FA on your account.',
      category: 'security',
      difficulty: 'easy',
      views: 567,
      helpful: 45,
      tags: ['2FA', 'Security', 'Account']
    },
    {
      id: 4,
      title: 'Performance optimization tips',
      description: 'Best practices for optimizing your application performance.',
      category: 'technical',
      difficulty: 'hard',
      views: 432,
      helpful: 34,
      tags: ['Performance', 'Optimization', 'Technical']
    },
    {
      id: 5,
      title: 'Billing and subscription management',
      description: 'How to manage your billing and subscription settings.',
      category: 'billing',
      difficulty: 'easy',
      views: 678,
      helpful: 56,
      tags: ['Billing', 'Subscription', 'Account']
    },
    {
      id: 6,
      title: 'Data backup and recovery',
      description: 'Understanding our data backup and recovery processes.',
      category: 'technical',
      difficulty: 'medium',
      views: 345,
      helpful: 28,
      tags: ['Backup', 'Recovery', 'Data']
    }
  ];

  const supportChannels = [
    {
      id: 1,
      name: 'Live Chat Support',
      description: 'Get instant help from our support team via live chat.',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Under 2 minutes',
      priority: 'high',
      color: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Phone Support',
      description: 'Speak directly with our technical experts.',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      priority: 'high',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Email Support',
      description: 'Send us a detailed message and get a response within hours.',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      priority: 'medium',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Help Center',
      description: 'Browse our comprehensive knowledge base and FAQs.',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Instant',
      priority: 'low',
      color: 'bg-orange-500'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Standard support for all customers',
      features: [
        'Email support (24/7)',
        'Help center access',
        'Community forums',
        'Response within 24 hours'
      ],
      price: 'Included',
      icon: CheckCircle
    },
    {
      name: 'Priority Support',
      description: 'Enhanced support for professional customers',
      features: [
        'All Basic features',
        'Live chat support',
        'Phone support (business hours)',
        'Response within 4 hours',
        'Dedicated support team'
      ],
      price: '$99/month',
      icon: Star
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for enterprise customers',
      features: [
        'All Priority features',
        '24/7 phone support',
        'Dedicated support manager',
        'Response within 1 hour',
        'Custom SLA agreements',
        'On-site support available'
      ],
      price: 'Custom',
      icon: Building
    }
  ];

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
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help when you need it. Our support team is here to assist you with any questions, 
              technical issues, or guidance you may need.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Quick Help */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              How can we help you today?
            </h2>
            <p className="text-gray-300">
              Search our knowledge base or browse common issues below
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or common issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Start Live Chat
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200">
              Submit Ticket
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200">
              Call Support
            </button>
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Support Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel) => (
              <div
                key={channel.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:scale-105 transition-transform duration-200"
              >
                <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="text-blue-400 font-medium">
                    {channel.responseTime}
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Common Issues & Solutions</h2>
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {supportCategories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{issue.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(issue.difficulty)}`}>
                    {getDifficultyText(issue.difficulty)}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{issue.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{issue.views} views</span>
                    <span>{issue.helpful} found helpful</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {issue.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  View Solution
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Support Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${
                  tier.name === 'Priority Support' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {tier.name === 'Priority Support' && (
                  <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </span>
                )}
                
                <div className="text-center mb-6">
                  <tier.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-white">{tier.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full px-4 py-2 font-medium rounded-lg transition-colors duration-200 ${
                  tier.name === 'Priority Support'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {tier.name === 'Basic Support' ? 'Learn More' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Help Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Help Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 text-center">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{resource.description}</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {resource.rating}
                  </span>
                  <span>
                    {resource.type === 'video' ? `${resource.views} views` : `${resource.downloads} downloads`}
                  </span>
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  {resource.type === 'video' ? 'Watch Now' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you. Contact us through any of our support channels 
              and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 text-sm mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm mb-2">support@ziontechgroup.com</p>
                <p className="text-gray-400 text-xs">Response within 4 hours</p>
              </div>
              
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-2">Available 24/7</p>
                <p className="text-gray-400 text-xs">Instant response</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}