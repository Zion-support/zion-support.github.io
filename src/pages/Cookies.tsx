import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Eye, Settings, Database, Calendar, Mail, Phone, Info, AlertTriangle } from 'lucide-react';

const Cookies: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Basic functionality"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Page views", "User behavior", "Performance metrics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "User settings", "Customization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const cookieDetails = [
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
      purpose: "Maintains your session while using our services",
      duration: "Session",
      provider: "Zion Tech Group"
    },
    {
      name: "preferences",
      purpose: "Stores your website preferences and settings",
      duration: "1 year",
      provider: "Zion Tech Group"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Cookie
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 text-cyan-400 mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website, and how you can control them.
              </p>
            </motion.div>

            {/* Cookie Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
                Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-2">Examples:</p>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How We Use Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                How We Use Cookies
              </h2>
              <p className="text-gray-300 mb-4">We use cookies for several purposes to improve your experience:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Security & Authentication</h3>
                      <p className="text-gray-300 text-sm">Protect your account and maintain secure sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Analytics & Performance</h3>
                      <p className="text-gray-300 text-sm">Understand how our website is used and improve performance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Preferences & Customization</h3>
                      <p className="text-gray-300 text-sm">Remember your settings and personalize your experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Marketing & Advertising</h3>
                      <p className="text-gray-300 text-sm">Deliver relevant content and measure campaign effectiveness</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specific Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 text-cyan-400 mr-3" />
                Specific Cookies We Use
              </h2>
              <p className="text-gray-300 mb-6">Below is a list of specific cookies we use and their purposes:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-white font-semibold">Cookie Name</th>
                      <th className="py-3 px-4 text-white font-semibold">Purpose</th>
                      <th className="py-3 px-4 text-white font-semibold">Duration</th>
                      <th className="py-3 px-4 text-white font-semibold">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie, index) => (
                      <motion.tr
                        key={cookie.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border-b border-gray-700/30 hover:bg-gray-700/20"
                      >
                        <td className="py-3 px-4 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.purpose}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.duration}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{cookie.provider}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Third-Party Cookies
              </h2>
              <p className="text-gray-300 mb-4">Some cookies on our website are set by third-party services that we use to enhance functionality:</p>
              <div className="space-y-4">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Google Analytics</h3>
                  <p className="text-gray-300 text-sm mb-3">We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information about your use of our site.</p>
                  <p className="text-gray-300 text-sm">You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300 underline">Google Analytics Opt-out Browser Add-on</a>.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Social Media Platforms</h3>
                  <p className="text-gray-300 text-sm">We may integrate social media features that set cookies to enable sharing and interaction with social media platforms.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">Payment Processors</h3>
                  <p className="text-gray-300 text-sm">If you make payments through our website, payment processors may set cookies to ensure secure transactions.</p>
                </div>
              </div>
            </motion.div>

            {/* Cookie Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 text-cyan-400 mr-3" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-6">You have several options for managing cookies on our website:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 text-sm mb-3">Most web browsers allow you to control cookies through their settings. You can:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Block all cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delete existing cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Set preferences for specific sites</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-300 text-sm mb-3">When you first visit our website, you'll see a cookie consent banner that allows you to:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Accept all cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customize preferences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reject non-essential cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-400 text-sm">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic site operation.
                </p>
              </div>
            </motion.div>

            {/* Updates to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 text-cyan-400 mr-3" />
                Updates to This Policy
              </h2>
              <p className="text-gray-300 mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
              <div className="space-y-3 text-gray-300">
                <p>When we make changes to this policy:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We will update the "Last updated" date at the top of this policy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We may notify you through our website or email for significant changes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your continued use of our website after changes constitutes acceptance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                Questions About Cookies?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">privacy@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                We will respond to your inquiry within 5 business days and help you understand how we use cookies on our website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
