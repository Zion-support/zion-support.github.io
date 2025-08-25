import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, Database } from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, privacy, data protection, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Cookie</span> Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Understanding how we use cookies and similar technologies to enhance your experience on Zion Tech Group.
            </p>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Are Cookies?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We use cookies responsibly and in accordance with applicable privacy laws to ensure 
                  your data is protected while providing you with the best possible service.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Secure & Private</h3>
                <p className="text-zion-slate-light text-center">
                  All cookies are encrypted and used only for legitimate purposes to improve your experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Essential Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Required for basic website functionality and security.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Authentication</li>
                  <li>• Security</li>
                  <li>• Basic navigation</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Analytics Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Help us understand how visitors use our website.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Page views</li>
                  <li>• User behavior</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Preference Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Remember your settings and preferences for future visits.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Language settings</li>
                  <li>• Theme preferences</li>
                  <li>• Customized content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Managing Your Cookies</h2>
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all third-party cookies</li>
                    <li>• Clear all cookies when you close your browser</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-zion-cyan/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <p className="text-zion-slate-light">
                    Check your browser's help section for specific instructions on managing cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Questions About Cookies?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}