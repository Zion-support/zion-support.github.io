import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience." 
        keywords="cookie policy, cookies, tracking, Zion Tech Group, privacy" 
        canonical="https://ziontechgroup.com/cookies"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Cookie Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-zion-slate-light">
                Cookies can be either "session cookies" (which are deleted when you close your browser) 
                or "persistent cookies" (which remain on your device for a set period of time).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.1 Essential Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are necessary for the website to function and cannot be switched off. 
                They include cookies that enable basic functions like page navigation, access to secure areas, 
                and form submissions.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.2 Performance Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us know which pages are popular and which are not.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.3 Functional Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.4 Marketing Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies may be set through our site by our advertising partners. They may be used 
                by these companies to build a profile of your interests and show you relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                Our website may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Stripe:</strong> For payment processing and security</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For relevant advertising content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-zion-slate-light mb-4">
                You have several options for managing cookies on our website:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Visit third-party websites to opt out of their cookies</li>
                <li><strong>Contact Us:</strong> Reach out to our privacy team for assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration</h2>
              <p className="text-zion-slate-light mb-4">
                The duration for which cookies are stored on your device depends on their type:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a set period (usually 30 days to 2 years)</li>
                <li><strong>Essential Cookies:</strong> May persist for the duration of your session</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                While you can disable cookies, please note that doing so may affect the functionality of our website:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li>Some features may not work properly</li>
                <li>Your preferences may not be saved</li>
                <li>Personalized content may not be available</li>
                <li>Analytics and performance monitoring may be limited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify you of significant changes through our website or email</li>
                <li>Provide you with an opportunity to review and accept the updated policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-zinc-800/30 rounded-lg p-6">
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Additional Resources</h2>
              <p className="text-zion-slate-light mb-4">
                For more information about cookies and online privacy, you may find these resources helpful:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">Network Advertising Initiative</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
