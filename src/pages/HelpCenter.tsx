import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'How to create an account', path: '/help/account-creation' },
        { title: 'First steps with Zion Tech Group', path: '/help/first-steps' },
        { title: 'Understanding our services', path: '/help/services-overview' },
        { title: 'Setting up your profile', path: '/help/profile-setup' }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: '💼',
      items: [
        { title: 'AI & Machine Learning Services', path: '/help/ai-services' },
        { title: 'Cybersecurity Solutions', path: '/help/cybersecurity' },
        { title: 'Cloud & Infrastructure', path: '/help/cloud-infrastructure' },
        { title: 'Digital Transformation', path: '/help/digital-transformation' }
      ]
    },
    {
      title: 'Account & Billing',
      icon: '💰',
      items: [
        { title: 'Managing your account', path: '/help/account-management' },
        { title: 'Billing & payments', path: '/help/billing' },
        { title: 'Subscription plans', path: '/help/subscriptions' },
        { title: 'Invoice history', path: '/help/invoices' }
      ]
    },
    {
      title: 'Technical Support',
      icon: '🔧',
      items: [
        { title: 'Common issues & solutions', path: '/help/troubleshooting' },
        { title: 'API documentation', path: '/help/api-docs' },
        { title: 'Integration guides', path: '/help/integrations' },
        { title: 'Performance optimization', path: '/help/performance' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI solutions, cybersecurity services, cloud infrastructure, digital transformation, and specialized industry solutions for healthcare, finance, manufacturing, and more.'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 technical support for enterprise clients and business hours support for all other clients.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We specialize in healthcare, finance, manufacturing, retail, government, and emerging technology sectors.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn about our services, and get the support you need to succeed with Zion Tech Group.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category) => (
              <div key={category.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is here to help you succeed. Get in touch with us for personalized support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
