import React from 'react';'
import { motion } from 'framer-motion';'
import { SEO } from '../components/SEO';
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
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Globe,
  BarChart3,
  Users'
} from 'lucide-react';'
import { Shield, Cookie, Settings, Eye, EyeOff, CheckCircle, XCircle, Info, ExternalLink } from 'lucide-react';'
import { Link } from 'react-router-dom';
export default function Cookies() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [cookiePreferences, setCookiePreferences] = useState({

    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  }) ;

  const cookieTypes = [
    {
'
      id: 'essential','
      name: 'Essential Cookies','
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['
        'Authentication cookies','
        'Security cookies','
        'Session management','
        'Load balancing'
      ],
      icon: Shield,'
      color: 'from-blue-500 to-cyan-500',
      alwaysActive: true
    },
    {
'
      id: 'analytics','
      name: 'Analytics Cookies','
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['
        'Page views and navigation','
        'User behavior patterns','
        'Performance metrics','
        'Error tracking'
      ],
      icon: BarChart3,'
      color: 'from-purple-500 to-pink-500'
    },
    {
'
      id: 'marketing','
      name: 'Marketing Cookies','
      description: 'These cookies are used to deliver personalized advertisements.',
      examples: ['
        'Ad targeting','
        'Campaign performance','
        'User preferences','
        'Conversion tracking'
      ],
      icon: Users,'
      color: 'from-orange-500 to-red-500'
    },
    {
'
      id: 'functional','
      name: 'Functional Cookies','
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['
        'Language preferences','
        'Theme settings','
        'Form data storage','
        'Social media integration'
      ],
      icon: Settings,'
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const cookieDetails = [
    {
'
      name: '_ga','
      purpose: 'Google Analytics - Used to distinguish unique users','
      duration: '2 years','
      provider: 'Google LLC','
      type: 'analytics'
    },
    {
'
      name: '_gid','
      purpose: 'Google Analytics - Used to distinguish users','
      duration: '24 hours','
      provider: 'Google LLC','
      type: 'analytics'
    },
    {
'
      name: '_gat','
      purpose: 'Google Analytics - Used to throttle request rate','
      duration: '1 minute','
      provider: 'Google LLC','
      type: 'analytics'
    },
    {
'
      name: 'session_id','
      purpose: 'Maintains user session state','
      duration: 'Session','
      provider: 'Zion Tech Group','
      type: 'essential'
    },
    {
'
      name: 'csrf_token','
      purpose: 'Cross-site request forgery protection','
      duration: 'Session','
      provider: 'Zion Tech Group','
      type: 'essential'
    },
    {
'
      name: 'user_preferences','
      purpose: 'Stores user interface preferences','
      duration: '1 year','
      provider: 'Zion Tech Group','
      type: 'functional'
    }
  ];

  const toggleSection = (sectionId: string) => {

    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };
  const updateCookiePreference = (type: string, enabled: boolean) => {
'
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({

      ...prev,
      [type]: enabled
    }) ) ;
  };

  const savePreferences = () => {
    // In a real app, this would save preferences and update cookies'
    // console.log('Cookie preferences saved:', cookiePreferences);
    // Show success message'
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({

      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }) ;
    savePreferences () ;
  };

  const rejectAll = () => {
    setCookiePreferences({

      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }) ;
    savePreferences () ;
  };
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}"
      <div className="relative overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center"
          >"
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
              <Cookie className="w-10 h-10 text-white" />
            </div>"            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how Zion Tech Group uses cookies to enhance your browsing experience 
              and provide personalized services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cookie Information Section */}"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>"
              <h2 className="text-3xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>"
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>"
              <p className="text-gray-300">
                We use cookies to make our website work properly, improve its functionality, 
                and provide you with relevant content and advertisements.
              </p>
            </div>"
            <div className="flex justify-center">"
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">"
                <Cookie className="w-16 h-16 text-white" />              </div>
            </div>
          </div>
        </div>
      </section>
"
      <section className="relative py-20 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>"
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center"
          >"
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-6">"
              <Cookie className="w-10 h-10 text-orange-400" />
            </div>"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"              Cookie <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Policy</span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              Learn more about how we use cookies and manage your preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preferences Manager */}"
      <section className="py-16">"
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="max-w-4xl mx-auto"
          >"
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">"
              <div className="text-center mb-8">"
                <h2 className="text-3xl font-bold text-white mb-4">Cookie Preferences</h2>"
                <p className="text-gray-300">
                  Manage your cookie preferences and control how we use cookies on our website
                </p>
              </div>
"
              <div className="space-y-6 mb-8">
                {cookieTypes.map((type) => ("
                  <div key={type.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">"
                    <div className="flex items-center justify-between mb-4">"
                      <div className="flex items-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl mr-4`}>"
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>"
                          <h3 className="text-lg font-bold text-white">{type.name}</h3>"
                          <p className="text-gray-300 text-sm">{type.description}</p>
                        </div>
                      </div>"
                      <div className="flex items-center">"
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input"
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                            onChange={(e) => updateCookiePreference(type.id, e.target.checked)}
                            disabled={type.alwaysActive}"
                            className="sr-only peer"
                          />'"
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                        </label>
                      </div>
                    </div>
                    "
                    <div className="ml-16">"
                      <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>"
                      <ul className="space-y-1">
                        {type.examples.map((example, index) => ("
                          <li key={index} className="flex items-center text-gray-300 text-sm">"
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />                            {example}
                          </li>) ) }
                      </ul>
                    </div>
                  </div>) ) }
              </div>
"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={acceptAll}"
                  className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={rejectAll}"
                  className="px-8 py-3 bg-slate-700/50 text-gray-300 font-semibold rounded-lg hover:bg-slate-600/50 transition-all duration-200"
                >
                  Reject Non - Essential
                </button>
                <button
                  onClick={savePreferences}"
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types Explanation */}"
      <section className="py-20">"
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">Types of Cookies We Use</h2>"
            <p className="text-xl text-gray-300">
              Understanding the different categories of cookies and their purposes
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}"
                className="group"
              >"
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 h-full">`
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-6`}>"
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  "
                  <h3 className="text-xl font-bold text-white mb-4">{type.name}</h3>"
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  "
                  <div className="space-y-2">"
                    <h4 className="text-sm font-semibold text-white">Examples:</h4>"
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => ("
                        <li key={exampleIndex} className="flex items-center text-gray-300 text-xs">"
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />                          {example}
                        </li>) ) }
                    </ul>
                  </div>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Detailed Cookie Information */}"
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">Detailed Cookie Information</h2>"
            <p className="text-xl text-gray-300">
              Comprehensive list of cookies used on our website
            </p>
          </motion.div>
"
          <div className="max-w-4xl mx-auto">"
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden">"
              <div className="p-6">"
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-sm font-semibold text-gray-300 border-b border-slate-600/50 pb-3 mb-4">
                  <div>Cookie Name</div>
                  <div>Purpose</div>
                  <div>Duration</div>
                  <div>Provider</div>
                  <div>Type</div>
                </div>
                "
                <div className="space-y-3">
                  {cookieDetails.map((cookie, index) => (
                    <motion.div
                      key={cookie.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}"
                      className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-sm py-3 border-b border-slate-600/30 last:border-b-0"
                    >"
                      <div className="font-mono text-cyan-400">{cookie.name}</div>"
                      <div className="text-gray-300">{cookie.purpose}</div>"
                      <div className="text-gray-300">{cookie.duration}</div>"
                      <div className="text-gray-300">{cookie.provider}</div>
                      <div>`
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
'
                          cookie.type === 'essential' ? 'bg-blue-500/20 text-blue-400' :'
                          cookie.type === 'analytics' ? 'bg-purple-500/20 text-purple-400' :'
                          cookie.type === 'marketing' ? 'bg-orange-500/20 text-orange-400' :'
                          'bg-green-500/20 text-green-400'`
                        }`}>
                          {cookie.type}
                        </span>
                      </div>
                    </motion.div>) ) }
                </div>
              </div>
            </motion.div>

      {/* Cookie Management */}"
      <section className="py-20">"
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">Managing Your Cookies</h2>"
            <p className="text-xl text-gray-300">
              Learn how to control cookies in your browser and device settings
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}"
              className="text-center"
            >"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-6">"
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>"
                <h3 className="text-lg font-bold text-white mb-4">Browser Settings</h3>"                <p className="text-gray-300 text-sm mb-4">
                  Most browsers allow you to control cookies through their settings menu
                </p>
                <a"
                  href="#""
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}"
              className="text-center"
            >"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">"
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>"
                <h3 className="text-lg font-bold text-white mb-4">Privacy Tools</h3>"                <p className="text-gray-300 text-sm mb-4">
                  Use privacy tools and browser extensions to manage cookies
                </p>
                <a"
                  href="#""
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}"
              className="text-center"
            >"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6">"
                  <Globe className="w-8 h-8 text-green-400" />
                </div>"
                <h3 className="text-lg font-bold text-white mb-4">Global Settings</h3>"                <p className="text-gray-300 text-sm mb-4">
                  Configure global privacy settings for all websites
                </p>
                <a"
                  href="#""
                  className="text-green-400 hover:text-green-300 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}"
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, '
              please don't hesitate to contact us.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="mailto:privacy@ziontechgroup.com""
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 hover:scale-105"
              >"
                <Info className="w-5 h-5 mr-2" />                Contact Privacy Team
              </a>
              <a"
                href="/privacy""
                className="inline-flex items-center px-8 py-3 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200"
              >"
                <Shield className="w-5 h-5 mr-2" />                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
        {/* Cookie Categories */}"
        <div className="space-y-6">
          {cookieCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
            >"
              <div className="flex items-start justify-between mb-4">"
                <div className="flex-1">"
                  <div className="flex items-center mb-2">"
                    <h3 className="text-xl font-semibold text-white mr-3">
                      {category.name}
                    </h3>
                    {category.necessary && ("
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        Always Active
                      </span>
                    )}
                  </div>"
                  <p className="text-gray-300 mb-3">{category.description}</p>"
                  <p className="text-sm text-gray-400 mb-3">
                    <strong>Purpose:</strong> {category.purpose}
                  </p>"
                  <div className="flex flex-wrap gap-2">
                    {category.cookies.map((cookie, cookieIndex) => (
                      <span
                        key={cookieIndex}"
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full font-mono"
                      >
                        {cookie}
                      </span>) ) }
                  </div>
                </div>
                "
                <div className="ml-6 flex items-center">
                  {category.necessary ? ("
                    <div className="flex items-center text-blue-400">"
                      <CheckCircle className="w-6 h-6 mr-2" />"                      <span className="text-sm font-medium">Required</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCookieToggle(category.id)}`
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${

                        cookiePreferences[category.id as keyof typeof cookiePreferences]'
                          ? 'bg-green-600 hover:bg-green-700 text-white''
                          : 'bg-gray-600 hover:bg-gray-700 text-white'`
                      }`}
                    >
                      {cookiePreferences[category.id as keyof typeof cookiePreferences] ? (
                        <>"
                          <Eye className="w-4 h-4 mr-2" />
                          Enabled
                        </>
                      ) : (
                        <>"
                          <EyeOff className="w-4 h-4 mr-2" />                          Disabled
                        </>) }
                    </button>) }
                </div>
              </div>
            </motion.div>) ) }
        </div>

        {/* Cookie Management */}"
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">"
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Manage Your Cookie Preferences
          </h2>
          "
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={acceptAll}"
              className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >"
              <CheckCircle className="w-5 h-5 mr-2" />              Accept All Cookies
            </button>
            
            <button
              onClick={rejectAll}"
              className="flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >"
              <XCircle className="w-5 h-5 mr-2" />              Reject Non-Essential
            </button>
            
            <button
              onClick={savePreferences}"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >"
              <Settings className="w-5 h-5 mr-2" />              Save Preferences
            </button>
          </div>
"
          <div className="text-center">"
            <p className="text-gray-300 mb-4">
              Your preferences will be saved and applied to this website. You can change these 
              settings at any time by visiting this page again.
            </p>"
            <p className="text-sm text-gray-400">
              Note: Some features of our website may not function properly if you disable certain cookies.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">"
            <div className="flex items-center mb-4">"
              <Shield className="w-8 h-8 text-blue-400 mr-3" />"              <h3 className="text-xl font-semibold text-white">Data Protection</h3>
            </div>"
            <p className="text-gray-300 mb-4">
              We are committed to protecting your privacy and ensuring the security of your personal data. 
              Our cookie usage complies with applicable data protection laws and regulations.
            </p>
            <Link"
              to="/privacy""
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Read Privacy Policy"
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
"
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">"
            <div className="flex items-center mb-4">"
              <Info className="w-8 h-8 text-purple-400 mr-3" />"              <h3 className="text-xl font-semibold text-white">Third-Party Cookies</h3>
            </div>"
            <p className="text-gray-300 mb-4">
              Some cookies on our website are set by third-party services such as Google Analytics, 
              advertising networks, and social media platforms. These services have their own privacy policies.
            </p>"
            <p className="text-sm text-gray-400">
              We recommend reviewing the privacy policies of these third-party services for more information.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">"
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          "
          <div className="space-y-6">"
            <div className="border-b border-white/20 pb-4">"
              <h3 className="text-lg font-semibold text-white mb-2">
                How long do cookies stay on my device?
              </h3>"
              <p className="text-gray-300">
                Session cookies are deleted when you close your browser, while persistent cookies can remain 
                for up to 2 years depending on the type and purpose.
              </p>
            </div>
            "
            <div className="border-b border-white/20 pb-4">"
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I delete cookies from my device?
              </h3>"
              <p className="text-gray-300">
                Yes, you can delete cookies through your browser settings. However, this may affect 
                the functionality of our website and you may need to re - enter certain information.
              </p>
            </div>
            "
            <div className="border-b border-white/20 pb-4">"
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you use cookies for advertising?
              </h3>"
              <p className="text-gray-300">
                We may use cookies to deliver personalized advertisements and track the effectiveness 
                of our marketing campaigns. You can opt out of these cookies using the preferences above.
              </p>
            </div>
            
            <div>"
              <h3 className="text-lg font-semibold text-white mb-2">
                How do I contact you about cookies?
              </h3>"
              <p className="text-gray-300">
                If you have questions about our cookie policy or how we use cookies, please contact us 
                through our support channels or email us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">"
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Cookie Policy?
          </h2>"
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help you understand how we use cookies and protect your data. 
            Contact us for more information or to exercise your data rights.
          </p>
          "
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link"
              to="/contact""
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >"
              <Shield className="w-5 h-5 mr-2" />              Contact Privacy Team
            </Link>
            <Link"
              to="/privacy""
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >"
              <Info className="w-5 h-5 mr-2" />              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>) ;
}
'"`