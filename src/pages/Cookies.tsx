import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, BarChart3, Users, Globe, Info } from 'lucide-react';

const Cookies: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const cookieTypes = [
    {
      category: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies'],
      purpose: 'Website functionality and security'
    },
    {
      category: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis'],
      purpose: 'Website performance and user experience improvement'
    },
    {
      category: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      examples: ['Social media pixels', 'Advertising networks', 'Retargeting cookies'],
      purpose: 'Personalized marketing and advertising'
    },
    {
      category: 'Preference Cookies',
      description: 'These cookies remember your preferences and settings for a better user experience.',
      examples: ['Language preferences', 'Theme settings', 'Form data storage'],
      purpose: 'Personalized user experience'
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat'],
      duration: 'Up to 2 years'
    },
    {
      name: 'LinkedIn',
      purpose: 'Social media integration and advertising',
      cookies: ['li_gc', 'li_sugr', 'UserMatchHistory'],
      duration: 'Up to 1 year'
    },
    {
      name: 'Twitter',
      purpose: 'Social media integration and content sharing',
      cookies: ['auth_token', 'ct0', 'twid'],
      duration: 'Up to 2 years'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-4"
          >
            Learn how we use cookies to enhance your browsing experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-blue-100"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-slate-700 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences, 
              analyzing website traffic, and personalizing content.
            </p>
            <p className="text-slate-700">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              on our website and how you can manage your cookie preferences.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={type.category} className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {type.category}
                  </h3>
                  <p className="text-slate-700 mb-3">{type.description}</p>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-slate-600">Examples:</span>
                    <ul className="mt-1 space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-slate-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-600">Purpose:</span>
                    <p className="text-sm text-slate-600 mt-1">{type.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Third Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Third-Party Cookies
            </h2>
            <p className="text-slate-700 mb-6">
              We use third-party services that may place cookies on your device. These services help 
              us provide better functionality and analyze website performance.
            </p>
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={service.name} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-slate-700 mb-3">{service.purpose}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-600">Cookies:</span>
                      <p className="text-slate-600 mt-1">{service.cookies.join(', ')}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-600">Duration:</span>
                      <p className="text-slate-600 mt-1">{service.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cookie Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-slate-700 mb-4">
              You have several options for managing cookies on our website:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Browser Settings</h4>
                  <p className="text-slate-700 text-sm">
                    Most web browsers allow you to control cookies through their settings. You can 
                    delete existing cookies and choose whether to accept new ones.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Cookie Consent</h4>
                  <p className="text-slate-700 text-sm">
                    When you first visit our website, you'll see a cookie consent banner. You can 
                    choose which types of cookies to accept or reject.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Opt-Out Tools</h4>
                  <p className="text-slate-700 text-sm">
                    You can opt out of certain third-party cookies through their respective opt-out 
                    mechanisms (e.g., Google Analytics opt-out browser add-on).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookie Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How Long Do Cookies Last?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Session Cookies</h4>
                  <p className="text-slate-700 text-sm">
                    These cookies are deleted when you close your browser and are used for temporary 
                    session management.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Persistent Cookies</h4>
                  <p className="text-slate-700 text-sm">
                    These cookies remain on your device for a set period (usually up to 2 years) 
                    and are used to remember your preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                <div>
                  <h4 className="font-medium text-slate-900">Third-Party Cookies</h4>
                  <p className="text-slate-700 text-sm">
                    The duration of third-party cookies is determined by the respective service providers 
                    and may vary.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact of Disabling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              What Happens If You Disable Cookies?
            </h2>
            <p className="text-slate-700 mb-4">
              While you can disable cookies, please note that some features of our website may not 
              function properly:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">⚠</span>
                Some website functionality may be limited
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">⚠</span>
                Personalized content and recommendations may not work
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">⚠</span>
                Analytics data may be incomplete
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">⚠</span>
                You may need to re-enter information on return visits
              </li>
            </ul>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Updates to This Cookie Policy
            </h2>
            <p className="text-slate-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, or legal requirements. When we make changes, we will update the "Last Updated" 
              date at the top of this policy.
            </p>
            <p className="text-slate-700">
              We encourage you to review this Cookie Policy periodically to stay informed about how 
              we use cookies and similar technologies.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p><strong>Phone:</strong> +1 (302) 464-0950</p>
              <p><strong>Address:</strong> Zion Tech Group, Wilmington, DE</p>
            </div>
            <p className="text-slate-700 mt-4">
              We will respond to your inquiry as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            We're committed to transparency about how we use cookies. If you have any questions 
            or need help managing your preferences, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;