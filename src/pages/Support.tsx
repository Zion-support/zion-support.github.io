import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  HelpCircle,
  Book,
  Video,
  Users,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Download
} from 'lucide-react';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'all',
      name: 'All Topics',
      icon: HelpCircle
    },
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Zap
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Shield
    },
    {
      id: 'billing',
      name: 'Billing & Plans',
      icon: FileText
    },
    {
      id: 'integration',
      name: 'Integration',
      icon: Users
    }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group AI solutions?',
      answer: 'Getting started is easy! Simply schedule a demo with our team, choose a plan that fits your needs, and our experts will guide you through the implementation process. We provide comprehensive onboarding and training.',
      popular: true
    },
    {
      category: 'technical',
      question: 'What are the system requirements for your AI solutions?',
      answer: 'Our AI solutions are cloud-based and accessible through modern web browsers. For on-premise deployments, we support Windows Server 2019+, Linux (Ubuntu 18.04+), and Docker containers. Specific requirements depend on your chosen solution.',
      popular: true
    },
    {
      category: 'billing',
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. No penalties or fees apply.',
      popular: false
    },
    {
      category: 'integration',
      question: 'Do your solutions integrate with existing systems?',
      answer: 'Absolutely! Our AI solutions are designed to integrate seamlessly with popular business systems including Salesforce, Microsoft 365, Google Workspace, Slack, and many others through our robust API and pre-built connectors.',
      popular: true
    },
    {
      category: 'technical',
      question: 'How secure are your AI solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, GDPR compliance, and regular security audits. All data is encrypted in transit and at rest.',
      popular: false
    },
    {
      category: 'getting-started',
      question: 'Is training included with your solutions?',
      answer: 'Yes, comprehensive training is included with all plans. We provide onboarding sessions, documentation, video tutorials, and ongoing support to ensure your team can effectively use our AI solutions.',
      popular: false
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our AI solutions',
      type: 'Documentation',
      icon: Book,
      url: '/docs/getting-started'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and integration guides',
      type: 'Technical',
      icon: FileText,
      url: '/docs/api'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      type: 'Learning',
      icon: Video,
      url: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get community support',
      type: 'Community',
      icon: Users,
      url: '/community'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: 'Mon-Fri, 9 AM - 6 PM PST',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      availability: '24/7 Response',
      contact: 'support@ziontechgroup.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Mon-Fri, 9 AM - 6 PM PST',
      contact: 'Available on website',
      action: 'Start Chat'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    searchQuery === '' || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta
          name="description"
          content="Get help and support for Zion Tech Group AI solutions. Access documentation, FAQs, tutorials, and contact our expert support team."
        />
        <meta
          name="keywords"
          content="AI support, technical support, help center, documentation, tutorials, customer service"
        />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                How Can We Help You?
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Find answers to your questions, access helpful resources, and get support from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span>Quick Response</span>
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Quick Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-slate-300 mb-3">{method.description}</p>
                  <p className="text-slate-400 text-sm mb-4">{method.availability}</p>
                  <p className="text-blue-400 font-medium mb-4">{method.contact}</p>
                  <button className="inline-flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
                    {method.action}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-300">
                Find quick answers to common questions about our AI solutions.
              </p>
            </div>

            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-lg font-semibold text-white mr-3">{faq.question}</h3>
                        {faq.popular && (
                          <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-slate-300">Try adjusting your search terms or browse different categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Helpful Resources
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Access comprehensive documentation, tutorials, and learning materials to make the most of our AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.url}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <resource.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-sm text-blue-400 font-medium ml-2">{resource.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                    Access Resource
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help CTA */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
              >
                <Video className="h-5 w-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Support;