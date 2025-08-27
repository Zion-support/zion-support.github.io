import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Cookie,
  Settings,
  Eye,
  EyeOff,
  Check,
  X,
  Info,
  AlertTriangle,
  Lock,
  Database,
  Globe,
  User,
  Bell,
  BarChart3,
  Target,
  Zap,
  Heart,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Crown,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Cookies = () => {
  const [expandedSections, setExpandedSections] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Session management',
        'Load balancing'
      ],
      alwaysActive: true
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Language preferences',
        'Region settings',
        'User interface customization',
        'Form data retention'
      ],
      alwaysActive: false
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Page views and navigation',
        'User behavior patterns',
        'Performance metrics',
        'Error tracking'
      ],
      alwaysActive: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      examples: [
        'Ad personalization',
        'Campaign tracking',
        'Social media integration',
        'Retargeting'
      ],
      alwaysActive: false
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and provide enhanced functionality.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      examples: [
        'Theme preferences',
        'Content recommendations',
        'Customized layouts',
        'Saved searches'
      ],
      alwaysActive: false
    }
  ];

  const cookieTableData = [
    {
      name: 'session_id',
      purpose: 'Maintains your session across page visits',
      duration: 'Session',
      category: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'language_pref',
      purpose: 'Remembers your preferred language',
      duration: '1 year',
      category: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: 'analytics_id',
      purpose: 'Tracks website usage for improvements',
      duration: '2 years',
      category: 'Analytics',
      provider: 'Zion Tech Group'
    },
    {
      name: 'marketing_tracker',
      purpose: 'Delivers personalized advertisements',
      duration: '90 days',
      category: 'Marketing',
      provider: 'Zion Tech Group'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
                Manage Cookies
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Learn about how Zion Tech Group uses cookies and similar technologies
              to enhance your browsing experience.
            </p>
            <p className="text-zion-slate-light mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Are Cookies?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience and improve our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Storage</h3>
                <p className="text-zion-slate-light">
                  Cookies store small amounts of data on your device to remember your preferences and settings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Personalization</h3>
                <p className="text-zion-slate-light">
                  They help us provide personalized content and remember your choices for future visits.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics</h3>
                <p className="text-zion-slate-light">
                  Cookies help us understand how our website is used and identify areas for improvement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We use different types of cookies for various purposes. You can control which types
              of cookies are active on your device.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-zion-slate-light">{category.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      {expandedSections[category.id] ? (
                        <>
                          <span>Collapse</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Expand</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {expandedSections[category.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zion-cyan/20 pt-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                          <ul className="space-y-2">
                            {category.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                                <Check className="w-4 h-4 text-zion-cyan" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Status:</h4>
                          <div className="flex items-center gap-2">
                            {category.alwaysActive ? (
                              <>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-green-400">Always Active</span>
                              </>
                            ) : (
                              <>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <span className="text-yellow-400">User Controlled</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Table */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detailed Cookie Information
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Below is a comprehensive list of cookies used on our website with detailed information
                about their purpose, duration, and provider.
              </p>
            </div>

            <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-blue-dark/80">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zion-cyan/20">
                    {cookieTableData.map((cookie, index) => (
                      <tr key={index} className="hover:bg-zion-blue-dark/30 transition-colors">
                        <td className="px-6 py-4 text-zion-cyan font-medium">{cookie.name}</td>
                        <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.duration}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cookie.category === 'Essential' ? 'bg-green-500/20 text-green-400' :
                            cookie.category === 'Functional' ? 'bg-blue-500/20 text-blue-400' :
                            cookie.category === 'Analytics' ? 'bg-purple-500/20 text-purple-400' :
                            cookie.category === 'Marketing' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-indigo-500/20 text-indigo-400'
                          }`}>
                            {cookie.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              You have control over which cookies are active on your device.
              Essential cookies cannot be disabled as they are necessary for the website to function.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-zion-slate-light mb-4">
                  Most web browsers allow you to control cookies through their settings.
                  You can delete existing cookies and choose whether to accept new ones.
                </p>
                <button className="bg-zion-cyan/20 text-zion-cyan border border-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Learn How
                </button>
              </div>

              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-zion-slate-light mb-4">
                  When you first visit our website, you'll see a cookie consent banner
                  where you can choose your preferences.
                </p>
                <button className="bg-zion-cyan/20 text-zion-cyan border border-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Update Preferences
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                If you have questions about our cookie policy or need assistance managing your preferences,
                our support team is here to help.
              </p>
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy.
            Learn more about how we handle your data and protect your rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Privacy Policy
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
