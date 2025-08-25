import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cookie, Eye, Settings, Database, Lock } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.',
      examples: ['Authentication', 'Security', 'Session management'],
      icon: Shield,
      necessary: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: Database,
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'Theme settings', 'Form data'],
      icon: Settings,
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Social media integration', 'Advertising networks', 'Remarketing'],
      icon: Eye,
      necessary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
          </p>
        </div>

        {/* Cookie Information */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* What are Cookies */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content and advertisements.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="grid gap-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      cookie.necessary 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                        {cookie.necessary && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{cookie.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block all third-party cookies</li>
                  <li>• Clear all cookies when you close your browser</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                <p className="text-gray-300 text-sm mb-4">
                  When you first visit our website, you'll see a cookie consent banner that allows you to:
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Accept all cookies</li>
                  <li>• Accept only necessary cookies</li>
                  <li>• Customize your preferences</li>
                  <li>• Learn more about our cookie policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some cookies on our website are set by third-party services that we use to enhance functionality and analyze usage. These services include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Hotjar, and other analytics tools to understand user behavior and improve our services.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Social Media</h4>
                <p className="text-gray-300 text-sm">LinkedIn, Twitter, and other social platforms for sharing and engagement features.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Advertising networks and marketing automation platforms for personalized content delivery.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Security Services</h4>
                <p className="text-gray-300 text-sm">Cloudflare, reCAPTCHA, and other security services to protect against threats.</p>
              </div>
            </div>
          </div>

          {/* Updates and Contact */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Updates and Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Policy Updates</h3>
                <p className="text-gray-300 text-sm">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">Email: <span className="text-blue-400">kleber@ziontechgroup.com</span></p>
                  <p className="text-gray-300">Phone: <span className="text-blue-400">+1 302 464 0950</span></p>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Contact Form →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover how Zion Tech Group can transform your business with cutting-edge AI solutions and innovative technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}