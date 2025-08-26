import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Settings, Info, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
      examples: ["Authentication cookies", "Session cookies", "Security cookies"],
      necessary: true
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Google Analytics", "Page view tracking", "User behavior analysis"],
      necessary: false
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "Theme settings", "Form data storage"],
      necessary: false
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Social media pixels", "Advertising networks", "Retargeting"],
      necessary: false
    }
  ];

  const cookieSettings = [
    {
      category: "Essential",
      status: "Always Active",
      description: "Required for basic website functionality",
      icon: Shield
    },
    {
      category: "Analytics",
      status: "Optional",
      description: "Help us improve our website",
      icon: Info
    },
    {
      category: "Functional",
      status: "Optional",
      description: "Enhance your browsing experience",
      icon: Settings
    },
    {
      category: "Marketing",
      status: "Optional",
      description: "Personalize advertising content",
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how we use cookies and similar technologies on our website, and how you can manage your cookie preferences."
        keywords="cookie policy, cookies, privacy, data protection, website cookies, cookie consent"
        canonicalUrl="https://ziontechgroup.com/cookies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Cookie Policy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Cookie Policy</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Learn about how we use cookies and similar technologies on our website, 
                and how you can manage your cookie preferences to protect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience and allow us to understand 
                  how you use our site.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Cookies can be either "session cookies" (which are deleted when you close your browser) 
                  or "persistent cookies" (which remain on your device for a set period of time).
                </p>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-blue-200 text-sm">
                      <strong>Note:</strong> Cookies do not contain personal information like your name, 
                      address, or phone number. They typically store technical information about your 
                      browsing session.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Cookie Security</h3>
                  <p className="text-slate-300">
                    We use secure, encrypted cookies and never store sensitive personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience on our website.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{cookie.name}</h3>
                    {cookie.necessary ? (
                      <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-medium rounded-full">
                        Necessary
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm font-medium rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {cookie.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Settings Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                You have control over which cookies are stored on your device. 
                Use our cookie settings panel to customize your preferences.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cookieSettings.map((setting, index) => {
                  const IconComponent = setting.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/50"
                    >
                      <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{setting.category}</h3>
                      <p className="text-sm text-slate-400 mb-3">{setting.status}</p>
                      <p className="text-xs text-slate-500">{setting.description}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Settings className="w-4 h-4 mr-2" />
                  Open Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How to Manage Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How to Manage Cookies
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Learn how to control cookies through your browser settings and our website preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Browser Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Chrome</h4>
                      <p className="text-slate-300 text-sm">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Firefox</h4>
                      <p className="text-slate-300 text-sm">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Safari</h4>
                      <p className="text-slate-300 text-sm">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Website Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cookie Consent Banner</h4>
                      <p className="text-slate-300 text-sm">
                        Use our cookie consent banner to accept or decline non-essential cookies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Settings Panel</h4>
                      <p className="text-slate-300 text-sm">
                        Access detailed cookie settings through our preferences panel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Opt-out Options</h4>
                      <p className="text-slate-300 text-sm">
                        Easily opt out of specific cookie categories at any time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 p-8">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Important Information</h2>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Essential cookies</strong> cannot be disabled as they are necessary for the website to function properly.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Disabling cookies</strong> may affect the functionality of our website and your user experience.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Third-party cookies</strong> are subject to the privacy policies of the respective third-party providers.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Cookie preferences</strong> can be updated at any time through our settings panel or your browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/privacy" 
                className="border-2 border-blue-500 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
