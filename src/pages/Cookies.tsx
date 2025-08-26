import React from 'react';
<<<<<<< HEAD
import SEO from '../SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Shield, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      necessary: true
    },
    {
      title: 'Performance Cookies',
      icon: Settings,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Analytics cookies', 'Performance monitoring', 'Error tracking'],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      icon: Eye,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Feature preferences'],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: CircleDot,
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Advertising cookies', 'Social media cookies', 'Tracking cookies'],
      necessary: false
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while using the website',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'auth_token',
      purpose: 'Keeps you logged in securely',
      duration: '30 days',
      type: 'Essential'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics - tracks website usage',
      duration: '2 years',
      type: 'Performance'
    },
    {
      name: '_fbp',
      purpose: 'Facebook Pixel - tracks conversions',
      duration: '3 months',
      type: 'Marketing'
    },
    {
      name: 'language',
      purpose: 'Remembers your language preference',
      duration: '1 year',
      type: 'Functional'
    }
  ];
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we use cookies to enhance your browsing experience
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website based on how you use it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Session Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Temporary cookies that are deleted when you close your browser. They help maintain your session and remember your preferences during your visit.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences across multiple visits.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Cookies set by third-party services we use, such as analytics tools, social media plugins, and advertising networks.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
                <li>Opt-out of specific types of cookies through our cookie consent banner</li>
                <li>Contact us to request changes to your cookie preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookie Consent</h2>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner. By clicking "Accept" or continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;