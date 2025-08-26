import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, BarChart3, Users, Globe, Info } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication and security cookies',
        'Session management cookies',
        'Load balancing cookies',
        'User preference cookies'
      ],
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      icon: BarChart3,
      color: 'bg-green-500'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaign performance.',
      examples: [
        'Social media cookies',
        'Advertising cookies',
        'Retargeting cookies',
        'Campaign tracking cookies'
      ],
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme selection cookies',
        'Form auto-fill cookies',
        'User experience cookies'
      ],
      icon: Settings,
      color: 'bg-orange-500'
    }
  ];

  const thirdPartyCookies = [
    {
      service: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      data: 'Anonymous usage data, page views, user behavior',
      retention: '2 years'
    },
    {
      service: 'LinkedIn',
      purpose: 'Social media integration and sharing',
      data: 'Social sharing preferences, login status',
      retention: '1 year'
    },
    {
      service: 'Twitter',
      purpose: 'Social media integration and sharing',
      data: 'Social sharing preferences, login status',
      retention: '1 year'
    },
    {
      service: 'Facebook',
      purpose: 'Social media integration and sharing',
      data: 'Social sharing preferences, login status',
      retention: '1 year'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about Zion Tech Group's cookie policy. Understand how we use cookies, 
              manage preferences, and ensure transparency in our data collection practices.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Are Cookies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Info className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Remembering your preferences and settings</li>
                <li>• Analyzing how you use our website</li>
                <li>• Personalizing content and advertisements</li>
                <li>• Ensuring security and authentication</li>
              </ul>
            </section>

            {/* How We Use Cookies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Zion Tech Group uses cookies for several purposes to improve your experience on our website:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Website Functionality</h3>
                  <p className="text-gray-300 text-sm">Essential cookies that keep our website working properly</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Performance & Analytics</h3>
                  <p className="text-gray-300 text-sm">Understanding how visitors use our website</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Personalization</h3>
                  <p className="text-gray-300 text-sm">Tailoring content to your interests and preferences</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Marketing</h3>
                  <p className="text-gray-300 text-sm">Delivering relevant advertisements and content</p>
                </div>
              </div>
            </section>

            {/* Cookie Types */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-lg ${type.color} mr-4`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{type.name}</h3>
                        <p className="text-gray-300 mb-3">{type.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {type.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                Some cookies on our website are set by third-party services that we use to enhance functionality:
              </p>
              <div className="space-y-4">
                {thirdPartyCookies.map((service, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{service.service}</h3>
                      <span className="text-sm text-gray-400">Retention: {service.retention}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2"><strong>Purpose:</strong> {service.purpose}</p>
                    <p className="text-gray-300 text-sm"><strong>Data Collected:</strong> {service.data}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You have several options for managing cookies and controlling your privacy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Banner</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Accept all cookies</li>
                    <li>• Accept essential cookies only</li>
                    <li>• Customize cookie preferences</li>
                    <li>• Withdraw consent for specific cookies</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Block all cookies (not recommended)</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete cookies when closing browser</li>
                    <li>• Set cookie preferences per site</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Navigation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                <a href="#what-are-cookies" className="block text-blue-400 hover:text-white transition-colors duration-200">
                  1. What Are Cookies?
                </a>
                <a href="#how-we-use" className="block text-blue-400 hover:text-white transition-colors duration-200">
                  2. How We Use Cookies
                </a>
                <a href="#types-of-cookies" className="block text-blue-400 hover:text-white transition-colors duration-200">
                  3. Types of Cookies We Use
                </a>
                <a href="#third-party-cookies" className="block text-blue-400 hover:text-white transition-colors duration-200">
                  4. Third-Party Cookies
                </a>
                <a href="#managing-cookies" className="block text-blue-400 hover:text-white transition-colors duration-200">
                  5. Managing Your Preferences
                </a>
              </nav>
            </div>

            {/* Cookie Statistics */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Cookie Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Essential Cookies</span>
                  <span className="text-green-400 font-semibold">Always Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Analytics Cookies</span>
                  <span className="text-blue-400 font-semibold">Optional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Marketing Cookies</span>
                  <span className="text-purple-400 font-semibold">Optional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Functional Cookies</span>
                  <span className="text-orange-400 font-semibold">Optional</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Questions About Cookies?</h3>
              <p className="text-gray-300 text-sm mb-4">
                If you have questions about our cookie policy or need help managing your preferences, 
                we're here to help.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Cookie Consent Management */}
        <section className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take control of your privacy by managing your cookie preferences. 
              You can update these settings at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
                Accept All Cookies
              </button>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Essential Cookies Only
              </button>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
                Customize Preferences
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}