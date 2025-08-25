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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}