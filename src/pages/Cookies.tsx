<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { Cookie, 
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
  Shield, 
  Settings, 
  Eye, 
  Database, 
<<<<<<< HEAD
  Globe, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Info, 
  Lock, 
  UserCheck, 
  BarChart3
} from 'lucide-react';

export default function Cookies() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const lastUpdated = 'January 15, 2025';
=======
  Globe,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Globe,
  BarChart3,
  Users
             } from 'lucide-react.ts';

export default function Cookies(...args: any[]): any {
  const [expandedSection, setExpandedSection] = useState<any>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Core website functionality, security, and basic user experience.',
      examples: [
        'Authentication and session management',
        'Security features and fraud prevention',
        'Load balancing and performance optimization',
        'Basic website navigation and functionality'
      ],
      duration: 'Session to 1 year',
      canDisable: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website and improve our services.',
      purpose: 'Website analytics, user behavior analysis, and performance monitoring.',
      examples: [
        'Page views and user journey tracking',
        'Website performance metrics',
        'User engagement and interaction data',
        'Conversion and goal tracking'
      ],
      duration: '2 years',
      canDisable: true,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization of your experience.',
      purpose: 'Enhanced user experience, preferences, and advanced features.',
      examples: [
        'Language and region preferences',
        'User interface customization',
        'Form data and user input storage',
        'Advanced feature enablement'
      ],
      duration: '1 year',
      canDisable: true,
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaign performance.',
      purpose: 'Targeted advertising, remarketing, and marketing analytics.',
      examples: [
        'Ad targeting and personalization',
        'Social media integration',
        'Marketing campaign tracking',
        'Cross-site advertising'
      ],
      duration: '2 years',
      canDisable: true,
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const cookieManagement = [
    {
      icon: Settings,
      title: 'Browser Settings',
      description: 'Configure your browser to accept, reject, or prompt for cookies before they are set.',
      instructions: [
        'Chrome: Settings > Privacy and security > Cookies and other site data',
        'Firefox: Options > Privacy & Security > Cookies and Site Data',
        'Safari: Preferences > Privacy > Cookies and website data',
        'Edge: Settings > Cookies and site permissions > Cookies and site data'
      ]
    },
    {
      icon: Shield,
      title: 'Cookie Consent',
      description: 'Use our cookie consent banner to manage your preferences for non-essential cookies.',
      instructions: [
        'Click the cookie settings button in our consent banner',
        'Toggle individual cookie categories on/off',
        'Save your preferences for future visits',
        'Change preferences anytime through our cookie center'
      ]
    },
    {
      icon: Database,
      title: 'Third-Party Controls',
      description: 'Manage cookies from third-party services through their respective opt-out mechanisms.',
      instructions: [
        'Google Analytics: Use Google Analytics Opt-out Browser Add-on',
        'Social Media: Adjust privacy settings in your social media accounts',
        'Advertising: Use industry opt-out tools like YourAdChoices',
        'Contact us for assistance with specific third-party cookies'
      ]
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and user behavior tracking',
      cookies: ['_ga', '_gid', '_gat', '_gac'],
      duration: '2 years',
      privacyPolicy: 'https://policies.google.com/privacy',
      optOut: 'https://tools.google.com/dlpage/gaoptout'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising and remarketing services',
      cookies: ['_gads', '_gac', 'IDE'],
      duration: '2 years',
      privacyPolicy: 'https://policies.google.com/privacy',
      optOut: 'https://adssettings.google.com/'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and conversion tracking',
      cookies: ['_fbp', '_fbc'],
      duration: '2 years',
      privacyPolicy: 'https://www.facebook.com/privacy/policy/',
      optOut: 'https://www.facebook.com/settings?tab=ads'
    },
    {
      name: 'LinkedIn Insight',
      purpose: 'Professional network advertising and analytics',
      cookies: ['li_sugr', 'UserMatchHistory'],
      duration: '2 years',
      privacyPolicy: 'https://www.linkedin.com/legal/privacy-policy',
      optOut: 'https://www.linkedin.com/psettings/guest-controls'
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
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
  };
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Users, FileText, CheckCircle } from 'lucide-react';

export default function Cookies() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Cookie className="w-4 h-4 mr-2" />
                Cookie Policy & Management
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Cookie
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Policy
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your experience, and how you can control your cookie preferences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#cookie-types"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#manage-cookies"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Manage Cookies
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Cookie Types Explanation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how our services are used.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Cookie className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Small Text Files</h3>
                <p className="text-gray-400">Cookies are tiny files stored on your device to remember your preferences and improve your experience.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Clock className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Temporary Storage</h3>
                <p className="text-gray-400">Most cookies are temporary and are automatically deleted when you close your browser or after a set period.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <UserCheck className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">User Control</h3>
                <p className="text-gray-400">You have full control over which cookies are stored on your device and can manage your preferences at any time.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Cookie Types */}
      <section id="cookie-types" className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes. Each category serves a specific function to enhance your experience.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {cookieCategories.map((category, index) => (
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {cookieTypes.map((type, index)              => (
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                          <p className="text-gray-300 leading-relaxed">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {category.canDisable ? (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                            Can Disable
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                            Required
                          </span>
                        )}
                        
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              expandedCategory === category.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/10 pt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Purpose</h4>
                            <p className="text-gray-400">{category.purpose}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Duration</h4>
                            <p className="text-gray-400">{category.duration}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                          <ul className="space-y-2">
                            {category.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section id="manage-cookies" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have several options for controlling cookies and protecting your privacy while using our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieManagement.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{method.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Instructions:</p>
                    <ul className="space-y-1">
                      {method.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some cookies are set by third-party services that help us provide enhanced functionality and analytics.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.purpose}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Cookies:</p>
                      <p className="text-sm text-gray-400">{service.cookies.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Duration:</p>
                      <p className="text-sm text-gray-400">{service.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Privacy Policy
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={service.optOut}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors"
                    >
                      Opt Out
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Questions About Cookies?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  If you have any questions about our cookie policy or need help managing your preferences, please don't hesitate to contact us.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-blue-100">privacy@ziontechgroup.com</p>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-blue-100">+1 (302) 555-0123</p>
                  </div>
                  
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-blue-100">123 Innovation Drive<br />Middletown, DE 19709</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white mb-2">Cookie Preferences</h4>
                      <p className="text-blue-100">
                        You can update your cookie preferences at any time by clicking the cookie settings button in our consent banner or contacting our privacy team directly.
                      </p>
                    </div>
=======
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
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
                  </div>
                </div>
              </div>
              
<<<<<<< HEAD
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
=======
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-orange-100 rounded-full">
              <Cookie className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          {/* What Are Cookies */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <p className="text-zion-slate-light mb-4 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-zion-slate-light leading-relaxed">
              Cookies are essential for the proper functioning of our website and help us improve 
              our services based on user behavior and preferences.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation, access to secure areas, and form submissions.
                </p>
                <div className="mt-4 flex items-center text-sm text-green-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Cannot be disabled
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Can be disabled
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your language preferences and login status.
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Can be disabled
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Database className="h-5 w-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  These cookies are used to track visitors across websites to display relevant and 
                  engaging advertisements.
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Can be disabled
                </div>
              </div>
            </div>
          </section>

          {/* Specific Cookies We Use */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Specific Cookies We Use</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                  <p className="text-zion-slate-light text-sm">
                    We use Google Analytics to understand how visitors use our website. 
                    This helps us improve our content and user experience.
                  </p>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-semibold text-white mb-2">Session Cookies</h4>
                  <p className="text-zion-slate-light text-sm">
                    These cookies maintain your session while you browse our website, 
                    ensuring a smooth and secure experience.
                  </p>
                </div>
                
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-semibold text-white mb-2">Preference Cookies</h4>
                  <p className="text-zion-slate-light text-sm">
                    These cookies remember your preferences, such as language settings, 
                    theme choices, and other customization options.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Security Cookies</h4>
                  <p className="text-zion-slate-light text-sm">
                    These cookies help protect our website from malicious activities 
                    and ensure secure communication between your browser and our servers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Your Cookie Preferences */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                You have several options for managing cookies on our website:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Browser Settings</h4>
                    <p className="text-zion-slate-light text-sm">
                      Most web browsers allow you to control cookies through their settings. 
                      You can usually find these options in the "Privacy" or "Security" sections.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cookie Consent Tool</h4>
                    <p className="text-zion-slate-light text-sm">
                      Use our cookie consent tool to manage your preferences for different 
                      types of cookies. You can update these settings at any time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Third-Party Opt-Out</h4>
                    <p className="text-zion-slate-light text-sm">
                      For third-party cookies (like Google Analytics), you can opt out 
                      directly through their respective opt-out mechanisms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-red-100 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Impact of Disabling Cookies</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                While you can disable cookies, please note that doing so may affect the 
                functionality of our website:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Some features may not work properly or may be unavailable
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Your preferences and settings may not be remembered
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    We may not be able to provide personalized content and recommendations
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Security features may be compromised
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Updates to This Policy */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Updates to This Policy</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                We will notify you of any material changes by posting the new policy on our 
                website and updating the "Last Updated" date. We encourage you to review this 
                policy periodically.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">privacy@ziontechgroup.com</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Phone: <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300">+1 (555) 123-4567</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Address: 123 Tech Street, Innovation City, IC 12345
                  </span>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-zion-slate-light text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
    </div>
  );
}
