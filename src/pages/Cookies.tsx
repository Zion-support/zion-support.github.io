import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  Info, 
  CheckCircle, 
  XCircle, 
  Cookie,
  Eye,
  Lock,
  Globe,
  Database,
  Users,
  BarChart3
} from 'lucide-react';

const Cookies: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication', 'Security', 'Session management'],
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: BarChart3,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      type: 'analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '24 hours',
      type: 'analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication state',
      duration: 'Session',
      type: 'essential'
    },
    {
      name: 'csrf_token',
      purpose: 'Cross-site request forgery protection',
      duration: 'Session',
      type: 'essential'
    },
    {
      name: 'language_pref',
      purpose: 'Stores user language preference',
      duration: '1 year',
      type: 'functional'
    },
    {
      name: 'theme_pref',
      purpose: 'Stores user theme preference (light/dark)',
      duration: '1 year',
      type: 'functional'
    }
  ];

  const handleCookieToggle = (cookieType: string) => {
    if (cookieType === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save preferences to localStorage/cookies
    // and update the actual cookie behavior
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we use cookies to enhance your browsing experience
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website based on how you use it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Session Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Temporary cookies that are deleted when you close your browser. They help maintain your session and remember your preferences during your visit.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences across multiple visits.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Cookies set by third-party services we use, such as analytics tools, social media plugins, and advertising networks.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
                <li>Opt-out of specific types of cookies through our cookie consent banner</li>
                <li>Contact us to request changes to your cookie preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookie Consent</h2>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner. By clicking "Accept" or continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
=======
const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <CakeIcon className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing 
              experience and improve our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Are Cookies?
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CakeIcon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>
                <p className="text-gray-300 text-sm">
                  Stored on your device to remember your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                <p className="text-gray-300 text-sm">
                  Personalize content and improve functionality
                </p>
=======
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="bg-zion-blue-dark rounded-lg p-8 border border-zion-blue-light">
              <p className="text-zion-slate-light mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-zion-slate-light mb-4">
                    We use cookies for several purposes:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements and content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light">
                        These cookies are necessary for the website to function and cannot be switched off. 
                        They include cookies for security, authentication, and basic site functionality.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Analytics Cookies</h3>
                      <p className="text-zion-slate-light">
                        Help us understand how visitors interact with our website by collecting and reporting 
                        information anonymously. This helps us improve our services.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple-light pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Preference Cookies</h3>
                      <p className="text-zion-slate-light">
                        Allow our website to remember information that changes the way it behaves or looks, 
                        such as your preferred language or region.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Marketing Cookies</h3>
                      <p className="text-zion-slate-light">
                        Used to track visitors across websites to display relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Some cookies on our website are set by third-party services that we use to enhance 
                    functionality, such as analytics providers, advertising networks, and social media platforms. 
                    These third parties have their own privacy policies and cookie policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-zion-slate-light mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Use your browser settings to delete or block cookies</li>
                    <li>Set your browser to ask for permission before setting cookies</li>
                    <li>Use our cookie consent manager (if available)</li>
                    <li>Contact us to update your preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Browser Settings</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Most web browsers allow you to manage cookies through their settings. You can usually find 
                    these settings in the "Options" or "Preferences" menu of your browser. Please note that 
                    disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new policy on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-zion-blue-light rounded-lg">
                    <p className="text-zion-slate-light">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Address:</strong> Zion Tech Group, San Francisco, CA<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn about how we use cookies and similar technologies to enhance your experience 
            on our website and how you can control your privacy preferences.
          </p>
        </motion.div>

        {/* What Are Cookies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center mb-6">
              <Info className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We use both session cookies (which expire when you close your browser) and persistent 
                  cookies (which remain on your device for a set period of time).
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-6 bg-blue-600/20 rounded-xl border border-blue-500/30">
                  <Cookie className="h-24 w-24 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cookie Types */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className={`${type.bgColor} rounded-xl p-6 border ${type.borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <type.icon className={`h-8 w-8 ${type.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <span 
                        key={example}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                {type.id !== 'essential' && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Enabled</span>
                    <button
                      onClick={() => handleCookieToggle(type.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookiePreferences[type.id as keyof typeof cookiePreferences]
                          ? 'bg-blue-600'
                          : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookiePreferences[type.id as keyof typeof cookiePreferences]
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cookie Details Table */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Detailed Cookie Information</h2>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Cookie Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {cookieDetails.map((cookie, index) => (
                    <tr key={cookie.name} className="hover:bg-slate-700/30">
                      <td className="px-6 py-4 whitespace-nowrap text-white font-mono text-sm">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {cookie.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 text-sm">
                        {cookie.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          cookie.type === 'essential' ? 'bg-green-600/20 text-green-400' :
                          cookie.type === 'analytics' ? 'bg-blue-600/20 text-blue-400' :
                          cookie.type === 'marketing' ? 'bg-purple-600/20 text-purple-400' :
                          'bg-orange-600/20 text-orange-400'
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
        </motion.section>

        {/* Cookie Management */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Manage Your Cookie Preferences</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Current Settings</h3>
                <div className="space-y-3">
                  {cookieTypes.map((type) => (
                    <div key={type.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <type.icon className={`h-5 w-5 ${type.color} mr-2`} />
                        <span className="text-gray-300">{type.name}</span>
                      </div>
                      <div className="flex items-center">
                        {cookiePreferences[type.id as keyof typeof cookiePreferences] ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
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
                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={rejectAll}
                    className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={savePreferences}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Note: Essential cookies cannot be disabled as they are necessary for the website to function properly.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Privacy Information */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Privacy & Data Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex justify-center mb-4">
                <Lock className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p className="text-gray-300 text-sm">
                We implement industry-standard security measures to protect your data and ensure 
                cookies are transmitted securely.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Third-Party Services</h3>
              <p className="text-gray-300 text-sm">
                Some cookies are set by third-party services we use, such as Google Analytics. 
                These services have their own privacy policies.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="flex justify-center mb-4">
                <Database className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Retention</h3>
              <p className="text-gray-300 text-sm">
                Cookie data is retained only for the duration specified in our policy. 
                You can request deletion of your data at any time.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact & Updates */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Privacy Team
              </a>
              <a
                href="/privacy"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Cookies;
