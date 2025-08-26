import React from 'react';
import { Link } from 'react-router-dom';
import { CakeIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <CakeIcon className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing 
              experience and improve our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Are Cookies?
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CakeIcon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>
                <p className="text-gray-300 text-sm">
                  Stored on your device to remember your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                <p className="text-gray-300 text-sm">
                  Personalize content and improve functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Security features</li>
                <li>• Basic functionality</li>
                <li>• User authentication</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-blue-600/20 rounded-lg w-fit mb-4">
                <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Language preferences</li>
                <li>• User settings</li>
                <li>• Form data</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">
                                 <CakeIcon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies help us understand how visitors use our website.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Page views</li>
                <li>• User behavior</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-orange-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are used to deliver relevant advertisements and track marketing campaigns.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Ad targeting</li>
                <li>• Campaign tracking</li>
                <li>• Social media integration</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-cyan-600/20 rounded-lg w-fit mb-4">
                                 <Cog6ToothIcon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are set by third-party services we integrate with.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Social media</li>
                <li>• Analytics tools</li>
                <li>• Payment processors</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-pink-600/20 rounded-lg w-fit mb-4">
                                 <CakeIcon className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Session Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are temporary and are deleted when you close your browser.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Shopping cart</li>
                <li>• Login sessions</li>
                <li>• Temporary preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie preferences</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Accept all cookies</li>
                <li>• Customize cookie preferences</li>
                <li>• Reject non-essential cookies</li>
                <li>• Learn more about our cookie policy</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Opt-Out Options</h3>
              <p className="text-gray-300 mb-4">
                For specific types of cookies, you can opt out through:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Google Analytics opt-out browser add-on</li>
                <li>• Digital Advertising Alliance opt-out</li>
                <li>• Network Advertising Initiative opt-out</li>
                <li>• Direct opt-out links in our emails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Specific Cookies We Use
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Google Analytics</h3>
              <p className="text-gray-300 mb-3">
                We use Google Analytics to understand how visitors interact with our website.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> _ga, _gid, _gat</p>
                <p><strong>Purpose:</strong> Website analytics and performance monitoring</p>
                <p><strong>Duration:</strong> Up to 2 years</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Authentication</h3>
              <p className="text-gray-300 mb-3">
                These cookies help us maintain your login session and security preferences.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> auth_token, session_id</p>
                <p><strong>Purpose:</strong> User authentication and session management</p>
                <p><strong>Duration:</strong> Session or up to 30 days</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Preferences</h3>
              <p className="text-gray-300 mb-3">
                These cookies remember your preferences and settings for a better user experience.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> theme, language, notifications</p>
                <p><strong>Purpose:</strong> User preferences and customization</p>
                <p><strong>Duration:</strong> Up to 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Updates and Contact
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Policy Updates</h3>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
                <p>Address: Zion Tech Group, Global Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Cookie Settings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help you understand and manage your cookie preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;