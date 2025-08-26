import React from 'react';
import SEO from '../SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Shield, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Basic functionality"],
      duration: "Session or 1 year"
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Page views", "User behavior", "Performance metrics"],
      duration: "2 years"
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "User settings", "Custom features"],
      duration: "1 year"
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
      duration: "90 days"
    }
  ];

  const cookieManagement = [
    {
      title: "Browser Settings",
      description: "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.",
      action: "Check your browser's help section for instructions"
    },
    {
      title: "Cookie Consent",
      description: "We provide clear consent options when you first visit our website. You can change your preferences at any time.",
      action: "Use the cookie settings panel in the footer"
    },
    {
      title: "Third-Party Services",
      description: "Some third-party services we use may set their own cookies. We recommend reviewing their privacy policies.",
      action: "Contact us for a list of third-party services"
    }
  ];

  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
        keywords="cookie policy, cookies, privacy, Zion Tech Group, data collection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn about how we use cookies and similar technologies to enhance your browsing experience 
              and provide personalized services on our website.
            </motion.p>
            
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Last updated: January 2025
            </motion.div>
          </motion.div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Understanding Cookies</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Cookies are small text files that websites place on your device to remember your preferences, 
                    analyze how you use the site, and provide personalized content. They help make your browsing 
                    experience more convenient and relevant.
                  </p>
                  <p>
                    When you visit our website, we may use cookies to understand how you interact with our content, 
                    remember your preferences, and provide you with a better user experience.
                  </p>
                  <p>
                    Cookies can be either "session cookies" (which are deleted when you close your browser) or 
                    "persistent cookies" (which remain on your device for a set period of time).
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4">🍪</div>
                <p className="text-gray-400 text-sm">Cookies help us provide a better experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Duration:</span> {type.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over how cookies are used on our website
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {cookieManagement.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-blue-400 text-sm font-medium">{item.action}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Questions About Cookies?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              If you have any questions about our use of cookies or would like to manage your preferences, 
              please don't hesitate to contact us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Privacy Team
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cookies;