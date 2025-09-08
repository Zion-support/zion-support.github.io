import React from 'react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-300">
              Cookies can be either "session cookies" (which are deleted when you close your browser) 
              or "persistent cookies" (which remain on your device for a set period of time).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">3.1 Essential Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies are necessary for the website to function and cannot be switched off. 
              They include cookies that enable basic functions like page navigation, access to secure areas, 
              and form submissions.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">3.2 Performance Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve 
              the performance of our site. They help us know which pages are popular and which are not.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">3.3 Functional Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. 
              They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3">3.4 Marketing Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies may be set through our site by our advertising partners. They may be used 
              by these companies to build a profile of your interests and show you relevant advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              Our website may use third-party services that place cookies on your device. These services include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Stripe:</strong> For payment processing and security</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              <li><strong>Advertising Networks:</strong> For relevant advertising content</li>
            </ul>
            <p className="text-gray-300">
              These third-party services have their own privacy policies and cookie practices. 
              We encourage you to review their policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">
              <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
              <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
              <li><strong>Third-Party Opt-Out:</strong> Opt out of specific third-party services</li>
              <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
            </ul>
            <p className="text-gray-300">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration</h2>
            <p className="text-gray-300 mb-4">
              The duration for which cookies are stored on your device depends on their type:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period (usually 30 days to 2 years)</li>
              <li><strong>Essential Cookies:</strong> May persist for longer periods to maintain functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the updated policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-600">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> privacy@ziontechgroup.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Subject Line:</strong> Cookie Policy Inquiry
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> Zion Tech Group, Privacy Team
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Additional Resources</h2>
            <p className="text-gray-300 mb-4">
              For more information about cookies and how to manage them, you may visit:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">All About Cookies</a> - Comprehensive information about cookies</li>
              <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Your Online Choices</a> - European Interactive Digital Advertising Alliance</li>
              <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Network Advertising Initiative</a> - Digital advertising self-regulation</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
