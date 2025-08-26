import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-300">
                These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity and data protection</li>
                <li>IT infrastructure management</li>
                <li>Digital transformation consulting</li>
                <li>Custom software development</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with the proper functioning of our services</li>
                <li>Report any security vulnerabilities or issues</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-300">
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </p>
              <p className="text-gray-300">
                By using our services, you consent to the collection and use of information as outlined in our{' '}
                <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">6. Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to provide reliable and uninterrupted services, but we cannot guarantee that our services will be available at all times. We may:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Perform maintenance and updates</li>
                <li>Experience technical difficulties</li>
                <li>Modify or discontinue services</li>
                <li>Limit access during peak usage</li>
              </ul>
              <p className="text-gray-300">
                We will provide reasonable notice for planned maintenance and service changes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Reputational damage</li>
              </ul>
              <p className="text-gray-300">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">8. Indemnification</h2>
              <p className="text-gray-300">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">9. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time.
              </p>
              <p className="text-gray-300">
                Upon termination, your right to use our services will cease immediately, and we may delete or deactivate your account and related information.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300">
                Any disputes arising from these terms or your use of our services shall be resolved in the courts of San Francisco County, California.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">11. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group reserves the right to modify these terms at any time. We will notify users of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Posting updated terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our platform</li>
              </ul>
              <p className="text-gray-300">
                Your continued use of our services after such changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">legal@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> Zion Tech Group, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our legal team is available to clarify any terms or answer questions about our services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Contact Legal Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;