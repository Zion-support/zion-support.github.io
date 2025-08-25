import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Cookie, Settings, Eye, Database, Globe, Lock, Info, AlertTriangle, BarChart3 } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Cookie className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn how we use cookies and similar technologies to enhance your browsing experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version: 2.0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
            </p>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>Note:</strong> Cookies do not contain personal information and cannot be used to identify you personally.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Authentication and security</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Form submissions</li>
                  <li>• Basic website navigation</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Page views and time spent</li>
                  <li>• Traffic sources and user behavior</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking and debugging</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Settings className="w-6 h-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Preference Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies remember your choices and preferences for a personalized experience.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Language and region settings</li>
                  <li>• Theme and display preferences</li>
                  <li>• Accessibility settings</li>
                  <li>• Customized content delivery</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Globe className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies help us deliver relevant advertisements and measure their effectiveness.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Targeted advertising</li>
                  <li>• Social media integration</li>
                  <li>• Campaign performance tracking</li>
                  <li>• User engagement metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              Some cookies on our website are placed by third-party services that we use to enhance functionality and analyze performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Analytics Services</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Google Analytics</li>
                  <li>• Hotjar (user behavior)</li>
                  <li>• Mixpanel (product analytics)</li>
                  <li>• Amplitude (user insights)</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Marketing Tools</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Facebook Pixel</li>
                  <li>• Google Ads</li>
                  <li>• LinkedIn Insight Tag</li>
                  <li>• Twitter Pixel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Managing Your Cookie Preferences</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Browser Settings</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  You can control cookies through your web browser settings. Most browsers allow you to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific sites</li>
                  <li>• Block all third-party cookies</li>
                  <li>• Set cookie preferences for future visits</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Cookie Consent Manager</h3>
                <p className="text-gray-300 mb-4">
                  We provide a cookie consent manager that allows you to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Accept or decline non-essential cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Update your choices at any time</li>
                  <li>• View detailed information about each cookie type</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Important Note</h3>
                </div>
                <p className="text-gray-300">
                  Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic site operation.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Cookie Duration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Session Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Temporary cookies that are deleted when you close your browser. Used for basic functionality and security.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Persistent Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Cookies that remain on your device for a set period (usually 30 days to 2 years). Used for preferences and analytics.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Third-Party Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Cookies set by external services with their own expiration policies. Duration varies by service provider.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Data Protection & Privacy</h2>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Your Privacy is Protected</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Data Minimization</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• We only collect necessary data</li>
                    <li>• No personal information in cookies</li>
                    <li>• Anonymous analytics data</li>
                    <li>• Secure data transmission</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Compliance</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• GDPR compliance</li>
                    <li>• CCPA compliance</li>
                    <li>• Industry best practices</li>
                    <li>• Regular privacy audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Specific Cookie Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Detailed Cookie Information</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-white font-semibold">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Purpose</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Duration</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">session_id</td>
                    <td className="px-4 py-3 text-gray-300">Maintains your session</td>
                    <td className="px-4 py-3 text-gray-300">Session</td>
                    <td className="px-4 py-3 text-gray-300">Essential</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">_ga</td>
                    <td className="px-4 py-3 text-gray-300">Google Analytics tracking</td>
                    <td className="px-4 py-3 text-gray-300">2 years</td>
                    <td className="px-4 py-3 text-gray-300">Analytics</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">theme_preference</td>
                    <td className="px-4 py-3 text-gray-300">Remembers your theme choice</td>
                    <td className="px-4 py-3 text-gray-300">1 year</td>
                    <td className="px-4 py-3 text-gray-300">Preference</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">fbp</td>
                    <td className="px-4 py-3 text-gray-300">Facebook advertising</td>
                    <td className="px-4 py-3 text-gray-300">3 months</td>
                    <td className="px-4 py-3 text-gray-300">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</strong>
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Questions About Cookies?</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Phone</span>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Address</span>
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}