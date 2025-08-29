import React from 'react';
import { Link } from 'react-router-dom';
import { CakeIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we use cookies to enhance your browsing experience
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website based on how you use it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Session Cookies</h3>
                  <p className="text-gray-300 text-sm">Temporary cookies that are deleted when you close your browser. They help maintain your session and remember your preferences during your visit.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-gray-300 text-sm">Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences across multiple visits.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-300 text-sm">Cookies set by third-party services we use, such as analytics tools, social media plugins, and advertising networks.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
                <li>Opt-out of specific types of cookies through our cookie consent banner</li>
                <li>Contact us to request changes to your cookie preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookie Consent</h2>
              <p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner. By clicking "Accept" or continuing to use our website, you consent to our use of cookies as described in this policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies are necessary for the website to function properly and cannot be disabled.</p>
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
              <p className="text-gray-300 mb-4">These cookies enable enhanced functionality and personalization.</p>
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
              <p className="text-gray-300 mb-4">These cookies help us understand how visitors use our website.</p>
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
              <p className="text-gray-300 mb-4">These cookies are used to deliver relevant advertisements and track marketing campaigns.</p>
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
              <p className="text-gray-300 mb-4">These cookies are set by third-party services we integrate with.</p>
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
              <p className="text-gray-300 mb-4">These cookies are temporary and are deleted when you close your browser.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Managing Your Cookie Preferences</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Browser Settings</h3>
              <p className="text-gray-300 mb-4">You can control cookies through your browser settings. Most browsers allow you to:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie preferences</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner that allows you to:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Accept all cookies</li>
                <li>• Customize cookie preferences</li>
                <li>• Reject non-essential cookies</li>
                <li>• Learn more about our cookie policy</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Opt-Out Options</h3>
              <p className="text-gray-300 mb-4">For specific types of cookies, you can opt out through:</p>
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

      {/* Updates and Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Updates and Contact</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Policy Updates</h3>
              <p className="text-gray-300">We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Us</h3>
              <p className="text-gray-300 mb-4">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Cookie Settings?</h2>
          <p className="text-xl text-gray-300 mb-8">We're here to help you understand and manage your cookie preferences.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg">Contact Us</Link>
            <Link to="/privacy" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">View Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
