import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  Lock, 
  CheckCircle, 
  XCircle, 
  Info,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const cookieCategories = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    examples: ['Authentication', 'Security', 'Session management', 'Load balancing'],
    necessary: true,
    icon: Shield
  },
  {
    name: 'Performance Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    examples: ['Analytics', 'Error tracking', 'Performance monitoring', 'User behavior'],
    necessary: false,
    icon: Settings
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    examples: ['Language preferences', 'User settings', 'Customization', 'Remembered choices'],
    necessary: false,
    icon: Settings
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
    examples: ['Ad targeting', 'Social media', 'Marketing analytics', 'Conversion tracking'],
    necessary: false,
    icon: Eye
  }
];

const cookieTable = [
  {
    name: 'session_id',
    purpose: 'Maintains user session and authentication state',
    duration: 'Session',
    category: 'Essential',
    provider: 'Zion Tech Group'
  },
  {
    name: 'csrf_token',
    purpose: 'Protects against cross-site request forgery attacks',
    duration: 'Session',
    category: 'Essential',
    provider: 'Zion Tech Group'
  },
  {
    name: '_ga',
    purpose: 'Google Analytics - tracks unique visitors and sessions',
    duration: '2 years',
    category: 'Performance',
    provider: 'Google'
  },
  {
    name: '_gid',
    purpose: 'Google Analytics - tracks user behavior and interactions',
    duration: '24 hours',
    category: 'Performance',
    provider: 'Google'
  },
  {
    name: 'lang_pref',
    purpose: 'Stores user language preference',
    duration: '1 year',
    category: 'Functional',
    provider: 'Zion Tech Group'
  },
  {
    name: 'theme_pref',
    purpose: 'Stores user theme preference (light/dark mode)',
    duration: '1 year',
    category: 'Functional',
    provider: 'Zion Tech Group'
  }
];

export default function Cookies() {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);
  const [cookiePreferences, setCookiePreferences] = React.useState({
    essential: true,
    performance: false,
    functional: false,
    marketing: false
  });

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const updateCookiePreference = (category: string, value: boolean) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and send to server
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      performance: true,
      functional: true,
      marketing: true
    });
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      performance: false,
      functional: false,
      marketing: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              Learn more about how we use cookies and how you can control them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Reject Non-Essential
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-zion-slate-light">
              Understanding the different categories of cookies and their purposes
            </p>
          </motion.div>

          <div className="space-y-6">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                        <p className="text-zion-slate-light">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        category.necessary 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {category.necessary ? 'Always Active' : 'Optional'}
                      </span>
                      <button
                        onClick={() => toggleCategory(category.name)}
                        className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                      >
                        {expandedCategory === category.name ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {expandedCategory === category.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-zion-cyan/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-zion-cyan mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {category.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                                <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-zion-cyan mb-2">Cookie Control:</h4>
                          {category.necessary ? (
                            <div className="flex items-center text-sm text-zion-slate-light">
                              <Lock className="w-4 h-4 text-zion-cyan mr-2" />
                              Cannot be disabled (essential for site functionality)
                            </div>
                          ) : (
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences[category.name.toLowerCase().replace(' ', '') as keyof typeof cookiePreferences]}
                                onChange={(e) => updateCookiePreference(category.name.toLowerCase().replace(' ', ''), e.target.checked)}
                                className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-cyan/20 rounded focus:ring-zion-cyan/50 focus:ring-2"
                              />
                              <span className="text-sm text-zion-slate-light">
                                Allow {category.name.toLowerCase()} cookies
                              </span>
                            </label>
                          )}
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detailed Cookie Information
            </h2>
            <p className="text-lg text-zion-slate-light">
              Complete list of cookies used on our website
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-zion-cyan/10">
                  <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((cookie, index) => (
                  <tr key={cookie.name} className={`border-t border-zion-cyan/10 ${
                    index % 2 === 0 ? 'bg-zion-slate-dark/30' : 'bg-zion-slate-dark/50'
                  }`}>
                    <td className="px-6 py-4 text-zion-cyan font-mono text-sm">{cookie.name}</td>
                    <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.purpose}</td>
                    <td className="px-6 py-4 text-zion-slate-light text-sm">{cookie.duration}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cookie.category === 'Essential' ? 'bg-green-500/20 text-green-400' :
                        cookie.category === 'Performance' ? 'bg-blue-500/20 text-blue-400' :
                        cookie.category === 'Functional' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
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
      </section>

      {/* Cookie Management */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-lg text-zion-slate-light">
              Control which cookies are stored on your device
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Current Settings</h3>
                  <div className="space-y-4">
                    {Object.entries(cookiePreferences).map(([category, enabled]) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-zion-slate-light capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center space-x-2">
                          {enabled ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400" />
                          )}
                          <span className={`text-sm ${
                            enabled ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {enabled ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-4">
                    <button
                      onClick={acceptAll}
                      className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Accept All Cookies
                    </button>
                    <button
                      onClick={rejectAll}
                      className="w-full px-6 py-3 bg-zion-slate-dark text-white font-medium rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      Reject Non-Essential
                    </button>
                    <button
                      onClick={savePreferences}
                      className="w-full px-6 py-3 bg-zion-slate-dark text-white font-medium rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      Save Current Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Information
            </h2>
            <p className="text-lg text-zion-slate-light">
              Learn more about cookies and your privacy rights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">What Are Cookies?</h3>
              <p className="text-zion-slate-light text-sm">
                Cookies are small text files stored on your device that help websites remember your preferences 
                and provide a better user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Your Privacy Rights</h3>
              <p className="text-zion-slate-light text-sm">
                You have the right to control which cookies are stored on your device and can change 
                your preferences at any time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
              <p className="text-zion-slate-light text-sm">
                You can also control cookies through your browser settings. Check your browser's help 
                section for instructions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                If you have any questions about our cookie policy or how we use cookies, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/privacy"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zion-slate-dark/50 text-white font-semibold rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
