import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, EyeOff, CheckCircle, XCircle, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  necessary: boolean;
  cookies: string[];
  purpose: string;
}

const Cookies: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieCategories: CookieCategory[] = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function properly and cannot be disabled.',
      necessary: true,
      cookies: ['session_id', 'csrf_token', 'auth_token', 'language'],
      purpose: 'Authentication, security, and basic website functionality'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: ['_ga', '_gid', '_gat', 'analytics_id', 'page_views'],
      purpose: 'Website analytics, performance monitoring, and user behavior insights'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver personalized advertisements and track marketing campaigns.',
      necessary: false,
      cookies: ['ad_id', 'campaign_tracker', 'user_preferences', 'retargeting'],
      purpose: 'Advertising, retargeting, and marketing campaign optimization'
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: ['theme_preference', 'language_choice', 'user_settings', 'feature_flags'],
      purpose: 'User preferences, enhanced features, and personalization'
    }
  ];

  const handleCookieToggle = (category: string) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save to localStorage and send to server
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how Zion Tech Group uses cookies to enhance your browsing experience 
              and provide personalized services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cookie Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-gray-300">
                We use cookies to make our website work properly, improve its functionality, 
                and provide you with relevant content and advertisements.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Cookie className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6">
          {cookieCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-white mr-3">
                      {category.name}
                    </h3>
                    {category.necessary && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        Always Active
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-3">{category.description}</p>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong>Purpose:</strong> {category.purpose}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.cookies.map((cookie, cookieIndex) => (
                      <span
                        key={cookieIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full font-mono"
                      >
                        {cookie}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="ml-6 flex items-center">
                  {category.necessary ? (
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      <span className="text-sm font-medium">Required</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCookieToggle(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        cookiePreferences[category.id as keyof typeof cookiePreferences]
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      {cookiePreferences[category.id as keyof typeof cookiePreferences] ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Enabled
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Disabled
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Management */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Manage Your Cookie Preferences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={acceptAll}
              className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Accept All Cookies
            </button>
            
            <button
              onClick={rejectAll}
              className="flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
            >
              <XCircle className="w-5 h-5 mr-2" />
              Reject Non-Essential
            </button>
            
            <button
              onClick={savePreferences}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Settings className="w-5 h-5 mr-2" />
              Save Preferences
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Your preferences will be saved and applied to this website. You can change these 
              settings at any time by visiting this page again.
            </p>
            <p className="text-sm text-gray-400">
              Note: Some features of our website may not function properly if you disable certain cookies.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Data Protection</h3>
            </div>
            <p className="text-gray-300 mb-4">
              We are committed to protecting your privacy and ensuring the security of your personal data. 
              Our cookie usage complies with applicable data protection laws and regulations.
            </p>
            <Link
              to="/privacy"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Read Privacy Policy
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Info className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Third-Party Cookies</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Some cookies on our website are set by third-party services such as Google Analytics, 
              advertising networks, and social media platforms. These services have their own privacy policies.
            </p>
            <p className="text-sm text-gray-400">
              We recommend reviewing the privacy policies of these third-party services for more information.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                How long do cookies stay on my device?
              </h3>
              <p className="text-gray-300">
                Session cookies are deleted when you close your browser, while persistent cookies can remain 
                for up to 2 years depending on the type and purpose.
              </p>
            </div>
            
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I delete cookies from my device?
              </h3>
              <p className="text-gray-300">
                Yes, you can delete cookies through your browser settings. However, this may affect 
                the functionality of our website and you may need to re-enter certain information.
              </p>
            </div>
            
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you use cookies for advertising?
              </h3>
              <p className="text-gray-300">
                We may use cookies to deliver personalized advertisements and track the effectiveness 
                of our marketing campaigns. You can opt out of these cookies using the preferences above.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                How do I contact you about cookies?
              </h3>
              <p className="text-gray-300">
                If you have questions about our cookie policy or how we use cookies, please contact us 
                through our support channels or email us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help you understand how we use cookies and protect your data. 
            Contact us for more information or to exercise your data rights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Privacy Team
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Info className="w-5 h-5 mr-2" />
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
