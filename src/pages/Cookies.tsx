import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye } from 'lucide-react';

const Cookies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">
                Cookie
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: January 1, 2024
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
              
              <h2>How We Use Cookies</h2>
              <p>
                We use cookies for several purposes:
              </p>
              <ul>
                <li>Essential cookies to ensure our website functions properly</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>Marketing cookies to deliver relevant advertisements</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              
              <h2>Types of Cookies We Use</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                  <p className="text-gray-300">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Eye className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are used to track visitors across websites for advertising purposes.
                  </p>
                </div>
              </div>
              
              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              
              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services that appear on our pages. We do not control these cookies and you should check the relevant third-party website for more information about these.
              </p>
              
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@ziontechgroup.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 364 E Main St STE 1008, Middletown DE 19709</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cookies;