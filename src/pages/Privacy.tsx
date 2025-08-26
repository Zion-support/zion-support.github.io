import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Information about your business needs and requirements</li>
                <li>Communication preferences</li>
                <li>Resume or CV information (for job applications)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience, analyze website usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Sending newsletters and marketing communications (with your consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-gray-600">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation District, CA 90210
                </p>
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> dpo@ziontechgroup.com
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. California Privacy Rights</h2>
              <p className="text-gray-600 mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided above.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. GDPR Compliance (EU Users)</h2>
              <p className="text-gray-600 mb-4">
                For users in the European Union, we process your personal information in accordance with the General Data Protection Regulation (GDPR). You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Request access to your personal data</li>
                <li>Request rectification of inaccurate data</li>
                <li>Request erasure of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Privacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're committed to transparency and protecting your privacy. Contact us if you have any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Email Privacy Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;