import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Eye, 
  Settings, 
  Info, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for the website to function properly",
      examples: ["Authentication", "Security", "Session management"],
      necessary: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      type: "Performance Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Analytics", "Page load times", "User behavior"],
      necessary: false,
      icon: <Eye className="w-5 h-5" />
    },
    {
      type: "Functional Cookies",
      description: "Remember your preferences and settings",
      examples: ["Language preferences", "Theme settings", "User preferences"],
      necessary: false,
      icon: <Settings className="w-5 h-5" />
    },
    {
      type: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      examples: ["Targeted ads", "Social media integration", "Advertising analytics"],
      necessary: false,
      icon: <Info className="w-5 h-5" />
    }
  ];

  return (<div className="min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 700 pt - 20">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com / cookies"
            />
      <main className="min - h-screen pt - 20">
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="max - w-4xl mx - auto">
            <h1 className="text - 4xl font - bold text - white mb - 8">
              Cookie Policy
            </h1>
            <div className="bg - slate - 800 rounded - lg p - 8 border border - slate - 700">
              <p className="text - gray - 300 mb - 6">
                Last updated:{' '}
                {new Date () .toLocaleDateString ('en - US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) }
              </p>
              <div className="space - y-8">
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    What Are Cookies?
                  </h2>
                  <p className="text - gray - 300 leading - relaxed">
                    Cookies are small text files that are placed on your device
                    when you visit our website. They help us provide you with a
                    better experience by remembering your preferences, analyzing
                    how you use our site, and personalizing content.
                  </p>
                </section>
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    How We Use Cookies
                  </h2>
                  <p className="text - gray - 300 mb - 4">
                    We use cookies for several purposes:
                  </p>
                  <ul className="list - disc list - inside text - gray - 300 space - y-2 ml - 4">
                    <li>
                      <strong > Essential Cookies:</strong > Required for the
                      website to function properly
                    </li>
                    <li>
                      <strong > Performance Cookies:</strong > Help us understand
                      how visitors interact with our website
                    </li>
                    <li>
                      <strong > Functional Cookies:</strong > Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong > Marketing Cookies:</strong > Deliver relevant
                      advertisements and content
                    </li>
                  </ul>
                </section>
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    Types of Cookies We Use
                  </h2>
                  <div className="space - y-6">
                    <div className="border - l-4 border - blue - 500 pl - 4">
                      <h3 className="text - xl font - medium text - white mb - 2">
                        Essential Cookies
                      </h3>
                      <p className="text - gray - 300">
                        These cookies are necessary for the website to function
                        and cannot be switched off. They include cookies for
                        security, authentication, and basic site functionality.
                      </p>
                    </div>
                    <div className="border - l-4 border - purple - 500 pl - 4">
                      <h3 className="text - xl font - medium text - white mb - 2">
                        Analytics Cookies
                      </h3>
                      <p className="text - gray - 300">
                        Help us understand how visitors interact with our
                        website by collecting and reporting information
                        anonymously. This helps us improve our services.
                      </p>
                    </div>
                    <div className="border - l-4 border - cyan - 500 pl - 4">
                      <h3 className="text - xl font - medium text - white mb - 2">
                        Preference Cookies
                      </h3>
                      <p className="text - gray - 300">
                        Allow our website to remember information that changes
                        the way it behaves or looks, such as your preferred
                        language or region.
                      </p>
                    </div>
                    <div className="border - l-4 border - green - 500 pl - 4">
                      <h3 className="text - xl font - medium text - white mb - 2">
                        Marketing Cookies
                      </h3>
                      <p className="text - gray - 300">
                        Used to track visitors across websites to display
                        relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    Third - Party Cookies
                  </h2>
                  <p className="text - gray - 300 leading - relaxed">
                    Some cookies on our website are set by third - party
                    services that we use to enhance functionality, such as
                    analytics providers, advertising networks, and social media
                    platforms. These third parties have their own privacy
                    policies and cookie policies.
                  </p>
                </section>
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text - gray - 300 mb - 4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list - disc list - inside text - gray - 300 space - y-2 ml - 4">
                    <li>
                      {' '}
                      Use your browser settings to delete or block cookies
                    </li>
                    <li>
                      {' '}
                      Set your browser to ask for permission before setting
                      cookies
                    </li>
                    <li > Use our cookie consent manager (if available) </li>
                    <li > Contact us to update your preferences</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text - 2xl font - semibold text - white mb - 4">
                    Contact Us
                  </h2>
                  <p className="text - gray - 300 leading - relaxed">
                    If you have any questions about our use of cookies or would
                    like to update your preferences, please contact us at{' '}
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="text - blue - 400 hover:text - blue - 300"
                    >
                      kleber@ziontechgroup.com
                    </a>{' '}
                    or call us at{' '}
                    <a
                      href="tel:+13024640950"
                      className="text - blue - 400 hover:text - blue - 300"
                    >
                      +1 (302) 464 - 0950
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-zion-cyan mr-3">{cookie.icon}</div>
                    <h3 className="text-white font-semibold text-xl">{cookie.type}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cookie.necessary 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {cookie.necessary ? 'Necessary' : 'Optional'}
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{cookie.description}</p>
                <div>
                  <h4 className="text-zion-cyan font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How We Use Cookies */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">How We Use Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Website Functionality</h3>
                    <p className="text-zion-slate-light text-sm">Ensure the website works properly and securely</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">User Experience</h3>
                    <p className="text-zion-slate-light text-sm">Remember your preferences and settings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Analytics</h3>
                    <p className="text-zion-slate-light text-sm">Understand how visitors use our website</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Security</h3>
                    <p className="text-zion-slate-light text-sm">Protect against fraud and unauthorized access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Personalization</h3>
                    <p className="text-zion-slate-light text-sm">Provide relevant content and recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Performance</h3>
                    <p className="text-zion-slate-light text-sm">Optimize website speed and functionality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third-Party Cookies */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Third-Party Cookies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.purpose}</p>
                <div className="mb-4">
                  <h4 className="text-zion-cyan font-medium text-sm mb-2">Cookies Used:</h4>
                  <div className="space-y-1">
                    {service.cookies.map((cookie, idx) => (
                      <div key={idx} className="text-zion-slate-light text-xs bg-zinc-700/50 px-2 py-1 rounded">
                        {cookie}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-zion-slate-light">
                  <span className="text-zion-cyan">Duration:</span> {service.duration}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Managing Your Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-zion-cyan font-semibold text-xl mb-4">Browser Settings</h3>
                <p className="text-zion-slate-light mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can typically:
                </p>
                <ul className="space-y-2">
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    View and delete existing cookies
                  </li>
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Block cookies from specific sites
                  </li>
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Set preferences for future cookies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-zion-cyan font-semibold text-xl mb-4">Cookie Consent</h3>
                <p className="text-zion-slate-light mb-4">
                  When you first visit our website, you'll see a cookie consent banner that allows you to:
                </p>
                <ul className="space-y-2">
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Accept all cookies
                  </li>
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Customize your preferences
                  </li>
                  <li className="text-zion-slate-light text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Reject non-essential cookies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Important Notes</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">Essential Cookies</h3>
                  <p className="text-zion-slate-light">
                    Some cookies are essential for the website to function properly. Disabling these may 
                    affect your ability to use certain features.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">Third-Party Services</h3>
                  <p className="text-zion-slate-light">
                    Third-party services may also place cookies on your device. We recommend reviewing 
                    their privacy policies for more information.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">Updates</h3>
                  <p className="text-zion-slate-light">
                    This cookie policy may be updated periodically. Please check back regularly for 
                    the latest information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-12 max-w-4xl mx-auto">
            <Cookie className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
              If you have any questions about our use of cookies or this cookie policy, 
              please don't hesitate to contact us. We're here to help clarify any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform inline-flex items-center"
              >
                Contact Us
              </a>
              <a 
                href="/privacy" 
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}