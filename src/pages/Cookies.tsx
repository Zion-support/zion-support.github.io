import React from 'react';
import { Link } from 'react-router-dom';
import { CakeIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';


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
=======
const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <CakeIcon className="h-12 w-12 text-orange-400" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CakeIcon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>
                <p className="text-gray-300 text-sm">
                  Stored on your device to remember your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                <p className="text-gray-300 text-sm">
                  Personalize content and improve functionality
                </p>
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="bg-zion-blue-dark rounded-lg p-8 border border-zion-blue-light">
              <p className="text-zion-slate-light mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-zion-slate-light mb-4">
                    We use cookies for several purposes:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements and content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light">
                        These cookies are necessary for the website to function and cannot be switched off. 
                        They include cookies for security, authentication, and basic site functionality.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Analytics Cookies</h3>
                      <p className="text-zion-slate-light">
                        Help us understand how visitors interact with our website by collecting and reporting 
                        information anonymously. This helps us improve our services.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple-light pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Preference Cookies</h3>
                      <p className="text-zion-slate-light">
                        Allow our website to remember information that changes the way it behaves or looks, 
                        such as your preferred language or region.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Marketing Cookies</h3>
                      <p className="text-zion-slate-light">
                        Used to track visitors across websites to display relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Some cookies on our website are set by third-party services that we use to enhance 
                    functionality, such as analytics providers, advertising networks, and social media platforms. 
                    These third parties have their own privacy policies and cookie policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-zion-slate-light mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Use your browser settings to delete or block cookies</li>
                    <li>Set your browser to ask for permission before setting cookies</li>
                    <li>Use our cookie consent manager (if available)</li>
                    <li>Contact us to update your preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Browser Settings</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Most web browsers allow you to manage cookies through their settings. You can usually find 
                    these settings in the "Options" or "Preferences" menu of your browser. Please note that 
                    disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new policy on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-zion-blue-light rounded-lg">
                    <p className="text-zion-slate-light">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Address:</strong> Zion Tech Group, San Francisco, CA<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

      {/* Types of Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Security features</li>
                <li>• Basic functionality</li>
                <li>• User authentication</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-blue-600/20 rounded-lg w-fit mb-4">
                <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Language preferences</li>
                <li>• User settings</li>
                <li>• Form data</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">
                                 <CakeIcon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies help us understand how visitors use our website.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Page views</li>
                <li>• User behavior</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-orange-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are used to deliver relevant advertisements and track marketing campaigns.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Ad targeting</li>
                <li>• Campaign tracking</li>
                <li>• Social media integration</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-cyan-600/20 rounded-lg w-fit mb-4">
                                 <Cog6ToothIcon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are set by third-party services we integrate with.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Social media</li>
                <li>• Analytics tools</li>
                <li>• Payment processors</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="p-3 bg-pink-600/20 rounded-lg w-fit mb-4">
                                 <CakeIcon className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Session Cookies</h3>
              <p className="text-gray-300 mb-4">
                These cookies are temporary and are deleted when you close your browser.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Shopping cart</li>
                <li>• Login sessions</li>
                <li>• Temporary preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie preferences</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Accept all cookies</li>
                <li>• Customize cookie preferences</li>
                <li>• Reject non-essential cookies</li>
                <li>• Learn more about our cookie policy</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Opt-Out Options</h3>
              <p className="text-gray-300 mb-4">
                For specific types of cookies, you can opt out through:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Google Analytics opt-out browser add-on</li>
                <li>• Digital Advertising Alliance opt-out</li>
                <li>• Network Advertising Initiative opt-out</li>
                <li>• Direct opt-out links in our emails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Specific Cookies We Use
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Google Analytics</h3>
              <p className="text-gray-300 mb-3">
                We use Google Analytics to understand how visitors interact with our website.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> _ga, _gid, _gat</p>
                <p><strong>Purpose:</strong> Website analytics and performance monitoring</p>
                <p><strong>Duration:</strong> Up to 2 years</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Authentication</h3>
              <p className="text-gray-300 mb-3">
                These cookies help us maintain your login session and security preferences.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> auth_token, session_id</p>
                <p><strong>Purpose:</strong> User authentication and session management</p>
                <p><strong>Duration:</strong> Session or up to 30 days</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Preferences</h3>
              <p className="text-gray-300 mb-3">
                These cookies remember your preferences and settings for a better user experience.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong>Cookies:</strong> theme, language, notifications</p>
                <p><strong>Purpose:</strong> User preferences and customization</p>
                <p><strong>Duration:</strong> Up to 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Updates and Contact
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Policy Updates</h3>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
                <p>Address: Zion Tech Group, Global Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Cookie Settings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help you understand and manage your cookie preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
=======
      </main>
      <Footer />
    </div>
  );
}
=======
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
              <p className="text-zion-slate-light">
                These third-party services have their own privacy policies and cookie practices. 
                We encourage you to review their policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-zion-slate-light mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Opt out of specific third-party services</li>
                <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
              </ul>
              <p className="text-zion-slate-light">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration</h2>
              <p className="text-zion-slate-light mb-4">
                The duration for which cookies are stored on your device depends on their type:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period (usually 30 days to 2 years)</li>
                <li><strong>Essential Cookies:</strong> May persist for longer periods to maintain functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <p className="text-zion-slate-light mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-zion-slate-light mb-2">
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
                </p>
                <p className="text-zion-slate-light">
                  <strong>Address:</strong> Zion Tech Group, Privacy Team
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Additional Resources</h2>
              <p className="text-zion-slate-light mb-4">
                For more information about cookies and how to manage them, you may visit:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">All About Cookies</a> - Comprehensive information about cookies</li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Your Online Choices</a> - European Interactive Digital Advertising Alliance</li>
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Network Advertising Initiative</a> - Digital advertising self-regulation</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
