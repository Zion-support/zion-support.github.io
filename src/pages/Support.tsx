<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, Users, Zap, Clock, CheckCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 1 minute',
      color: 'blue',
      link: '/chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'green',
      link: '/contact'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'purple',
      link: '/contact'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      color: 'orange',
      link: '/demo'
    }
  ];

  const knowledgeBaseCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        { title: 'Quick Start Guide', views: '2.3k', updated: '2 days ago' },
        { title: 'Account Setup', views: '1.8k', updated: '1 week ago' },
        { title: 'First Steps', views: '1.5k', updated: '3 days ago' },
        { title: 'Basic Configuration', views: '1.2k', updated: '5 days ago' }
      ]
    },
    {
      title: 'API Documentation',
      icon: '📚',
      articles: [
        { title: 'API Authentication', views: '3.1k', updated: '1 day ago' },
        { title: 'Rate Limits', views: '2.7k', updated: '2 days ago' },
        { title: 'Error Codes', views: '2.4k', updated: '4 days ago' },
        { title: 'SDKs & Libraries', views: '1.9k', updated: '1 week ago' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: '🔧',
      articles: [
        { title: 'Common Issues', views: '4.2k', updated: '1 day ago' },
        { title: 'Performance Issues', views: '3.8k', updated: '2 days ago' },
        { title: 'Integration Problems', views: '3.2k', updated: '3 days ago' },
        { title: 'Error Messages', views: '2.9k', updated: '5 days ago' }
      ]
    },
    {
      title: 'Billing & Account',
      icon: '💳',
      articles: [
        { title: 'Billing Overview', views: '1.7k', updated: '1 week ago' },
        { title: 'Plan Changes', views: '1.4k', updated: '2 weeks ago' },
        { title: 'Payment Methods', views: '1.1k', updated: '1 week ago' },
        { title: 'Account Security', views: '2.1k', updated: '3 days ago' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply sign up for a free trial, complete the onboarding process, and our team will guide you through the setup. You can also schedule a demo to see our solutions in action.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including 24/7 live chat, email support, phone support during business hours, and scheduled video calls for complex issues. All plans include access to our knowledge base and community forum.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'Response times vary by channel: Live chat responses are typically under 1 minute, email responses within 4 hours, and phone support is available immediately during business hours (Mon-Fri 9AM-6PM EST).'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes! We offer comprehensive training programs including onboarding sessions, custom training for your specific use case, and ongoing education through webinars and documentation. Enterprise plans include dedicated training sessions.'
    },
    {
      question: 'What if I need help with a custom integration?',
      answer: 'Our technical experts can help with custom integrations. We offer consultation services, custom development support, and can work with your team to ensure seamless integration with your existing systems.'
    },
    {
      question: 'Is there a community where I can get help from other users?',
      answer: 'Yes! We have an active community forum where users can ask questions, share best practices, and get help from both our team and other experienced users. It\'s a great place to learn and network.'
    }
  ];

  const quickActions = [
    { title: 'Report a Bug', description: 'Found an issue? Let us know', link: '/contact', icon: '🐛' },
    { title: 'Request a Feature', description: 'Have an idea? We\'d love to hear it', link: '/contact', icon: '💡' },
    { title: 'Schedule Training', description: 'Book a training session for your team', link: '/training', icon: '🎓' },
    { title: 'View Status Page', description: 'Check system status and uptime', link: '/status', icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get the support you need to succeed with our AI solutions. 
              Our expert team is ready to help you every step of the way.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search our knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for your AI solutions. Access documentation, FAQs, and contact our support team." />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the help you need to maximize the value of your AI solutions. Our support team is here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides, API documentation, and best practices to help you get the most out of our solutions.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse Documentation →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FAQs</h3>
              <p className="text-gray-600 mb-4">
                Find quick answers to common questions about our AI solutions, implementation, and best practices.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View FAQs →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with other users, share experiences, and get insights from our AI community.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Join Community →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Support</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-2">Get help via email with detailed responses within 24 hours.</p>
                    <a href="mailto:support@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                      support@ziontechgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our support team for urgent issues.</p>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-gray-600 mb-2">Chat with our support team in real-time for immediate assistance.</p>
                    <button className="text-blue-600 hover:text-blue-700">
                      Start Chat →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Support Ticket</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                    Priority Level
                  </label>
                  <select
                    id="priority"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Please describe your issue in detail..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
                <p className="text-gray-600">
                  24/7 for critical issues<br />
                  Enterprise customers
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Times</h3>
                <p className="text-gray-600">
                  Email: Within 24 hours<br />
                  Phone: Immediate
                </p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-b747
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <Link
                  key={channel.title}
                  to={channel.link}
                  className={`bg-white rounded-lg shadow-lg border-2 border-${channel.color}-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-${channel.color}-400`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-${channel.color}-100 flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${channel.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{channel.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{channel.description}</p>
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Zap className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Knowledge Base
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions and learn how to get the most out of our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {knowledgeBaseCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.articles.map((article, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div>
                        <h4 className="font-semibold text-gray-900">{article.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>{article.views} views</span>
                          <span className="mx-2">•</span>
                          <span>Updated {article.updated}</span>
                        </div>
                      </div>
                      <BookOpen className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common tasks and requests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/demo"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
=======
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-b747
  );
};

export default Support;