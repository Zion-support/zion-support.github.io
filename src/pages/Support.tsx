import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Phone, Mail, Clock, Users, 
  FileText, Video, BookOpen, Search, ArrowRight,
  CheckCircle, AlertCircle, Info, ExternalLink,
  Download, Play, Star, Globe, Building, Shield
} from 'lucide-react';

export default function Support() {
  const [selectedSupportType, setSelectedSupportType] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const supportTypes = [
    {
      id: 'general',
      title: 'General Support',
      description: 'Account questions, billing, and general inquiries',
      icon: Info,
      color: 'from-blue-500 to-indigo-500',
      responseTime: '24-48 hours',
      priority: 'Normal'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Platform issues, API problems, and technical questions',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      responseTime: '4-8 hours',
      priority: 'High'
    },
    {
      id: 'critical',
      title: 'Critical Issues',
      description: 'Service outages, security incidents, and urgent problems',
      icon: AlertCircle,
      color: 'from-red-500 to-orange-500',
      responseTime: '1-2 hours',
      priority: 'Critical'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Support',
      description: 'Dedicated support for enterprise customers',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      responseTime: 'Immediate',
      priority: 'Premium'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-blue-500 to-purple-500',
      availability: '24/7',
      responseTime: 'Instant',
      href: '/chat',
      features: ['Real-time chat', 'File sharing', 'Screen sharing', 'Chat history']
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message for complex issues',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      href: 'mailto:support@ziontechgroup.com',
      features: ['Detailed responses', 'File attachments', 'Thread tracking', 'Priority handling']
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-yellow-500 to-orange-500',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: 'tel:+1-555-123-4567',
      features: ['Direct conversation', 'Immediate resolution', 'Expert guidance', 'Follow-up calls']
    },
    {
      title: 'Video Call',
      description: 'Face-to-face support with screen sharing',
      icon: Video,
      color: 'from-cyan-500 to-blue-500',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      href: '/video-support',
      features: ['Visual support', 'Screen sharing', 'Recording option', 'Personal touch']
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency Support Only', available: false },
    { day: 'Holidays', hours: 'Emergency Support Only', available: false }
  ];

  const commonIssues = [
    {
      category: 'Account & Billing',
      issues: [
        { title: 'Password Reset', solution: 'Use our secure password reset tool', href: '/help/password-reset' },
        { title: 'Billing Questions', solution: 'Check your invoice or contact billing team', href: '/help/billing' },
        { title: 'Account Access', solution: 'Verify your credentials or contact support', href: '/help/account-access' }
      ]
    },
    {
      category: 'Technical Issues',
      issues: [
        { title: 'API Errors', solution: 'Check our API documentation and status page', href: '/help/api-errors' },
        { title: 'Performance Issues', solution: 'Review our performance optimization guide', href: '/help/performance' },
        { title: 'Integration Problems', solution: 'Follow our integration troubleshooting steps', href: '/help/integration' }
      ]
    },
    {
      category: 'Service Issues',
      issues: [
        { title: 'Service Outage', solution: 'Check our status page for real-time updates', href: '/status' },
        { title: 'Data Sync Issues', solution: 'Review our data synchronization guide', href: '/help/data-sync' },
        { title: 'Feature Requests', solution: 'Submit feature requests through our portal', href: '/feature-requests' }
      ]
    }
  ];

  const supportResources = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      href: '/help',
      articles: '500+ articles'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      href: '/tutorials',
      articles: '100+ videos'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      href: '/api-docs',
      articles: '200+ endpoints'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      href: '/community',
      articles: 'Active community'
    }
  ];

  const filteredSupportTypes = supportTypes.filter(type =>
    type.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCommonIssues = commonIssues.map(category => ({
    ...category,
    issues: category.issues.filter(issue =>
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.solution.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.issues.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert help when you need it most. Our support team is here to ensure your success with Zion Tech Group services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>24/7 Support</span>
              <span>•</span>
              <Users className="w-5 h-5" />
              <span>Expert Team</span>
              <span>•</span>
              <CheckCircle className="w-5 h-5" />
              <span>Fast Response</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for support topics, common issues, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the right support option based on your needs and urgency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSupportTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  selectedSupportType === type.id
                    ? 'border-blue-500/50 bg-blue-500/10'
                    : 'border-white/10 hover:border-blue-500/50'
                }`}
                onClick={() => setSelectedSupportType(type.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{type.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{type.description}</p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{type.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Star className="w-3 h-3 mr-1" />
                    <span>{type.priority}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to get help, choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-sm">
                        <span className="text-gray-400">Availability:</span>
                        <div className="text-white font-medium">{channel.availability}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Response Time:</span>
                        <div className="text-white font-medium">{channel.responseTime}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {channel.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={channel.href}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Get Support
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Hours
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help when you need us most
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {supportHours.map((schedule, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-6 ${
                  index !== supportHours.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    schedule.available ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{schedule.day}</h3>
                    <p className="text-gray-300">{schedule.hours}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  schedule.available
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {schedule.available ? 'Available' : 'Limited'}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
            <p className="text-gray-300 mb-4">
              For critical issues outside business hours, we provide emergency support for enterprise customers.
            </p>
            <a
              href="tel:+1-555-123-4567"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Call Emergency Line
              <Phone className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Issues & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick solutions to frequently encountered problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredCommonIssues.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.issues.map((issue, issueIndex) => (
                      <div key={issueIndex} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-white font-medium mb-2">{issue.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{issue.solution}</p>
                        <a
                          href={issue.href}
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Self-service resources to help you find answers quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <div className="text-blue-400 text-sm mb-4">{resource.articles}</div>
                <a
                  href={resource.href}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is ready to assist you. Choose your preferred support channel and get the help you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/chat"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}