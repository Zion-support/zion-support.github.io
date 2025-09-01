import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Database, 
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

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
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
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
