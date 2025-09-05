import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cookie, Settings, Shield, Eye, Database, 
  CheckCircle, AlertTriangle, Info, Globe
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CookiesPage() {
  const lastUpdated = 'January 15, 2025';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication and security cookies',
        'Session management cookies',
        'Load balancing cookies',
        'User preference cookies'
      ],
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      icon: <Database className=&quot;w-6 h-6&quot; />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaign performance.',
      examples: [
        'Social media cookies',
        'Advertising cookies',
        'Retargeting cookies',
        'Campaign tracking cookies'
      ],
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme selection cookies',
        'Form auto-fill cookies',
        'User experience cookies'
      ],
      icon: <Settings className=&quot;w-6 h-6&quot; />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const thirdPartyCookies = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      duration: '2 years',
      privacy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and conversion tracking',
      duration: '3 months',
      privacy: 'https://www.facebook.com/policy.php'
    },
    {
      name: 'LinkedIn Insight',
      purpose: 'Professional networking and business insights',
      duration: '2 years',
      privacy: 'https://www.linkedin.com/legal/privacy-policy'
    },
    {
      name: 'Twitter Ads',
      purpose: 'Social media advertising and engagement tracking',
      duration: '2 years',
      privacy: 'https://twitter.com/en/privacy'
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Cookie Policy — Zion Tech Group | Cookie Usage & Management</title>
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group's cookie policy, how we use cookies, and how you can manage your cookie preferences.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cookie Policy — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive cookie policy explaining how we use cookies to enhance your experience on our website.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/cookies&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
              <Cookie className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Cookie Policy
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed&quot;>
              Learn how we use cookies to enhance your experience and how you can manage your preferences.
            </p>
            <div className=&quot;mt-8 text-gray-300&quot;>
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;
          >
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>What Are Cookies?</h2>
            <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better experience by remembering your preferences, analyzing how you use our site, 
              and personalizing content.
            </p>
            <p className=&quot;text-gray-300 leading-relaxed&quot;>
              This policy explains what cookies we use, why we use them, and how you can control them. By continuing 
              to use our website, you consent to our use of cookies in accordance with this policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Types of Cookies We Use</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Understanding the different categories of cookies on our website</p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                    {type.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{type.name}</h3>
                </div>
                <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>{type.description}</p>
                <div className=&quot;space-y-2&quot;>
                  <h4 className=&quot;text-white font-semibold mb-2&quot;>Examples:</h4>
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
                      <span className=&quot;text-gray-300 text-sm&quot;>{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Third-Party Cookies</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Cookies from trusted third-party services we use</p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
            {thirdPartyCookies.map((cookie, index) => (
              <motion.div
                key={cookie.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;
              >
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{cookie.name}</h3>
                <p className=&quot;text-gray-300 mb-3&quot;>{cookie.purpose}</p>
                <div className=&quot;flex items-center justify-between text-sm&quot;>
                  <span className=&quot;text-gray-400&quot;>Duration: {cookie.duration}</span>
                  <a
                    href={cookie.privacy}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;
                  >
                    Privacy Policy
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Managing Your Cookie Preferences</h2>
            <p className=&quot;text-xl text-gray-300&quot;>How you can control and manage cookies on our website</p>
          </motion.div>

          <div className=&quot;space-y-8&quot;>
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Settings className=&quot;w-6 h-6 text-cyan-400 mr-3&quot; />
                Browser Settings
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Block all cookies</li>
                <li>• Block third-party cookies only</li>
                <li>• Delete existing cookies</li>
                <li>• Set preferences for specific websites</li>
                <li>• Receive notifications when cookies are set</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <Eye className=&quot;w-6 h-6 text-green-400 mr-3&quot; />
                Cookie Consent
              </h3>
              <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Accept all cookies</li>
                <li>• Accept essential cookies only</li>
                <li>• Customize your preferences</li>
                <li>• Learn more about our cookie policy</li>
                <li>• Change your preferences at any time</li>
              </ul>
            </div>

            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-4 flex items-center&quot;>
                <AlertTriangle className=&quot;w-6 h-6 text-yellow-400 mr-3&quot; />
                Important Notes
              </h3>
              <div className=&quot;space-y-4 text-gray-300&quot;>
                <p>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                  If you disable them, some features may not work correctly.
                </p>
                <p>
                  <strong>Performance Impact:</strong> Disabling certain cookies may affect website performance and 
                  your user experience.
                </p>
                <p>
                  <strong>Third-Party Services:</strong> Some third-party services may continue to set cookies 
                  even if you've disabled them in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Questions About Cookies?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              We're here to help clarify any questions you may have about our cookie policy.
            </p>
            <div className=&quot;bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 text-left&quot;>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Contact Information</h3>
                  <div className=&quot;space-y-3 text-gray-300&quot;>
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Cookie Management</h3>
                  <div className=&quot;space-y-2 text-gray-300 text-sm&quot;>
                    <p>• Change cookie preferences</p>
                    <p>• Opt-out of tracking</p>
                    <p>• Delete existing cookies</p>
                    <p>• Browser-specific instructions</p>
                    <p>• Third-party opt-outs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}