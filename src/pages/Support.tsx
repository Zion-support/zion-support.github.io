import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Support: React.FC = () => {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: '📚',
      href: '/docs',
      items: [
        'Getting Started Guide',
        'API Documentation',
        'Integration Examples',
        'Troubleshooting'
      ]
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      icon: '👥',
      href: '/community/forum',
      items: [
        'Ask Questions',
        'Share Solutions',
        'Best Practices',
        'Feature Requests'
      ]
    },
    {
      title: 'Technical Support',
      description: 'Direct support from our technical team',
      icon: '🛠️',
      href: '/support/technical',
      items: [
        'Priority Support',
        'Bug Reports',
        'Feature Requests',
        'Custom Integrations'
      ]
    },
    {
      title: 'Training & Resources',
      description: 'Learn how to maximize your success',
      icon: '🎓',
      href: '/training',
      items: [
        'Video Tutorials',
        'Webinars',
        'Certification Programs',
        'Best Practices'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your platform?',
      answer: 'Visit our documentation section for a comprehensive getting started guide. You can also schedule a demo to see our solutions in action.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including documentation, community forum, technical support, and training resources.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We typically respond to support requests within 24 hours during business days. Priority support customers get faster response times.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs including video tutorials, webinars, and certification programs.'
    },
    {
      question: 'Can I request new features?',
      answer: 'Absolutely! We encourage feature requests through our community forum or by contacting our technical support team.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Access documentation, community, and technical support." />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Support Center
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Get the help you need to succeed with our AI and IT solutions. 
                Multiple support channels available 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <Link
                key={index}
                to={option.href}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-blue-600 font-medium">
                  Access Now →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Direct Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is here to help you succeed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-2">support@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">24/7 Response</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available on website</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Support
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;