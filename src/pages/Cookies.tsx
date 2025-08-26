import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, BarChart3, Users, Globe, Info } from 'lucide-react';

const Cookies: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

const Cookies: React.FC = () => {
  const [lastUpdated] = useState('January 15, 2025');

  const cookieCategories = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      necessary: true
    },
    {
      name: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Analytics cookies', 'Load balancing cookies', 'Performance monitoring'],
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: ['Language preferences', 'User interface customization', 'Form data retention'],
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies'],
      necessary: false
    }
  ];

  const thirdPartyServices = [
    {
      name: 'session_id',
      purpose: 'Maintains your session state across page requests',
      duration: 'Session',
      category: 'Essential'
    },
    {
      name: 'auth_token',
      purpose: 'Stores your authentication status',
      duration: '1 year',
      category: 'Essential'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics - tracks unique visitors',
      duration: '2 years',
      category: 'Performance'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - tracks user sessions',
      duration: '24 hours',
      category: 'Performance'
    },
    {
      name: 'language_pref',
      purpose: 'Remembers your language preference',
      duration: '1 year',
      category: 'Functional'
    },
    {
      name: 'theme_pref',
      purpose: 'Remembers your theme preference',
      duration: '1 year',
      category: 'Functional'
    },
    {
      name: 'ad_preferences',
      purpose: 'Stores your advertising preferences',
      duration: '6 months',
      category: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Cookie
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Policy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Learn about how we use cookies and similar technologies to enhance your browsing experience 
            and provide personalized content.
          </p>
          <p className="text-gray-400 text-lg">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍪</div>
                <h3 className="text-lg font-semibold text-white mb-2">Small Files</h3>
                <p className="text-gray-300 text-sm">Tiny text files stored on your device</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Functional</h3>
                <p className="text-gray-300 text-sm">Help our website work properly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                <p className="text-gray-300 text-sm">Only contain non-sensitive information</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We categorize cookies based on their purpose and necessity for website functionality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  {category.necessary && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      Necessary
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Cookie Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Detailed Cookie Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive list of cookies we use, their purpose, and duration
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white font-semibold">Cookie Name</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Purpose</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Duration</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Category</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((cookie, index) => (
                  <tr key={cookie.name} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="py-4 px-4 text-blue-400 font-mono text-sm">{cookie.name}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{cookie.purpose}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{cookie.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cookie.category === 'Essential' ? 'bg-green-500/20 text-green-400' :
                        cookie.category === 'Performance' ? 'bg-blue-500/20 text-blue-400' :
                        cookie.category === 'Functional' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {cookie.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some cookies are placed by third-party services that appear on our pages
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Google Analytics</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use Google Analytics to understand how visitors interact with our website. 
                This helps us improve our content and user experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What it tracks:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Page views and time on site</li>
                    <li>• Traffic sources and user behavior</li>
                    <li>• Device and browser information</li>
                    <li>• Geographic location (country level)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Privacy features:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• IP anonymization enabled</li>
                    <li>• No personal data collection</li>
                    <li>• Respects Do Not Track signals</li>
                    <li>• Data retention controls</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Social Media Cookies</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Social media platforms may place cookies when you interact with social media features 
                on our website, such as sharing buttons or embedded content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Platforms:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• LinkedIn</li>
                    <li>• Twitter</li>
                    <li>• Facebook</li>
                    <li>• YouTube</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Purpose:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Social sharing functionality</li>
                    <li>• Embedded content display</li>
                    <li>• Social media integration</li>
                    <li>• Analytics and advertising</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have several options for controlling cookies and similar technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="text-4xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Most web browsers allow you to control cookies through their settings preferences.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Chrome: Settings → Privacy and security → Cookies</li>
                <li>• Firefox: Options → Privacy & Security → Cookies</li>
                <li>• Safari: Preferences → Privacy → Cookies</li>
                <li>• Edge: Settings → Cookies and site permissions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cookie Consent</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Use our cookie consent manager to control which non-essential cookies are active.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Manage Cookies
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Important Note</h3>
            <p className="text-blue-200 leading-relaxed">
              Disabling certain cookies may limit your ability to use some features of our website. 
              Essential cookies cannot be disabled as they are necessary for basic website functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Updates and Changes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Updates to This Policy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We may update this Cookie Policy from time to time to reflect changes in our practices
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">When We Update</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Changes to our cookie practices</li>
                  <li>• New third-party services</li>
                  <li>• Legal or regulatory requirements</li>
                  <li>• Technology improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">How We Notify</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Update the "Last updated" date</li>
                  <li>• Post notice on our website</li>
                  <li>• Email notification for major changes</li>
                  <li>• Cookie consent banner updates</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our team is here to help you understand how we use cookies and manage your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Cookies;