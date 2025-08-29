import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building,
  Heart,
  Star,
  Award,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Info,
  Lock,
  BarChart3,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const cookieCategories = [
  {
    type: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    examples: ['Authentication', 'Security', 'Session management', 'Shopping cart'],
    necessary: true,
    duration: 'Session to 1 year',
    color: 'from-green-400 to-emerald-500'
  },
  {
    type: 'Performance Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    examples: ['Analytics', 'Error tracking', 'Performance monitoring', 'User behavior'],
    necessary: false,
    duration: '1 month to 2 years',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    type: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    examples: ['Language preferences', 'User settings', 'Customization', 'Remember choices'],
    necessary: false,
    duration: '1 month to 1 year',
    color: 'from-purple-400 to-pink-500'
  },
  {
    type: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    examples: ['Advertising', 'Social media', 'Campaign tracking', 'Targeted content'],
    necessary: false,
    duration: '1 month to 2 years',
    color: 'from-yellow-400 to-orange-500'
  }
];

const cookieDetails = [
  {
    name: '_ga',
    category: 'Performance',
    purpose: 'Used to distinguish unique users',
    provider: 'Google Analytics',
    duration: '2 years',
    type: 'HTTP Cookie'
  },
  {
    name: '_gid',
    category: 'Performance',
    purpose: 'Used to distinguish users',
    provider: 'Google Analytics',
    duration: '24 hours',
    type: 'HTTP Cookie'
  },
  {
    name: '_gat',
    category: 'Performance',
    purpose: 'Used to throttle request rate',
    provider: 'Google Analytics',
    duration: '1 minute',
    type: 'HTTP Cookie'
  },
  {
    name: 'session_id',
    category: 'Essential',
    purpose: 'Maintains user session',
    provider: 'Zion Tech Group',
    duration: 'Session',
    type: 'HTTP Cookie'
  },
  {
    name: 'user_preferences',
    category: 'Functional',
    purpose: 'Stores user preferences',
    provider: 'Zion Tech Group',
    duration: '1 year',
    type: 'HTTP Cookie'
  },
  {
    name: 'ad_tracking',
    category: 'Marketing',
    purpose: 'Tracks advertising performance',
    provider: 'Third Party',
    duration: '1 month',
    type: 'HTTP Cookie'
  }
];

const browserInstructions = [
  {
    browser: 'Chrome',
    icon: '🌐',
    steps: [
      'Click the three dots menu in the top right',
      'Go to Settings > Privacy and security',
      'Click Cookies and other site data',
      'Choose your preferred cookie settings'
    ]
  },
  {
    browser: 'Firefox',
    icon: '🦊',
    steps: [
      'Click the menu button in the top right',
      'Go to Options > Privacy & Security',
      'Under Cookies and Site Data, choose your settings',
      'Click Manage Data to remove specific cookies'
    ]
  },
  {
    browser: 'Safari',
    icon: '🍎',
    steps: [
      'Click Safari in the top menu',
      'Go to Preferences > Privacy',
      'Choose your cookie settings',
      'Click Manage Website Data for specific sites'
    ]
  },
  {
    browser: 'Edge',
    icon: '🌊',
    steps: [
      'Click the three dots menu in the top right',
      'Go to Settings > Cookies and site permissions',
      'Click Cookies and site data',
      'Choose your preferred cookie settings'
    ]
  }
];

const mobileInstructions = [
  {
    platform: 'iOS (Safari)',
    icon: '📱',
    steps: [
      'Go to Settings > Safari',
      'Tap Privacy & Security',
      'Toggle on/off Block All Cookies',
      'Tap Manage Website Data for specific sites'
    ]
  },
  {
    platform: 'Android (Chrome)',
    icon: '🤖',
    steps: [
      'Open Chrome and tap the three dots menu',
      'Go to Settings > Site settings',
      'Tap Cookies',
      'Choose your preferred cookie settings'
    ]
  }
];

const contactInfo = [
  {
    title: 'Privacy Officer',
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
    details: [
      'Email: privacy@ziontechgroup.com',
      'Phone: +1 (555) 012-3456',
      'Response time: Within 48 hours'
    ]
  },
  {
    title: 'Data Protection',
    icon: Lock,
    color: 'from-green-400 to-emerald-500',
    details: [
      'Email: dataprotection@ziontechgroup.com',
      'Phone: +1 (555) 012-3457',
      'Response time: Within 24 hours'
    ]
  },
  {
    title: 'Technical Support',
    icon: Settings,
    color: 'from-purple-400 to-pink-500',
    details: [
      'Email: support@ziontechgroup.com',
      'Phone: +1 (555) 012-3458',
      'Response time: Within 24 hours'
    ]
  }
];

export default function Cookies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCookies = selectedCategory === 'all' 
    ? cookieDetails 
    : cookieDetails.filter(cookie => cookie.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies. Understand our cookie policy and manage your preferences."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/privacy"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Last Updated</span>
            </div>
            <p className="text-white text-lg">January 15, 2024</p>
            <p className="text-slate-400 text-sm mt-2">
              This cookie policy is effective as of the date above and applies to all users of our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">How Cookies Work</h3>
              </div>
              <p className="text-slate-300 mb-4">
                When you visit our website, your browser sends a request to our server. Our server responds with the webpage content and may also send cookies to your browser. Your browser stores these cookies and sends them back to our server with future requests.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Cookies are stored locally on your device</li>
                <li>• They contain information about your preferences</li>
                <li>• They help us remember your settings</li>
                <li>• They improve website performance and security</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cookie Security</h3>
              </div>
              <p className="text-slate-300 mb-4">
                We take cookie security seriously and implement measures to protect your information. Our cookies are encrypted and we only use them for legitimate purposes to improve your experience.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• All cookies are encrypted</li>
                <li>• We never store sensitive personal data</li>
                <li>• Cookies expire automatically</li>
                <li>• You can delete cookies at any time</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes. Learn about each category and how they benefit your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.type}</h3>
                  </div>
                  {category.necessary && (
                    <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full">
                      Necessary
                    </span>
                  )}
                </div>
                
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-slate-400 text-sm font-medium mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-slate-400">
                  <span className="font-medium">Duration:</span> {category.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Cookie List */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detailed Cookie Information
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              View detailed information about specific cookies we use and their purposes.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['all', 'Essential', 'Performance', 'Functional', 'Marketing'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </motion.div>

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {filteredCookies.map((cookie, index) => (
                    <tr key={cookie.name} className="hover:bg-slate-700/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.category === 'Essential' ? 'bg-green-400/10 text-green-400' :
                          cookie.category === 'Performance' ? 'bg-blue-400/10 text-blue-400' :
                          cookie.category === 'Functional' ? 'bg-purple-400/10 text-purple-400' :
                          'bg-yellow-400/10 text-yellow-400'
                        }`}>
                          {cookie.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{cookie.provider}</td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn how to manage cookies in your browser and control your privacy settings.
            </p>
          </motion.div>

          {/* Browser Instructions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Desktop Browser Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {browserInstructions.map((browser, index) => (
                <motion.div
                  key={browser.browser}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{browser.icon}</div>
                    <h4 className="text-lg font-semibold text-white">{browser.browser}</h4>
                  </div>
                  <ol className="space-y-2 text-sm text-slate-300">
                    {browser.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <span className="text-cyan-400 font-medium text-xs mt-1">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Instructions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Mobile Device Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mobileInstructions.map((platform, index) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{platform.icon}</div>
                    <h4 className="text-lg font-semibold text-white">{platform.platform}</h4>
                  </div>
                  <ol className="space-y-2 text-sm text-slate-300">
                    {platform.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <span className="text-cyan-400 font-medium text-xs mt-1">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team is here to help you understand our cookie policy and manage your preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-300 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help with Cookie Settings?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We're committed to transparency about our cookie usage. Contact us if you need assistance managing your preferences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Support
              </Link>
              <Link
                to="/privacy"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
