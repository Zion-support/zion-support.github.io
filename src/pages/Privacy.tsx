import React from 'react';
import { Shield, Lock, Eye, Database, Server, Users, Phone, Mail, MapPin } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your privacy and data security are our top priorities. Learn how we protect your information.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version: 2.0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information We Collect</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <Database className="w-5 h-5 text-cyan-500 mr-2" />
                  Personal Information
                </h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Name and contact information</li>
                  <li>• Company and job title</li>
                  <li>• Email address and phone number</li>
                  <li>• Professional background and expertise</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <Server className="w-5 h-5 text-cyan-500 mr-2" />
                  Technical Information
                </h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• Website usage data and analytics</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <Users className="w-5 h-5 text-cyan-500 mr-2" />
                  Service Usage Data
                </h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Service preferences and settings</li>
                  <li>• Communication history</li>
                  <li>• Support requests and interactions</li>
                  <li>• Feedback and testimonials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Service Delivery</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and payments</li>
                  <li>• Deliver customer support</li>
                  <li>• Send service updates and notifications</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Business Operations</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Improve our services and user experience</li>
                  <li>• Conduct research and analytics</li>
                  <li>• Develop new features and solutions</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• With your explicit consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and safety</li>
              <li>• With trusted service providers (under strict confidentiality agreements)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Data Security</h2>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Advanced Security Measures</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Multi-factor authentication systems</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• SOC2 Type II compliance</li>
                <li>• ISO 27001 information security standards</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Your Privacy Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Access and Control</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Data Portability</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Export your data in standard formats</li>
                  <li>• Transfer data to other services</li>
                  <li>• Request data processing restrictions</li>
                  <li>• Lodge complaints with authorities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Types of Cookies We Use</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Essential Cookies</h4>
                  <p className="text-gray-300">Required for basic website functionality</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-300">Help us understand how visitors use our site</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Preference Cookies</h4>
                  <p className="text-gray-300">Remember your settings and preferences</p>
                </div>
              </div>
            </div>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Contact Us</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-500 mb-2" />
                <span className="text-white font-semibold">Phone</span>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-cyan-500 mb-2" />
                <span className="text-white font-semibold">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-cyan-500 mb-2" />
                <span className="text-white font-semibold">Address</span>
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}