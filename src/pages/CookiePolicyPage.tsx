import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Lock, 
  Info, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Database,
  Globe,
  Users,
  BarChart
} from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-lg prose-invert max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Info className="w-8 h-8 mr-3 text-blue-400" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <div className="bg-blue-600/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Cookie className="w-5 h-5 mr-2" />
                    Cookie Purpose
                  </h4>
                  <p className="text-gray-300">
                    Cookies help us understand how you interact with our website and improve our services 
                    to provide you with the best possible experience.
                  </p>
                </div>
              </section>

              {/* Types of Cookies */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Database className="w-8 h-8 mr-3 text-purple-400" />
                  Types of Cookies We Use
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Essential Cookies */}
                  <div className="p-6 bg-green-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Essential Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      These cookies are necessary for the website to function properly.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Session management</li>
                      <li>• Security features</li>
                      <li>• Basic functionality</li>
                    </ul>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="p-6 bg-blue-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <BarChart className="w-5 h-5 mr-2" />
                      Analytics Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Help us understand how visitors interact with our website.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Page views and navigation</li>
                      <li>• User behavior analysis</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>

                  {/* Functional Cookies */}
                  <div className="p-6 bg-purple-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Functional Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Remember your preferences and provide enhanced features.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Language preferences</li>
                      <li>• Theme settings</li>
                      <li>• Form data retention</li>
                    </ul>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="p-6 bg-orange-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Marketing Cookies
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Used to deliver relevant advertisements and track campaign performance.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Ad targeting</li>
                      <li>• Campaign tracking</li>
                      <li>• Social media integration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cookie Details */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-green-400" />
                  Detailed Cookie Information
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-4 font-semibold">Cookie Name</th>
                        <th className="text-left p-4 font-semibold">Purpose</th>
                        <th className="text-left p-4 font-semibold">Duration</th>
                        <th className="text-left p-4 font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">session_id</td>
                        <td className="p-4">Maintains user session</td>
                        <td className="p-4">Session</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">Essential</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">_ga</td>
                        <td className="p-4">Google Analytics tracking</td>
                        <td className="p-4">2 years</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">Analytics</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">theme_preference</td>
                        <td className="p-4">Stores user theme choice</td>
                        <td className="p-4">1 year</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">Functional</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">_fbp</td>
                        <td className="p-4">Facebook pixel tracking</td>
                        <td className="p-4">3 months</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-orange-600/20 text-orange-400 rounded text-xs">Marketing</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Cookie Management */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-yellow-400" />
                  Managing Your Cookie Preferences
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-yellow-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">Browser Settings</h4>
                    <p className="text-gray-300 mb-4">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Block all cookies</li>
                      <li>• Allow only essential cookies</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set cookie preferences per site</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">Cookie Consent</h4>
                    <p className="text-gray-300 mb-4">
                      When you first visit our website, you'll see a cookie consent banner. You can:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Accept all cookies</li>
                      <li>• Customize your preferences</li>
                      <li>• Reject non-essential cookies</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-green-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">Third-Party Cookies</h4>
                    <p className="text-gray-300 mb-4">
                      Some cookies are set by third-party services we use:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Google Analytics for website analytics</li>
                      <li>• Facebook Pixel for advertising</li>
                      <li>• LinkedIn Insight Tag for business insights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-red-400" />
                  Data Protection & Privacy
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2" />
                      Data Security
                    </h4>
                    <p className="text-gray-300 text-sm">
                      We implement appropriate security measures to protect your data from unauthorized access, 
                      alteration, disclosure, or destruction.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-green-600/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Your Rights
                    </h4>
                    <p className="text-gray-300 text-sm">
                      You have the right to access, rectify, or delete your personal data. Contact us to exercise these rights.
                    </p>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-orange-400" />
                  Updates to This Policy
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <div className="bg-orange-600/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-white mb-3">Notification of Changes</h4>
                  <p className="text-gray-300">
                    We will notify you of any material changes by posting the updated policy on this page 
                    and updating the "Last updated" date.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <ArrowRight className="w-8 h-8 mr-3 text-green-400" />
                  Contact Us
                </h2>
                <div className="bg-green-600/10 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our Cookie Policy or how we use cookies, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>📧 Email: privacy@ziontechgroup.com</p>
                    <p>📞 Phone: +1 (555) 123-4567</p>
                    <p>📍 Address: Zion Tech Group Headquarters</p>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-400">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default CookiePolicyPage;