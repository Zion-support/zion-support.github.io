import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, EyeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-600/20 rounded-full">
                <ShieldCheckIcon className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <EyeIcon className="h-8 w-8 text-blue-400 mr-3" />
                Information We Collect
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Company name and job title</li>
                  <li>• Business requirements and project details</li>
                  <li>• Communication preferences</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400 mt-6">Technical Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Usage patterns and analytics data</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <LockClosedIcon className="h-8 w-8 text-green-400 mr-3" />
                How We Use Your Information
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <ul className="space-y-3 text-gray-300">
                  <li>• Provide and improve our services</li>
                  <li>• Communicate with you about our services</li>
                  <li>• Process your requests and transactions</li>
                  <li>• Send you relevant updates and newsletters</li>
                  <li>• Analyze usage patterns to enhance user experience</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud and security threats</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Information Sharing and Disclosure</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                  <li>• With trusted service providers who assist in our operations</li>
                  <li>• In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Security</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law. When we no 
                  longer need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Rights and Choices</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Access and review your personal information</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to processing of your data</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Cookies and Tracking Technologies</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience and analyze 
                  website usage. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-300">
                  For more detailed information about our use of cookies, please see our{' '}
                  <Link to="/cookies" className="text-blue-400 hover:text-blue-300 underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Third-Party Services</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Our website may contain links to third-party services and integrate with external platforms. 
                  We are not responsible for the privacy practices of these third parties. We encourage you 
                  to review their privacy policies before providing any personal information.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-3xl font-bold mb-6">International Data Transfers</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  Your personal information may be transferred to and processed in countries other than your 
                  own. We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  Our services are not intended for children under the age of 16. We do not knowingly collect 
                  personal information from children under 16. If you believe we have collected such information, 
                  please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last updated" date.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
                  <p>Address: Zion Tech Group, Global Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're committed to transparency and protecting your privacy. Contact us if you have any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;