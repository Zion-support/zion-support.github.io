import React from 'react';
import SEO from '../components/SEO';

const Cookies: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how we use cookies and similar technologies on our website."
        keywords="cookie policy, cookies, privacy, data collection, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">
                  This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies when you visit our website.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Are Cookies?</h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>

                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>

                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Marketing Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Cookies</h2>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve our website's functionality and user experience</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To ensure website security and prevent fraud</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in various ways. Most web browsers allow you to refuse cookies or delete them. However, please note that disabling cookies may affect the functionality of our website.
                </p>

                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can usually find cookie settings in your browser's options or preferences menu. Look for "Privacy" or "Security" settings to manage cookies.
                </p>

                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 mb-4">
                  We may also use third-party services that set their own cookies. These include:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Advertising networks for targeted advertising</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Updates to This Policy</h2>
                <p className="text-gray-300 mb-6">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Cookie Policy, please contact us at:
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 mb-2">
                    <strong>Email:</strong> privacy@ziontechgroup.com
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-300">
                    <strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;