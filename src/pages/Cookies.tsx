import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cookies: React.FC = () => {
  const cookieCategories = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Basic functionality"],
      duration: "Session to 1 year",
      required: true
    },
    {
      name: "Performance Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Analytics", "Page load times", "User behavior"],
      duration: "1 day to 2 years",
      required: false
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language settings", "User preferences", "Customization"],
      duration: "1 month to 1 year",
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Advertising", "Social media", "Retargeting"],
      duration: "1 month to 2 years",
      required: false
    }
  ];

  const specificCookies = [
    {
      name: "_ga",
      purpose: "Google Analytics - Used to distinguish unique users",
      duration: "2 years",
      provider: "Google"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Used to distinguish users",
      duration: "24 hours",
      provider: "Google"
    },
    {
      name: "session_id",
      purpose: "Maintains user session and authentication state",
      duration: "Session",
      provider: "Zion Tech Group"
    },
    {
      name: "preferences",
      purpose: "Stores user preferences and settings",
      duration: "1 year",
      provider: "Zion Tech Group"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              to enhance your browsing experience and provide personalized services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Transparent</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">User Control</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Privacy First</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Are Cookies?
              </h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Remembering your preferences and settings
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Analyzing how you use our website to improve our services
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Providing personalized content and recommendations
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ensuring security and preventing fraud
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieCategories.map((category) => (
                <div key={category.name} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      {category.required && (
                        <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <span className="text-sm text-gray-500">Duration: {category.duration}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specific Cookies */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Specific Cookies We Use
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {specificCookies.map((cookie) => (
                      <tr key={cookie.name} className="hover:bg-white/5">
                        <td className="px-6 py-4 text-sm font-mono text-blue-400">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{cookie.duration}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific websites</li>
                    <li>• Block all cookies</li>
                    <li>• Set preferences for different types of cookies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-300 mb-4">
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li>• Accept all cookies</li>
                    <li>• Customize your cookie preferences</li>
                    <li>• Reject non-essential cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Third-Party Cookies</h3>
                  <p className="text-gray-300">
                    Some cookies are set by third-party services that appear on our pages. You can manage these 
                    through your browser settings or by visiting the third-party service's privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Disabling Cookies */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Impact of Disabling Cookies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">If You Disable Cookies</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Some website features may not work properly</li>
                    <li>• You may need to re-enter information each time</li>
                    <li>• Personalized content may not be available</li>
                    <li>• Security features may be limited</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300">
                    Essential cookies cannot be disabled as they are necessary for the website to function. 
                    These include authentication, security, and basic functionality cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates and Contact */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about our use of cookies or would like to manage your preferences, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 mt-2">
              We may update this Cookie Policy from time to time. Please check back periodically for any changes.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cookies;