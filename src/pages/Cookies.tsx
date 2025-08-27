import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Eye, 
  Settings, 
  BarChart3,
  Users,
  Globe,
  CheckCircle
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Essential Cookies",
      description: "Required for the website to function properly. These cannot be disabled.",
      examples: ["Authentication", "Security", "Basic functionality"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Performance Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Analytics", "Page load times", "User behavior"]
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      title: "Functional Cookies",
      description: "Remember your preferences and settings for a better experience.",
      examples: ["Language settings", "Theme preferences", "Form data"]
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and content.",
      examples: ["Ad targeting", "Social media", "Campaign tracking"]
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      data: "Usage statistics, page views, user behavior"
    },
    {
      name: "Stripe",
      purpose: "Payment processing and security",
      data: "Payment information, transaction details"
    },
    {
      name: "Social Media",
      purpose: "Social sharing and integration features",
      data: "Sharing preferences, social interactions"
    },
    {
      name: "Advertising Networks",
      purpose: "Relevant advertising content",
      data: "Ad preferences, campaign performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Cookie className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Learn about how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience.
          </p>
          <p className="text-zion-slate-light mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* What Are Cookies */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-zion-slate-light mb-4 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-zion-slate-light leading-relaxed">
              Cookies can be either "session cookies" (which are deleted when you close your browser) 
              or "persistent cookies" (which remain on your device for a set period of time).
            </p>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Third-Party Services */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <p className="text-zion-slate-light mb-6">
              Our website may use third-party services that place cookies on your device. 
              These services help us provide better functionality and user experience.
            </p>
            
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="border-l-4 border-zion-cyan/30 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-1">
                    <strong>Purpose:</strong> {service.purpose}
                  </p>
                  <p className="text-zion-slate-light text-sm">
                    <strong>Data Collected:</strong> {service.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Browser Settings</h3>
                <p className="text-zion-slate-light mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Cookie Consent</h3>
                <p className="text-zion-slate-light mb-4">
                  When you first visit our website, you'll see a cookie consent banner. 
                  You can choose which types of cookies to accept or decline.
                </p>
                <p className="text-zion-slate-light">
                  You can change your preferences at any time through our cookie settings panel.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Impact of Disabling Cookies</h3>
                <p className="text-zion-slate-light">
                  Please note that disabling certain cookies may affect the functionality of our website. 
                  Essential cookies cannot be disabled as they are necessary for basic site operation.
                </p>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              If you have questions about our cookie policy or would like to manage your preferences, 
              our team is here to help. Contact us for assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
