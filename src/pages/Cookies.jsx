import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Info, CheckCircle, AlertTriangle, Cookie, Lock, Eye, EyeOff, BarChart3, Target } from 'lucide-react';

export default function Cookies() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const [showPreferences, setShowPreferences] = useState(false);

  const handleCookieChange = (type) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real app, this would save to localStorage/cookies
    setShowPreferences(false);
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    setShowPreferences(false);
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    setShowPreferences(false);
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <Cookie className="w-10 h-10 text-zion-cyan" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-6"
          >
            Cookie Policy & Privacy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Learn how we use cookies and similar technologies to enhance your browsing experience 
            while respecting your privacy and data protection rights.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Cookie Types Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
              <p className="text-zion-slate-light text-sm">
                Required for basic website functionality and security. These cannot be disabled.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Preference Cookies</h3>
              <p className="text-zion-slate-light text-sm">
                Remember your settings and preferences to provide a personalized experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
              <p className="text-zion-slate-light text-sm">
                Help us understand how visitors interact with our website to improve performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 text-center hover:border-zion-cyan transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Marketing Cookies</h3>
              <p className="text-zion-slate-light text-sm">
                Used to deliver relevant advertisements and track marketing campaign effectiveness.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Detailed Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Cookies</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-zion-cyan pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Website Functionality</h3>
                <p className="text-zion-slate-light">
                  Essential cookies ensure our website works properly, including secure login, 
                  shopping cart functionality, and basic security features.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-blue pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Performance & Analytics</h3>
                <p className="text-zion-slate-light">
                  Analytics cookies help us understand how visitors use our site, identify 
                  performance issues, and make improvements to user experience.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-purple pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Personalization</h3>
                <p className="text-zion-slate-light">
                  Preference cookies remember your settings, language choices, and other 
                  preferences to provide a more personalized browsing experience.
                </p>
              </div>
              
              <div className="border-l-4 border-zion-green pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Marketing & Advertising</h3>
                <p className="text-zion-slate-light">
                  Marketing cookies help us deliver relevant content and advertisements, 
                  measure campaign effectiveness, and provide social media features.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Manage Your Cookie Preferences</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-400" />
                  <div>
                    <h4 className="font-medium text-white">Essential Cookies</h4>
                    <p className="text-sm text-zion-slate-light">Required for website functionality</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.essential}
                    disabled
                    className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span className="text-zion-slate-light text-sm">Always Active</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-blue-400" />
                  <div>
                    <h4 className="font-medium text-white">Preference Cookies</h4>
                    <p className="text-sm text-zion-slate-light">Remember your settings and choices</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.preferences}
                  onChange={() => handleCookieChange('preferences')}
                  className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <div>
                    <h4 className="font-medium text-white">Analytics Cookies</h4>
                    <p className="text-sm text-zion-slate-light">Help us improve website performance</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={() => handleCookieChange('analytics')}
                  className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-zion-slate-light/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  <div>
                    <h4 className="font-medium text-white">Marketing Cookies</h4>
                    <p className="text-sm text-zion-slate-light">Deliver relevant content and ads</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={() => handleCookieChange('marketing')}
                  className="w-4 h-4 text-zion-cyan bg-zion-slate-dark border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={acceptAll}
                className="px-6 py-3 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="px-6 py-3 bg-zion-slate-light/20 text-zion-slate-light font-medium rounded-lg hover:bg-zion-slate-light/30 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={savePreferences}
                className="px-6 py-3 bg-zion-blue text-white font-medium rounded-lg hover:bg-zion-blue/90 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </motion.div>

        {/* Privacy Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <div className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Information</h4>
                    <p className="text-sm text-zion-slate-light">
                      You have the right to know what personal data we collect and how we use it.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Access</h4>
                    <p className="text-sm text-zion-slate-light">
                      You can request a copy of your personal data that we hold.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Rectification</h4>
                    <p className="text-sm text-zion-slate-light">
                      You can request correction of inaccurate personal data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Erasure</h4>
                    <p className="text-sm text-zion-slate-light">
                      You can request deletion of your personal data in certain circumstances.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Portability</h4>
                    <p className="text-sm text-zion-slate-light">
                      You can request transfer of your data to another service provider.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Right to Object</h4>
                    <p className="text-sm text-zion-slate-light">
                      You can object to processing of your data for marketing purposes.
                    </p>
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
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Cookies?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            If you have any questions about our cookie policy or how we use your data, 
            please don't hesitate to contact our privacy team.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Contact Privacy Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}
