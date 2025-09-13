import React from 'react';
import { SEO } from '../components/SEO';

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Cookie Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-300 mb-8 text-center">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies.
              </p>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <p className="text-slate-300 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                  <li>Essential cookies to ensure our website functions properly</li>
                  <li>Analytics cookies to understand how visitors use our site</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies to provide relevant content and advertisements</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                <p className="text-slate-300 mb-6">
                  You can control and manage cookies through your browser settings. Most browsers allow you to 
                  refuse cookies or delete them. However, disabling cookies may affect the functionality of our website.
                </p>
                
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-slate-300">
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                    privacy@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}