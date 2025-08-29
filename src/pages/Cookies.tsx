import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  ArrowRight,
  Database,
  Server,
  Network,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Users,
  Globe,
  Lock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Cookies() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Authentication and security',
        'Session management',
        'Load balancing',
        'Basic functionality'
      ],
      duration: 'Session',
      purpose: 'Required for website operation'
    },
    {
      title: 'Performance Cookies',
      description: 'Help improve website performance and user experience',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Analytics and metrics',
        'Performance monitoring',
        'Error tracking',
        'User behavior analysis'
      ],
      duration: '2 years',
      purpose: 'Website optimization'
    },
    {
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Language preferences',
        'User preferences',
        'Social media integration',
        'Enhanced features'
      ],
      duration: '1 year',
      purpose: 'Enhanced user experience'
    },
    {
      title: 'Marketing Cookies',
      description: 'Used for advertising and marketing purposes',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      examples: [
        'Targeted advertising',
        'Social media tracking',
        'Marketing analytics',
        'Campaign effectiveness'
      ],
      duration: '2 years',
      purpose: 'Marketing and advertising'
    }
  ];

  const cookiePurposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works properly',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'User authentication',
        'Session management',
        'Security features',
        'Load balancing'
      ]
    },
    {
      title: 'Performance & Analytics',
      description: 'Monitor and improve website performance',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Page load times',
        'User engagement metrics',
        'Error tracking',
        'Traffic analysis'
      ]
    },
    {
      title: 'User Experience',
      description: 'Personalize and enhance user experience',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Language preferences',
        'User settings',
        'Customization options',
        'Feature preferences'
      ]
    },
    {
      title: 'Marketing & Advertising',
      description: 'Deliver relevant content and advertisements',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      details: [
        'Targeted content',
        'Ad relevance',
        'Campaign tracking',
        'Conversion optimization'
      ]
    }
  ];

  const cookieManagement = [
    {
      title: 'Browser Settings',
      description: 'Control cookies through your web browser',
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      instructions: [
        'Access browser settings',
        'Navigate to privacy section',
        'Manage cookie preferences',
        'Clear existing cookies'
      ]
    },
    {
      title: 'Cookie Consent',
      description: 'Manage cookie preferences through our consent tool',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      instructions: [
        'Click cookie settings',
        'Choose preferences',
        'Save your choices',
        'Update anytime'
      ]
    },
    {
      title: 'Third-Party Control',
      description: 'Manage third-party cookies and tracking',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      instructions: [
        'Review third-party services',
        'Opt-out of tracking',
        'Manage ad preferences',
        'Use privacy tools'
      ]
    }
  ];

  const thirdPartyServices = [
    {
      title: 'Analytics Services',
      description: 'Website analytics and performance monitoring',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Google Analytics',
        'Performance monitoring',
        'User behavior tracking',
        'Conversion analytics'
      ],
      cookies: 'Performance and analytics cookies'
    },
    {
      title: 'Social Media',
      description: 'Social media integration and sharing',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Facebook integration',
        'LinkedIn sharing',
        'Twitter feeds',
        'Social login'
      ],
      cookies: 'Functional and marketing cookies'
    },
    {
      title: 'Advertising Networks',
      description: 'Digital advertising and marketing',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      services: [
        'Google Ads',
        'Social media ads',
        'Retargeting campaigns',
        'Marketing automation'
      ],
      cookies: 'Marketing and tracking cookies'
    }
  ];

  const contactInfo = [
    {
      title: 'Privacy Team',
      description: 'For cookie and privacy-related questions',
      email: 'privacy@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {
      title: 'Data Protection',
      description: 'For data protection and cookie management',
      email: 'dataprotection@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about Zion Tech Group's cookie policy, types of cookies we use, and how to manage your cookie preferences."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This policy explains how Zion Tech Group uses cookies and similar technologies 
              to enhance your browsing experience and improve our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-2">
            <Clock className="w-4 h-4" />
            <span>Last Updated: December 2024</span>
          </div>
          <p className="text-slate-300">
            This cookie policy is effective as of the date above and applies to all users of Zion Tech Group services.
          </p>
        </motion.div>
      </div>

      {/* What Are Cookies */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What Are Cookies?
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Types of Cookies */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Types of Cookies We Use
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cookieTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  <p className="text-slate-400 text-sm">{type.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-slate-300 font-medium">Examples:</h4>
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                  <div>
                    <span className="text-slate-400 text-sm">Duration:</span>
                    <div className="text-slate-300 font-medium">{type.duration}</div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">Purpose:</span>
                    <div className="text-slate-300 font-medium">{type.purpose}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cookie Purposes */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            How We Use Cookies
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cookiePurposes.map((purpose, index) => (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${purpose.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <purpose.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{purpose.title}</h3>
                  <p className="text-slate-400 text-sm">{purpose.description}</p>
                </div>
                
                <div className="space-y-3">
                  {purpose.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cookie Management */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Managing Your Cookie Preferences
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cookieManagement.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-slate-400 text-sm">{method.description}</p>
              </div>
              
              <div className="space-y-3">
                {method.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 font-medium">
                      {idx + 1}
                    </div>
                    <span className="text-slate-300 text-sm">{instruction}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Third-Party Services */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Third-Party Cookies & Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-slate-300 font-medium">Services:</h4>
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-3 border-t border-slate-700">
                    <span className="text-slate-400 text-sm">Cookie Type:</span>
                    <div className="text-slate-300 font-medium">{service.cookies}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cookie Consent */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Cookie Consent & Control
        </motion.h2>
        
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Accept or decline cookies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Modify preferences anytime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Withdraw consent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Request data deletion</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">How to Control</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Use our cookie settings tool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Configure browser settings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Review privacy policies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Contact our privacy team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Questions About Cookies?
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <p className="text-slate-400 mb-6">{contact.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 text-sm font-medium">@</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 text-sm font-medium">📞</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 text-sm font-medium">📍</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{contact.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Updates */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Cookie Policy Updates
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto mb-6">
            We may update this cookie policy from time to time to reflect changes in our practices, 
            technology, or legal requirements. We will notify you of any material changes by posting 
            the updated policy on this page.
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Info className="w-4 h-4" />
            <span>Check this page regularly for updates</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
