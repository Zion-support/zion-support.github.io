import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Info,
  Lock,
  Globe,
  Database,
  BarChart3,
  Users,
  ShoppingCart,
  MessageCircle,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  examples: string[];
  necessary: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    examples: [
      'Authentication and security cookies',
      'Session management cookies',
      'Load balancing cookies',
      'User preference cookies'
    ],
    necessary: true,
    icon: Shield
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    examples: [
      'Language preference cookies',
      'Theme preference cookies',
      'Form auto-fill cookies',
      'User interface customization'
    ],
    necessary: false,
    icon: Settings
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    examples: [
      'Page view tracking',
      'User behavior analysis',
      'Performance monitoring',
      'Traffic source identification'
    ],
    necessary: false,
    icon: BarChart3
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and track marketing campaign performance.',
    examples: [
      'Ad targeting cookies',
      'Social media integration',
      'Email marketing tracking',
      'Conversion tracking'
    ],
    necessary: false,
    icon: Users
  },
  {
    id: 'third-party',
    name: 'Third-Party Cookies',
    description: 'These cookies are set by third-party services integrated with our website.',
    examples: [
      'Social media platform cookies',
      'Payment processor cookies',
      'Analytics service cookies',
      'Advertising network cookies'
    ],
    necessary: false,
    icon: Globe
  }
];

const cookieTableData = [
  {
    name: 'session_id',
    purpose: 'Maintains user session and authentication state',
    duration: 'Session',
    category: 'Essential',
    provider: 'Zion Tech Group'
  },
  {
    name: 'user_preferences',
    purpose: 'Stores user interface preferences and settings',
    duration: '1 year',
    category: 'Functional',
    provider: 'Zion Tech Group'
  },
  {
    name: 'analytics_id',
    purpose: 'Tracks user behavior and website performance',
    duration: '2 years',
    category: 'Analytics',
    provider: 'Zion Tech Group'
  },
  {
    name: 'marketing_tracker',
    purpose: 'Tracks marketing campaign effectiveness',
    duration: '90 days',
    category: 'Marketing',
    provider: 'Zion Tech Group'
  },
  {
    name: '_ga',
    purpose: 'Google Analytics tracking cookie',
    duration: '2 years',
    category: 'Analytics',
    provider: 'Google'
  },
  {
    name: '_fbp',
    purpose: 'Facebook pixel tracking cookie',
    duration: '90 days',
    category: 'Marketing',
    provider: 'Facebook'
  }
];

export default function Cookies() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['essential']));
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: true,
    analytics: true,
    marketing: false,
    thirdParty: false
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

  const updateCookiePreference = (category: keyof typeof cookiePreferences) => {
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save preferences to localStorage/cookies
    // and update the actual cookie settings
    console.log('Cookie preferences saved:', cookiePreferences);
    // Show success message
    alert('Cookie preferences updated successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      functional: true,
      analytics: true,
      marketing: true,
      thirdParty: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      functional: false,
      analytics: false,
      marketing: false,
      thirdParty: false
    });
    savePreferences();
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Cookie className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Cookie Policy</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Learn how we use cookies and similar technologies to enhance your experience on our platform.
            </p>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-zion-cyan mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Last Updated: January 2025</span>
              </div>
              <p className="text-zion-slate-light text-sm">
                This policy explains how Zion Tech Group uses cookies and similar technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cookie Preferences Manager */}
      <div className="container-responsive py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-8 h-8 text-zion-cyan" />
              <h2 className="text-2xl font-bold text-white">Cookie Preferences Manager</h2>
            </div>
            
            <p className="text-zion-slate-light mb-6">
              Manage your cookie preferences below. Essential cookies are always enabled as they are necessary for the website to function properly.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-8">
              {cookieCategories.map((category) => (
                <div key={category.id} className="border border-zion-cyan/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <category.icon className="w-6 h-6 text-zion-cyan" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <p className="text-sm text-zion-slate-light">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {category.necessary ? (
                        <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">
                          Always Active
                        </span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={cookiePreferences[category.id as keyof typeof cookiePreferences] || false}
                            onChange={() => updateCookiePreference(category.id as keyof typeof cookiePreferences)}
                          />
                          <div className="w-11 h-6 bg-zion-slate-light peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zion-cyan/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zion-slate-light after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                        </label>
                      )}
                      
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                      >
                        {expandedCategories.has(category.id) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedCategories.has(category.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-zion-cyan/20"
                      >
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {category.examples.map((example, index) => (
                            <li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={acceptAll}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Accept All Cookies
              </button>
              
              <button
                onClick={rejectAll}
                className="bg-zion-slate-light hover:bg-zion-slate-light/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Reject Non-Essential
              </button>
              
              <button
                onClick={savePreferences}
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Settings className="w-5 h-5" />
                Save Preferences
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cookie Information */}
<<<<<<< HEAD
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
export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
=======
      <div className="container-responsive py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Are Cookies?</h2>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-xl font-semibold text-white">Definition</h3>
                </div>
                <p className="text-zion-slate-light leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, such as your preferred language 
                  and other settings, which can make your next visit easier and the site more useful to you.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-xl font-semibold text-white">Security</h3>
                </div>
                <p className="text-zion-slate-light leading-relaxed">
                  Cookies cannot access your personal files or any other information on your device. 
                  They are safe and cannot contain viruses or malware. We use cookies responsibly 
                  and in accordance with privacy laws and best practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Detailed Cookie Information</h2>
            
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-cyan/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zion-cyan uppercase tracking-wider">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zion-cyan uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zion-cyan uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zion-cyan uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zion-cyan uppercase tracking-wider">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zion-cyan/20">
                    {cookieTableData.map((cookie, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-zion-slate-light">{cookie.purpose}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zion-slate-light">{cookie.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.category === 'Essential' ? 'bg-zion-cyan/20 text-zion-cyan' :
                            cookie.category === 'Functional' ? 'bg-blue-500/20 text-blue-400' :
                            cookie.category === 'Analytics' ? 'bg-green-500/20 text-green-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {cookie.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zion-slate-light">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* How to Manage Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">How to Manage Cookies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Browser Settings</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can usually find these settings in the "Options" or "Preferences" menu of your browser.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Privacy Tools</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Use privacy-focused browser extensions and tools to manage cookies more effectively. 
                  These tools can help you block unwanted cookies and trackers.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Our Controls</h3>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Use our cookie preference manager above to control which types of cookies are set 
                  on your device when visiting our website.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Third-Party Services</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Our website may integrate with third-party services that set their own cookies. 
                  These services include analytics providers, social media platforms, and advertising networks.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  We do not control these third-party cookies and they are subject to the privacy policies 
                  of the respective third-party providers.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Updates to This Policy</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  We will notify you of any material changes by posting the updated policy on our website 
                  and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-responsive py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-zion-slate-light mb-8">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              
              <Link
                to="/privacy"
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}