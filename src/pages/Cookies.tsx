import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  CheckCircle, 
  XCircle,
  Info,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const CookiesPage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session and login state',
          duration: 'Session',
          provider: 'Zion Tech Group'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          provider: 'Zion Tech Group'
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - tracks unique visitors',
          duration: '2 years',
          provider: 'Google'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - tracks page views',
          duration: '24 hours',
          provider: 'Google'
        }
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      required: false,
      cookies: [
        {
          name: 'language_pref',
          purpose: 'Remembers your language preference',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'theme_pref',
          purpose: 'Remembers your theme preference',
          duration: '1 year',
          provider: 'Zion Tech Group'
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      required: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions',
          duration: '3 months',
          provider: 'Facebook'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Cookie className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Cookie Policy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie
              <span className="text-gradient"> Policy</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience 
              on our website and how you can control them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Cookie Settings
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Accept All Cookies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cookies are small text files that are stored on your device when you visit our website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Information Storage</h3>
              <p className="text-zion-slate-light">
                Cookies store information about your preferences and how you use our website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Privacy</h3>
              <p className="text-zion-slate-light">
                We use cookies responsibly and in accordance with privacy regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">User Control</h3>
              <p className="text-zion-slate-light">
                You have full control over which cookies you accept and can change preferences anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Categories Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use different types of cookies for various purposes. Learn about each category below.
            </p>
          </motion.div>

          <div className="space-y-6">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-8 text-left hover:bg-zion-slate-dark/70 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        {category.required ? (
                          <Shield className="w-6 h-6 text-white" />
                        ) : (
                          <Settings className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-zion-slate-light">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        category.required
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {category.required ? 'Required' : 'Optional'}
                      </span>
                      {expandedCategory === category.id ? (
                        <ChevronUp className="w-6 h-6 text-zion-cyan" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-zion-cyan" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8 border-t border-zion-cyan/20"
                  >
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Cookies in this category:</h4>
                      <div className="space-y-4">
                        {category.cookies.map((cookie, cookieIndex) => (
                          <div
                            key={cookieIndex}
                            className="bg-zion-slate-dark/30 border border-zion-cyan/10 rounded-lg p-4"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-zion-slate-light">Name:</span>
                                <span className="text-white ml-2 font-mono">{cookie.name}</span>
                              </div>
                              <div>
                                <span className="text-zion-slate-light">Purpose:</span>
                                <span className="text-white ml-2">{cookie.purpose}</span>
                              </div>
                              <div>
                                <span className="text-zion-slate-light">Duration:</span>
                                <span className="text-white ml-2">{cookie.duration}</span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="text-zion-slate-light">Provider:</span>
                              <span className="text-white ml-2">{cookie.provider}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              You have full control over your cookie preferences and can change them at any time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Accept Cookies</h3>
              </div>
              <p className="text-zion-slate-light mb-6">
                Accept all cookies to get the full experience of our website, including 
                personalized content and analytics.
              </p>
              <button className="btn-futuristic w-full">
                Accept All Cookies
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Customize Settings</h3>
              </div>
              <p className="text-zion-slate-light mb-6">
                Choose which types of cookies you want to accept and customize your 
                privacy preferences.
              </p>
              <button className="btn-neon w-full">
                Cookie Settings
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/privacy"
                className="btn-neon px-8 py-4 text-lg"
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

export default CookiesPage;
