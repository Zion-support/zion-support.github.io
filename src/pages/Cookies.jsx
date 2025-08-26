import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Shield, Eye, Database, Globe, CheckCircle, XCircle } from 'lucide-react';

export default function Cookies() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Authentication', 'Security', 'Session management', 'Load balancing'],
      required: true
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information.',
      examples: ['Page views', 'User behavior', 'Performance metrics', 'Error tracking'],
      required: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Remarketing'],
      required: false
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization such as language preferences and form data.',
      examples: ['Language settings', 'Form preferences', 'User preferences', 'Customization'],
      required: false
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_gid', '_gat'],
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising and remarketing services',
      cookies: ['_gads', '_gac'],
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and conversion tracking',
      cookies: ['_fbp', '_fbc'],
      privacyPolicy: 'https://www.facebook.com/policy.php'
    },
    {
      name: 'LinkedIn Insight',
      purpose: 'Professional network advertising and analytics',
      cookies: ['li_sugr', 'li_mc'],
      privacyPolicy: 'https://www.linkedin.com/legal/privacy-policy'
    }
  ];

  const handleCookieToggle = (cookieType) => {
    if (cookieType === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save preferences to localStorage or send to server
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
  };

  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group Privacy & Data" 
        description="Learn about our use of cookies, manage your preferences, and understand how we protect your privacy." 
        canonical="/cookies" 
        url="https://ziontechgroup.com/cookies"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Learn about how we use cookies, manage your preferences, and understand 
              our commitment to protecting your privacy.
            </p>
          </div>

          {/* What Are Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What Are Cookies?
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                  <p className="text-zion-slate-light text-lg leading-relaxed">
                    We use cookies responsibly and only for purposes that enhance your experience 
                    while respecting your privacy and data protection rights.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cookie className="w-16 h-16 text-zion-cyan" />
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Cookies help make your experience better
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type) => (
                <div key={type.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {type.name}
                    </h3>
                    {type.required ? (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        Required
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  
                  <p className="text-zion-slate-light text-sm mb-4">
                    {type.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!type.required && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Enable cookies</span>
                      <button
                        onClick={() => handleCookieToggle(type.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          cookiePreferences[type.id] ? 'bg-zion-cyan' : 'bg-zion-blue-light'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            cookiePreferences[type.id] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Third Party Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Third-Party Services
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <p className="text-zion-slate-light text-center mb-8">
                We work with trusted third-party services that may also set cookies on your device.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {thirdPartyServices.map((service, index) => (
                  <div key={index} className="border border-zion-blue-light rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-3">
                      {service.purpose}
                    </p>
                    <div className="mb-3">
                      <span className="text-zion-slate-light text-xs">Cookies:</span>
                      <div className="text-white text-xs font-mono mt-1">
                        {service.cookies.join(', ')}
                      </div>
                    </div>
                    <a
                      href={service.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                    >
                      Privacy Policy →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Manage Your Cookie Preferences
            </h2>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6 mb-8">
                  {cookieTypes.map((type) => (
                    <div key={type.id} className="flex items-center justify-between p-4 bg-zion-blue-light/20 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{type.name}</h4>
                        <p className="text-zion-slate-light text-sm">{type.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {type.required ? (
                          <span className="text-blue-400 text-sm">Always Active</span>
                        ) : (
                          <>
                            <span className="text-zion-slate-light text-sm">
                              {cookiePreferences[type.id] ? 'Enabled' : 'Disabled'}
                            </span>
                            <button
                              onClick={() => handleCookieToggle(type.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                cookiePreferences[type.id] ? 'bg-zion-cyan' : 'bg-zion-blue-light'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  cookiePreferences[type.id] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-all duration-300 font-medium"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  How to Control Cookies
                </h3>
                <ul className="space-y-3 text-zion-slate-light text-sm">
                  <li>• Use our cookie preference manager above</li>
                  <li>• Adjust your browser settings</li>
                  <li>• Use browser extensions for cookie control</li>
                  <li>• Contact us for assistance</li>
                </ul>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Data Protection
                </h3>
                <ul className="space-y-3 text-zion-slate-light text-sm">
                  <li>• We never sell your personal data</li>
                  <li>• Cookies are encrypted and secure</li>
                  <li>• Regular privacy audits conducted</li>
                  <li>• GDPR and CCPA compliant</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                If you have questions about our cookie policy or need help managing your preferences, 
                our privacy team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Contact Privacy Team
                </Link>
                <Link to="/privacy" className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
