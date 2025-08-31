import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Users, FileText, CheckCircle } from 'lucide-react';

export default function Cookies() {
  return (
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
    </div>
  );
}
