import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Trash2,
  RefreshCw,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  cookies: CookieItem[];
  necessary: boolean;
}

interface CookieItem {
  name: string;
  purpose: string;
  duration: string;
  provider: string;
}

const Cookies: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['essential']));
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const updateCookiePreference = (category: string, enabled: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie consent
    // // console.log('Cookie preferences saved:', cookiePreferences);
    // Show success message
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    savePreferences();
  };

  const cookieCategories: CookieCategory[] = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      necessary: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session and authentication state',
          duration: 'Session',
          provider: 'Zion Tech Group'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          provider: 'Zion Tech Group'
        },
        {
          name: 'language_preference',
          purpose: 'Remembers your language and regional settings',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'cookie_consent',
          purpose: 'Stores your cookie consent preferences',
          duration: '1 year',
          provider: 'Zion Tech Group'
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - Distinguishes unique users',
          duration: '2 years',
          provider: 'Google'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - Distinguishes unique users',
          duration: '24 hours',
          provider: 'Google'
        },
        {
          name: '_gat',
          purpose: 'Google Analytics - Throttles request rate',
          duration: '1 minute',
          provider: 'Google'
        },
        {
          name: 'amplitude_id',
          purpose: 'Amplitude Analytics - User behavior tracking',
          duration: '10 years',
          provider: 'Amplitude'
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - Tracks conversions and retargeting',
          duration: '3 months',
          provider: 'Facebook'
        },
        {
          name: 'ads_prefs',
          purpose: 'Google Ads - Stores advertising preferences',
          duration: '1 year',
          provider: 'Google'
        },
        {
          name: 'linkedin_oid',
          purpose: 'LinkedIn Insight Tag - Conversion tracking',
          duration: '2 years',
          provider: 'LinkedIn'
        },
        {
          name: 'twitter_id',
          purpose: 'Twitter Pixel - Conversion and retargeting',
          duration: '2 years',
          provider: 'Twitter'
        }
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      necessary: false,
      cookies: [
        {
          name: 'user_preferences',
          purpose: 'Stores user interface preferences and settings',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'chat_widget',
          purpose: 'Remembers chat widget state and history',
          duration: '30 days',
          provider: 'Zion Tech Group'
        },
        {
          name: 'form_autocomplete',
          purpose: 'Enables form autocomplete functionality',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'theme_preference',
          purpose: 'Remembers your theme preference (light/dark)',
          duration: '1 year',
          provider: 'Zion Tech Group'
        }
      ]
    }
  ];

  const lastUpdated = 'December 15, 2024';
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              to recognize you when you visit our website and how we use this information.
            </p>
            
            {/* Policy Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 border border-slate-600/30 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300 text-sm">Last Updated</span>
                </div>
                <p className="text-white font-medium">{lastUpdated}</p>
              </div>
              
              <div className="bg-white/10 border border-slate-600/30 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm">Effective Date</span>
                </div>
                <p className="text-white font-medium">{effectiveDate}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cookie Preferences Manager */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Cookie Preferences Manager
            </h2>
            <p className="text-slate-300 mb-8 text-center">
              Manage your cookie preferences below. Essential cookies are always enabled as they are necessary for the website to function.
            </p>
            
            {/* Cookie Categories */}
            <div className="space-y-6 mb-8">
              {cookieCategories.map((category) => (
                <div key={category.id} className="bg-white/5 border border-slate-600/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                        <p className="text-slate-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {category.necessary ? (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                          Always Active
                        </span>
                      ) : (
                        <button
                          onClick={() => updateCookiePreference(category.id, !cookiePreferences[category.id as keyof typeof cookiePreferences])}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                            cookiePreferences[category.id as keyof typeof cookiePreferences]
                              ? 'bg-cyan-500'
                              : 'bg-slate-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[category.id as keyof typeof cookiePreferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      )}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {expandedCategories.has(category.id) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {expandedCategories.has(category.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-600/30 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div className="font-semibold text-slate-300">Cookie Name</div>
                          <div className="font-semibold text-slate-300">Purpose</div>
                          <div className="font-semibold text-slate-300">Duration</div>
                          <div className="font-semibold text-slate-300">Provider</div>
                          
                          {category.cookies.map((cookie, index) => (
                            <React.Fragment key={index}>
                              <div className="text-slate-400">{cookie.name}</div>
                              <div className="text-slate-400">{cookie.purpose}</div>
                              <div className="text-slate-400">{cookie.duration}</div>
                              <div className="text-slate-400">{cookie.provider}</div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={acceptAll}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={savePreferences}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cookie Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              What Are Cookies?
            </h2>
            <div className="bg-white/5 border border-slate-600/30 rounded-xl p-8 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Definition</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit a website. 
                    They help the website remember information about your visit, such as your preferred 
                    language and other settings, which can make your next visit easier and more useful.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">How They Work</h3>
                  <p className="text-slate-300 leading-relaxed">
                    When you visit our website, we may send one or more cookies to your device. 
                    These cookies help us provide you with a better experience by remembering your 
                    preferences and analyzing how you use our site.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookie Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Managing Your Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Most web browsers allow you to control cookies through their settings preferences.
                </p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Chrome: Settings → Privacy and Security</li>
                  <li>• Firefox: Options → Privacy & Security</li>
                  <li>• Safari: Preferences → Privacy</li>
                  <li>• Edge: Settings → Cookies and permissions</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Clear Cookies</h3>
                <p className="text-slate-400 text-sm mb-4">
                  You can delete existing cookies and clear your browser's cache at any time.
                </p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Clear browsing data</li>
                  <li>• Remove specific cookies</li>
                  <li>• Clear cache and cookies</li>
                  <li>• Reset browser settings</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Third-Party Tools</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Use browser extensions and tools to manage cookies more effectively.
                </p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Cookie blockers</li>
                  <li>• Privacy extensions</li>
                  <li>• Ad blockers</li>
                  <li>• Tracking protection</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Impact of Disabling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Impact of Disabling Cookies
            </h2>
            <div className="bg-white/5 border border-slate-600/30 rounded-xl p-8 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-cyan-400">What Happens If You Disable:</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Some website features may not work properly</li>
                    <li>• You may need to re-enter information repeatedly</li>
                    <li>• Personalized content may not be available</li>
                    <li>• Analytics and performance data may be limited</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-green-400">What Still Works:</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Basic website functionality</li>
                    <li>• Essential services and features</li>
                    <li>• Security and authentication</li>
                    <li>• Core content and information</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              If you have questions about our use of cookies or need help managing your preferences, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-slate-400 text-sm">privacy@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Download PDF</h4>
                  <p className="text-slate-400 text-sm">Cookie Policy</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Privacy Team
              </button>
              <button className="px-8 py-3 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                Download Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
