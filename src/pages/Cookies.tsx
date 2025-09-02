import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, CheckCircle, X, AlertCircle } from 'lucide-react';

const Cookies: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieTypes = [
    {
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly',
      required: true,
      examples: ['Authentication', 'Security', 'Load balancing'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising',
      required: false,
      examples: ['Ad targeting', 'Social media', 'Retargeting'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Preference Cookies',
      description: 'Remember your choices and preferences',
      required: false,
      examples: ['Language settings', 'Theme preferences', 'Customization'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handlePreferenceChange = (type: string) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save preferences to localStorage/cookies
    alert('Cookie preferences saved!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    savePreferences();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Cookie className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Cookie Policy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn about how we use cookies and similar technologies to improve your 
              experience on our website.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance functionality, analyze site usage, 
              and personalize content and advertisements. You can control cookie settings through 
              your browser or our cookie preference center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                    {type.required && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manage Cookie Preferences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can customize your cookie preferences below. Note that disabling certain cookies 
              may affect the functionality of our website.
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-6">
              {cookieTypes.map((type, index) => {
                const key = type.name.toLowerCase().replace(/\s+/g, '').replace('cookies', '');
                const isEnabled = cookiePreferences[key as keyof typeof cookiePreferences];
                
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                        {type.required && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          onChange={() => handlePreferenceChange(key)}
                          disabled={type.required}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50"></div>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={acceptAll}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reject Optional Cookies
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Settings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Browser Cookie Settings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can also manage cookies through your browser settings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Chrome</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Go to Settings → Privacy and security → Cookies and other site data
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Firefox</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Go to Options → Privacy & Security → Cookies and Site Data
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Safari</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Go to Preferences → Privacy → Manage Website Data
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Edge</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Go to Settings → Cookies and site permissions → Cookies and site data
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                  <p className="text-gray-600">privacy@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                  <p className="text-gray-600">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;