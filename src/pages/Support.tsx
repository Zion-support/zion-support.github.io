import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, BookOpen, Video, Users, Zap, Clock, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: '< 2 minutes',
      contact: '+1 (555) 123-4567'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      availability: '24/7',
      responseTime: '< 30 seconds',
      contact: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 2 hours',
      contact: 'support@ziontechgroup.com'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session with our experts',
      availability: 'Business Hours',
      responseTime: '< 4 hours',
      contact: 'Schedule Call'
    }
  ];

  const faqCategories = [
    {
      id: 'general',
      title: 'General',
      icon: BookOpen
    },
    {
      id: 'technical',
      title: 'Technical',
      icon: Zap
    },
    {
      id: 'billing',
      title: 'Billing',
      icon: Users
    },
    {
      id: 'account',
      title: 'Account',
      icon: Clock
    }
  ];

  const faqs = [
    {
      category: 'general',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and IT solutions including automation, cybersecurity, cloud infrastructure, data analytics, and digital transformation services.'
    },
    {
      category: 'technical',
      question: 'How do I integrate your AI solutions with my existing systems?',
      answer: 'Our team provides complete integration support with APIs, documentation, and hands-on assistance to ensure seamless implementation.'
    },
    {
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing including subscription-based, project-based, and custom enterprise solutions tailored to your needs.'
    },
    {
      category: 'account',
      question: 'How do I update my account information?',
      answer: 'You can update your account information through our client portal or contact our support team for assistance.'
    },
    {
      category: 'technical',
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training programs including documentation, video tutorials, and live training sessions.'
    },
    {
<<<<<<< HEAD
      category: 'general',
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times based on your support plan: Premium (30 minutes), Standard (2 hours), Basic (24 hours).'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all Zion Tech Group services. 24/7 technical support, documentation, and expert assistance." />
        <meta name="keywords" content="support, help, technical assistance, customer service, documentation" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Get help when you need it. Our expert support team is here 24/7 to assist you with any questions or issues.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-xl text-gray-600">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {channel.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex justify-between">
                        <span>Availability:</span>
                        <span className="font-semibold">{channel.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Response Time:</span>
                        <span className="font-semibold">{channel.responseTime}</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      {channel.contact}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find quick answers to common questions
              </p>
            </div>
=======
      question: 'Is there a community where I can get help from other users?',
      answer: "Yes! We have an active community forum where users can ask questions, share best practices, and get help from both our team and other experienced users. It's a great place to learn and network."
    }
  ];

  const quickActions = [
    { title: 'Report a Bug', description: 'Found an issue? Let us know', link: '/contact', icon: '🐛' },
    { title: 'Request a Feature', description: "Have an idea? We'd love to hear it", link: '/contact', icon: '💡' },
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
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3272

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.title}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No FAQs found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                View Documentation
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </div>
    </>
=======
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3272
  );
};

export default Support;