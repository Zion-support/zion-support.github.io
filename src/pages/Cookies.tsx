import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Info
} from 'lucide-react';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication', 'Security', 'Basic functionality'],
      necessary: true
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Customization'],
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      necessary: false
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Cookie className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {' '}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn how we use cookies and similar technologies to enhance your experience 
              on our website and provide personalized services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-300">
              By using our website, you consent to our use of cookies in accordance with this policy. 
              You can control and manage cookies through your browser settings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use different types of cookies for various purposes to improve your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  type.necessary ? 'border-green-500/50' : 'border-slate-700/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                  {type.necessary && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      Necessary
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-medium">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
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

      {/* Cookie Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specific Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Detailed information about the specific cookies used on our website.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-4 text-white font-semibold">Cookie Name</th>
                  <th className="text-left p-4 text-white font-semibold">Purpose</th>
                  <th className="text-left p-4 text-white font-semibold">Duration</th>
                  <th className="text-left p-4 text-white font-semibold">Provider</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <motion.tr
                    key={cookie.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="p-4 text-cyan-400 font-mono">{cookie.name}</td>
                    <td className="p-4 text-gray-300">{cookie.purpose}</td>
                    <td className="p-4 text-gray-300">{cookie.duration}</td>
                    <td className="p-4 text-gray-300">{cookie.provider}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              You have control over how cookies are used on your device.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Browser Settings</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings. 
                You can typically find these settings in the "Options" or "Preferences" menu.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie preferences</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Cookie Consent</h3>
              </div>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner 
                that allows you to choose which types of cookies to accept.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Accept all cookies</li>
                <li>• Accept only necessary cookies</li>
                <li>• Customize cookie preferences</li>
                <li>• Change preferences anytime</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Some cookies are placed by third-party services that appear on our pages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Google Analytics',
                purpose: 'Website analytics and performance tracking',
                cookies: ['_ga', '_gid', '_gat']
              },
              {
                name: 'Social Media',
                purpose: 'Social media integration and sharing',
                cookies: ['Various platform cookies']
              },
              {
                name: 'Advertising',
                purpose: 'Relevant advertising and campaign tracking',
                cookies: ['Various ad network cookies']
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.purpose}</p>
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Cookies:</span> {service.cookies.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or would like to 
              change your cookie preferences, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
