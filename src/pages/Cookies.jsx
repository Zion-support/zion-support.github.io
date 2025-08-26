import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie,
  Shield,
  Settings,
  Info,
  CheckCircle,
  AlertTriangle,
  Clock,
  Database,
  Eye,
  Lock,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function Cookies() {
  const [expandedSections, setExpandedSections] = useState({
    essential: true,
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

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly',
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      examples: [
        'Authentication cookies',
        'Session management',
        'Security features',
        'Load balancing'
      ],
      duration: 'Session or 1 year',
      canDisable: false
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      icon: Database,
      color: 'from-blue-500 to-purple-500',
      examples: [
        'Page views and navigation',
        'User behavior patterns',
        'Performance metrics',
        'Error tracking'
      ],
      duration: '2 years',
      canDisable: true
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign performance',
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Ad personalization',
        'Campaign tracking',
        'Social media integration',
        'Retargeting'
      ],
      duration: '1 year',
      canDisable: true
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'Remember your settings and preferences for a better experience',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      examples: [
        'Language preferences',
        'Theme settings',
        'Display options',
        'Accessibility settings'
      ],
      duration: '1 year',
      canDisable: true
    }
  ];

  const cookieTable = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      provider: 'Google',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      provider: 'Google',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      provider: 'Google',
      duration: '1 minute',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session across page requests',
      provider: 'Zion Tech Group',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user preferences and settings',
      provider: 'Zion Tech Group',
      duration: '1 year',
      type: 'Preferences'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks user consent for marketing cookies',
      provider: 'Zion Tech Group',
      duration: '1 year',
      type: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Cookie className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your experience on Zion Tech Group. 
              We're committed to transparency and giving you control over your privacy.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-zinc-800/50 rounded-lg px-6 py-3 border border-zion-cyan/20">
              <Info className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">
                Last updated: December 15, 2024
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Are Cookies?
            </h2>
            
            <div className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Small Text Files</h3>
                  <p className="text-zion-slate-light mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us remember your preferences and provide a better user experience.
                  </p>
                  <p className="text-zion-slate-light">
                    Cookies can be either "session cookies" (deleted when you close your browser) or 
                    "persistent cookies" (remain on your device for a set period).
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cookie className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Cookies help us provide a personalized experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Types of Cookies We Use
          </motion.h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleSection(type.id)}
                  className="w-full p-6 text-left hover:bg-zinc-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${type.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{type.name}</h3>
                        <p className="text-zion-slate-light">{type.description}</p>
                      </div>
                    </div>
                    {expandedSections[type.id] ? (
                      <ChevronDown className="w-5 h-5 text-zion-cyan" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-zion-cyan" />
                    )}
                  </div>
                </button>
                
                {expandedSections[type.id] && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-zion-cyan font-semibold mb-3">Examples</h4>
                        <ul className="space-y-2">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-zion-slate-light">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-zion-cyan font-semibold mb-3">Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Duration:</span>
                            <span className="text-white">{type.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Can Disable:</span>
                            <span className={type.canDisable ? 'text-green-400' : 'text-red-400'}>
                              {type.canDisable ? 'Yes' : 'No'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Detailed Cookie Information
            </h2>
            
            <div className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zion-cyan/20">
                    {cookieTable.map((cookie, index) => (
                      <tr key={index} className="hover:bg-zinc-700/30 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <code className="text-zion-cyan font-mono text-sm">{cookie.name}</code>
                        </td>
                        <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-white">{cookie.provider}</td>
                        <td className="px-6 py-4 text-zion-slate-light">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                            cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                            cookie.type === 'Marketing' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              You have control over which cookies are stored on your device. 
              Learn how to manage your preferences and opt out of non-essential cookies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-700/50 rounded-lg p-6 border border-zion-cyan/20">
                <Settings className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Browser Settings</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Configure your browser to block or delete cookies
                </p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  Learn How →
                </button>
              </div>
              
              <div className="bg-zinc-700/50 rounded-lg p-6 border border-zion-cyan/20">
                <Shield className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Cookie Consent</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Update your cookie preferences anytime
                </p>
                <button className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  Manage Preferences →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com" 
                className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/privacy" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}