import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <Cookie className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing 
              experience and improve our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Are Cookies?
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-400">
              Cookies are essential for modern web applications and help make your browsing experience 
              more convenient and personalized.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{type.title}</h3>
                <p className="text-gray-300 text-center mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Third-Party Services
          </h2>
          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{service.name}</h3>
                <p className="text-gray-300 mb-2"><strong>Purpose:</strong> {service.purpose}</p>
                <p className="text-gray-400"><strong>Data Collected:</strong> {service.data}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block third-party cookies</li>
                  <li>• Clear all cookies when you close your browser</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Cookie Consent</h3>
                <p className="text-gray-300">
                  When you first visit our website, you'll see a cookie consent banner. You can choose 
                  which types of cookies you want to allow. You can change these preferences at any time 
                  by clicking the cookie settings link in our footer.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Opt-Out Options</h3>
                <p className="text-gray-300">
                  For analytics and marketing cookies, you can opt out through the respective service providers:
                </p>
                <ul className="space-y-2 text-gray-400 mt-2">
                  <li>• Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:underline">Opt-out tool</a></li>
                  <li>• Social Media: Adjust privacy settings in your social media accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <Globe className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a 
              href="/privacy" 
              className="inline-flex items-center px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
