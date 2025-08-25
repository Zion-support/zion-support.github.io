<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  MessageCircle, 
  FileText, 
  Video, 
  Search, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Download,
  ExternalLink
} from 'lucide-react';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Headphones,
      description: 'Get help with technical issues and product support',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: FileText,
      description: 'Questions about billing, invoices, and account management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'training',
      name: 'Training & Documentation',
      icon: BookOpen,
      description: 'Access training materials and product documentation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'integration',
      name: 'Integration Support',
      icon: MessageCircle,
      description: 'Help with API integration and third-party services',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",
      category: 'general'
    },
    {
      question: "What are your response times for support requests?",
      answer: "We prioritize support based on urgency. Critical issues receive immediate attention (within 1 hour), high priority issues within 4 hours, and standard requests within 24 hours during business hours.",
      category: 'technical'
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we offer 24/7 support for critical infrastructure and enterprise clients. Standard support is available Monday-Friday, 9 AM - 6 PM EST.",
      category: 'technical'
    },
    {
      question: "How can I access product documentation?",
      answer: "Product documentation is available in our Help Center and Developer Portal. You can also request specific documentation by contacting our support team.",
      category: 'training'
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely.",
      category: 'billing'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message for non-urgent issues',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 24 hours',
      color: 'text-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Critical issues requiring immediate attention',
      contact: '+1 302 464 0950',
      availability: '24/7 for critical issues',
      color: 'text-red-500'
    }
  ];

  const filteredFAQ = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const searchResults = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert technical assistance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
  const supportChannels = [
    {
      title: 'Live Chat',
      icon: '💬',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat',
      actionType: 'button'
    },
    {
      title: 'Email Support',
      icon: '✉️',
      description: 'Send us a detailed message for complex issues',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email',
      actionType: 'link',
      path: '/contact'
    },
    {
      title: 'Phone Support',
      icon: '📞',
      description: 'Call us directly for urgent technical issues',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      action: 'Call Now',
      actionType: 'phone',
      phone: '+13024640950'
    },
    {
      title: 'Help Center',
      icon: '📚',
      description: 'Browse our comprehensive knowledge base',
      availability: '24/7',
      responseTime: 'Self-service',
      action: 'Browse Articles',
      actionType: 'link',
      path: '/help'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'For all users',
      features: [
        'Email support within 24 hours',
        'Help center access',
        'Community forum access',
        'Documentation access'
      ],
      price: 'Free'
    },
    {
      name: 'Priority Support',
      description: 'For paid plans',
      features: [
        'Email support within 4 hours',
        'Live chat support',
        'Phone support during business hours',
        'Priority ticket handling',
        'Dedicated support team'
      ],
      price: 'Included'
    },
    {
      name: 'Enterprise Support',
      description: 'For enterprise clients',
      features: [
        '24/7 phone support',
        'Dedicated support manager',
        'Custom SLA agreements',
        'On-site support available',
        'Training and consultation',
        'Priority feature requests'
      ],
      price: 'Custom'
    }
  ];

  const commonIssues = [
    {
      category: 'Account & Access',
      issues: [
        'Password reset and recovery',
        'Two-factor authentication setup',
        'Account verification issues',
        'Permission and role management'
      ]
    },
    {
      category: 'Technical Problems',
      issues: [
        'API integration issues',
        'Performance optimization',
        'Error troubleshooting',
        'Browser compatibility'
      ]
    },
    {
      category: 'Billing & Subscriptions',
      issues: [
        'Payment processing',
        'Invoice generation',
        'Plan upgrades/downgrades',
        'Refund requests'
      ]
    },
    {
      category: 'Service Usage',
      issues: [
        'Feature implementation',
        'Best practices guidance',
        'Training and onboarding',
        'Custom solutions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help you succeed. Choose the support channel that works best for you.
          </p>
        </div>
      </div>

      {/* Support Channels */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-cyan-400">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                </div>
                
                {channel.actionType === 'button' && (
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    {channel.action}
                  </button>
                )}
                
                {channel.actionType === 'link' && (
                  <Link
                    to={channel.path}
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    {channel.action}
                  </Link>
                )}
                
                {channel.actionType === 'phone' && (
                  <a
                    href={`tel:${channel.phone}`}
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                  >
                    {channel.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Tiers */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Support Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier) => (
              <div key={tier.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-white">{tier.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-center font-medium"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonIssues.map((category) => (
              <div key={category.category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category.category}</h3>
                <ul className="space-y-2">
                  {category.issues.map((issue, index) => (
                    <li key={index} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                      • {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is ready to assist you with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Browse Help Center
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Can We Help You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mx-auto mb-4`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
              <p className="text-white font-medium mb-1">{method.contact}</p>
              <p className="text-gray-500 text-xs">{method.availability}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            All Categories
          </button>
          {supportCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {(searchQuery ? searchResults : filteredFAQ).map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">{item.question}</h3>
              <p className="text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>

        {searchQuery && searchResults.length === 0 && (
          <div className="text-center py-8">
            <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">No results found for "{searchQuery}". Try different keywords or contact our support team.</p>
          </div>
        )}
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/help" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">Help Center</h3>
              <p className="text-gray-400">Comprehensive guides and tutorials for all our services</p>
            </div>
          </Link>
          
          <Link to="/docs" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400">Documentation</h3>
              <p className="text-gray-400">Technical documentation and API references</p>
            </div>
          </Link>
          
          <Link to="/webinars" className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Video className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">Training Videos</h3>
              <p className="text-gray-400">Video tutorials and training sessions</p>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to assist you with any questions or technical issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
=======
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Support Center</h1>
        <p className="text-xl text-zion-slate-light">
          Welcome to our support center. We're here to help you with any questions or issues you may have.
        </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a191
      </div>
    </div>
  );
};

export default Support;
=======
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
