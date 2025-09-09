import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle,
  Info,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  necessary: boolean;
  enabled: boolean;
  cookies: string[];
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly. They cannot be disabled.',
    necessary: true,
    enabled: true,
    cookies: ['session_id', 'csrf_token', 'language_preference']
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    necessary: false,
    enabled: false,
    cookies: ['_ga', '_gid', '_gat', 'analytics_session']
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
    necessary: false,
    enabled: false,
    cookies: ['user_preferences', 'theme_selection', 'language_choice']
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
    necessary: false,
    enabled: false,
    cookies: ['_fbp', 'ads_prefs', 'marketing_tracking']
  }
];

export default function Cookies() {
  const [cookieSettings, setCookieSettings] = useState(cookieCategories);
  const [showSettings, setShowSettings] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleCookieCategory = (categoryId: string, enabled: boolean) => {
    setCookieSettings(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? { ...category, enabled }
          : category
      )
    );
  };

  const acceptAll = () => {
    setCookieSettings(prev => 
      prev.map(category => ({ ...category, enabled: true }))
    );
  };

  const rejectAll = () => {
    setCookieSettings(prev => 
      prev.map(category => ({ 
        ...category, 
        enabled: category.necessary 
      }))
    );
  };

  const savePreferences = () => {
    // Here you would typically save preferences to localStorage or send to backend
    localStorage.setItem('cookie-preferences', JSON.stringify(cookieSettings));
    setShowSettings(false);
  };

  const getEnabledCookiesCount = () => {
    return cookieSettings.filter(category => category.enabled).length;
  };

  const getTotalCookiesCount = () => {
    return cookieSettings.reduce((total, category) => total + category.cookies.length, 0);
  };

  return (
    <>
      <SEO 
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and tracking technologies to improve your experience on our website."
        canonical="https://ziontechgroup.com/cookies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. Learn more about how we use cookies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setShowSettings(true)}
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Manage Cookie Preferences
                </button>
                <a 
                  href="/privacy" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Overview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                <p className="text-zion-slate-light">
                  Essential cookies help secure your session and protect against fraud.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Settings className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Functionality</h3>
                <p className="text-zion-slate-light">
                  Functional cookies remember your preferences and enhance site features.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl"
              >
                <Eye className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
                <p className="text-zion-slate-light">
                  Analytics cookies help us improve our website and user experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We categorize cookies based on their purpose and necessity for website functionality.
              </p>
            </motion.div>

            <div className="space-y-6">
              {cookieCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {category.necessary ? (
                        <Shield className="w-6 h-6 text-zion-cyan" />
                      ) : (
                        <Settings className="w-6 h-6 text-zion-cyan" />
                      )}
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      {category.necessary && (
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      {expandedCategories.includes(category.id) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  
                  {expandedCategories.includes(category.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-zion-cyan/20 pt-4"
                    >
                      <h4 className="text-sm font-medium text-zion-slate-light mb-2">Cookies in this category:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.cookies.map(cookie => (
                          <span 
                            key={cookie}
                            className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-sm text-zion-cyan"
                          >
                            {cookie}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                You have control over which cookies are stored on your device. 
                You can change your preferences at any time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Current Settings</h3>
                  <div className="space-y-3">
                    {cookieSettings.map(category => (
                      <div key={category.id} className="flex items-center justify-between">
                        <span className="text-zion-slate-light">{category.name}</span>
                        <div className="flex items-center space-x-2">
                          {category.necessary ? (
                            <span className="text-zion-cyan text-sm">Required</span>
                          ) : (
                            <>
                              <button
                                onClick={() => toggleCookieCategory(category.id, true)}
                                className={`p-1 rounded ${category.enabled ? 'text-green-500' : 'text-zion-slate-light'}`}
                              >
                                <CheckCircle className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => toggleCookieCategory(category.id, false)}
                                className={`p-1 rounded ${!category.enabled ? 'text-red-500' : 'text-zion-slate-light'}`}
                              >
                                <XCircle className="w-5 h-5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={acceptAll}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Accept All Cookies
                    </button>
                    <button
                      onClick={rejectAll}
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Reject Non-Essential
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="w-full px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
                    >
                      Customize Settings
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-zion-cyan/20 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">
                    Cookies enabled: {getEnabledCookiesCount()} of {getTotalCookiesCount()}
                  </span>
                  <button
                    onClick={savePreferences}
                    className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Browser Settings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browser Cookie Settings
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                You can also manage cookies through your web browser settings. 
                The process varies depending on your browser.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Chrome</h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  Settings → Privacy and security → Cookies and other site data
                </p>
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light text-sm"
                >
                  Learn more →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Firefox</h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
                <a 
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light text-sm"
                >
                  Learn more →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Safari</h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  Preferences → Privacy → Manage Website Data
                </p>
                <a 
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light text-sm"
                >
                  Learn more →
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                If you have any questions about our cookie policy or how we use cookies, 
                our team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Contact Us
                </a>
                <a 
                  href="/help" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Help Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSettings(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-zion-slate-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {cookieSettings.map(category => (
                <div key={category.id} className="border border-zion-cyan/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{category.name}</h4>
                    {category.necessary ? (
                      <span className="text-zion-cyan text-sm">Required</span>
                    ) : (
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={category.enabled}
                          onChange={(e) => toggleCookieCategory(category.id, e.target.checked)}
                          className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-cyan/20 rounded focus:ring-zion-cyan"
                        />
                        <span className="text-zion-slate-light">Enable</span>
                      </label>
                    )}
                  </div>
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-zion-slate-light hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={savePreferences}
                className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}