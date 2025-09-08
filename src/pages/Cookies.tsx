import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  Calendar,
  Info
} from 'lucide-react';

const Cookies: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Authentication", "Security", "Session management"],
      duration: "Session or 1 year",
      necessary: true
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Page views", "User behavior", "Performance metrics"],
      duration: "2 years",
      necessary: false
    },
    {
      type: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "User settings", "Form data"],
      duration: "1 year",
      necessary: false
    },
    {
      type: "Marketing Cookies",
      description: "Used for advertising and marketing purposes",
      examples: ["Targeted ads", "Social media integration", "Campaign tracking"],
      duration: "1 year",
      necessary: false
    }
  ];

  const cookieManagement = [
    {
      title: "Browser Settings",
      description: "Control cookies through your browser preferences",
      icon: Settings
    },
    {
      title: "Cookie Consent",
      description: "Manage preferences through our cookie banner",
      icon: Cookie
    },
    {
      title: "Third-party Opt-out",
      description: "Opt out of third-party tracking services",
      icon: Shield
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      cookies: ["_ga", "_gid", "_gat"]
    },
    {
      service: "Google Ads",
      purpose: "Advertising and conversion tracking",
      cookies: ["_gads", "_gac"]
    },
    {
      service: "Social Media",
      purpose: "Social media integration and sharing",
      cookies: ["fbp", "li_sugr"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Cookies Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience. Understand cookie types, management options, and your privacy choices."
        keywords="cookies policy, cookie management, privacy, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cookies Policy
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Learn how we use cookies to enhance your browsing experience and improve our website performance.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-5 w-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience and understand how you use our site.
            </p>
            <p className="text-gray-300">
              This policy explains what cookies we use, why we use them, and how you can manage your cookie preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{cookie.type}</h3>
                  {cookie.necessary && (
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Essential
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{cookie.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-300">• {example}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-400">
                  Duration: {cookie.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieManagement.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-party Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Third-party Cookies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{service.service}</h3>
                <p className="text-gray-300 mb-4">{service.purpose}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Cookies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.cookies.map((cookie, idx) => (
                      <span key={idx} className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-xs">
                        {cookie}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Cookie Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Accept or decline non-essential cookies</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Withdraw consent at any time</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Delete existing cookies</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Set browser preferences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 inline-block">
            <div className="flex items-center justify-center">
              <Info className="h-8 w-8 text-cyan-400 mr-3" />
              <div className="text-left">
                <p className="text-white font-semibold">Email: privacy@ziontechgroup.com</p>
                <p className="text-gray-300">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Manage Your Privacy
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Take control of your cookie preferences and browsing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Cookie Settings
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;