import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Cookie, 
  Shield, 
  Settings, 
  BarChart3, 
  Eye, 
  CheckCircle,
  XCircle,
  Info
 } from 'lucide-react.ts';
import { SEO  } from '@/components/SEO';

const Cookies: React.FC = (): JSX.Element => {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'Required for the website to function properly',
      examples: ['Authentication', 'Security', 'Session management'],
      necessary: true,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      type: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Analytics', 'Error tracking', 'Performance monitoring'],
      necessary: false,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      necessary: false,
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'Marketing Cookies',
      description: 'Deliver relevant advertisements and content',
      examples: ['Ad targeting', 'Social media integration', 'Remarketing'],
      necessary: false,
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while browsing',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores your language and theme choices',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: 'analytics_id',
      purpose: 'Tracks website usage for improvements',
      duration: '2 years',
      type: 'Performance'
    },
    {
      name: 'ad_preferences',
      purpose: 'Remembers your advertising preferences',
      duration: '6 months',
      type: 'Marketing'
    }
  ];

  return (
    <>
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
                    <Cookie className="h-8 w-8 text-orange-400"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>
                  <p className="text-gray-300 text-sm">
                    Stored on your device to remember your preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-blue-400"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                  <p className="text-gray-300 text-sm">
                    Personalize content and improve functionality
                  </p>
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
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Managing Your Cookie Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-6">
                  You can control cookies through your browser settings. Most browsers allow you to 
                  block or delete cookies, though this may affect website functionality.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Chrome: Settings → Privacy and security → Cookies</li>
                  <li>• Firefox: Options → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Cookies</li>
                  <li>• Edge: Settings → Cookies and permissions</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Info className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-6">
                  When you first visit our website, you'll see a cookie consent banner. You can 
                  choose which types of cookies to accept or reject.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-sm text-gray-300">Accept all cookies</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-sm text-gray-300">Reject non-essential cookies</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-sm text-gray-300">Customize preferences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Questions About Cookies?</h3>
            <p className="text-gray-300 mb-6">
              If you have  questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <Info className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300">privacy@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cookies;
