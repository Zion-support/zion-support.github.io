import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Lock, 
  Globe, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Info,
  Database,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function Cookies() {
  const lastUpdated = 'December 15, 2024';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      duration: 'Session or up to 1 year',
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Performance Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Analytics cookies', 'Error tracking', 'Performance monitoring'],
      duration: 'Up to 2 years',
      icon: Settings,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Form data'],
      duration: 'Up to 1 year',
      icon: Settings,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      examples: ['Advertising cookies', 'Social media cookies', 'Tracking pixels'],
      duration: 'Up to 2 years',
      icon: Eye,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const cookiePurposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works properly and securely',
      icon: Shield
    },
    {
      title: 'User Experience',
      description: 'Remember your preferences and provide personalized content',
      icon: Settings
    },
    {
      title: 'Analytics & Performance',
      description: 'Understand how our website is used and improve performance',
      icon: Database
    },
    {
      title: 'Security & Safety',
      description: 'Protect against fraud and ensure secure transactions',
      icon: Lock
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat', '_ga_*'],
      duration: 'Up to 2 years'
    },
    {
      name: 'Google Tag Manager',
      purpose: 'Marketing and analytics tag management',
      cookies: ['_gac_*', '_gcl_au'],
      duration: 'Up to 3 months'
    },
    {
      name: 'LinkedIn',
      purpose: 'Social media integration and advertising',
      cookies: ['li_sugr', 'UserMatchHistory', 'bcookie'],
      duration: 'Up to 2 years'
    },
    {
      name: 'Facebook',
      purpose: 'Social media integration and advertising',
      cookies: ['_fbp', 'fr', 'datr'],
      duration: 'Up to 3 months'
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
        'Adjust cookie preferences',
        'Clear existing cookies if needed'
      ]
    },
    {
      title: 'Cookie Consent',
      description: 'Use our cookie consent banner to manage preferences',
      icon: CheckCircle,
      steps: [
        'Click the cookie settings icon',
        'Choose your preferences',
        'Save your settings',
        'Refresh the page to apply changes'
      ]
    },
    {
      title: 'Third-Party Opt-Out',
      description: 'Opt out of third-party advertising cookies',
      icon: Eye,
      steps: [
        'Visit the third-party service website',
        'Look for privacy or opt-out options',
        'Follow their opt-out process',
        'Note that you may need to repeat this for each service'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and website functionality."
        keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Cookie className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Understanding how we use cookies to enhance your experience
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                What Are Cookies?
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Cookies can be either "session cookies" (temporary and deleted when you close your browser) or "persistent cookies" (stored on your device for a longer period).
              </p>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-amber-400" />
                  Important Note
                </h3>
                <p className="text-slate-300">
                  Cookies do not contain personal information like your name, address, or phone number. They only store technical information to improve your browsing experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Cookie Categories</h3>
                <div className="space-y-4">
                  {cookiePurposes.map((purpose, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <purpose.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{purpose.title}</h4>
                        <p className="text-slate-300 text-sm">{purpose.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-amber-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {type.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Some cookies are placed by third-party services that appear on our pages
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-slate-300 mb-4">{service.purpose}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">Cookies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.cookies.map((cookie, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700 rounded-lg text-xs text-slate-300">
                          {cookie}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {service.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              You have several options for controlling how cookies are used on our website
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cookieManagement.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-slate-300 mb-6">{method.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-amber-400 mb-3">Steps:</h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start">
                          <span className="w-6 h-6 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Device-Specific Instructions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Device-Specific Instructions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn how to manage cookies on different devices and browsers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Desktop Browsers</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Chrome</h4>
                    <p className="text-slate-300 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Firefox</h4>
                    <p className="text-slate-300 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Safari</h4>
                    <p className="text-slate-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mobile Devices</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">iOS Safari</h4>
                    <p className="text-slate-300 text-sm">Settings → Safari → Privacy & Security → Block All Cookies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Android Chrome</h4>
                    <p className="text-slate-300 text-sm">Settings → Site settings → Cookies and site data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Mobile Apps</h4>
                    <p className="text-slate-300 text-sm">Check app settings for privacy and cookie options</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our privacy team is here to help you understand our cookie policy
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Privacy Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span className="text-slate-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">Privacy concerns: 1-2 business days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">Urgent issues: Same day</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Manage Your Cookie Preferences
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take control of your privacy by managing how cookies are used on our website
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="mailto:privacy@ziontechgroup.com" 
              className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Privacy Team
            </a>
            <a 
              href="/privacy" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
