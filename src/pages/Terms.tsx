import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <DocumentTextIcon className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's services and website. 
              Please read them carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <ScaleIcon className="h-8 w-8 text-green-400 mr-3" />
                Acceptance of Terms
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Description of Services</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology consulting and implementation services including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI and machine learning solutions</li>
                  <li>• Quantum computing services</li>
                  <li>• Cybersecurity and IT infrastructure</li>
                  <li>• Digital transformation consulting</li>
                  <li>• Custom software development</li>
                  <li>• Technology strategy and planning</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-3xl font-bold mb-6">User Responsibilities</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Not attempt to reverse engineer or hack our systems</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Report any security vulnerabilities you discover</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Intellectual Property Rights</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  All content, features, and functionality on our website and in our services, including but 
                  not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-300">
                  You may not reproduce, distribute, modify, or create derivative works without our express 
                  written consent.
                </p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Privacy and Data Protection</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                </p>
                <p className="text-gray-300">
                  By using our services, you consent to the collection and use of information as outlined in 
                  our{' '}
                  <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Availability</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted 
                  access. Our services may be temporarily unavailable due to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scheduled maintenance and updates</li>
                  <li>• Technical issues or system failures</li>
                  <li>• Force majeure events</li>
                  <li>• Network or infrastructure problems</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We will provide reasonable notice for scheduled maintenance when possible.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Service interruptions</li>
                  <li>• Third-party actions or content</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Disclaimers</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either 
                  express or implied. We disclaim all warranties including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Warranties of merchantability</li>
                  <li>• Fitness for a particular purpose</li>
                  <li>• Non-infringement</li>
                  <li>• Accuracy or completeness of information</li>
                </ul>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Indemnification</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, 
                  and agents from and against any claims, damages, losses, and expenses arising from your use 
                  of our services or violation of these terms.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Termination</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services at any time, with or without cause, 
                  with or without notice, effective immediately.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use the services will cease immediately, and we may delete 
                  or deactivate your account and related information.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Governing Law and Dispute Resolution</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to conflict of law principles.
                </p>
                <p className="text-gray-300">
                  Any disputes arising from these terms or your use of our services shall be resolved through 
                  binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Changes to Terms</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes by posting the updated terms on our website and updating the "Last updated" date. 
                  Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
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

export default Terms;