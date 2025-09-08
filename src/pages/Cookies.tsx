import React from 'react';
import { motion  } from 'framer-motion';
import { Cookie, 
  Shield, 
  Cookie, 
  Settings, 
  Eye, 
  CheckCircle,
  XCircle,
  Info
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const Cookies: React.FC = (): JSX.Element => {
  const cookieTypes = [
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
        'Campaign effectiveness',
        'Social media integration',
        'Retargeting'
      ],
      alwaysActive: false
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and provide a more personalized experience.',
      icon: Heart,
      color: 'from-indigo-500 to-purple-500',
      examples: [
        'Content preferences',
        'Notification settings',
        'Accessibility options',
        'Theme selection'
      ],
      alwaysActive: false
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while browsing the website',
      duration: 'Session',
      category: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'auth_token',
      purpose: 'Stores your authentication status',
      duration: '24 hours',
      category: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'language',
      purpose: 'Remembers your preferred language',
      duration: '1 year',
      category: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: 'theme',
      purpose: 'Stores your theme preference (light/dark)',
      duration: '1 year',
      category: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics tracking for website usage',
      duration: '2 years',
      category: 'Analytics',
      provider: 'Google'
    },
    {
      name: '_fbp',
      purpose: 'Facebook pixel for advertising optimization',
      duration: '3 months',
      category: 'Marketing',
      provider: 'Facebook'
    },
    {
      name: 'preferences',
      purpose: 'Stores your website preferences and settings',
      duration: '1 year',
      category: 'Preferences',
      provider: 'Zion Tech Group'
    }
  ];

export default function Cookies() {}
  return (
    <React.Fragment>
      <SEO 
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies, data protection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-orange-600/20 rounded-full">
                    <Cookie className="h-12 w-12 text-orange-400"/>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
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
                  <p className="text-zion-slate-light leading-relaxed">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light mt-4 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand how visitors use our site</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies to provide relevant content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Required for basic website functionality and security.
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCookieToggle(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        cookiePreferences[category.id as keyof typeof cookiePreferences]
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      {cookiePreferences[category.id as keyof typeof cookiePreferences] ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Enabled
                        </
                      ) : (
                        ><>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Disabled
                        </
                      )}
                    ></button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
              {cookieTypes.map((cookieType, index)  => (
                <motion.div
                  key={cookieType.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cookieType.color} rounded-xl flex items-center justify-center`}>
                      <cookieType.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cookieType.necessary 
                        ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                        : 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    }`}>
                      {cookieType.necessary ? 'Necessary' : 'Optional'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{cookieType.type}</h3>
                  <p className="text-gray-300 mb-6">{cookieType.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-400">Examples:</h4>
                    <ul className="space-y-1">
                      {cookieType.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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

        {/* Cookie Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Specific Cookies We Use
            </h2>
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {cookieTable.map((cookie, index) => (
                      <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-300 font-mono">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cookie.type === 'Essential' 
                              ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                              : cookie.type === 'Performance'
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                              : cookie.type === 'Functional'
                              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                              : 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
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
          </div>
        </section>

        {/* Cookie Management */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Manage Your Cookie Preferences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={acceptAll}
              className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Accept All Cookies
            </button>
            
            <button
              onClick={rejectAll}
              className="flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >
              <XCircle className="w-5 h-5 mr-2" />
              Reject Non-Essential
            </button>
            
            <button
              onClick={savePreferences}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Settings className="w-5 h-5 mr-2" />
              Save Preferences
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Your preferences will be saved and applied to this website. You can change these 
              settings at  time by visiting this page again.
            </p>
            <p className="text-sm text-gray-400">
              Note: Some features of our website may not function properly if you disable certain cookies.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Data Protection</h3>
            </div>
            <p className="text-gray-300 mb-4">
              We are committed to protecting your privacy and ensuring the security of your personal data. 
              Our cookie usage complies with applicable data protection laws and regulations.
            </p>
            <Link
              to="/privacy"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Read Privacy Policy
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Info className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Third-Party Cookies</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Some cookies on our website are set by third-party services such as Google Analytics, 
              advertising networks, and social media platforms. These services have their own privacy policies.
            </p>
            <p className="text-sm text-gray-400">
              We recommend reviewing the privacy policies of these third-party services for more information.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                How long do cookies stay on my device?
              </h3>
              <p className="text-gray-300">
                Session cookies are deleted when you close your browser, while persistent cookies can remain 
                for up to 2 years depending on the type and purpose.
              </p>
            </div>
            
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I delete cookies from my device?
              </h3>
              <p className="text-gray-300">
                Yes, you can delete cookies through your browser settings. However, this may affect 
                the functionality of our website and you may need to re-enter certain information.
              </p>
            </div>
            
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you use cookies for advertising?
              </h3>
              <p className="text-gray-300">
                We may use cookies to deliver personalized advertisements and track the effectiveness 
                of our marketing campaigns. You can opt out of these cookies using the preferences above.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                How do I contact you about cookies?
              </h3>
              <p className="text-gray-300">
                If you have questions about our cookie policy or how we use cookies, please contact us 
                through our support channels or email us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )};

export default Cookies;
>