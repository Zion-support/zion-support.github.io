<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Shield,
  Cookie,
  Settings,
  Eye,
  EyeOff,
  Check,
  X,
=======
import { SEO              } from '../components/SEO';
import { Cookie, 
  Shield, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Settings, 
  Shield, 
  Eye, 
  Database, 
  Globe,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
<<<<<<< HEAD
  Mail,
  Phone,
  MapPin,
  Calendar,
  Info,
  Lock,
  Zap,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Cookies: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('essential');
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const companyEmail = 'privacy@ziontechgroup.com';
  const companyPhone = '+1 (302) 464-0950';
=======
  ChevronDown,
<<<<<<< HEAD
  ChevronUp
const Cookies: [any, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [expandedSections, setExpandedSections] = useState({
=======
  ChevronUp,
  Lock,
  Globe,
  BarChart3,
  Users
             } from 'lucide-react.ts';

export default function Cookies(...args: any[]): any {
  const [expandedSection, setExpandedSection] = useState<any>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Authentication cookies for user login',
        'Session management cookies',
        'Security and fraud prevention',
        'Load balancing and performance'
      ],
      duration: 'Session or up to 1 year',
      canDisable: false,
      purpose: 'Core website functionality'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information.',
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Page view analytics',
        'User behavior tracking',
        'Performance monitoring',
        'Traffic source analysis'
      ],
      duration: 'Up to 2 years',
      canDisable: true,
      purpose: 'Website improvement and analytics'
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Language preferences',
        'Form data storage',
        'User interface customization',
        'Social media integration'
      ],
      duration: 'Up to 1 year',
      canDisable: true,
      purpose: 'Enhanced user experience'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      color: 'from-orange-500 to-red-500',
      examples: [
        'Ad targeting and retargeting',
        'Campaign performance tracking',
        'Social media advertising',
        'Cross-site tracking'
      ],
      duration: 'Up to 2 years',
      canDisable: true,
      purpose: 'Advertising and marketing'
    }
  ];

  const cookieManagement = [
    {
      title: 'Browser Settings',
      description: 'Configure your browser to block or delete cookies',
      icon: Settings,
      steps: [
        'Open your browser settings',
        'Navigate to Privacy & Security',
        'Configure cookie preferences',
        'Save your settings'
      ]
    },
    {
      title: 'Cookie Consent',
      description: 'Use our cookie consent manager to control preferences',
      icon: Cookie,
      steps: [
        'Click the cookie settings button',
        'Review cookie categories',
        'Toggle preferences on/off',
        'Save your choices'
      ]
    },
    {
      title: 'Third-Party Opt-Out',
      description: 'Opt out of third-party tracking services',
      icon: Shield,
      steps: [
        'Visit third-party opt-out pages',
        'Follow their opt-out procedures',
        'Verify opt-out status',
        'Clear existing cookies'
      ]
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat'],
      duration: '2 years',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising and conversion tracking',
      cookies: ['_gads', '_gac'],
      duration: '2 years',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and analytics',
      cookies: ['_fbp', '_fbc'],
      duration: '2 years',
      privacyPolicy: 'https://www.facebook.com/privacy/policy'
    },
    {
      name: 'LinkedIn Insight',
      purpose: 'Professional network advertising',
      cookies: ['li_sugr', 'UserMatchHistory'],
      duration: '2 years',
      privacyPolicy: 'https://www.linkedin.com/legal/privacy-policy'
    }
  ];

<<<<<<< HEAD
  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
=======
  const toggleSection = (sectionId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const updateCookiePreference = (type: anyanyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)              => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: enabled
    }));
  };

  const savePreferences = () => {
    // In a real app, this would save preferences and update cookies
    console.log('Cookie preferences saved:', cookiePreferences);
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Cookie className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn how Zion Tech Group uses cookies to improve your browsing experience and 
            how you can control your cookie preferences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              Version: 2.0
            </div>
          </div>
        </div>
      </motion.div>

      {/* What Are Cookies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What Are Cookies?</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">Information Storage</h3>
                  <p className="text-xs text-gray-400">Store user preferences and settings</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">Usage Analytics</h3>
                  <p className="text-xs text-gray-400">Track how visitors use our website</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">Performance</h3>
                  <p className="text-xs text-gray-400">Improve website speed and functionality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cookie Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cookie Categories</h2>
          <div className="space-y-4">
            {cookieCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs">
                        <span className={`px-2 py-1 rounded ${
                          category.canDisable 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {category.canDisable ? 'Can Disable' : 'Cannot Disable'}
                        </span>
                        <span className="text-gray-400">Duration: {category.duration}</span>
                      </div>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                          <ul className="space-y-2">
                            {category.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Purpose</h4>
                          <p className="text-gray-300 text-sm mb-4">{category.purpose}</p>
                          
                          <h4 className="text-lg font-semibold text-white mb-3">Management</h4>
                          <div className="space-y-2">
                            {category.canDisable ? (
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-gray-300">You can disable these cookies</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2 text-sm">
                                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-300">These cookies are essential for website functionality</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-2 text-sm">
                              <Info className="w-4 h-4 text-blue-400" />
                              <span className="text-gray-300">Duration: {category.duration}</span>
                            </div>
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
      </motion.div>

<<<<<<< HEAD
      {/* Cookie Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Managing Your Cookie Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cookieManagement.map((method, index) => (
=======
      {/* Cookie Types Explanation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-300">
              Understanding the different categories of cookies and their purposes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {cookieTypes.map((type, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyan-400">Steps:</h4>
                  <ol className="space-y-1 text-sm">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2 text-gray-300">
                        <span className="w-5 h-5 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Third-Party Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Third-Party Cookie Services</h2>
          <div className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.purpose}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Cookies:</span>
                    <p className="text-sm text-gray-300 font-mono">{service.cookies.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Duration:</span>
                    <p className="text-sm text-gray-300">{service.duration}</p>
                  </div>
                  <div className="text-right">
                    <a
                      href={service.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300 text-sm"
                    >
                      Privacy Policy
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Cookie Consent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Cookie Consent</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">How We Obtain Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner that explains 
                  how we use cookies and allows you to choose your preferences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Accept All</h4>
                    <p className="text-xs text-gray-400">Allow all cookies for full functionality</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Customize</h4>
                    <p className="text-xs text-gray-400">Choose which cookies to accept</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Updating Preferences</h3>
                <p className="text-gray-300 mb-4">
                  You can change your cookie preferences at any time by clicking the cookie settings 
                  button in the footer or using your browser settings.
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <Info className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    Changes to cookie preferences will take effect immediately and may affect website functionality.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Data Protection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Data Protection & Privacy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Data Collection</h3>
                <p className="text-gray-300 mb-4">
                  Cookies may collect information such as your IP address, browser type, operating system, 
                  and pages visited. This information helps us improve our services and provide a better user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Personal Data</h4>
                    <p className="text-xs text-gray-400">Cookies do not directly identify you personally</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Aggregated Data</h4>
                    <p className="text-xs text-gray-400">Information is used in aggregate form for analytics</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Data Sharing</h3>
                <p className="text-gray-300 mb-4">
                  We do not sell your personal information. Cookie data may be shared with trusted 
                  third-party service providers who help us operate our website and provide services.
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    All third-party services are bound by strict data protection agreements.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our cookie policy or need help managing your preferences, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cookies;
