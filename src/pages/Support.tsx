import React from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, MessageCircle, Phone, Mail, Clock, Search, BookOpen, Video, FileText, Users, Zap, CheckCircle, AlertCircle, Info, Star, ArrowRight, Headphones, Settings, Shield, Globe, Code, CreditCard, Rocket, Brain } from 'lucide-react';

export default function Support() {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      priority: 'high',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      priority: 'high',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      availability: '24/7',
      responseTime: '< 4 hours',
      priority: 'medium',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Instant',
      priority: 'low',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const commonIssues = [
    {
      category: 'Account & Access',
      issues: [
        { title: 'Password Reset', description: 'Reset your account password', icon: Shield },
        { title: 'Two-Factor Authentication', description: 'Set up or troubleshoot 2FA', icon: Shield },
        { title: 'Account Lockout', description: 'Unlock your account', icon: AlertCircle }
      ]
    },
    {
      category: 'Technical Support',
      issues: [
        { title: 'API Integration', description: 'Help with API setup and configuration', icon: Code },
        { title: 'Performance Issues', description: 'Optimize system performance', icon: Zap },
        { title: 'Error Messages', description: 'Understand and resolve error codes', icon: AlertCircle }
      ]
    },
    {
      category: 'Billing & Subscriptions',
      issues: [
        { title: 'Payment Issues', description: 'Resolve payment problems', icon: CreditCard },
        { title: 'Plan Changes', description: 'Upgrade or modify your subscription', icon: Settings },
        { title: 'Invoice Requests', description: 'Get copies of your invoices', icon: FileText }
      ]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'White Papers',
      description: 'In-depth technical resources',
      link: '/white-papers',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '/community',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      questions: [
        'How do I create my first AI model?',
        'What are the system requirements?',
        'How do I set up my development environment?'
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        'How do I train custom models?',
        'What data formats are supported?',
        'How do I optimize model performance?'
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      questions: [
        'How is my data protected?',
        'What compliance standards do you meet?',
        'How do I implement access controls?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Here to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Help</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get the support you need to succeed with our comprehensive help resources, expert assistance, and dedicated support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Start Live Chat
            </button>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Can We Help You?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{channel.title}</h3>
                  <p className="text-gray-300 text-sm text-center mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-white">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-white">{channel.responseTime}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-medium transition-all duration-300">
                    Get Help
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Search */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or solutions..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common Issues & Solutions
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {commonIssues.map((category, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.issues.map((issue, idx) => {
                    const Icon = issue.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                        <Icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white mb-1">{issue.title}</h4>
                          <p className="text-xs text-gray-400">{issue.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Help Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={index}
                  to={resource.link}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">{resource.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{resource.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.questions.map((question, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{question}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/faq"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 transition-colors"
                  >
                    View All FAQs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Team Info */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Meet Our Support Team
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expert Technicians</h3>
                  <p className="text-gray-300 text-sm">
                    Our support team consists of certified professionals with deep expertise in AI, cybersecurity, 
                    and enterprise technology solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proven Track Record</h3>
                  <p className="text-gray-300 text-sm">
                    We maintain a 98% customer satisfaction rate and resolve 95% of issues on the first contact. 
                    Your success is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or technical issues. 
              Don't hesitate to reach out - we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Start Live Chat
              </button>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}